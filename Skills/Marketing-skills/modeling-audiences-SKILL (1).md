---
name: modeling-audiences
description: Build, update, and apply evidence-based audience profiles covering personas, segments, jobs-to-be-done, needs, pain points, motivations, objections, behaviors, buying triggers, desired outcomes, and customer language. Use when researching or defining target audiences, creating or revising personas, segmenting customers, analyzing audience evidence, planning marketing strategy, developing content, writing campaigns, or checking whether messaging fits a specific audience.
metadata:
  author: prompt2me
  version: 1.0.0
---

# Modeling Audiences

## Purpose

Build and maintain practical, evidence-based audience profiles that help marketing decisions become more relevant, specific, and customer-centered.

This Skill transforms customer evidence into structured:

- Audience segments.
- Personas.
- Jobs-to-be-done.
- Needs.
- Pain points.
- Motivations.
- Objections.
- Buying triggers.
- Desired outcomes.
- Behaviors.
- Decision criteria.
- Customer language.
- Audience-specific marketing implications.

The primary output is an **Audience Profile** that can be used by other marketing Skills.

## Core principles

### Use evidence before assumptions

- Separate observed evidence from interpretation.
- Never invent customer quotes, demographics, behaviors, or motivations.
- Mark unsupported information as an assumption or hypothesis.
- Record the source and date of important findings.
- Identify evidence gaps that require additional research.
- Do not treat a stakeholder opinion as a verified customer insight.

### Model people, not stereotypes

- Avoid reducing an audience to age, gender, job title, or location.
- Focus on problems, context, motivations, constraints, behaviors, and desired outcomes.
- Use demographic information only when it affects marketing decisions.
- Avoid stereotypes and unsupported psychological claims.
- Recognize that one person may belong to multiple segments in different situations.

### Keep segments actionable

A useful segment must differ in a way that affects marketing decisions, such as:

- Problem urgency.
- Desired outcome.
- Buying motivation.
- Use case.
- Product need.
- Decision process.
- Price sensitivity.
- Channel behavior.
- Level of awareness.
- Retention or expansion potential.

Do not create segments that have different labels but require the same message, offer, or channel strategy.

### Preserve uncertainty

Every important insight must be classified as one of:

- Confirmed.
- Observed.
- Reported.
- Inferred.
- Assumed.
- Hypothesis.
- Contradictory.
- Unknown.

Do not present an inference as a customer fact.

### Connect insights to action

Every meaningful audience finding should explain its marketing implication:

- What should the brand say?
- What problem should content address?
- What objection should the offer resolve?
- What proof is needed?
- Which channel or format may be appropriate?
- What should be tested next?

## When to activate

Use this Skill when the user:

- Requests an audience profile or persona.
- Wants to define a target audience.
- Asks to segment customers or prospects.
- Provides customer interviews, reviews, comments, surveys, support tickets, or research.
- Asks for jobs-to-be-done.
- Wants to understand customer pain points or motivations.
- Requests audience-specific messaging.
- Needs content ideas based on customer needs.
- Wants to revise an existing persona.
- Asks whether a campaign or message fits an audience.
- Introduces a new product, market, use case, or customer group.
- Requests a customer journey or audience decision analysis.

## Required inputs

Use the following inputs when available:

- Business Context Brief.
- Brand Profile.
- Product or offer information.
- Customer interviews.
- Surveys.
- Reviews.
- Support conversations.
- Sales-call notes.
- Search queries.
- Website analytics.
- Social comments.
- Community discussions.
- CRM or purchase data.
- Competitor research.
- Existing audience profiles.
- Campaign performance data.

If no evidence is provided, create a provisional profile and clearly label assumptions and research needs.

## Source hierarchy

Use sources in this order:

1. Direct customer evidence.
2. First-party behavioral or transaction data.
3. Customer-facing conversations from sales or support.
4. Search, community, and social evidence.
5. Verified market research.
6. Campaign performance data.
7. Stakeholder reports.
8. Strategic assumptions.
9. Claude-generated hypotheses.

