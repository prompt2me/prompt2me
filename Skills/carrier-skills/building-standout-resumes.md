---
name: building-standout-resumes
description: Build, tailor, audit, and improve evidence-based, ATS-friendly resumes and role-specific cover letters from a candidate's career information and target job description. Use when creating a resume from scratch, rewriting existing experience, defining career positioning, extracting relevant skills, tailoring a resume to a specific vacancy, auditing ATS compatibility, organizing education and credentials, or producing a matching cover letter.
Author: prompt2me 
Version: 1.0.0
---

# Building Standout Resumes

## Purpose

This Skill turns scattered career information into a coherent, targeted, evidence-based application package.

It combines career positioning, resume writing, job-description analysis, achievement extraction, skills matching, ATS optimization, proofreading, and cover-letter development into one controlled workflow.

The objective is not to make a candidate sound impressive through generic language. The objective is to make the candidate's **real evidence easy for the right employer to recognize**.

The default output is:

1. A targeted, ATS-friendly resume.
2. A role-specific cover letter when requested.
3. A quality-control audit explaining important decisions, gaps, risks, and recommended improvements.

---

# Core Principles

## 1. Evidence Before Persuasion

Never invent:

- Employers
- Job titles
- Dates
- Responsibilities
- Achievements
- Metrics
- Skills
- Certifications
- Degrees
- Awards
- Tools
- Job titles held
- Leadership scope
- Revenue figures
- Team sizes
- Customer numbers
- Performance improvements
- Qualifications

If information is missing, ask for it or mark it as missing.

Never convert an assumption into a candidate fact.

---

## 2. Separate Facts, Inferences, and Recommendations

Classify information internally as:

### Candidate Fact

Explicitly supplied by the candidate or clearly present in the source material.

### Reasonable Inference

A conclusion supported by supplied evidence but not explicitly stated.

Inferences must never be presented as facts.

### Recommendation

A strategic suggestion about positioning, wording, structure, emphasis, or missing evidence.

When useful, label these distinctions explicitly in the audit.

---

## 3. Target the Role, Not the Candidate's Entire History

A resume is not a complete biography.

Prioritize evidence according to:

1. Target role
2. Job requirements
3. Relevant achievements
4. Transferable capabilities
5. Seniority expectations
6. Industry context
7. Candidate differentiation

De-emphasize irrelevant information without falsely deleting important facts.

---

## 4. Quantify Whenever the Evidence Supports It

Prefer measurable evidence such as:

- Revenue
- Cost
- Growth
- Conversion
- Time
- Volume
- Frequency
- Customer count
- Team size
- Geographic scope
- Efficiency
- Productivity
- Error reduction
- Retention
- Satisfaction
- Delivery speed
- Market share

Do not fabricate metrics.

If an achievement is strong but unquantified, preserve it and identify what metric could strengthen it.

---

## 5. Use Job-Description Language Strategically

Match legitimate terminology from the job description when it accurately describes the candidate's experience.

Do not keyword-stuff.

Do not claim a technology, competency, responsibility, or qualification solely because it appears in the job description.

---

## 6. Optimize for Both Humans and ATS

The resume must be:

- Easy to scan
- Easy to understand
- Evidence-driven
- Consistent
- Professionally structured
- Keyword-aligned
- ATS-compatible
- Concise
- Relevant

ATS optimization must never make the document unnatural.

---

# Operating Modes

The Skill supports several modes.

## Mode A — Build From Scratch

Use when the candidate has career information but no finished resume.

Required process:

`Intake → Positioning → Evidence Extraction → Resume Construction → ATS Audit`

---

## Mode B — Rewrite Existing Resume

Use when a resume already exists.

Process:

`Resume Audit → Evidence Extraction → Positioning → Rewrite → ATS Audit`

Preserve true information while improving clarity, relevance, impact, and structure.

---

## Mode C — Tailor to Job Description

Use when the candidate has a resume and a specific vacancy.

Process:

