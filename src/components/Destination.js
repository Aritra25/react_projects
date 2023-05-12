
import DestinationData from "./DestinationData"
import "./DestinationStyles.css"
import Taal1 from "../assets/Taal1.jpg"
import Taal2 from "../assets/Taal2.jpg"
import kat1 from "../assets/katao1.jpg"
import kat2 from "../assets/katao2.jpg"
const Destination = () => {
    return (
        <div className="destination">
            <h1>Popular Destination</h1>
            <p>Tours give you the oppurtunity within a time frame...</p>
            <DestinationData className="first-des"
                heading="Taal Volcano, Batangas"
                text="One of the more devastating eruptions of Taal took place in January 1911. During the night of the 27th of that month, the seismographs at the Manila Observatory commenced to register frequent disturbances, which were at first of insignificant importance, but increased rapidly in frequency and intensity. The total recorded shocks on that day numbered 26. During the 28th there were recorded 217 distinct shocks, of which 135 were microseismic and 10 quite severe. The frequent and increasingly strong earthquakes caused much alarm in Manila, but the observatory staff was soon able to locate their epicenter in the region of Taal Volcano and assured the public that Manila was in no danger, as Taal was some 60 km (37 mi) away, too far to directly damage the city."
                img1={Taal1}
                img2={Taal2}
            />
            <DestinationData
                className="first-des-reverse"
                heading="Mt. Katao,Lachung,Sikkim"
                text="
                Mount Katao is quite impressive place to visit and set your spirit free from hustle bustle of urban area and make you enter into the natural beauty of the waterfall and the pleasant weather. The overwhelming view of snowy area where you can lay down to enjoy touch and feel of the white snow. Snow at the Mount Katao with the greenery eludes the picturesque view and the moment to click is something you cannot spare yourself from for the real backdrop. Mount Katao is considered an offbeat destination in North Sikkim Tour.
                
                Mount Katao is situated in the Northern Part of Sikkim which is 144 km away from the capital city Gangtok. Mount katao height 15000 ft. Onlookers love to explore the beauty of Mount Katao. Entering into this area required the permission from Military. There are numerous adventurous activities that will keep your holiday worthwhile spent with snowboarding, skiing, snow tubing and many more.
                
                The waterfall sound gives good vibes and keeps the surrounding full of sound. This is nice place to visit who likes mountains and flowery place and few more spellbound views that makes your heart smile."
                img1={kat1}
                img2={kat2}
            />
        </div>
    )
}

export default Destination;