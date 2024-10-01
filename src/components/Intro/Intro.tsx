import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faDollarSign, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import "./Intro.css";

const Intro: React.FC = () => {
    return (
        <section className="intro-section">
            <div className='intro-box'>
                <h1>Find and book your perfect stay </h1>
                <div>
                    <Link to="/hotels">Hotels</Link>
                </div>
            </div>
            <div className='intro-box'>
                <div className='info-box'>
                    <FontAwesomeIcon icon={faStar} size="3x" className="text-yellow-500 mb-2" />
                    <p>Earn rewards on every night you stay</p>
                </div>
                <div className='info-box'>
                    <FontAwesomeIcon icon={faDollarSign} size="3x" className="text-green-500 mb-2" />
                    <p>Save more with Member Prices</p>
                </div>
                <div className='info-box'>
                    <FontAwesomeIcon icon={faTimesCircle} size="3x" className="text-red-500 mb-2" />
                    <p>Free cancellation options if plans change</p>
                </div>
            </div>
        </section>
    );
};

export default Intro;