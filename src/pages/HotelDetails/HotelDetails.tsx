
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useHotelContext } from '../../context/HotelContext';
import "./HotelDetails.css";

const BookingForm = ({ hotelName }: { hotelName?: string }) => {
    const [checkInDate, setCheckInDate] = useState("");
    const [checkOutDate, setCheckOutDate] = useState("");

    const handleBookingSubmit = (e: any) => {
        e.preventDefault();
        alert(`Booking confirmed for ${hotelName} from ${checkInDate} to ${checkOutDate}`);
    };

    return (
        <>
            <h2>Book Your Stay at {hotelName}</h2>
            <form onSubmit={handleBookingSubmit}>
                <label>Name:</label>
                <input type="text" value={checkInDate} onChange={(e) => setCheckInDate(e.target.value)} required />
                <label>Check-in Date:</label>
                <input type="date" value={checkInDate} onChange={(e) => setCheckInDate(e.target.value)} required />
                <label>Check-out Date:</label>
                <input type="date" value={checkOutDate} onChange={(e) => setCheckOutDate(e.target.value)} required />
                <button type="submit">Book Now</button>
            </form>
        </>
    );
};

const HotelDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const { hotels } = useHotelContext()

    const hotel = hotels.find(h => h.id === id);

    const renderStars = (rating: number) => {
        return [...Array(5)].map((_, index) => (
            <span key={index} className={index < rating ? 'star filled' : 'star'}>
                ★
            </span>
        ));
    };
    return (
        <>
            {hotel ? (
                <>
                    <section className="hotel-details">
                        <div className="details-wrapper">
                            <div className="hotel-box">
                                <div className="tags">
                                    {hotel.luxuryTag && <span className="tag luxury">Luxury</span>}
                                    {hotel.vipTag && <span className="tag vip">VIP</span>}
                                </div>
                                <div className="stars">{renderStars(hotel.starRating)}</div>
                                <h3 className="hotel-name">{hotel.name}</h3>
                                <div className="reviews">
                                    <span className="review-count">{hotel.reviewCount} Reviews</span>
                                    <div className="average-rating">
                                        {hotel.averageRating}
                                    </div>
                                    Average Rating
                                </div>
                                <p className="hotel-desc">
                                    Price per night: ${hotel.price}
                                </p>
                                <p className="hotel-desc">
                                    {hotel.description}
                                </p>
                                <p className="hotel-desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore magnam cumque quaerat velit. Ipsam aliquid blanditiis molestiae,
                                    eum vel voluptatibus cumque delectus quisquam doloribus suscipit quia? Eum beatae sit provident. Lorem, ipsum dolor sit amet consectetur
                                    adipisicing elit. Et quibusdam, facere, accusantium tenetur reprehenderit laborum magni ad recusandae animi distinctio asperiores totam autem
                                    esse dolorum cupiditate temporibus molestiae sunt corporis.
                                </p>
                            </div>
                            <div className="hotel-box">
                                <img className="hotel-img" src={hotel.imageUrl} alt={hotel.name}></img>
                            </div>
                        </div>
                        <BookingForm hotelName={hotel.name} />
                    </section>
                </>
            ) : (
                <h2>Hotel not found</h2>
            )}
        </>
    );
};

export default HotelDetails;