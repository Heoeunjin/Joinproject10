import './App.css';
import { Route, Routes } from 'react-router-dom';
import SignUp from './views/Authentication/SignUp';
import SignIn from './views/Authentication/SignIn';
import Main from './views/Main';
import DiaryApp from "./views/DiaryPage/DiaryApp";
import TodoApp from "./views/TodoPage/Todo";

function App() {
    return (
        <Routes>
            <Route path='/' element={<Main />}>
                <Route path='index' element={<Main />} />
                <Route path='game' element={<Main />} />
                <Route path='feeds' element={<Main />} />
                <Route path='guestBook' element={<Main />} />
            </Route>
            <Route path="/Diary/*" element={<DiaryApp />} />  {/* 다이어리 페이지 경로 */}
            <Route path="/todo/*" element={<TodoApp />} />  {/* 투두 페이지 경로 */}
            <Route path='/auth'>
                <Route path='sign-up' element={<SignUp />} />
                <Route path='sign-in' element={<SignIn />} />
            </Route>
        </Routes>
    );
}

export default App;