`Job Analysis → Resume Gap Analysis → Keyword Mapping → Evidence Prioritization → Targeted Rewrite → ATS Audit`

---

## Mode D — Resume Audit

Use when the candidate wants evaluation rather than rewriting.

Return:

- Strengths
- Weaknesses
- ATS risks
- Relevance gaps
- Evidence gaps
- Keyword gaps
- Positioning problems
- Structural problems
- Priority fixes

---

## Mode E — Cover Letter

Use when the resume and job description are available.

Build the letter from the candidate's actual evidence.

Never introduce unsupported claims that are absent from the resume or candidate information.

---

## Mode F — Complete Application Package

Use when the candidate wants the complete result.

Deliver:

1. Career positioning
2. Resume
3. ATS audit
4. Cover letter
5. Final consistency audit

---

# Phase 1: Define Career Goals

Before writing, determine the candidate's intended positioning.

Collect:

- Target role
- Target industry
- Target company type
- Seniority
- Geographic preference if relevant
- Functional area
- Career direction
- Relevant achievements
- Core strengths
- Differentiators
- Aspirational positioning

## Career Positioning Prompt

Use this reasoning framework:

> Act as a career strategist. Analyze the candidate's background and target role. Determine the strongest professional positioning for the candidate. Identify the experience, achievements, capabilities, and themes that should receive the greatest emphasis. Avoid generic claims. Base every positioning decision on evidence.

### Output

Produce:

- Target positioning
- Target role
- Seniority interpretation
- 5–7 themes to emphasize
- Strongest differentiators
- Evidence supporting each theme
- Positioning risks
- Information still needed

---

# Phase 2: Candidate Intake

Do not overwhelm the candidate with unnecessary questions.

Collect only information required to build an accurate application.

## Intake Categories

### Identity and Contact

- Name
- City/country if relevant
- Email
- Phone
- LinkedIn
- Portfolio
- Professional website

### Career Target

- Target role
- Target industry
- Target companies
- Seniority
- Desired function

### Work History

For every relevant role:

- Company
- Job title
- Location if relevant
- Start date
- End date
- Responsibilities
- Projects
- Achievements
- Metrics
- Tools
- Team size
- Scope
- Customers
- Budget
- Revenue
- Promotions
- Awards

### Education

- Degree
- Institution
- Year
- Honors
- Relevant coursework
- Academic projects

### Credentials

- Certifications
- Issuer
- Year
- Credential ID when relevant
- Awards

### Additional Evidence

- Projects
- Publications
- Speaking
- Volunteering
- Leadership
- Languages
- Professional associations

## Intake Rule

Ask the minimum number of questions necessary to produce a complete result.

If information is already supplied, do not ask for it again.

---

# Phase 3: Analyze the Job Description

When a job description is provided, deconstruct it before tailoring the resume.

Extract:

### Role Requirements

- Primary responsibilities
- Secondary responsibilities
- Required qualifications
- Preferred qualifications
- Technical skills
- Soft skills
- Tools
- Industry knowledge
- Leadership expectations
- Communication expectations
- Seniority indicators

### Keyword Categories

Group keywords into:

1. Role terminology
2. Functional skills
3. Technical skills
4. Tools/platforms
5. Industry terms
6. Certifications
7. Behavioral competencies
8. Deliverables
9. Metrics
10. Leadership language

### Requirement Priority

Classify each requirement as:

- Must-have
- Strong preference
- Useful
- Contextual
- Low priority

Never assume that every repeated keyword has equal importance.

---

# Phase 4: Build the Evidence Map

Create an internal mapping between the candidate's evidence and the target role.

| Job Requirement | Candidate Evidence | Strength | Resume Priority |
|---|---|---|---|
| Requirement | Evidence | Strong/Moderate/Weak/None | High/Medium/Low |

## Evidence Rules

### Strong Match

The candidate has direct, credible evidence.

### Transferable Match

The candidate has related experience that legitimately supports the requirement.

### Weak Match

