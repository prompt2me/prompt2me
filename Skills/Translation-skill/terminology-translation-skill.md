<img src="https://raw.githubusercontent.com/prompt2me/prompt2me/main/Skills/Translation-skill/Images/terminology-skill.png" alt="Technical writing: Technical design">

# Terminology Stability Skill
<a href="https://github.com/prompt2me/prompt2me/blob/main/Skills/Translation-skill/terminology-stability-Translation.md" style="color: #000000;"> ▪︎ Terminology Stability Translation Skill</a>
## Overview

This skill helps Claude generate text with stable terminology across long outputs, repeated revisions, localization tasks, and marketing or documentation workflows.

It is designed to reduce terminology drift at generation time by combining:

- Canonical term maps.
- Standing system-level instructions.
- Retrieval-time context injection.
- Deterministic generation settings.
- Structured output constraints.
- Multi-pass normalization.
- Self-check and validation.

This skill does **not** replace glossary governance or human review. Instead, it makes the model more likely to use the correct term consistently during generation.

***

## When to use

Use this skill when you need Claude to:

- Maintain fixed product terminology.
- Preserve UI labels and feature names.
- Avoid synonym drift in marketing, documentation, support, or localization text.
- Rewrite content while keeping approved terms stable.
- Generate repeatable outputs from recurring terminology sets.
- Translate or adapt text with locked brand language.

***

## Core principle

Terminology drift often happens when the model is asked to “be consistent” without explicit term-level constraints.

This skill prevents that by making terminology rules visible at generation time and by adding an internal correction loop:

1. Load the approved terms.
2. Generate with term constraints.
3. Check the result against the canonical list.
4. Normalize any drift.
5. Return only the final output.

***

## Inputs

You should provide the following inputs when using this skill.

### 1. Task type

State the task clearly:

- Rewrite.
- Summarize.
- Translate.
- Localize.
- Generate new content.
- Edit existing content.


### 2. Canonical term map

Provide a term map with:

- Preferred term.
- Forbidden variants.
- Short definition.
- Optional part of speech.
- Optional notes.
- Optional do-not-translate marker.


### 3. Context bundle

Provide any relevant context that should be injected into the prompt:

- Product description.
- Audience.
- Domain.
- UI screenshots or extracted labels.
- Source text.
- Locale constraints.
- Style constraints.


### 4. Output constraints

State the required output format:

- Plain text.
- Markdown.
- Table.
- JSON.
- Bullet list.
- Translation only.
- Rewrite plus drift report.

***

## Canonical term map format

Use a compact, structured format so the model can apply the rules reliably.

```yaml
terminology:
  - canonical: "customer journey"
    forbidden:
      - "buyer journey"
      - "user journey"
      - "client journey"
    definition: "The end-to-end path a customer takes from awareness to conversion and retention."
    part_of_speech: noun
    status: preferred
    notes: "Use exactly this phrase in all marketing materials."

  - canonical: "lead magnet"
    forbidden:
      - "lead bait"
      - "prospect magnet"
      - "free offer"
    definition: "A free resource used to capture a prospect’s contact information."
    part_of_speech: noun
    status: preferred

  - canonical: "dashboard"
    forbidden:
      - "control panel"
      - "admin page"
      - "overview screen"
    definition: "The primary interface page that displays key metrics and actions."
    part_of_speech: noun
    status: preferred
```


***

## Operating rules

### Rule 1: Treat canonical terms as fixed

If a term appears in the approved list, use that exact term every time.

### Rule 2: Never swap in synonyms

If a forbidden variant appears in the draft, replace it with the canonical term.

### Rule 3: Respect do-not-translate items

Product names, UI labels, and brand terms marked as fixed must remain unchanged.

### Rule 4: Use the glossary as the source of truth

If general language conflicts with the term map, the term map wins.

### Rule 5: Check repeated mentions

If the same concept appears multiple times, ensure it is rendered identically each time.

