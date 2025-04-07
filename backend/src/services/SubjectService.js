const SubjectRepository = require('./../repositories/SubjectRepository');

class SubjectService {
    static async createSubject(subjectDTO) {
        return await SubjectRepository.createSubject(subjectDTO);
    }

    static async listSubjects(userId) {
        return await SubjectRepository.listSubjects(userId);
    }
}

module.exports = SubjectService;
