
---

# Overview of Custom Instruction Skills

## 1. Socratic Tutor (`/socratic-tutor`)

### **Primary Task & Purpose**
The **Socratic Tutor** skill is designed to guide learners through any topic using **guided discovery and active reasoning** rather than direct lectures or immediate answers. It simulates an expert human tutor who uncovers misconceptions, closes knowledge gaps, and builds durable understanding through targeted, one-question-at-a-time interactions.

### **Key Responsibilities & Capabilities**
*   **Active Recall & Scaffolding:** Keeps the learner doing the majority of the cognitive work by asking structured, micro-targeted questions.
*   **Diagnostic Questioning:** Assesses the learner's current baseline before progressing up a progressive "question ladder" (from basic recall to application, analysis, and transfer).
*   **Adaptive Feedback & Targeted Hints:** Provides hints (narrowing, structural, contrast, process) without giving away full answers prematurely.
*   **Error Correction:** Treats mistakes as diagnostic data—reframing questions, isolating misconceptions, or introducing counterexamples rather than penalizing errors.
*   **Interactive Pacing:** Delivers concise turns (one question or small feedback step per turn) to avoid overwhelming the user.

### **When It Triggers**
*   Requests like: *"Quiz me on X," "Help me understand X step-by-step," "Teach me X the Socratic way,"* or *"Don't just tell me the answer."*
*   When preparing for exams, interviews, or presentations needing active retrieval.
*   When a user names a topic seeking deep conceptual understanding rather than a quick summary.

---

## 2. Feynman Tutor (`/feynman-tutor`)

### **Primary Task & Purpose**
The **Feynman Tutor** skill focuses on **deconstructing complex concepts into simple, intuitive language** using the Feynman Technique. It ensures the user truly understands a topic from first principles before layering on formal technical details or jargon.

### **Key Responsibilities & Capabilities**
*   **Plain Language & Analogies:** Explains ideas in simple, jargon-free language using concrete analogies as intuitive bridges.
*   **Progressive Depth:** Unlocks higher levels of abstraction, nuance, and technical terms only after the foundational layer is demonstrated by the user.
*   **Paraphrasing & Explanation Checks:** Asks the user to restate concepts in their own words or explain them back as if teaching someone else.
*   **Iterative Simplification:** If the user struggles or displays confusion, it pivots to simpler framings, alternative analogies, or smaller component sub-questions.
*   **Application & Transfer:** Tests whether the user can apply the newly understood principle to new scenarios or edge cases before wrapping up.

### **When It Triggers**
*   Requests like: *"Teach me X simply," "Explain X like I'm 5," "Help me build intuition for X,"* or *"Use the Feynman technique."*
*   When users want to strip away confusing jargon, practice paraphrasing, or move from intuitive grasp to formal mastery.

---

## 3. Language Roadmap (`/language-roadmap`)

### **Primary Task & Purpose**
The **Language Roadmap** skill acts as an expert curriculum designer, creating **personalized, high-leverage language learning plans**. It structures learning into progressive milestones (Beginner, Intermediate, Advanced) and prioritizes high-frequency, practical communication over exhaustive theoretical rules.

### **Key Responsibilities & Capabilities**
*   **Curriculum Sequencing:** Sequences language acquisition logically—prioritizing high-frequency vocabulary, functional grammar, and core sentence patterns before rare edge cases.
*   **Structured Stage Breakdown:** For each stage (**Beginner**, **Intermediate**, **Advanced**), it outlines:
    *   **Key Concepts:** Core structural and communicative topics.
    *   **Practice Exercises:** Targeted speaking, reading, listening, or writing tasks.
    *   **Common Mistakes:** Frequent pitfalls to watch out for.
    *   **Mastery Milestones:** Clear, observable indicators of progress.
    *   **Estimated Time Investment:** Realistic timeframes for completion.
*   **Tailored Adaptations:** Adjusts the roadmap based on learner goals (travel, professional/academic, fluency, exam preparation) and context (time availability, native language transfer).
*   **Actionable Starter Block:** Provides an immediate "First 7 Days" action plan to remove friction and encourage quick starts.

### **When It Triggers**
*   Requests like: *"I want to learn Spanish," "Build me a study plan for Japanese," "What should I focus on first in Mandarin?"* or *"Give me a roadmap to get conversational in French."*
*   When users need help prioritizing study time, preparing for travel/work abroad, or organizing language acquisition into clear milestones.

---

## Comparative Summary Matrix

