import React, { useEffect, useState } from 'react';
import Header from '../sharedComponents/header/Header';
import Section from '../sharedComponents/section/Section';

function Opinion() {
    const checkLocalStorage = () => {
        return JSON.parse(window.localStorage.getItem('vote') || '');
    };
    const [value, setValue] = useState(checkLocalStorage);
    const [result, setResult] = useState(checkLocalStorage);

    const handleOptionChange = (event) => {
        setValue(event.target.value);
    };

    const handelsub = (event) => {
        event.preventDefault();
        setResult(value);
        window.localStorage.setItem('vote', JSON.stringify(value));
    };
    return (
        <Section className='grid-span-2 opinion'>
            <Header
                title='أستطلاع الرأي'
                seeMore='الأستطلاعات السابقة'
            ></Header>
            <div className='row m-0'>
                <div className='col-md-12 p-0'>
                    <form action='' onSubmit={handelsub}>
                        <label htmlFor='opinion' className='px-5 pt-5 mb-3'>
                            مارأيك في تحديثات الموقع &#x061F;
                        </label>
                        <div className='px-5 pb-5'>
                            <label htmlFor='excellent'>
                                <input
                                    type='radio'
                                    value='ممتاز'
                                    name='opinion'
                                    id='excellent'
                                    checked={value === 'ممتاز'}
                                    onChange={handleOptionChange}
                                />
                                ممتاز
                            </label>
                            <label htmlFor='good'>
                                <input
                                    type='radio'
                                    value='جيد'
                                    name='opinion'
                                    id='good'
                                    checked={value === 'جيد'}
                                    onChange={handleOptionChange}
                                />
                                جيد
                            </label>
                            <label htmlFor='acceptable'>
                                <input
                                    type='radio'
                                    value='مقبول'
                                    name='opinion'
                                    id='acceptable'
                                    checked={value === 'مقبول'}
                                    onChange={handleOptionChange}
                                />
                                مقبول
                            </label>
                            <label htmlFor='bad'>
                                <input
                                    type='radio'
                                    value='سيء'
                                    name='opinion'
                                    id='bad'
                                    checked={value === 'سيء'}
                                    onChange={handleOptionChange}
                                />
                                سيء
                            </label>
                        </div>
                        <div className='py-4 px-5'>
                            <button type='submit' className='btn btn-dark'>
                                تصويت
                            </button>
                            <button
                                disabled
                                type='button'
                                className='btn btn-info'
                            >
                                {result ? result : 'نتيجه التصويت'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </Section>
    );
}

export default Opinion;
