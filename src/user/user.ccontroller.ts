import { Controller } from '@nestjs/common';
import { UserService } from './user.serivce';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
}
