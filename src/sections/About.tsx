import javaLogo from "../assets/java-logo.png";
import cSharpLogo from "../assets/csharp-logo.png";
import jsLogo from "../assets/js-logo.png";
import Skill from "../components/Skill";

type Props = {};

export default function About({}: Props) {
  return (
    <section>
      <h2>Skills</h2>

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <Skill name="Java" logo={javaLogo} level={2} />
        <Skill name="C#" logo={cSharpLogo} level={1} />
        <Skill name="JavaScript" logo={jsLogo} level={1} />
        {/* <li>TypeScript</li>
          <li>Spring Boot</li>
          <li>Angular</li>
          <li>React</li>
          <li>MongoDB</li>
          <li>MySQL</li>
          <li>SQL Server</li> */}
      </ul>
    </section>
  );
}
