import { FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";

function Contact() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-6">
        <div className="text-center mb-2">
          <p className="text-gray-500 uppercase text-sm tracking-wider">
            - CONTACT
          </p>
        </div>

        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Get In Touch
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-50 p-3 rounded-full">
                    <svg
                      className="w-5 h-5 text-indigo-600"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-gray-500 text-sm mb-1">Phone</h4>
                    <p className="font-medium text-gray-900">
                      (+254) 713 373 270
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-50 p-3 rounded-full">
                    <svg
                      className="w-5 h-5 text-indigo-600"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-gray-500 text-sm mb-1">Email</h4>
                    <p className="font-medium text-gray-900">
                      nsamuel3611@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-50 p-3 rounded-full">
                    <svg
                      className="w-5 h-5 text-indigo-600"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-gray-500 text-sm mb-1">Address</h4>
                    <p className="font-medium text-gray-900">Nairobi, Kenya</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-gray-900 font-medium mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/samtech361"
                    target="_blank"
                    className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center text-indigo-500 hover:bg-indigo-100 hover:text-indigo-600 transition-colors"
                  >
                    <span className="sr-only">Github</span>
                    <FaGithub className="h-5 w-5" />
                  </a>
                  <a
                    href="https://wa.me/254713373270"
                    target="_blank"
                    className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center text-indigo-500 hover:bg-indigo-100 hover:text-indigo-600 transition-colors"
                  >
                    <span className="sr-only">WhatsApp</span>
                    <FaWhatsapp className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.instagram.com/beaversam36/"
                    target="_blank"
                    className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center text-indigo-500 hover:bg-indigo-100 hover:text-indigo-600 transition-colors"
                  >
                    <span className="sr-only">Instagram</span>
                    <FaInstagram className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Send Me A Message
              </h3>

              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="Enter subject"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="Enter your message"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-indigo-500 text-white px-8 py-3 rounded font-medium hover:bg-gray-800 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
