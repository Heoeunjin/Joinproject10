// src/views/DiaryPage/New.js
import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Diary/Button';
import Header from '../../components/Diary/Header';
import Editor from '../../components/Diary/Editor';
import { DiaryDispatchContext } from './DiaryApp';
import { setPageTitle } from '../../util';

const New = () => {
    const { onCreate } = useContext(DiaryDispatchContext);
    const navigate = useNavigate();

    useEffect(() => {
        setPageTitle('새 일기 쓰기');
    }, []);

    const goBack = () => {
        navigate(-1);
    };

    const onSubmit = (data) => {
        const { date, content, emotionId } = data;
        onCreate(date, content, emotionId);
        navigate('/Diary', { replace: true });
    };

    return (
        <div>
            <Header
                title={'새 일기 쓰기'}
                leftChild={<Button text={'< 뒤로 가기'} onClick={goBack} />}
            />
            <Editor onSubmit={onSubmit} />
        </div>
    );
};

export default New;
