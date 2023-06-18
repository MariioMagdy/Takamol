import React from 'react';

function Opinion() {
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
                    <form action=''>
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
                                />
                                ممتاز
                            </label>
                            <label htmlFor='good'>
                                <input
                                    type='radio'
                                    value='جيد'
                                    name='opinion'
                                    id='good'
                                />
                                جيد
                            </label>
                            <label htmlFor='acceptable'>
                                <input
                                    type='radio'
                                    value='مقبول'
                                    name='opinion'
                                    id='acceptable'
                                />
                                مقبول
                            </label>
                            <label htmlFor='bad'>
                                <input
                                    type='radio'
                                    value='سيء'
                                    name='opinion'
                                    id='bad'
                                />
                                سيء
                            </label>
                        </div>
                        <div className='py-4 px-5'>
                            <button type='button' className='btn btn-dark'>
                                تصويت
                            </button>
                            <button type='button' className='btn btn-info'>
                                نتيجة التصويت
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Opinion;
