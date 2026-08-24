---
name: terminology-stability
description: Keep terminology fixed and consistent across long or repeated Claude outputs — rewrites, translations, localization, documentation, and marketing copy. Use whenever the user supplies (or references) an approved term list, glossary, brand terms, UI labels, or product names that must stay exact, or asks to "keep terminology consistent," "avoid synonym drift," "match the UI wording," "use approved terms only," or "don't let the wording change between mentions." Also use proactively any time a task involves repeated mentions of the same product feature, brand term, or UI label across a document, translation, or multi-section piece — even if the user hasn't used the word "terminology" — since drift is easy to introduce silently during generation.
---

# Terminology Stability

## Why this exists

Left unconstrained, Claude tends to vary its wording for the same concept across a long piece of writing — "customer journey" becomes "buyer journey" three paragraphs later, "dashboard" becomes "control panel" in a different section. This isn't a factual error, so it's easy to miss on a skim, but it's exactly the kind of inconsistency that breaks brand voice, confuses translators, and makes documentation disagree with the product UI.

This skill isn't a glossary tool or a replacement for human review — it's a way of working that keeps an approved term list visible throughout generation and adds a deliberate check-and-fix pass before returning output, so drift gets caught inside the same response instead of discovered later.

## When to use this

Reach for this whenever the task involves:
- Fixed product terminology, UI labels, or feature names that must not be paraphrased.
- Marketing or brand copy where funnel stages, claims, or product tiers have one approved phrasing.
- Documentation that has to match the product interface exactly.
- Translation or localization where glossary terms have a locked target-language equivalent.
- Any rewrite, edit, or long-form generation where the same concept is mentioned more than once.

If the user hasn't given you a term list yet, ask for one (or offer to draft one from context) before generating — the whole approach depends on having explicit terms to hold steady, not on "just be consistent."

## Step 1: Gather the inputs

Before generating, make sure you have:

1. **Task type** — rewrite, summarize, translate, localize, generate new content, or edit existing content.
2. **Canonical term map** — the approved terms, what they must *not* be replaced with, and short definitions. Ask the user for this if it's missing, or draft one from their source material and confirm it with them.
3. **Context bundle** — whatever's relevant: product description, audience, domain, source text, locale constraints, style constraints, UI labels.
4. **Output format** — plain text, markdown, table, JSON, bullet list, translation only, or rewrite plus a drift report.

If a term map already exists but is large, only pull in the entries relevant to the current text rather than pasting the whole thing into the prompt — a shorter, targeted term list is easier for the model to hold onto than one crowded with irrelevant entries.

### Term map format

A compact, structured format works best:

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
    definition: "A free resource used to capture a prospect's contact information."
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

## Step 2: Generate with the terms already in view

Write the first draft with the canonical term map already loaded — don't draft freely and plan to "fix terminology later." The glossary is the source of truth: if general usage or a more natural-sounding synonym conflicts with an approved term, the approved term wins. Where a term could reasonably be phrased several ways, default to the canonical form rather than the more stylistically varied one — stability beats elegance here.

A few things to hold onto while drafting:
- **Do-not-translate items** (product names, UI labels, brand terms marked fixed) stay exactly as given, even mid-translation.
- **Repeated mentions** of the same concept should read identically each time — check yourself as you go, not just at the end.
- When a term replacement makes a sentence awkward, adjust the *surrounding* wording to keep it natural — the constraint is on the term, not on writing stiff prose around it.

## Step 3: Check and normalize before returning anything

This is the step that actually prevents drift — treat it as mandatory, not optional polish. After drafting, reread the output specifically looking for:

- Forbidden variants that snuck in.
- The same concept rendered with different wording in different places.
- Product names, UI labels, or brand terms that got paraphrased or translated when they shouldn't have been.
- Inconsistent capitalization or singular/plural forms of the same term.
- For translations: a glossary term translated one way in one place and differently elsewhere.

If anything fails this check, rewrite the affected passage (the whole passage, not just the offending word, so the fix reads naturally) and recheck. Only return the final output once nothing on this list is flagged — unless the user explicitly asked to see the corrections (see Output modes below).

## Mode-specific notes

The core loop (gather → generate → check → normalize) is the same everywhere; these are the things that matter most per context.

| Mode | What matters most |
|---|---|
| **Translation** | Translate meaning, not the term map itself. Use the approved target-language equivalent for each glossary entry, and translate it the same way every time it recurs — don't let surrounding context pull you toward a more common but non-approved synonym. |
| **Marketing** | Lock brand claims, campaign names, and product tier names to their approved phrasing. Don't rotate between near-synonyms for the same funnel stage or value proposition just for stylistic variety — that variety reads as inconsistency here, not creativity. |
| **Documentation** | Terminology has to match the product interface exactly — button names, menu items, and navigation labels are effectively do-not-translate items even within a single language. Use the same term in headings, steps, warnings, and body text for the same feature. |
| **Localization** | Preserve the approved translation for each locale, respecting grammatical gender/number/part of speech. When a term has a preferred localized form in the glossary, use it even if a different synonym is more common in everyday language for that locale. |

## Output modes

Match whatever the user asked for in "output constraints." If they didn't specify, default to final text only — most users want the clean result, not the scaffolding.

- **Final text only** — the default. Apply corrections silently during your own check pass; don't narrate them.
- **Final text plus corrections** — append a short list like:
  ```text
  Corrections:
  - "buyer journey" -> "customer journey"
  - "free offer" -> "lead magnet"

  Final text:
  [clean version]
  ```
- **Final text plus audit checklist** — useful when the user is treating this as a QA step; list what was checked, not just what changed.
- **Structured / pipeline output** — e.g.:
  ```json
  {
    "final_text": "...",
    "terminology_corrections": [
      {"from": "buyer journey", "to": "customer journey"}
    ],
    "status": "clean"
  }
  ```

## Reusable prompt fragments

If you're constructing a prompt (e.g., for a sub-task, an artifact, or an API call the user is building) rather than writing the output yourself, these blocks capture the core constraints concisely:

```text
Use only the canonical terms listed below — do not replace them with synonyms.
If a term appears more than once, render it exactly the same way every time.
UI labels, product names, and feature names must remain exactly as provided.
Before finalizing, compare your draft against the term map and rewrite any mismatch.
```

## Limitations — say so when they apply

This approach improves consistency; it doesn't guarantee it. Flag it to the user (briefly, don't over-hedge) when:
- The term map is incomplete or the user hasn't provided one yet.
- The source context is genuinely ambiguous about which concept a term refers to.
- The same term legitimately has multiple valid forms across languages or locales.
- The task explicitly asks for creative, varied phrasing — which is in tension with term stability, and worth naming as a tradeoff rather than silently picking one.

This skill is a generation-time aid, not a substitute for the user's own glossary governance or a final human review pass before anything ships to production.
