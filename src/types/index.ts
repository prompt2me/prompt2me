export interface Deliverable {
  id: string;
  name: string;
  purpose: string;
  format: string;
  keyTakeaway: string;
  iconName: string;
}

export interface RoadmapDay {
  day: number;
  phase: string;
  title: string;
  task: string;
  timeCommitment: string;
  output: string;
}

export interface LaunchChecklistItem {
  id: string;
  label: string;
  status: 'pending' | 'supplied_in_demo' | 'action_needed';
  description: string;
}
