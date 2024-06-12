//export default interface ResponseDto {
//    code: ResponseCode;
//    message: ResponseMessage;
//}

class ResponseDto {
    constructor(code, message) {
        this.code = code;
        this.message = message;
    }
}

export default ResponseDto;
