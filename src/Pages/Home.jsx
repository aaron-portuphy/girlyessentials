import React from "react";
import Hero from "../Components/Hero/Hero";
import Popular from "../Components/Popular/Popular";
import Offers from "../Components/Offers/Offers";
import Collections from "../Components/Collections/Collections";
import Channel from "../Components/Channel/Channel";
import Footer from "../Components/Footer/Footer";

const Home = () =>{
    return(
        <div>
            <Hero />
            <Popular />
            <Offers />
            <Collections />
            <Channel />
            <Footer />
            
        </div>
    )
}

export default Home;