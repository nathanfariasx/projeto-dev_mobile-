const { db } = require('./../firebase/admin');
const Hours = require('./../models/Hours');

class HoursRepository {
    static async recordHours(subjectId, topicId, hoursDTO) {
        const data = {
            hours: hoursDTO.hours,
            date: new Date().toISOString()
        };
        const docRef = await db.collection('subjects')
            .doc(subjectId)
            .collection('topics')
            .doc(topicId)
            .collection('hoursLog')
            .add(data);
        return new Hours(docRef.id, data.hours, data.date);
    }
}

module.exports = HoursRepository;
