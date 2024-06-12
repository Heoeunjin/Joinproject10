import React, { useState } from 'react';
import Index from './index';

const Feeds = () => {
    const [profileImage, setProfileImage] = useState(null);
    const handleFileChange = (event) => {
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setProfileImage(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <section>
            <input type="file" id="fileInput" style={{ display: 'none' }} accept="image/*" onChange={handleFileChange} />
            <div className="storyBox"></div>
            <div className="feedBox1"></div>
            <div className="feedBox2"></div>
            <div className="feedBox3"></div>
            <div className="feedBox4"></div>
            <div className="backgroundBox"></div>
        </section>
    );
};

export default Feeds;