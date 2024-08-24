import {Controller,Post,Get,Put,Delete,Param,Body} from "@nestjs/common"
import { createUserDTO } from "./dto";

let USERS=[];

@Controller("/users")
export class userController{
    @Post()
    addUser(@Body() createUserDTO:createUserDTO){
          USERS.push(createUserDTO)
          return "user added";
    }

    @Get("/getusers")
    getUsers(){
        return USERS;
    }

    @Get(":id")
    getSingleUser(@Param("id") id: number) {
        const user = USERS.find((user) => user.id === +id);
        if (!user) {
            return "User not found";
        }
        return user;
    }


    @Put(":id")
    updateUser(@Param("id") id: number, @Body() updateUserDTO: createUserDTO) {
        const userIndex = USERS.findIndex((user) => user.id === +id);
        if (userIndex === -1) {
            return "User not found";
        }

        USERS[userIndex] = updateUserDTO;
        return "User updated successfully";
    }

    @Delete(":id")
    deleteUser(@Param("id") id: number) {
        const initialLength = USERS.length;
        USERS = USERS.filter((user) => user.id !== +id);

        if (USERS.length === initialLength) {
            return "User not found";
        }

        return "User deleted successfully";
    }
}
