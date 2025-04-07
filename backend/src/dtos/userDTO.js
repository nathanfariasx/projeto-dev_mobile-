// backend/src/dtos/UserDTO.js
class UserDTO {
    constructor(email, password, displayName) {
        if (!email || !password || !displayName) {
            throw new Error("Os campos email, password e displayName são obrigatórios.");
        }
        this.email = email;
        this.password = password;
        this.displayName = displayName;
    }
}

module.exports = UserDTO;
