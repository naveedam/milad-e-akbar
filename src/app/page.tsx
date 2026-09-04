import naat from "@/data/naat.json";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0F5132] text-white">
      <div className="mx-auto max-w-md px-6 py-10">
        <div className="text-center">
          <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-[#D4AF37]">
            <span className="text-3xl">☪</span>
          </div>

          <h1 className="text-4xl font-bold tracking-wide">
            Milad-e-Akbar
          </h1>

          <p className="mt-2 text-emerald-100">
            Digital Reader & Recitor
          </p>
        </div>

        <div className="mt-10 space-y-4">
          <button className="w-full rounded-2xl bg-white p-5 text-left text-[#0F5132] shadow-lg transition hover:scale-[1.02]">
            <div className="text-xl font-semibold">📖 Read</div>
            <div className="text-sm text-gray-600">
              Browse Hamd, Na'at, Salam & Manqabat
            </div>
          </button>

          <button className="w-full rounded-2xl bg-[#D4AF37] p-5 text-left text-[#0F5132] shadow-lg transition hover:scale-[1.02]">
            <div className="text-xl font-semibold">▶ Recite</div>
            <div className="text-sm">
              Synchronized audio with highlighted verses
            </div>
          </button>
        </div>

        <div className="mt-10">
          <h2 className="mb-3 text-lg font-semibold">Featured Na'at</h2>

          {naat.map((item) => (
            <div
              key={item.id}
              className="rounded-xl border border-emerald-700 bg-emerald-900/40 p-4"
            >
              <div className="text-sm text-emerald-200">{item.category}</div>

              <div className="mt-1 text-xl font-semibold">
                {item.title}
              </div>

              <div
                dir="rtl"
                className="mt-4 text-right text-2xl leading-loose"
              >
                {item.verses[0].urdu}
              </div>

              <div className="mt-2 text-sm italic text-emerald-100">
                {item.verses[0].roman}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}