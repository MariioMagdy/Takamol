import React from 'react';
import eventImgOne from '../../../assets/images/Group 3168.png';
import eventImgTwo from '../../../assets/images/Group 3171.png';
import eventImgThree from '../../../assets/images/Group 3170.png';
import eventImgFour from '../../../assets/images/Group 3168.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Links() {
    return (
        <section className='grid-span-2 links'>
            <div className='row m-0'>
                <div className='col-md-6 header justify-content-start'>
                    <h3 className='mb-0'>روابط ذات صلة</h3>
                </div>
                <div className='col-md-6 text-start header p-4'>
                    <a
                        href=''
                        className='d-flex align-items-center justify-content-end'
                    >
                        كل الروابط
                        <span className='icon-Arrow---Left'></span>
                    </a>
                </div>
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
                            <img
                                src={eventImgOne}
                                alt=''
                                className='img-fluid'
                            />
                        </SwiperSlide>
                        <SwiperSlide className='swiper-item'>
                            <img
                                src={eventImgTwo}
                                alt=''
                                className='img-fluid'
                            />
                        </SwiperSlide>
                        <SwiperSlide className='swiper-item'>
                            <img
                                src={eventImgThree}
                                alt=''
                                className='img-fluid'
                            />
                        </SwiperSlide>
                        <SwiperSlide className='swiper-item'>
                            <img
                                src={eventImgFour}
                                alt=''
                                className='img-fluid'
                            />
                        </SwiperSlide>
                        <SwiperSlide className='swiper-item'>
                            <img
                                src={eventImgOne}
                                alt=''
                                className='img-fluid'
                            />
                        </SwiperSlide>
                        <SwiperSlide className='swiper-item'>
                            <img
                                src={eventImgTwo}
                                alt=''
                                className='img-fluid'
                            />
                        </SwiperSlide>
                        <SwiperSlide className='swiper-item'>
                            <img
                                src={eventImgThree}
                                alt=''
                                className='img-fluid'
                            />
                        </SwiperSlide>
                        <SwiperSlide className='swiper-item'>
                            <img
                                src={eventImgFour}
                                alt=''
                                className='img-fluid'
                            />
                        </SwiperSlide>
                    </div>
                </Swiper>
            </div>
        </section>
    );
}

export default Links;
