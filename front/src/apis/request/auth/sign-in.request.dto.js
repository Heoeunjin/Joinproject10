//export default interface SignInRequestDto {
//
//    id: string;
//    password: string;
//
//}
class SignInRequestDto {
  constructor(data) {
    this.id = data.id;
    this.password = data.password;
  }
}

export default SignInRequestDto;
