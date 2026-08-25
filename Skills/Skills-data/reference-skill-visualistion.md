# Data-to-Decision Artifact Studio — Reference

## Table of Contents

1. [Data Quality Audit](#data-quality-audit)
2. [Metrics Library](#metrics-library)
3. [Derived Metric Rules](#derived-metric-rules)
4. [Visualization Selection](#visualization-selection)
5. [Chart Rejection Patterns](#chart-rejection-patterns)
6. [Insight Detection Patterns](#insight-detection-patterns)
7. [Motion Design System](#motion-design-system)
8. [Accessibility Standards](#accessibility-standards)
9. [Responsive Layout](#responsive-layout)
10. [Anti-Pattern Detection](#anti-pattern-detection)
11. [Dashboard Density Scoring](#dashboard-density-scoring)
12. [Narrative Quality Scoring](#narrative-quality-scoring)
13. [Full QA Checklist](#full-qa-checklist)

---

## Data Quality Audit

### Completeness
- Missing values per column (count + %)
- Missing dates or time periods (gaps in time series)
- Missing category members (e.g., regions present in one period but not another)
- Missing periods in longitudinal data

### Consistency
- Category spelling variants (e.g., "US", "U.S.", "United States")
- Capitalization inconsistencies
- Unit mismatches (e.g., some rows in USD, others in EUR)
- Date format inconsistencies (MM/DD/YYYY vs YYYY-MM-DD)
- Currency symbol inconsistencies

### Integrity
- Duplicate IDs or transaction records
- Impossible values (negative quantities, future dates, ages >150)
- Percentages exceeding 100% where not appropriate
- Totals that don't reconcile with component rows
- Referential integrity failures (IDs in fact table not present in dimension table)

### Statistical Anomalies
- Extreme outliers (>3 SD from mean, or business-context-defined threshold)
- Sudden spikes or drops (>2× typical period-over-period change)
- Structural breaks (sustained shift in mean or variance)
- Unusual distributions (bimodal when unimodal expected)
- Zero-inflation (unusually high frequency of exact zeros)

**Rule:** Flag anomalies as analytical signals. Do not silently remove them. Ask whether they represent data errors or real events before treating them as either.

---

## Metrics Library

### Marketing Metrics
| Metric | Formula | Unit |
|---|---|---|
| Impressions | SUM(impressions) | count |
| Clicks | SUM(clicks) | count |
| CTR | Clicks / Impressions | % |
| Spend | SUM(spend) | currency |
| Conversions | SUM(conversions) | count |
| Conversion Rate | Conversions / Clicks | % |
| CPA | Spend / Conversions | currency |
| CPM | (Spend / Impressions) × 1000 | currency |
| ROAS | Revenue / Spend | ratio |
| Revenue | SUM(revenue) | currency |

### Sales Metrics
| Metric | Formula | Unit |
|---|---|---|
| Total Revenue | SUM(revenue) | currency |
| MoM Growth | (Current − Previous) / Previous × 100 | % |
| YoY Growth | (This Year − Last Year) / Last Year × 100 | % |
| Avg Order Value | Revenue / Orders | currency |
| Win Rate | Won Deals / Total Deals | % |
| Pipeline Value | SUM(open deal value) | currency |
| Quota Attainment | Actual / Target × 100 | % |
| Deal Velocity | Avg days from lead to close | days |

### Customer Metrics
| Metric | Formula | Unit |
|---|---|---|
| Retention Rate | Retained / Prior Cohort × 100 | % |
| Churn Rate | Churned / Start of Period × 100 | % |
| LTV | Avg Revenue per Customer × Avg Lifetime | currency |
| CAC | Sales & Marketing Spend / New Customers | currency |
| LTV:CAC | LTV / CAC | ratio |
| NPS | % Promoters − % Detractors | score |
| CSAT | Avg satisfaction rating | score |

### Financial Metrics
| Metric | Formula | Unit |
|---|---|---|
| Gross Margin | (Revenue − COGS) / Revenue × 100 | % |
| Operating Margin | Operating Income / Revenue × 100 | % |
| Net Margin | Net Income / Revenue × 100 | % |
| Burn Rate | Monthly cash outflow | currency |
| Runway | Cash / Monthly Burn | months |
| MoM Revenue Growth | (Current − Previous) / Previous × 100 | % |

### Operations Metrics
| Metric | Formula | Unit |
|---|---|---|
| Throughput | Units processed / Time period | count/period |
| Cycle Time | Avg time per unit | time |
| Error Rate | Errors / Total × 100 | % |
| Utilization | Active time / Available time × 100 | % |
| SLA Compliance | Within SLA / Total × 100 | % |

---

## Derived Metric Rules

Claude may calculate derived metrics **only when all source fields are present and unambiguous.**

Always:
- Display the formula alongside the result when ambiguity is possible
- Show the denominator explicitly (e.g., "14% of 3,204 sessions")
- Note any filters applied before the calculation
- Flag when sample size is too small to be reliable (suggest threshold: n < 30 for rates)

Never:
- Infer a denominator that isn't in the data
- Calculate a rate when the eligible population is undefined
- Present a growth rate when only one period exists
- Calculate ROAS or CPA without both spend and revenue/conversion data present

---

## Visualization Selection

### By Analytical Question

**Trend over time**
- Preferred: Line chart, Area chart, Column chart (for discrete periods), Small multiples
- Use area when cumulative total matters; use columns when discrete periods are the unit of analysis

**Ranking / comparison of categories**
- Preferred: Sorted horizontal bar chart, Dot plot, Lollipop chart
- Sort descending by default; only sort alphabetically if the user requests it

**Distribution**
- Preferred: Histogram (continuous), Box plot (comparing distributions), Strip plot (small n)
- Avoid bar charts for distributions — they obscure shape

**Relationship / correlation**
- Preferred: Scatter plot, Bubble chart (third dimension), Connected scatter (time)
- Always show n; flag when n < 30

**Part-to-whole composition**
- Preferred: Stacked bar (absolute), 100% stacked bar (share), Treemap (hierarchy)
- Avoid pie charts when categories > 4 or values are close

**Funnel / conversion sequence**
- Preferred: Stage bar chart with conversion rates between stages, Funnel chart
- Always show absolute numbers alongside conversion rates

**Heatmap / matrix**
- Preferred: Color-encoded matrix for time × category, cohort retention, or correlation
- Always include a legend; never rely on color alone

**Geographic**
- Use maps **only** when spatial location itself is analytically meaningful (e.g., logistics, regional market penetration where proximity matters)
- Otherwise prefer sorted bar charts by region

---

## Chart Rejection Patterns

| Situation | Reject | Prefer |
|---|---|---|
| >5 categories in pie | Pie | Sorted horizontal bar |
| Long category names | Vertical bar | Horizontal bar |
| Sparse time series (<6 points) | Continuous line | Dot + line or column |
| Too many series on one chart (>5) | Multi-line | Small multiples |
| Precise comparison required | Bubble / radar | Bar or dot plot |
| Geography not analytically relevant | Map | Ranked bar by region |
| Two metrics on wildly different scales | Dual-axis line | Two separate charts |
| Correlation, n < 30 | Scatter (unlabeled) | Scatter + uncertainty note |
| Percentages that don't sum to 100% | Stacked bar as % | Grouped bar or separate |
| Only one data point per category | Trend line | Single bar or KPI card |

---

## Insight Detection Patterns

### Trend Signals
- Increasing, Decreasing, Stable, Accelerating, Decelerating
- Seasonal (recurring pattern at fixed intervals)
- Volatile (high variance without clear trend)
- Structural break (sustained shift — not just a spike)

### Comparison Signals
- Best / Worst performer in cohort
- Above average / Below average
- Target gap (positive or negative)
- Period-over-period change (MoM, YoY, QoQ)
- Benchmark gap (vs. industry or internal standard)

### Concentration Signals
- Pareto: what % of revenue/conversions comes from top 20% of segments?
- Regional / channel / customer dependency (>60% from single source = risk signal)
- Improving concentration vs. diversifying trend

### Anomaly Signals
- Unexpected spike (single period, not trend)
- Unexpected decline (single period)
- Missing data period (gap in time series)
- Category appearing or disappearing
- Outlier entity (one customer, region, or campaign behaving very differently)

### Opportunity Signals
- High growth + high efficiency (scale this)
- Below average performance + strategically important segment (investigate)
- Untapped or underweighted segment with positive trend
- Cost efficiency improving faster than volume — potential margin leverage

### "Where Should I Look?" Priority Ranking
Rank findings by: `(magnitude of change) × (strategic importance) × (actionability)`

Present as:
```
Priority 1: [entity] — [signal] — [why it matters]
Priority 2: [entity] — [signal] — [why it matters]
Priority 3: [entity] — [signal] — [why it matters]
```

---

## Motion Design System

### Four Motion Categories

**Entrance** — introducing new information into view
- Elements that appear: fade-in + subtle upward translate
- Charts that build: left-to-right for time series; bottom-up for bars

**Transformation** — one state becoming another
- KPI value updates: number counter animation
- Chart reconfiguration on filter: data-preserving spatial continuity where possible (elements morph rather than disappear/reappear)

**Focus** — drawing attention to important information
- Highlight: pulse or brightness increase on selected element
- Annotation: label slides in from element being annotated

**Navigation** — moving between analytical views
- Scene transition: cross-fade with slight scale
- Drilldown: zoom-in or slide-in panel
- Return: reverse of entry motion

### Timing Reference
| Type | Duration | Use for |
|---|---|---|
| Fast | 0.15–0.3s | Hover states, tooltips, small UI feedback |
| Normal | 0.3–0.7s | Chart updates, filter application, KPI updates |
| Narrative | 0.7–1.5s | Presenting a new insight, annotation reveal |
| Major transition | 1–2s | Scene changes in Story Mode |

### Animation Controls (always include)
- **Pause** — stop current animation
- **Replay** — restart from beginning
- **Skip** — jump to end state immediately
- **Next / Previous** — for Story Mode scenes
- **Reduced motion** — disables all non-essential animation; data remains visible

### Data-Preserving Animation Principle
When filtering or changing a metric, preserve spatial relationships where possible:
- A bar that was "Campaign A" should morph to its new value, not disappear and reappear
- Elements that exit should animate out; new elements animate in separately
- The user should always understand *what changed* by watching the transition

---

## Accessibility Standards

### Color
- Never encode meaning through color alone
- Every color-based signal must have a text label, icon, or pattern alternative
- Example: "Below Target" label + red, not red alone
- Minimum contrast ratio: 4.5:1 for normal text, 3:1 for large text and UI components
- Color-blind safe palettes: avoid red/green as the only distinction; use blue/orange or add patterns

### Typography
- Minimum body text: 14px
- KPI values: 24–48px
- Labels on charts: 11px minimum
- Avoid all-caps text beyond short labels

### Interaction
- All interactive controls operable by keyboard
- Focus states visible on all interactive elements
- Tooltips accessible via keyboard (not hover-only)
- Drilldown panels closeable via Escape key

### Screen Reader
- Chart titles and descriptions as ARIA labels where applicable
- Data tables available as text alternative to every chart
- KPI card values readable in logical order

### Reduced Motion
- `prefers-reduced-motion` media query respected
- Entrance animations → instant appearance
- Transformation animations → instant state change
- Navigation animations → instant panel swap

---

## Responsive Layout

### Breakpoints
- Desktop: ≥1200px — full dashboard layout
- Tablet: 768–1199px — 2-column layout, stacked KPIs
- Mobile: <768px — single column, prioritized content

### Mobile Priority Order
1. KPI cards (top 3 only; rest behind "Show more")
2. Primary trend chart
3. Top insight card
4. Recommendations (collapsed by default)
5. Secondary charts (behind "View analysis" toggle)
6. Data table (behind "View detail" toggle)

**Rule:** Do not simply scale down the desktop layout. Reflow it. Mobile users are often checking one or two key metrics, not exploring the full analysis.

---

## Anti-Pattern Detection

Before delivery, ask each of these:

| Anti-pattern | Check |
|---|---|
| KPI overload | More than 7 KPIs visible without interaction? Reduce or group. |
| Redundant charts | Are two charts showing the same information differently? Remove one. |
| Unfocused dashboard | Does the dashboard answer a clear primary question? If not, restructure. |
| Purposeless animation | Does any animation fail to explain sequence, change, or hierarchy? Remove it. |
| Filter overload | More than 5 simultaneous filter controls? Consolidate or move to advanced. |
| Color without meaning | Is color decorative or does it encode information? Make it the latter. |
| Excessive decoration | Gradients, shadows, 3D effects that don't add information? Remove. |
| Simpler alternative | Could a single number or sentence replace this chart? Consider it. |
| Missing empty states | What happens if a filter returns zero results? Design for it. |
| Missing uncertainty | Are low-confidence metrics presented with the same weight as high-confidence ones? Add confidence indicators. |

---

## Dashboard Density Scoring

Evaluate the completed Artifact:

**Low density** — fewer than 5 visuals, minimal interaction. Appropriate for executive briefing or single-question answer.

**Moderate density** — 5–10 visuals, 2–4 filter controls, one drilldown path. Appropriate for most business dashboards.

**High density** — 10–15 visuals, multiple filter dimensions, multiple drilldown paths. Appropriate for analyst mode; should be behind a tab or toggle in executive view.

**Overloaded** — >15 visuals on one view, more than 6 simultaneous controls, no clear primary hierarchy. Action required:
1. Remove redundant visuals
2. Consolidate related charts into one with a toggle
3. Move secondary analysis to drilldown panels
4. Move tertiary detail to an appendix or methodology drawer

---

## Narrative Quality Scoring

Evaluate the Artifact's story on these dimensions:

| Dimension | Poor | Strong |
|---|---|---|
| Data clarity | Raw numbers with no context | Contextualized values with comparisons and targets |
| Visual clarity | Charts require explanation | Charts are self-explanatory with annotations |
| Narrative coherence | Disconnected charts | Clear storyline from context → finding → implication → action |
| Decision usefulness | Generic observations | Specific, actionable, evidence-backed recommendations |
| Interaction quality | Filters work but don't connect | Cross-filtering creates a coherent exploratory experience |
| Accessibility | Color-only meaning, small text | Color + text labels, readable at all breakpoints |

---

## Full QA Checklist

### Data
- [ ] Source file(s) inspected before any visualization was created
- [ ] All data types validated and classified
- [ ] Missing values identified and either handled or noted
- [ ] Duplicates assessed
- [ ] All calculations verified against source data
- [ ] All units consistent and labeled
- [ ] Anomalies reviewed (not silently dropped)

### Analytics
- [ ] All KPI values verified against source
- [ ] Period comparisons use equivalent date ranges
- [ ] Trend directions confirmed (not chart-scale artifacts)
- [ ] Anomalies reviewed as signals, not errors
- [ ] All insights supported by specific data evidence
- [ ] Confidence levels assigned to major insights
- [ ] Observed / Interpreted / Recommended kept separate

### Visualization
- [ ] Every chart answers a specific analytical question
- [ ] Chart types appropriate to the analytical question
- [ ] Labels clear and complete (axes, units, values)
- [ ] Scales honest (y-axis starts at 0 for bar charts unless explicitly justified)
- [ ] Consistent units across comparable charts
- [ ] Colors are meaningful and accessible
- [ ] Empty states designed for every filter/drilldown

### Interaction
- [ ] All filters function correctly
- [ ] Reset returns to default state
- [ ] Drilldowns open and close correctly
- [ ] Empty states don't break layout
- [ ] Cross-filtering is consistent across all connected panels
- [ ] Keyboard navigation works for all controls

### Motion
- [ ] Every animation communicates sequence, change, hierarchy, comparison, or emphasis
- [ ] No animation exists purely for decoration
- [ ] Pause / Skip / Replay controls present
- [ ] Reduced-motion mode disables non-essential animation
- [ ] Data remains visible and static when motion is disabled

### Decision
- [ ] Primary finding is immediately obvious without interaction
- [ ] At least one risk is identified and supported by evidence
- [ ] At least one opportunity is identified and supported by evidence
- [ ] Recommendations are specific, evidence-backed, and actionable
- [ ] Methodology panel is present and accurate
- [ ] Data quality status is disclosed