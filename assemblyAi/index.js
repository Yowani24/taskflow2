import express from "express";
import multer from "multer";
import bodyParser from "body-parser";
import { AssemblyAI } from "assemblyai";
import cors from "cors";

const app = express();
const port = 3001;
const apiKey = "b2937b1ae7604a4b8ea5fe1fd0fab52f";

const client = new AssemblyAI({ apiKey });
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const storage = multer.memoryStorage();
const upload = multer({ storage });

app.post("/upload", upload.single("audio"), async (req, res) => {
  try {
    const audioBuffer = req.file.buffer;

    const params = {
      audio: audioBuffer,
      speaker_labels: true,
    };

    const transcript = await client.transcripts.transcribe(params);
    res.json(transcript);
  } catch (error) {
    console.error("Error transcribing audio:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
