import {
  Controller,
  Get,
  Post,
  Req,
  Request,
  UseInterceptors,
} from "@nestjs/common";
import { AppService } from "./app.service";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  getHello(@Request() request): string {
    console.log(request.body);

    return this.appService.getHello();
  }
}
