import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center bg-blue-dark  text-white font-semibold">
      <div className="flex items-center  max-w-6xl max-ww-6xl ">
        <div className="flex flex-col w-full">
          <div className=" flex items-center gap-36 p-2">
            <div className="flex flex-col items-center w-52">
              <picture>
                <img src="/img/unifei.png" alt="Logo Unifei " />
              </picture>
              <picture>
                <img src="img/IMC.png" alt="Logo IMC" />
              </picture>
            </div>
            <div className="flex flex-col items-center w-52">
              <picture className="flex items-center flex-col">
                <img src="/img/logo-seprog.png" alt="logo seprog" />
                <img src="/img/seprog.png" alt="seprog" />
                <p>Todos direitos reservados</p>
              </picture>
            </div>

            <div className="flex flex-col gap-6">
              <h2 className=" text-3xl font-light text-lx">Organizadores</h2>
              <ul className="flex flex-col">
                <li>byron.solutions</li>
                <li>Brack Bee Drones</li>
                <li>Dev-U</li>
                <li>Maratona de Programação</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div
        className="flex items-center justify-center w-full"
        style={{ boxShadow: "0 -4px 8px rgba(0, 0, 0, 0.10)" }}
      >
        <span>
          <picture>
            <a href="http://byronsolutions.com/" target="_blank">
              <img
                className="w-96"
                src="/img/logo-byron-branca.png"
                alt="Logo byron"
              />
            </a>
          </picture>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
