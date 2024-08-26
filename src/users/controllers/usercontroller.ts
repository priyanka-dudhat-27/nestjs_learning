import { Body, Controller, Get, Param, Post, Put, Delete } from "@nestjs/common";
import { createUserDTO } from "src/users/dto";
import { UserService } from "src/users/services/user.services";

@Controller("/users")
export class UsersController{

    constructor(private userService:UserService){

    }
    @Post()
    createUser(@Body() createUserDTO:createUserDTO){
        this.userService.addUser(createUserDTO)
        return {message:"userv added"}
    }

    @Get()
    findAllUsers(){
        return this.userService.getUsers()
    }

    @Get(":id")
    findUser(@Param("id") id:number){
        return this.userService.getUser(+id)

    }

    @Put(":id")
    updateUser(@Param("id") id:number, @Body() updateUserDTO:createUserDTO){
       this.userService.updateUser(+id,updateUserDTO)
        return {message:"user updated"}
    }

    @Delete(":id")
    deleteUser(@Param("id") id:number){
        this.userService.deleteUser(+id)
        return {message:"user deleted"}
    }

}