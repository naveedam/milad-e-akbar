interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="relative">
      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-300">
        🔍
      </span>

      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search first line or title..."
        className="w-full rounded-full border border-emerald-700 bg-emerald-900/60 py-3 pl-11 pr-4 text-white placeholder:text-emerald-300 focus:border-[#D4AF37] focus:outline-none"
      />
    </div>
  );
}