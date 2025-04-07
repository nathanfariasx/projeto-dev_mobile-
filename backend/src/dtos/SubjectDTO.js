// backend/src/dtos/SubjectDTO.js
class SubjectDTO {
    constructor(name, userId) {
        if (!name) {
            throw new Error("O nome da matéria é obrigatório.");
        }
        if (!userId) {
            throw new Error("O userId é obrigatório.");
        }
        this.name = name;
        this.userId = userId;
    }
}

module.exports = SubjectDTO;
