import "./ServiceComponentsStyles.css"


function ServiceData(props) {
    return (
        <div className="service-card">
            <div className="service-image">
                <img src={props.image} alt="/" />
            </div>

            <h4>{props.heading} </h4>
            <p>{props.text}</p>
            <button>More</button>
        </div>
    );
}

export default ServiceData;