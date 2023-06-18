import React from 'react';

function Weather() {
    return (
        <section className='weather'>
            <div className='weather-overlay pt-3 h-100'>
                <div className='row align-items-center'>
                    <div className='col-md-6 p-0'>
                        <button className='celsius-btn'>Celsius</button>
                    </div>
                    <div className='col-md-6'>
                        <button className='fahrenheit-btn'>Fahrenheit</button>
                    </div>
                </div>
                <div className='row align-items-center'>
                    <div className='col-md-6'>
                        <div className='d-flex flex-column align-items-center gap-3 mt-3'>
                            <span className='icon-sun'></span>
                            <span>الثلاثاء</span>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='d-flex flex-column align-items-center text-white'>
                            <span className='degree'>٢٣</span>
                            <div className='d-flex justify-content-around w-100'>
                                <span className='high-d position-relative'>
                                    ٢٧
                                </span>
                                <span className='low-d position-relative'>
                                    ٢٣
                                </span>
                            </div>
                            <span>
                                الرطوبة ٢٠ <span>&#1642;</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Weather;
