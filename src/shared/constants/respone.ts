export class CustomResponse {
  constructor(private statusCode: number,
    private message: string,
    private data: object) { };

  success() {
    return {
      isSuccess: true,
      statusCode: this.statusCode,
      message: this.message,
      data: this.data
    }
  }
}