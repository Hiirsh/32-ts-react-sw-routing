import React from 'react';
import Hero from "./Home/Hero";
import '../../css/farGalaxy.module.css'
import DreamTeam from "./Home/DreamTeam";
import FarGalaxy from "./Home/FarGalaxy";

const Home = () => {
    return (
        <main className="clearfix">
            <Hero/>
            <DreamTeam/>
            <FarGalaxy/>
        </main>
    );
};

export default Home;