When sources conflict:

- Preserve both findings.
- Identify the source and date.
- Explain why the conflict matters.
- Do not average contradictory evidence without justification.
- Recommend a validation method.
- Mark the issue as unresolved.

## Audience modeling workflow

### Step 1: Define the modeling objective

Identify what the audience model will be used for:

- Brand positioning.
- Product marketing.
- Lead generation.
- Content strategy.
- Paid advertising.
- Email marketing.
- Sales enablement.
- Product launch.
- Customer retention.
- Conversion optimization.
- Market expansion.
- Customer research.

The modeling objective determines which audience details matter most.

### Step 2: Establish the business context

Review relevant information about:

- Business goals.
- Product or offer.
- Market.
- Business model.
- Current marketing priority.
- Available channels.
- Constraints.
- Existing positioning.

Do not build an audience model disconnected from the business context.

### Step 3: Gather and inspect evidence

Extract relevant evidence from supplied material.

Look for:

- Repeated problems.
- Customer goals.
- Frustrations.
- Desired outcomes.
- Objections.
- Purchase triggers.
- Alternatives considered.
- Decision criteria.
- Customer vocabulary.
- Emotional language.
- Context of use.
- Moments of urgency.
- Reasons for delay.
- Reasons for choosing or rejecting an option.
- Differences between new and returning customers.

Record evidence without exaggerating its meaning.

### Step 4: Normalize the evidence

Group similar expressions under common themes while preserving useful customer language.

For example:

```text
"Too many tools"
"Everything is scattered"
"I lose track of my research"
```

Possible theme:

```text
Information fragmentation and lack of a centralized workflow
```

Retain the original expressions as customer-language examples. Do not convert different problems into one theme unless they reflect the same underlying need.

### Step 5: Identify audience dimensions

Evaluate the audience using dimensions relevant to the task:

- Role or situation.
- Organization type.
- Market or geography.
- Level of awareness.
- Problem urgency.
- Use case.
- Desired outcome.
- Current solution.
- Buying authority.
- Influence on the decision.
- Budget or resource context.
- Technical ability.
- Behavioral patterns.
- Channel preferences.
- Objections.
- Trust requirements.
- Stage in the customer journey.
- Customer value or potential.

Do not fill every dimension automatically. Use only dimensions that support a marketing decision.

### Step 6: Create segments

Create a segment only when the difference is actionable.

For each segment, define:

- Segment name.
- Segment definition.
- Shared problem.
- Context or situation.
- Desired outcome.
- Primary job-to-be-done.
- Buying motivation.
- Main objections.
- Decision criteria.
- Current alternative.
- Message implications.
- Offer implications.
- Channel implications.
- Evidence strength.
- Estimated priority.

### Step 7: Prioritize segments

Rank segments using relevant criteria:

- Strategic fit.
- Problem severity.
- Market opportunity.
- Ability to reach.
- Ability to serve.
- Purchase potential.
- Evidence quality.
- Competitive pressure.
- Urgency.
- Retention or expansion potential.

Use this model when no weighting is supplied:

| Criterion | Weight |
|---|---:|
| Strategic fit | 20 |
| Problem urgency | 20 |
| Commercial potential | 20 |
| Ability to reach | 15 |
| Ability to serve | 15 |
| Evidence quality | 10 |
| **Total** | **100** |

Scores are directional, not factual measurements. Explain the reasoning behind each score.

### Step 8: Build personas only when useful

Create a persona when a segment needs a human-readable representation for:

- Messaging.
- Content planning.
- Sales enablement.
- Creative development.
- Customer experience.
- Team alignment.

A persona is not a fictional biography. It is a decision-support model representing a meaningful audience pattern.

Avoid adding invented details such as:

