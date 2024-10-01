import React, { createContext, useContext, useState } from 'react';
import { Hotel } from '../interfaces/interface';

interface HotelContextType {
    hotels: Hotel[];
    addHotel: (hotel: Hotel) => void;
}

const hotelsData: Hotel[] = [
    {
        id: "1",
        name: "Hotel Sunshine",
        imageUrl: require("../images/hotel1.jpg"),
        location: "Sri Lanka",
        price: 250,
        description: "A luxurious resort with stunning ocean views and top-notch amenities.",
        luxuryTag: true,
        vipTag: false,
        starRating: 5,
        reviewCount: 120,
        averageRating: 4.8,
    },
    {
        id: "2",
        name: "Ocean View Resort",
        imageUrl: require("../images/hotel2.jpg"),
        location: "Sri Lanka",
        price: 320,
        description: "A cozy lodge nestled near the beach, perfect for diving enthusiasts.",
        luxuryTag: true,
        vipTag: true,
        starRating: 5,
        reviewCount: 95,
        averageRating: 4.9,
    },
    {
        id: "3",
        name: "Mountain Retreat",
        imageUrl: require("../images/hotel3.jpg"),
        location: "Sri Lanka",
        price: 200,
        description: "Modern hotel located in the heart of Manhattan, close to all attractions.",
        luxuryTag: false,
        vipTag: false,
        starRating: 4,
        reviewCount: 200,
        averageRating: 4.2,
    },
    {
        id: "4",
        name: "City Center Inn",
        imageUrl: require("../images/hotel4.jpg"),
        location: "Sri Lanka",
        price: 180,
        description: "Relax in this tranquil inn surrounded by beautiful desert landscapes.",
        luxuryTag: false,
        vipTag: false,
        starRating: 3,
        reviewCount: 150,
        averageRating: 3.8,
    },
    {
        id: "5",
        name: "Luxury Palace Hotel",
        imageUrl: require("../images/hotel5.jpg"),
        location: "Sri Lanka",
        price: 400,
        description: "Stay in a beautifully restored castle with rich history and stunning architecture.",
        luxuryTag: true,
        vipTag: true,
        starRating: 5,
        reviewCount: 80,
        averageRating: 4.7,
    },
    {
        id: "6",
        name: "Ocean View Resort",
        imageUrl: require("../images/hotel6.jpg"),
        location: "Ejypt",
        price: 600,
        description: "An exclusive resort offering overwater bungalows and breathtaking sunsets.",
        luxuryTag: true,
        vipTag: true,
        starRating: 5,
        reviewCount: 60,
        averageRating: 4.9,
    },
    {
        id: "7",
        name: "Tropical Paradise Resort",
        imageUrl: require("../images/hotel7.jpg"),
        location: "Ejypt",
        price: 220,
        description: "Stylish suites in downtown LA, perfect for business and leisure travelers.",
        luxuryTag: false,
        vipTag: false,
        starRating: 4,
        reviewCount: 110,
        averageRating: 4.1,
    },
    {
        id: "8",
        name: "Seaside Cottage",
        imageUrl: require("../images/hotel8.jpg"),
        location: "Ejypt",
        price: 150,
        description: "Charming cottage just steps from the beach, ideal for family vacations.",
        luxuryTag: false,
        vipTag: false,
        starRating: 3,
        reviewCount: 90,
        averageRating: 3.9,
    },
    {
        id: "9",
        name: "Rustic Cabin Retreat",
        imageUrl: require("../images/hotel9.jpg"),
        location: "Ejypt",
        price: 230,
        description: "A rustic cabin surrounded by nature, perfect for a peaceful getaway.",
        luxuryTag: false,
        vipTag: false,
        starRating: 4,
        reviewCount: 70,
        averageRating: 4.3,
    },
    {
        id: "10",
        name: "Luxury Spa Hotel",
        imageUrl: require("../images/hotel10.jpg"),
        location: "Ejypt",
        price: 350,
        description: "Indulge in luxury with a full-service spa and world-class dining options.",
        luxuryTag: true,
        vipTag: true,
        starRating: 5,
        reviewCount: 150,
        averageRating: 4.6,
    },
    {
        id: "11",
        name: "Family Fun Resort",
        imageUrl: require("../images/hotel11.jpg"),
        location: "Australia",
        price: 190,
        description: "A charming inn surrounded by vineyards and rolling hills.",
        luxuryTag: false,
        vipTag: false,
        starRating: 4,
        reviewCount: 80,
        averageRating: 4.0,
    },
    {
        id: "12",
        name: "Bagams Hotel",
        imageUrl: require("../images/hotel12.jpg"),
        location: "Australia",
        price: 210,
        description: "Perfect for families with kids, featuring water parks and entertainment options.",
        luxuryTag: false,
        vipTag: false,
        starRating: 3,
        reviewCount: 200,
        averageRating: 3.7,
    },
    {
        id: "13",
        name: "Eco-Friendly Retreat",
        imageUrl: require("../images/hotel13.jpg"),
        location: "Australia",
        price: 280,
        description: "Stylish hotel with an art deco design and vibrant nightlife nearby.",
        luxuryTag: false,
        vipTag: false,
        starRating: 4,
        reviewCount: 130,
        averageRating: 4.2,
    },
    {
        id: "14",
        name: "Skyline View Hotel",
        imageUrl: require("../images/hotel14.jpg"),
        location: "Australia",
        price: 300,
        description: "Sustainable resort focused on eco-tourism and nature experiences.",
        luxuryTag: true,
        vipTag: false,
        starRating: 5,
        reviewCount: 50,
        averageRating: 4.8,
    },
    {
        id: "15",
        name: "Luxury Palace Hotel",
        imageUrl: require("../images/hotel15.jpg"),
        location: "Australia",
        price: 275,
        description: 'Enjoy breathtaking views of the Seattle skyline from your room.',
        luxuryTag: true,
        vipTag: true,
        starRating: 5,
        reviewCount: 100,
        averageRating: 4.7
    },
    {
        id: "16",
        name: 'Charming Bed & Breakfast',
        imageUrl: require("../images/hotel16.jpg"),
        location: 'Savannah , GA',
        price: 160,
        description: 'A cozy B&B with southern hospitality and delicious breakfast.',
        luxuryTag: true,
        vipTag: true,
        starRating: 5,
        reviewCount: 123,
        averageRating: 4.7
    },
    {
        id: "17",
        name: 'Business Class Hotel',
        imageUrl: require("../images/hotel17.jpg"),
        location: 'Miama',
        price: 240,
        description: 'Ideal for business travelers with meeting rooms and high-speed internet.',
        luxuryTag: true,
        vipTag: true,
        starRating: 5,
        reviewCount: 142,
        averageRating: 4.7
    },
    {
        id: "18",
        name: 'Beachfront Paradise',
        imageUrl: require("../images/hotel18.jpg"),
        location: 'Miama',
        price: 500,
        description: 'A premier resort offering skiing in winter and hiking in summer.',
        luxuryTag: true,
        vipTag: false,
        starRating: 4,
        reviewCount: 142,
        averageRating: 4.3
    },
    {
        id: "19",
        name: 'Beachfront Paradise',
        imageUrl: require("../images/hotel19.jpg"),
        location: 'Bali',
        price: 550,
        description: 'Experience paradise with direct beach access and stunning ocean views.',
        luxuryTag: true,
        vipTag: false,
        starRating: 4,
        reviewCount: 142,
        averageRating: 4.4
    },
    {
        id: "20",
        name: 'Cultural Heritage Hotel',
        imageUrl: require("../images/hotel20.jpg"),
        location: 'Bali',
        price: 300,
        description: 'Immerse yourself in Japanese culture at this traditional ryokan.',
        luxuryTag: true,
        vipTag: false,
        starRating: 4,
        reviewCount: 155,
        averageRating: 4.5
    }
];

const HotelContext = createContext<HotelContextType | undefined>(undefined);

export const HotelProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [hotels, setHotels] = useState<Hotel[]>(hotelsData);

    const addHotel = (hotel: Hotel) => {
        setHotels((prevHotels) => [...prevHotels, hotel]);
    };

    return (
        <HotelContext.Provider value={{ hotels, addHotel }}>
            {children}
        </HotelContext.Provider>
    );
};

export const useHotelContext = () => {
    const context = useContext(HotelContext);
    if (!context) {
        throw new Error('useHotelContext must be used within a HotelProvider');
    }
    return context;
};