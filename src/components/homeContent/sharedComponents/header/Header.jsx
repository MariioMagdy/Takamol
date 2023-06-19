import React from 'react';

const Header = ({ title, seeMore }) => {
    return (
        <div className='row'>
            <div className='col-md-6 header'>
                <h3>{title}</h3>
            </div>
            <div className='col-md-6 text-start header'>
                <a
                    href=''
                    className='d-flex align-items-center justify-content-end'
                >
                    {seeMore}
                    <span className='icon-Arrow---Left'></span>
                </a>
            </div>
        </div>
    );
};

export default Header;