- Favorite brands.
- Family structure.
- Hobbies.
- Personality type.
- Exact salary.
- Exact daily schedule.
- Personal quotations.

Include these only when directly supported and relevant.

### Step 9: Define jobs-to-be-done

For each priority segment, identify:

- Functional job.
- Emotional job.
- Social job.
- Situation or trigger.
- Desired progress.
- Current workaround.
- Friction.
- Success criteria.

Use this structure:

```text
When [situation],
I want to [motivation or job],
so I can [desired outcome].
```

Then document:

- What causes the job to arise.
- What makes it urgent.
- What alternatives are considered.
- What could prevent action.
- What evidence would create confidence.

### Step 10: Identify pain points and motivations

Separate the following:

#### Pain points

Problems, frustrations, risks, costs, delays, or barriers experienced by the audience.

#### Motivations

Desired gains, improvements, aspirations, outcomes, or emotional benefits that encourage action.

#### Objections

Reasons the audience may hesitate, reject, delay, or compare alternatives.

#### Triggers

Events, changes, failures, deadlines, or opportunities that increase the likelihood of action.

Do not combine these categories into a generic list of "customer needs."

### Step 11: Extract customer language

Capture words and phrases customers use to describe:

- Their problem.
- Their desired outcome.
- Their frustration.
- Their doubts.
- Their existing solution.
- Their success criteria.
- Their emotional state.

Use customer language to inform:

- Headlines.
- Hooks.
- Subject lines.
- Landing pages.
- Search content.
- Video scripts.
- FAQs.
- Sales enablement.
- Objection handling.

Do not fabricate quotations. If wording is paraphrased, label it as paraphrased.

### Step 12: Map audience to marketing decisions

Translate the model into decisions about:

- Positioning.
- Messaging pillars.
- Content topics.
- Content formats.
- Offers.
- Calls to action.
- Proof.
- Channels.
- Campaign angles.
- Customer journey stages.
- Experiments.

Each recommendation must identify the audience evidence behind it.

### Step 13: Validate the audience model

Check that:

- Segments are distinct and actionable.
- The primary audience is clearly prioritized.
- Personas represent evidence-based patterns.
- Jobs-to-be-done describe progress rather than product features.
- Pain points are specific.
- Motivations are separate from pain points.
- Objections are distinct from unmet needs.
- Customer language is sourced.
- Assumptions are visible.
- Contradictions are documented.
- Marketing implications are practical.
- Research gaps have next steps.

## Audience Profile output format

The full Audience Profile template — document control, executive summary, segment profiles, persona profiles, jobs-to-be-done map, journey needs, assumptions, source register, change log, and quality rules — lives in `references/audience-profile-template.md`. Read it before assembling a complete Audience Profile deliverable, and follow its structure unless the user requests another format.

For a lighter-weight need — passing audience context to another skill, or a compact reference card — use `references/handoffs-and-quick-card.md` instead of the full template.

## Final quality checklist

Before delivering an Audience Profile, confirm:

- [ ] The modeling objective is defined.
- [ ] The primary audience is prioritized.
- [ ] Segments are actionable and meaningfully distinct.
- [ ] Segment definitions are clear.
- [ ] Personas are evidence-based or labeled provisional.
- [ ] Jobs-to-be-done describe desired progress.
- [ ] Functional, emotional, and social jobs are separated.
- [ ] Pain points are specific and sourced.
- [ ] Motivations are distinct from pain points.
- [ ] Objections and barriers are documented.
- [ ] Buying triggers are identified.
- [ ] Decision criteria are ranked.
- [ ] Alternatives include doing nothing where relevant.
- [ ] Customer language is sourced.
- [ ] Marketing implications are concrete.
- [ ] Assumptions and hypotheses are visible.
- [ ] Contradictions and evidence gaps are recorded.
- [ ] Sensitive information is handled appropriately.
- [ ] Sources, dates, confidence, and ownership are documented.
- [ ] Handoffs to other marketing Skills are included.
