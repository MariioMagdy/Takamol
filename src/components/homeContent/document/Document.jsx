import React from 'react';

function Document() {
    return (
        <section className='grid-span-2 document'>
            <div className='row'>
                <div className='col-md-6 header'>
                    <h3>المستندات</h3>
                </div>
                <div className='col-md-6 text-start header'>
                    <a
                        href=''
                        className='d-flex align-items-center justify-content-end'
                    >
                        كل المستندات
                        <span className='icon-Arrow---Left'></span>
                    </a>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-12'>
                    <div className='row align-items-center pt-4'>
                        <div className='col-md-6 d-flex align-items-center gap-3'>
                            <span className='icon-file-pdf-o'></span>
                            <h5 className='m-0'>تقارير الأشراف</h5>
                            <span className='icon-download'></span>
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
                            <span className='icon-download'></span>
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
                            <span className='icon-download'></span>
                            <span className='category'>أجتماعات</span>
                        </div>
                        <div className='col-md-6 text-start d-flex align-items-center justify-content-end gap-3'>
                            <span className='icon-calendar'></span>
                            <span>الثلاثاء,١ديسمبر٢٠٢١</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Document;
