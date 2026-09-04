import { create } from "zustand";

interface ReaderState {
  showRoman: boolean;
  fontSize: number;

  toggleRoman: () => void;
  setFontSize: (size: number) => void;
}

export const useReaderStore = create<ReaderState>((set) => ({
  showRoman: true,
  fontSize: 34,

  toggleRoman: () =>
    set((state) => ({
      showRoman: !state.showRoman,
    })),

  setFontSize: (size) =>
    set({
      fontSize: size,
    }),
}));