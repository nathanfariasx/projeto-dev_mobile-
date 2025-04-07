const TopicRepository = require('./../repositories/TopicRepository');

class TopicService {
    static async createTopic(subjectId, topicDTO) {
        return await TopicRepository.createTopic(subjectId, topicDTO);
    }

    static async listTopics(subjectId) {
        return await TopicRepository.listTopics(subjectId);
    }
}

module.exports = TopicService;
