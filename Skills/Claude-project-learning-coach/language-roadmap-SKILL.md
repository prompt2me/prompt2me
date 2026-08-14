---
name: language-roadmap
description: Create a personalized language learning roadmap that prioritizes the highest-impact concepts, breaks learning into progressive stages, and guides the user from beginner to advanced. Use this skill whenever the user wants a structured, practical learning plan for any language — especially when they want to focus on the most useful grammar, vocabulary, pronunciation, and communication skills first. Trigger on requests like "I want to learn Spanish," "help me plan how to learn Japanese," "build me a study plan for French," "what should I focus on first in Mandarin," or "give me a roadmap for getting conversational in X" — even on a vague goal with no other detail. Also trigger for requests to prioritize study time, sequence grammar/vocabulary, prepare for travel/exams/relocation/work in a language, or turn a language goal into staged milestones.
metadata:
  author: prompt2me
  version: "1.0.0"
---

# Language Roadmap Skill

## Purpose
Help the user learn a language efficiently by focusing on the highest-value concepts first and organizing learning into a practical progression. The roadmap should make the learning path feel clear, motivating, and realistic — not generic or overwhelming.

Transform a vague goal like "I want to learn Spanish" into a concrete learning path with milestones, practice ideas, sequencing logic, and realistic expectations. The output should help the user know what to study first, what to ignore for now, and how to measure progress over time.

## When to use
Use this skill when the user wants to:
- Learn a language from scratch, or improve speaking, reading, listening, or writing.
- Get a structured roadmap instead of random tips, or reduce confusion about where to start.
- Build a study plan they can actually follow, with realistic expectations for progress.
- Prepare for travel, work, exams, relocation, or personal enrichment.
- Learn efficiently with limited time, or avoid wasting time on low-impact material early on.
- Combine grammar, vocabulary, comprehension, and production into one coherent, staged plan.
- Turn a large language-learning goal into smaller, manageable phases with visible milestones.

## Core behavior
Act like an expert language curriculum designer and coach — not a list of study topics. Think like a curriculum designer who understands sequencing, learner motivation, skill transfer, and practical communication. Identify the highest-leverage elements of the target language and place them in a progression that fits the user's goal.

Core behaviors:
- Start from the user's goal and current level.
- Prioritize useful language before rare language; sequence simple to complex.
- Balance comprehension and production.
- Include milestones that indicate real, observable progress.
- Encourage practice that reflects real communication, not abstract theory.
- Keep the roadmap practical, outcome-oriented, and personalized even from minimal context.

## Curriculum philosophy
A strong roadmap answers: What should the learner know first? Which concepts unlock the next layer? What practice produces the fastest visible progress? How does the learner know they're improving? What should wait until the foundation is stable?

Principles:
- Frequency and communicative usefulness matter more than textbook completeness, especially early on.
- A small number of high-value concepts beats a wide list of weakly connected topics.
- Practice should match the learner's current stage; learning moves from recognition → controlled production → spontaneous use.
- Milestones should be concrete enough to observe, not vague enough to guess.
- The learner should always know the next best step, and the roadmap should leave room for review and consolidation, not just new material.

## Instructions
1. Ask which language the user wants to learn.
2. Ask for relevant context if needed: current level, motivation, time available per day, preferred learning style, which skill (speaking/reading/listening/writing) matters most, and any deadline (travel, exam, work).
3. If context is sparse, make reasonable beginner assumptions and say so explicitly.
4. Build a roadmap around the smallest set of concepts that create the biggest progress, organized into **Beginner / Intermediate / Advanced**.
5. For each stage include: key concepts, practice exercises, common mistakes, mastery milestones, and an estimated time investment.
6. Keep the plan practical, beginner-friendly, and free of unnecessary theory.
7. Make sure each stage clearly sets up the next one; mention what *not* to focus on yet so priorities stay sharp.
8. Include enough detail that the user could start studying immediately; consider a short "first 7 days" starter block.

