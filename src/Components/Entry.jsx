export default function Entry(props) {
    return (
        <div className="entry">
            <img className="entry-image" src={props.img.src} alt={props.img.alt} />
            <div className="entry-details">
                <span>
                    <img className="marker-icon" src="marker.png" alt="Marker Icon"/>
                    <span className="entry-country">{props.country.toUpperCase()}</span>
                    <a href={props.googleMapsLink}>View on Google Maps</a>
                </span>
                <h1 className="entry-name">{props.title}</h1>
                <span className="entry-date">{props.dates}</span>
                <p className="entry-detail">{props.text}</p>
            </div>
        </div>
    )
}