//export default interface SignUpRequestDto {
//    id: string;
//    password: string;
//    email: string;
//    certificationNumber: string;
//}

class SignUpRequestDto {
  constructor(data) {
    this.id = data.id;
    this.password = data.password;
    this.email = data.email;
    this.certificationNumber = data.certificationNumber;
  }
}

export default SignUpRequestDto;
