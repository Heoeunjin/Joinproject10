import axios, { AxiosResponse } from 'axios';
import IdCheckRequestDto from './request/auth/id-check.request.dto';
import IdCheckResponseDto from './response/auth/id-check.response.dto';
import ResponseDto from './response/response.dto';
import CheckCertificationRequestDto from './request/auth/check-certification.request.dto';
import CheckCertificationResponseDto from './response/auth/check-certification.response.dto';
import EmailCertificationResponseDto from './response/auth/email-certification.response.dto';
import EmailCertificationRequestDto from './request/auth/email-certification.request.dto';
import SignUpResponseDto from './response/auth/sign-up.response.dto';
import SignUpRequestDto from './request/auth/sign-up.request.dto';
import SignInResponseDto from './response/auth/sign-in.response.dto';

const responseHandler = <T> (response: AxiosResponse<any, any>) => {
    const responseBody: T = response.data;
    return responseBody;
};

const errorHandler = (error: any) => {
    if(!error.response || !error.response.data) return null;
        const responseBody: ResponseDto = error.response.data;
        return responseBody;
}

const DOMAIN = 'http://localhost:4040';
const API_DOMAIN = `${DOMAIN}/api/v1`;

const SIGN_IN_URL = () => `${API_DOMAIN}/auth/sign-in`;
const SIGN_UP_URL = () => `${API_DOMAIN}/auth/sign-up`;
const ID_CHECK_URL = () => `${API_DOMAIN}/auth/id-check`;
const EMAIL_CERTIFICATION_URL = () => `${API_DOMAIN}/auth/email-certification`;
const CHECK_CERTIFICATION_URL = () => `${API_DOMAIN}/auth/check-certification`;


export const signInRequest = async (requestBody) => {
    const result = await axios.post(SIGN_IN_URL(), requestBody)
        .then(responseHandler(SignInResponseDto))
        .catch(errorHandler);
    return result;
};

export const signUpRequest = async (requestBody) => {
    const result = await axios.post(SIGN_UP_URL(), requestBody)
        .then(responseHandler(SignUpResponseDto))
        .catch(errorHandler);
    return result;
};

export const idCheckRequest = async (requestBody) => {
    const result = await axios.post(ID_CHECK_URL(), requestBody)
        .then(responseHandler(IdCheckResponseDto))
        .catch(errorHandler);
    return result;
};

export const emailCertificationRequest = async (requestBody) => {
    const result = await axios.post(EMAIL_CERTIFICATION_URL(), requestBody)
        .then(responseHandler(EmailCertificationResponseDto))
        .catch(errorHandler);
    return result;
};

export const checkCertificationRequest = async (requestBody) => {
    const result = await axios.post(CHECK_CERTIFICATION_URL(), requestBody)
        .then(responseHandler(CheckCertificationResponseDto))
        .catch(errorHandler);
    return result;
};