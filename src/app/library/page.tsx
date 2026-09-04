"use client";

import { useMemo, useState } from "react";
import Fuse from "fuse.js";

import milad from "@/data/milad.json";
import { MiladEntry } from "@/lib/types";

import SearchBar from "@/components/library/SearchBar";
import SectionFilter from "@/components/library/SectionFilter";
import RecitationCard from "@/components/library/RecitationCard";

const entries = milad as MiladEntry[];

type Section = "All" | "Hamd" | "Naat" | "Salam" | "Manqabat";

export default function LibraryPage() {
  const [query, setQuery] = useState("");
  const [section, setSection] = useState<Section>("All");

  const fuse = useMemo(
    () =>
      new Fuse(entries, {
        keys: ["title", "verses.0.urdu", "verses.0.roman"],
        threshold: 0.35,
      }),
    []
  );

  const filtered = useMemo(() => {
    let list =
      query.trim() === ""
        ? entries
        : fuse.search(query).map((r) => r.item);

    if (section !== "All") {
      list = list.filter((i) => i.section === section);
    }

    return list;
  }, [query, section, fuse]);

  return (
    <main className="min-h-screen bg-[#0F5132] text-white">
      <div className="mx-auto max-w-md px-5 py-6">
        <h1 className="text-3xl font-bold">Library</h1>

        <p className="mt-1 text-emerald-200">
          The complete Milad-e-Akbar collection
        </p>

        <div className="mt-5">
          <SearchBar value={query} onChange={setQuery} />
        </div>

        <div className="mt-4">
          <SectionFilter
            selected={section}
            onSelect={setSection}
          />
        </div>

        <div className="mt-6 space-y-4">
          {filtered.map((item) => (
            <RecitationCard key={item.id} item={item} />
          ))}

          {filtered.length === 0 && (
            <div className="rounded-xl bg-emerald-900/40 p-8 text-center text-emerald-200">
              No recitations found.
            </div>
          )}
        </div>
      </div>
    </main>
  );
}