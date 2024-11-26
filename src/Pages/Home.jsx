import React from "react";
import Hero from "../Components/Hero/Hero";
import Popular from "../Components/Popular/Popular";
import Offers from "../Components/Offers/Offers";
import Collections from "../Components/Collections/Collections";

const Home = () =>{
    return(
        <div>
            <Hero />
            <Popular />
            <Offers />
            <Collections />
            
        </div>
    )
}

export default Home;