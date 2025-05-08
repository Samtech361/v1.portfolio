import { useState, useEffect } from "react";

export default function useActiveSection(sectionIds, observerOptions = {}) {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    // Set initial active section on component mount
    const handleScroll = () => {
      // Find which section is most visible in the viewport
      let maxVisibleSection = "";
      let maxVisiblePercentage = 0;

      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (!element) return;

        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Calculate how much of the element is visible in the viewport
        const visibleHeight =
          Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
        const visiblePercentage = visibleHeight / element.offsetHeight;

        // If this section has more visible area than previous max, update max
        if (visiblePercentage > maxVisiblePercentage) {
          maxVisiblePercentage = visiblePercentage;
          maxVisibleSection = id;
        }

        // If this section's top is near the top of the viewport, prioritize it
        // This helps when scrolling down and seeing the beginning of a section
        if (rect.top >= -50 && rect.top <= 150) {
          maxVisibleSection = id;
          // No need to check further sections
          return;
        }
      });

      if (maxVisibleSection) {
        setActiveSection(maxVisibleSection);
      }
    };

    // Call once on mount to set initial active section
    handleScroll();

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionIds]);

  return activeSection;
}
