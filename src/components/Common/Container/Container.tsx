import type { ReactNode } from "react";
type SectionProps = {
  children: ReactNode;
};

function Section({ children }: SectionProps) {
  return (
    <div className="">
      {children}
    </div>
  );
}
export default Section;
