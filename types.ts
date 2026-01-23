export interface LevelData {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
}

export interface QuestionData {
  question: string;
  answer: string;
}

export interface NavItem {
  label: string;
  href: string;
}