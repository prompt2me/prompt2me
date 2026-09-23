```markdown 3
---
name: search-to-find-all
description: Transform complex "find all" requests into rigorous, evidence-validated research datasets. Decompose natural-language requests into explicit entities, predicates, definitions, exclusions, time boundaries, and evidence requirements; discover candidates through indexed datasets or multi-query web research; qualify every candidate against every mandatory criterion; verify claims at the source; preserve conflicts and unknowns; audit temporal validity, provenance, false positives, and search coverage; and return structured, traceable results without inventing, inferring, or overstating completeness. Trigger on "find all", "list every", "who are all the", "build me a table of", "which companies/people/products", "search and find all", "identify all", "find every", or /find-all.
Author: prompt2me
Version: 1.0.0
---

# Search-to-Find-All

## Purpose

Search-to-Find-All is a rigorous web research and evidence-validation system for answering requests that ask to discover, identify, compare, or enumerate entities matching multiple conditions.

Its purpose is not merely to search the web.

Its purpose is to transform an ambiguous natural-language request into a defensible research dataset in which:

- every included row satisfies the required criteria
- every populated field has supporting evidence
- every important claim can be traced to a source
- historical evidence is not silently presented as current
- unknown information remains unknown
- conflicting sources remain visible
- weak sources are not mistaken for proof
- rejected candidates are explainable
- search coverage is explicitly described
- "all" never means more than the available evidence supports

The core workflow is:

> **Interpret → Formalize → Define → Discover → Deduplicate → Qualify → Verify → Validate → Audit → Report**

The final answer should be treated as a research snapshot, not as an unsupported claim of omniscient web coverage.

---

## 1. Core Research Principle

A search result is not a finding.

A candidate is not a qualified result.

A source is not automatically evidence.

A populated cell is not automatically a verified fact.

The system must distinguish:

```text
DISCOVERY
↓
Candidate found
↓
QUALIFICATION
↓
Candidate appears to satisfy criteria
↓
VERIFICATION
↓
Evidence directly supports the claim
↓
VALIDATION
↓
Evidence is appropriate, current, and internally consistent
↓
INCLUSION
↓
Candidate is admitted to the final dataset
````

Never collapse these stages.

______________________________________________________________________

## 2. The Evidence-First Rule

Never fill a field because the value appears plausible.

Never infer a missing value from related information.

Never convert a search snippet into verified evidence.

Never assume that because one criterion is true, another related criterion is also true.

For example:

- A company being in Germany does not prove its job is based in Germany.
- A company being an AI company does not prove that a specific product uses generative AI.
- A Series B financing does not prove the company is currently hiring.
- A job listing does not automatically prove the position is still active.
- A person having a senior title does not prove they are the requested executive.
- A company appearing in an industry directory does not prove the company itself identifies with that industry.

Every required claim must be evaluated independently.

______________________________________________________________________

## 3. Before You Search: Research Specification

Do not begin searching immediately.

First convert the user's natural-language request into a structured research specification.

Identify:

1. ENTITY
2. REQUIRED PREDICATES
3. EXCLUSION CRITERIA
4. GEOGRAPHY
5. TIME WINDOW
6. STATUS
7. DEFINITIONS
8. EVIDENCE REQUIREMENTS
9. OUTPUT FIELDS
10. COVERAGE EXPECTATION
11. AMBIGUITIES

Use this internal structure:

**RESEARCH SPECIFICATION**

- **Entity:** What constitutes one row?
- **Required predicates:** What must be true?
- **Exclusions:** What disqualifies a candidate?
- **Geography:** What geographic boundary applies?
- **Time:** What dates or recency conditions apply?
- **Status:** Current / historical / announced / completed / active / inactive
- **Definitions:** How will ambiguous terms be operationalized?
- **Evidence:** What type of source can prove each criterion?
- **Output:** Which fields does the user actually need?
- **Coverage:** Dataset-exhaustive / broad web discovery / targeted discovery
- **Ambiguities:** Which unresolved interpretations could materially change the result set?

Do not silently invent definitions.

If an ambiguity could materially change the result set, ask for clarification.

If the ambiguity is minor, choose a reasonable operational definition and state it in the final methodology.

______________________________________________________________________

## 4. Query Decomposition

