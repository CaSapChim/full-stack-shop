import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faQuestionCircle, faBox } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  const items = [
    {name: "Home", link: "/", icon: <FontAwesomeIcon icon={faHouse}/>},
    {name: "Products", link: "/products", icon: <FontAwesomeIcon icon={faBox}/>},
    {name: "Support", link: "/support", icon: <FontAwesomeIcon icon={faQuestionCircle}/>},
  ]

  const [activeLink, setActiveLink] = useState("Home");

  return (
    <aside className="w-32 h-[70vh] sticky left-0 top-16 ">
      {
        <ul>
          {
            items.map((i) => (
              <li key={i.name} className="p-4 cursor-pointer">
                <Link to={i.link}>
                  <div 
                    className={`
                      flex flex-col items-center hover:bg-slate-200 px-2 py-4 duration-300 rounded-3xl 
                      ${activeLink.toLocaleLowerCase() === i.name.toLowerCase() ? "bg-slate-200" : ""}
                    `}
                    onClick={() => setActiveLink(i.name)}
                  >
                    <span>{i.icon}</span>
                    <span>{i.name}</span>
                  </div>        
                </Link>
              </li>
            ))
          }
        </ul>
      }
    </aside>
  );
};
