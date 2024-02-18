import React, { memo, useState, useRef, useEffect, KeyboardEvent } from "react";
import { Link } from "react-router-dom";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faRightToBracket,
  faBars,
  faQuestionCircle,
  faHouse,
  faBox,
} from "@fortawesome/free-solid-svg-icons";

export const Header: React.FC = memo(() => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.ctrlKey && event.key === "m") {
      inputRef.current?.focus();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

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

  return (
    <>
      <header className="z-50 border-b-[1px] border-b-slate-900/10">
        <div className="flex h-[66px] items-center bg-white px-6">
          <div className="flex items-center gap-3">
            <div
              className="block cursor-pointer text-lg text-slate-900 transition-all duration-300 hover:text-slate-700 md:hidden"
              onClick={toggleMenu}
            >
              <FontAwesomeIcon icon={faBars} />
            </div>
            <div className="h-10">
              <Link to="/">
                <img className="h-full" src="/logo.png" alt="Logo" />
              </Link>
            </div>
          </div>
          <div className="flex flex-1 items-center justify-end gap-6">
            <Tippy content="Tìm Kiếm" placement="left" animation="scale">
              <button className="block cursor-pointer text-base text-slate-900 transition-all duration-300 hover:text-slate-700 sm:hidden">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </Tippy>
            <div className="hidden h-10 w-72 items-center overflow-hidden rounded-lg border-[1px] border-slate-900/10 bg-white px-4 sm:flex">
              <div className="text-base text-slate-400">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </div>
              <input
                ref={inputRef}
                className="ml-3 w-full text-sm text-slate-600 focus:outline-none"
                type="text"
                placeholder="Tìm kiếm mọi thứ..."
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
              />
              <kbd
                className={
                  isFocused
                    ? "hidden"
                    : "w-16 font-sans font-semibold text-slate-500"
                }
              >
                <abbr title="Control" className="text-slate-300 no-underline">
                  Ctrl{" "}
                </abbr>{" "}
                M
              </kbd>
            </div>
            <div className="flex items-center border-l-[1px] border-l-slate-900/10 pl-5  text-sm font-semibold">
              <Link 
                to="/auth/reg"
                className="text-slate-900 transition-all duration-300 hover:text-slate-700"
              >
                Đăng Ký
              
              </Link>
              <Link
                to="/auth/login"
                className="ml-4 rounded-lg bg-slate-900 px-4 py-2.5 text-white transition-all duration-300 hover:bg-slate-700"
              >
                <FontAwesomeIcon icon={faRightToBracket} />
              
              </Link>
            </div>
          </div>
        </div>
      </header>
      <nav
        className={`absolute left-0 top-[67px] z-40 h-full w-full max-w-96 bg-white p-5 shadow-2xl transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{
          height: "calc(-68px + 100dvh)",
        }}
      >
        <ul>
          {items.map((i) => (
            <li
              key={i.name}
              className="mt-1 flex cursor-pointer flex-col gap-y-10"
            >
              <Link to={i.link}>
                <div
                  className="
                  flex w-full items-center gap-5 rounded-full px-6 py-3 duration-300 hover:bg-slate-100 
                     "
                >
                  <span>{i.icon}</span>
                  <span>{i.name}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
});