Break complex requests into atomic predicates.

Example:

> Find all Series B fintechs in Germany hiring a Head of Compliance.

Convert it into:

- **ENTITY:** Company
- **PREDICATE 1:** Company is a fintech
- **PREDICATE 2:** Company is located in Germany
- **PREDICATE 3:** Company has completed a Series B financing
- **PREDICATE 4:** Company currently has an open Head of Compliance or explicitly equivalent position
- **TEMPORAL REQUIREMENT:** Current hiring status
- **EVIDENCE REQUIREMENTS:** Independent evidence for each predicate

Do not allow a single vague source to stand in for several independent claims unless the source explicitly supports all of them.

______________________________________________________________________

## 5. Definition Resolution

Natural-language categories frequently contain hidden ambiguity.

Terms such as:

- startup
- fintech
- AI company
- enterprise
- recently
- active
- hiring
- senior
- European
- independent
- launched
- open
- Series B
- current

must be interpreted deliberately.

For each ambiguous term, determine whether it has:

- **Objective definition:** A clearly identifiable condition.
- **Operational definition:** A practical definition chosen for the research.
- **Source-dependent definition:** A definition that depends on how a reliable source categorizes the entity.
- **Unresolved definition:** An ambiguity that materially affects the result.

If unresolved ambiguity could materially alter the final dataset, stop and ask the user.

Never turn an assumption into an undisclosed fact.

______________________________________________________________________

## 6. Inclusion and Exclusion Rules

Before candidate discovery, establish what qualifies and what does not.

Example:

**INCLUDE:**

- Companies whose official materials identify them as fintech businesses
- Companies headquartered in Germany
- Explicitly documented Series B financing
- Currently active Head of Compliance-equivalent vacancy

**EXCLUDE:**

- Staffing agencies
- Companies merely selling to fintechs
- Historical job listings
- Expired positions
- Companies with only unverified funding claims
- Companies outside Germany

If the user supplied explicit inclusion or exclusion criteria, preserve them.

Do not silently weaken them to increase the number of results.

______________________________________________________________________

## 7. Search Routing

Decide the research mode before spending requests.


| Row type | Mode | Primary tools |
| :-- | :-- | :-- |
| Companies | Indexed | dataset search |
| People | Indexed | dataset search |
| Products | Live | web search and page retrieval |
| Tools | Live | web search and page retrieval |
| Venues | Live | web search and page retrieval |
| Papers | Live | web search and page retrieval |
| Grants | Live | web search and page retrieval |
| Events | Live | web search and page retrieval |
| Announcements | Live | web search and page retrieval |
| Known platform record | Enrich | appropriate enrichment tool |

Use the indexed dataset when a suitable dataset exists.

Use live search when no suitable dataset exists.

______________________________________________________________________

## 8. Tool Availability

This skill requires access to indexed datasets and live web research tools.

If no dataset tools are available:

Stop and state:

> Dataset tools are required for Search-to-Find-All. Connect the necessary data sources before running this research.

Do not silently fall back to memory or another search system.

If dataset search is unavailable but live tools exist, use live mode and disclose that indexed dataset coverage was unavailable.

______________________________________________________________________

## 9. Indexed Mode

For companies and people, use the appropriate dataset.

**Dataset Discovery**

Always call:

`list_dataset_fields`

before constructing dataset filters.

Do not guess field names.

**Filter construction**

Use the supported filter tree:

```text
group:
{
  operator: "and" | "or",
  filters: [...]
}
```

Supported leaf operators include:

- `=`
- `!=`
- `<`
- `<=`
- `>`
- `>=`
- `in`
- `not_in`
- `includes`
- `not_includes`
- `array_includes`
- `not_array_includes`
- `is_null`
- `is_not_null`

Use operators according to the actual field type.

Do not assume that similarly named fields have equivalent meanings.

______________________________________________________________________

## 10. Indexed Pagination

Dataset page size is capped at 10.

Use `search_after` to paginate.

Continue until:

- no additional records exist
- the requested indexed scope is exhausted
- the dataset query has been completely paginated

Never treat the first returned page as the complete dataset.

______________________________________________________________________

## 11. Indexed Data Extraction

Large dataset responses can overwhelm the working context.

When subagents are available:

- run dataset queries through the subagent
- request only the columns required for the research
- return structured extracted fields
- do not retain raw dataset records unnecessarily

When subagents are unavailable:

- request no more than 3 records per call
- immediately extract required fields and sources
- discard unnecessary raw records
- never carry large raw responses across calls

______________________________________________________________________

## 12. Joining Companies and People

When joining company and people datasets, use the company's actual dataset key.

For the people dataset:

`current_company_company_id`

must be matched against the company's slug/id where applicable.

Do not substitute numeric identifiers simply because they appear to represent the same company.

A wrong join key can silently produce zero results.

Treat empty joins as a condition requiring investigation, not proof that no relationship exists.

______________________________________________________________________

## 13. Live Search Mode

Live research follows five stages:

```text
DECOMPOSE
↓
DISCOVER
↓
READ
↓
VERIFY
↓
QUALIFY
```

**Stage 1: Decompose**

Generate approximately 5–10 independent search angles.

Search variations should attack the question through:

- category terminology
- entity terminology
- attribute terminology
- synonyms
- role variations
- date variations
- industry variations
- announcement language
- job terminology
- relevant platforms
- adjacent terminology

Do not rely on one query formulation.

______________________________________________________________________

## 14. Search Synonyms vs Qualification Equivalents

This distinction is mandatory.

**Search synonyms**

Terms used to discover possible candidates.

Example:

- Head of Compliance
- Compliance Director
- VP Compliance
- Chief Compliance Officer
- Director of Compliance
- Compliance Lead

**Qualification equivalents**

Terms that are actually accepted as satisfying the user's requested criterion.

Do not assume every search synonym is an equivalent qualification.

A broader search is useful for discovery.

A stricter test is required for inclusion.

______________________________________________________________________

## 15. Do Not Use site:

Do not use the `site:` search operator.

Search engines connected to this skill may return poor or empty results for it.

Instead use natural-language queries describing the desired source or entity.

______________________________________________________________________

## 16. Read Pages, Not Snippets

Search snippets are discovery signals.

They are not sufficient evidence for important claims.

After finding a candidate:

1. open the relevant source
2. inspect the actual page
3. identify the supporting passage or structured field
4. determine whether it supports the claim
5. record the source

Never construct the final dataset solely from search-result snippets.

______________________________________________________________________

## 17. Candidate Ledger

Every discovered candidate should enter a research ledger.

Use:

- CANDIDATE ID
- ENTITY
- DISCOVERY SOURCE
- DISCOVERY QUERY
- POSSIBLE MATCH CRITERIA
- VERIFICATION SOURCES
- QUALIFICATION STATUS
- REJECTION REASON
- CONFLICTS
- LAST VERIFIED

Example:

**Candidate:** Company A

**Discovered through:** Query 4

**Possible matches:**

- ✓ Germany
- ✓ fintech
- ? Series B
- ✓ compliance hiring

**Verification:**

- Official company page
- Funding announcement
- Current job listing

**Status:** UNVERIFIED

**Missing:** Reliable evidence of Series B

Do not allow candidates to disappear simply because they failed qualification.

______________________________________________________________________

## 18. Deduplicate on Entity

Deduplicate on the entity, not the URL.

The same entity may appear in:

- several articles
- multiple job boards
- several funding databases
- company pages
- social posts
- directories

Merge the candidate into one research entity.

Keep multiple sources attached to the entity.

Do not create multiple rows simply because the entity appears on multiple pages.

______________________________________________________________________

## 19. Candidate Qualification Gate

Every candidate must be evaluated against every mandatory predicate.

Use three states:

- **PASS:** Reliable evidence demonstrates that the criterion is satisfied.
- **FAIL:** Reliable evidence demonstrates that the criterion is not satisfied.
- **UNVERIFIED:** Available evidence is insufficient to determine whether the criterion is satisfied.

Never treat **UNVERIFIED** as **PASS** and never automatically treat it as **FAIL**.

______________________________________________________________________

## 20. Mandatory Inclusion Rule

A candidate enters the final result set only when every mandatory predicate is **PASS**.

Example:

**Company A**

- Germany: PASS
- Fintech: PASS
- Series B: PASS
- Current Head of Compliance role: PASS

**FINAL:** QUALIFIED

But:

**Company B**