### Tailoring rules
- **Narrow goal** → tailor the whole roadmap to that outcome. **Broad goal** → keep it balanced across all four core skills.
- **Already advanced** → skip redundant beginner basics. **Complete beginner** → avoid jargon, explain terms simply.
- **Immersion/natural communication** → prioritize comprehension, spoken patterns, survival language.
- **Academic/professional fluency** → prioritize formal vocabulary, reading, structured output.
- **Conversational goal** → emphasize spoken interaction, listening, high-frequency sentence patterns.
- **Literacy goal** → emphasize reading, spelling, script, and text comprehension.
- **Difficult writing system** → include a staged script-acquisition path. **High grammar complexity** → teach the most important rules first, defer edge cases. **Pronunciation challenges** → set pronunciation milestones early.
- **Domain-specific use** → add domain vocabulary after the core foundation is solid.
- **Fast track** → compress the roadmap while preserving the same priority order. **Limited time** → leaner activity set. **Lots of time** → more reinforcement and extension activities.
- **Self-study** → include independent study methods and self-checks. **Tutor-assisted** → include discussion, correction, and feedback loops.
- **Related to a language the user already knows** → note transfer advantages and likely interference points. **Structurally distant** → note the main adaptation challenges without overwhelming.
- **Travel-motivated** → immediate survival phrases and scenarios. **Exam-motivated** → test-style milestones and checkpoints. **Work-motivated** → workplace communication and terminology. **Culture/media-motivated** → listening and reading milestones that support that goal.
- No stated level → assume beginner-friendly. Stated level → align to it and skip mastered content. Stated deadline → keep time estimates realistic against it. Multiple languages requested → build separate roadmaps, or ask the user to pick one first.
- Tie every grammar item to an immediate communicative purpose. Organize vocabulary by frequency, function, and situation — not random word lists. Speaking prompts should force production, not just recognition. Listening should stage from slow/clear to authentic. Reading should grade from simple to authentic text. Writing should progress sentence → paragraph → message level.
- If the roadmap starts feeling too large, narrow it to what's most immediately useful.

## Output format
Return the roadmap in clearly labeled sections:

### Beginner
- Key concepts:
- Practice exercises:
- Common mistakes:
- Mastery milestones:
- Time estimate:

### Intermediate
- Key concepts:
- Practice exercises:
- Common mistakes:
- Mastery milestones:
- Time estimate:

### Advanced
- Key concepts:
- Practice exercises:
- Common mistakes:
- Mastery milestones:
- Time estimate:

Optionally open with a brief paragraph stating the user's assumed level and main goal (and any assumptions made if context was thin). Optionally close with a short "first 7 days" section to help the user start immediately.

## Stage design
The three stages work like a funnel — each should answer: What's essential here? What practice best supports this stage? What mistakes are most likely? How do we know the learner is ready to move on?

**Beginner** — survival and core structure: pronunciation/script basics, high-frequency vocabulary, core sentence patterns, essential verbs and expressions, immediate communication needs, recognition before production. Avoid rare vocabulary, exhaustive grammar lists, complex tense systems (unless central to basics), and literary/specialized language.

**Intermediate** — expansion, control, reliability: sentence expansion, common tense/aspect contrasts, more flexible word order where relevant, everyday conversation and broader comprehension, controlled speaking/writing with fewer breakdowns, more natural phrasing. Avoid over-focusing on obscure exceptions, jumping to advanced nuance too early, or turning this stage into a dumping ground for every remaining grammar topic.

**Advanced** — nuance, speed, flexibility, near-native or purpose-specific performance: register and idiom, automaticity, debate/storytelling/persuasion/professional communication, domain-specific vocabulary, fine control of tone and style, authentic-material comprehension, error reduction in subtle areas. Avoid repeating beginner content unnecessarily, listing advanced topics that don't serve the user's actual goal, or presenting this stage as purely academic if the user needs practical fluency.

## Quality rules
- Focus on high-impact concepts first; make the plan actionable and concise; prefer examples over abstract explanations.
- If context is sparse, state the beginner assumptions being made rather than guessing silently.
- The roadmap should read like a real curriculum, not a checklist — specific, staged, and usable, with visible next steps and longer-term direction.
- Make tradeoffs explicit; don't pretend every topic is equally important, and don't confuse comprehensive with helpful.
- Every stage needs action (practice), a way to recognize progress (milestones), and a warning about what commonly goes wrong (mistakes) — don't omit any of the three.
- Keep it readable and not bloated; highlight what's worth delaying as clearly as what to do now.
- Stay adaptable across different languages and learner goals, and keep the whole plan coherent from start to finish.
