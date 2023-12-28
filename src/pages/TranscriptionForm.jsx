// import React, { useState } from "react";
// import axios from "axios";

// const TranscriptionForm = () => {
//   const [file, setFile] = useState(null);

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append("audio", file);

//     try {
//       const response = await axios.post(
//         "http://localhost:3001/api/transcribe",
//         formData
//       );
//       console.log("TRANSCRIÇÃO:", response.data.text);
//     } catch (error) {
//       console.error("Error transcribing audio:", error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="file" accept="audio/*" onChange={handleFileChange} />
//       <button type="submit">Transcribe</button>
//     </form>
//   );
// };

// export default TranscriptionForm;

// import React, { useState } from "react";
// import axios from "axios";

// function TranscriptionForm() {
//   const [audioFile, setAudioFile] = useState(null);
//   const [transcription, setTranscription] = useState(null);

//   const handleFileChange = (event) => {
//     setAudioFile(event.target.files[0]);
//   };

//   const handleTranscription = async () => {
//     try {
//       const formData = new FormData();
//       formData.append("audio", audioFile);
//       formData.append(
//         "api_key",
//         "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"
//       );

//       const response = await axios.post(
//         "http://localhost:3001/transcribe",
//         formData
//       );

//       setTranscription(response.data.transcription);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//       <input type="file" accept="audio/*" onChange={handleFileChange} />
//       <button onClick={handleTranscription}>Transcribe</button>

//       {transcription && (
//         <div>
//           <h2>Transcription Result:</h2>
//           <p>{transcription}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default TranscriptionForm;

// import React, { useState } from "react";
// import axios from "axios";

// function TranscriptionForm() {
//   const [audioFile, setAudioFile] = useState(null);
//   const [transcription, setTranscription] = useState(null);

//   const handleFileChange = (event) => {
//     setAudioFile(event.target.files[0]);
//   };

//   const handleTranscription = async () => {
//     try {
//       const formData = new FormData();
//       formData.append("audio", audioFile);

//       const response = await axios.post(
//         "http://localhost:3001/transcribe",
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );

//       setTranscription(response.data.transcription);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//       <input type="file" accept="audio/*" onChange={handleFileChange} />
//       <button onClick={handleTranscription}>Transcribe</button>

//       {transcription && (
//         <div>
//           <h2>Transcription Result:</h2>
//           <p>{transcription}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default TranscriptionForm;

// import React, { useState } from "react";
// import axios from "axios";
// import audioMp3 from "../audioFiles/audio_de_teste.mp3";

// function TranscriptionForm() {
//   const [audioFile, setAudioFile] = useState(null);
//   const [transcription, setTranscription] = useState(null);

//   const handleFileChange = (event) => {
//     setAudioFile(event.target.files[0]);
//   };

//   // const handleTranscription = async () => {
//   //   try {
//   //     const formData = new FormData();
//   //     formData.append("audio", audioFile);

//   //     const response = await axios.post(
//   //       "http://localhost:3001/transcribe",
//   //       formData
//   //     );

//   //     setTranscription(response.data.transcription);
//   //   } catch (error) {
//   //     console.error(error);
//   //   }
//   // };

//   const handleTranscription = async () => {
//     try {
//       const formData = new FormData();
//       formData.append("audio", audioFile);

//       const response = await axios.post(
//         "http://localhost:3001/transcribe",
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );

//       setTranscription(response.data.transcription);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//       <input type="file" accept="audio/*" onChange={handleFileChange} />
//       <button onClick={handleTranscription}>Transcribe 5</button>

//       {transcription && (
//         <div>
//           <h2>Transcription Result:</h2>
//           <p>{transcription}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default TranscriptionForm;

import React, { useState } from "react";
import axios from "axios";

function TranscriptionForm() {
  const [audioFile, setAudioFile] = useState(null);
  const [transcription, setTranscription] = useState(null);
  const [error, setError] = useState(null);

  const handleFileChange = (event) => {
    setAudioFile(event.target.files[0]);
  };

  // const handleTranscription = async () => {
  //   try {
  //     if (!audioFile) {
  //       setError("Please select an audio file.");
  //       return;
  //     }

  //     const formData = new FormData();
  //     formData.append("audio", audioFile);

  //     const response = await axios.post(
  //       "http://localhost:3001/transcribe",
  //       formData,
  //       {
  //         headers: {
  //           "Content-Type": "multipart/form-data",
  //         },
  //       }
  //     );

  //     setTranscription(response.data.transcription);
  //     setError(null);
  //   } catch (error) {
  //     console.error(error);
  //     setError("An error occurred during transcription.");
  //   }
  // };
  const handleTranscription = async () => {
    try {
      if (!audioFile) {
        setError("Please select an audio file.");
        return;
      }

      const formData = new FormData();
      formData.append("audio", audioFile);

      // const response = await axios.post(
      //   "http://localhost:3001/transcribe",
      //   formData,
      //   {
      //     headers: {
      //       "Content-Type": "multipart/form-data",
      //     },
      //   }
      // );

      // setTranscription(response.data.transcription);
      setError(null);
    } catch (error) {
      console.error(error);

      if (error.response && error.response.status === 500) {
        setError("Internal server error. Please try again later.");
      } else {
        setError("An error occurred during transcription.");
      }
    }
  };

  return (
    <div>
      <input type="file" accept="audio/*" onChange={handleFileChange} />
      <button onClick={handleTranscription}>Transcribe</button>

      {error && (
        <div style={{ color: "red", marginTop: "10px" }}>
          <p>{error}</p>
        </div>
      )}

      {transcription !== null && (
        <div>
          <h2>Transcription Result:</h2>
          <p>{transcription}</p>
        </div>
      )}
    </div>
  );
}

export default TranscriptionForm;