- Germany: PASS
- Fintech: PASS
- Series B: PASS
- Current Head of Compliance role: UNVERIFIED

**FINAL:** UNVERIFIED

Do not include Company B in the qualified results merely because three of four criteria are confirmed.

______________________________________________________________________

## 21. Evidence Requirements Per Predicate

Each predicate must have an appropriate evidence source.

Evaluate:

```text
CLAIM
↓
SOURCE
↓
SOURCE TYPE
↓
SOURCE AUTHORITY
↓
DIRECTNESS
↓
TEMPORAL VALIDITY
↓
QUALIFICATION
```

A source must be capable of proving the claim it is attached to.

For example:


| Claim | Strong evidence |
| :-- | :-- |
| Company headquarters | Official company page / reliable company record |
| Funding round | Company announcement / reputable financial source |
| Current job | Active official job listing |
| Product availability | Official product page |
| Research result | Original paper |
| Regulatory action | Regulator |
| Event date | Official event source |


______________________________________________________________________

## 22. Source Hierarchy

Use sources according to their evidentiary role.

**Tier 1 — Primary**

- Official company pages
- Official job listings
- Government sources
- Regulatory filings
- Original research
- Official announcements
- Original datasets

**Tier 2 — High-quality secondary**

- Established financial publications
- Reputable industry publications
- Research institutions
- Established journalism
- Direct interviews

**Tier 3 — Aggregators**

- LinkedIn
- Crunchbase
- directories
- job aggregators
- Product Hunt
- review platforms

**Tier 4 — Discovery sources**

- listicles
- SEO pages
- scraped directories
- reposts
- social summaries
- search snippets

Lower-tier sources can discover candidates.

They should not automatically be treated as sufficient proof.

______________________________________________________________________

## 23. One Source Per Field

Every populated field must carry its source.

In a rendered table:

`Company¹`

with a corresponding source reference.

In CSV or JSON:

```text
company
company_source
country
country_source
funding
funding_source
```

Do not attach one generic source to an entire row when different claims came from different sources.

______________________________________________________________________

## 24. Claim-Level Verification

One field may contain multiple claims.

Example:

`Series B, $35M, March 2026`

contains:

1. Series B
2. \$35M
3. March 2026

Verify each component independently.

If only two are supported:

`Series B, March 2026`

and leave the amount blank.

Never allow one verified component to validate neighboring unsupported information.

______________________________________________________________________

## 25. Temporal Verification

For every time-sensitive claim, distinguish:

- EVENT DATE
- PUBLICATION DATE
- SOURCE DATE
- OBSERVED DATE
- LAST VERIFIED DATE
- CURRENT STATUS

A historical source can prove historical existence.

It cannot automatically prove current status.

For example:

```text
Job posted: 2026-08-01
Last checked: 2026-09-23
Status: Active
```

is different from:

```text
Article published: 2025-11-03
Claim: Company was hiring
Current status: UNVERIFIED
```

Never present historical evidence as current evidence.

______________________________________________________________________

## 26. Current-Status Verification

When the request contains:

- currently
- active
- open
- available
- hiring
- today
- now
- latest

perform explicit current-status verification.

Prefer the most recent authoritative source.

If the source does not establish current status, mark the claim **UNVERIFIED**.

______________________________________________________________________

## 27. Contradiction Protocol

When two credible sources disagree:

1. preserve both claims
2. record their dates
3. determine whether they measure the same thing
4. determine whether one is stale
5. assess source authority
6. do not silently choose one
7. expose unresolved contradictions

Example:

```text
Headcount: 423 according to Source A
Company size: 5,001–10,000 according to Source B
Status: CONFLICTING
Resolution: Not reconciled because the sources may use different measurement methods and dates.
```

Never average conflicting values.

Never manufacture a midpoint.

______________________________________________________________________

## 28. Null Is Not Zero

Treat missing information carefully.

Examples:

- `null funding` ≠ `no funding`
- `missing employee count` ≠ `zero employees`
- `no job found` ≠ `not hiring`
- `no public evidence` ≠ `event did not happen`

Use `UNKNOWN` or a blank field where appropriate.

______________________________________________________________________

## 29. Unknown Is a Result

Unknown information is not a failure.

It communicates that the available public evidence did not establish the requested fact.

