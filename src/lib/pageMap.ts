import pageIndex from "@/data/milad-page-index.json";

export function getPdfPage(bookPage: number): number {
  const match = pageIndex.entries.find(
    (entry) => entry.page === bookPage || entry.endPage === bookPage
  );

  return match?.page ?? bookPage;
}