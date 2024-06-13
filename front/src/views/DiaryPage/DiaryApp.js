// src/views/DiaryPage/DiaryApp.js
import React, { useReducer, useRef, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./Diary.css";
import Home from "./Home";
import New from "./New";
import Diary from "./Diary";
import Edit from "./Edit";
import MainLayout from '../Main/MainLayout'; // MainLayout import

function reducer(state, action) {
    switch (action.type) {
        case "INIT":
            return action.data;
        case "CREATE":
            const newState = [action.data, ...state];
            localStorage.setItem("diary", JSON.stringify(newState));
            return newState;
        case "UPDATE":
            const updatedState = state.map((it) =>
                String(it.id) === String(action.data.id) ? { ...action.data } : it
            );
            localStorage.setItem("diary", JSON.stringify(updatedState));
            return updatedState;
        case "DELETE":
            const filteredState = state.filter(
                (it) => String(it.id) !== String(action.targetId)
            );
            localStorage.setItem("diary", JSON.stringify(filteredState));
            return filteredState;
        default:
            return state;
    }
}

export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();

function DiaryApp() {
    const [isDataLoaded, setIsDataLoaded] = useState(false);
    const [data, dispatch] = useReducer(reducer, []);
    const idRef = useRef(0);

    useEffect(() => {
        const rawData = localStorage.getItem("diary");
        if (!rawData) {
            setIsDataLoaded(true);
            return;
        }
        const localData = JSON.parse(rawData);
        if (localData.length === 0) {
            setIsDataLoaded(true);
            return;
        }
        localData.sort((a, b) => Number(b.id) - Number(a.id));
        idRef.current = localData[0].id + 1;

        dispatch({ type: "INIT", data: localData });
        setIsDataLoaded(true);
    }, []);

    const onCreate = (date, content, emotionId) => {
        dispatch({
            type: "CREATE",
            data: {
                id: idRef.current,
                date: new Date(date).getTime(),
                content,
                emotionId,
            },
        });
        idRef.current += 1;
    };

    const onUpdate = (targetId, date, content, emotionId) => {
        dispatch({
            type: "UPDATE",
            data: {
                id: targetId,
                date: new Date(date).getTime(),
                content,
                emotionId,
            },
        });
    };

    const onDelete = (targetId) => {
        dispatch({
            type: "DELETE",
            targetId,
        });
    };

    if (!isDataLoaded) {
        return <div>데이터를 불러오는 중입니다</div>;
    } else {
        return (
            <DiaryStateContext.Provider value={data}>
                <DiaryDispatchContext.Provider
                    value={{
                        onCreate,
                        onUpdate,
                        onDelete,
                    }}
                >
                    <MainLayout>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/Diary/new" element={<New />} />
                            <Route path="/Diary/:id" element={<Diary />} />
                            <Route path="/Diary/Edit/:id" element={<Edit />} />
                        </Routes>
                    </MainLayout>
                </DiaryDispatchContext.Provider>
            </DiaryStateContext.Provider>
        );
    }
}
export default DiaryApp;