Do not replace unknown values with:

- N/A
- probably
- estimated
- likely
- approximately

unless the user explicitly requests estimation and the methodology supports it.

______________________________________________________________________

## 30. Rejected Candidate Register

Candidates that appeared relevant during discovery but failed qualification should be recorded.

Use:

- REJECTED
- Entity
- Reason
- Failed predicate
- Evidence
- Last checked

Example:

**Company B**
Rejected because: The available job listing expired before the requested time window.

This prevents repeated rediscovery of the same false positive and makes the research process auditable.

______________________________________________________________________

## 31. Unverified Candidate Register

Maintain a separate section for candidates that could not be conclusively qualified.

Example:

**UNVERIFIED**

**Company C**

- PASS: Germany, Fintech, Series B
- UNVERIFIED: Current compliance vacancy
- Reason: No authoritative active listing found.

Do not merge these candidates into either qualified or rejected results.

______________________________________________________________________

## 32. False-Positive Audit

Before finalizing the dataset, inspect every included row.

Ask:

What is the strongest reason this row might NOT qualify?

Then test that possibility.

Examples:

- Is the company actually headquartered in the requested country?
- Is the funding stage really Series B?
- Is the role still active?
- Is the company actually in the requested industry?
- Does the source refer to the correct entity?
- Is the evidence current?

If a row fails the audit, remove or downgrade it.

______________________________________________________________________

## 33. False-Negative Audit

Review rejected and unverified candidates.

Ask:

What evidence could make this candidate qualify?

If a new authoritative source exists, re-evaluate the candidate.

This protects against over-aggressive exclusion.

______________________________________________________________________

## 34. Entity Resolution

Before combining evidence, confirm that all sources refer to the same entity.

Watch for:

- companies with similar names
- subsidiaries
- parent companies
- rebrands
- acquisitions
- people with identical names
- regional offices
- product names that resemble company names

Never combine evidence across entities without establishing identity.

______________________________________________________________________

## 35. Search Saturation

"Find all" is an ambition, not proof of completeness.

Measure practical search saturation.

Track:

- Discovery round 1: Candidates discovered
- Discovery round 2: New candidates
- Discovery round 3: New candidates
- Discovery round 4: New candidates

When repeated independent searches produce only previously discovered entities, the search is approaching practical saturation.

Report this as:

**Search saturation:** High / Moderate / Low

Do not represent saturation as proof that the entire public web has been exhausted.

______________________________________________________________________

## 36. Search Coverage

Classify the research coverage.

- **Dataset-Exhaustive:** All available records matching the dataset filter were paginated.
- **Broad Web Discovery:** Multiple independent search angles were used.
- **Targeted Discovery:** Specific sources, platforms, or domains were investigated.
- **Verified Subset:** Only candidates meeting all mandatory evidence requirements were included.

Use more than one classification when appropriate.

______________________________________________________________________

## 37. Coverage Does Not Equal Market Size

Never interpret dataset result counts as the actual number of entities in the market.

For example:

```text
Dataset matches: 1,294
Returned: 40
```

does not mean:

```text
There are 1,294 companies in the market.
```

It means:

```text
The dataset returned 1,294 matching records under the specified filter.
```

Always distinguish database count from real-world population.

______________________________________________________________________

## 38. Search Stopping Rules

Stop searching when one of the following conditions is met:

1. Indexed dataset pagination is exhausted.
2. No additional records are returned.
3. Independent search rounds produce no meaningful new candidates.
4. New searches repeatedly return already-known entities.
5. The requested research scope is exhausted.
6. Additional searches would materially increase cost without improving coverage.

Document the stopping condition.

______________________________________________________________________

## 39. Platform Enrichment

When a candidate appears on a known platform, use the corresponding enrichment tool when available.

Examples:

- LinkedIn
- Crunchbase
- job listings
- Reddit
- YouTube
- other supported platforms

Use enrichment to verify or expand candidate-level information.

Do not treat platform presence itself as proof of qualification.

______________________________________________________________________

## 40. Known Data Traps

The following traps must remain active:

**Headcount conflicts**

Different headcount fields can contradict one another.

Preserve both values.

**LinkedIn updates**

`updates[].title` may contain only the company name.

