import React from 'react';
import { Link } from 'react-router-dom';
import {Hotel} from "../../interfaces/interface";
import "./HotelCard.css";

const HotelCard: React.FC<Hotel> = ({id, imageUrl, name, location, price}) => {
    return (
        <>
            <div className="hotel-card">
                <div className="hotel-box">
                    <h3 className="hotel-name">{name}</h3>
                    <p className="hotel-location">{location}</p>
                    <p className="hotel-price">${price} per night</p>
                    <Link to={`/hotels/${id}`}>
                        <button className="view-details-button">View Details</button>
                    </Link>
                </div>
                <div className="hotel-img">
                    <img src={imageUrl} alt={name} />
                </div>
             </div>
        </>
    );
};

export default HotelCard;