export interface Verse {
  urdu: string;
  roman: string;
}

export interface MiladEntry {
  id: string;
  section: "Hamd" | "Naat" | "Salam" | "Manqabat";
  title: string;
  poet: string;
  page: number;
  qiyam: boolean;
  verses: Verse[];
}