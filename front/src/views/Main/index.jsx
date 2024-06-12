import React, { useState } from 'react';
import './index.css';
import { useNavigate } from 'react-router-dom';
import Game from './game';
import GuestBook from './guestBook';
import Todo from "../TodoPage/Todo";
import Diary from "../DiaryPage/DiaryApp";
import { publicUrl } from '../../util';
import Sidebar from '../../components/Layout/Sidebar';


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
        setShowTodo(path === '/Diary');
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
                {/*<h2>Latest News</h2>
                <p>This is some interesting content about the latest news in my world.</p>*/}
                <h1>미니룸</h1>
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
            <div className="storyBox"></div>
            <div className="feedBox1"></div>
            <div className="feedBox2"></div>
            <div className="feedBox3"></div>
            <div className="feedBox4"></div>

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
