// For simplicity, hard-coding the icons since we're not using pre-built components
const ArrowLeftIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m12 19-7-7 7-7" />
    <path d="M19 12H5" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m12 5 7 7-7 7" />
    <path d="M5 12h14" />
  </svg>
);

const GithubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const GlobeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const projects = [
  {
    image: "/newlife.png",
    category: "Web Development",
    title: "New Life Care Missions",
    description:
      "A responsive website for a non-profit organization dedicated to providing healthcare services in underserved communities.",
    github: "https://github.com/user/newlife",
    live: "https://newlifecaremissions.org",
  },
  {
    image: "/jobupdates.png",
    category: "Job Board",
    title: "Job Updates V1",
    description:
      "A modern job board platform connecting employers and job seekers with real-time notifications and application tracking.",
    github: "https://github.com/Samtech361/Jobupdates-cs-project",
    live: "https://jobupdatesv1.netlify.app/",
  },
  {
    image: "/portfolio.png",
    category: "Personal Website",
    title: "Sam Ndegwa Portfolio",
    description:
      "Personal portfolio website showcasing skills, projects, and professional experience with a clean, minimal design.",
    github: "https://github.com/Samtech361/v1.portfolio",
    live: "https://samndegwa.netlify.app",
  },
  // {
  //   image: "/kibalit.png",
  //   category: "E-Commerce",
  //   title: "Kibalit",
  //   description:
  //     "A feature-rich e-commerce platform with product management, shopping cart, and secure payment integration.",
  //   github: "https://github.com/user/kibalit",
  //   live: "https://kibalit.com",
  // },
];

const WorksSection = () => {
  return (
    <section className="py-20 px-6 md:px-12 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-4">
          <div>
            <p className="text-sm text-gray-500 mb-2">- PROJECTS</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a4b]">
              Recent completed work
            </h2>
          </div>
          <div className="flex gap-2">
            <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#1a1a4b] hover:text-white transition-colors">
              <ArrowLeftIcon />
            </button>
            <button className="w-10 h-10 rounded-full bg-[#1a1a4b] text-white flex items-center justify-center hover:opacity-90 transition-opacity">
              <ArrowRightIcon />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 ">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors"
                    aria-label="View GitHub repository"
                  >
                    <GithubIcon />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors"
                    aria-label="View live site"
                  >
                    <GlobeIcon />
                  </a>
                </div>
              </div>

              <div className="p-5">
                <p className="text-sm text-gray-500 mb-1">{project.category}</p>
                <h3 className="text-lg font-semibold text-[#1a1a4b] group-hover:text-blue-600 transition-colors mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex gap-2 pt-2 border-t border-gray-100">
                  <a
                    href={project.github}
                    target="_blank"
                    className="text-xs font-medium py-1 px-3 rounded-full border border-[#1a1a4b] text-[#1a1a4b] hover:bg-[#1a1a4b] hover:text-white transition-colors"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    className="text-xs font-medium py-1 px-3 rounded-full bg-[#1a1a4b] text-white hover:bg-opacity-90 transition-opacity"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-[#1a1a4b] text-white px-8 py-3 rounded-full hover:opacity-90 transition-opacity font-medium">
            View all projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default WorksSection;
