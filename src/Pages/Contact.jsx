import React from "react";
import Footer from "../Components/Footer/Footer";
import HeroProducts from "../Components/Hero for Products/HeroProducts";
import ContactHero from "../Components/Hero for Contact/ContactHero";
import ContactSection from "../Components/ContactSection/ContactSection";
import Faqs from "../Components/Faqs/Faqs";

const Contact = () =>{
    return(
        <div>
         <ContactHero />
         <Faqs />
         <ContactSection />
         <Footer />
        </div>
    )
}

export default Contact;