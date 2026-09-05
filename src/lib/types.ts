export type Section =
  | "Hamd"
  | "Naat"
  | "Salam"
  | "Manqabat"
  | "Durood"
  | "Munajat"
  | "Narrative"
  | "Miracle"
  | "Lori";

export interface Verse {
  urdu: string;
  roman: string;
  timestamp?: number;
}

export interface MiladEntry {
  id: string;
  title: string;
  poet: string;
  section: Section;
  page: number;
  verses: Verse[];
  audio?: string;
  qiyam?: boolean;
}

export interface PageIndexEntry {
  page: number;
  endPage: number;
  bookLabel: string | null;
  suggestedSection: string;
  title: string;
  poet: string | null;
  qiyam: boolean;
  notes?: string;
}