"use client";

import UrduText from "@/components/ui/UrduText";
import { useReaderStore } from "@/store/readerStore";

interface Props {
  urdu: string;
  roman: string;
}

export default function VerseBlock({ urdu, roman }: Props) {
  const { showRoman, fontSize } = useReaderStore();

  return (
    <div className="verse">
      <UrduText
        className="text-center leading-loose text-gray-900"
        style={{ fontSize: `${fontSize}px` }}
      >
        {urdu}
      </UrduText>

      {showRoman && (
        <p className="mt-3 text-center text-lg italic text-gray-600">
          {roman}
        </p>
      )}
    </div>
  );
}