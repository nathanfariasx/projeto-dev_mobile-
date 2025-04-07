const { db } = require('./../firebase/admin');
const Subject = require('./../models/Subject');

class SubjectRepository {
    static async createSubject(subjectDTO) {
        const data = {
            name: subjectDTO.name,
            userId: subjectDTO.userId,
            createdAt: new Date().toISOString()
        };
        const docRef = await db.collection('subjects').add(data);
        return new Subject(docRef.id, data.name, data.userId, data.createdAt);
    }

    static async listSubjects(userId) {
        const snapshot = await db.collection('subjects')
            .where('userId', '==', userId)
            .get();
        let subjects = [];
        snapshot.forEach(doc => {
            const data = doc.data();
            subjects.push(new Subject(doc.id, data.name, data.userId, data.createdAt));
        });
        return subjects;
    }
}

module.exports = SubjectRepository;
