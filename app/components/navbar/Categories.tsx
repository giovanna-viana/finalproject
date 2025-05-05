"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import {
  GiBoatFishing,
  GiCaveEntrance,
  GiForestCamp,
  GiIsland,
} from "react-icons/gi";
import { MdOutlineVilla } from "react-icons/md";

import CategoryBox from "../CategoryBox";
import Container from "../container";

export const categories = [
  {
    label: "Praia",
    icon: TbBeach,
    description: "Esta propriedade é próxima da praia!",
  },
  {
    label: "Moderno",
    icon: MdOutlineVilla,
    description: "Esta propriedade é moderna!",
  },
  {
    label: "Campo",
    icon: TbMountain,
    description: "Esta propriedade fica no campo!",
  },
  {
    label: "Piscinas",
    icon: TbPool,
    description: "Esta propriedade possui uma bela piscina!",
  },
  {
    label: "Ilhas",
    icon: GiIsland,
    description: "Esta propriedade fica em uma ilha!",
  },
  {
    label: "Lago",
    icon: GiBoatFishing,
    description: "Esta propriedade fica perto de um lago!",
  },
  {
    label: "Cavernas",
    icon: GiCaveEntrance,
    description: "Esta propriedade fica em uma caverna misteriosa!",
  },
  {
    label: "Acampamento",
    icon: GiForestCamp,
    description: "Esta propriedade oferece atividades de acampamento!",
  },
];

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathname = usePathname();
  const isMainPage = pathname === "/";

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div
        className="
          pt-4
          flex 
          flex-row 
          items-center 
          justify-between
          overflow-x-auto
        "
      >
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            icon={item.icon}
            selected={category === item.label}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