The candidate has limited evidence.

### No Evidence

No supplied evidence supports the requirement.

Never turn a weak or missing match into a strong match.

---

# Phase 5: Write the Professional Summary

The summary should communicate:

1. Who the candidate is professionally.
2. Relevant experience level.
3. Core strengths.
4. Most valuable evidence.
5. Target direction.

Avoid:

- "Hardworking professional"
- "Results-driven individual"
- "Passionate team player"
- "Dynamic professional"
- "Highly motivated"
- Empty superlatives
- Generic career objectives

## Summary Prompt

> Write three versions of the candidate's professional summary for the target role. Use only verified information. Reflect experience level, strongest capabilities, relevant achievements, and career direction. Keep each version concise, credible, specific, and measurable where evidence exists.

### Preferred Summary Structure

`Professional identity + relevant experience + core strengths + evidence + target value`

---

# Phase 6: Transform Work Experience

Raw work notes are rarely resume-ready.

Convert them into achievement-oriented bullets.

## Experience Input

For each position:

- Role
- Company
- Dates
- Responsibilities
- Projects
- Achievements
- Metrics
- Tools
- Scope

## Bullet Construction

Use:

`Action + Scope/Context + Result + Metric`

Where appropriate.

### Weak

> Responsible for managing customer accounts.

### Stronger

> Managed a portfolio of customer accounts, improving retention through structured follow-up and issue resolution.

### Strongest When Evidence Exists

> Managed a portfolio of 80+ customer accounts, improving retention by 14% through structured follow-up and issue resolution.

Only use the strongest version when the metric is verified.

---

# Phase 7: Separate Responsibilities From Achievements

Do not make every bullet a responsibility statement.

### Responsibilities

Explain what the candidate was expected to do.

### Achievements

Explain what the candidate changed, improved, delivered, built, solved, or accomplished.

Prioritize achievements.

Use responsibilities when they establish important scope or clarify a role.

---

# Phase 8: Extract and Strengthen Metrics

Search the candidate's information for quantitative evidence.

Potential metric categories:

- Percentage
- Currency
- Units
- Volume
- Time
- Customers
- Employees
- Projects
- Locations
- Products
- Accounts
- Conversion
- Growth
- Savings
- Efficiency
- Accuracy
- Quality

If no metric exists:

1. Do not invent one.
2. Preserve the achievement.
3. Identify a useful metric that could be supplied later.

---

# Phase 9: Highlight Skills

When a job description exists, compare it against the candidate's actual skills.

## Skill Matching Prompt

> From the supplied job description, extract the most important required skills and keywords. Compare them against the candidate's verified skills and experience. Identify direct matches, transferable capabilities, gaps, and unsupported requirements. Produce a prioritized Skills section containing only legitimate candidate skills.

## Skills Categories

Use categories where helpful:

- Technical Skills
- Functional Skills
- Tools & Platforms
- Industry Knowledge
- Leadership
- Communication
- Analytical Skills

Avoid bloated skill lists.

A typical target is approximately 10–16 high-value skills, adjusted for seniority and role.

---

# Phase 10: Certifications and Awards

Credentials should increase credibility, not create clutter.

For each credential, verify:

- Name
- Issuer
- Year
- Credential ID when relevant
- Relevance to target role

## Placement Rules

Recommend whether each item belongs in:

- Dedicated Certifications section
- Education section
- Awards section
- Professional summary
- Skills section
- Omitted from the targeted resume

Do not give prominent placement to irrelevant credentials.

---

# Phase 11: Education Section

Structure education around relevance.

Include:

- Degree
- Institution
- Year
- Honors
- Relevant coursework
- Academic projects
- Relevant certifications

For experienced candidates, avoid allowing education to overpower stronger professional evidence unless specifically relevant.

## Education Prompt

> Format the candidate's education for the target role. Include only details that strengthen relevance or credibility. Keep the section concise, clean, and scan-friendly.

---

# Phase 12: Tailor the Resume to a Job Description

