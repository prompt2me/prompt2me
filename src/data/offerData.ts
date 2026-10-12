import { Deliverable, RoadmapDay, LaunchChecklistItem } from '../types';

export const OFFER_INFO = {
  name: "The Organic Content Reset",
  tagline: "Build a calmer, clearer content routine in 14 days.",
  provider: "Fieldnote Studio (fictional sample brand)",
  productType: "Self-guided digital program",
  price: "$149, paid once",
  priceNum: 149,
  delivery: "Instant access to downloadable templates, worksheets, and a 14-day action plan.",
  intendedAudience: "Independent consultants, coaches, and small service-business owners who understand that content can help them explain their expertise, but struggle to publish consistently because ideas, drafts, and plans are scattered across notes and apps.",
  audienceWants: [
    "A manageable way to decide what to publish.",
    "A consistent message that reflects their expertise and services.",
    "A simple workflow they can maintain without a large marketing team.",
    "A reusable system that reduces repeated planning and blank-page friction."
  ],
  commonFrustrations: [
    "Starting each post from scratch.",
    "Collecting ideas without turning them into finished content.",
    "Posting in bursts and then going quiet.",
    "Feeling pressured to publish on every platform."
  ],
  problemStatement: "Content creation feels harder than it needs to because the process is fragmented. Ideas, audience questions, service messages, drafts, and publishing decisions live in different places, so every post becomes a new project.",
  solutionStatement: "The Organic Content Reset provides a lightweight, repeatable workflow for capturing ideas, choosing useful topics, shaping them into clear messages, and planning a realistic publishing rhythm over 14 days.",
  coreWorkflowSteps: [
    { step: 1, title: "Capture audience questions", detail: "Turn real customer conversations, client inquiries, and project lessons into a dedicated idea backlog." },
    { step: 2, title: "Select a focused topic", detail: "Filter your backlog against your core service offerings so every post serves a distinct strategic purpose." },
    { step: 3, title: "Draft one useful message", detail: "Structure your thoughts around one audience need, one central lesson, and one obvious next step." },
    { step: 4, title: "Edit for clarity", detail: "Strip away extraneous tangents and refine phrasing so your professional point is unmistakable." },
    { step: 5, title: "Schedule a realistic publishing rhythm", detail: "Commit to a sustainable cadence based on your available calendar, not arbitrary algorithmic hustle." }
  ],
  guaranteeText: "A 14-day satisfaction guarantee from the date of purchase. Customers may request a refund within 14 calendar days by emailing support@fieldnotestudio.example and providing their order details.",
  guaranteeDisclaimer: "This is a proposed sample policy, not an established business commitment. Before publishing, the business owner must approve the policy and confirm applicable legal requirements. The .example email is a placeholder and will not receive messages.",
  warningText: "If you keep planning from scattered notes, publishing may continue to feel harder than it needs to. The toolkit can help organize the process, but it cannot guarantee audience growth, leads, sales, or a particular publishing result. Outcomes depend on the usefulness of the content, the audience, the offer, and consistent implementation.",
  closingReminder: "You do not need a complicated content machine to communicate your expertise. Start with one clear message, a realistic plan, and a workflow you can repeat. The Organic Content Reset gives you the templates and 14-day path to put that system in place.",
  primaryCTA: "Get the Organic Content Reset",
  primaryCTASupporting: "Get the templates and follow the 14-day plan at your own pace.",
  finalCTA: "Get the Organic Content Reset — $149",
  evidencePolicyNotice: "Fieldnote Studio is a fictional demonstration brand. For this sample, the program is based on a straightforward workflow: capture audience questions, select a focused topic, draft one useful message, edit for clarity, and schedule a realistic next step. No founder biography, client list, testimonials, case studies, revenue results, or performance statistics are supplied. A real landing page should add only verifiable credentials and approved evidence. Do not invent social proof to fill this section."
};

export const DELIVERABLES: Deliverable[] = [
  {
    id: "audience-worksheet",
    name: "Audience & Message Worksheet",
    purpose: "Clarify who you help, the problems you address, and the ideas you want to be known for.",
    format: "Fillable PDF & Notion / Google Docs template",
    keyTakeaway: "Connects your consulting services directly to the specific problems your clients search to solve.",
    iconName: "Compass"
  },
  {
    id: "prompt-bank",
    name: "30-Prompt Idea Bank",
    purpose: "Use structured prompts to turn customer questions, project lessons, and expertise into possible topics.",
    format: "Indexed digital catalog + categorized prompt cards",
    keyTakeaway: "Eliminates staring at a blank screen with field-tested prompts for service providers.",
    iconName: "BookOpen"
  },
  {
    id: "post-template",
    name: "Content-to-Post Template",
    purpose: "Organize each post around one audience need, one central point, and one next step.",
    format: "Structural drafting templates for short & long form",
    keyTakeaway: "Keeps every individual post focused on delivering one high-value takeaway without rambling.",
    iconName: "FileText"
  },
  {
    id: "weekly-planner",
    name: "Weekly Content Planner",
    purpose: "Plan a sustainable publishing rhythm with space for priority, channel, status, and deadline.",
    format: "Weekly planning sheet + spreadsheet template",
    keyTakeaway: "Prevents burnout by matching your publishing pipeline to your realistic weekly calendar.",
    iconName: "Calendar"
  },
  {
    id: "implementation-guide",
    name: "14-Day Implementation Guide",
    purpose: "Follow short daily tasks to set up and test the workflow.",
    format: "Day-by-day action guide (15-20 min/day)",
    keyTakeaway: "A paced, manageable walkthrough to install the system into your working routine.",
    iconName: "CheckSquare"
  },
  {
    id: "repurposing-map",
    name: "Repurposing Map",
    purpose: "Adapt one core idea into several relevant formats without copying and pasting blindly.",
    format: "Multi-channel transformation matrix",
    keyTakeaway: "Turns one thorough project breakdown or newsletter essay into native micro-content thoughtfully.",
    iconName: "Layers"
  }
];

