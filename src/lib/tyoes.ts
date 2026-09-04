export interface Verse {
  urdu: string;
  roman: string;
  english?: string;
}

export interface Timing {
  line: number;
  start: number;
  end: number;
}

export interface MiladEntry {
  id: string;
  section: "Hamd" | "Naat" | "Salam" | "Manqabat";
  title: string;
  page: number;
  verses: Verse[];
  audio?: string;
  timings?: Timing[];
}