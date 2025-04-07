class User {
    constructor(uid, email, displayName, createdAt = new Date().toISOString()) {
        this.uid = uid;
        this.email = email;
        this.displayName = displayName;
        this.createdAt = createdAt;
    }
}

module.exports = User;
