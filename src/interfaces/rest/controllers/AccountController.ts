import { Body, JsonController, Post } from 'routing-controllers';

@JsonController('/account')
export class UserController {

  @Post('/signup')
  public async signup(@Body() signup: any): Promise<any> {
    return Promise.resolve(signup);
  }
}
