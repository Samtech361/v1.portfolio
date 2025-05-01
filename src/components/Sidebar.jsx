import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Works", path: "/works" },
    // { name: "Blogs", path: "/blogs" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* Mobile menu button */}
      <button
        className="md:hidden fixed top-4 right-4 z-50 p-2 rounded-md bg-indigo-100 text-indigo-800"
        onClick={toggleSidebar}
      >
        {isOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
      </button>

      {/* Sidebar */}
      <div
        className={`bg-white w-full md:w-52 lg:w-64 fixed top-0 z-40 h-screen shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 ease-in-out flex flex-col`}
      >
        <div className="flex flex-col justify-center h-full">
          <div className="flex flex-col items-center p-6 space-y-2">
            <h2 className="text-2xl font-bold text-indigo-500">
              Samuel Ndegwa
            </h2>
          </div>

          {/* Navigation - centered vertically and horizontally */}
          <nav className="flex-1 flex items-center justify-center">
            <ul className="space-y-2 text-center w-full">
              {links.map((link) => (
                <li key={link.path} onClick={() => setIsOpen(false)}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `block py-3 px-4 ${
                        isActive
                          ? "text-indigo-600 font-medium"
                          : "text-gray-500 hover:text-indigo-500"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Social icons */}
        <div className="flex justify-center space-x-4 p-6">
          <a
            href="https://github.com/samtech361"
            className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-indigo-100 hover:text-indigo-600 transition-colors"
          >
            <span className="sr-only">Github</span>
            <FaGithub className="h-5 w-5" />
          </a>
          <a
            href="https://wa.me/254713373270"
            className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-indigo-100 hover:text-indigo-600 transition-colors"
          >
            <span className="sr-only">WhatsApp</span>
            <FaWhatsapp className="h-5 w-5" />
          </a>
          <a
            href="https://www.instagram.com/beaversam36/"
            className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-indigo-100 hover:text-indigo-600 transition-colors"
          >
            <span className="sr-only">Instagram</span>
            <FaInstagram className="h-5 w-5" />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center py-4 text-xs text-gray-500">
          <p>Copyright ©2025 Samuel Ndegwa.</p>
          <p>All right reserved.</p>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
