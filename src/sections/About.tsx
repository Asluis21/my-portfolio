import javaLogo from "../assets/java-logo.png";
import cSharpLogo from "../assets/cSharp-logo.png";
import jsLogo from "../assets/js-logo.png";
import tsLogo from "../assets/ts-logo.png";
import angularLogo from "../assets/angular-logo.png";
import reactLogo from "../assets/react-logo.png";
import mySQLLogo from "../assets/mySQL-logo.png";
import sqlServerLogo from "../assets/sqlServer-logo.png";
import mongoDBLogo from "../assets/mongoDB-logo.png";
import springBootLogo from "../assets/spring-boot-logo.png";
import Skill from "../components/Skill";
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';

type Props = {};

export default function About({ }: Props) {

  const { t } = useTranslation();

  return (


    <div className="bg-white dark:bg-backgroundDarkMode">

      <section id="about" data-aos="fade-up" data-aos-duration="3000" className="py-15 px-5 rounded-lg flex justify-evenly gap-3 flex-col md:flex-row">
        <h2 className="my-auto dark:text-white text-3xl py-4 items-center">{t('about.title')}</h2>
        <p className="dark:text-gray-300 text-gray-700 mb-4 leading-relaxed text-left md:max-w-2xl">
          {t('about.description')}
        </p>
      </section>

      <hr className="my-8 border-gray-300 dark:border-gray-700" />

      <section id="skills" className="py-4">
        <h1 className="dark:text-white text-3xl my-8">{t('skills.title')}</h1>

        <ul className=" dark:text-gray-300 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <li data-aos="flip-left"><Skill name="Java" logo={javaLogo} level={2} /></li>
          <li data-aos="flip-left"><Skill name="C#" logo={cSharpLogo} level={1} /></li>
          <li data-aos="flip-left"><Skill name="JavaScript" logo={jsLogo} level={1} /></li>
          <li data-aos="flip-left"><Skill name="Spring Boot" logo={springBootLogo} level={2} /></li>
          <li data-aos="flip-left"><Skill name="TypeScript" logo={tsLogo} level={2} /></li>
          <li data-aos="flip-left"><Skill name="Angular" logo={angularLogo} level={2} /></li>
          <li data-aos="flip-left"><Skill name="React" logo={reactLogo} level={1} /></li>
          <li data-aos="flip-left"><Skill name="MySQL" logo={mySQLLogo} level={2} /></li>
          <li data-aos="flip-left"><Skill name="SQL Server" logo={sqlServerLogo} level={2} /></li>
          <li data-aos="flip-left"><Skill name="MongoDB" logo={mongoDBLogo} level={1} /></li>
        </ul>
      </section>
    </div>
  );
}
