import React from 'react';
import { Link } from 'react-router-dom';
import { Hotel } from "../../interfaces/interface";
import LoadableImage from '../LoadableImage/LoadableImage';
import "./HotelSlide.css";

const HotelSlide: React.FC<Hotel> = ({ id, imageUrl, name }) => {
    return (
        <>
            <Link to={`/hotels/${id}`}>
                <LoadableImage src={imageUrl} alt={name} height={250}/>
                {/* <div className="hotel-slide" style={{ backgroundImage: `url(${imageUrl})` }}> */}
                    <p className="hotel-name">{name}</p>
                {/* </div> */}
            </Link>
        </>
    );
};

export default HotelSlide;