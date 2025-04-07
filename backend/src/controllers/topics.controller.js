const TopicDTO = require('./../dtos/TopicDTO');
const TopicService = require('./../services/TopicService');

exports.createTopic = async (req, res) => {
    try {
        const { subjectId } = req.params;
        const { name } = req.body;
        const topicDTO = new TopicDTO(name);
        const topic = await TopicService.createTopic(subjectId, topicDTO);
        return res.status(201).json({
            message: "Assunto criado com sucesso",
            topic
        });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

exports.listTopics = async (req, res) => {
    try {
        const { subjectId } = req.params;
        const topics = await TopicService.listTopics(subjectId);
        return res.status(200).json(topics);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};
