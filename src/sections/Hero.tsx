import { useTranslation } from "react-i18next";
import heroBackground from "../assets/hero-background.jpeg";

type Props = {};

export default function Hero({}: Props) {
  
  const { t } = useTranslation();

  return (
    <section className="relative w-full h-[400px] overflow-hidden">
      <div className="text-white flex flex-col justify-center items-start p-8 h-full">
        <h1 className="text-5xl font-semibold">Luis Alvarado</h1>

        <p className="text-2xl">{t('hero.degree')}</p>
      </div>

      <img
        src={heroBackground}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />
    </section>
  );
}
