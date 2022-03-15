module.exports = {
    default: (req, res, next) => {
        try{
            res.status(500).send('Something broke!');
        }
        catch(error) {
            res.status(400).json({ error });
        }
    },
};