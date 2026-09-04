interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function UrduText({
  children,
  className = "",
}: Props) {
  return <p className={`urdu ${className}`}>{children}</p>;
}