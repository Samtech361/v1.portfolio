function ExperienceSection() {
  return (
    <div className="bg-[#f8f9fc] py-16 px-12">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm text-gray-500 mb-2">- EXPERIENCE</p>
        <h2 className="text-4xl font-bold text-[#1a1a4b] mb-10">
          Everything about me !
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded shadow-sm">
            <div className="flex justify-between mb-4">
              <div>
                <p className="text-orange-400 text-sm">2018 - Present</p>
                <h3 className="font-bold text-[#1a1a4b]">Web Developer</h3>
              </div>
              <p className="text-gray-500 text-sm">-Envato</p>
            </div>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExperienceSection;
