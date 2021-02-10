export interface Photo {
  id: string;
  photo: File | null;
  filename: string;
  title: string;
  description: string;
  tags: string[];
}