### Rule 6: Preserve meaning while normalizing terminology

Only adjust surrounding wording when needed to keep the sentence natural after term replacement.

### Rule 7: If uncertain, prefer stability

When a term could be rendered in multiple ways, choose the canonical term, not a stylistic variant.

***

## Inference-time prompt template

Use this template in the live prompt when calling Claude.

```text
You are a terminology-stable language model.

Follow these rules strictly:
1. Use only the canonical terms provided below.
2. Do not use forbidden variants.
3. Do not translate do-not-translate items.
4. Keep terminology stable across the entire output.
5. If you detect drift in your own draft, rewrite the full passage before responding.
6. Prefer exact terminology over stylistic variation.
7. When context is ambiguous, use the canonical definition, not general-language synonyms.

Canonical term map:
[INSERT TERMINOLOGY MAP]

Context:
[INSERT PRODUCT / DOMAIN / AUDIENCE CONTEXT]

Task:
[INSERT TASK]

Output format:
[INSERT REQUIRED FORMAT]

Final instruction:
Before answering, run a terminology consistency check on your own output and fix any mismatch.
```


***

## Retrieval-augmented prompting pattern

When a term map is large or changes frequently, inject only the relevant terms for the current task.

### Example pattern

1. Identify the source text’s key concepts.
2. Retrieve only matching canonical entries.
3. Insert those entries into the prompt.
4. Generate the draft.
5. Run a final terminology audit.

### Why this helps

The model sees the current preferred wording at the moment of generation, which reduces the chance of old or conflicting phrasing reappearing.

***

## Deterministic generation mode

For terminology-sensitive tasks, use conservative generation settings.

Recommended behavior:

- Lower temperature.
- Avoid overly creative sampling.
- Prefer stable, direct wording.
- Avoid multiple alternative phrasings for the same concept.
- Use fixed structure where possible.


### Practical guidance

When the task is translation, rewriting, or documentation generation, ask the model to favor:

- Exact lexical reuse.
- Minimal paraphrase around term-critical segments.
- Stable repeated phrasing.

This is especially useful when the same term appears many times in one document.

***

## Structured output constraints

Structure reduces drift because the model has fewer degrees of freedom.

### Examples

- Use a table with fixed columns.
- Use labels such as `Approved Term`, `Forbidden Variant`, `Replacement`.
- Use placeholders for terms that must not change.
- Require the model to preserve headings exactly.
- Require identical formatting for repeated product labels.


### Example instruction

```text
Return the result in the following structure only:
1. Final text.
2. Terminology corrections applied.
3. Any unresolved ambiguity.

Do not add extra sections.
```


***

## Multi-pass generation workflow

This skill works best with a two-pass or three-pass pattern.

### Pass 1: Draft

Generate the content naturally, but already constrained by the canonical term map.

### Pass 2: Normalize

Review the draft for:

- Synonym drift.
- Mixed naming.
- Old labels.
- Inconsistent capitalization.
- Unapproved variants.
- Incorrect translations of fixed product terms.

Rewrite any term that does not match the canonical entry.

### Pass 3: Final audit

Check the whole output for:

- Every canonical term appearing in approved form.
- No forbidden variants remaining.
- No accidental variations in repeated mentions.
- No contradictory terminology in headings, bullets, or examples.

Return only the final cleaned result.

***

## Self-check rubric

Before finalizing output, apply this checklist internally.

### Terminology checks

- Did every approved term appear in its canonical form?
- Did any forbidden variant appear?
- Did any product name or UI term change?
- Did any repeated concept use multiple wordings?
- Did any mixed singular/plural form appear incorrectly?
- Did any translated term shift across the text?


### Context checks

- Does the term still fit the intended meaning?
- Did the surrounding sentence remain natural after replacement?
- Did any ambiguous term need disambiguation notes?
- Did any locale-specific term require a fixed translation?


### Quality checks

