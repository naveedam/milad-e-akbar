import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0F5132] text-white">
      <div className="mx-auto max-w-md px-6 py-12">
        {/* Header */}
        <div className="text-center">
          <div className="mx-auto mb-5 flex h-24 w-24 items-center justify-center rounded-full bg-[#D4AF37] shadow-lg">
            <span className="text-4xl">☪</span>
          </div>

          <h1 className="text-5xl font-bold tracking-wide">
            Milad-e-Akbar
          </h1>

          <p className="mt-3 text-lg text-emerald-100">
            Digital Reader & Recitor
          </p>
        </div>

        {/* Primary Action */}
        <div className="mt-14">
          <Link href="/library" className="block">
            <div className="rounded-3xl bg-white p-6 text-[#0F5132] shadow-xl transition duration-200 hover:scale-[1.02] hover:shadow-2xl">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0F5132]/10 text-3xl">
                  📖
                </div>

                <div>
                  <h2 className="text-2xl font-bold">Open Milad</h2>
                  <p className="mt-1 text-sm text-gray-600">
                    Browse Hamd, Na&apos;at, Salam &amp; Manqabat
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Footer */}
        <div className="mt-20 text-center">
          <div className="mx-auto h-px w-24 bg-[#D4AF37]/40" />

          <p className="mt-6 text-sm italic leading-relaxed text-emerald-100">
            A digital companion to the beloved compilation of Hamd, Na&apos;at,
            Salam and Manqabat.
          </p>

          <p className="mt-6 text-xs uppercase tracking-[0.25em] text-emerald-300">
            Version 1.0
          </p>
        </div>
      </div>
    </main>
  );
}