Tailoring should change emphasis, not reality.

## Tailoring Prompt

> Tailor the candidate's resume to the supplied job description. Identify the strongest matching experience, skills, achievements, and terminology. Rewrite bullets to emphasize legitimate relevance. Add missing keywords only when the candidate's evidence supports them. Do not invent experience, qualifications, metrics, or tools.

## Tailoring Actions

### Increase

- Relevant achievements
- Relevant skills
- Relevant keywords
- Relevant tools
- Relevant scope
- Relevant metrics

### Decrease

- Irrelevant history
- Generic responsibilities
- Redundant bullets
- Low-value skills
- Unrelated credentials

### Preserve

- Accuracy
- Chronology
- Truthfulness
- Candidate identity
- Actual experience

---

# Phase 13: ATS Optimization

Audit for common ATS risks.

## Check

### Structure

- Standard section names
- Clear chronology
- Consistent formatting
- Logical hierarchy

### Text

- Relevant keywords
- Correct terminology
- No keyword stuffing
- No unexplained abbreviations where clarity matters

### Formatting

Avoid unnecessary:

- Tables
- Text boxes
- Multi-column complexity
- Decorative graphics
- Icons carrying essential information
- Headers/footers containing critical content
- Unusual symbols
- Embedded text inside images

### Dates

Use a consistent format throughout.

### Job Titles

Use the candidate's actual title.

If clarification is necessary, do not falsely replace it with a different title.

---

# Phase 14: Proofread and Format

Audit:

- Grammar
- Spelling
- Punctuation
- Capitalization
- Verb tense
- Date consistency
- Bullet structure
- Section order
- Spacing
- Repetition
- Professional tone
- Readability
- Visual balance

## Verb Tense

Generally:

- Current role → present tense where appropriate
- Previous role → past tense

Do not mechanically alter wording when the context requires otherwise.

---

# Phase 15: Resume Quality Audit

Score the resume across these dimensions:

| Dimension | Assessment |
|---|---|
| Role Alignment | Strong / Moderate / Weak |
| Evidence Quality | Strong / Moderate / Weak |
| Achievement Density | Strong / Moderate / Weak |
| Keyword Alignment | Strong / Moderate / Weak |
| ATS Compatibility | Strong / Moderate / Weak |
| Readability | Strong / Moderate / Weak |
| Differentiation | Strong / Moderate / Weak |
| Credibility | Strong / Moderate / Weak |
| Consistency | Strong / Moderate / Weak |

Then identify:

### Critical Fixes

Problems that could materially reduce the candidate's chances.

### High-Value Improvements

Changes likely to improve relevance or credibility.

### Optional Improvements

Polish that does not materially change the application.

---

# Phase 16: Cover Letter

Only create a cover letter when requested or when the user asks for a complete application package.

## Cover Letter Inputs

- Company
- Target role
- Job description
- Candidate resume
- 2–3 strongest achievements
- Motivation when available
- Company-specific reason when available

## Cover Letter Prompt

> Write a tailored cover letter for [COMPANY] for the role of [TARGET ROLE]. Use the supplied job description and candidate evidence. Highlight the strongest relevant achievements, explain the candidate's fit, and connect genuine motivation to the company or role when evidence exists. Keep the letter specific, confident, and achievement-driven. Do not introduce unsupported claims.

## Default Length

Approximately 250–350 words unless the user specifies otherwise.

## Structure

1. Opening: role and strongest positioning
2. Evidence: relevant achievement(s)
3. Fit: capabilities matched to the role
4. Motivation: company/role connection
5. Closing: clear call to action

Avoid repeating the resume verbatim.

---

# Phase 17: Consistency Audit

Before final delivery, compare the resume and cover letter.

Verify:

- Job title
- Company
- Dates
- Metrics
- Achievements
- Skills
- Certifications
- Career direction
- Claims
- Seniority
- Terminology

Every major claim in the cover letter should be supported by candidate evidence.

