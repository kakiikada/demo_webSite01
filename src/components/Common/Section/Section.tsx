import type { ReactNode } from "react";
type SectionProps = {
  children: ReactNode;
};

function Section({ children }: SectionProps) {
  return (
    <section className="">
      {children}
    </section>
  );
}
export default Section;
