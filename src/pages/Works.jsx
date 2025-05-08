import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
const projects = [
  {
    image:
      "https://uploadthingy.s3.us-west-1.amazonaws.com/5WSbrznQS14aVokkoszEf7/works.png",
    category: "UI DESIGN",
    title: "Firogo Majestic Co Ltd.",
  },
  {
    image:
      "https://uploadthingy.s3.us-west-1.amazonaws.com/5WSbrznQS14aVokkoszEf7/works.png",
    category: "UI DESIGN",
    title: "Firogo Majestic Co Ltd.",
  },
];
const WorksSection = () => {
  return (
    <section className="py-20 px-12 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <div>
            <p className="text-sm text-gray-500 mb-2">- PROJECTS</p>
            <h2 className="text-4xl font-bold text-[#1a1a4b]">
              Recent completed work
            </h2>
          </div>
          <div className="flex gap-2">
            <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#1a1a4b] hover:text-white transition-colors">
              <ArrowLeftIcon size={20} />
            </button>
            <button className="w-10 h-10 rounded-full bg-[#1a1a4b] text-white flex items-center justify-center hover:opacity-90 transition-opacity">
              <ArrowRightIcon size={20} />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {projects.map((project, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full aspect-[3/4] object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <p className="text-sm text-gray-500 mb-1">{project.category}</p>
              <h3 className="text-lg font-semibold text-[#1a1a4b] group-hover:text-blue-600 transition-colors">
                {project.title}
              </h3>
            </div>
          ))}
        </div>
        <div className="text-center">
          <button className="bg-[#1a1a4b] text-white px-8 py-3 rounded hover:opacity-90 transition-opacity">
            View all projects
          </button>
        </div>
      </div>
    </section>
  );
};
export default WorksSection;
