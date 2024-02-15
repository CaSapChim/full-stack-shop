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
} from "@fortawesome/free-solid-svg-icons";

export const Header: React.FC = memo(() => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

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

  return (
    <header className="sticky left-0 top-0 border-b-[1px] border-b-slate-900/10 z-50">
      <div className="flex h-[66px] items-center bg-white px-6">
        <div className="flex items-center gap-3">
          <div className="block cursor-pointer text-lg text-slate-900 transition-all duration-300 hover:text-slate-700 md:hidden">
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
            <a
              className="text-slate-900 transition-all duration-300 hover:text-slate-700"
              href=""
            >
              Đăng Ký
            </a>
            <a
              className="ml-4 rounded-lg bg-slate-900 px-4 py-2.5 text-white transition-all duration-300 hover:bg-slate-700"
              href=""
            >
              <FontAwesomeIcon icon={faRightToBracket} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
});
