import React from 'react'
import './Card.css'

function Card(props) {

    let imgSrc = props.imgSrc;
    let title = props.title;
    let desc = props.desc;
    let price = props.price;

    return (
        <div className="card">
            <img
                src={imgSrc}
                alt="Product Image"
                className="card-image"
            />
            <div className="card-content">
                <h2 className="card-title">{title}</h2>
                <p className="card-description">
                    {desc}
                </p>
                <p className="card-price">{price}</p>
            </div>
        </div>
    )
}

export default Card