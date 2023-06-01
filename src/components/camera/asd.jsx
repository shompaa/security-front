import React, { useState } from "react";
import Webcam from "react-webcam";
import Tesseract from "tesseract.js";

export const Asd = () => {
  // const [imageSrc, setImageSrc] = useState(null);
  const [isCameraOn, setIsCameraOn] = useState(false);
  const [plateData, setPlateData] = useState('');
  const webcamRef = React.useRef(null);

  const agent = navigator.userAgent.toLowerCase();
  const isMobile = /iphone|ipad|ipod|android/.test(agent);
  console.log(isMobile);
  //   const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  const videoConstraints = {
    facingMode:{
        exact: isMobile ? "environment" : "user",
    }
  };

  const capture = async () => {
    // Capturar una imagen desde la cámara
    const image = webcamRef.current.getScreenshot();

    // Utilizar Tesseract.js para reconocer el texto en la imagen
    // const data = await Tesseract.recognize(image, {
    //     lang: 'spa', // idioma español
    //     tessedit_char_whitelist: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789' // solo caracteres permitidos para patentes
    // });

    console.log(image);

    const data = await Tesseract.recognize(image, {
      tessedit_char_whitelist: "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
    }).then((result) => {
      console.log(result);
      return result.data;
    });

    //   image,
    //   {
    //     lang: "eng",
    //     tessedit_char_whitelist: "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
    //   }
    // ).then(({ data: { text } }) => {
    //   console.log(text);
    // })
    // .catch((err) => {
    //     console.log(err);
    // });

    console.log(data);

    // // Extraer el texto reconocido
    const text = data.text;

    // // Buscar patrón de patente en el texto reconocido

    // const plateNumber = text.match(/[A-Z]{3}\d{4}[A-Z]{2}/g);
    // if (plateNumber) {
      setPlateData(text);
    // } else {
    //   setPlateData("No se encontró patente");
    // }
  };

  const handleCameraToggle = () => {
    setIsCameraOn(!isCameraOn);
  };

  return (
    <div>
      <h1>Reconocimiento de Patentes</h1>
      <h2>{agent}</h2>
      <h2>is Mobile: {isMobile ? "si" : "no"}</h2>
      <h2>facingMode: {videoConstraints.facingMode.exact}</h2>

      <button onClick={handleCameraToggle}>Activar/Desactivar Cámara</button>
      {isCameraOn && (
        <>
          <Webcam
            ref={webcamRef}
            videoConstraints={videoConstraints}
            width={200}
            height={100}
            screenshotFormat="image/jpeg"
          />
          <button onClick={capture}>Capture</button>

          {plateData && <div>{plateData}</div>}
        </>
        //   {plateData && <div>{plateData}</div>}
      )}
    </div>
  );
};
