import {Controller, Get, Req,HttpCode,HttpStatus,Res,Header,Redirect} from "@nestjs/common"
import {Request,Response} from "express";

@Controller("/users")
export class UserController{
    @Get("/profile")
    @Header("Cache-Control","none")
    @Header("X-name","Priyanka")
    @HttpCode(HttpStatus.NO_CONTENT)
    @Redirect("/users/account",302)
    getProfile(@Req() req:Request,@Res({passthrough:true}) res:Response ){
       const rn = Math.random()*10*1
       if(rn>5){
        return{
            url:"/users/account",
            statusCode:302
        }
       }else{
        return{
            url:"/users/wallet",
            statusCode:302
        }
       }
    }

    @Get("/account")
    redirectRoute(){
        return "Working Account"
    }

    @Get("/wallet")
    redirectWallet(){
        return "Working Wallet"
    }
}