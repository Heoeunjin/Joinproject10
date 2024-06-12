//export default interface EmailCertificationRequestDto {
//    id: string;
//    email: string;
//}

class EmailCertificationRequestDto {
    constructor(id, email) {
        this.id = id;
        this.email = email;
    }
}

export default EmailCertificationRequestDto;
