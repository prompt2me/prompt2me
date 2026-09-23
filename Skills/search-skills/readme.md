<img src="https://raw.githubusercontent.com/prompt2me/prompt2me/main/Skills/search-skills/Images/find.png" alt="Search-to-Find-All Skill">

# Search-to-Find-All Skill — README

## Overview

**Search-to-Find-All** is a professional-grade Claude Skill for rigorous, evidence-validated “find all” research. It transforms ambiguous natural-language requests into defensible datasets where every row satisfies explicit criteria, every claim is traceable to a source, and uncertainty is preserved rather than hidden.

Use this skill when you need auditable, source-backed enumeration of companies, people, products, events, papers, grants, or similar entities under multiple conditions.

______________________________________________________________________

## When to Use

Trigger this skill with requests such as:

- “Find all Series B fintechs in Germany hiring a Head of Compliance.”
- “List every AI startup in France that raised funding in 2025.”
- “Build me a table of climate-tech companies in Spain with open CTO roles.”
- “Identify all researchers in Europe working on LLM safety.”
- “Find every product launch in generative AI this quarter.”

The skill is designed for **complex, multi-criteria discovery** where accuracy, provenance, and methodological transparency matter more than speed or volume.

______________________________________________________________________

## What This Skill Delivers

- **Structured research datasets** with explicit qualification rules.
- **Source-backed fields** (one source per claim, not per row).
- **Clear separation** of qualified, unverified, and rejected candidates.
- **Temporal awareness** (historical vs. current status).
- **Conflict preservation** when sources disagree.
- **Coverage disclosure** (what was searched, what was found, what remains unknown).
- **Export-ready outputs** (CSV/JSON with provenance intact).

______________________________________________________________________

## Core Workflow

```text
Interpret → Formalize → Define → Discover → Deduplicate → Qualify → Verify → Validate → Audit → Report
```

1. **Interpret:** Convert the user’s request into a research specification.
2. **Formalize:** Define entities, predicates, exclusions, geography, time, and evidence requirements.
3. **Define:** Operationalize ambiguous terms (e.g., “startup”, “AI company”, “recently”).
4. **Discover:** Run multi-angle searches (indexed datasets + live web research).
5. **Deduplicate:** Merge candidates by entity, not by URL.
6. **Qualify:** Test every candidate against every mandatory predicate (PASS/FAIL/UNVERIFIED).
7. **Verify:** Confirm each claim at the source level.
8. **Validate:** Check temporal validity, source authority, and internal consistency.
9. **Audit:** Run false-positive and false-negative checks.
10. **Report:** Return structured results with coverage, conflicts, blanks, and methodology.

______________________________________________________________________

## Output Structure

For complex requests, expect:

```markdown
# Find All: [User Query]

## Research Interpretation
- Entity: …
- Required criteria: …
- Operational definitions: …
- Time window: …
- Geographic scope: …

## Coverage
- Mode: Indexed / Live / Enriched
- Search scope: …
- Discovery rounds: …
- Candidates discovered / verified / rejected: …
- Search saturation: High / Moderate / Low
- Last checked: YYYY-MM-DD

## Qualified Results
| Entity | Criterion 1 | Criterion 2 | Criterion 3 | Criterion 4 |
|---|---|---|---|---|

## Blanks / Unknowns
…

## Conflicts
…

## Unverified Candidates
…

## Rejected Candidates
…

## Coverage Limitations
…
```

For simple requests, a compact table with key facts and sources is provided.

______________________________________________________________________

## Evidence Standards

- **One source per field**, not one source per row.
- **Claim-level verification** (e.g., “Series B, \$35M, March 2026” → verify each component).
- **Source hierarchy:**
    - Tier 1: Official pages, filings, original research.
    - Tier 2: Reputable publications, institutions.
    - Tier 3: Aggregators (LinkedIn, Crunchbase).
    - Tier 4: Discovery sources (listicles, snippets).
- **Temporal verification:** Distinguish event date, publication date, and current status.
- **Contradictions:** Preserve conflicting values with dates and sources; do not average or silently choose.

______________________________________________________________________

## Research Integrity Rules

Absolute constraints:

1. Never fabricate rows, fields, or sources.
2. Never infer missing information silently.
3. Never treat snippets as sufficient proof for important claims.
4. Never treat discovery as verification.
5. Never treat historical evidence as current evidence.
6. Never treat null as zero.
7. Never hide contradictions.
8. Never claim exhaustive coverage without evidence.
9. Never weaken user criteria to increase results.
10. Never remove provenance from exported data.
11. Never turn UNVERIFIED into PASS.
12. Never turn dataset counts into real-world population estimates.

______________________________________________________________________

## Export \& Reproducibility

- **CSV/JSON export** with entity, criteria, sources, status, and `last_verified`.
- **Reproducibility metadata:** original query, definitions, search mode, datasets, angles, dates, rules, exclusions, URLs, conflicts, limitations.
- **Change detection:** For recurring research, compare NEW / REMOVED / CHANGED / UNCHANGED / NEWLY VERIFIED / NO LONGER VERIFIED.

______________________________________________________________________

## Limitations \& Scope

This skill does **not**:

- Claim that a web search is literally exhaustive.
- Invent missing information or infer unsupported facts.
- Provide email addresses when data does not contain them.
- Treat directories as authoritative merely because they list the entity.
- Silently reconcile contradictory data.
- Use `site:` queries.
- Convert estimates into facts.
- Treat database coverage as equivalent to real-world population.
- Claim that no public evidence means an event did not occur.
- Return an entity as qualified when a mandatory predicate remains unverified.

______________________________________________________________________

## Best Practices for Users

- **Be explicit** about inclusion/exclusion criteria, geography, and time windows.
- **Clarify ambiguous terms** (e.g., “AI company”, “enterprise”, “recently”) if they materially affect results.
- **Request methodology details** if you need audit trails, evidence matrices, or qualification traces.
- **Use for recurring research** to leverage change detection and snapshot comparisons.
- **Treat outputs as research snapshots**, not omniscient censuses.

______________________________________________________________________

## Example Prompt

```text
Find all Series B fintechs in Germany hiring a Head of Compliance.

Include:
- Companies headquartered in Germany
- Explicitly documented Series B financing
- Currently active Head of Compliance or equivalent role

Exclude:
- Staffing agencies
- Companies merely selling to fintechs
- Historical or expired job listings

Output: Table with company, country, funding stage, role title, source links.
```


______________________________________________________________________

## Version

**Author:** prompt2me\
**Version:** 1.0.0\
**Last updated:** 2026-09-23

______________________________________________________________________

## Support

For modifications, extensions, or integration into larger workflows (e.g., newsletters, slide decks, interactive reports), treat this skill as a modular research engine. Pair it with verification, summarization, or visualization skills as needed.
[Download Search-to-Find-All Skill](https://raw.githubusercontent.com/prompt2me/prompt2me/main/Skills/search-skills/search-to-find-all.md)

