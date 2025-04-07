const { db } = require('./../firebase/admin');
const Topic = require('./../models/Topic');

class TopicRepository {
    static async createTopic(subjectId, topicDTO) {
        const data = {
            name: topicDTO.name,
            createdAt: new Date().toISOString()
        };
        const docRef = await db.collection('subjects')
            .doc(subjectId)
            .collection('topics')
            .add(data);
        return new Topic(docRef.id, data.name, data.createdAt);
    }

    static async listTopics(subjectId) {
        const snapshot = await db.collection('subjects')
            .doc(subjectId)
            .collection('topics')
            .get();
        let topics = [];
        snapshot.forEach(doc => {
            const data = doc.data();
            topics.push(new Topic(doc.id, data.name, data.createdAt));
        });
        return topics;
    }
}

module.exports = TopicRepository;
