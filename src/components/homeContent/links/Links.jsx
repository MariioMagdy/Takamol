import React from 'react';
import eventImgOne from '../../../assets/images/Group 3168.png';
import eventImgTwo from '../../../assets/images/Group 3171.png';
import eventImgThree from '../../../assets/images/Group 3170.png';
import eventImgFour from '../../../assets/images/Group 3168.png';
import Header from '../sharedComponents/header/Header';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import Section from '../sharedComponents/section/Section';

function Links() {
    return (
        <Section className='grid-span-2 links'>
            <Header title='روابط ذات صلة' seeMore='كل الروابط'></Header>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                slidesPerView={4}
                navigation
                // onSwiper={(swiper) => console.log(swiper)}
                // onSlideChange={() => console.log('slide change')}
                className='swiper-container'
            >
                <div>
                    <SwiperSlide className='swiper-item'>
                        <img src={eventImgOne} alt='' className='img-fluid' />
                    </SwiperSlide>
                    <SwiperSlide className='swiper-item'>
                        <img src={eventImgTwo} alt='' className='img-fluid' />
                    </SwiperSlide>
                    <SwiperSlide className='swiper-item'>
                        <img src={eventImgThree} alt='' className='img-fluid' />
                    </SwiperSlide>
                    <SwiperSlide className='swiper-item'>
                        <img src={eventImgFour} alt='' className='img-fluid' />
                    </SwiperSlide>
                    <SwiperSlide className='swiper-item'>
                        <img src={eventImgOne} alt='' className='img-fluid' />
                    </SwiperSlide>
                    <SwiperSlide className='swiper-item'>
                        <img src={eventImgTwo} alt='' className='img-fluid' />
                    </SwiperSlide>
                    <SwiperSlide className='swiper-item'>
                        <img src={eventImgThree} alt='' className='img-fluid' />
                    </SwiperSlide>
                    <SwiperSlide className='swiper-item'>
                        <img src={eventImgFour} alt='' className='img-fluid' />
                    </SwiperSlide>
                </div>
            </Swiper>
        </Section>
    );
}

export default Links;
