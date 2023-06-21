import React, { useRef, useEffect } from 'react';
import Section from '../sharedComponents/section/Section';
import VanillaTilt from 'vanilla-tilt';

const Gallery = () => {
    const leftSide = useRef();
    const rightSide = useRef();

    useEffect(() => {
        const tiltEleO = leftSide.current;
        const tiltEleT = rightSide.current;
        VanillaTilt.init([tiltEleO, tiltEleT], {
            max: 0,
            speed: 400,
            glare: true,
            'max-glare': 0.4,
        });
    }, []);
    return (
        <Section className='grid-span-4 gallery pt-3 px-3 pb-0'>
            <div className='row m-0'>
                <div className='col-md-7 right-side p-0' ref={rightSide}>
                    <div className=''>
                        <div className='row right-side-content p-4 d-flex align-items-center m-0'>
                            <div className='col-md-10'>
                                <div>
                                    <span className='category'>أجتماعات</span>

                                    <p>
                                        برتكول للأستفادة من خدمات الشبكة الوطنية
                                        الموحدة للطواري في انشطة وزارة البترول و
                                        الثروة المدنية
                                    </p>
                                    <div className='d-flex  d-flex align-items-center justify-content-start gap-3'>
                                        <span className='icon-calendar h6'></span>
                                        <span>الثلاثاء,١ ديسمبر ٢٠٢١</span>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-2 text-center pt-5'>
                                <span className='icon-play'></span>
                                <h6>مشاهدة الفيديو</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-5 left-side p-0' ref={leftSide}>
                    <div className='row flex-column m-0'>
                        <div className='col-md-12 left-top position-relative'>
                            <div className='row left-top-bottom d-flex align-items-center m-0 position-absolute'>
                                <div className='col-md-12'>
                                    <div className='row align-items-center justify-content-center w-100'>
                                        <div className='col-md-9'>
                                            <div>
                                                <span className='category'>
                                                    أجتماعات
                                                </span>

                                                <p>
                                                    مباحثات مشتركة بين وزير
                                                    <br /> البترول والثروة
                                                    المدنيه ورئيس
                                                </p>
                                                <div className='d-flex  d-flex align-items-center justify-content-start gap-3'>
                                                    <span className='icon-calendar h6 align-self-end'></span>
                                                    <span>
                                                        الثلاثاء,١ ديسمبر ٢٠٢١
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-md-3'>
                                            <div className='text-center'>
                                                <span className='icon-picture h2'></span>
                                                <h6>مشاهدة الصور</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-12 left-down position-relative'>
                            <div className='row left-top-bottom d-flex align-items-center m-0 position-absolute'>
                                <div className='col-md-12'>
                                    <div className='row align-items-center justify-content-center w-100'>
                                        <div className='col-md-9'>
                                            <div>
                                                <span className='category'>
                                                    أجتماعات
                                                </span>

                                                <p>
                                                    مباحثات مشتركة بين وزير
                                                    <br /> البترول والثروة
                                                    المدنيه ورئيس
                                                </p>
                                                <div className='d-flex  d-flex align-items-center justify-content-start gap-3'>
                                                    <span className='icon-calendar h6 align-self-end'></span>
                                                    <span>
                                                        الثلاثاء,١ ديسمبر ٢٠٢١
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-md-3'>
                                            <div className='text-center'>
                                                <span className='icon-picture h2'></span>
                                                <h6>مشاهدة الصور</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h6 className='text-center p-4 mb-0'>
                <span>كل الفيديوهات والصور</span>
                <span className='icon-Arrow---Left p-3'></span>
            </h6>
        </Section>
    );
};

export default Gallery;
