import { faIcons } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function FormImage({ image, setSelectedFile, setValue, error }) {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    setValue("icon", URL.createObjectURL(file));
  };

  return (
    <>
      {image?.length > 0 ? (
        <>
          <label htmlFor="image">
            <img
              src={image}
              alt="Preview"
              className="mx-auto h-20 w-20 cursor-pointer"
            />
          </label>
          <p className="text-center text-sm text-red-600">{error}</p>

          <input
            type="file"
            id="image"
            className="hidden"
            onChange={handleFileChange}
          />
        </>
      ) : (
        <>
          <label
            htmlFor="image"
            className={`${error && "border-red-600"} hover:bordtext-center relative mx-auto h-20 w-20 cursor-pointer rounded-md border-2 border-dashed px-5 text-center`}
          >
            <FontAwesomeIcon icon={faIcons} className="mt-4 text-4xl" />

            <input
              type="file"
              id="image"
              className="hidden"
              onChange={handleFileChange}
            />
          </label>
          <p className="text-center text-sm text-red-600">{error}</p>
        </>
      )}
    </>
  );
}

export default FormImage;
