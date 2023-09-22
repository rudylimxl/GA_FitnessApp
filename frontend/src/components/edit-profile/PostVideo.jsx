import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import { useRef, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import styles from "./EditProfile.module.css";
import CreatePost from "../test/CreatePost";

const PostVideo = () => {
  const [success, setSuccess] = useState(false);

  const dialogRef = useRef(null);

  //opens dialog window
  const openModal = () => {
    dialogRef.current.showModal();
  };

  //closes dialog window
  const closeModal = () => {
    dialogRef.current.close();
  };
  return (
    <>
      <div onClick={openModal}>
        <Button
          variant="contained"
          size="small"
          startIcon={<AddIcon />}
          sx={{ width: "150px" }}
        >
          Post video
        </Button>
      </div>

      <dialog ref={dialogRef}>
        <button onClick={closeModal} className={styles.closeModalBtn}>
          <CloseIcon />
        </button>
        <CreatePost setSuccess={setSuccess} closeModal={closeModal} />
      </dialog>

      <div className={styles.successAlert}>
        <Collapse in={success}>
          <Alert
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setSuccess(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{ mb: 2 }}
          >
            Post succesfully created!
          </Alert>
        </Collapse>
      </div>
    </>
  );
};

export default PostVideo;
