import "./Container.css";
import type { ReactNode } from "react";
type SectionProps = {
  children: ReactNode;
  inner?: "0" | "default";
};

function Section({ children, inner = "default" }: SectionProps) {
  return (
    <div className={`container container--inner${inner}`}>
      {children}
    </div>
  );
}
export default Section;
