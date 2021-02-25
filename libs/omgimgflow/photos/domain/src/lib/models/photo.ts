export interface Photo {
  id: string;
  title: string;
  photoBlob: File | null;
  filename: string;
  description: string;
  width: number;
  height: number;
  tags: string[];
}
