const SubjectDTO = require('./../dtos/SubjectDTO');
const SubjectService = require('./../services/SubjectService');

exports.createSubject = async (req, res) => {
  try {
    // req.user.uid vem do middleware de autenticação
    const userId = req.user.uid;
    const { name } = req.body;
    const subjectDTO = new SubjectDTO(name, userId);
    const subject = await SubjectService.createSubject(subjectDTO);
    return res.status(201).json({
      message: "Matéria criada com sucesso",
      subject
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

exports.listSubjects = async (req, res) => {
  try {
    const userId = req.user.uid;
    const subjects = await SubjectService.listSubjects(userId);
    return res.status(200).json(subjects);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
