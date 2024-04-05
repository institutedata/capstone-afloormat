import React from "react";
import { PlanningBar, ManagementBar } from "../components/Toolbar.jsx";

const MyProfile = () => {
    return (
        <div className="app-container"> {/* Use "app-container" for flex styling */}
            <PlanningBar />
            {/* About Me Section */}
            <div className="wrapper content-area"> {/* Use "wrapper" for styling, "content-area" for flex growth */}
                <h2>About Me</h2>
                <div className="input-box">
                    <input type="text" placeholder="1" id="input1"/>
                    <label htmlFor="input1">Input 1</label>
                </div>
                <div className="input-box">
                    <input type="text" placeholder="2" id="input2"/>
                    <label htmlFor="input2">Input 2</label>
                </div>
                <div className="input-box">
                    <input type="text" placeholder="3" id="input3"/>
                    <label htmlFor="input3">Input 3</label>
                </div>
                {/* Add more input fields here */}
            </div>
            <ManagementBar />
        </div>
    );
};

export default MyProfile;


//Turn Image Container item into variable so users can update it.
