import { DevConfigService } from './common/providers/DevConfigService';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(
    private devConfigService: DevConfigService,
    @Inject('CONFIG') private config: { port: string },
  ) {}
  getHello(): string {
    return `Hello World! I am learning Nest Js Fundamentals ${this.devConfigService.getDBHOST()}
    PORT = ${this.config.port}`;
  }
}
