---
name: data-to-decision-artifact-studio
description: >
  Transform uploaded CSV and Excel workbooks into interactive, animated, decision-oriented
  visual dashboards and executive reports using Claude's analytical, visual, and
  Artifact-generation capabilities. Use this skill whenever a user uploads a CSV or
  XLSX file and wants charts, a dashboard, a visual report, data analysis, an executive
  summary, or any data visualization — even if they just say "analyze this" or "what does
  this data show?" Also trigger when the user mentions "turn this into a dashboard,"
  "visualize this data," "interactive report," "data story," or pastes a file and asks
  any business question. The skill's job is not to make charts — it is to turn data into
  an interface for decision-making. Always activate for any data file + visualization
  request, no matter how casually phrased.
Author: prompt2me 
Version: 1.0.0
---

# Data-to-Decision Artifact Studio

## Core Philosophy

> Do not ask "What charts should I make?"  
> Ask: "What decision does this data need to help someone make — and what interactive visual experience will communicate that decision most effectively?"

The transformation goal:

```
CSV / XLSX
    ↓ Understand
    ↓ Audit quality
    ↓ Model metrics
    ↓ Detect decisions
    ↓ Generate questions
    ↓ Design experience
    ↓ Build Artifact
    ↓ Animate & narrate
    ↓ Validate
    ↓
Decision-Ready Experience
```

The output is not a spreadsheet rendered visually. It is a **living analytical Artifact** where data, visualizations, narrative, interactions, and recommendations stay connected.

---

## Step 1 — Dataset Discovery (always first)

Never create a dashboard immediately after receiving a file. First run the **Dataset Intelligence Profile**:

**File metadata:** filename, type, sheet count, sheet names, row/column counts, table structures, potential cross-sheet relationships.

**Field classification** — tag every column as one of:
`Identifier | Date | Time | Numeric Measure | Categorical Dimension | Boolean | Text | Currency | Percentage | Ratio | Calculated | Unknown`

**Semantic interpretation** — infer likely business meaning from field names + values (but never override values with assumed names).

**For XLSX:** Inspect the workbook as a data system. Detect: multiple sheets, repeated structures (monthly/regional/product), lookup tables, target tables, summary vs raw sheets. Determine whether it is one dataset, multiple related datasets, or repeated datasets needing consolidation.

**Relationship detection** — identify candidate join keys (customer_id, date, region, etc.), classify as 1:1 / 1:many / many:many / unknown. Never join on column name similarity alone — validate first.

→ **Reference:** `references/REFERENCE.md §Data Quality` for the full quality audit checklist.

---

## Step 2 — Data Quality Audit

Run before any visualization. A beautiful dashboard with wrong calculations is a failed Artifact.

Check: completeness (missing values, dates, periods), consistency (spelling, capitalization, units, date formats), integrity (duplicate IDs, impossible values, percentages >100%, invalid dates), and statistical anomalies (outliers, sudden spikes/drops, structural breaks).

**Rule:** An anomaly is an analytical signal until proven otherwise — do not silently drop it.

---

## Step 3 — Metric Intelligence

Build a **metric dictionary** for every important measure:

```
metric:
  name:
  source_field:
  type: [KPI | ratio | rate | count | currency | percentage]
  unit:
  aggregation: [SUM | AVG | COUNT | RATIO]
  formula:
  denominator:        # show when ambiguity is possible
  comparison:         # period, target, or benchmark
  business_meaning:
  caveats:
```

**Derived metrics Claude may calculate** (only when source data supports it):
- Growth: `(Current − Previous) / Previous × 100`
- Conversion rate: `Conversions / Eligible population`
- CPA: `Spend / Conversions`
- ROAS: `Revenue / Spend`
- Target achievement: `Actual / Target × 100`

→ For full derived metric rules and domain-specific metric libraries, see `references/REFERENCE.md §Metrics`.

---

## Step 4 — Decision Detection

Before designing visuals, identify the likely decision domain:

