// import express from "express";
// import cors from "cors";
// import multer from "multer";
// import OpenAI from "openai";
// import https from "https";
// import fs from "fs";
// import fetch from "node-fetch";
// import bodyParser from "body-parser";

// global.Headers = fetch.Headers;

// const app = express();
// const port = 3001; // or any other port you prefer

// // Allow self-signed certificates for testing purposes
// process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

// const openai = new OpenAI({
//   apiKey: "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",
//   apiUrl: "http://api.openai.com",
//   fetchConfig: { agent: new https.Agent({ rejectUnauthorized: false }) },
// });

// // Set up multer for handling file uploads
// // const storage = multer.memoryStorage();
// // const upload = multer({ storage: storage });
// const upload = multer({ storage: multer.memoryStorage() });
// app.use(cors());

// app.post("/transcribe", upload.single("audio"), async (req, res) => {
//   try {
//     const transcription = await openai.audio.transcriptions.create({
//       file: {
//         data: req.file.buffer,
//         name: req.file.originalname,
//         type: req.file.mimetype,
//       },
//       model: "whisper-1",
//     });

//     res.json({ transcription: transcription.text });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

// const OpenAI = require("openai");
// const fs = require("fs");
// const https = require("https");

// process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
// const openai = new OpenAI({
//   apiKey: "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",
//   apiUrl: "http://api.openai.com",
//   fetchConfig: { agent: new https.Agent({ rejectUnauthorized: false }) },
// });

// async function main() {
//   try {
//     const transcription = await openai.audio.transcriptions.create({
//       file: fs.createReadStream("../audioFiles/audio.mp3"),
//       model: "whisper-1",
//     });

//     console.log(transcription.text);
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }

// main();

// const OpenAI = require("openai");
// const fs = require("fs");

// process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

// const openai = new OpenAI({
//   apiKey: "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",
//   // Do not specify apiUrl to use the default HTTPS endpoint
// });

// async function main() {
//   try {
//     const transcription = await openai.audio.transcriptions.create({
//       file: fs.createReadStream("../audioFiles/audio.mp3"),
//       model: "whisper-1",
//     });

//     console.log(transcription.text);
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }

// main();

// const OpenAI = require("openai");
// const fs = require("fs");

// process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

// const openai = new OpenAI({
//   apiKey: "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",
//   timeout: 60000,
// });

// async function main() {
//   try {
//     const transcription = await openai.audio.transcriptions.create({
//       file: fs.createReadStream("../audioFiles/audio.mp3"),
//       model: "whisper-1",
//     });

//     console.log("TRANSCRIÇÃO:", transcription.text);
//   } catch (error) {
//     if (error.type === "system" && error.code === "ECONNRESET") {
//       console.error(
//         "Network error: The connection was reset. Please check your network."
//       );
//     } else {
//       console.error("Error:", error);
//     }
//   }
// }

// main();

const OpenAI = require("openai");
const fs = require("fs");

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
const openai = new OpenAI({
  apiKey: "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",
  timeout: 60000,
});

async function main() {
  try {
    const audioFilePath = "../audioFiles/audio.mp3";

    // Check if the file exists before attempting to read
    if (!fs.existsSync(audioFilePath)) {
      console.error("Error: Audio file does not exist.");
      return;
    }

    const transcription = await openai.audio.transcriptions.create({
      file: fs.createReadStream(audioFilePath),
      model: "whisper-1",
    });

    console.log("TRANSCRIÇÃO:", transcription.text);
  } catch (error) {
    if (error.type === "system" && error.code === "ECONNRESET") {
      console.error(
        "Network error: The connection was reset. Please check your network."
      );
    } else {
      console.error("Error:", error);
    }
  }
}

main();
