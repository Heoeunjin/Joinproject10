// src/views/Main/MainLayout.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';

const MainLayout = ({ children }) => {
    const [previousButton, setPreviousButton] = useState(null);
    const [profileImage, setProfileImage] = useState(null);
    const navigate = useNavigate();

    const changeColor = (button, path) => {
        if (previousButton) {
            previousButton.classList.remove('clicked');
        }
        navigate(path);
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

    const handleClick2 = () => {
        navigate('/auth/sign-in');
    };

    const handleClick = () => {
        navigate('/auth/sign-up');
    };

    return (
        <section>
            <article>
                <div className="profile-text">프로필</div>
                <div className="miniroom-text">To do List</div>
            </article>

            {/* 우측 버튼 */}
            <button className="newBox" onClick={(e) => changeColor(e.target, '/index')}>홈</button>
            <button className="newBox" onClick={(e) => changeColor(e.target, '/todo')}>할일</button>
            <button className="newBox" onClick={(e) => changeColor(e.target, '/diary')}>일기</button>
            <button className="newBox" onClick={(e) => changeColor(e.target, '/game')}>미니미</button>
            <button className="newBox" onClick={(e) => changeColor(e.target, '/messages')}>메세지</button>
            <button className="newBox" onClick={(e) => changeColor(e.target, '/guestBook')}>방명록</button>
            <button className="newBox" onClick={(e) => changeColor(e.target, '/explore')}>탐색</button>

            {/* 로그인, 회원가입 */}
            <button className="login" onClick={handleClick2}>로그인</button>
            <button className="signup" onClick={handleClick}>회원가입</button>

            {/* 음악 추천 */}
            <div className="musicBox"></div>

            {/* 프로필, 스토리, 피드 */}
            <button className="profileBox" onClick={openFilePicker}>
                {profileImage ? <img src={profileImage} alt="Profile" /> : '프로필 수정'}
            </button>

            <input type="file" id="fileInput" style={{ display: 'none' }} accept="image/*" onChange={handleFileChange} />
            <div className="storyBox">
                id: h1<br/><br/>
                이름: 허은진<br/><br/>
                이메일: huhej0315@gmail.com
            </div>
            <div className="Diarybox">
                <div className="scroll-container">
                    {children}
                </div>
            </div>


        </section>
    );
};

export default MainLayout;
