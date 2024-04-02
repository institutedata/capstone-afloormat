import React, { useState } from 'react';
import { PlanningBar, ManagementBar } from "../components/Toolbar.jsx";

const MyProfile = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [location, setLocation] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleAgeChange = (e) => {
        setAge(e.target.value);
    };

    const handleLocationChange = (e) => {
        setLocation(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform any necessary actions with the entered data
        console.log('Name:', name);
        console.log('Age:', age);
        console.log('Location:', location);
    };

    return (
        <><><div>
            <PlanningBar />
        </div><div>
                <h1>My Profile</h1>
                <form onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <input type="text" value={name} onChange={handleNameChange} />
                    </label>
                    <br />
                    <label>
                        Age:
                        <input type="number" value={age} onChange={handleAgeChange} />
                    </label>
                    <br />
                    <label>
                        Location:
                        <input type="text" value={location} onChange={handleLocationChange} />
                    </label>
                    <br />
                    <button type="submit">Save</button>
                </form>
            </div></><div><ManagementBar></ManagementBar></div></>
    );
};

export default MyProfile;