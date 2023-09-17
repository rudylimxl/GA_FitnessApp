import { Storage } from "@google-cloud/storage";

const storage = new Storage({
  projectId: "animated-subset-399202",
  keyFilename: "./src/config/google-cloud-key.json",
});

const bucket = storage.bucket("bkr-fitapp");

const uploadToCloudStorage = async (req) => {
  try {
    const { mimetype, originalname, size } = req.file;
    const unixTime = Date.now();
    const file = bucket.file(unixTime);
    await file.save(req.file.buffer, { contentType: mimetype });
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
