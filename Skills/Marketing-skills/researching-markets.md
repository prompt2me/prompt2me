---
name: researching-markets
description: >
  Analyze markets, industries, trends, demand, customer behavior, competitors,
  regulations, risks, and growth opportunities to produce evidence-based Market
  Research Reports. Use when evaluating a market, validating demand, researching
  industry trends, assessing competition or regulations, identifying opportunities,
  comparing segments or geographies, supporting marketing strategy, or making
  market-entry decisions. Also trigger for requests like "analyze this market,"
  "how big is the market for X," "who are the competitors in X," "is there demand
  for X," "what are the trends in X," "should we enter this market," "what do
  customers want in X," or any request to understand a market before making a
  business, investment, or product decision.
compatibility:
  tools:
    - web_search
    - web_fetch
Author: prompt2me 
Version: 1.0.0
---

# Researching Markets

## Purpose

This skill produces structured, evidence-based **Market Research Reports** that
support a specific business decision. The primary output is a written report
organized into standardized sections: market definition, size and growth, demand
analysis, customer behavior, industry structure, trends, competitive landscape,
regulatory environment, opportunities, risks, and strategic implications. Every
claim is classified by evidence type and confidence level. Every source is logged.
Every quantitative estimate includes the method and assumptions used to produce it.

The report is not a literature review. It is a decision document.

---

## Core Principles

### 1. Research for a Decision

Every section of the report must connect back to a named decision. Before
researching, identify: *Who needs this report? What decision are they making?
What would change their answer?* If no decision is stated, ask for one or infer
one from context. Research that does not inform the decision is out of scope.

### 2. Separate Evidence From Interpretation

Label every claim using one of these eight types:

- **Fact** — Directly stated in a verifiable primary source (e.g., published
  revenue figure, regulatory text, census count).
- **Observation** — A pattern visible in data or sources, but not formally
  stated (e.g., "three of the top five players use a subscription model").
- **Inference** — A logical conclusion drawn from facts or observations, not
  directly stated in any source.
- **Assumption** — A claim accepted as true for the purpose of the analysis,
  without strong evidence (e.g., a growth rate used in a TAM calculation).
- **Hypothesis** — An untested proposition that the research is designed to
  confirm or refute.
- **Recommendation** — A suggested action based on the synthesis of evidence.
- **Unknown** — Information that is relevant but not available in any accessible
  source.
- **Contradiction** — Two or more sources that make conflicting claims about the
  same question.

Use these labels inline and in the Evidence Register.

### 3. Prioritize Source Quality

Prefer sources in this order:

1. **Primary sources** — Government statistics, regulatory filings, earnings
   calls, academic peer-reviewed studies, official industry association reports,
   company-published data.
2. **Established secondary sources** — Major news organizations, trade press
   with named journalists and editorial standards, research firms that name their
   methodology (e.g., IBISWorld, Statista with sourced data, McKinsey with
   methodology disclosed).
3. **Aggregated or synthesized sources** — Blog posts, analyst commentary,
   listicles, Wikipedia. Use only to generate leads; verify claims upstream.
4. **AI-generated summaries** — Do not use as evidence. They do not constitute a
   source.

When a critical claim has only a low-quality source, label it **Unverified** and
flag it in Research Limitations.

### 4. Avoid False Precision

Do not present estimates as facts. When reporting market size, growth rates, or
quantitative forecasts:

- State the source and the year of the data.
- State the methodology used by the source (survey, revenue aggregation, top-down
  model, bottom-up model).
- State the assumptions embedded in the estimate.
- Where sources disagree, report the range and explain why estimates differ.
- Round estimates to reflect genuine uncertainty (e.g., "$4–6 billion" rather
  than "$4.87 billion" when the underlying data are weak).
- Never blend figures from sources with incompatible market definitions without
  disclosing the incompatibility.

### 5. Analyze Change, Not Just Description

A description of the current market is not analysis. For every major section:

- Identify what is *different* from 12–36 months ago.
- Identify what is *likely to change* in the next 12–36 months.
- Identify what the change means for the decision the report is supporting.

Where evidence of change is weak, say so explicitly rather than implying
stability.

---

## When to Activate

