import { Module } from '@nestjs/common';
import { userController } from './user.controller';
import { UserStore } from './user.store';
import { UserController } from './users.controllers';


@Module({
  controllers: [userController,UserController],
  providers:[{provide:"MAIL", useValue:["pdudhat27@gmail.com","neel@gmail.com"]}]
})
export class AppModule {}
