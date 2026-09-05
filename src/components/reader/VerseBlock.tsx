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
      className={`verse rounded-xl px-4 py-5 transition ${
        active ? "bg-[#FFF4CC]" : ""
      }`}
    >
      <UrduText
        className="text-center text-gray-900"
        style={{ fontSize }}
      >
        {urdu}
      </UrduText>

      {showRoman && (
        <p className="mt-3 text-center text-sm italic text-gray-600">
          {roman}
        </p>
      )}
    </div>
  );
}