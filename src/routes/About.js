import Navbar from "../components/Navbar"
import Hero from "../components/Hero";
import AboutImg from "../assets/i2.jpg"
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

function About() {
    return (
        <>
            <Navbar />
            <Hero
                cName="hero-mid"
                heroImg={AboutImg}
                title="About Us"
                // text="Choose Your Favourite Destination"
                url="/"
                buttonText="Travel Plan"
                btnClass="hide"
            />
            <AboutUs />
            <Footer />
        </>
    )
}

export default About;