---

# Missing Information Protocol

When critical information is missing:

### If the information is necessary for accuracy

Ask a focused question.

### If the information is useful but not essential

Proceed and flag the gap.

### If the information would strengthen an achievement

Preserve the claim without fabricating a metric and suggest the metric needed.

### If the candidate has no evidence

Do not manufacture evidence.

---

# Truthfulness Guardrails

The following are prohibited:

- Fabricated achievements
- Invented metrics
- Invented responsibilities
- Invented employers
- Invented certifications
- Invented degrees
- False years of experience
- False technical proficiency
- False management experience
- False revenue ownership
- False customer numbers
- False awards
- False language proficiency

Do not use phrases such as "approximately" to disguise an invented metric.

---

# Resume Content Prioritization

When space is limited, prioritize in this order:

1. Directly relevant achievements
2. Relevant recent experience
3. High-value measurable results
4. Target-role skills
5. Relevant leadership or scope
6. Relevant credentials
7. Transferable achievements
8. Supporting information
9. Low-relevance details

---

# Bullet Quality Rules

A strong bullet should usually contain at least two of:

- Action
- Scope
- Complexity
- Outcome
- Metric
- Business relevance

Avoid repetitive openings.

Rotate verbs naturally:

- Led
- Built
- Developed
- Improved
- Increased
- Reduced
- Delivered
- Managed
- Designed
- Launched
- Implemented
- Optimized
- Negotiated
- Analyzed
- Coordinated
- Automated
- Streamlined

Do not substitute impressive verbs for accurate ones.

---

# Seniority Calibration

## Junior

Emphasize:

- Projects
- Learning
- Execution
- Transferable skills
- Internships
- Academic evidence
- Early achievements

## Mid-Level

Emphasize:

- Ownership
- Measurable results
- Functional expertise
- Cross-functional work
- Increasing scope

## Senior

Emphasize:

- Strategic ownership
- Leadership
- Business outcomes
- Scale
- Complexity
- Decision-making
- Organizational influence

## Executive

Emphasize:

- Enterprise impact
- Strategy
- Transformation
- Revenue
- Profitability
- Organizational leadership
- Market impact
- Board/executive influence
- Large-scale change

Never inflate seniority.

---

# Output Architecture

When producing a complete resume, use this default structure:

1. Name and contact information
2. Professional headline when useful
3. Professional summary
4. Core skills
5. Professional experience
6. Education
7. Certifications
8. Awards or additional sections when relevant

Adapt the order to the target role.

---

# Standard Intake Template

When information is insufficient, use:

```text
TARGET ROLE:
TARGET INDUSTRY:
TARGET SENIORITY:

NAME:
LOCATION:
EMAIL:
PHONE:
LINKEDIN:
PORTFOLIO:

PROFESSIONAL BACKGROUND:

ROLE 1:
COMPANY:
DATES:
RESPONSIBILITIES:
ACHIEVEMENTS:
METRICS:
TOOLS:
SCOPE:

ROLE 2:
COMPANY:
DATES:
RESPONSIBILITIES:
ACHIEVEMENTS:
METRICS:
TOOLS:
SCOPE:

EDUCATION:

CERTIFICATIONS:

AWARDS:

PROJECTS:

ADDITIONAL SKILLS:

TARGET JOB DESCRIPTION:
```

Ask only for missing fields that materially affect the result.

---

# Standard Job Analysis Output

When analyzing a job description, produce:

```text
TARGET ROLE:
SENIORITY:
PRIMARY RESPONSIBILITIES:

MUST-HAVE REQUIREMENTS:
PREFERRED REQUIREMENTS:

TOP KEYWORDS:
TECHNICAL SKILLS:
FUNCTIONAL SKILLS:
TOOLS:
INDUSTRY TERMS:
BEHAVIORAL COMPETENCIES:

TOP EVIDENCE TO EMPHASIZE:

CANDIDATE STRENGTHS:

CANDIDATE GAPS:

TAILORING PRIORITIES:
```

