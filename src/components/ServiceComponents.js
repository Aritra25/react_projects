import "./ServiceComponentsStyles.css"
// import { Component } from "react"
import ServiceData from "./ServiceData";
import s1 from "../assets/s1.jpg";
import s2 from "../assets/s2.jpeg";
import s3 from "../assets/s3.jpg";

function ServiceComponents() {
    return (
        <div className="serviceComp">
            <h1>Trippy Services</h1>
            <p>You can discover unique destinations using Google Maps.</p>

            <div className="servicecard">
                <ServiceData
                    image={s1}
                    heading="Summer Vacations"
                    text="Plan your summer vacations. Plan now, Hurry up..."
                />
                <ServiceData
                    image={s2}
                    heading="Active Tours"
                    text="Thes tours are active now...Plan it hurry up!"
                />
                <ServiceData
                    image={s3}
                    heading="Flight Research"
                    text="Know about your flights and know more about the fare, timings etc."
                />

            </div>
        </div>
    );
}
export default ServiceComponents