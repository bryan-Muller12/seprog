import type { NextPage } from "next";
import CallButton from "../components/CallButton";
import ParticipantButton from "../components/ParticipantButton";
import { Tab } from "@headlessui/react";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const Home: NextPage = () => {
  let participantData = [
    {
      img: { src: "/img/logo-seprog.png", alt: "Logo da Seprog" },
      name: "byron.solutions",
      content: "Conteúdo de CSS, HTML e JS.",
      longContent:
        "A byron.solutions é uma empresa junior que atua no ramo se consultoria em TI, com soluções em desenvolvimento em sistemas, de sites e inclusão digital de pequenas empresas. É composta por alunos dos cursos de sistema da Informação, Ciencia da Computação e Engenharia da Computação.",
      social: {
        href: "https://instagram.com/byron.solutions",
        name: "byron.solutions",
      },
    },

    {
      img: { src: "/img/logo-seprog.png", alt: "Logo da Seprog" },
      name: "byron.solutions",
      content: "Conteúdo de CSS, HTML e JS.",
      longContent:
        "A byron.solutions é uma empresa junior que atua no ramo se consultoria em TI, com soluções em desenvolvimento em sistemas, de sites e inclusão digital de pequenas empresas. É composta por alunos dos cursos de sistema da Informação, Ciencia da Computação e Engenharia da Computação.",
      social: {
        href: "https://instagram.com/byron.solutions",
        name: "byron.solutions",
      },
    },

    {
      img: { src: "/img/logo-seprog.png", alt: "Logo da Seprog" },
      name: "byron.solutions",
      content: "Conteúdo de CSS, HTML e JS.",
      longContent:
        "A byron.solutions é uma empresa junior que atua no ramo se consultoria em TI, com soluções em desenvolvimento em sistemas, de sites e inclusão digital de pequenas empresas. É composta por alunos dos cursos de sistema da Informação, Ciencia da Computação e Engenharia da Computação.",
      social: {
        href: "https://instagram.com/byron.solutions",
        name: "byron.solutions",
      },
    },

    {
      img: { src: "/img/logo-seprog.png", alt: "Logo da Seprog" },
      name: "byron.solutions",
      content: "Conteúdo de CSS, HTML e JS.",
      longContent:
        "A byron.solutions é uma empresa junior que atua no ramo se consultoria em TI, com soluções em desenvolvimento em sistemas, de sites e inclusão digital de pequenas empresas. É composta por alunos dos cursos de sistema da Informação, Ciencia da Computação e Engenharia da Computação.",
      social: {
        href: "https://instagram.com/byron.solutions",
        name: "byron.solutions",
      },
    },
  ];

  let tabsData = [
    {
      id: 1,
      tab: {
        day: "Segunda-Feira (19/09)",
        person: "buron.solutions",
        descrition: "Desenvolvimento de um portifolio pessoal",
      },
      content: {
        title: "Desonvolvimento de um portifolio pessoal",
        text: "Teoria: O mini-curso tera como objetivo o ensinamento do ciclo basico do desenvolvimento web, contemplano HTML, CSS e JS.",
      },
    },

    {
      id: 2,
      tab: {
        day: "Terça-Feira (20/09)",
        person: "buron.solutions",
        descrition: "Desenvolvimento de um portifolio pessoal",
      },
      content: {
        title: "Titulo 2",
        text: "Teoria: O mini-curso tera como objetivo o ensinamento do ciclo basico do desenvolvimento web, contemplano HTML, CSS e JS.",
      },
    },

    {
      id: 3,
      tab: {
        day: "Quarta-Feira (21/09)",
        person: "buron.solutions",
        descrition: "Desenvolvimento de um portifolio pessoal",
      },
      content: {
        title: "Titulo 2",
        text: "Teoria: O mini-curso tera como objetivo o ensinamento do ciclo basico do desenvolvimento web, contemplano HTML, CSS e JS.",
      },
    },

    {
      id: 4,
      tab: {
        day: "Quinta-Feira (22/09)",
        person: "buron.solutions",
        descrition: "Desenvolvimento de um portifolio pessoal",
      },
      content: {
        title: "Titulo 2",
        text: "Teoria: O mini-curso tera como objetivo o ensinamento do ciclo basico do desenvolvimento web, contemplano HTML, CSS e JS.",
      },
    },
  ];

  return (
    <>
      {/* Começo do Hero */}
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
            <CallButton start />
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
      {/* Fim do Hero */}

      {/* Começo do sobre */}
      <section className="flex items-center justify-center bg-blue-dark text-white py-12">
        <div className="flex flex-col items-center  max-w-6xl w-full py-8">
          <div className="flex items-center gap-24">
            <picture>
              <img
                className="w-[120rem]"
                src="/img/sobre.png"
                alt="Professor dando aula para os alunos"
              />
            </picture>

            <div className="flex flex-col gap-5">
              <span className="bg-white rounded w-20 h-0.5"></span>

              <h2 className="text-xl font-bold">Sobre a SEPROG</h2>

              <p className="text-4xl font-bold drop-shadow">
                Faça parte dessa evolução
              </p>

              <p>
                Com sua primeira edição em 2021 no formato EAD, a Semana de
                Programação vem se tornando um grande evento realizado pelo
                Instituto de Matemática e Computação da UNIFEI, com o objetivo
                de mostrar e ensinar conteúdos incríveis, muito fortes no ramo
                profissional, de uma forma prática, para todos os alunos na
                universidade.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center  gap-24 py-32">
            <div className="flex flex-col items-center gap-16">
              <h2 className="font-bold text-4xl">Aprenda com os Melhores!</h2>

              <div className="grid grid-cols-2 grid-rows-2 gap-10">
                {participantData.map((participant, key) => (
                  <ParticipantButton key={key} data={participant} />
                ))}
              </div>
            </div>

            <CallButton />
          </div>
        </div>
      </section>
      {/* Fim do Hero */}

      <section className="flex items-center justify-center bg-gradient-to-b from-blue-dark to-blue-light text-white pb-20">
        <div className="flex flex-col items-center  max-w-6xl w-full ">
          <Tab.Group>
            <div className=" flex items-center rounded-3xl bg-gray shadow ">
              <Tab.List as="ul" className="flex flex-col items-start ">
                {tabsData.map((tab, index) => (
                  <Tab
                    as="li"
                    key={index}
                    className={({ selected }) =>
                      classNames(
                        "bg-blue-dark rounded-r-2xl first:rounded-tl-2xl first:rounded-tr-none last:rounded-bl-2xl last:rounded-br-none shadow w-80",
                        selected ? "bg-blue-light w-[360px] z-10" : ""
                      )
                    }
                  >
                    <button className="flex flex-col items-start gap-2 text-xl text-left px-5 py-3">
                      <h3 className=" text-2xl font-bold">{tab.tab.day}</h3>
                      <span className="font-bold">{tab.tab.person}</span>
                      <p> {tab.tab.descrition}</p>
                    </button>
                  </Tab>
                ))}
              </Tab.List>

              <Tab.Panels>
                {tabsData.map((tab, index) => (
                  <Tab.Panel
                    key={index}
                    className="bg-blue-light m-16 p-6 rounded-3xl shadow"
                  >
                    <h2>{tab.content.title}</h2>

                    <p>{tab.content.text}</p>
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </div>
          </Tab.Group>
        </div>
      </section>
    </>
  );
};

export default Home;
