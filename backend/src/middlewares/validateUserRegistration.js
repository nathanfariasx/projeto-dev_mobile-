module.exports = (req, res, next) => {
    const { email, password, displayName } = req.body;
    if (!email || !password || !displayName) {
        return res.status(400).json({
            error: "Os campos email, password e displayName são obrigatórios."
        });
    }
    next();
};
