import React from 'react';
import myImage from '../../../assets/images/Group 3165.svg';
import Section from '../sharedComponents/section/Section';

const Goldrates = () => {
    return (
        <Section className='gold p-3'>
            <div className='gold-header'>
                <h4>أسعار الذهب اليوم</h4>
                <span>الثلاثاء ١ ديسمبر</span>
            </div>
            <div className='row'>
                <div className='col-md-6'>
                    <div>
                        <span>عيار ١٨</span>
                    </div>
                    <div>
                        <span>عيار ٢١</span>
                    </div>
                    <div>
                        <span>عيار ٢٤</span>
                    </div>
                    <div>
                        <span>الجنية الذهب</span>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div>
                        <span>٩٢١ جنيها</span>
                    </div>
                    <div>
                        <span>١٠٧٥ جنيها</span>
                    </div>
                    <div>
                        <span>١٢٢٨ جنيها</span>
                    </div>
                    <div>
                        <span>٨٦٠٠ جنيها</span>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-12 text-center'>
                    <img src={myImage} alt='Gold' className='img-fluid' />
                </div>
            </div>
        </Section>
    );
};

export default Goldrates;
