
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  role: string;
  image: string;
  link?: string;
}

export interface Skill {
  name: string;
  category: 'Frontend' | 'Blockchain' | 'Backend' | 'Tools';
  level: number;
}

export interface VerificationResult {
  verified: boolean;
  message: string;
  hash?: string;
  analysis?: string;
}
