import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

type Props = {
  name: string;
  logo?: string;
  level: number;
};

export default function Skill({ name, logo, level }: Props) {



  return (
    <li className="flex flex-col items-center gap-2">
      {logo && <img src={logo} alt={name + "logo"} className="w-20 h-20" />}
      <h2 className="text-lg">{name}</h2>
      <div className="flex flex-row">
        {[
          [...Array(3)].map((_, i) => (
            <span
              key={i}
              className={`text-xl ${
                i < level ? "text-yellow-400" : "text-gray-300"
              }`}
            >
              ★
            </span>
          )),
        ]}
      </div>
    </li>
  );
}
