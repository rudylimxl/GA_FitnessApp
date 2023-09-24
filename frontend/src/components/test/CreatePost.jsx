import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilepondPluginImagePreview from "filepond-plugin-image-preview";
import FilePondPluginMediaPreview from "filepond-plugin-media-preview";
import "filepond-plugin-media-preview/dist/filepond-plugin-media-preview.min.css";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import { useState, useRef } from "react";
import axios from "axios";
import "../../App.css";
import { TextField, Button, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

//FilePond is the component to browse/preview files before upload

registerPlugin(
  FilepondPluginImagePreview,
  FilePondPluginMediaPreview,
  FilePondPluginImageExifOrientation
);

// eslint-disable-next-line react/prop-types
const CreatePost = ({ setSuccess, closeModal }) => {
  const [files, setFiles] = useState("");
  const titleRef = useRef();
  const descriptionRef = useRef();
  const tagsRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();

    const userId = "6505b4f0940b11b3fe8a55d9";

    let formData = new FormData();
    //FormData() creates a multipart/form-data request body type instead of JSON
    //This is necessary to facilitate file uploading

    formData.append("user", userId);
    formData.append("title", titleRef.current.value);
    formData.append("description", descriptionRef.current.value);
    formData.append("tags", tagsRef.current.value);

    formData.append("files", files[0].file);

    axios
      .post("http://localhost:8000/posts/", formData, {})
      .then((res) => {
        if (res.status === 201) {
          console.log(res.data);
          closeModal();
          setSuccess(true);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div style={{ marginTop: "50px" }}>
      <Typography variant="h4">Create a new post</Typography>
      <form className="create-post" onSubmit={onSubmit}>
        <div className="input-wrapper">
          <TextField
            label="Post Title"
            inputRef={titleRef}
            autoComplete="off"
          />
          <TextField
            label="Post Description"
            inputRef={descriptionRef}
            autoComplete="off"
          />
          <TextField
            label="Post Tags, separated by comma"
            inputRef={tagsRef}
            autoComplete="off"
          />
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
        </div>
        <div className="form-group">
          <Button type="submit" variant="contained" endIcon={<SendIcon />}>
            Create Post
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
