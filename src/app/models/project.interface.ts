export interface Project {
  id: number;
  name: string;
  tags: string[];
  url: string | null;
  repo: string | null;
  description: string;
}
