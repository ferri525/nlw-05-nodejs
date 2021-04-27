import {getCustomRepository, Repository} from "typeorm"
import { User } from "../entities/User";
import { UsersRepository } from "../repositories/UsersRepository"


class UsersService {

    private usersRepository: Repository<User>

    constructor (){
        this.usersRepository = getCustomRepository(UsersRepository);
    }
    async create(email:string) {
    
        // Verificar se o usuário existe
        const userExists = await this.usersRepository.findOne({
            email
        })

        
        if(userExists){
            return userExists; //Retorna o usuario
        }

        const user = this.usersRepository.create({email})

        await this.usersRepository.save(user);

        return user; // Retorna o usuário criado.
       
    }


    async findByEmail(email:string){
        const userExists = await this.usersRepository.findOne({
            email
        })
        
        if(userExists){
            return userExists; //Retorna o usuario
        }
    }

}

export {UsersService} 