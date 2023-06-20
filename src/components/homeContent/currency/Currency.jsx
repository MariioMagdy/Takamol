import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import Section from '../sharedComponents/section/Section';

const Currency = () => {
    return (
        <Section className='grid-span-2 currency links'>
            <div className='grid-span-2'>
                <div className='row'>
                    <div className='col-md-6 header justify-content-start'>
                        <h3 className='mb-0'>أسعار العملات</h3>
                    </div>
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        slidesPerView={3}
                        slidesPerGroup={3}
                        navigation
                        // onSwiper={(swiper) => console.log(swiper)}
                        // onSlideChange={() => console.log('slide change')}
                        className='swiper-container p-0'
                    >
                        <div>
                            <SwiperSlide className='swiper-item d-flex flex-column align-items-center justify-content-center'>
                                <h2>دولار أمريكي</h2>
                                <span>USD Dollar</span>
                            </SwiperSlide>
                            <SwiperSlide className='swiper-item d-flex flex-column align-items-center justify-content-center'>
                                <h2>شراء</h2>
                                <div>
                                    <span>١٩.١٢</span>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='swiper-item d-flex flex-column align-items-center justify-content-center'>
                                <h2>بيع</h2>
                                <div>
                                    <span>١٩.١٨</span>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='swiper-item d-flex flex-column align-items-center justify-content-center'>
                                <h2>دولار أمريكي</h2>
                                <span>USD Dollar</span>
                            </SwiperSlide>
                            <SwiperSlide className='swiper-item d-flex flex-column align-items-center justify-content-center'>
                                <h2>شراء</h2>
                                <div>
                                    <span>١٩.١٢</span>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='swiper-item d-flex flex-column align-items-center justify-content-center'>
                                <h2>بيع</h2>
                                <div>
                                    <span>١٩.١٨</span>
                                </div>
                            </SwiperSlide>
                        </div>
                    </Swiper>
                </div>
            </div>
        </Section>
    );
};

export default Currency;
