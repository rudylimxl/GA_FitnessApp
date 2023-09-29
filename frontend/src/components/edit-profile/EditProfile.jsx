import Button from "@mui/material/Button";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CloseIcon from "@mui/icons-material/Close";
import { useRef, useState } from "react";
import TextField from "@mui/material/TextField";
import styles from "./EditProfile.module.css";
import axios from "axios";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";

// Import React FilePond
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const EditProfile = () => {
  const [profileInfo, setProfileInfo] = useState({});
  //state that stores profile picture
  const [profilePic, setProfilePic] = useState([]);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const dialogRef = useRef(null);

  //opens dialog window
  const openModal = () => {
    dialogRef.current.showModal();
  };

  //closes dialog window
  const closeModal = () => {
    dialogRef.current.close();
  };

  //sync profileInfo state with user input inside the edit profile dialog
  const handleChange = (e) => {
    setProfileInfo({
      ...profileInfo,
      [e.target.name]: e.target.value,
    });
  };

  //handles updating of profile information to the database
  const handleUpdate = () => {
    //create formdata and append states to the form
    let formData = new FormData();
    for (const key in profileInfo) {
      formData.append(key, profileInfo[key]);
    }
    if (profilePic.length !== 0) {
      formData.append("files", profilePic[0].file);
    }

    const userDetailId = sessionStorage.getItem("userdetail");

    //Submit put request to backend server
    axios
      .put(
        `https://strongerfitnessapp.onrender.com/users/${userDetailId}`,
        formData
      )
      .then((res) => {
        //if successfull, close the modal
        if (res.status === 200) {
          closeModal();
          setSuccess(true);
        } else {
          setError(true);
        }
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  };

  return (
    <>
      <div onClick={openModal}>
        <Button
          variant="outlined"
          size="small"
          startIcon={<AccountCircleIcon />}
          sx={{ width: "150px" }}
        >
          Edit Profile
        </Button>
      </div>

      <dialog ref={dialogRef}>
        <button onClick={closeModal} className={styles.closeModalBtn}>
          <CloseIcon />
        </button>
        <h1>Edit your profile</h1>
        <div className={styles.container}>
          <div className={styles.containerLeft}>
            <h3>Profile picture</h3>
            <FilePond
              files={profilePic}
              onupdatefiles={setProfilePic}
              allowMultiple={false}
              server={null}
              instantUpload={false}
              allowImagePreview={true}
            />
          </div>
          <div className={styles.containerRight}>
            <h3>Profile details</h3>
            <form
              className={styles.formData}
              onChange={handleChange}
              id="editProfile"
            >
              <TextField
                name="name"
                label="Name"
                variant="outlined"
                size="small"
                autoComplete="off"
              />
              <TextField
                name="age"
                label="Age"
                variant="outlined"
                size="small"
              />
              <TextField
                name="gender"
                id="select-gender"
                select
                label="Select your gender"
                defaultValue="Male"
                size="small"
                SelectProps={{
                  native: true,
                }}
              >
                <option key="Male" value="Male">
                  {"Male"}
                </option>
                <option key="Female" value="Female">
                  {"Female"}
                </option>
              </TextField>
              <TextField
                id="biography"
                name="bio"
                label="Biography"
                variant="outlined"
                multiline
                rows={4}
                size="small"
              />
            </form>
          </div>
        </div>
        <div onClick={handleUpdate}>
          <Button variant="contained" size="small">
            Update
          </Button>
        </div>
        <div className={styles.errorAlert}>
          <Collapse in={error}>
            <Alert
              severity="error"
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setError(false);
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
              sx={{ mb: 2 }}
            >
              Error updating profile, please try again..
            </Alert>
          </Collapse>
        </div>
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
            Profile succesfully updated!
          </Alert>
        </Collapse>
      </div>
    </>
  );
};

export default EditProfile;
