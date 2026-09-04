interface Props {
  params: Promise<{ id: string }>;
}

export default async function RecitationPage({ params }: Props) {
  const { id } = await params;

  return (
    <main className="min-h-screen bg-[#0F5132] p-6 text-white">
      <h1 className="text-2xl font-bold">
        Recitation {id}
      </h1>

      <p className="mt-3 text-emerald-200">
        Reader mode will be implemented next.
      </p>
    </main>
  );
}