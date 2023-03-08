import React from "react";
import { characters } from "../../../utils/constants";

interface IHero {
  hero: string
}
const Hero = ({hero}: IHero) => {
  return (
    <section className="float-start w-25 me-3">
      <img
        className="w-100"
        src={characters[hero].img}
        alt={characters[hero].name}
      />
    </section>
  );
};

export default Hero;
