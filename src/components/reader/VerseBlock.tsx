"use client";

import UrduText from "@/components/ui/UrduText";
import { useReaderStore } from "@/store/readerStore";

interface Props {
  urdu: string;
  roman: string;
  active?: boolean;
}

export default function VerseBlock({
  urdu,
  roman,
  active = false,
}: Props) {
  const { showRoman, fontSize } = useReaderStore();

  return (
    <div
      className={`rounded-xl px-4 py-5 transition-all duration-300 ${
        active
          ? "bg-[#F3E7BF] shadow-md ring-1 ring-[#D4AF37]"
          : ""
      }`}
    >
      <div style={{ fontSize: `${fontSize}px` }}>
        <UrduText className="text-center text-gray-900">
          {urdu}
        </UrduText>
      </div>

      {showRoman && (
        <p className="mt-3 text-center text-sm italic text-gray-600">
          {roman}
        </p>
      )}
    </div>
  );
}