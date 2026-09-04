import { CSSProperties, ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export default function UrduText({
  children,
  className = "",
  style,
}: Props) {
  return (
    <p
      dir="rtl"
      style={style}
      className={`urdu-text text-right leading-loose ${className}`}
    >
      {children}
    </p>
  );
}