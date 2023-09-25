import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import ToggleButtons from "./ToggleButtons";
import { useRef } from "react";
import axios from "axios";

const AddComment = (props) => {
  const commentRef = useRef();
  const userDetailId = "6502f3d51da1f697ef88187c";

  const submitComment = () => {
    function dataURItoBlob(dataURI) {
      // convert base64 img data to blob representation
      var byteString;
      if (dataURI.split(",")[0].indexOf("base64") >= 0)
        byteString = atob(dataURI.split(",")[1]);
      else byteString = unescape(dataURI.split(",")[1]);
      var mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];
      var ia = new Uint8Array(byteString.length);
      for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
      }
      return new Blob([ia], { type: mimeString });
    }
    //idk man, copy paste from stackoverflow

    let formData = new FormData();
    formData.append("user", userDetailId);
    formData.append("comment", commentRef.current.value);
    if (props.editedImage !== "") {
      const file = dataURItoBlob(props.editedImage);
      formData.append("files", file);
    }

    axios
      .post(`http://localhost:8000/posts/${props._id}/comments/`, formData, {})
      .then((res) => {
        if (res.status === 201) {
          console.log(res.data);
          // closeModal();
          // setSuccess(true);
          props.alert(true);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h4 style={{ textAlign: "left", marginBottom: "8px" }}>Add comment:</h4>
      <ToggleButtons />
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": {
            whiteSpace: "normal",
            width: "100%",
            fontSize: "0.875rem",
            fontWeight: "700",
          },
        }}
        noValidate
        autoComplete="off"
      >
        <div className="post-comment-wrapper">
          <img className="post-comment-media" src={props.editedImage}></img>
          <TextField
            id="outlined-multiline-flexible"
            label="Comment"
            multiline
            rows={5}
            inputRef={commentRef}
          />
        </div>
      </Box>

      <button onClick={submitComment}>Post comment</button>
    </div>
  );
};

export default AddComment;
