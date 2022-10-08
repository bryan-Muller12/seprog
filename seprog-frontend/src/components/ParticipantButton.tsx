import React, { useState } from "react";
import { Dialog } from "@headlessui/react";

interface IProps {
  data: {
    img: {
      src: string;
      alt: string;
    };
    name: string;
    content: string;
    longContent: string;
    social: {
      href: string;
      name: string;
    };
  };
}

const ParticipantButton = ({ data }: IProps) => {
  let [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <div className="p-3 bg-blue-light rounded-2xl shadow hover:scale-[1.01] transition-all">
        <div className=" flex items-center p-4 gap-9 bg-white rounded-2xl">
          <picture>
            <img
              className="rounded-xl border-2 border-blue-light drop-shadow-2xl"
              src={data.img.src}
              alt={data.img.alt}
            />
          </picture>

          <div className="flex flex-col items-start text-black ">
            <span className="font-bold">{data.name}</span>
            <span>{data.content}</span>
          </div>
          <button
            onClick={() => setIsOpen(true)}
            className="hover:scale-105 transition-all"
          >
            <picture>
              <img
                className="w-20 "
                src="/img/arrow.png"
                alt="seta para baixo"
              />
            </picture>
          </button>
        </div>
      </div>

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-10"
      >
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur"
          aria-hidden="true"
        />

        <div className="fixed inset-0 flex items-center justify-center">
          <Dialog.Panel className="p-3 bg-blue-light rounded-2xl max-w-lg">
            <div className="flex flex-col p-4 gap-9 bg-white rounded-2xl ">
              <div className=" flex items-center justify-between">
                <picture>
                  <img
                    className="rounded-xl border-2 border-blue-light w-16"
                    src={data.img.src}
                    alt={data.img.alt}
                  />
                </picture>
                <div className="flex flex-col items-start text-black ">
                  <span className="font-bold text-4xl">{data.name}</span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="hover:scale-105 transition-all"
                >
                  <picture>
                    <img
                      className="w-20 "
                      src="/img/arrow2.png"
                      alt="seta para baixo"
                    />
                  </picture>
                </button>
              </div>

              <p>{data.content}</p>

              <p className="text-lg">{data.longContent}</p>

              <a
                className="self-center text-3xl font-bold hover:underline"
                href={data.social.href}
                target="_blank"
              >
                @{data.social.name}
              </a>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export default ParticipantButton;
