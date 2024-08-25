import { UserService } from './user.services';
import { Module } from '@nestjs/common';
import { userController } from './user.controller';
// import { UserStore } from './user.store';
import { UsersController } from './usercontroller';


@Module({
  controllers: [userController,UsersController],
  // providers:[{provide:"MAIL", useValue:["pdudhat27@gmail.com","neel@gmail.com"]}]
  providers:[UserService]
})
export class AppModule {}