The actual post content may be in `updates[].text` alongside `date`, `likes_count`, `post_url`.

**Hiring data**

Global job counts are not equivalent to an actual open role.

Verify the specific position.

**Timestamps**

Timestamps may appear as epoch milliseconds or ISO strings.

Normalize both before filtering dates.

**Funding**

Null funding means `UNKNOWN`, not `UNFUNDED`.

**Position fields**

`position` may contain free-form biographies rather than actual job seniority.

Do not infer seniority merely from string matching.

**Contact information**

Do not fabricate or infer email addresses when the available data does not contain them.

**AI attribution**

Do not accept claims that a company, layoff, product, or event was caused by AI merely because a roundup says so.

Verify the underlying claim.

______________________________________________________________________

## 41. Evidence Matrix

For complex requests, construct an internal matrix:


| Entity | Predicate | Evidence | Source type | Date | Status |
| :-- | :-- | :-- | :-- | :-- | :-- |
| A | Germany | Source 1 | Primary | 2026 | PASS |
| A | Fintech | Source 2 | Primary | 2026 | PASS |
| A | Series B | Source 3 | Secondary | 2026 | PASS |
| A | Current role | Source 4 | Primary | 2026 | PASS |

Every final row should be reconstructable from this matrix.

______________________________________________________________________

## 42. Qualification Trace

For each included entity, maintain a concise internal qualification trace:

```text
ENTITY
✓ Predicate A
✓ Predicate B
✓ Predicate C
✓ Predicate D

DECISION: QUALIFIED

EVIDENCE:
Source A
Source B
Source C
Source D
```

For excluded candidates:

```text
ENTITY
✓ Predicate A
✓ Predicate B
✗ Predicate C

DECISION: REJECTED

REASON: Failed Predicate C
```

For uncertain candidates:

```text
ENTITY
✓ Predicate A
✓ Predicate B
? Predicate C

DECISION: UNVERIFIED
```


______________________________________________________________________

## 43. Final Quality Audit

Before returning the final answer, audit the entire dataset.

For every included row ask:

- Does it satisfy every mandatory predicate?
- Does every populated field have a source?
- Does each source actually support the attached claim?
- Is the source appropriate for the claim?
- Is the evidence current enough?
- Are multiple claims inside one field independently supported?
- Are there unresolved contradictions?
- Has historical evidence been mistaken for current evidence?
- Has an inference been presented as fact?
- Has a discovery source been mistaken for verification?
- Is the entity correctly resolved?
- Should this row be downgraded to UNVERIFIED or REJECTED?

Do not return the final dataset until these checks pass.

______________________________________________________________________

## 44. Output Structure

Use the following structure for complex Find All requests.

# Find All: [User Query]

## Research Interpretation

**Entity:** [definition]

**Required criteria:**

- ...
- ...
- ...

**Operational definitions:**

- ...

**Time window:** ...

**Geographic scope:** ...

## Coverage

**Mode:** Indexed / Live / Enriched

**Search scope:** ...

**Discovery rounds:** ...

**Candidates discovered:** ...

**Candidates verified:** ...

**Candidates rejected:** ...

**Search saturation:** High / Moderate / Low

**Last checked:** YYYY-MM-DD

## Qualified Results

| Entity | Criterion 1 | Criterion 2 | Criterion 3 | Criterion 4 |
| :-- | :-- | :-- | :-- | :-- |
| ... | ... | ... | ... | ... |

Every populated field must have source provenance.

## Blanks / Unknowns

Fields where no sufficient public evidence was found.

## Conflicts

Sources that provide materially different values or claims.

## Unverified Candidates

Candidates that may qualify but could not be conclusively verified.

## Rejected Candidates

Candidates that appeared relevant but failed one or more mandatory criteria.

## Coverage Limitations

Explain:

- datasets used
- search methods
- unavailable sources
- failed pages
- temporal limitations
- unresolved definitions
- why the result cannot be interpreted as a literal census unless it truly is one

______________________________________________________________________

## 45. Compact Output

For simple requests, do not overwhelm the user with the entire research ledger.

Use:

**RESULTS**


| Entity | Key facts | Source |
| :-- | :-- | :-- |

**BLANKS**
...

**REJECTED**
...

**COVERAGE**
...

**LAST VERIFIED**
...

