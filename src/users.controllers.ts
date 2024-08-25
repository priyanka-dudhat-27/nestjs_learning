// import {Controller, Get, Req,HttpCode,HttpStatus,Res,Header,Redirect,Param, Query, Post, Body} from "@nestjs/common"
// import {Request,Response} from "express";

// import { Controller, Inject } from "@nestjs/common";
// import { UserStore } from "./user.store";

// interface videoParams{
//     id:number,
//     name:string,
// }

// interface QueryParams{
//     age:number,
//     name:string
// }

// @Controller("/users")
// export class UserController{
//     @Get("/profile")
//     @Header("Cache-Control","none")
//     @Header("X-name","Priyanka")
//     @HttpCode(HttpStatus.NO_CONTENT)
//     @Redirect("/users/account",302)
//     getProfile(@Req() req:Request,@Res({passthrough:true}) res:Response ){
//        const rn = Math.random()*10*1
//        if(rn>5){
//         return{
//             url:"/users/account",
//             statusCode:302
//         }
//        }else{
//         return{
//             url:"/users/wallet",
//             statusCode:302
//         }
//        }
//     }

//     @Get("/account")
//     redirectRoute(){
//         return "Working Account"
//     }

//     @Get("/wallet")
//     redirectWallet(){
//         return "Working Wallet"
//     }

//     // params
//     @Get("/videos/:id/:name")
//     getVideos(@Param("name") param:videoParams){
//         console.log(param)
//         return 'success';
//     }

//     // query params
//     @Get("/search")
//     searchVideos(@Query() query:QueryParams){
//         console.log(query.age,query.name)
//         return "success"
//     }

//     //data from req.body
//     @Post("/video")
//     addVideo(@Body() requestData:Record<string,any>){
//         console.log(requestData)
//         return {success:"true"}
//     }


// }

//dependency injection topic

// @Controller("/users")
// export class UserController{
//     constructor(@Inject("MAIL") private emails:string[] ){
//         console.log(this.emails)
//     }
// }