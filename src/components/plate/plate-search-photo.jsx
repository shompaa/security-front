import React, { useState, useRef } from "react";
import Webcam from "react-webcam";
import { Button } from "../shared/ui";
import { useDispatch } from "react-redux";
import { usePlateByFile } from "./hooks/use-plate-file";

export const PlateSearchByPhoto = () => {
  const [isCameraOn, setIsCameraOn] = useState(false);
  const webcamRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const dispatch = useDispatch();
  const { mutateAsync: searchPlate } = usePlateByFile();

  const agent = navigator.userAgent.toLowerCase();
  const isMobile = /iphone|ipad|ipod|android/.test(agent);

  const videoConstraints = {
    facingMode: {
      exact: isMobile ? "environment" : "user",
    },
  };

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    const imageBlob = dataURLtoBlob(imageSrc);

    const file = new File([imageBlob], "image.jpg", {
      type: "image/jpeg",
    });

    setSelectedImage(file);
  };

  const handleCameraToggle = () => {
    setIsCameraOn(!isCameraOn);
  };

  const handleDelete = () => {
    setSelectedImage(null);
  };

  const handleSubmit = async () => {
    try {
      const resp = await searchPlate(selectedImage);
      console.log(resp);
    } catch (error) {
      console.error(error);
    }
  };

  const dataURLtoBlob = (dataurl) => {
    let arr = dataurl.split(","),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], { type: mime });
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
          <img src={URL.createObjectURL(selectedImage)} alt="Selected" />
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