- Is the output readable?
- Is the meaning preserved?
- Is the terminology stable from beginning to end?
- Is the output aligned with the requested format?

If any check fails, rewrite the affected portion before responding.

***

## Terminology validator behavior

For tasks that need stricter enforcement, use an internal validator step.

### Validator responsibilities

- Flag terms not present in the canonical list.
- Flag synonyms that should be replaced.
- Flag outdated labels.
- Flag mixed naming in repeated references.
- Flag partial matches that could cause confusion.
- Flag translated product names that should remain fixed.


### Validator output format

Use a compact report only when requested.

Example:

```text
Corrections:
- "buyer journey" -> "customer journey"
- "free offer" -> "lead magnet"
- "overview screen" -> "dashboard"

Final text:
[clean version]
```

If the user does not request a report, apply the corrections silently and return only the final text.

***

## Translation mode

When translating, terminology stability matters even more.

### Translation rules

- Translate the meaning, not the term map.
- Preserve fixed brand and product names.
- Use the approved target-language equivalent for each glossary term.
- Avoid creative variation for recurring labels.
- Keep interface terms identical across all steps.
- Do not let context override an approved translation unless the term map says so.


### Translation prompt pattern

```text
Translate the text below.

Rules:
- Use only the approved target-language term for each glossary entry.
- Do not translate fixed product names.
- Keep UI labels identical across the full text.
- If a term appears more than once, translate it the same way each time.
- After translation, run a consistency pass and fix any drift.

Glossary:
[INSERT GLOSSARY]

Text:
[INSERT SOURCE TEXT]
```


***

## Marketing mode

For marketing content, terminology drift can weaken brand consistency.

### Marketing-specific safeguards

- Lock brand claims to approved phrasing.
- Keep campaign names unchanged.
- Preserve product tier names exactly.
- Use one approved term for each funnel stage.
- Avoid rotating between near-synonyms when the brand language is defined.


### Example marketing rule set

```yaml
brand_terms:
  - canonical: "value proposition"
    forbidden: ["core value", "brand promise", "main benefit"]
    definition: "The unique value the brand offers to a target audience."
  - canonical: "customer journey"
    forbidden: ["buyer path", "user journey"]
    definition: "The staged path from awareness to conversion and retention."
```


***

## Documentation mode

For documentation, terminology must match the UI and product behavior.

### Documentation safeguards

- Match labels exactly as they appear in the product.
- Keep button names, menu items, and navigation items fixed.
- Use the same term in steps, warnings, notes, and headings.
- Avoid paraphrasing interface language.
- Normalize wording across the whole manual or article.


### Documentation instruction

```text
The terminology must match the product interface exactly.
If a UI label appears in the source text, preserve it exactly.
If the same feature is mentioned more than once, use the same approved wording every time.
```


***

## Localization mode

For multilingual workflows, the skill should preserve approved equivalent terms across locales.

### Localization safeguards

- Keep locale-specific approved translations stable.
- Respect grammatical gender, part of speech, and number.
- Maintain product term consistency across all localized pages.
- Align glossary, translation memory, and runtime prompt constraints.
- Use context notes to resolve ambiguous technical terms.


### Localization instruction

```text
Use the approved localized terminology only.
Do not alternate between variants.
If the term has a preferred translation in the glossary, use it even if a different synonym is more common in general language.
```


***

## Output formats

This skill supports several output modes.

### Mode A: Final text only

Use when the user wants the clean result.

### Mode B: Final text plus corrections

Use when the user wants to see terminology changes.

### Mode C: Final text plus audit checklist

Use when quality assurance is important.

### Mode D: Structured localization output

Use when integrating with pipelines or tools.

Example:

```json
{
  "final_text": "...",
  "terminology_corrections": [
    {"from": "buyer journey", "to": "customer journey"}
  ],
  "status": "clean"
}
```


***

## Reusable prompt blocks

### Block 1: Canonical term lock

```text
Use only the canonical terms listed below. Do not replace them with synonyms.
```


