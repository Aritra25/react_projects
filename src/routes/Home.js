
import Hero from "../components/Hero";
import Navbar from "../components/Navbar"
import Destination from "../components/Destination"
import Trip from "../components/Trip";
import Footer from "../components/Footer";
function Home() {
    return (
        <>
            <Navbar />
            <Hero
                cName="hero"
                heroImg="https://images.unsplash.com/photo-1579271723430-d600366f032f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8b2Zmcm9hZHxlbnwwfHwwfHw%3D&w=1000&q=80"
                title="Your Journey Your Story"
                text="Choose Your Favourite Destination"
                url="/"
                buttonText="Travel Plan"
                btnClass="show"
            />
            <Destination />

            <Trip />
            <Footer />
        </>
    )
}

export default Home;