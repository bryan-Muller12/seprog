import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <section className="flex items-center justify-center bg-gradient-to-b from-blue-light to-blue-dark text-white py-12">
        <div className="flex items-center max-w-6xl w-full">
          <div className="flex flex-col gap-16 max-w-lg">
            <div className="flex flex-col gap-5 ">
              <h1 className="text-4xl font-bold drop-shadow">
                II Semana de Computação
              </h1>
              <p>
                Se atualize com a evolução da tecnologia! Será uma semana de
                aprendizados em desenvolvimento web, visão computacional,
                programação em jogos e maratona de programação!
              </p>
            </div>
            <button className="flex items-center justify-center gap-4 py-5 px-8 text-xl bg-yellow self-start rounded-xl shadow hover:scale-105 transition-all focus:scale-105 focus:underline">
              <picture>
                <img className="w-6" src="/img/mao.png" alt="icone mão" />
              </picture>
              Garanta já sua vaga!
            </button>
          </div>

          <picture className="">
            <img
              className="w-[72rem]"
              src="/img/hero-blocks.png"
              alt="Blocos empilhados com o descrito de 19 a 23 de setembro"
            />
          </picture>
        </div>
      </section>
    </>
  );
};

export default Home;
