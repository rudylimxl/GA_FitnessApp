import { Storage } from "@google-cloud/storage";
import { v4 as uuidv4 } from "uuid";

const storage = new Storage({
  projectId: "animated-subset-399202",
  keyFilename: "./src/config/google-cloud-key.json",
});

const bucket = storage.bucket("bkr-fitapp");

// Uploads a file to google cloud bucket
const uploadToCloudStorage = async (reqFile, folderName) => {
  const { mimetype, originalname, size } = reqFile;
  // generate unique id for the name of the file
  const fileName = uuidv4();

  try {
    const file = bucket.file(`${folderName}/${fileName}`);
    //bucket.file(unixTime) creates a new file with filename unixTime
    await file.save(reqFile.buffer, { contentType: mimetype });
    //buffer is the actual file stored in temporary memory

    const url = `https://storage.googleapis.com/${bucket.name}/${file.name}`;
    console.log(`file uploaded to ${url}`);
    return url;
  } catch (err) {
    console.log(err);
  }
};

const getCloudStorageList = async () => {
  try {
    const [files] = await bucket.getFiles();
    //bucket.getFiles() lists all the files in the bucket
    let fileInfos = [];

    files.forEach((file) => {
      fileInfos.push({
        name: file.name,
        type: file.metadata.contentType,
        url: `https://storage.googleapis.com/bkr-fitapp/${file.name}`,
      });
    });
    // return files;
    // ^to see full response
    return fileInfos;
  } catch (err) {
    console.log(err);
  }
};

export { uploadToCloudStorage, getCloudStorageList };
