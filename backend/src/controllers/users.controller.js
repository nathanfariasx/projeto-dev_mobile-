const UserDTO = require('./../dtos/userDTO');
const UserService = require('./../services/UserService');

exports.registerUser = async (req, res) => {
    try {
        const { email, password, displayName } = req.body;
        const userDTO = new UserDTO(email, password, displayName);
        const userData = await UserService.registerUser(userDTO);

        return res.status(201).json({
            message: 'Usuário criado com sucesso',
            user: userData,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};
