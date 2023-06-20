import React from 'react';
import myImage from '../../../assets/images/Group 3148.svg';
import Section from '../sharedComponents/section/Section';

function PrayerTimes() {
    return (
        <Section className='prayer p-4'>
            <div className='prayer-timing'>
                <h4>مواعيد الصلاة اليوم في القاهرة</h4>
                <span>الثلاثاء ١ ديسمبر</span>
            </div>
            <div className='row'>
                <div className='col-md-6'>
                    <div>
                        <span>الفجر</span>
                    </div>
                    <div>
                        <span>الظهر</span>
                    </div>
                    <div>
                        <span>العصر</span>
                    </div>
                    <div>
                        <span>المغرب</span>
                    </div>
                    <div>
                        <span>العشا</span>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div>
                        <span>٣:٣٦</span>
                    </div>
                    <div>
                        <span>٠١:١٢</span>
                    </div>
                    <div>
                        <span>٣:٣٨</span>
                    </div>
                    <div>
                        <span>٦:٤٩</span>
                    </div>
                    <div>
                        <span>٨:١٥</span>
                    </div>
                </div>
                <img src={myImage} alt='Prayer' />
            </div>
        </Section>
    );
}

export default PrayerTimes;
