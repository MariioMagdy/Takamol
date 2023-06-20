import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import gallonGroup from '../../../assets/images/Group 3198.svg';
import kerosene from '../../../assets/images/Layer_x0020_1-2.svg';
import solar from '../../../assets/images/Layer_x0020_1-1.svg';
import gas from '../../../assets/images/Layer_x0020_1-5.svg';
import Section from '../sharedComponents/section/Section';

function Petroleum() {
    return (
        <Section className='grid-span-2 currency links petroleum'>
            <div className='grid-span-2'>
                <div className='row'>
                    <div className='col-md-12 header px-4 justify-content-start'>
                        <h3 className='px-2 mb-0'>أسعار البترول</h3>
                    </div>
                    <div className='row subtitle m-0 py-2 px-4 align-items-center'>
                        <div className='col-md-6'>منتاجات</div>
                        <div className='col-md-6 text-start'>
                            <img src={gallonGroup} alt='' />
                        </div>
                    </div>

                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        slidesPerView={1}
                        slidesPerGroup={1}
                        navigation
                        // onSwiper={(swiper) => console.log(swiper)}
                        // onSlideChange={() => console.log('slide change')}
                        className='swiper-container p-0'
                    >
                        <div>
                            <SwiperSlide className='swiper-item'>
                                <table>
                                    <tbody>
                                        <tr>
                                            <th className='px-5'>النوع</th>
                                            <th className='px-5'>السعر</th>
                                            <th className='px-5'>الوحدة</th>
                                            <th className='px-5'>التاريخ</th>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img
                                                    className='px-4'
                                                    src={kerosene}
                                                ></img>
                                                <span>كيروسين</span>
                                            </td>
                                            <td>٧,٢٥</td>
                                            <td>جنية/لتر</td>
                                            <td>الثلاثاء,١ديسمبر٢٠٢١</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img
                                                    className='px-4'
                                                    src={solar}
                                                ></img>
                                                <span>سولار</span>
                                            </td>
                                            <td>٧,٢٥</td>
                                            <td>جنية/لتر</td>
                                            <td>الثلاثاء,١ديسمبر٢٠٢١</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img
                                                    className='px-4'
                                                    src={gas}
                                                ></img>
                                                <span>بوتجاز</span>
                                            </td>
                                            <td>٧٠</td>
                                            <td>جنية/أسطوانة</td>
                                            <td>الثلاثاء,١ديسمبر٢٠٢١</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </SwiperSlide>
                            <SwiperSlide className='swiper-item'>
                                <table>
                                    <tbody>
                                        <tr>
                                            <th>النوع</th>
                                            <th>السعر</th>
                                            <th>الوحدة</th>
                                            <th>التاريخ</th>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img
                                                    className='px-4'
                                                    src={kerosene}
                                                ></img>
                                                <span>كيروسين</span>
                                            </td>
                                            <td>٧,٢٥</td>
                                            <td>جنية/لتر</td>
                                            <td>الثلاثاء,١ديسمبر٢٠٢١</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img
                                                    className='px-4'
                                                    src={solar}
                                                ></img>
                                                <span>سولار</span>
                                            </td>
                                            <td>٧,٢٥</td>
                                            <td>جنية/لتر</td>
                                            <td>الثلاثاء,١ديسمبر٢٠٢١</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img
                                                    className='px-4'
                                                    src={gas}
                                                ></img>
                                                <span>بوتجاز</span>
                                            </td>
                                            <td>٧٠</td>
                                            <td>جنية/أسطوانة</td>
                                            <td>الثلاثاء,١ديسمبر٢٠٢١</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </SwiperSlide>
                        </div>
                    </Swiper>
                </div>
            </div>
        </Section>
    );
}

export default Petroleum;
