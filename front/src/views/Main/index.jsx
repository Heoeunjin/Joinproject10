// index.js (src/views/Main/index.js)
import React, { useState } from 'react';
import './index.css';
import { useNavigate } from 'react-router-dom';
import Game from './game';
import GuestBook from './guestBook';
import Todo from "../TodoPage/Todo";
import Diary from "../DiaryPage/DiaryApp";
import { publicUrl } from '../../util';
import Sidebar from '../../components/Layout/Sidebar';
import feedImage1 from './images/feed1.jpg'; // 이미지 상대 경로 임포트
import feedImage2 from './images/feed2.jpg'; // 이미지 상대 경로 임포트
import feedImage3 from './images/feed3.jpg'; // 이미지 상대 경로 임포트
import feedImage4 from './images/feed4.jpg'; // 이미지 상대 경로 임포트

const App = () => {
    const [previousButton, setPreviousButton] = useState(null);
    const [profileImage, setProfileImage] = useState(null);
    const [showGame, setShowGame] = useState(false);
    const [showTodo, setShowTodo] = useState(false);
    const [showDiary, setShowDiary] = useState(false);
    const [showGuestBook, setShowGuestBook] = useState(false);
    const navigate = useNavigate();

    const changeColor = (button, path) => {
        if (previousButton) {
            previousButton.classList.remove('clicked');
        }
        setShowGame(path === '/game');
        setShowTodo(path === '/todo');
        setShowDiary(path === '/Diary');
        setShowGuestBook(path === '/guestBook');
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
                <div className="miniroom-text">미니룸</div>
            </article>

            {/* 우측 버튼 */}
            <button className="newBox" onClick={(e) => changeColor(e.target, '/index')}>홈</button>
            <button className="newBox" onClick={(e) => changeColor(e.target, '/todo')}>할일</button>
            <button className="newBox" onClick={(e) => changeColor(e.target, '/Diary')}>일기</button>
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
            <div className="feedBox1">
                <img src={feedImage1} alt="Feed Image" /> {/* 이미지 경로 수정 */}
            </div>
            <div className="feedBox2">
                <img src={feedImage2} alt="Feed Image" /> {/* 이미지 경로 수정 */}
            </div>
            <div className="feedBox3">
                <img src={feedImage3} alt="Feed Image" /> {/* 이미지 경로 수정 */}

            </div>
            <div className="feedBox4">
                <img src={feedImage4} alt="Feed Image" />
            </div>
            <div className="backgroundBox1">
                <div>
                    <img className="miniroom"
                         src={publicUrl + '/resources/img/miniroom.gif'}
                         alt="miniroom"
                    />
                </div> {/* 클래스 이름 수정 */}
            </div>
            {/* 방명록 요소 */}
            {showGuestBook && <GuestBook />}
            {/* 할일 요소 */}
            {showTodo && <Todo />}
            {/* 일기 요소 */}
            {showDiary && <Diary />}
            {/* 게임 요소 */}
            {showGame && <Game />}
        </section>
    );
};

export default App;
