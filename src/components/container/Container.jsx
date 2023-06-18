import React from 'react';

const Container = ({ children }) => {
    return (
        <div className={`container-fluid`}>
            <div className='row'>
                <div className='grid col-xl-12'>{children}</div>
            </div>
        </div>
    );
};

export default Container;
