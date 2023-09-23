import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import ToggleButtons from "./ToggleButtons";

const AddComment = (props) => {
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
          />
        </div>
      </Box>

      <button>Post comment</button>
    </div>
  );
};

export default AddComment;
