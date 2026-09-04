"use client";

import { useReaderStore } from "@/store/readerStore";

export default function FontSizeControl() {
  const { fontSize, setFontSize } = useReaderStore();

  return (
    <div className="mt-4">
      <div className="mb-2 flex justify-between text-sm text-gray-600">
        <span>Urdu Size</span>
        <span>{fontSize}px</span>
      </div>

      <input
        type="range"
        min={24}
        max={46}
        value={fontSize}
        onChange={(e) => setFontSize(Number(e.target.value))}
        className="w-full accent-[#C6A54A]"
      />
    </div>
  );
}