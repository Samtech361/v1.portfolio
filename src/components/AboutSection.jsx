function AboutSection() {
  return (
    <div className="bg-white py-12 px-12">
      <div className="max-w-5xl mx-auto flex">
        <div>
          <p className="text-sm text-gray-500 mb-2">- NICE TO MEET YOU!</p>
          <h1 className="text-4xl font-bold text-[#1a1a4b] mb-1">
            Samuel Ndegwa
          </h1>
          <p className="text-lg text-[#1a1a4b] mb-6">
            Web Designer & Developer
          </p>
          <a
            href="../../public/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-indigo-500 text-white px-6 py-3 rounded mb-12"
          >
            Download CV
          </a>
        </div>

        <div>
          <div className="mb-8">
            <p className="text-gray-600 mb-4">
              Hello there! My name is{" "}
              <span className="text-orange-400">Samuel Ndegwa</span>. I am a web
              designer & developer, and I&apos;m very passionate and dedicated
              to my work.
            </p>
            <p className="text-gray-600 mb-8">
              With 2 years experience as a professional web developer, I have
              acquired the skills and knowledge necessary to make your project a
              success.
            </p>
          </div>
          <div className="grid grid-cols-4 gap-4 mb-12">
            <div>
              <p className="text-gray-500 text-sm">AGE</p>
              <p className="font-medium">25</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">BORN IN</p>
              <p className="font-medium">Florida, USA</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">MAIL</p>
              <p className="font-medium">info@elisc.com</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">CALL</p>
              <p className="font-medium">(+987) 987 654 321</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
