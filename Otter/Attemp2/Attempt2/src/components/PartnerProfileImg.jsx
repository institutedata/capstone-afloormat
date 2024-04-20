import React from 'react';

const PartnerProfileImg = () => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                margin: '20px auto',
                padding: '10px',
                border: '1px solid #ccc',
                borderRadius: '5px',
                maxWidth: '400px',
            }}
        >
            <img
                src="https://pbs.twimg.com/media/FUrPWJqVEAAURXb.jpg:large"
                alt="Otter"
                style={{ maxWidth: '100%', height: 'auto' }}
            />
        </div>
    );
};

export default PartnerProfileImg;