### Block 2: Drift prevention

```text
If you detect any terminology drift in your draft, rewrite the full passage before responding.
```


### Block 3: Self-check

```text
Before finalizing, compare the output against the term map and correct any mismatch.
```


### Block 4: Repeat-consistency rule

```text
If a term appears more than once, render it exactly the same way each time.
```


### Block 5: Fixed interface language

```text
UI labels, product names, and feature names must remain exactly as provided.
```


***

## Example full prompt

```text
You are a terminology-stable writing assistant.

Rules:
- Use only the canonical terms in the glossary.
- Do not use forbidden variants.
- Keep product names and UI labels unchanged.
- Preserve term consistency across the entire output.
- If you detect drift, rewrite the output before returning it.
- Prefer the glossary definition over general-language synonyms.
- Run a final terminology consistency check before responding.

Glossary:
- customer journey = the path from awareness to conversion and retention
- lead magnet = a free resource used to capture contact details
- dashboard = the main interface page with key metrics and actions

Source text:
[INSERT TEXT]

Task:
Rewrite the text for a marketing audience while keeping terminology stable.

Output:
Return only the final rewritten text.
```


***

## QA checklist for users

Before using the output in production, review:

- Glossary completeness.
- Forbidden variants list.
- Do-not-translate list.
- Required output format.
- Locale-specific variants.
- Product release changes.
- Any newly renamed features.

This helps keep the model’s internal behavior aligned with the latest approved language.

***

## Limitations

This skill improves consistency, but it cannot guarantee perfect terminology stability in every case.

Drift can still happen when:

- The term map is incomplete.
- Context is ambiguous.
- The prompt is too long or crowded.
- The same term has multiple valid forms across languages.
- The output task conflicts with the term rules.
- The model is asked to be highly creative.

The best results come from combining this skill with clear term definitions, compact context, and a final validation pass.

***

## Maintenance

Update this skill when:

- Product names change.
- UI labels change.
- New brand terms are introduced.
- Localized equivalents are revised.
- A forbidden variant becomes outdated.
- A term needs a new definition or usage note.

Keep the term map small, current, and explicit.

***

## Recommended workflow

1. Prepare the canonical term map.
2. Inject only relevant terms for the task.
3. Set the terminology rules at the top of the prompt.
4. Generate with conservative settings.
5. Run a self-check pass.
6. Normalize any drift.
7. Return only the final output.

This keeps terminology control inside the generation loop rather than depending only on external governance.

***
# Claude Skill package : Terminology Stability Skill

**Here** is a more formal **Claude Skill package** version you can copy into a project and adapt.




## `skill.yaml`

```yaml
name: terminology-stability
description: >
  Reduce terminology drift inside the model's behavior using canonical term maps,
  inference-time constraints, structured outputs, multi-pass normalization, and self-checks.
version: 1.0.0
author: Perplexity
tags:
  - terminology
  - localization
  - documentation
  - marketing
  - prompt-engineering
  - consistency
inputs:
  - name: task_type
    type: string
    required: true
    description: Rewrite, translate, localize, summarize, or generate.
  - name: canonical_terms
    type: yaml
    required: true
    description: Approved terms, forbidden variants, definitions, notes, and status.
  - name: context_bundle
    type: markdown
    required: false
    description: Product, audience, domain, source text, locale, or UI context.
  - name: output_format
    type: string
    required: true
    description: Final output format such as plain text, markdown, JSON, or table.
  - name: drift_mode
    type: string
    required: false
    default: strict
    description: strict, balanced, or light.
  - name: self_check
    type: boolean
    required: false
    default: true
    description: Run a terminology consistency pass before final output.
outputs:
  - name: final_output
    type: string
  - name: terminology_corrections
    type: array
    required: false
  - name: validation_status
    type: string
```


## `instructions.md`

