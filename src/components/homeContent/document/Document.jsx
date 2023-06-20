import React from 'react';
import Header from '../sharedComponents/header/Header';
import Section from '../sharedComponents/section/Section';

function Document() {
    return (
        <Section className='grid-span-2 document'>
            <Header title='المستندات' seeMore='كل المستندات' />
            <div className='row'>
                <div className='col-md-12'>
                    <div className='row align-items-center pt-4'>
                        <div className='col-md-6 d-flex align-items-center gap-3'>
                            <span className='icon-file-pdf-o'></span>
                            <h5 className='m-0'>تقارير الأشراف</h5>
                            <button className='border-0 icon-download'></button>
                            <span className='category'>أجتماعات</span>
                        </div>
                        <div className='col-md-6 text-start d-flex align-items-center justify-content-end gap-3'>
                            <span className='icon-calendar'></span>
                            <span>الثلاثاء,١ديسمبر٢٠٢١</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-12'>
                    <div className='row align-items-center pt-4'>
                        <div className='col-md-6 d-flex align-items-center gap-3'>
                            <span className='icon-file-excel'></span>
                            <h5 className='m-0'>تقارير الأنتاج</h5>
                            <button className='border-0 icon-download'></button>
                            <span className='category'>أجتماعات</span>
                        </div>
                        <div className='col-md-6 text-start d-flex align-items-center justify-content-end gap-3'>
                            <span className='icon-calendar'></span>
                            <span>الثلاثاء,١ديسمبر٢٠٢١</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-12'>
                    <div className='row align-items-center pt-4'>
                        <div className='col-md-6 d-flex align-items-center gap-3'>
                            <span className='icon-file-empty'></span>
                            <h5 className='m-0'>مراجعة المستند</h5>
                            <button className='border-0 icon-download'></button>
                            <span className='category'>أجتماعات</span>
                        </div>
                        <div className='col-md-6 text-start d-flex align-items-center justify-content-end gap-3'>
                            <span className='icon-calendar'></span>
                            <span>الثلاثاء,١ديسمبر٢٠٢١</span>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}

export default Document;
