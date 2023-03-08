import React from "react";
import Hero from "./Home/Hero";
import "../../css/farGalaxy.module.css";
import DreamTeam from "./Home/DreamTeam";
import FarGalaxy from "./Home/FarGalaxy";
import { characters, navItems, StarWarsContext } from "../../utils/constants";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { hero, setHero } = React.useContext(StarWarsContext);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!Object.keys(characters).includes(hero)) {
      navigate(`/${navItems[0].route}/${hero}`);
    } else {
      setHero(hero);
    }
  }, [hero, navigate, setHero]);

  return (
    <main className="clearfix">
      <Hero hero={hero}/>
      <DreamTeam />
      <FarGalaxy />
    </main>
  );
};

export default Home;
