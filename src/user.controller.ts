import { Body, Controller, Post, Get } from "@nestjs/common"
import {UserRepository} from "./user.repository"

@Controller('/users')
export class UserController {

    private userRepository = new UserRepository()

    @Post()
    async createUser(@Body() dataUser) {
        this.userRepository.save(dataUser)
        return dataUser
    }

    @Get()
    async listUser(){
        return this.userRepository.list()
    }

}

