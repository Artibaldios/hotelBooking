import React, { useRef } from 'react';
import { HotelSections } from "../../interfaces/interface";
import { Swiper, SwiperSlide } from 'swiper/react';
import { type Swiper as SwiperRef } from 'swiper';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import HotelSlide from '../HotelSlide/HotelSlide';
import 'swiper/swiper-bundle.css';
import "./SmallSlider.css";


const HotelSlider: React.FC<HotelSections> = (props: HotelSections) => {
    const swiperRef = useRef<SwiperRef>();
    return (
        <>
            <Swiper
                onSwiper={(swiper: any) => {
                    swiperRef.current = swiper
                }}
                loop={true}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                navigation={true}
                modules={[FreeMode, Navigation, Thumbs]}
                breakpoints={{
                    1200: {
                        slidesPerView: 4
                    },
                    992: {
                        slidesPerView: 3
                    },
                    768: {
                        slidesPerView: 2
                    },
                    556: {
                        slidesPerView: 2
                    },
                    200: {
                        slidesPerView: 1
                    }
                }}
                className="small-slider"
            >
                {props.hotels.map(hotel => (
                    <SwiperSlide key={hotel.id}>
                        <HotelSlide {...hotel} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>

    );
};

export default HotelSlider;