function Hero() {
  return (
    <div className=" ">
      <div className="container mx-auto px-6 py-16 md:py-20 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <p className="text-lg text-indigo-500 mb-3">
            Hi, I&apos;m <span className="font-bold">Samuel!</span>
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Fullstack Developer
            <br />
            Based in Kenya
          </h1>
          <p className="text-gray-600 mb-8">
            I build sleek, scalable web apps with JavaScript and React.
            <br />
            Let’s bring your ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#"
              className="bg-indigo-500 text-white px-6 py-3 rounded text-center hover:bg-gray-800 transition-colors"
            >
              Got a project?
            </a>
            <a
              href="#"
              className="border border-gray-300 text-gray-900 px-6 py-3 rounded text-center hover:bg-gray-100 transition-colors"
            >
              Let&apos;s talk
            </a>
          </div>
        </div>
        <div className="md:w-1/2 relative">
          <div className="bg-indigo-200 rounded-full w-64 h-64 md:w-80 md:h-80 mx-auto relative">
            <img
              src="/hero-image.jpg"
              alt="Robert Elisc"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="absolute top-0 right-0 -mt-4 -mr-4">
            <svg
              className="w-8 h-8 text-indigo-200"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0L14.59 8.41L23 12L14.59 15.59L12 24L9.41 15.59L1 12L9.41 8.41L12 0Z" />
            </svg>
          </div>
          <div className="absolute bottom-10 left-0 -ml-4">
            <svg
              className="w-8 h-8 text-indigo-300"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0L14.59 8.41L23 12L14.59 15.59L12 24L9.41 15.59L1 12L9.41 8.41L12 0Z" />
            </svg>
          </div>
          <div className="absolute right-10 bottom-0 -mb-4">
            <svg
              className="w-10 h-10 text-indigo-100"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M21 10.975V8a2 2 0 0 0-2-2h-6V4.688c.305-.274.5-.668.5-1.11a1.5 1.5 0 0 0-3 0c0 .442.195.836.5 1.11V6H5a2 2 0 0 0-2 2v2.975A3.5 3.5 0 0 0 0 14.5a3.5 3.5 0 0 0 3.5 3.5 3.5 3.5 0 0 0 3.5-3.5l-.003-.25H17l-.003.25a3.5 3.5 0 0 0 3.5 3.5 3.5 3.5 0 0 0 3.5-3.5 3.5 3.5 0 0 0-3-3.525zm-17.5 5.025a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm14 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8 border-t border-gray-200">
        <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
          <div className="border-l-4 border-indigo-500 pl-4">
            <p className="text-gray-600">+254 713 373 270</p>
            <p className="text-gray-600">nsamuel361@gmail.com</p>
            <p className="text-gray-600">Nairobi, Kenya</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
