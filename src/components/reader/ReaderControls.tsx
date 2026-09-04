"use client";

import { useReaderStore } from "@/store/readerStore";

export default function ReaderControls() {
  const { showRoman, toggleRoman } = useReaderStore();

  return (
    <div className="mt-5 flex items-center justify-between rounded-xl bg-[#EFE7D2] px-4 py-3">
      <div>
        <p className="text-sm font-medium text-gray-700">
          Reading Preference
        </p>
        <p className="text-xs text-gray-500">
          Show Roman transliteration
        </p>
      </div>

      <button
        onClick={toggleRoman}
        className={`relative h-8 w-16 rounded-full transition ${
          showRoman ? "bg-[#D4AF37]" : "bg-gray-300"
        }`}
      >
        <span
          className={`absolute top-1 h-6 w-6 rounded-full bg-white shadow transition ${
            showRoman ? "left-9" : "left-1"
          }`}
        />
      </button>
    </div>
  );
}