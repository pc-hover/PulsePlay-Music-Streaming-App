import { cloudinary_upload_preset } from "../../config.js";
import { openUploadWidget } from "../../utils/CloudinaryServices";

const CloudinaryUpload = ({ setUrl, setName }) => {
  const uploadWidget = () => {

    let myUploadWidget = openUploadWidget(
      {
        cloudName: "dq5mq7ubq",
        uploadPreset: cloudinary_upload_preset,
        sources: ["local"]
      },
      function (error, result) {
        if (!error && result.event === "success") {
          console.log(result.info);
          setUrl(result.info.secure_url);
          setName(result.info.original_filename)
        } else {
          if (error) {
            console.log(error);
          }
        }
      }
    );
    myUploadWidget.open();
  };

  return (
    <button className="greenButton bg-white text-black rounded-full p-4 mt-3 font-semibold" onClick={uploadWidget}>
      Select Track
    </button>
  );
};

export default CloudinaryUpload;
