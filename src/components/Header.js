import React from "react";

function Header() {
  return (
    <header className="w-full fixed bg-white text-gray-900 p-4 flex justify-between items-center">
      <nav className="space-x-7">
        <a href="#about" className="hover:text-gray-400">
          About me
        </a>
        <a href="#projects" className="hover:text-gray-400">
          My Work
        </a>
        <a href="#skills" className="hover:text-gray-400">
          Skills
        </a>
        <a href="#education" className="hover:text-gray-400">
          Education
        </a>
        <a href="#contact" className="hover:text-gray-400">
          Contact
        </a>
      </nav>
      <button className="bg-blue-500 text-white px-4 py-2 rounded">
        Download CV
      </button>
    </header>
  );
}

export default Header;
