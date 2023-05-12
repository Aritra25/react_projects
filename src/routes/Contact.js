import Navbar from "../components/Navbar"
import Hero from "../components/Hero";
import ContactImg from "../assets/d.jpg"
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

function Contact() {
    return (
        <>
            <Navbar />
            <Hero
                cName="hero-mid"
                heroImg={ContactImg}
                title="Contact Us"
                // text="Choose Your Favourite Destination"
                url="/"
                buttonText="Travel Plan"
                btnClass="hide"
            />
            <ContactForm />
            <Footer />
        </>
    )
}

export default Contact;