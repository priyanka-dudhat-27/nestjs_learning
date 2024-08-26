import { Global, Module } from "@nestjs/common";
import { UsersController } from "./controllers/usercontroller";
import { AccountController } from "./controllers/account.controller";
import { UserService } from "./services/user.services";

@Global()//glovbal module ,not need to import any other modules
@Module({
    imports:[],
    controllers:[UsersController,AccountController],
    providers:[UserService],
    exports:[UserService],
})
export class UserModules{

}