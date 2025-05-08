function ServicesSection() {
  const services = [
    {
      id: "01",
      title: "Web Design",
      description:
        "Lorem ipsum dolor sit amet, dolor adipiscing elit. Non nisi",
    },
    {
      id: "02",
      title: "UI/UX",
      description:
        "Lorem ipsum dolor sit amet, dolor adipiscing elit. Non nisi",
    },
    {
      id: "03",
      title: "Mobile Application",
      description:
        "Lorem ipsum dolor sit amet, dolor adipiscing elit. Non nisi",
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
