import { useState } from "react";

import AC from "../assets/jobs/AC.png";
import tiler from "../assets/jobs/alicatador - azulejos.png";
import heater from "../assets/jobs/calefaccion.png";
import carpenter from "../assets/jobs/carpintero metalico.png";
import glaziers from "../assets/jobs/cristaleros.png";
import elderlyCare from "../assets/jobs/elderly care.png";
import electrician from "../assets/jobs/electricista.png";
import cementPlasterer from "../assets/jobs/enfoscador - cemento.png";
import ladder from "../assets/jobs/escaleras.png";
import coversRoof from "../assets/jobs/especialiste en cubiertas - tejado.png";
import plumber from "../assets/jobs/fontanero.png";
import homeRepair from "../assets/jobs/home repair 1.png";
import nanny from "../assets/jobs/nanny.png";
import wallpaper from "../assets/jobs/papel pared.png";
import painter from "../assets/jobs/pintor.png";
import wallCovering from "../assets/jobs/revestimientos pared.png";
import floors from "../assets/jobs/suelo.png";
import washerTechnician from "../assets/jobs/tecnico electrodomesticos-lavadora.png";

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
export const useImageStackById = (id?: number): ImageStack | null => {
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

  const filteredImage = id ? imageStack.find(image => image.id === id) : null;

  return filteredImage ?? null; // return filtered image or null if no id is specified
};