Expose the deeper evidence matrix when the user asks for methodology, auditability, or detailed sourcing.

______________________________________________________________________

## 46. Export Rules

The dataset is designed to leave the conversation.

Offer:

- CSV
- JSON

For CSV:

```text
entity
entity_source
criterion_1
criterion_1_source
criterion_2
criterion_2_source
status
last_verified
```

For JSON:

```json
{
  "entity": "...",
  "criteria": {
    "criterion_1": {
      "value": "...",
      "source": "...",
      "status": "verified"
    }
  },
  "qualification_status": "qualified",
  "last_verified": "YYYY-MM-DD"
}
```

Never remove provenance when exporting.

______________________________________________________________________

## 47. Reproducibility

Every research result should be reproducible as far as practical.

Record:

- original query
- operational definitions
- search mode
- dataset used
- search angles
- collection date
- qualification rules
- exclusions
- source URLs
- unresolved conflicts
- coverage limitations

A future run should be capable of being compared against the previous run.

______________________________________________________________________

## 48. Change Detection

For recurring research, re-run the same specification.

Compare:

- NEW
- REMOVED
- CHANGED
- UNCHANGED
- NEWLY VERIFIED
- NO LONGER VERIFIED

Examples:

- companies newly entering the criteria
- companies leaving the criteria
- newly opened positions
- expired positions
- changed funding information
- changed executive roles
- changed company status

The difference between two verified snapshots may be more valuable than either snapshot alone.

______________________________________________________________________

## 49. Research Integrity Rules

The following rules are absolute:

1. Never fabricate a row.
2. Never fabricate a field.
3. Never fabricate a source.
4. Never infer missing information silently.
5. Never treat a snippet as sufficient proof for an important claim.
6. Never treat discovery as verification.
7. Never treat historical evidence as current evidence.
8. Never treat null as zero.
9. Never hide contradictions.
10. Never claim exhaustive coverage without evidence.
11. Never use one source to support unrelated claims.
12. Never weaken the user's criteria merely to increase the number of results.
13. Never remove provenance from exported data.
14. Never turn UNVERIFIED into PASS.
15. Never turn a search result count into a real-world population estimate.

______________________________________________________________________

## 50. What This Skill Does

Search-to-Find-All:

- interprets complex discovery requests
- formalizes research criteria
- resolves operational definitions
- searches indexed datasets
- performs multi-angle live discovery
- identifies candidate entities
- deduplicates entities
- verifies individual claims
- validates evidence
- checks temporal relevance
- handles conflicting sources
- tracks unknowns
- maintains rejected and unverified candidates
- measures practical search coverage
- audits false positives and false negatives
- preserves source provenance
- produces structured research datasets
- supports CSV and JSON export
- enables repeat research and change detection

______________________________________________________________________

## 51. What This Skill Does NOT Do

Search-to-Find-All does not:

- claim that a web search is literally exhaustive
- invent missing information
- infer unsupported facts
- provide email addresses when the available data does not contain them
- treat directories as authoritative merely because they contain the requested entity
- silently reconcile contradictory data
- substitute another search system when required tools are unavailable
- use `site:` queries
- convert estimates into facts
- treat database coverage as equivalent to real-world population coverage
- claim that no public evidence means that an event did not occur
- return an entity as qualified when a mandatory predicate remains unverified

______________________________________________________________________

## 52. Final Operating Principle

Search-to-Find-All is not optimized for producing the largest table.

It is optimized for producing the largest defensible table.

The system should prefer:

- 25 verified rows

over:

- 100 plausible rows

and:

- 25 verified rows + 12 unverified candidates + 8 rejected candidates + transparent coverage

over:

- 45 rows presented as fact

The central discipline is:

> Search broadly. Qualify narrowly. Verify independently. Preserve uncertainty. Expose provenance. Explain coverage.

The final result should allow a reader to trace the path:

```text
USER QUESTION
      ↓
RESEARCH SPECIFICATION
      ↓
SEARCH STRATEGY
      ↓
CANDIDATES
      ↓
EVIDENCE
      ↓
PREDICATE TESTS
      ↓
QUALIFICATION
      ↓
AUDIT
      ↓
FINAL DATASET
```

That is the standard Search-to-Find-All must maintain.

```
```

