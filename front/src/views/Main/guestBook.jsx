import React, { useState } from 'react';
import './guestBook.css';
import Index from './index';

const GuestBook = () => {
    const [previousButton, setPreviousButton] = useState(null);
    const [profileImage, setProfileImage] = useState(null);
    const [unLocked, setUnLocked] = useState(true);

    const changeColor = (button) => {
        if (previousButton !== null) {
            previousButton.classList.remove('clicked');
        }
        button.classList.add('clicked');
        setPreviousButton(button);
    };

    const openFilePicker = () => {
        document.getElementById('fileInput').click();
    };

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

    const buttonChange = (button) => {
        const lockImage = button.querySelector('img');
        if (unLocked) {
            lockImage.src = './images/unlock.png';
        } else {
            lockImage.src = './images/lock.png';
        }
        setUnLocked(!unLocked);
    };

    return (
        <section>
            <input type="file" id="fileInput" style={{ display: 'none' }} accept="image/*" onChange={handleFileChange} />
            <div className="backgroundBoxLine"></div>
            <div className="backgroundBox3"></div>
            <div className="chatBox"></div>
            <button className="sendButton"><img src="./images/send.png" alt="send" /></button>

            <div className="firstBox">
                <div className="guestBoxLine"></div>
                <div className="guestBox"></div>
                <button className="hiddenBox" onClick={(e) => buttonChange(e.target)}><img src="./images/lock.png" alt="lock" /></button>
            </div>
            <div className="secondBox">
                <div className="guestBoxLine"></div>
                <div className="guestBox"></div>
                <button className="hiddenBox" onClick={(e) => buttonChange(e.target)}><img src="./images/lock.png" alt="lock" /></button>
            </div>
            <div className="circles">
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
            </div>
        </section>
    );
};

export default GuestBook;