---

# Standard Resume Audit Output

Use:

```text
OVERALL ASSESSMENT:

TOP STRENGTHS:
1.
2.
3.

CRITICAL PROBLEMS:
1.
2.
3.

ATS RISKS:
1.
2.
3.

KEYWORD GAPS:
1.
2.
3.

EVIDENCE GAPS:
1.
2.
3.

POSITIONING PROBLEMS:
1.
2.
3.

HIGHEST-PRIORITY FIXES:
1.
2.
3.
```

---

# End-to-End Workflow

When the user asks for a complete resume transformation, follow this sequence.

## Step 1 — Understand the Goal

Determine target role, industry, seniority, and intended positioning.

## Step 2 — Gather Evidence

Collect the minimum necessary candidate information.

## Step 3 — Analyze the Job

Extract requirements, keywords, skills, responsibilities, and priority signals.

## Step 4 — Map Evidence

Connect candidate evidence to job requirements.

## Step 5 — Establish Positioning

Determine what the resume should make the candidate known for.

## Step 6 — Draft the Summary

Create a concise, evidence-backed professional identity.

## Step 7 — Rewrite Experience

Prioritize achievements, scope, outcomes, and metrics.

## Step 8 — Build Skills

Include legitimate, relevant, high-value skills.

## Step 9 — Structure Education and Credentials

Give relevant credentials appropriate prominence.

## Step 10 — Tailor

Adjust wording, ordering, emphasis, and keyword usage to the target job.

## Step 11 — Audit ATS

Check structure, keywords, readability, and parsing risks.

## Step 12 — Proofread

Correct consistency, grammar, formatting, and repetition.

## Step 13 — Generate Cover Letter

Only when requested.

## Step 14 — Run Final Consistency Check

Ensure every document tells the same truthful professional story.

---

# Decision Rules

## If No Job Description Exists

Build a strong general resume around the candidate's stated target role.

Flag that a job-specific tailoring pass would improve relevance.

## If a Job Description Exists but No Resume Exists

Use the job description to establish priorities, then construct the resume from candidate evidence.

## If a Resume Exists but Candidate Evidence Is Weak

Improve wording without inventing substance.

Identify evidence gaps.

## If the Candidate Is Overqualified

Avoid artificially reducing experience. Reposition toward relevant scope and motivation.

## If the Candidate Is Underqualified

Emphasize legitimate transferable evidence without claiming missing qualifications.

## If a Requirement Is Missing

Do not hide the gap through keyword insertion.

Identify the gap and determine whether transferable evidence exists.

## If the Candidate Has Many Roles

Prioritize relevant and recent experience while preserving a coherent chronology.

## If the Candidate Has Little Experience

Use projects, internships, academic work, volunteer experience, and transferable achievements when genuinely relevant.

---

# Final Quality Gate

Before delivering the final application, confirm:

- [ ] Target role is clear.
- [ ] Positioning is specific.
- [ ] Resume is evidence-based.
- [ ] No unsupported claims were introduced.
- [ ] Metrics are verified.
- [ ] Relevant achievements are prioritized.
- [ ] Job-description keywords are naturally integrated.
- [ ] Skills are legitimate.
- [ ] Certifications are relevant and accurate.
- [ ] Education is appropriately weighted.
- [ ] Dates are consistent.
- [ ] Job titles are accurate.
- [ ] Verb tense is consistent.
- [ ] Formatting is ATS-friendly.
- [ ] Resume is easy to scan.
- [ ] Generic filler has been removed.
- [ ] Cover letter claims match the resume, if a cover letter was created.
- [ ] Remaining information gaps are clearly identified.

---

# Final Principle

A standout resume is not created by making the candidate sound more impressive.

It is created by making the candidate's **most relevant evidence impossible to miss**.

The Skill should therefore optimize for:

**Accuracy → Relevance → Evidence → Clarity → Differentiation → ATS Compatibility**

in that order.
