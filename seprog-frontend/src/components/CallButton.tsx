import React from "react";

interface IProps {
  start?: boolean;
}

const CallButton = ({ start }: IProps) => {
  return (
    <a
      href="http://google.com"
      target="_blank"
      className="flex items-center justify-center gap-4 py-5 px-8 text-xl bg-yellow rounded-xl shadow hover:scale-105 transition-all focus:scale-105 focus:underline "
      style={{ alignSelf: start ? "start" : "unset" }}
    >
      <picture>
        <img className="w-6" src="/img/mao.png" alt="icone mão" />
      </picture>
      Garanta já sua vaga!
    </a>
  );
};

export default CallButton;
