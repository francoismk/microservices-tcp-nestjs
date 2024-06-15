import { Injectable } from '@nestjs/common';
import { createUserEvent } from './create-user.event';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  handleUserCreated(data: createUserEvent) {
    console.log('handleUserCreated - COMMUNICATIONS', data);
  }
}