export const FOURTEEN_DAY_ROADMAP: RoadmapDay[] = [
  { day: 1, phase: "Phase 1: Clarifying Message", title: "Target Audience Audit", task: "Complete Section 1 of the Audience Worksheet to define who you advise.", timeCommitment: "20 min", output: "Audience profile sheet" },
  { day: 2, phase: "Phase 1: Clarifying Message", title: "Core Problem Mapping", task: "List the 5 most common questions clients ask you in discovery calls.", timeCommitment: "15 min", output: "Client questions inventory" },
  { day: 3, phase: "Phase 1: Clarifying Message", title: "Pillar Themes Definition", task: "Select 3 overarching themes that reflect your advisory authority.", timeCommitment: "20 min", output: "3 core messaging pillars" },
  { day: 4, phase: "Phase 1: Clarifying Message", title: "30-Prompt Bank Setup", task: "Review the prompt catalog and mark your top 10 initial starters.", timeCommitment: "15 min", output: "Curated prompt shortlist" },
  { day: 5, phase: "Phase 2: Drafting Workflow", title: "First Message Draft", task: "Use the Content-to-Post Template to draft a 250-word point of view.", timeCommitment: "25 min", output: "Draft 1 structure" },
  { day: 6, phase: "Phase 2: Drafting Workflow", title: "The Clarity Polish", task: "Run your draft through the clarity edit checklist to trim excess fluff.", timeCommitment: "15 min", output: "Polished single message" },
  { day: 7, phase: "Phase 2: Drafting Workflow", title: "Rest & Reflection", task: "Step back to review how the structure felt compared to blank-page drafting.", timeCommitment: "10 min", output: "Process feedback notes" },
  { day: 8, phase: "Phase 2: Drafting Workflow", title: "Repurposing Exercise", task: "Apply the Repurposing Map to shape yesterday's draft into a brief summary.", timeCommitment: "20 min", output: "2 format adaptations" },
  { day: 9, phase: "Phase 2: Drafting Workflow", title: "Second Message Draft", task: "Draft message #2 answering a specific client objection using Prompt Bank.", timeCommitment: "20 min", output: "Draft 2 structure" },
  { day: 10, phase: "Phase 3: Building The Routine", title: "Publishing Cadence Setup", task: "Configure your Weekly Content Planner with realistic day/time slots.", timeCommitment: "20 min", output: "Weekly schedule locked" },
  { day: 11, phase: "Phase 3: Building The Routine", title: "Drafting Message #3", task: "Quick draft of a case lesson or practical observation.", timeCommitment: "20 min", output: "Draft 3 structure" },
  { day: 12, phase: "Phase 3: Building The Routine", title: "Idea Backlog Organization", task: "Set up a clean folder/sheet for capturing ongoing thoughts as they happen.", timeCommitment: "15 min", output: "Permanent idea inbox" },
  { day: 13, phase: "Phase 3: Building The Routine", title: "First Week Scheduling", task: "Schedule the 3 finalized pieces into your selected platform channels.", timeCommitment: "20 min", output: "Scheduled queue ready" },
  { day: 14, phase: "Phase 3: Building The Routine", title: "Routine Review & Ongoing Plan", task: "Review your repeatable 14-day rhythm and commit to the ongoing weekly cadence.", timeCommitment: "15 min", output: "Sustainable ongoing habit" }
];

export const REQUIRED_LAUNCH_CHECKLIST: LaunchChecklistItem[] = [
  {
    id: "business-identity",
    label: "Actual business name, logo, and approved brand assets",
    status: "supplied_in_demo",
    description: "Fieldnote Studio is used as the fictional demonstration brand name."
  },
  {
    id: "founder-credentials",
    label: "Verified founder credentials and authorized testimonials / case studies",
    status: "action_needed",
    description: "As mandated by brief evidence policy, no fabricated testimonials or fake statistics are included. Live site requires real verified client data."
  },
  {
    id: "final-deliverables",
    label: "Confirmed product files and final downloadable deliverables",
    status: "action_needed",
    description: "Host final PDFs, Notion templates, and spreadsheet files on private CDN or membership portal."
  },
  {
    id: "legal-policies",
    label: "Approved pricing, refund policy, terms of service, and privacy policy",
    status: "action_needed",
    description: "The 14-day guarantee is an illustrative sample policy. Business owner must approve legal terms prior to public launch."
  },
  {
    id: "checkout-endpoint",
    label: "Working checkout URL and customer support contact",
    status: "action_needed",
    description: "A live checkout provider (e.g., Stripe Payment Link, LemonSqueezy) and monitored support inbox must replace the placeholder."
  },
  {
    id: "scarcity-constraints",
    label: "Any genuine deadline or capacity limit, if applicable",
    status: "supplied_in_demo",
    description: "Confirmed: evergreen self-guided access with zero artificial countdown timers or false caps."
  },
  {
    id: "product-media",
    label: "Real product screenshots or preview images, if available",
    status: "supplied_in_demo",
    description: "Editorial photography and tactile mockups generated to match organic design brief."
  }
];
