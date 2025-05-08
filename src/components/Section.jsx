import { useRef } from "react";

function Section({ id, children, className = "" }) {
  const sectionRef = useRef(null);

  return (
    <section id={id} ref={sectionRef} className={`section ${className}`}>
      {children}
    </section>
  );
}

export default Section;
