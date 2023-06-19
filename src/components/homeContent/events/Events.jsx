import React from 'react';
import Event from './event/Event';
import Header from '../sharedComponents/header/Header';

function Events({ data }) {
    return (
        <section className='events'>
            <Header title='التقويم والأحداث' seeMore='كل الأحداث' />
            <div className='pt-4'>
                <div className='grid-span-2'>
                    <div className='events-content overflow-auto'>
                        {data.map((el) => {
                            return <Event el={el} key={el.id}></Event>;
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Events;
