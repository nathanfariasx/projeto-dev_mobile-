const { admin } = require('./../firebase/admin');

module.exports = async (req, res, next) => {
  const authHeader = req.headers.authorization || '';
  const token = authHeader.startsWith('Bearer ') ? authHeader.split(' ')[1] : null;

  if (!token) {
    return res.status(401).json({ message: 'Token não encontrado' });
  }

  try {
    // Verifica o token com Firebase Admin
    const decoded = await admin.auth().verifyIdToken(token);
    req.user = decoded; // anexa user ao req
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Token inválido', error });
  }
};
