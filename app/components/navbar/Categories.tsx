"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import {
  GiBarn,
  GiBoatFishing,
  GiCactus,
  GiCastle,
  GiCaveEntrance,
  GiForestCamp,
  GiIsland,
  GiWindmill,
} from "react-icons/gi";
import { FaSkiing } from "react-icons/fa";
import { BsSnow } from "react-icons/bs";
import { IoDiamond } from "react-icons/io5";
import { MdOutlineVilla } from "react-icons/md";

import CategoryBox from "../CategoryBox";
import Container from "../container";

export const categories = [
  {
    label: "Praia",
    icon: TbBeach,
    description: "Essa propriedade fica próxima da praia!",
  },
  {
    label: "Moinho",
    icon: GiWindmill,
    description: "Essa propriedade tem um moinho encantador!",
  },
  {
    label: "Moderno",
    icon: MdOutlineVilla,
    description: "Essa propriedade é moderna e sofisticada!",
  },
  {
    label: "Campo",
    icon: TbMountain,
    description: "Essa propriedade está situada no campo!",
  },
  {
    label: "Piscina",
    icon: TbPool,
    description: "Essa propriedade tem uma linda piscina!",
  },
  {
    label: "Ilhas",
    icon: GiIsland,
    description: "Essa propriedade fica em uma ilha!",
  },
  {
    label: "Lago",
    icon: GiBoatFishing,
    description: "Essa propriedade fica à beira de um lago!",
  },
  {
    label: "Esqui",
    icon: FaSkiing,
    description: "Essa propriedade tem fácil acesso à estação de esqui!",
  },
  {
    label: "Castelo",
    icon: GiCastle,
    description: "Essa propriedade é um verdadeiro castelo!",
  },
  {
    label: "Caverna",
    icon: GiCaveEntrance,
    description: "Essa propriedade é uma caverna única!",
  },
  {
    label: "Deserto",
    icon: GiCactus,
    description: "Essa propriedade fica no deserto!",
  },
  {
    label: "Ártico",
    icon: BsSnow,
    description: "Essa propriedade está localizada em clima frio!",
  },
  {
    label: "Celeiro",
    icon: GiBarn,
    description: "Essa propriedade é um celeiro aconchegante!",
  },
  {
    label: "Camping",
    icon: GiForestCamp,
    description: "Essa propriedade é perfeita para acampamentos na natureza!",
  },
  {
    label: "Luxo",
    icon: IoDiamond,
    description: "Essa propriedade é luxuosa e sofisticada!",
  },
];

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathname = usePathname();

  const isMainPage = pathname == "/";

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
            selected={category == item.label}
            icon={item.icon}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
