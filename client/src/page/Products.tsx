import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Img from "../components/Img";
interface productsCard {
  name: string;
  price: number;
  desc: string;
  imageUrl: string;
  sale: number | null;
}

export const Products = () => {
  const products: productsCard[] = [
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
        "https://cdn.discordappcom/attachments/1186163102417420379/1208060660894924810/110938522_p0_master1200.jpg?ex=65e1e92a&is=65cf742a&hm=d2f3df4e7ffb05ce99329cfbada0aaea45d81cf124e14845ae7228795ab8ad8f&",
      sale: null,
    },
  ];
  const catas = [
    "Loli",
    "Bột màu trắng",
    "Tool sơn súng",
    "Link không che",
    "Blox fruits",
  ];

  const [activeLink, setActiveLink] = useState<string>("Loli");

  return (
    <>
      <div className="mb-6 h-10 w-full p-2">
        <nav>
          <ul className="flex justify-center gap-8">
            {catas.map((cata, index) => (
              <li key={index} className="cursor-pointer">
                <div
                  className={`rounded-xl p-3 ${activeLink.toLowerCase() === cata.toLowerCase() ? "bg-gray-200" : ""}`}
                  onClick={() => setActiveLink(cata)}
                >
                  {cata}
                </div>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="ml-9 mt-8 grid h-screen w-full grid-cols-3">
        {products.map((product, index) => (
          <div
            key={index}
            className="relative h-[350px] w-52 rounded-3xl p-5 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]"
          >
            <div className="flex w-full justify-center">
              <Img
                src={product.imageUrl}
                alt=""
                className="h-[50%] w-[50%] rounded-[20%]"
              />
            </div>
            <div className="flex w-full justify-center">
              <div className="my-2 w-2/3 border border-b-black text-center"></div>
            </div>
            <div className="w-full text-center">
              <span className="font-bold">{product.name}</span>
              <p>{product.desc}</p>
              <p className="mt-4">{product.price.toLocaleString("us")}$</p>
            </div>
            <div className="absolute bottom-0 flex h-10 w-full -translate-x-5 cursor-pointer items-center justify-center gap-2 rounded-b-3xl border-t border-black">
              <FontAwesomeIcon icon={faCartShopping} />
              <span>MUA</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
