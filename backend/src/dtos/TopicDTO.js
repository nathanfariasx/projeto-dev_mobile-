class TopicDTO {
    constructor(name) {
        if (!name) {
            throw new Error("O nome do assunto é obrigatório.");
        }
        this.name = name;
    }
}

module.exports = TopicDTO;
