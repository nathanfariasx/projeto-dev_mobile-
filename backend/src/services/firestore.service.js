const admin = require('../firebase/admin');
const db = admin.firestore();

exports.getSubjectsByUser = async (uid) => {
  const snapshot = await db.collection('subjects').where('userId', '==', uid).get();
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

exports.addSubject = async (uid, name) => {
  const ref = await db.collection('subjects').add({ name, userId: uid });
  return { id: ref.id, name };
};
