const sections = ["All", "Hamd", "Naat", "Salam", "Manqabat"] as const;

type Section = (typeof sections)[number];

interface Props {
  selected: Section;
  onSelect: (section: Section) => void;
}

export default function SectionFilter({
  selected,
  onSelect,
}: Props) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-1">
      {sections.map((section) => (
        <button
          key={section}
          onClick={() => onSelect(section)}
          className={`rounded-full px-4 py-2 text-sm font-medium whitespace-nowrap transition ${
            selected === section
              ? "bg-[#D4AF37] text-[#0F5132]"
              : "bg-emerald-900 text-emerald-100"
          }`}
        >
          {section}
        </button>
      ))}
    </div>
  );
}