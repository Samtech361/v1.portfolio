function ServicesSection() {
  const services = [
    {
      id: "01",
      title: "Frontend Development",
      description:
        "Building responsive and interactive user interfaces using React, HTML, CSS, and JavaScript to create engaging web experiences.",
    },
    {
      id: "02",
      title: "Backend Development",
      description:
        "Creating robust server-side applications and RESTful APIs using Node.js, Express, and database integration.",
    },
    {
      id: "03",
      title: "API Development",
      description:
        "Designing and implementing APIs that connect applications and services, with proper documentation and testing.",
    },
    {
      id: "04",
      title: "Responsive Web Design",
      description:
        "Crafting websites that work seamlessly across all devices using modern CSS frameworks like Tailwind.",
    },
    {
      id: "05",
      title: "Code Optimization",
      description:
        "Improving application performance through efficient coding practices and identifying optimization opportunities.",
    },
  ];

  return (
    <div className="py-12">
      <div className="container mx-auto px-6">
        <div className="text-center mb-2">
          <p className="text-gray-500 uppercase text-sm tracking-wider">
            - SERVICES
          </p>
        </div>

        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">My Services</h2>
          <a
            href="mailto:info@elisc.com"
            className="text-gray-900 hover:text-indigo-600 transition-colors"
          ></a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="text-gray-400 mb-4">{service.id}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <a
                href="#"
                className="inline-flex items-center text-gray-900 hover:text-indigo-600 transition-colors"
              >
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;
