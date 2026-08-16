# What the `modeling-audiences` Skill Is Tasked With

## Purpose

The skill's job is to turn raw customer evidence — interviews, reviews, support tickets, sales notes, survey responses, search behavior, CRM data — into a structured, decision-ready **Audience Profile**. It is not a persona generator in the sense of "write me a fictional buyer." It is an evidence-processing system: feed it what's actually known about an audience, and it organizes that knowledge into segments, personas, jobs-to-be-done, pain points, motivations, objections, and buying triggers, each one tied to a concrete marketing implication.

The output is meant to be used, not filed away — by the person who ran it, or handed off directly to another skill (copywriting, campaign briefing, content strategy) that needs audience context to do its own job well.

## What it builds

Given evidence, the skill produces:

- **Audience segments** — actionable groupings, not vanity labels
- **Personas** — evidence-based representations, not invented biography
- **Jobs-to-be-done** — functional, emotional, and social, framed as progress the audience wants to make
- **Pain points, motivations, objections, and buying triggers** — kept as four distinct categories, never merged into a generic "needs" list
- **Decision criteria and current alternatives** — including "doing nothing" as a real competitor
- **Customer language** — sourced wording, clearly separated from paraphrase
- **Marketing implications** — what to say, what proof is needed, which channel fits, what to test next

## Core principles it operates under

**Evidence before assumptions.** The skill separates what was observed from what was interpreted. It never invents quotes, demographics, or motivations, and it labels anything unsupported as an assumption or hypothesis rather than presenting it as fact.

**People, not stereotypes.** Audiences are modeled around problems, context, and desired outcomes — not reduced to age, job title, or location unless that detail actually changes a marketing decision.

**Segments must be actionable.** A segment only earns its own entry if it would change the message, offer, or channel strategy. Two labels that lead to the same campaign are one segment, not two.

**Uncertainty is preserved, not smoothed over.** Every insight gets classified — confirmed, observed, reported, inferred, assumed, hypothesis, contradictory, or unknown — so nobody mistakes a guess for a verified fact.

**Every insight connects to an action.** A finding isn't complete until it answers: what should the brand say, what problem should content address, what proof is needed, which channel fits, what should be tested next.

## The nine-source hierarchy

When evidence conflicts or needs weighing, the skill works down this priority order: direct customer evidence, first-party behavioral data, sales/support conversations, search and social evidence, verified market research, campaign performance data, stakeholder reports, strategic assumptions, and — last — Claude-generated hypotheses. Contradictions are never averaged away; they're preserved, dated, and flagged for validation.

## The workflow

The skill runs through thirteen steps: define the modeling objective → establish business context → gather evidence → normalize it into themes without losing original customer language → identify relevant audience dimensions → build segments → prioritize them → build personas only where useful → define jobs-to-be-done → separate pain points from motivations from objections from triggers → extract sourced customer language → map the model to marketing decisions → validate the whole thing against a quality checklist before delivery.

## When it's meant to trigger

Requesting an audience profile or persona, defining a target audience, segmenting customers, supplying interviews or reviews or support data for analysis, asking for jobs-to-be-done, needing audience-specific messaging or content ideas, revising an existing persona, checking whether a campaign fits an audience, or launching into a new product, market, or customer group.

## What it deliberately refuses to do

It won't fabricate customer quotes, invented biography, or unsupported channel preferences. It won't collapse pain points, motivations, and objections into one undifferentiated list. It won't build a persona before a segment has earned one. It won't treat a stakeholder's opinion as verified customer insight. And it won't infer or target on protected characteristics without explicit authorization and legal review.

## How it hands off

For lightweight needs, a compact **Audience Card** carries the essentials — segment, primary job-to-be-done, main pain point, objection, customer language, best message angle — into another skill without pulling in the full profile. For deeper collaboration, a structured **Audience Handoff** format passes prioritized findings to skills like `writing-marketing-copy`, `briefing-campaigns`, `developing-content-strategy`, or `positioning-offers`, each tagged with its evidence and confidence level.