`Budget allocation | Resource allocation | Campaign optimization | Sales management | Product prioritization | Regional expansion | Customer retention | Operational improvement | Forecasting | Risk management | Strategic planning`

Then map: **Decision → decision criteria → relevant metrics → relevant dimensions → evidence**

If the domain cannot be confidently inferred, activate **Generic Analytical Explorer Mode** (see Step 8).

---

## Step 5 — Question Generation (charts emerge from questions)

Generate analytical questions before generating visuals. Examples:

- What changed? When? How large?
- Which segments contributed most / deteriorated most?
- Where is performance concentrated?
- Where are the largest gaps vs. target?
- Which areas exceed expectations? Which require attention?
- What should be investigated next?

Then create a **Visual Question Map**:

```
question: "How has revenue changed over time?"
visual:   line_chart
reason:   time-series trend
interaction: [date_range, comparison_period]
annotation:  [peak, lowest_point, major_change]
```

**Chart Rejection Rules** — actively reject poor choices:
- Too many categories → reject pie chart
- Long category names → prefer horizontal bars
- Sparse time series → avoid misleading continuous line
- Precise comparison required → avoid decorative visualization
- Geography not analytically relevant → reject map
- Correlation with insufficient observations → flag uncertainty

→ Full chart selection logic and rejection patterns in `references/REFERENCE.md §Visualization`.

---

## Step 6 — Artifact Design

### Dashboard Architecture (default layout)

```
┌─────────────────────────────────────┐
│ TITLE + CONTEXT + DATE RANGE        │
├─────────────────────────────────────┤
│ KPI │ KPI │ KPI │ KPI │ KPI         │
├──────────────────────┬──────────────┤
│ PRIMARY TREND        │ KEY DRIVER   │
├──────────────────────┴──────────────┤
│ SEGMENT / CHANNEL / REGION ANALYSIS │
├─────────────────────┬───────────────┤
│ EXCEPTIONS          │ OPPORTUNITY   │
├─────────────────────┴───────────────┤
│ RECOMMENDATIONS                     │
├─────────────────────────────────────┤
│ METHODOLOGY / DATA QUALITY (drawer) │
└─────────────────────────────────────┘
```

### Three Modes (build all three into the Artifact)

**Executive Mode** — 5 KPIs + 1 trend + 1 driver + 1 risk + 1 opportunity + 3 actions. Secondary complexity behind expandable sections.

**Analyst Mode** — detailed tables, drilldowns, filters, distribution analysis, metric definitions, data-quality details, calculation methodology.

**Presentation / Story Mode** — cinematic sequence. One idea per scene. Progressive animation. Strong annotations. Scene structure:
`Context → Executive KPIs → Trend → Drivers → Segments → Risks → Opportunities → Actions`

### Template Auto-Selection

| Dataset domain | Template |
|---|---|
| Marketing / campaigns | Campaign Performance Studio |
| Sales / pipeline | Revenue & Pipeline Studio |
| Customer / retention | Customer Journey Studio |
| Financial | Financial Performance Studio |
| Operations | Operations Intelligence Studio |
| HR / workforce | Workforce Analytics Studio |
| Unknown | Generic Analytical Explorer |

---

## Step 7 — Artifact Build Rules

### Interaction Design

