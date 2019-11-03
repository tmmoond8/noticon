export interface Noticon {
  id: string;
  title: string;
  imgUrl: string;
  keywords: string;
  date?: number;
}

export type SortMode = "date" | "alphabet";