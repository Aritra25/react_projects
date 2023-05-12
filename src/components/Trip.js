import "./TripStyles.css"
import TripData from "./TripData";
import Trip1 from "../assets/t1.jpg";
import Trip2 from "../assets/t2.jpg";
import Trip3 from "../assets/t3.jpg";

function Trip() {
    return (
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You can discover unique destinations using Google Maps.</p>

            <div className="tripcard">
                <TripData image={Trip1}
                    heading="Visit in Gurudongmar Lake"
                    text="Gurudongmar Lake is one of the highest lakes in the world and in India, located at an altitude of 5,425 m (17,800 ft), in Sikkim. It is considered sacred by Buddhists, Sikhs and Hindus. The lake is named after Guru Padmasambhava—also known as Guru Rinpoche—founder of Tibetan"
                />
                <TripData image={Trip2}
                    heading="Visit in Ladakh"
                    text="Ladakh is most famous for breathtaking landscapes, the crystal clear skies, the highest mountain passes, thrilling adventure activities, Buddhist Monasteries and festivals."
                />
                <TripData image={Trip3}
                    heading="Visit in Kalapathaar"
                    text="This place got the name as there are mountains with snowy peaks and black cliffs. Kala Patthar is normally uninhabitable except for some occasional settlements by Tibetan nomads for grazing their Yaks. The motorable road ends at Kala Patthar at 14,850 ft. And it is a dead-end."
                />

            </div>
        </div>
    );
}

export default Trip;