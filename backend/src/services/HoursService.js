const HoursRepository = require('./../repositories/HoursRepository');

class HoursService {
    static async recordHours(subjectId, topicId, hoursDTO) {
        return await HoursRepository.recordHours(subjectId, topicId, hoursDTO);
    }
}

module.exports = HoursService;
