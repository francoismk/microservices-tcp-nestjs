import { Injectable } from '@nestjs/common';
import { createUserEvent } from './create-user.event';

@Injectable()
export class AppService {
private readonly analytics: any[] = [];

  getHello(): string {
    return 'Hello World!';
  }

handleUserCreated(data: createUserEvent) {
  console.log('handlerUserCreated - ANALYTICS', data);
  this.analytics.push({
    email: data.email,
    timestamp: new Date(),
  });
}

getAnalytics() {
  return this.analytics;
}
}
