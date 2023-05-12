import Navbar from "../components/Navbar"
import Hero from "../components/Hero";
import ServiceImg from "../assets/ic.png"
import Footer from "../components/Footer";
import ServiceComponents from "../components/ServiceComponents";

function Service() {
    return (
        <>
            <Navbar />
            <Hero
                cName="hero-mid"
                heroImg={ServiceImg}
                title=""
                // text="Choose Your Favourite Destination"
                url="/"
                buttonText="Travel Plan"
                btnClass="hide"
            />
            <ServiceComponents />
            <Footer />
        </>
    )
}

export default Service;