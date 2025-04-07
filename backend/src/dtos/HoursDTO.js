class HoursDTO {
    constructor(hours) {
        if (hours === undefined || hours === null) {
            throw new Error("O campo 'hours' é obrigatório.");
        }
        this.hours = hours;
    }
}

module.exports = HoursDTO;
