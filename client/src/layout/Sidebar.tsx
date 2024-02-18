import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faQuestionCircle,
  faBox,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  const items = [
    { name: "Home", link: "/", icon: <FontAwesomeIcon icon={faHouse} /> },
    {
      name: "Products",
      link: "/products",
      icon: <FontAwesomeIcon icon={faBox} />,
    },
    {
      name: "Support",
      link: "/support",
      icon: <FontAwesomeIcon icon={faQuestionCircle} />,
    },
  ];

  const [activeLink, setActiveLink] = useState("Home");

  return (
    <aside className="absolute h-full w-24 -translate-x-full md:static md:translate-x-0">
      {
        <ul className="mt-6 px-2">
          {items.map((i) => (
            <li key={i.name} className="mt-1 cursor-pointer">
              <Link to={i.link}>
                <div
                  className={`
                  flex size-[72px] w-full flex-col items-center justify-center rounded-xl duration-300 hover:bg-slate-50 
                      ${activeLink.toLocaleLowerCase() === i.name.toLowerCase() ? "bg-slate-100" : ""}
                    `}
                  onClick={() => setActiveLink(i.name)}
                >
                  <span className="text-slate-900">{i.icon}</span>
                  <span className="text-xs text-slate-600">{i.name}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      }
    </aside>
  );
};
