import UrduText from "@/components/ui/UrduText";

interface VerseBlockProps {
  urdu: string;
  roman?: string;
}

export default function VerseBlock({
  urdu,
  roman,
}: VerseBlockProps) {
  return (
    <div className="verse">
      <UrduText className="text-center text-gray-900">
        {urdu}
      </UrduText>

      {roman && (
        <p className="mt-3 text-center text-sm italic text-gray-600">
          {roman}
        </p>
      )}
    </div>
  );
}