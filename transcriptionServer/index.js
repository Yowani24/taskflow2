// require("dotenv").config();
// const fs = require("fs");
// const OpenAI = require("openai");

// const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
// process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

// async function main() {
//   const transcription = await openai.audio.transcriptions.create({
//     file: fs.createReadStream("audio.mp3"),
//     model: "whisper-1",
//   });

//   console.log(transcription.text);
// }
// main();

require("dotenv").config();
const express = require("express");
const fs = require("fs");
const OpenAI = require("openai");
const cors = require("cors");

const app = express();
// const port = process.env.PORT || 3001;
const port = 3001;

app.use(cors());
app.use(express.json());

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

app.post("/transcription", async (req, res) => {
  try {
    const transcription = await openai.audio.transcriptions.create({
      file: fs.createReadStream("audio.mp3"),
      model: "whisper-1",
    });

    // console.log(transcription.text);
    res.json({ transcription: transcription.text });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// require("dotenv").config();
// const express = require("express");
// const fs = require("fs");
// const OpenAI = require("openai");
// const axios = require("axios");
// const cors = require("cors");
// const multer = require("multer");

// const app = express();
// // const port = process.env.PORT || 3001;
// const port = 3001;

// app.use(cors());
// app.use(express.json());

// const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
// process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

// // Multer setup for handling file uploads
// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage });

// app.post("/transcribe", upload.single("audio"), async (req, res) => {
//   try {
//     const audioBuffer = req.file.buffer; // Access the uploaded audio file buffer

//     // Assuming "whisper-1" is the OpenAI model for transcription
//     const transcription = await openai.audio.transcriptions.create({
//       audio: audioBuffer,
//       model: "whisper-1",
//     });

//     console.log(transcription.text);
//     res.json({ transcription: transcription.text });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

// require("dotenv").config();
// const express = require("express");
// const OpenAI = require("openai");
// const cors = require("cors");

// const app = express();
// const port = process.env.PORT || 3001;

// app.use(cors());
// app.use(express.json());

// const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
// process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

// // Avoid setting NODE_TLS_REJECT_UNAUTHORIZED to "0" in production
// // Instead, ensure your server and OpenAI API are using secure connections

// app.post("/transcribe", async (req, res) => {
//   try {
//     const { audio } = req.body;

//     // Assuming "whisper-1" is the OpenAI model for transcription
//     const transcription = await openai.audio.transcriptions.create({
//       audio,
//       model: "whisper-1",
//     });

//     console.log("Transcription:", transcription.text);
//     res.json({ transcription: transcription.text });
//   } catch (error) {
//     console.error("Error during transcription:", error.message);
//     res
//       .status(500)
//       .json({ error: "Internal Server Error", details: error.message });
//   }
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

// require("dotenv").config();
// const express = require("express");
// const OpenAI = require("openai");
// const cors = require("cors");

// const app = express();
// const port = process.env.PORT || 3001;

// app.use(cors());
// app.use(express.json());

// const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
// process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

// app.post("/transcribe", async (req, res) => {
//   try {
//     const { audio } = req.body;

//     // Assuming "whisper-1" is the OpenAI model for transcription
//     const transcription = await openai.audio.transcriptions.create({
//       file: audio, // Change 'audio' to 'file' to match OpenAI API expectations
//       model: "whisper-1",
//     });

//     console.log("Transcription:", transcription.text);
//     res.json({ transcription: transcription.text });
//   } catch (error) {
//     console.error("Error during transcription:", error.message);
//     res
//       .status(500)
//       .json({ error: "Internal Server Error", details: error.message });
//   }
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

// require("dotenv").config();
// const express = require("express");
// const OpenAI = require("openai");
// const multer = require("multer");
// const cors = require("cors");

// const app = express();
// const port = process.env.PORT || 3001;

// app.use(cors());
// app.use(express.json());

// const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
// process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage });

// app.post("/transcribe", upload.single("file"), async (req, res) => {
//   try {
//     const audioBuffer = req.file.buffer;

//     // Assuming "whisper-1" is the OpenAI model for transcription
//     const transcription = await openai.audio.transcriptions.create({
//       file: audioBuffer,
//       model: "whisper-1",
//     });

//     console.log("Transcription:", transcription.text);
//     res.json({ transcription: transcription.text });
//   } catch (error) {
//     console.error("Error during transcription:", error.message);
//     res
//       .status(500)
//       .json({ error: "Internal Server Error", details: error.message });
//   }
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

// require("dotenv").config();
// const express = require("express");
// const OpenAI = require("openai");
// const multer = require("multer");
// const cors = require("cors");

// const app = express();
// const port = process.env.PORT || 3001;

// app.use(cors());
// app.use(express.json());

// const openai = new OpenAI({ key: process.env.OPENAI_API_KEY }); // Update to use 'key' instead of 'apiKey'
// process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

// // Set up multer middleware
// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage });

// // Use multer middleware for handling file uploads
// app.post("/transcribe", upload.single("file"), async (req, res) => {
//   try {
//     if (!req.file) {
//       return res.status(400).json({ error: "No file provided" });
//     }

//     const audioBuffer = req.file.buffer;

//     // Assuming "whisper-1" is the OpenAI model for transcription
//     const transcription = await openai.audio.transcriptions.create({
//       audio: { content: audioBuffer },
//       model: "whisper-1",
//     });

//     console.log("Transcription:", transcription.data[0].text);
//     res.json({ transcription: transcription.data[0].text });
//   } catch (error) {
//     console.error("Error during transcription:", error.message);
//     res
//       .status(error.response ? error.response.status : 500)
//       .json({ error: "Internal Server Error", details: error.message });
//   }
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
