import { useState } from "react";
import { Button } from "../shared/ui";

export const PlateSearchByFile = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [fileName, setFileName] = useState("");

  const handleUpload = (event) => {
    const file = event.target.files[0];
    const fileUrl = URL.createObjectURL(file);
    setSelectedImage(fileUrl);
    setFileName(file.name);
  };

  const handleDelete = () => {
    setSelectedImage(null);
    setFileName("");
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
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="relative inline-flex gap-x-1">
        <input
          type="file"
          accept="image/*"
          className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
          onChange={handleUpload}
        />
        <Button variant="link">Seleccionar archivo</Button>
        <p>{fileName}</p>
      </div>

      {selectedImage && (
        <div className="mt-2 gap-y-1">
          <img src={selectedImage} alt="Selected" />
          <Button variant="link-danger" onClick={handleDelete}>
            Eliminar archivo
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
