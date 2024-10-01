import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Hotels from './pages/Hotels/Hotels';
import HotelDetails from './pages/HotelDetails/HotelDetails';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { HotelProvider } from './context/HotelContext';

const App: React.FC = () => {
    return (
        <HotelProvider>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/hotels" element={<Hotels />} />
                    <Route path="/hotels/:id" element={<HotelDetails />} />
                </Routes>
                <Footer />
            </Router>
        </HotelProvider>
    );
};

export default App;