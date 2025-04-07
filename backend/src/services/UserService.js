const UserRepository = require('./../repositories/UserRepository');

class UserService {
    static async registerUser(userDTO) {
        const userData = await UserRepository.registerUser(userDTO);
        return userData;
    }
}

module.exports = UserService;
