import Link from "next/link";
import milad from "@/data/milad.json";
import VerseBlock from "@/components/reader/VerseBlock";
import ReaderControls from "@/components/reader/ReaderControls";
import FontSizeControl from "@/components/reader/FontSizeControl";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function RecitationPage({ params }: Props) {
  const { id } = await params;

  const item = milad.find((r) => r.id === id);

  if (!item) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#F7F3E8]">
        Not found
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F7F3E8] text-gray-900">
      <div className="mx-auto max-w-lg px-5 py-6">
        {/* Top Bar */}
        <div className="flex items-center justify-between text-sm text-gray-600">
          <Link href="/library" className="hover:text-[#8C6A2A]">
            ← Library
          </Link>

          <span>Page {item.page}</span>
        </div>

        {/* Header */}
        <div className="mt-4 border-y border-[#D8C9A8] py-6 text-center">
          <div className="text-sm font-semibold uppercase tracking-[0.25em] text-[#8C6A2A]">
            {item.section}
          </div>

          <h1 className="mt-3 text-4xl font-bold">{item.title}</h1>

          <p className="mt-2 text-lg italic text-gray-500">
            {item.poet}
          </p>

          {/* Interactive Reading Controls */}
          <ReaderControls />
          <FontSizeControl />

          {/* Bismillah Ornament */}
          <div className="mt-6 flex items-center justify-center gap-3">
            <div className="h-px w-20 border-t border-dashed border-[#C6A54A]" />
            <span className="ornament text-xl">﷽</span>
            <div className="h-px w-20 border-t border-dashed border-[#C6A54A]" />
          </div>
        </div>

        {/* Verses */}
        <div className="mt-8">
          {item.verses.map((verse, index) => (
            <VerseBlock
              key={index}
              urdu={verse.urdu}
              roman={verse.roman}
            />
          ))}
        </div>

        {/* Playback Bar */}
        <div className="mt-10 rounded-full bg-[#0F5132] px-4 py-3 text-white shadow-lg">
          <div className="flex items-center justify-between">
            <button className="text-sm font-medium transition hover:text-[#D4AF37]">
              ◀ Prev
            </button>

            <button className="flex h-14 w-14 items-center justify-center rounded-full bg-[#D4AF37] text-2xl text-[#0F5132] shadow-md transition hover:scale-105">
              ▶
            </button>

            <button className="text-sm font-medium transition hover:text-[#D4AF37]">
              Next ▶
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}