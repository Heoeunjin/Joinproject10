import ResponseDto from '../response.dto';

//export default interface EmailCertificationResponseDto extends ResponseDto {
//
//}

class EmailCertificationResponseDto extends ResponseDto {
    constructor(id, email) {
        super();
        this.id = id;
        this.email = email;
    }
}

export default EmailCertificationResponseDto;