import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Button, IconButton } from "@material-tailwind/react";
import { IoCopy } from "react-icons/io5";
import { GiSoundWaves } from "react-icons/gi";
import { Rings } from "react-loader-spinner";
import logo from "../assets/flexflowlogo2.png";
import { Link } from "react-router-dom";
import { HiHome } from "react-icons/hi2";

const TranscriptionForm = () => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loadingAudio, setLoadingAudio] = useState(false);

  const [fileName, setFileName] = useState("");
  const fileInputRef = useRef(null);
  const textRef = useRef(null);

  const handleCopyText = () => {
    if (textRef.current) {
      navigator.clipboard
        .writeText(textRef.current.innerText)
        .then(() => {
          console.log("Text copied to clipboard:", textRef.current.innerText);
        })
        .catch((err) => {
          console.error("Error copying to clipboard:", err);
        });
    }
  };

  const [transcriptionData, setTranscriptionData] = useState("");

  useEffect(() => {
    const savedTranscription = localStorage.getItem("transcriptionData");
    if (savedTranscription) {
      setTranscriptionData(savedTranscription);
    }
  });

  const onFileChange = (event) => {
    try {
      setLoadingAudio(true);
      const selectedFile = event.target.files[0];

      if (!selectedFile) {
        throw new Error("No file selected");
      }

      setFile(selectedFile);
      setFileName(selectedFile.name);
    } catch (error) {
      console.error("Error during file selection:", error.message);
      setFile(null);
      setFileName("");
    } finally {
      setLoadingAudio(false);
    }
  };

  const uploadAudio = async () => {
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("audio", file);

      const response = await axios.post(
        "http://localhost:3001/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const newText = response.data.text;

      localStorage.setItem("transcriptionData", newText);

      setTranscriptionData(newText);
    } catch (error) {
      console.error("Error uploading and transcribing audio:", error);

      if (error.response) {
        alert(`Error: ${error.response.data.error}`);
      } else {
        alert("An unexpected error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  const dynamicClassName = `relative textDisplayGround border-8 border-gray-700 bg-gray-900 text-gray-500 p-5 w-[80%] mt-5 rounded-2xl max-h-[60%] max-h-[600px] overflow-auto scrollbar-hide`;

  return (
    <div className="transcriptionBkgd w-full h-screen flex flex-col items-center justify-start">
      <div className="w-full flex items-center justify-between p-5 md:px-20 md:pt-10">
        <img
          className="object-cover object-center w-[150px] md:w-[200px] bg-purple-50 p-2 rounded-md"
          src={logo}
          alt="nature image"
        />
        <Link to="/home">
          <IconButton size="sm">
            <HiHome size={18} color="#fff" />
          </IconButton>
        </Link>
      </div>
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-10">
        <input
          ref={fileInputRef}
          type="file"
          accept="audio/*"
          onChange={onFileChange}
          className="hidden"
        />

        <Button
          onClick={() => fileInputRef.current.click()}
          className="bg-green-500 w-[300px] h-[50px] flex items-center justify-center"
        >
          {file === null ? (
            loadingAudio ? (
              "Carregando..."
            ) : (
              <span className="flex items-center justify-center gap-2">
                Buscar áudio
                <GiSoundWaves size={40} />
              </span>
            )
          ) : fileName.length > 16 ? (
            `${fileName.substring(0, 16)}...`
          ) : (
            fileName
          )}
        </Button>

        <div>
          <Button
            onClick={uploadAudio}
            disabled={file === null || loading}
            className="h-[50px] flex items-center justify-center text-white"
          >
            {loading ? "Transcrevendo..." : "Transcrever"}
          </Button>
        </div>
      </div>

      {loading ? (
        <div className="mt-[10%] flex flex-col items-center">
          <Rings
            height="200"
            width="200"
            color="#591fc5"
            radius="16"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="rings-loading"
          />
          <p className="text-white text-4xl">Transcrevendo...</p>
          <span className="text-white mt-2">Aguarde um momento</span>
        </div>
      ) : (
        <>
          {transcriptionData && transcriptionData.length === 0 ? (
            ""
          ) : (
            <div className="relative w-full flex flex-col mt-[2%] items-center justify-center">
              <span
                onClick={handleCopyText}
                className="top-4 md:top-[-10px] self-end mr-[10%] flex items-center gap-2 bg-white md:bg-gray-800 rounded-full px-2 py-1 cursor-pointer active:bg-gray-900 transition text-black md:text-green-300"
              >
                Copiar texto
                <IoCopy size={16} />
              </span>
              <p className={dynamicClassName} ref={textRef}>
                {transcriptionData}
              </p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default TranscriptionForm;
