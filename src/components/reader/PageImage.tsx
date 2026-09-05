import Image from "next/image";
import { getPdfPage } from "@/lib/pageMap";

interface Props {
  page: number;
}

export default function PageImage({ page }: Props) {
  const pdfPage = getPdfPage(page);

  return (
    <div className="mt-8 overflow-hidden rounded-3xl border border-[#D8C9A8] bg-white shadow-sm">
      <Image
        src={`/book/pages/page-${pdfPage}.png`}
        alt={`Milad-e-Akbar printed page ${page}`}
        width={900}
        height={1300}
        className="h-auto w-full"
        priority
      />
    </div>
  );
}