| Feature / Dimension | Socratic Tutor (`/socratic-tutor`) | Feynman Tutor (`/feynman-tutor`) | Language Roadmap (`/language-roadmap`) |
| :--- | :--- | :--- | :--- |
| **Primary Goal** | Guided discovery through question sequences | Intuitive understanding via plain language & analogies | Structured, step-by-step curriculum design |
| **Core Interaction** | One question/hint at a time; user does the thinking | Simple explanation $\\rightarrow$ test paraphrasing $\\rightarrow$ layer complexity | Multi-stage roadmap document + action steps |
| **Pedagogical Basis** | Socratic Method / Active Recall | Feynman Technique / First-Principles Simplification | High-Leverage Curriculum Design & Frequency Sequencing |
| **Key Output** | Dynamic Q&A dialogue | Intuitive explanation loop & paraphrase verification | Formatted Beginner / Intermediate / Advanced plan |
"""

file_path = "skills_explanation.md"
with open(file_path, "w", encoding="utf-8") as f:
    f.write(markdown_content)

print(f"File created successfully: {file_path}")


```

```text
File created successfully: skills_explanation.md


```

Your Markdown document explaining the three skills has been generated.

---

# Overview of Custom Instruction Skills

This document provides a detailed breakdown of the tasks, methodologies, and operational logic for three custom instruction skills: **Socratic Tutor**, **Feynman Tutor**, and **Language Roadmap**.

---

## 1. Socratic Tutor (`/socratic-tutor`)

### **Primary Task & Purpose**

The **Socratic Tutor** skill is designed to guide learners through any topic using **guided discovery and active reasoning** rather than direct lectures or immediate answers. It simulates an expert human tutor who uncovers misconceptions, closes knowledge gaps, and builds durable understanding through targeted, one-question-at-a-time interactions.

### **Key Responsibilities & Capabilities**

* **Active Recall & Scaffolding:** Keeps the learner doing the majority of the cognitive work by asking structured, micro-targeted questions.


* **Diagnostic Questioning:** Assesses the learner's current baseline before progressing up a progressive "question ladder" (from basic recall to application, analysis, and transfer).


* **Adaptive Feedback & Targeted Hints:** Provides hints (narrowing, structural, contrast, process) without giving away full answers prematurely.


* **Error Correction:** Treats mistakes as diagnostic data—reframing questions, isolating misconceptions, or introducing counterexamples rather than penalizing errors.


* **Interactive Pacing:** Delivers concise turns (one question or small feedback step per turn) to avoid overwhelming the user.



### **When It Triggers**

* Requests like: *"Quiz me on X," "Help me understand X step-by-step," "Teach me X the Socratic way,"* or *"Don't just tell me the answer."*

* When preparing for exams, interviews, or presentations needing active retrieval.


* When a user names a topic seeking deep conceptual understanding rather than a quick summary.



---

## 2. Feynman Tutor (`/feynman-tutor`)

### **Primary Task & Purpose**

The **Feynman Tutor** skill focuses on **deconstructing complex concepts into simple, intuitive language** using the Feynman Technique. It ensures the user truly understands a topic from first principles before layering on formal technical details or jargon.

### **Key Responsibilities & Capabilities**

* **Plain Language & Analogies:** Explains ideas in simple, jargon-free language using concrete analogies as intuitive bridges.


* **Progressive Depth:** Unlocks higher levels of abstraction, nuance, and technical terms only after the foundational layer is demonstrated by the user.


* **Paraphrasing & Explanation Checks:** Asks the user to restate concepts in their own words or explain them back as if teaching someone else.


* **Iterative Simplification:** If the user struggles or displays confusion, it pivots to simpler framings, alternative analogies, or smaller component sub-questions.


* **Application & Transfer:** Tests whether the user can apply the newly understood principle to new scenarios or edge cases before wrapping up.



### **When It Triggers**

* Requests like: *"Teach me X simply," "Explain X like I'm 5," "Help me build intuition for X,"* or *"Use the Feynman technique."*

* When users want to strip away confusing jargon, practice paraphrasing, or move from intuitive grasp to formal mastery.



---

## 3. Language Roadmap (`/language-roadmap`)

### **Primary Task & Purpose**

The **Language Roadmap** skill acts as an expert curriculum designer, creating **personalized, high-leverage language learning plans**. It structures learning into progressive milestones (Beginner, Intermediate, Advanced) and prioritizes high-frequency, practical communication over exhaustive theoretical rules.

### **Key Responsibilities & Capabilities**

* **Curriculum Sequencing:** Sequences language acquisition logically—prioritizing high-frequency vocabulary, functional grammar, and core sentence patterns before rare edge cases.


* **Structured Stage Breakdown:** For each stage (**Beginner**, **Intermediate**, **Advanced**), it outlines:


* **Key Concepts:** Core structural and communicative topics.


* **Practice Exercises:** Targeted speaking, reading, listening, or writing tasks.


* **Common Mistakes:** Frequent pitfalls to watch out for.


* **Mastery Milestones:** Clear, observable indicators of progress.


* **Estimated Time Investment:** Realistic timeframes for completion.




* **Tailored Adaptations:** Adjusts the roadmap based on learner goals (travel, professional/academic, fluency, exam preparation) and context (time availability, native language transfer).


* **Actionable Starter Block:** Provides an immediate "First 7 Days" action plan to remove friction and encourage quick starts.



### **When It Triggers**

* Requests like: *"I want to learn Spanish," "Build me a study plan for Japanese," "What should I focus on first in Mandarin?"* or *"Give me a roadmap to get conversational in French."*

* When users need help prioritizing study time, preparing for travel/work abroad, or organizing language acquisition into clear milestones.



---

## Comparative Summary Matrix

| Feature / Dimension | Socratic Tutor (`/socratic-tutor`) | Feynman Tutor (`/feynman-tutor`) | Language Roadmap (`/language-roadmap`) |
| --- | --- | --- | --- |
| **Primary Goal** | Guided discovery through question sequences

 | Intuitive understanding via plain language & analogies

 | Structured, step-by-step curriculum design

 |
| **Core Interaction** | One question/hint at a time; user does the thinking

 | Simple explanation $\rightarrow$ test paraphrasing $\rightarrow$ layer complexity

 | Multi-stage roadmap document + action steps

 |
| **Pedagogical Basis** | Socratic Method / Active Recall

 | Feynman Technique / First-Principles Simplification

 | High-Leverage Curriculum Design & Frequency Sequencing

 |
| **Key Output** | Dynamic Q&A dialogue

 | Intuitive explanation loop & paraphrase verification

 | Formatted Beginner / Intermediate / Advanced plan

 |