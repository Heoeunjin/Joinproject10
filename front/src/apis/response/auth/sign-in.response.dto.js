import ResponseDto from '../response.dto';

class SignInResponseDto extends ResponseDto {
  constructor(data) {
    super(data);
    this.token = data.token;
    this.expirationTime = data.expirationTime;
  }
}

export default SignInResponseDto;
