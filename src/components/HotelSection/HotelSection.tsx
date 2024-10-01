import React from 'react';
import SmallSlider from "../SmallSlider/SmallSlider";
import { HotelSections } from "../../interfaces/interface";
import "./HotelSection.css";

const HotelSection: React.FC<HotelSections> = (props: HotelSections) => {
    return (
        <section className="hotel-section">
            <div className='title-box'>
                <span>Welcome to {props.country}</span>
                <span>Explore the best hotels for the next days: {props.dates}</span>
            </div>
            <SmallSlider {...props} />
        </section>
    );
};

export default HotelSection;