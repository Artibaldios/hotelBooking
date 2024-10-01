import React, { useState } from 'react';
import "./Filter.css";

interface FilterProps {
    onFilterChange: (priceRange?: any[], location?: string) => void;
}

const Filter: React.FC<FilterProps> = ({ onFilterChange }) => {
    const [priceRange, setPriceRange] = useState<any[]>([0, 500]);
    const [location, setLocation] = useState('');

    const handlePriceChange = (index: number, value: any) => {
        if (value === "") {
            value = 0;
        }
        if (value > 1000) {
            value = 1000;
        }
        const newPriceRange = [...priceRange];
        newPriceRange[index] = value;
        setPriceRange(newPriceRange as [number, number]);
        onFilterChange(newPriceRange, location);
    };

    const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLocation(e.target.value);
        onFilterChange(priceRange, e.target.value);
    };

    return (
        <div className="filter-wrapper">
            <h2>Search your desired stay</h2>
            <div className="filter-input-box">
                <div className="inputs-box">
                    <label>Price Range from:</label>
                    <input type="number" value={priceRange[0]} onChange={(e) => handlePriceChange(0, e.target.value)} min={0} max={1000} />
                    <label>to</label>
                    <input type="number" value={priceRange[1]} onChange={(e) => handlePriceChange(1, e.target.value)} min={0} max={1000} />
                </div>
                <div className="inputs-box">
                    <label>Location:</label>
                    <input type="text" value={location} onChange={handleLocationChange} placeholder="Enter location..." />
                </div>
            </div>
        </div>
    );
};

export default Filter;