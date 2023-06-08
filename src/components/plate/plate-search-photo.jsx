import React, { useState, useRef } from "react";
import Webcam from "react-webcam";
import { Button } from "../shared/ui";

export const PlateSearchByPhoto = () => {
  const [isCameraOn, setIsCameraOn] = useState(false);
  const webcamRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const agent = navigator.userAgent.toLowerCase();
  const isMobile = /iphone|ipad|ipod|android/.test(agent);

  const videoConstraints = {
    facingMode: {
      exact: isMobile ? "environment" : "user",
    },
  };

  const capture = () => {
    const image = webcamRef.current.getScreenshot();
    setSelectedImage(image);
  };

  const handleCameraToggle = () => {
    setIsCameraOn(!isCameraOn);
  };

  const handleDelete = () => {
    setSelectedImage(null);
  };

  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append("image", selectedImage);

      // const result = await axios.post(endpoint, formData, {
      //   headers: {
      //     "Content-Type": "multipart/form-data",
      //   },
      // });

      console.log(selectedImage);
      console.log(formData.get("image"));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Button variant="link" onClick={handleCameraToggle}>
        {isCameraOn ? "Apagar cámara" : "Encender cámara"}
      </Button>

      {isCameraOn && (
        <div className="">
          <div>
            <Webcam
              ref={webcamRef}
              videoConstraints={videoConstraints}
              width={200}
              height={100}
              screenshotFormat="image/jpeg"
            />
          </div>
          <div className="mt-2">
            <Button
              variant="primary-outlined"
              icon="PhotoIcon"
              onClick={capture}
            >
              Tomar foto
            </Button>
          </div>
        </div>
      )}

      {selectedImage && (
        <div className="mt-2">
          <img src={selectedImage} alt="Selected" />
          <Button variant="link-danger" onClick={handleDelete}>
            Eliminar foto
          </Button>
        </div>
      )}
      <div className="mt-2">
        <Button
          variant="secondary"
          fullWidth
          onClick={handleSubmit}
          disabled={!selectedImage}
        >
          Buscar
        </Button>
      </div>
    </>
  );
};
