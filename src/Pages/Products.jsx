import React from "react";
import Hero from "../Components/Hero/Hero";
import Offers from "../Components/Offers/Offers";
import Collections from "../Components/Collections/Collections";
import Channel from "../Components/Channel/Channel";
import AllProduct from "../Components/AllProducts/AllProducts";
import Footer from "../Components/Footer/Footer";
import HeroProducts from "../Components/Hero for Products/HeroProducts";
import ProductsOffers from "../Components/Products Offers/ProductsOffers";

const Products = () =>{
    return(
        <div>
            <HeroProducts />
            <AllProduct />
            <ProductsOffers />
            {/* <Collections />
            <Channel /> */}
            <Footer />
        </div>
    )
}

export default Products;