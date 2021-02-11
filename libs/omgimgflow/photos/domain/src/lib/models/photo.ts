export interface Photo {
  id: string;
  photoBlob: File | null;
  filename: string;
  title: string;
  description: string;
  tags: string[];
}
