import React from 'react';

const Section = ({ size, className, ...props }) => {
    const elementSize = size ? `box--${size}` : '';
    return (
        <section
            className={`${className} ${elementSize}`.trim()}
            {...props}
        ></section>
    );
};

export default Section;
