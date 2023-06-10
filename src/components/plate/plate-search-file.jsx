import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "../shared/ui";
import { usePlateByFile } from "./hooks/use-plate-file";
import { searchPlate } from "../../store/car";

export const PlateSearchByFile = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [fileName, setFileName] = useState("");
  const { mutateAsync: searchPlateMutate } = usePlateByFile();
  const dispatch = useDispatch();

  const handleUpload = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
    setFileName(file.name);
  };

  const handleDelete = () => {
    setSelectedImage(null);
    setFileName("");
  };

  const handleSubmit = async () => {
    try {
      const resp = await searchPlateMutate(selectedImage);
      dispatch(searchPlate(resp));
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
          <img src={URL.createObjectURL(selectedImage)} alt="Selected" />
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
