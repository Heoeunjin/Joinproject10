//import ResponseDto from '../response.dto';
//
//export default interface SignInResponseDto extends ResponseDto {
//
//    token: string;
//    expirationTime: number;
//
//}

import ResponseDto from '../response.dto';

class SignInResponseDto extends ResponseDto {
  constructor(data) {
    super(data);
    this.token = data.token;
    this.expirationTime = data.expirationTime;
  }
}

export default SignInResponseDto;
