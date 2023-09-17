import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilepondPluginImagePreview from "filepond-plugin-image-preview";
import FilePondPluginMediaPreview from "filepond-plugin-media-preview";
import "filepond-plugin-media-preview/dist/filepond-plugin-media-preview.min.css";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import { useState, useRef } from "react";
import axios from "axios";

//FilePond is the component to browse/preview files before upload

registerPlugin(
  FilepondPluginImagePreview,
  FilePondPluginMediaPreview,
  FilePondPluginImageExifOrientation
);

const CreatePost = () => {
  const [files, setFiles] = useState("");
  const titleRef = useRef();
  const descriptionRef = useRef();
  const tagsRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();

    let formData = new FormData();
    //FormData() creates a multipart/form-data request body type instead of JSON
    //This is necessary to facilitate file uploading

    formData.append("title", titleRef.current.value);
    formData.append("description", descriptionRef.current.value);
    formData.append("tags", tagsRef.current.value);

    formData.append("files", files[0].file);

    axios.post("http://localhost:8000/posts/", formData, {}).then((res) => {
      console.log(res.data);
      alert("Post uploaded!");
    });
  };

  return (
    <div>
      <h4>Create Posts</h4>
      <form className="create-post" onSubmit={onSubmit}>
        <div className="input-wrapper">
          <input
            type="text"
            name="postTitle"
            placeholder="Post Title"
            className="post-title"
            ref={titleRef}
          ></input>
          <input
            type="text"
            name="postDescription"
            placeholder="Post Description"
            className="post-description"
            ref={descriptionRef}
          ></input>
          <input
            type="text"
            name="postTags"
            placeholder="Post Tags, separated by comma"
            className="post-tags"
            ref={tagsRef}
          ></input>
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
          <button className="btn" type="submit">
            Select file above, then click here to Upload
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
