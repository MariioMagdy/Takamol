import React, { useEffect } from 'react';
import { useState } from 'react';

function Weather() {
    const [selectedOption, setSelectedOption] = useState('Celsius');
    const [weatherData, setWeatherData] = useState('');
    const [currentDay, setCurrentDay] = useState('');
    const apiKey = '4e04d678419f45c4854192305231906';
    const ApiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=Egypt&lang=ar&aqi=yes`;

    useEffect(() => {
        const egyptWeather = async () => {
            const res = await fetch(ApiUrl);
            const data = await res.json();
            // const { current } = data;
            setWeatherData(data);
            console.log(data);
        };
        egyptWeather();
    }, []);
    useEffect(() => {
        const options = {
            weekday: 'long',
            calendar: 'gregory',
            numberingSystem: 'arab',
        };
        const date = new Date();
        const dayName = date.toLocaleDateString('ar', options).split('،')[0];
        setCurrentDay(dayName);
    }, []);

    return (
        <section className='weather'>
            <div className='weather-overlay pt-3 h-100'>
                <div className='row align-items-center'>
                    <div
                        className='btn-group'
                        role='group'
                        aria-label='Basic radio toggle button group'
                    >
                        <input
                            type='radio'
                            className='btn-check'
                            name='btnradio'
                            id='btnradio1'
                            autoComplete='off'
                            value='Fahrenheit'
                            data-check='f'
                            checked={selectedOption === 'Fahrenheit'}
                            onChange={() => {
                                setSelectedOption('Fahrenheit');
                            }}
                        />
                        <label
                            className='btn btn-outline-primary'
                            htmlFor='btnradio1'
                        >
                            Fahrenheit
                        </label>

                        <input
                            type='radio'
                            className='btn-check'
                            name='btnradio'
                            id='btnradio2'
                            autoComplete='off'
                            value='Celsius'
                            data-check='c'
                            checked={selectedOption === 'Celsius'}
                            onChange={() => {
                                setSelectedOption('Celsius');
                            }}
                        />
                        <label
                            className='btn btn-outline-primary'
                            htmlFor='btnradio2'
                        >
                            Celsius
                        </label>
                    </div>
                </div>
                <div className='row align-items-center'>
                    <div className='col-md-6'>
                        <div className='d-flex flex-column align-items-center gap-3 mt-3'>
                            <span className='icon-sun'></span>
                            <span>{currentDay}</span>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='d-flex flex-column align-items-center text-white'>
                            <span className='degree'>
                                {selectedOption === 'Celsius' && <span>C</span>}
                                {selectedOption === 'Fahrenheit' && (
                                    <span>F</span>
                                )}
                                {selectedOption === 'Celsius'
                                    ? weatherData.current?.temp_c
                                    : weatherData.current?.temp_f}
                            </span>
                            <div>
                                <span className='weatherData'>
                                    <span>{weatherData.location?.country}</span>
                                    <span>
                                        {weatherData.location?.localtime}
                                    </span>
                                </span>
                            </div>
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
