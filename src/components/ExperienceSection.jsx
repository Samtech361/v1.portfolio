import { useState } from "react";

function ExperienceSection() {
  // Skills data with SVG icons
  const skills = [
    {
      name: "React",
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <path
            fill="currentColor"
            d="M12 10.11c1.03 0 1.87.84 1.87 1.89 0 1-.84 1.85-1.87 1.85s-1.87-.85-1.87-1.85c0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 01-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9s-1.17 0-1.71.03c-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03s1.17 0 1.71-.03c.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68 0 1.69-1.83 2.93-4.37 3.68.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.38 1.95-1.46-.84-1.62-3.05-1-5.63-2.54-.75-4.37-1.99-4.37-3.68 0-1.69 1.83-2.93 4.37-3.68-.62-2.58-.46-4.79 1-5.63 1.47-.84 3.46.12 5.38 1.95 1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26 2.1-.63 3.28-1.53 3.28-2.26 0-.73-1.18-1.63-3.28-2.26-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26-2.1.63-3.28 1.53-3.28 2.26 0 .73 1.18 1.63 3.28 2.26.25-.76.55-1.51.89-2.26m9 2.26l-.3.51c.31-.05.61-.1.88-.16-.07-.28-.18-.57-.29-.86l-.29.51m-2.89 4.04c1.59 1.5 2.97 2.08 3.59 1.7.64-.35.83-1.82.32-3.96-.77.16-1.58.28-2.4.36-.48.67-.99 1.31-1.51 1.9M8.08 9.74l.3-.51c-.31.05-.61.1-.88.16.07.28.18.57.29.86l.29-.51m2.89-4.04C9.38 4.2 8 3.62 7.37 4c-.63.36-.82 1.83-.31 3.96a22.7 22.7 0 012.4-.36c.48-.67.99-1.31 1.51-1.9z"
          />
        </svg>
      ),
    },
    {
      name: "JavaScript",
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <path
            fill="currentColor"
            d="M3 3h18v18H3V3m4.73 15.04c.4.85 1.19 1.55 2.54 1.55 1.5 0 2.53-.8 2.53-2.55v-5.78h-1.7V17c0 .86-.35 1.08-.9 1.08-.58 0-.82-.4-1.09-.87l-1.38.83m5.98-.18c.5.98 1.51 1.73 3.09 1.73 1.6 0 2.8-.83 2.8-2.36 0-1.41-.81-2.04-2.25-2.66l-.42-.18c-.73-.31-1.04-.52-1.04-1.02 0-.41.31-.73.81-.73.48 0 .8.21 1.09.73l1.31-.87c-.55-.96-1.33-1.33-2.4-1.33-1.51 0-2.48.96-2.48 2.23 0 1.38.81 2.03 2.03 2.55l.42.18c.78.34 1.24.55 1.24 1.13 0 .48-.45.83-1.15.83-.83 0-1.31-.43-1.67-1.03l-1.38.8z"
          />
        </svg>
      ),
    },
    {
      name: "HTML",
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <path
            fill="currentColor"
            d="M12 17.56l4.07-1.13.55-6.1H9.38L9.2 8.3h7.6l.2-1.99H7l.56 6.01h6.89l-.23 2.58-2.22.6-2.22-.6-.14-1.66h-2l.29 3.19L12 17.56M4.07 3h15.86L18.5 19.2 12 21l-6.5-1.8L4.07 3z"
          />
        </svg>
      ),
    },

    {
      name: "Git",
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <path
            fill="currentColor"
            d="M2.6 10.59L8.38 4.8l1.69 1.7c-.24.85.15 1.78.93 2.23v5.54c-.6.34-1 .99-1 1.73a2 2 0 002 2 2 2 0 002-2c0-.74-.4-1.39-1-1.73V9.41l2.07 2.09c-.07.15-.07.32-.07.5a2 2 0 002 2 2 2 0 002-2 2 2 0 00-2-2c-.18 0-.35 0-.5.07L13.93 7.5a1.98 1.98 0 00-1.15-2.34c-.43-.16-.88-.2-1.28-.09L9.8 3.38l.79-.78c.78-.79 2.04-.79 2.82 0l7.99 7.99c.79.78.79 2.04 0 2.82l-7.99 7.99c-.78.79-2.04.79-2.82 0L2.6 13.41c-.79-.78-.79-2.04 0-2.82z"
          />
        </svg>
      ),
    },
    {
      name: "Node.js",
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <path
            fill="currentColor"
            d="M12 1.85c-.27 0-.55.07-.78.2l-7.44 4.3c-.48.28-.78.8-.78 1.36v8.58c0 .56.3 1.08.78 1.36l1.95 1.12c.95.46 1.27.47 1.71.47 1.4 0 2.2-.85 2.2-2.33V8.17c0-.12-.1-.22-.22-.22H8.5c-.13 0-.23.1-.23.22v8.35c0 .66-.68 1.31-1.77.76L4.45 16a.23.23 0 01-.12-.2V7.49c0-.07.03-.15.1-.18l7.36-4.24a.23.23 0 01.22 0l7.36 4.24c.07.03.1.1.1.18v8.3c0 .08-.03.15-.1.2l-7.36 4.24a.23.23 0 01-.22 0l-1.9-1.14c-.06-.04-.13-.04-.19 0-.52.3-1.62.84-2.15.14-.1-.13-.09-.23-.09-.28C15.3 18.22 16 17.9 16 17.9c.09-.05.12-.15.07-.23 0 0-.07-.13-.07-.13-.05-.1-.17-.14-.27-.11-.31.09-1.33.35-2 .11-.64-.23-2.11-1.28-2.11-1.28-.1-.06-.17-.17-.17-.3V7.04c0-.42.22-.8.58-.99l7.37-4.2c.22-.13.5-.2.77-.2m2.8 8.6c-2.35 0-2.9 1.1-2.9 2.02 0 .08.06.16.15.16h1c.08 0 .15-.06.16-.14.11-.73.43-1.1 1.6-1.1.98 0 1.4.22 1.4.74 0 .3-.12.52-1.68.67-1.3.12-2.1.42-2.1 1.47 0 .98.82 1.54 2.2 1.54 1.34 0 2.2-.47 2.32-1.43.03-.13-.04-.21-.1-.24-.08-.04-.14-.06-.18-.06h-.98c-.07 0-.14.06-.16.13-.17.34-.5.45-1.06.45-.76 0-1.05-.34-1.05-.67 0-.39.16-.5 1.65-.64 1.58-.15 2.12-.48 2.12-1.51 0-1.06-.89-1.64-2.36-1.64z"
          />
        </svg>
      ),
    },
  ];

  // For hover effect
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <div className="bg-gray-50 py-16 px-12">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm text-gray-500 mb-2">- EXPERIENCE</p>
        <h2 className="text-4xl font-bold text-indigo-900 mb-10">
          Everything about me !
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-8 rounded shadow-sm">
            <div className="flex justify-between mb-4">
              <div>
                <p className="text-orange-400 text-sm">2024 - Present</p>
                <h3 className="font-bold text-indigo-900">Web Developer</h3>
              </div>
              <p className="text-gray-500 text-sm">Freelance</p>
            </div>
          </div>
        </div>

        {/* Languages and Tools Section */}
        <div className="mt-8">
          <p className="text-sm text-gray-500 mb-2">- SKILLS</p>
          <h3 className="text-2xl font-bold text-indigo-900 mb-6">
            Languages & Tools
          </h3>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => setHoveredSkill(index)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <div
                  className={`
                    bg-white rounded-lg shadow-sm p-4 h-24 
                    flex items-center justify-center 
                    transition-all duration-300
                    ${
                      hoveredSkill === index
                        ? "bg-indigo-50 transform scale-105"
                        : ""
                    }
                  `}
                >
                  <div
                    className={`w-12 h-12 transition-colors duration-300 ${
                      hoveredSkill === index
                        ? "text-indigo-600"
                        : "text-gray-700"
                    }`}
                  >
                    {skill.icon}
                  </div>
                </div>
                <div
                  className={`
                  absolute -bottom-2 left-1/2 transform -translate-x-1/2
                  bg-indigo-600 text-white text-xs font-medium py-1 px-3 rounded-full
                  transition-all duration-300
                  ${hoveredSkill === index ? "opacity-100" : "opacity-0"}
                `}
                >
                  {skill.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExperienceSection;
