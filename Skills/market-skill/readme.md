<img src="https://github.com/prompt2me/prompt2me/blob/main/Skills/market-skill/images/search.png" alt="Searching-market Skill">

# Researching Markets: An Institutional Market Research Skill for Claude

## What It Is

**Researching Markets** is a Claude skill that turns Claude into a disciplined market research analyst — one that refuses to guess. Instead of drawing on training data (which can be outdated, imprecise, or simply wrong for a fast-moving market), the skill forces every quantitative claim in a report — market size, growth rate, competitor pricing, regulatory requirement — to be retrieved live, in the current conversation, using web search and web fetch. If a number can't be found live, it isn't reported as fact. It's explicitly labeled `Assumption` or `Unknown`.

The output is a **Market Research Report**: a structured, fully-sourced document that traces every figure back to a dated, tiered source, and clearly separates fact from inference, assumption, and hypothesis. It's built to be handed to a founder, an investor, or an executive team and actually acted on — not a plausible-sounding summary that falls apart under scrutiny.

## The Problem It Solves

The single most common failure mode in AI-assisted market research isn't bad writing — it's **confident, unverifiable numbers**. A model asked "how big is the market for X" will readily produce a TAM, a CAGR, and a competitive landscape that read as authoritative but are stitched together from stale training data, memory of adjacent facts, or plausible-sounding extrapolation. For a professional marketer, that's a serious liability: a wrong TAM can justify chasing a market that doesn't exist at that scale; an out-of-date regulatory read can mean an entire go-to-market plan misses a compliance requirement.

This skill exists specifically to close that gap. It treats live retrieval as **non-negotiable** for anything with a number or a "current as of" quality, and it makes the analyst's epistemic state visible — what's confirmed, what's inferred, what's assumed, what's genuinely unknown — rather than flattening everything into equally confident prose.

## Core Principle: No Market Claim Without a Live Source

This is the skill's foundational rule, and everything else is built to enforce it:

> If a number isn't retrieved live in this session, it does not go into the report as fact.

Every retrieved source is logged in a **Source Register** (name, URL, publisher, date, tier, and which section it was used in). Every claim derived from that source is logged in an **Evidence Register**, tagged with an evidence type:

- **Fact** — directly retrieved and verifiable
- **Observation** — a pattern noticed across sources
- **Inference** — a reasoned conclusion from evidence
- **Assumption** — a stated, unverified premise
- **Hypothesis** — a testable proposition, not yet confirmed
- **Recommendation** — an action suggested from the evidence
- **Unknown** — explicitly flagged as unresolved
- **Contradiction** — sources disagree, and that disagreement is preserved rather than papered over

Sources are also tiered — **Tier 1 (Primary)**, **Tier 2 (Established Secondary)**, **Tier 3 (Aggregated)** — so a reader can immediately judge how much weight a given figure deserves.

## How the Research Process Works

The skill runs a structured, 13-step workflow rather than a single open-ended search-and-summarize pass:

1. **Define the research brief** — market, decision, key questions, scope, constraints
2. **Form research questions** — prioritized as Must-answer / Should-answer / Nice-to-have
3. **Market sizing** — TAM, CAGR, and market reports, with high-tier sources fetched in full
4. **Demand analysis** — demand drivers, adoption barriers, willingness-to-pay evidence
5. **Define TAM / SAM / SOM** — top-down or bottom-up, using the data already gathered
6. **Industry structure** — competitive concentration, entry barriers, forces shaping the category
7. **Trend analysis** — industry, technology, regulatory, and macro trends
8. **Customer and buyer behavior** — reviews, forums, and complaints, not just vendor marketing
9. **Competitor and alternative analysis** — pricing pages and review aggregators fetched directly
10. **Regulatory and compliance analysis** — using deeper search for primary regulatory text, with a mandatory "not legal advice" disclaimer
11. **Opportunity and risk identification** — targeted searches to close remaining gaps
12. **Strategic implications** — audience, positioning, offer, channels, messaging, and experiments
13. **Validation** — a checklist run before anything is delivered

Search behavior is deliberately calibrated rather than exhaustive for its own sake: queries stay short (2–6 words), each one must add new information rather than reword the last, geography and year are named when they matter, and query volume scales with how well-documented the market already is — a handful of queries for a mature category, up to ten for something niche or emerging. Fetching a full page (rather than relying on a search snippet) is reserved for cases where it actually earns its cost: high-tier sources with quantitative claims, conflicting figures that need resolution, or a competitor/regulatory page that needs structured extraction.

## Handling Disagreement Honestly

When two credible sources give different numbers, the skill doesn't quietly pick one. It documents both, evaluates which has stronger methodology, recency, and independence, runs one additional tiebreaker search, and then states a provisional interpretation — clearly labeled as an inference, not a fact — using a structured **Evidence Conflict format** (Question / Finding A / Finding B / Why It Matters / Provisional Interpretation / Confidence / Recommended Validation). If the conflict is decision-critical, it's escalated into the report's Research Limitations section with a concrete way to resolve it.

## What the Final Report Contains

The Market Research Report follows a fixed template, from Cover Information through a Change Log, and includes:

- Market Size (with method and exclusions for TAM/SAM/SOM)
- Demand Analysis
- Industry Structure
- Trend Analysis
- Competitor Analysis
- Regulatory Analysis (with disclaimer where relevant)
- Opportunity and Risk tables
- Strategic Implications
- A Recommendation tied explicitly back to the original decision from the research brief
- The complete Source Register and Evidence Register

One structural discipline worth calling out for a marketing audience: **the Executive Summary is written last**, and it may not introduce any claim absent from the report body. It's a compression of the findings, not a separate narrative layered on top of them.

## Who This Is For

This skill is built for anyone who needs market numbers that can survive being challenged — not just numbers that sound right:

- **Marketers and growth leads** validating a new category, positioning bet, or expansion market before committing budget
- **Founders and product teams** doing go/no-go analysis on a new product or geography
- **Consultants and analysts** who need a defensible, source-traceable report to hand to a client
- **Investors and strategy teams** sizing an opportunity or diligring a market claim in a pitch

## What Makes It Different From Asking Claude to "Research a Market"

Without this skill, asking an LLM for market sizing tends to produce a confident-sounding paragraph with no way to check where the numbers came from — because there often isn't a real "where." This skill inverts that: retrieval comes first, claims come second, and everything in between is logged, dated, tiered, and typed. The report doesn't just tell you what the market looks like — it shows its work, flags its own gaps, and tells you exactly what would need to be true (or verified) for its recommendation to hold up.

## A Note on Limits

The skill is explicit that its regulatory analysis is **not legal advice**, and it deliberately preserves unresolved contradictions rather than resolving them by fiat. Its output is only as strong as what's publicly retrievable in a given session — for genuinely obscure or paywalled markets, more of the report will honestly land in `Assumption` or `Unknown` territory, which is by design: a report that admits what it doesn't know is more useful than one that quietly fills the gap with something plausible.
[download the researching-market skill](https://github.com/prompt2me/prompt2me/blob/main/Skills/market-skill/researching-markets.skill)