Use this skill when the user:

- Asks to evaluate, size, or analyze a market, industry, segment, or category.
- Wants to validate demand for a product, service, or concept before building or
  launching.
- Needs a competitive landscape or competitor analysis.
- Is assessing whether to enter a new market or geography.
- Wants to understand customer needs, behavior, or willingness to pay.
- Is preparing a business case, investment memo, or pitch deck that requires
  market data.
- Asks about industry trends, regulatory shifts, or macro forces affecting a
  sector.
- Wants to compare two or more markets, segments, or geographies.
- Is developing a go-to-market or positioning strategy and needs market context.

---

## Required Inputs

Collect the following before researching. If not provided, ask for them or state
the assumptions used:

- **Market or category** — What market, product category, or industry is being
  researched?
- **Geography** — Which country, region, or global scope applies?
- **Target customer** — Who is the intended buyer or user (B2B, B2C, enterprise,
  SMB, consumer segment)?
- **Decision** — What business decision will this research support?
- **Timeframe** — What is the relevant time horizon (current state, 3-year
  forecast, 5-year)?
- **Constraints** — Budget, speed, or depth constraints on the research.
- **Existing knowledge** — What does the user already know? What hypotheses do
  they want tested?

---

## Research Scope

Before beginning, document the scope boundaries:

- **In scope**: The named market, defined geography, named customer segment,
  stated timeframe.
- **Out of scope**: Adjacent markets, other geographies, unrelated customer
  segments — unless they affect the decision.
- **Definitional choices**: How the market is defined (e.g., TAM vs. SAM vs.
  SOM; product-based vs. customer-based; revenue-based vs. unit-based). Document
  the choice and the reason.

---

# Research Workflow

## Step 1: Define the Research Brief

Write a one-paragraph brief before searching. Include:
- The market being analyzed.
- The decision being supported.
- The key questions the research must answer.
- The geographic and temporal scope.
- Any known constraints or hypotheses.

This brief anchors every subsequent step. Return to it if the research drifts.

## Step 2: Form Research Questions

Convert the brief into a prioritized list of specific, answerable questions.
Structure them in three tiers:

- **Must-answer** — Without these, the report cannot support the decision (e.g.,
  "How large is the addressable market?" "Who are the top three competitors?").
