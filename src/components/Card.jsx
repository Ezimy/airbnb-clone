import React from "react"
import star from "/images/star.png"

export default function Card(props) {
    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img className="card-photo" src={`/images/${props.item.coverImg}`} alt={props.item.img}/>
            <div className="card-stats">
                <img src={star} alt="star-icon"/>
                <span>{props.item.stats.rating}</span>
                <span>({props.item.stats.reviewCount}) • </span>
                <span>{props.item.location}</span>
            </div>
            <h2>{props.item.title}</h2>
            <p><span className="bold">From ${props.item.price}</span>/person</p>
        </div>
    )
}