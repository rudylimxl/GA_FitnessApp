import {
  uploadToCloudStorage,
  getCloudStorageList,
} from "../services/FileService.js";

const uploadFileFn = async (req, res) => {
  try {
    const url = uploadToCloudStorage(req);
    res.json({ message: `file uploaded` });
  } catch (err) {
    console.log(err);
  }
};

const getFileList = async (req, res) => {
  try {
    const fileInfos = await getCloudStorageList();
    res.json({ message: fileInfos });
  } catch (err) {
    console.log(err);
  }
};

export { uploadFileFn, getFileList };