```md
# Terminology Stability Skill

## Purpose
This skill reduces terminology drift inside the model's behavior by using canonical term maps, explicit term constraints, retrieval-time context injection, deterministic phrasing, structured output, multi-pass normalization, and a final self-check.

## Core behavior
When this skill is active:
1. Load the canonical term map before generating text.
2. Treat canonical terms as fixed and preferred.
3. Reject forbidden variants.
4. Preserve do-not-translate items.
5. Keep repeated terminology identical across the full output.
6. Run a terminology consistency check before finalizing.
7. Rewrite any drift found in the check.
8. Return only the requested output.

## Operating rules
- Use the glossary as the source of truth.
- Do not substitute synonyms for canonical terms.
- Keep product names, UI labels, and feature names unchanged when marked fixed.
- Prefer exact terminology over stylistic variation.
- If the text is ambiguous, choose the glossary definition rather than a general-language synonym.
- If multiple terms compete, use the approved entry with the highest priority or status.
- If terminology drift is detected in a draft, normalize the entire passage before responding.

## Recommended workflow
### Step 1: Ingest
Read:
- Task type.
- Canonical term map.
- Context bundle.
- Output format.
- Drift mode.

### Step 2: Generate
Draft the text using the canonical terminology from the start.
Keep phrasing conservative when terms repeat.
Use stable wording rather than creative paraphrase.

### Step 3: Validate
Check the draft for:
- Forbidden variants.
- Mixed naming.
- Inconsistent translations.
- Unchanged fixed terms.
- Repeated concept drift.
- Inconsistent capitalization or morphology.

### Step 4: Normalize
If any issue is found:
- Rewrite the affected sentence or full passage.
- Reapply the canonical terms.
- Preserve meaning and tone.
- Recheck until the output is clean.

### Step 5: Return
Return only the final output unless the user explicitly requests corrections or audit notes.

## Drift mode
### strict
Use exact canonical forms everywhere. Minimize paraphrase.

### balanced
Preserve readability, but keep canonical terms fixed.

### light
Use for lower-risk content where some stylistic flexibility is acceptable, but canonical terms must still be respected.

## Self-check rubric
Before output, ask:
- Did every approved term appear in canonical form?
- Did any forbidden variant survive?
- Did any product term change?
- Did any repeated concept shift wording?
- Did any translated label drift?
- Did any sentence need repair after term replacement?

If yes, fix it before finalizing.

## Translation mode
When translating:
- Preserve fixed product names.
- Use only the approved target-language equivalents.
- Keep interface terms identical across all steps.
- Avoid creative variation for repeated terminology.
- Run a normalization pass after translation.

## Marketing mode
When rewriting marketing content:
- Keep brand terms stable.
- Do not rotate between synonyms for funnel terms, campaign terms, or value terms.
- Preserve approved claims and product names.
- Use one canonical form for each concept throughout.

## Documentation mode
When rewriting documentation:
- Match UI labels exactly.
- Keep button names, menu items, and feature names fixed.
- Use the same term in headings, body text, warnings, and steps.
- Do not paraphrase interface language.

## Localization mode
When localizing:
- Preserve locale-specific approved equivalents.
- Respect part of speech and grammatical constraints.
- Use context notes to disambiguate.
- Keep translations stable across the full document.

## Output rules
Return one of the following depending on user request:
- Final text only.
- Final text plus correction list.
- Final text plus audit summary.
- Structured JSON or markdown output.

Do not add commentary unless explicitly requested.
```


## `examples.md`

```md
# Examples

## Example 1: Rewrite with canonical terms
Input:
- Task type: rewrite
- Canonical terms: customer journey, lead magnet, dashboard

Instruction:
Rewrite the passage and keep terminology stable across all mentions.

Expected behavior:
- Use customer journey every time.
- Never replace it with buyer journey or user journey.
- Keep dashboard consistent.
- Normalize any drift before final output.

## Example 2: Translation with fixed labels
Input:
- Task type: translate
- Canonical terms: approved localized equivalents for product terms
- Context bundle: UI labels and source text

Expected behavior:
- Preserve fixed product names.
- Use the approved translations only.
- Run a final consistency pass.

## Example 3: Long-form content generation
Input:
- Task type: generate
- Canonical terms: brand positioning, campaign, lead magnet, customer journey

Expected behavior:
- Keep terminology identical across repeated uses.
- Avoid stylistic variation around glossary terms.
- Recheck output before returning it.
```


