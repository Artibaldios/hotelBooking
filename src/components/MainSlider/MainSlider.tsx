import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs, Autoplay } from 'swiper/modules';
import { useHotelContext } from '../../context/HotelContext';
import LoadableImage from "../LoadableImage/LoadableImage";
import 'swiper/swiper-bundle.css';
import "./MainSlider.css";

const HotelSlider: React.FC = () => {
    const { hotels } = useHotelContext();
    const mainHotels = hotels.slice(14, 20);
    return (
        <>
            <Swiper
                loop={true}
                spaceBetween={10}
                navigation={true}
                modules={[FreeMode, Navigation, Thumbs, Autoplay]}
                speed={1500}
                // autoplay={{
                //     delay: 2500,
                //     disableOnInteraction: false,
                // }}
                className="main-slider"
            >
                {mainHotels.map(hotel => (
                    <SwiperSlide key={hotel.id}>
                        <LoadableImage src={hotel.imageUrl} alt={hotel.name} height={600}/>
                        <h3 className='hotel-name'>{hotel.name}</h3>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>

    );
};

export default HotelSlider;