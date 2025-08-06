import { useTranslation } from "react-i18next";
import heroBackground from "../assets/hero-background.jpeg";
import githubIconWhite from "../assets/github-mark-white.svg";


type Props = {};

export default function Hero({}: Props) {
  
  const { t } = useTranslation();

  return (
    <section className="relative w-full h-[400px] overflow-hidden">
      <div data-aos="fade-up" data-aos-duration="3000" className="text-white flex flex-col justify-center items-start p-8 h-full">
        <h1 className="text-5xl font-semibold">Luis Alvarado</h1>
        <p className="text-2xl">{t('hero.degree')}</p>
        <a
          href="https://github.com/asLuis21"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block px-4 py-2"
        >
          <img src={githubIconWhite} alt="GitHub" className="w-10 h-10 inline-block mr-2 transition-transform duration-200 hover:scale-110" />
        </a>
      </div>
      <img
        src={heroBackground}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />
    </section>
  );
}
