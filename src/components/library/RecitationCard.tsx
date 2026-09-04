import Link from "next/link";
import { MiladEntry } from "@/lib/types";
import UrduText from "@/components/ui/UrduText";

interface Props {
  item: MiladEntry;
}

export default function RecitationCard({ item }: Props) {
  return (
    <Link href={`/recitation/${item.id}`}>
      <div className="rounded-2xl bg-white p-4 text-gray-900 shadow-sm transition hover:shadow-md">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold uppercase text-emerald-700">
            {item.section}
          </span>

          <span className="text-xs text-gray-500">
            Pg {item.page}
          </span>
        </div>

        <h3 className="mt-2 text-lg font-bold">{item.title}</h3>

        <UrduText className="mt-3 text-gray-800">
          {item.verses[0].urdu}
        </UrduText>

        <p className="mt-2 text-sm italic text-gray-600">
          {item.verses[0].roman}
        </p>
      </div>
    </Link>
  );
}