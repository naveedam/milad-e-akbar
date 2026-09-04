"use client";

import { useReaderStore } from "@/store/readerStore";

export default function ReaderControls() {
  const { showRoman, toggleRoman } = useReaderStore();

  return (
    <div className="mt-5 flex justify-end">
      <button
        onClick={toggleRoman}
        className={`rounded-full border px-4 py-2 text-sm transition ${
          showRoman
            ? "border-[#C6A54A] bg-[#C6A54A] text-white"
            : "border-gray-300 text-gray-500"
        }`}
      >
        Roman {showRoman ? "ON" : "OFF"}
      </button>
    </div>
  );
}