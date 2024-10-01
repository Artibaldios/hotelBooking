import React, { useState } from 'react';
import Filter from '../../components/Filter/Filter';
import HotelCard from '../../components/HotelCard/HotelCard';
import { useHotelContext } from '../../context/HotelContext';
import Pagination from '../../components/Pagination/Pagination';
import "./Hotels.css";

const Hotels: React.FC = () => {
    const [priceRange, setPriceRange] = useState<number[]>([0, 500]);
    const [location, setLocation] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

    const { hotels } = useHotelContext();

    const filteredHotels = hotels.filter(hotel =>
        hotel.price >= priceRange[0] &&
        hotel.price <= priceRange[1] &&
        (location === '' || hotel.location.toLowerCase().includes(location.toLowerCase()))
    );
    const cardsPerPage = 8;
    const totalPages = Math.ceil(filteredHotels.length / cardsPerPage);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const startIndex = (currentPage - 1) * cardsPerPage;
    const currentHotelCards = filteredHotels.slice(startIndex, startIndex + cardsPerPage);
    return (
        <section className="hotels-section">
            <Filter onFilterChange={(priceRange, location) => {
                if (priceRange) setPriceRange(priceRange);
                if (location) setLocation(location);
            }} />

            <div className="hotels-cards-wrapper">
                {currentHotelCards.map(hotel => (
                    <HotelCard {...hotel} key={hotel.id} />
                ))}
            </div>
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />
        </section>
    );
};

export default Hotels;