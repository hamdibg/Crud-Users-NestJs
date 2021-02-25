import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO } from './dto/create-user.dto';
import { query } from 'express';

@Controller('users')
export class UsersController {

    constructor(private userSvc: UsersService){}
    @Get()
    async getUsers(){
        const users = await this.userSvc.getUsers();
        return users ;
    }

    @Get(':uName')
    async getUser(@Param('uName') uName){
      const user = await this.userSvc.getUser(uName);
      return user;
    }

    @Post()
    async addUser(@Body() createUserDTO: CreateUserDTO){
        const user = await this.userSvc.addUser(createUserDTO);
        return user;
    }
    @Delete()
    async deleteUser(@Query() query){
        const users = await this.userSvc.deleteUser(query.userName);
        return users;
    }

}

