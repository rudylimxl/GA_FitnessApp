import Navbar from "../components/test/Navbar";
import PostDetails from "../components/post-details/PostDetails";
import styles from "./Post.module.css";
import Comments from "../components/post-details/Comments";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const styleModal = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Post = () => {
  const { state } = useLocation();
  // console.log(state);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  let renderMedia = "";
  if (state.contentType.includes("image")) {
    renderMedia = (
      <div>
        <img src={state.url}></img>
        <button onClick={handleOpen}>Edit Image</button>
      </div>
    );
  } else {
    renderMedia = (
      <div>
        <video src={state.url} width="80%" height="80%" controls></video>
        <button onClick={handleOpen}>Screenshot</button>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className={styles.layout}>
        {renderMedia}
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={styleModal}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Modal>
        <div>
          <PostDetails data={state} />
        </div>
        <div className={styles.comments}>
          <Comments />
        </div>
      </div>
    </>
  );
};

export default Post;
