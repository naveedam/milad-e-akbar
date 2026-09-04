import milad from "@/data/milad.json";
import { MiladEntry } from "@/lib/types";

const entries = milad as MiladEntry[];

export default function LibraryPage() {
  return (
    <main className="min-h-screen bg-[#0F5132] text-white">
      <div className="mx-auto max-w-md px-5 py-6">
        <h1 className="text-3xl font-bold">Library</h1>

        <div className="mt-5 rounded-full bg-emerald-800 px-4 py-3 text-emerald-100">
          🔍 Search coming soon...
        </div>

        <div className="mt-6 space-y-3">
          {entries.map((item) => (
            <div
              key={item.id}
              className="rounded-xl bg-white p-4 text-gray-900"
            >
              <div className="flex items-center justify-between text-xs font-semibold uppercase">
                <span className="text-emerald-700">{item.section}</span>
                <span className="text-gray-500">Pg {item.page}</span>
              </div>

              <h2 className="mt-1 text-lg font-bold">{item.title}</h2>

              <p
                dir="rtl"
                className="mt-3 text-right text-2xl leading-loose"
              >
                {item.verses[0].urdu}
              </p>

              <p className="mt-2 text-sm italic text-gray-600">
                {item.verses[0].roman}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}