Required controls (select only what's relevant to the decision):
`Date range | Period comparison | Metric selector | Dimension selector | Region | Product | Campaign | Channel | Target/Actual toggle | Absolute/% toggle | Drilldown | Reset`

**Cross-filtering:** When a user clicks a dimension (e.g., "Paid Search"), all connected panels — KPI cards, trend, table, regional analysis, recommendations — should update together. The user explores **one coherent analytical model**, not independent charts.

### Animation Rules

Use motion only when it communicates: sequence, change, hierarchy, comparison, emphasis, transition, or causal chronology. Never animate for decoration.

Timing:
- Fast transition: 0.15–0.3s
- Normal: 0.3–0.7s
- Narrative reveal: 0.7–1.5s
- Major transition: 1–2s

Always provide: **Pause | Replay | Skip | Next | Previous | Reduced motion**

### Insight Layers (keep these separate)

```
Observed   →  "Revenue declined 14% in March."
Interpreted → "This follows the pattern of Q1 seasonality in 2 of the last 3 years."
Recommended → "Verify before treating as structural; compare to Q1 targets."
```

Assign confidence: `High | Medium | Low` based on data completeness, sample size, consistency, statistical strength, and alternative explanations.

### "Explain This Chart" Layer

Every major visual should optionally show:
- **What you're seeing** — the literal reading
- **Why it matters** — the business implication
- **How it was calculated** — formula + denominator
- **What to investigate** — next analytical question

### Recommendation Format

```
recommendation:
  priority: high | medium | low
  evidence:   [specific data point(s)]
  implication: [what it means]
  action:      [specific, not generic]
  owner:       [role, not name]
  timeframe:
  success_metric:
```

Never produce: *"Improve marketing performance."*  
Prefer: *"Review budget allocation toward channels with above-target ROAS while investigating campaigns whose CPA increased faster than conversion volume."*

### Data Traceability

Important values should remain traceable. Provide optional source panel:
```
Revenue: $1.42M
Source: Sales!Revenue | Period: Jan–Jun 2026 | Calculation: SUM(Revenue)
```

---

## Step 8 — Generic Analytical Explorer Mode

When domain cannot be confidently inferred:

Build: dataset overview + automatic KPI detection + trend exploration + dimension comparison + distribution analysis + anomaly detection + filterable tables.

Ask the user to identify business context *after* showing what the data contains — do not invent business meaning.

---

## Step 9 — Pre-Delivery QA Gate

Before delivering, verify:

**Data:** source inspected · types validated · missing values assessed · duplicates assessed · calculations validated · units verified

**Analytics:** KPIs verified · comparisons verified · trends verified · anomalies reviewed · insights evidenced

**Visualization:** appropriate chart types · clear labels · correct scales · consistent units · accessible colors

**Interaction:** filters work · reset works · drilldowns work · empty states handled · cross-filtering consistent

**Motion:** animation purposeful · readable · pause/skip available · reduced-motion option · static info always accessible

**Decision:** main finding obvious · risks identified · opportunities identified · recommendations evidenced · methodology available

→ Full QA checklist in `references/REFERENCE.md §QA`.

---

## Step 10 — Final Output Contract

When the skill finishes, return:

```
DATA-TO-DECISION REPORT

Dataset:          [files analyzed]
Artifact:         [interactive report — see above]
Executive summary: [3–5 most important findings]
Decision supported: [decision type]
Top finding:       [finding]
Top risk:          [risk]
Top opportunity:   [opportunity]
Recommended actions:
  1.
  2.
  3.
Data quality:      [status]
Methodology:       [available inside Artifact]
Validation:        [status]
```

---

## Non-Negotiable Principles (never violate)

1. **Source data is authoritative.** Never invent values, silently fill missing data, fabricate categories, or manufacture trends.
2. **Inspect before designing.** Never immediately create a dashboard.
3. **Data quality before aesthetics.** A beautiful incorrect dashboard is a failed Artifact.
4. **Every visual needs a purpose.** If a chart doesn't answer a meaningful analytical question, remove it.
5. **Interactivity must improve understanding.** Don't add filters because dashboards have filters.
6. **Animation must communicate.** Never animate merely because animation is available.
7. **Observations ≠ explanations.** Always separate observed / interpreted / recommended.
8. **Recommendations require evidence.** Trace every recommendation to the data.

---

## Reference Files

- [references/REFERENCE.md](https://github.com/prompt2me/prompt2me/blob/main/Skills/Skills-data/reference-skill-visualistion.md) — Full lookup tables for: data quality audit, metric formulas by domain, visualization selection and rejection rules, motion design system, accessibility standards, anti-pattern detection, dashboard density scoring, narrative quality scoring, and the complete QA checklist.
