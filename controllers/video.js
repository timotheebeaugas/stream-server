// in the imports above
const fs = require("fs");
const path = require('path');

module.exports = {
  list: (req, res, next) => {
    try {/* 
      // Ensure there is a range given for the video
      const range = req.headers.range;

      // get video stats (about 61MB)

      const videoName = req.query.v;
      const videoPath = `./data/1080/${videoName}.mp4`;
      const videoSize = fs.statSync(`./data/1080/${videoName}.mp4`).size;

      // Parse Range
      // Example: "bytes=32324-"
      const CHUNK_SIZE = 10 ** 6; // 1MB
      const start = Number(range.replace(/\D/g, ""));
      const end = Math.min(start + CHUNK_SIZE, videoSize - 1);
      
      // Create headers
      const contentLength = end - start + 1;
      const headers = { 
        "Content-Range": `bytes ${start}-${end}/${videoSize}`,
        "Accept-Ranges": "bytes",
        "Content-Length": contentLength, 
        "Content-Type": "video/mp4", 
      };

      // HTTP Status 206 for Partial Content
      res.writeHead(206, headers);

      // create video read stream for this particular chunk
      const videoStream = fs.createReadStream(videoPath, { start, end });

      // Stream the video chunk to the client
      videoStream.pipe(res); */



      const resolvedPath = path.resolve('./assets/video.m3u8');
      res.sendFile(resolvedPath);

    } catch (error) {
      res.status(400).json({ error });
    }
  },
  segment: (req, res, next) => {
    try {
      const { segment } = req.params;
      console.log(req.params)
      const resolvedPath = path.resolve(`./assets/${segment}`);
      res.sendFile(resolvedPath);
    } catch (error) {
      res.status(400).json({ error });
    }
  },
  bandwidth: (req, res, next) => { 
    try {
      const { resolution } = req.params;
      console.log(req.params)
      const resolvedPath = path.resolve(`./assets/${resolution}`);
      res.sendFile(resolvedPath);
    } catch (error) {
      res.status(400).json({ error });
    }
  },
};