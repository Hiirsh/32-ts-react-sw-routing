import React from "react";
import { characters, StarWarsContext } from "../../../utils/constants";
import Friend from "./DreamTeam/Friend";

const DreamTeam = () => {
  const { hero } = React.useContext(StarWarsContext);

  const activeHeroIndex = Object.keys(characters).indexOf(hero);
  const charactersToRender = Object.entries(characters);
  charactersToRender.splice(activeHeroIndex, 1);
  return (
    <section className="float-end w-50 row border mx-1 mt-1">
      <h2 className="col-12 text-center">Dream Team</h2>
      {charactersToRender.map(([name, character], i) => (
        <Friend key={name} pos={i + 1} friend={character} name={name} />
      ))}
    </section>
  );
};

export default DreamTeam;
