import { useState ,useEffect} from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);


   useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="flex justify-between items-center px-8 py-4 shadow-md bg-white dark:bg-gray-900">
      
      {/* Logo */}
      <h1 className="text-2xl font-bold text-blue-600">
        Sneha.dev
      </h1>

      {/* Center Links */}
      <ul className="hidden md:flex gap-8 font-medium text-gray-700 dark:text-gray-300">
        <li><a href="#about" className="hover:text-blue-500 transition">About</a></li>
        <li><a href="#projects" className="hover:text-blue-500 transition">Projects</a></li>
        <li><a href="#contact" className="hover:text-blue-500 transition">Contact</a></li>
      </ul>

      {/* Right Side */}
      <div className="flex items-center gap-5">
        
        {/* Social Icons */}
        <a
          href="https://github.com/sneharwt0005"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl text-gray-700 dark:text-gray-300 hover:text-blue-500 transition"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/rwtsneha001/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl text-gray-700 dark:text-gray-300 hover:text-blue-500 transition"
        >
          <FaLinkedin />
        </a>

        {/* Dark Mode Toggle */}
         <button
          onClick={() => setDarkMode(!darkMode)}
          className={`w-12 h-6 flex items-center rounded-full p-1 transition ${
            darkMode ? "bg-blue-500" : "bg-gray-300"
          }`}
        >
          <div
            className={`bg-white w-4 h-4 rounded-full shadow-md transform transition ${
              darkMode ? "translate-x-6" : ""
            }`}
          ></div>
        </button>

      </div>
    </nav>
  );
}