## `prompt_template.md`

```md
You are a terminology-stable assistant.

Rules:
1. Use only the canonical terms provided below.
2. Do not use forbidden variants.
3. Preserve do-not-translate items exactly as written.
4. Keep repeated terminology identical across the whole output.
5. If any drift appears in your draft, rewrite the passage before responding.
6. Prefer glossary definitions over general-language synonyms.
7. Run a final terminology consistency check before output.

Task type:
[INSERT TASK TYPE]

Canonical terms:
[INSERT CANONICAL TERM MAP]

Context:
[INSERT CONTEXT BUNDLE]

Output format:
[INSERT OUTPUT FORMAT]

Now perform the task and return only the final result.
```


## `canonical-term-map.yaml`

```yaml
canonical_terms:
  - term: customer journey
    forbidden:
      - buyer journey
      - user journey
      - client journey
    definition: The staged path a customer takes from awareness to retention.
    part_of_speech: noun
    status: preferred

  - term: lead magnet
    forbidden:
      - free offer
      - prospect magnet
      - lead bait
    definition: A free resource used to capture contact details.
    part_of_speech: noun
    status: preferred

  - term: dashboard
    forbidden:
      - control panel
      - overview screen
      - admin page
    definition: The main interface page that displays key metrics and actions.
    part_of_speech: noun
    status: preferred
```


## `validation_checklist.md`

```md
# Terminology Validation Checklist

- All canonical terms appear exactly as approved.
- No forbidden variants appear.
- Fixed product names remain unchanged.
- UI labels match the source or glossary.
- Repeated terms are rendered consistently.
- No synonym drift occurs across paragraphs.
- No term changes because of tone or style variation.
- Final output matches the requested format.
```
# Clean Claude Skill folder structure

```text
terminology-stability/
├─ skill.yaml
├─ instructions.md
├─ examples.md
├─ prompt_template.md
├─ canonical-term-map.yaml
├─ validation_checklist.md
└─ README.md
```


## Recommended file contents

### `skill.yaml`

Use this for metadata, inputs, outputs, and behavior flags.

### `instructions.md`

Use this for the operating rules, workflow, self-check logic, and mode definitions.

### `examples.md`

Use a few short examples for rewrite, translation, and long-form generation.

### `prompt_template.md`

Use this as the reusable prompt block you paste into tasks.

### `canonical-term-map.yaml`

Use this for approved terms, forbidden variants, definitions, and status.

### `validation_checklist.md`

Use this as the final QA checklist before release.

### `README.md`

Use this to explain:

- What the skill does.
- When to use it.
- How to maintain the glossary.
- How to update terms when the product changes.


## Suggested README

```md
# Terminology Stability Skill

This skill reduces terminology drift inside LLM behavior by combining canonical term maps,
inference-time constraints, structured output, multi-pass normalization, and self-checks.

## Use cases
- Marketing localization
- Product documentation
- Support content
- Brand-safe rewriting
- Translation with fixed terminology

## Workflow
1. Load canonical terms.
2. Generate with term constraints.
3. Run a terminology check.
4. Normalize drift.
5. Return the final output.

## Maintenance
Update the canonical term map whenever:
- Product names change.
- UI labels change.
- Brand terms change.
- Glossary definitions change.
- New forbidden variants appear.
```


## Best practice structure

If you want this to work well in production, keep the skill small and explicit:

- Put the most important term rules at the top.
- Avoid oversized glossaries in one prompt.
- Inject only the relevant terms for each task.
- Require a final terminology audit before output.

```
