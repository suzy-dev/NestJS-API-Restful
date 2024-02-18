//save data users from memory, local

export class UserRepository {
    private users = []

    async save(user :any){
        this.users.push(user) 
    }

    async list(){
        return this.users
    }
}