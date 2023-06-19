import React from 'react';

function Event({ el }) {
    return (
        <div>
            <span className='category'>{el.category}</span>
            <h3>{el.title}</h3>
            <p>{el.body}</p>
            <div className='d-flex  d-flex align-items-center justify-content-start gap-3'>
                <span className='icon-calendar'></span>
                <span>الثلاثاء,١ديسمبر٢٠٢١</span>
            </div>
            <div className='d-flex  d-flex align-items-center justify-content-start gap-3'>
                <span className='icon-time'></span>
                <span>٩ صباحا - ٢مساءا</span>
            </div>
        </div>
    );
}

export default Event;
