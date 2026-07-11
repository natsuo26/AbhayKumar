export interface Experience {
  title: string;
  company: string;
  start: Date;
  end?: Date | undefined | null;
  description: string;
  technologies: string[];
}
