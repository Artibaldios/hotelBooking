import React from 'react';
import MainSlider from '../../components/MainSlider/MainSlider';
import ContactForm from '../../components/ContactForm/ContactForm';
import Intro from '../../components/Intro/Intro';
import HotelSection from '../../components/HotelSection/HotelSection';
import { HotelSections } from "../../interfaces/interface";
import { useHotelContext } from '../../context/HotelContext';

const Home: React.FC = () => {
    const { hotels } = useHotelContext();
    const SriLankaHotels = hotels.filter(hotel => hotel.location === "Sri Lanka");
    const EjyptHotels = hotels.filter(hotel => hotel.location === "Ejypt");
    const AustraliaHotels = hotels.filter(hotel => hotel.location === "Australia");

    const HotelSectionsdata: HotelSections[] = [
        {
            country: "Sri Lanka",
            dates: "2024-09-21 - 2024-09-29",
            hotels: SriLankaHotels
        },
        {
            country: "Ejypt",
            dates: "2024-09-23 - 2024-09-30",
            hotels: EjyptHotels
        },
        {
            country: "Australia",
            dates: "2024-08-19 - 2024-09-03",
            hotels: AustraliaHotels
        },
    ]
    return (
        <main>
            <Intro />
            <MainSlider />
            {HotelSectionsdata.map(section => (
                <HotelSection key={section.country} {...section} />
            ))}
            <ContactForm />
        </main>
    );
};

export default Home;