- **Should-answer** — Important context that strengthens the report (e.g., "What
  regulatory requirements apply?" "What is the average customer acquisition
  cost?").
- **Nice-to-have** — Useful if time permits (e.g., "What are adjacent market
  opportunities?" "What do second-tier competitors offer?").

## Step 3: Gather and Classify Sources

For each research question:
1. Identify the most likely source types (government data, industry reports,
   company filings, trade press, expert interviews, primary surveys).
2. Search for sources using specific, varied queries — not just the market name.
3. For each source retrieved, record: source name, URL or citation, publication
   date, author or organization, and source tier (Primary / Secondary /
   Aggregated).
4. Do not treat a single source as definitive for any critical claim. Triangulate
   where possible.

## Step 4: Evaluate Source Quality

Before using a source, assess:
- **Recency** — Is the data current enough to be actionable? Flag data older
  than 3 years for fast-moving markets; older than 5 years for stable ones.
- **Methodology** — Does the source explain how the data was collected? Surveys,
  model assumptions, and sample sizes matter.
- **Conflicts of interest** — Is the source commercially motivated to present
  the market as larger or smaller than it is?
- **Citation chain** — Does the source cite a primary source? Follow the chain
  back to the origin before using a figure.

Downgrade or exclude sources that fail these checks. Note exclusions in Research
Limitations.

## Step 5: Define the Market

Before sizing or analyzing, formally define the market:
- **TAM (Total Addressable Market)** — The full demand if 100% market share were
  achieved with no constraints.
- **SAM (Serviceable Addressable Market)** — The portion accessible given product
  type, geography, and go-to-market model.
- **SOM (Serviceable Obtainable Market)** — Realistic capture in the planning
  horizon.
- **Market definition method** — Top-down (industry report → apply filters) or
  bottom-up (unit economics × addressable units). State which method is used and
  why.
- **Exclusions** — What is explicitly not counted and why.

## Step 6: Analyze Market Demand

Answer the following:
- Is demand currently growing, stable, or declining? With what evidence?
- What is driving demand (technology shift, regulatory change, demographic trend,
  economic condition)?
- What is suppressing demand (price barriers, awareness gaps, substitution,
  regulation)?
- What evidence exists for willingness to pay? (Competitor pricing, survey data,
  customer interviews, proxy markets.)
- Are there seasonal, cyclical, or geographic demand patterns?

## Step 7: Analyze Market Structure

Describe the competitive environment using:
- **Market maturity** — Emerging, growing, mature, or declining.
- **Concentration** — Fragmented, oligopolistic, or monopolistic. What is the
  approximate market share of the top 3–5 players?
- **Entry barriers** — Capital requirements, regulatory approval, network
  effects, switching costs, IP, distribution control.
- **Buyer power** — How much leverage do customers have? Can they switch easily?
- **Supplier power** — Are key inputs scarce, expensive, or controlled by few
  suppliers?
- **Substitution risk** — What alternatives exist that solve the same customer
  problem?

## Step 8: Analyze Industry Trends

For each significant trend:
- Name the trend clearly.
- State the evidence for it (not just assertion).
- Classify it: Technology / Regulatory / Economic / Social / Competitive /
  Environmental.
- Assess direction: emerging, accelerating, plateauing, or reversing.
- Assess impact on the decision: High / Medium / Low.
- Estimate timing: Already here / 1–2 years / 3–5 years / Uncertain.

Flag trends where evidence is weak or conflicting.

## Step 9: Analyze Customer and Buyer Behavior

Identify and describe:
- **Who buys** — Decision-maker vs. end user vs. influencer. Firmographics (B2B)
  or demographics (B2C).
- **Why they buy** — Primary jobs-to-be-done, functional and emotional needs.
- **What triggers purchase** — Events, pain points, or moments that initiate
  evaluation.
- **How they evaluate** — Criteria used, information sources consulted, decision
  process length.
- **What they use instead** — Current alternatives, workarounds, or incumbents.
- **What stops them from buying** — Objections, risk perceptions, budget
  constraints, status quo bias.

Source customer insights from: customer reviews, forum analysis, survey data,
interview transcripts, complaint threads, and competitor positioning signals.

## Step 10: Analyze Competitors and Alternatives

For each significant competitor or alternative:
- Company name and brief description.
- Estimated market position (leader, challenger, niche).
- Core product or offer.
- Pricing model and price point (if discoverable).
- Target customer segment.
- Primary channels (direct, channel, marketplace, partner).
- Stated or implied positioning.
- Visible weaknesses or customer complaints.
- Recent moves (launches, pricing changes, acquisitions, funding).

Also document:
- What gaps exist that no competitor addresses well.
- Where competitors are converging (risk of commoditization).
- Where competitors are diverging (opportunity for differentiation).

## Step 11: Analyze Regulations and Compliance

For each relevant regulatory area:
- Name the regulation or regulatory body.
- Geography of applicability.
- Current status (proposed, enacted, enforced, changing).
- Requirements imposed on market participants.
- Compliance cost or burden (if estimable).
- Timeline for change (if applicable).
- Impact on the decision: barrier, enabler, or neutral.

> This section is for research and planning purposes only. It is not legal advice.
> Qualified legal or compliance counsel should review any regulatory conclusions
> before relying on them for business decisions.

## Step 12: Identify Market Opportunities

For each opportunity:
- State the opportunity clearly (one sentence).
- Identify the evidence base (what demand signal, gap, or trend supports it).
- Assess the size or value (quantified where possible, estimated where not).
- Assess readiness: Is the market ready now, or is timing premature?
- Identify the critical condition (what must be true for the opportunity to be
  real).
- Assign a priority: High / Medium / Low based on size × readiness × fit.

## Step 13: Identify Threats and Risks

For each material risk:
- State the risk clearly.
- Assess likelihood: High / Medium / Low.
- Assess impact if it materializes: High / Medium / Low.
- Identify any early warning signals to monitor.
- Note whether the risk is mitigable and how.

## Step 14: Synthesize Strategic Implications

Translate findings into actionable implications for:
- **Audience and targeting** — Who is the most viable initial customer segment?
- **Positioning** — What differentiation is available and defensible?
- **Product and offer** — What does the market evidence suggest about product
  requirements, pricing, and packaging?
- **Channels** — Where do customers currently find and evaluate solutions?
- **Messaging** — What language, proof points, and objection responses does the
  evidence support?
- **Experiments** — What hypotheses remain unvalidated and how should they be
  tested?

## Step 15: Validate the Report

Before finalizing, run this checklist:

- [ ] Every quantitative claim has a source, date, and stated methodology.
- [ ] Every claim is labeled with its evidence type.
- [ ] Conflicting sources are documented, not ignored.
- [ ] The market is formally defined (TAM/SAM/SOM or equivalent).
- [ ] All sources are logged in the Source Register.
- [ ] Key claims are logged in the Evidence Register.
- [ ] Research Limitations section names what was not found or not verified.
- [ ] Open Research Questions section flags what should be researched next.
- [ ] The Recommendation connects to the decision stated in the brief.
- [ ] The regulatory disclaimer is present if regulations were analyzed.

---

# Market Research Report

## Cover Information

```
Report Title:
Market:
Geography:
Decision Supported:
Prepared for:
Date:
Version:
Prepared by: Claude (researching-markets skill)
```

---

## Executive Summary

*2–4 paragraphs. Written last. Summarize: the decision being supported, the key
market finding, the primary opportunity, the primary risk, and the recommendation.
Do not introduce information not in the report body. Write for a reader who will
read only this section.*

---

## Research Brief

- **Business objective**: What outcome does the decision-maker want?
- **Research objective**: What questions does this report answer?
- **Scope**: Market, geography, customer segment, timeframe.
- **Key hypotheses tested**: What the client believed before the research.
- **Constraints**: Time, source access, budget, or data limitations known at the
  outset.

---

## Market Definition

- **Market name and category**:
- **TAM definition and method**:
- **SAM definition and method**:
- **SOM definition and method**:
- **Inclusions** (what counts):
- **Exclusions** (what does not count and why):
- **Definitional note** (if market definitions vary across sources):

---

## Market Size and Growth

| Metric | Estimate | Source | Year | Confidence |
|--------|----------|--------|------|------------|
| TAM | | | | |
| SAM | | | | |
| SOM | | | | |
| CAGR (historical) | | | | |
| CAGR (projected) | | | | |

*Narrative: Describe the sizing approach, key drivers of the estimate, and the
range of estimates seen across sources if they conflict.*

### Estimation Assumptions

List each assumption embedded in the size or growth estimate:
- **Assumption**: [State it]
- **Basis**: [Why it was used]
- **Sensitivity**: [What happens to the estimate if this assumption is wrong]

*Known limitations of the market size estimate:*

---

## Demand Analysis

### Demand Signals

| Signal | Type | Source | Date | Confidence |
|--------|------|--------|------|------------|
| | | | | |

*Evidence types: search volume trend, purchasing data, survey stated intent,
waitlist size, category revenue growth, adjacent market proxy, customer interview.*

### Demand Barriers

List what is currently suppressing demand:
- Awareness gap
- Price barrier
- Switching cost
- Trust or risk perception
- Regulatory friction
- Availability or distribution gap

### Willingness-to-Pay Evidence

- **Observed price points** (competitor pricing, what customers pay today):
- **Survey or interview evidence** (if available):
- **Proxy market evidence** (similar markets where pricing is known):
- **Confidence level**: High / Medium / Low / Unverified

---

## Customer and Buyer Analysis

| Segment | Job to Be Done | Trigger | Objections | Alternatives Used | WTP Range |
|---------|---------------|---------|------------|-------------------|-----------|
| | | | | | |

*Narrative: Describe the primary buyer persona, their evaluation process, and
the key insight that differentiates successful from unsuccessful positioning.*

---

## Industry Structure

- **Market maturity**: Emerging / Growing / Mature / Declining
- **Concentration**: Fragmented / Moderate / Oligopolistic
- **Top 3–5 players and estimated share**:
- **Entry barriers** (rate each High / Medium / Low):
  - Capital intensity:
  - Regulatory approval:
  - Network effects:
  - Switching costs:
  - IP or proprietary technology:
  - Distribution control:
- **Buyer power**: High / Medium / Low — reason:
- **Supplier power**: High / Medium / Low — reason:
- **Substitution risk**: High / Medium / Low — primary substitutes:

---

## Trend Analysis

| Trend | Type | Direction | Evidence Strength | Market Impact | Timing |
|-------|------|-----------|------------------|---------------|--------|
| | | | | | |

*Types: Technology / Regulatory / Economic / Social / Competitive / Environmental*
*Direction: Emerging / Accelerating / Plateauing / Reversing*
*Timing: Now / 1–2 yr / 3–5 yr / Uncertain*

### Trend Detail

For each High-impact trend, add:
- **Trend name**:
- **What is changing**:
- **Evidence** (sources, data points):
- **Implications for the decision**:
- **Confidence in the trend**: High / Medium / Low

---

## Competitor and Alternative Analysis

| Competitor | Position | Offer | Pricing | Target Segment | Channels | Positioning |
|------------|----------|-------|---------|---------------|----------|-------------|
| | | | | | | |

### Competitive Patterns

- **Where competitors converge** (risk of commoditization):
- **Where competitors diverge** (differentiation opportunity):
- **Common customer complaints** (from reviews, forums, support data):
- **Gaps no competitor addresses well**:
- **Recent significant moves** (launches, acquisitions, pricing changes):

---

## Regulatory and Compliance Analysis

| Regulation | Jurisdiction | Status | Requirement | Compliance Burden | Timeline | Impact |
|------------|-------------|--------|-------------|------------------|----------|--------|
| | | | | | | |

### Regulatory Detail

For each High-impact regulation, add:
- **Regulation name and issuing body**:
- **What it requires**:
- **Who is affected**:
- **Timeline**:
- **Strategic implication**:

> This section is for research and planning purposes only. It is not legal advice.
> Qualified legal or compliance counsel should review any regulatory conclusions
> before relying on them for business decisions.

---

## Opportunity Analysis

| Opportunity | Evidence Base | Estimated Value | Market Readiness | Priority |
|-------------|--------------|----------------|-----------------|----------|
| | | | | |

*Priority = High / Medium / Low. Reflect size × readiness × strategic fit.*

### Opportunity Detail

For each High-priority opportunity:
- **Opportunity**:
- **Evidence** (demand signal, gap, trend that supports it):
- **Size or value estimate**:
- **Critical condition** (what must be true for this to be real):
- **Timing**:
- **Recommended validation experiment**:

---

## Risk Analysis

| Risk | Likelihood | Impact | Early Warning Signal | Mitigable? |
|------|------------|--------|---------------------|------------|
| | H/M/L | H/M/L | | Y/N |

---

## Strategic Implications

### Audience

*Which customer segment offers the highest near-term viability? Why? What does
the market evidence say about their needs, readiness to buy, and accessibility?*

### Positioning

*What differentiation is available based on gap analysis and competitor
weaknesses? What positioning is defensible given competitive dynamics?*

### Product and Offer

*What does the market evidence suggest about required features, pricing model,
packaging, and minimum viable offer?*

### Content and Messaging

*What language do customers use? What proof points are credible? What objections
must messaging address? What claims can be substantiated?*

### Channels

*Where do customers currently discover, evaluate, and buy solutions in this
category? What does that imply about distribution and marketing channels?*

### Experiments

*What key hypotheses remain unvalidated? What is the smallest, fastest test that
would provide meaningful signal?*

---

## Recommendation

- **Decision**: [State the decision being made]
- **Recommended course of action**: [One clear sentence]
- **Reasoning**: [Key evidence chain supporting the recommendation]
- **Evidence strength**: High / Medium / Low — *because [reason]*
- **Conditions**: [What must be true for the recommendation to hold]
- **Key risks**: [What could make this recommendation wrong]
- **Next action**: [The single most important action to take next]

---

## Research Limitations

List everything that would improve the report if available:
- Data not found or unavailable.
- Sources that were low quality but used due to no alternative.
- Questions that could not be answered from public sources.
- Assumptions that carry high sensitivity to the conclusions.
- Geographic or segment gaps in the research.

---

## Open Research Questions

List questions that remain unanswered and should be pursued in follow-on research:
- Questions that require primary research (surveys, interviews).
- Questions that require access to proprietary data.
- Hypotheses generated by this research that should be tested.

---

## Source Register

| # | Source Name | URL or Citation | Publisher | Date | Tier | Used In |
|---|------------|----------------|-----------|------|------|---------|
| | | | | | | |

*Tiers: 1 = Primary / 2 = Established Secondary / 3 = Aggregated*

---

## Evidence Register

| # | Claim | Type | Source # | Confidence | Section |
|---|-------|------|----------|------------|---------|
| | | | | | |

*Claim types: Fact / Observation / Inference / Assumption / Hypothesis /
Recommendation / Unknown / Contradiction*

---

## Change Log

| Version | Date | Author | Change |
|---------|------|--------|--------|
| 1.0 | | | Initial draft |

---

# Evidence Standards

## Evidence Classification

Apply one of these labels to every non-trivial claim in the report:

- **Fact** — Directly stated in a verifiable primary source. Can be looked up
  and confirmed by a third party.
- **Observation** — A pattern that is visible across multiple sources or data
  points but is not formally stated anywhere. The analyst is drawing attention to
  a pattern, not inventing one.
- **Inference** — A logical conclusion that follows from facts or observations
  but is not directly stated. Label it explicitly so the reader can challenge the
  logic.
- **Assumption** — A claim accepted as true for analytical purposes without
  direct evidence. Common in market sizing (e.g., "We assume 15% of SMBs have
  this problem").
- **Hypothesis** — An untested proposition. Research may confirm or refute it.
  Distinguish from inference: an inference is drawn from existing evidence; a
  hypothesis is waiting for evidence.
- **Recommendation** — A suggested action. Recommendations are always the
  analyst's judgment, not a fact about the market.
- **Unknown** — Relevant information that is not available in any accessible
  source. Naming unknowns is as important as stating what is known.
- **Contradiction** — Two credible sources that make incompatible claims. Do not
  silently choose one. Document the conflict and explain the provisional
  interpretation.

## Confidence Levels

### High Confidence
Multiple independent primary sources agree. Methodology is disclosed and sound.
Data is recent (within 2 years for fast-moving markets; within 5 years for stable
ones). No significant conflicts across sources.

### Medium Confidence
One strong source, or multiple sources of mixed quality. Methodology is partially
disclosed. Data may be 2–5 years old in a moderately changing market. Minor
conflicts exist but can be explained.

### Low Confidence
Only aggregated or secondary sources available. No methodology disclosed.
Conflicting signals across sources. Data may be outdated. An inference or
assumption underlies the claim.

### Unverified
No credible source could be found. The claim is included only because excluding
it would create a material gap. Label it explicitly and flag it in Research
Limitations.

---

# Handling Conflicting Evidence

When two or more credible sources make incompatible claims about the same
question:

1. **Document both claims** — Do not suppress either.
2. **Assess the sources** — Which has stronger methodology, recency, or
   independence?
3. **Look for a third source** — A tiebreaker source may resolve the conflict or
   confirm the range.
4. **Assess whether the conflict matters** — For some decisions, a range of $3B–
   $6B is sufficient even if sources disagree. For others, the difference is
   decision-critical.
5. **State a provisional interpretation** — Based on the weight of evidence,
   state which claim is more plausible and why. Label it as an inference.
6. **Recommend validation** — If the conflict is decision-critical, recommend
   how it should be resolved (primary research, expert consultation, access to
   proprietary data).

Use this format in the report:

### Evidence Conflict

```markdown
- **Question:** [The specific question both sources address]
- **Finding A:** [Claim from source A]
- **Source A:** [Name, date, tier]
- **Finding B:** [Claim from source B]
- **Source B:** [Name, date, tier]
- **Why the conflict matters:** [Does it change the recommendation?]
- **Provisional interpretation:** [Which is more likely to be correct and why]
- **Confidence:** High / Medium / Low
- **Recommended validation:** [How to resolve this if needed]
```
