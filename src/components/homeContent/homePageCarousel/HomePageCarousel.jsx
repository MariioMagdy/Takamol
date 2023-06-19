import React from 'react';
import myImage from '../../../assets/images/iStock-1246706082.png';

function HomePageCarousel() {
    return (
        <section className='row m-0'>
            <div
                id='carouselExampleControls'
                className='carousel slide col-md-12 p-0'
                data-bs-ride='carousel'
            >
                <div className='carousel-inner'>
                    <div className='carousel-item active overflow-hidden'>
                        <img src={myImage} className='d-block' alt='...' />
                        <div className='overlay'>
                            <div className='overlay-content h-100'>
                                <div className='carousel-date d-flex flex-column justify-content-center align-items-center align-self-center ms-3'>
                                    <span className='carousel-date-number'>
                                        ٣٠
                                    </span>
                                    <span>ديسمبر ٢٠٢١</span>
                                </div>
                                <div className='carousel-data'>
                                    <a className='mb-3' title='أخبار'>
                                        أخبار
                                    </a>
                                    <h2>
                                        وزير البترول يتابع خطط شركات الأنتاج
                                        بمنطقة الصحراء الغربية
                                    </h2>
                                    <p className='mt-3'>
                                        أكد المهندس طارق الملا وزير البترول
                                        والثروة المعدنيةزأن الفترة الحالية تتطلب
                                        المزيد من الجهود والحلول الأبتاكريه
                                        لزيادة الأنتاج من الثروةالبترولية في ظل
                                        الأسعار العالمية الحالية
                                    </p>
                                    <div>
                                        <a href=''>معرفة المزيد</a>
                                        <a
                                            href=''
                                            className='m-3'
                                            title='كل الأخبار'
                                        >
                                            كل الأخبار
                                            <span className='icon-Arrow---Left'></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='carousel-item overflow-hidden'>
                        <img src={myImage} className='d-block' alt='...' />
                        <div className='overlay'></div>
                    </div>
                    <div className='carousel-item overflow-hidden'>
                        <img src={myImage} className='d-block' alt='...' />
                        <div className='overlay'></div>
                    </div>
                </div>
                <div className='carousel-btn'>
                    <div>
                        <button
                            className='carousel-control-prev'
                            type='button'
                            data-bs-target='#carouselExampleControls'
                            data-bs-slide='prev'
                        >
                            <span
                                className='carousel-control-prev-icon'
                                aria-hidden='true'
                            ></span>
                            <span className='visually-hidden'>Previous</span>
                        </button>
                    </div>
                    <div>
                        <button
                            className='carousel-control-next'
                            type='button'
                            data-bs-target='#carouselExampleControls'
                            data-bs-slide='next'
                        >
                            <span
                                className='carousel-control-next-icon'
                                aria-hidden='true'
                            ></span>
                            <span className='visually-hidden'>Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomePageCarousel;
