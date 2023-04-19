import { useState } from "react";

const AC = "https://res.cloudinary.com/dptkzrmqc/image/upload/v1681912278/ac_l2bcjr.png";
const tiler =
  "https://res.cloudinary.com/dptkzrmqc/image/upload/v1681912278/alicatador-azulejos_kaexy4.png";
const heater =
  "https://res.cloudinary.com/dptkzrmqc/image/upload/v1681912278/calefaccion_ixqr4s.png";
const carpenter =
  "https://res.cloudinary.com/dptkzrmqc/image/upload/v1681912278/carpintero-metalico_ugvrk4.png";
const glaziers =
  "https://res.cloudinary.com/dptkzrmqc/image/upload/v1681912278/cristaleros_p5dphn.png";
const elderlyCare =
  "https://res.cloudinary.com/dptkzrmqc/image/upload/v1681912278/elderly-care_zzaax9.png";
const electrician =
  "https://res.cloudinary.com/dptkzrmqc/image/upload/v1681912279/electricista_xopgxu.png";
const cementPlasterer =
  "https://res.cloudinary.com/dptkzrmqc/image/upload/v1681912278/enfoscador-cemento_yswkvm.png";
const ladder = "https://res.cloudinary.com/dptkzrmqc/image/upload/v1681912278/escaleras_bwcsb5.png";
const coversRoof =
  "https://res.cloudinary.com/dptkzrmqc/image/upload/v1681912278/especialisteencubiertas-tejado_mhlgt7.png";
const plumber =
  "https://res.cloudinary.com/dptkzrmqc/image/upload/v1681912279/fontanero_kap0fh.png";
const homeRepair =
  "https://res.cloudinary.com/dptkzrmqc/image/upload/v1681912279/Home-repair-1_pt4wab.png";
const nanny = "https://res.cloudinary.com/dptkzrmqc/image/upload/v1681912279/nanny_nsmp4s.png";
const wallpaper =
  "https://res.cloudinary.com/dptkzrmqc/image/upload/v1681912279/papel-pared_g1ck8s.png";
const painter = "https://res.cloudinary.com/dptkzrmqc/image/upload/v1681912279/pintor_g6zjuk.png";
const wallCovering =
  "https://res.cloudinary.com/dptkzrmqc/image/upload/v1681912279/revestimientos-pared_sp1vtn.png";
const floors = "https://res.cloudinary.com/dptkzrmqc/image/upload/v1681912280/suelo_nva2nz.png";
const washerTechnician =
  "https://res.cloudinary.com/dptkzrmqc/image/upload/v1681912279/tecnico-electrodomesticos-lavadora_tkoa0o.png";

export interface ImageStack {
  id: number;
  image: string;
  title: string;
}

export const useImageStack = () => {
  const imageStack: ImageStack[] = [
    { id: 1, image: AC, title: "AC" },
    { id: 15, image: tiler, title: "Tiler" },
    { id: 9, image: heater, title: "Heater" },
    { id: 2, image: carpenter, title: "Carpenter" },
    { id: 8, image: glaziers, title: "Glaziers" },
    { id: 5, image: elderlyCare, title: "Elderly Care" },
    { id: 6, image: electrician, title: "Electrician" },
    { id: 3, image: cementPlasterer, title: "Cement Work" },
    { id: 11, image: ladder, title: "Ladder" },
    { id: 4, image: coversRoof, title: "Covers Roof" },
    { id: 14, image: plumber, title: "Plumber" },
    { id: 10, image: homeRepair, title: "Home Repair" },
    { id: 12, image: nanny, title: "Nanny" },
    { id: 17, image: wallpaper, title: "Wallpaper" },
    { id: 13, image: painter, title: "Painter" },
    { id: 16, image: wallCovering, title: "Wall Covering" },
    { id: 7, image: floors, title: "Floors" },
    { id: 18, image: washerTechnician, title: "Washer" }
  ];

  return imageStack;
};

export interface ImageStack2 {
  id: number;
  image: string;
  title: string;
}

export const useImageStackById = (id?: number): ImageStack2 | null => {
  const imageStack: ImageStack2[] = [
    { id: 1, image: AC, title: "AC" },
    { id: 15, image: tiler, title: "Tiler" },
    { id: 9, image: heater, title: "Heater" },
    { id: 2, image: carpenter, title: "Carpenter" },
    { id: 8, image: glaziers, title: "Glaziers" },
    { id: 5, image: elderlyCare, title: "Elderly Care" },
    { id: 6, image: electrician, title: "Electrician" },
    { id: 3, image: cementPlasterer, title: "Cement Work" },
    { id: 11, image: ladder, title: "Ladder" },
    { id: 4, image: coversRoof, title: "Covers Roof" },
    { id: 14, image: plumber, title: "Plumber" },
    { id: 10, image: homeRepair, title: "Home Repair" },
    { id: 12, image: nanny, title: "Nanny" },
    { id: 17, image: wallpaper, title: "Wallpaper" },
    { id: 13, image: painter, title: "Painter" },
    { id: 16, image: wallCovering, title: "Wall Covering" },
    { id: 7, image: floors, title: "Floors" },
    { id: 18, image: washerTechnician, title: "Washer" }
  ];

  const filteredImage = id ? imageStack.find(image => image.id === id) : null;

  return filteredImage ?? null; // return filtered image or null if no id is specified
};
/* export const useImageStackWithIcon = (id?: number): ImageStack2[] => {
  const imageStack: ImageStack2[] = [
    { id: 1, image: AC, title: "AC", icon: MdRoofing },
    { id: 15, image: tiler, title: "Tiler", icon: TbWall },
    { id: 9, image: heater, title: "Heater", icon: MdRoofing },
    { id: 2, image: carpenter, title: "Carpenter", icon: MdCarpenter },
    { id: 8, image: glaziers, title: "Glaziers", icon: MdRoofing },
    { id: 5, image: elderlyCare, title: "Elderly Care", icon: MdElderly },
    { id: 6, image: electrician, title: "Electrician", icon: MdElectricBolt },
    { id: 3, image: cementPlasterer, title: "Cement Work", icon: MdConstruction },
    { id: 11, image: ladder, title: "Ladder", icon: TbLadder },
    { id: 4, image: coversRoof, title: "Covers Roof", icon: MdRoofing },
    { id: 14, image: plumber, title: "Plumber", icon: MdPlumbing },
    { id: 10, image: homeRepair, title: "Home Repair", icon: MdConstruction },
    { id: 12, image: nanny, title: "Nanny", icon: TbMoodKid },
    { id: 17, image: wallpaper, title: "Wallpaper", icon: TbMoodKid },
    { id: 13, image: painter, title: "Painter", icon: AiFillFormatPainter },
    { id: 16, image: wallCovering, title: "Wall Covering", icon: TbWall },
    { id: 7, image: floors, title: "Floors", icon: TbWall },
    { id: 18, image: washerTechnician, title: "Washer", icon: TbWall }
  ];

  return imageStack; // return filtered image or null if no id is specified
};
 */
