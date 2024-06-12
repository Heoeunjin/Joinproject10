//export default interface CheckCertificationRequestDto {
//    id: string;
//    email: string;
//    certification: string;
//}

class CheckCertificationRequestDto {
  constructor(data) {
    this.id = data.id;
    this.email = data.email;
    this.certificationNumber = data.certificationNumber;
  }
}

export default CheckCertificationRequestDto;
