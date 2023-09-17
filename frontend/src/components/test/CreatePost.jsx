import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilepondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import { useState } from "react";
import axios from "axios";

registerPlugin(FilepondPluginImagePreview, FilePondPluginImageExifOrientation);

const CreatePost = () => {
  const [files, setFiles] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    let formData = new FormData();
    formData.append("files", files[0].file);
    // formData.append("name", "rudy");
    console.log(files[0]);

    console.log(formData);

    axios
      .post("http://localhost:8000/posts/upload", formData, {})
      .then((res) => {
        console.log(res.data);
        alert("file uploaded!");
      });
  };

  return (
    <div>
      <h4>Create Posts</h4>
      <form onSubmit={onSubmit}>
        <div className="filepond-wrapper">
          <FilePond
            files={files}
            onupdatefiles={setFiles}
            allowMultiple={false}
            server={null}
            instantUpload={false}
            allowImagePreview={true}
          ></FilePond>
        </div>
        <div className="form-group">
          <button className="btn" type="submit">
            Select file above, then click here to Upload
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
