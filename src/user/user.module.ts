/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UserService } from './user.serivce';

import { UserController } from './user.ccontroller';

@Module({
  providers: [UserService],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}
