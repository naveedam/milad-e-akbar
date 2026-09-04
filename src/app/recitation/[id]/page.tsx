import Link from "next/link";
import milad from "@/data/milad.json";
import UrduText from "@/components/ui/UrduText";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function RecitationPage({ params }: Props) {
  const { id } = await params;

  const item = milad.find((r) => r.id === id);

  if (!item) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-[#F7F3E8]">
        Not found
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F7F3E8] text-gray-900">
      <div className="mx-auto max-w-lg px-5 py-6">
        <div className="flex items-center justify-between text-sm text-gray-600">
          <Link href="/library">← Library</Link>
          <span>Page {item.page}</span>
        </div>

        <div className="mt-4 border-t border-b border-[#D8C9A8] py-4 text-center">
          <div className="text-sm font-semibold tracking-[0.25em] text-[#8C6A2A] uppercase">
            {item.section}
          </div>

          <h1 className="mt-2 text-2xl font-bold">{item.title}</h1>

          <p className="mt-1 text-sm italic text-gray-500">
            {item.poet}
          </p>
        </div>

        <div className="mt-8 space-y-8">
          {item.verses.map((verse, index) => (
            <div key={index}>
              <UrduText className="text-center text-gray-900">
                {verse.urdu}
              </UrduText>

              <p className="mt-2 text-center text-sm italic text-gray-600">
                {verse.roman}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-full bg-[#0F5132] px-4 py-3 text-white">
          <div className="flex items-center justify-between">
            <button className="text-sm">◀ Prev</button>

            <button className="flex h-12 w-12 items-center justify-center rounded-full bg-[#D4AF37] text-xl text-[#0F5132]">
              ▶
            </button>

            <button className="text-sm">Next ▶</button>
          </div>
        </div>
      </div>
    </main>
  );
}