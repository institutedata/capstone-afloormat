import React, { useState } from 'react';

const FavouritesDD = () => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div>
            <label htmlFor="favourites">Select your favourite category:</label>
            <select id="favourites" value={selectedOption} onChange={handleOptionChange}>
                <option value="">Select an option</option>
                <option value="flowers">Flowers</option>
                <option value="music">Music</option>
                <option value="food">Food</option>
            </select>
            {selectedOption && <p>You selected: {selectedOption} thats epic bro</p>}
        </div>
    );
};

export default FavouritesDD;