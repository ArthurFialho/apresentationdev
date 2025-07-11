import { FiArrowRightCircle } from "react-icons/fi";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.06] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center "
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Bridging front-end finesse with back-end power
          </p>

          <TextGenerateEffect
            words="Clean code, clear architecture. Continuous delivery."
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-1xl font-mono font-light">
            hi! I&apos;m Arthur, a full stack developer based in Brazil -{" "}
            <span className="cursor-pointer font-extrabold text-green-600 hover:text-green-400 transition-colors">
              🇧🇷
            </span>
          </p>

          <a href="#about">
            <MagicButton
              title="explore now"
              icon={<FiArrowRightCircle />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
