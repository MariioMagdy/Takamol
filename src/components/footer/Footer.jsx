import React from 'react';
import footerImg from '../../assets/images/Group 3210.svg';

function Footer() {
    return (
        <footer className='grid-span-4 footer'>
            <div className='row text-center'>
                <div className='col-md-12'>
                    <img src={footerImg} alt='' />
                </div>
            </div>
            <div className='row text-center  justify-content-center gap-3'>
                <a className=''>من نحن</a>
                <a className=''>اتصل بنا</a>
                <a className=''>الأسئلة الشائعة</a>
            </div>
            <div className='row text-center'>
                <div className='col-md-12'>
                    بوابة تواصل قطاع البترول المصرية
                </div>
            </div>
            <div></div>
        </footer>
    );
}

export default Footer;
