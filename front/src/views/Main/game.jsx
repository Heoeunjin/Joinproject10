// src/Game.js
import React, { useState } from 'react';
import './game.css';

const Game = () => {
    const [previousButton, setPreviousButton] = useState(null);
    const [profileImage, setProfileImage] = useState(null);
    const [unLocked, setUnLocked] = useState(true);
    const [gameStarted, setGameStarted] = useState(false);  // 게임 시작 여부를 나타내는 상태 추가

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

    const handleStartClick = () => {
        setGameStarted(true);  // 게임 시작 상태를 true로 변경
    };

    return (
        <section>
            {!gameStarted ? (  // 게임 시작 전 화면
                <div className="gameContainer">
                    <input type="file" id="fileInput" style={{ display: 'none' }} accept="image/*" onChange={handleFileChange} />
                    <button className="findMy" onClick={handleStartClick}></button>
                    <button className="startButton" onClick={handleStartClick}></button>
                    <div className="qStart"></div>
                    <div className="backgroundBox2"></div>
                    <div className="GameBox1"></div>
                    <div className="GameBox2"></div>
                </div>
            ) : (  // 게임 시작 후 화면
                <div className="gameContainer">
                <div className="backgroundBox2"></div>
                <div className="GameBox3"></div>
                <div className="GameBox4"></div>
                <button className="A-common A" onClick={handleStartClick}></button>
                <button className="A-common A-1" onClick={handleStartClick}></button>
                <button className="A-common A-2" onClick={handleStartClick}></button>
                <button className="A-common A-3" onClick={handleStartClick}></button>
                <button className="A-common A-4" onClick={handleStartClick}></button>
                    {/* 여기에 게임 진행 화면을 추가합니다 */}
                </div>
            )}
        </section>
    );
};

export default Game;
