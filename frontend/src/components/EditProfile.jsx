import Button from "@mui/material/Button";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CloseIcon from "@mui/icons-material/Close";
import { useRef, useState } from "react";
import TextField from "@mui/material/TextField";
import styles from "./EditProfile.module.css";

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
  const [profilePic, setProfilePic] = useState();

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

  //TODO: handles updating of profile information to the database
  const handleUpdate = () => {
    //create formdata and append states to the form
    let formData = new FormData();
    for (const key in profileInfo) {
      formData.append(key, profileInfo[key]);
    }
    formData.append("files", profilePic[0]);

    //call API endpoint

    //if successfull, close the modal
    closeModal();
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
            <form className={styles.formData} onChange={handleChange}>
              <TextField
                name="name"
                label="Name"
                variant="outlined"
                size="small"
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
      </dialog>
    </>
  );
};

export default EditProfile;
