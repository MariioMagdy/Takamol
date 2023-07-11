import React from 'react';

const propTypes = {
    string(props, propName, componentName) {
        // console.log(props, propName, componentName);
        const type = typeof props[propName]; // to deduct the wrong propName type
        // console.log(type);
        if (type !== 'string') {
            return new Error(
                `The component needs ${propName} to be a "string" type but you have sent a ${type} `
            );
        }
    },
};

const Header = ({ title, seeMore }) => {
    return (
        <div className='row'>
            <div className='col-md-6 header justify-content-start'>
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

//

Header.propTypes = {
    title: propTypes.string,
    seeMore: propTypes.string,
};
export default Header;
