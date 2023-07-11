import {
    Container,
    Header,
    HomePageCarousel,
    Document,
    Events,
    Weather,
    PrayerTimes,
    Links,
    Goldrates,
    Currency,
    Advertising,
    Petroleum,
    Gallery,
    Opinion,
    Footer,
} from './components/all';

import { useEffect, useState } from 'react';
//
import './sass/tkamol-ar.scss';
import './js/vendors/all.js';

function App() {
    const [data, setData] = useState([]);
    useEffect(() => {
        const data = async () => {
            try {
                const res = await fetch('http://localhost:3005/events');
                const data = await res.json();
                setData(data);
            } catch (error) {
                console.log(error);
            }
        };
        data();
    }, []);
    return (
        <>
            <div className='homePage-bg homePage-dir'>
                <Header />
                <HomePageCarousel></HomePageCarousel>
                <Container>
                    <Document></Document>
                    <Events data={data}></Events>
                    <Weather></Weather>
                    <PrayerTimes></PrayerTimes>
                    <Goldrates></Goldrates>
                    <Links></Links>
                    <Currency></Currency>
                    <Advertising data={data}></Advertising>
                    <Opinion></Opinion>
                    <Petroleum></Petroleum>
                    <Gallery></Gallery>
                    <Footer></Footer>
                </Container>
            </div>
        </>
    );
}
export default App;
