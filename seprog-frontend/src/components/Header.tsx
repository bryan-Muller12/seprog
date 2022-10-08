import { FLIGHT_MANIFEST } from "next/dist/shared/lib/constants";
import React from "react";

const Header = () => {
  return (
    <header className="flex items-center justify-center bg-blue-dark h-20">
      <div className="flex items-center justify-between max-w-6xl w-full ">
        <picture className="flex items-center justify-between w-16">
          <img src="/img/logo-seprog.png" alt="logo seprog" />
          <img src="/img/seprog.png" alt="seprog"></img>
        </picture>
        <ul className="flex items-center gap-8 text-white font-medium">
          <li>
            <a
              className="hover:text-yellow hover:underline focus:text-yellow focus:underline focus:outline-none transition-all"
              href="#sobre"
            >
              Sobre
            </a>
          </li>
          <li>
            <a
              className="hover:text-yellow hover:underline focus:text-yellow focus:underline focus:outline-none transition-all"
              href="#organizadores"
            >
              Organizadores
            </a>
          </li>
          <li>
            <a
              className="hover:text-yellow hover:underline focus:text-yellow focus:underline focus:outline-none transition-all"
              href="#programacao"
            >
              Programação
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
