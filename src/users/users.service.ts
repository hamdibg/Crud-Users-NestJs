import { HttpException, Injectable } from '@nestjs/common';
import { promises } from 'fs';
import { resolve } from 'path';
import { USERS } from './../mocks/users.mocks';


@Injectable()
export class UsersService {
    users = USERS;

    getUsers(): Promise<any>{
        return new Promise(resolve=> {
            resolve(this.users);
        });
    }

    getUser(uName): Promise<any>{
        let un = uName;
        return new Promise(resolve => {
            const userTemp = this.users.find(user => user.userName === un);
            if (!userTemp){
                throw new HttpException('user does not exist!',404);
            }
            resolve(userTemp);
        });
    }

    addUser(user): Promise<any>{
        return new Promise(resolve => {
            this.users.push(user);
            resolve(this.users);
        });
    }

    deleteUser(uName): Promise<any>{
        let un = uName;
        return  new Promise(resolve => {
            let index = this.users.findIndex(user => user.userName === un);
            if (index === 1){
                throw new HttpException('User does not exist',404);
            }
            this.users.splice(index, 1);
            resolve(this.users);
        });
    }
}
