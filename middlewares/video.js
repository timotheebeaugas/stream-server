module.exports = {
  headers: (req, res, next) => {
    try {
      const range = req.headers.range;
      if (!range) {
        res.status(400).send("Requires Range header");
      } else {
        next();
      }
    } catch (error) {
      res.status(500).json({ error });
    }
  },
  url: (req, res, next) => {
    try {
      if (!/^\/\d/.test(req.url)) {
        res.status(400).send("Wrong request");
      } else {
        next();
      }
    } catch (error) { 
      res.status(500).json({ error });
    } 
  },
}; 
         