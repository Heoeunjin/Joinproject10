import InputBox from '../../../components/InputBox';
import { useRef, useState, ChangeEvent, KeyboardEvent } from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';
import { signInRequest } from '../../../apis'; // 경로 확인
import { ResponseDto } from '../../../apis/response';
import ResponseCode from '../../../types/enums/response-code.enum';
import { useCookies } from 'react-cookie';

export default function SignIn() {
    const idRef = useRef(null);
    const passwordRef = useRef(null);

    const [cookie, setCookie] = useCookies(['accessToken']);
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const navigate = useNavigate();

    const signInResponse = (response) => {
        if (!response) return;
        const { code, data } = response;

        if (code === ResponseCode.VALIDATION_FAIL) {
            alert('아이디와 비밀번호를 입력하세요.');
            return;
        }

        if (code === ResponseCode.SIGN_IN_FAIL) {
            setMessage('로그인 정보가 일치하지 않습니다.');
            return;
        }

        if (code === ResponseCode.DATABASE_ERROR) {
            alert('데이터베이스 오류입니다.');
            return;
        }

        if (code === ResponseCode.SUCCESS) {
            const { token, expirationTime } = data;
            const now = new Date().getTime();
            const expires = new Date(now + expirationTime);
            setCookie('accessToken', token, { expires, path: '/' });
            alert('로그인 성공했습니다!');
            navigate('/index');
        }
    };

    const onIdChangeHandler = (event) => {
        const { value } = event.target;
        setId(value);
        setMessage('');
    };

    const onPasswordChangeHandler = (event) => {
        const { value } = event.target;
        setPassword(value);
        setMessage('');
    };

    const onSignUpButtonClickHandler = () => {
        navigate('/auth/sign-up');
    };

    const onSignInButtonClickHandler = () => {
        if (!id || !password) {
            alert('아이디와 비밀번호를 모두 입력하세요.');
            return;
        }
        const requestBody = { id, password };
        signInRequest(requestBody).then(signInResponse);
    };

    const onIdKeyDownHandler = (event) => {
        if (event.key !== 'Enter') return;
        if (!passwordRef.current) return;
        passwordRef.current.focus();
    };

    const onPasswordKeyDownHandler = (event) => {
        if (event.key !== 'Enter') return;
        onSignInButtonClickHandler();
    };

    return (
        <div id='sign-in-wrapper'>
            <div className='sign-in-image'></div>
            <div className='sign-in-container'>
                <div className='sign-in-box'>
                    <div className='sign-in-title'>{'Celebrity'}</div>
                    <div className='sign-in-content-box'>
                        <div className='sign-in-content-input-box'>
                            <InputBox ref={idRef} title='아이디' placeholder='아이디를 입력해주세요' type='text' value={id} onChange={onIdChangeHandler} onKeyDown={onIdKeyDownHandler} />
                            <InputBox ref={passwordRef} title='비밀번호' placeholder='비밀번호를 입력해주세요' type='password' value={password} onChange={onPasswordChangeHandler} isErrorMessage={!!message} message={message} onKeyDown={onPasswordKeyDownHandler} />
                        </div>
                        <div className='sign-in-content-button-box'>
                            <div className='primary-button-lg full-width' onClick={onSignInButtonClickHandler}>{'로그인'}</div>
                            <div className='text-link-lg full-width' onClick={onSignUpButtonClickHandler}>{'회원가입'}</div>
                        </div>
                        <div className='sign-in-content-divider'></div>
                        <div className='sign-in-content-sns-sign-in-box'>
                            <div className='sign-in-content-sns-sign-in-title'>{'SNS 로그인'}</div>
                            <div className='sign-in-content-sns-sign-in-button-box'>
                                <div className='kakao-sign-in-button'></div>
                                <div className='naver-sign-in-button'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
