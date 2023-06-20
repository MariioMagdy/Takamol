import Container from './components/container/Container';
import Header from './components/header/Header';
import HomePageCarousel from './components/homeContent/homePageCarousel/HomePageCarousel';
import './sass/tkamol-ar.scss';
import './js/vendors/all.js';
import Document from './components/homeContent/document/Document';
import Events from './components/homeContent/events/Events';
import Weather from './components/homeContent/weather/Weather';
import PrayerTimes from './components/homeContent/prayerTimes/PrayerTimes';
import Links from './components/homeContent/links/Links';
import Goldrates from './components/homeContent/goldRates/Goldrates';
import Currency from './components/homeContent/currency/Currency';
import Advertising from './components/homeContent/advertising/Advertising';
import Petroleum from './components/homeContent/petroleum/Petroleum';
import Gallery from './components/homeContent/gallery/Gallery';
import Opinion from './components/homeContent/opinion/Opinion';
import Footer from './components/footer/Footer';
import { useEffect, useState } from 'react';

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
