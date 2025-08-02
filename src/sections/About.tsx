import javaLogo from "../assets/java-logo.png";
import cSharpLogo from "../assets/csharp-logo.png";
import jsLogo from "../assets/js-logo.png";
import tsLogo from "../assets/ts-logo.png";
import angularLogo from "../assets/angular-logo.png";
import reactLogo from "../assets/react-logo.png";
import mySQLLogo from "../assets/mySQL-logo.png";
import sqlServerLogo from "../assets/sqlServer-logo.png";
import mongoDBLogo from "../assets/mongoDB-logo.png";
import Skill from "../components/Skill";

type Props = {};

export default function About({}: Props) {
  return (
    <section>
      <h1 className="text-3xl py-4">Skills</h1>

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <Skill name="Java" logo={javaLogo} level={2} />
        <Skill name="C#" logo={cSharpLogo} level={1} />
        <Skill name="JavaScript" logo={jsLogo} level={1} />
        <Skill name="TypeScript" logo={tsLogo} level={2} />
        <Skill name="Angular" logo={angularLogo} level={2} />
        <Skill name="React" logo={reactLogo} level={1} />
        <Skill name="MySQL" logo={mySQLLogo} level={2} />
        <Skill name="SQL Server" logo={sqlServerLogo} level={2} />
        <Skill name="MongoDB" logo={mongoDBLogo} level={1} />
      </ul>
    </section>
  );
}
