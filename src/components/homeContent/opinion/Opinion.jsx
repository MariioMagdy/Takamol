import React, { useState } from 'react';

function Opinion() {
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
    const handleOptionChange = (event) => {
        setValue(event.target.value);
    };

    const handelsub = (event) => {
        event.preventDefault();
        setResult(value);
    };
    return (
        <section className='grid-span-2 opinion'>
            <div className='row m-0'>
                <div className='col-md-6 header p-0'>
                    <h3 className='mb-0'>استطلاعات الرأي</h3>
                </div>
                <div className='col-md-6 text-start header'>
                    <a
                        href=''
                        className='d-flex align-items-center justify-content-end'
                    >
                        الأستطلاعات السابقه
                        <span className='icon-Arrow---Left'></span>
                    </a>
                </div>
            </div>
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
                            <button type='button' className='btn btn-info'>
                                {result ? result : 'نتيجه التصويت'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Opinion;
