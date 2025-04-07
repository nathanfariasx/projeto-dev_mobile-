const { admin, db } = require('./../firebase/admin');
const User = require('./../models/User');

class UserRepository {
    static async registerUser(userDTO) {

        const userRecord = await admin.auth().createUser({
            email: userDTO.email,
            password: userDTO.password,
            displayName: userDTO.displayName,
        });


        const userData = new User(userRecord.uid, userRecord.email, userRecord.displayName);

        await db.collection('users').doc(userRecord.uid).set({ ...userData });

        return userData;
    }
}

module.exports = UserRepository;
