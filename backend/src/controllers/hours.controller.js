const HoursDTO = require('./../dtos/HoursDTO');
const HoursService = require('./../services/HoursService');

exports.recordHours = async (req, res) => {
    try {
        const { subjectId, topicId } = req.params;
        const { hours } = req.body;
        const hoursDTO = new HoursDTO(hours);
        const record = await HoursService.recordHours(subjectId, topicId, hoursDTO);
        return res.status(201).json({
            message: "Horas registradas com sucesso",
            record
        });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};
