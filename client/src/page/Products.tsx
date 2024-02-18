import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faStar,
  faHeart,
  faVideo,
  faCrosshairs,
  faPills,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import Img from "../components/Img";

interface ProductCard {
  name: string;
  price: number;
  desc: string;
  imageUrl: string;
  sale: number | null;
}

interface Category {
  name: string;
  icon: JSX.Element;
}

export const Products = () => {
  const products: ProductCard[] = [
    {
      name: "Loli tóc xanh",
      desc: "Một bé loli cực dễ thương",
      price: 100000000,
      imageUrl:
        "https://i.pinimg.com/736x/1a/25/49/1a254948b20ec502a018280b7006fe49.jpg",
      sale: null,
    },
    {
      name: "Loli kimono",
      desc: "Bé mặc kimono siêu cute",
      price: 150000000,
      imageUrl:
        "https://i.pinimg.com/564x/db/a6/7e/dba67ead2d77a869892598393e09523b.jpg",
      sale: null,
    },
    {
      name: "Loli xứ hoa anh đào",
      desc: "Nhìn là nungws",
      price: 200000000,
      imageUrl:
        "https://i.pinimg.com/564x/ed/da/d1/eddad1b7fd182fc35a280080eedf6ef6.jpg",
      sale: null,
    },
    {
      name: "Loli ngậm kẹo mút",
      desc: "Nhìn là nungws",
      price: 200000000,
      imageUrl:
        "https://cdn.discordapp.com/attachments/1186163102417420379/1208060633275170866/201ec871d3a4533b066582a002efa7ee.jpg?ex=65e1e923&is=65cf7423&hm=484586352a38c08fef708848eeecdb717dabd015ede16d7fcb954c3f637ff62f&",
      sale: null,
    },
    {
      name: "Loli tóc hồng",
      desc: "Nhìn là nungws",
      price: 200000000,
      imageUrl:
        "https://cdn.discordapp.com/attachments/1186163102417420379/1208060660894924810/110938522_p0_master1200.jpg?ex=65e1e92a&is=65cf742a&hm=d2f3df4e7ffb05ce99329cfbada0aaea45d81cf124e14845ae7228795ab8ad8f&",
      sale: null,
    },
  ];

  const categories: Category[] = [
    { name: "Loli", icon: <FontAwesomeIcon icon={faHeart} /> },
    { name: "Bột màu trắng", icon: <FontAwesomeIcon icon={faPills} /> },
    { name: "Tool sơn súng", icon: <FontAwesomeIcon icon={faCrosshairs} /> },
    { name: "Link không che", icon: <FontAwesomeIcon icon={faVideo} /> },
    { name: "Blox fruits", icon: <FontAwesomeIcon icon={faStar} /> },
  ];

  const [activeLink, setActiveLink] = useState<string>("Loli");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Category | null>(null);

  useEffect(() => {
    const defaultItem = categories.find((cata) => cata.name === activeLink);
    setSelectedItem(defaultItem);
  }, [activeLink, categories]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item: Category) => {
    setSelectedItem(item);
    setActiveLink(item.name);
    setIsOpen(false);
  };

  return (
    <>
      <div className="h-10 w-full">
        <nav className="hidden overflow-hidden rounded-md border-[1px] border-slate-900/10 bg-white lg:block">
          <ul className="flex text-sm">
            {categories.map((cata, index) => (
              <li
                key={index}
                className="w-56 cursor-pointer border-r-[1px] border-slate-900/10 text-slate-700 transition-all duration-300 hover:bg-slate-50 hover:text-slate-900"
              >
                <div
                  className={` flex items-center justify-center gap-2 py-2 ${activeLink.toLowerCase() === cata.name.toLowerCase() ? "text-slate- border-b-2 border-cyan-900" : ""}`}
                  onClick={() => setActiveLink(cata.name)}
                >
                  <span>{cata.icon}</span> <span>{cata.name}</span>
                </div>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <div className="inline-block text-left lg:hidden">
            <div>
              <span className="rounded-md shadow-sm">
                <button
                  type="button"
                  className="inline-flex w-56 justify-center rounded-md border-[1px] border-slate-900/10  bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
                  id="options-menu"
                  aria-expanded="true"
                  aria-haspopup="true"
                  onClick={toggleMenu}
                >
                  {selectedItem ? (
                    <div className="flex items-center gap-3">
                      <span>{selectedItem.icon}</span>
                      <span>{selectedItem.name}</span>
                    </div>
                  ) : (
                    "Select an item"
                  )}
                </button>
              </span>
              {isOpen && (
                <div
                  className="relative z-20 mt-2 w-56 origin-top-right rounded-md border-[1px] border-slate-900/10 bg-white shadow-lg"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  <div className="py-1" role="none">
                    {categories.map((item, index) => (
                      <button
                        key={index}
                        className={`flex w-full gap-3 px-6 py-2 text-start text-sm text-slate-700 hover:bg-gray-100 hover:text-slate-900 ${activeLink.toLowerCase() === item.name.toLowerCase() ? "text-cyan-900" : ""}`}
                        role="menuitem"
                        onClick={() => handleItemClick(item)}
                      >
                        <span>{item.icon}</span> <span>{item.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 grid w-full grid-cols-2  gap-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {products.map((product, index) => (
          <div
            key={index}
            className="h-full w-full rounded-md border-[1px] border-slate-900/10 bg-white p-5"
          >
            <div>
              <div className=" h-40 overflow-hidden rounded-md bg-slate-200">
                <Img
                  src={product.imageUrl}
                  className="size-full object-cover"
                  alt={product.name}
                ></Img>
              </div>
              <div>
                <h3 className="mt-3 w-full truncate font-semibold text-slate-900">
                  {product.name}
                </h3>
                <p className="mb-4 w-full truncate text-slate-600">
                  {product.desc}
                </p>
                <a
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-slate-900 px-4 py-2.5 text-white transition-all duration-300 hover:bg-slate-700"
                  href=""
                >
                  <FontAwesomeIcon icon={faCartShopping} />
                  <span className="truncate"> {product.price}$</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
