import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: "process.env.CLOUDINARY_CLOUD_NAME",
  api_key: "process.env.CLOUDINARY_API_KEY",
  api_secret: "process.env.CLOUDINARY_SECRET_KEY",
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    //upload the file on cloudinary
    const responce = await cloudinary.uploader.upload(localFilePath, path, {
      resource_type: "auto",
    });
    //file has been success fully upload
    console.log("File is upload on cloudinary", responce.url);
    return responce;
  } catch (error) {
    fs.unlinkSync(localFilePath); //remove the locally saved temparry file as the upload opertion got failed
    return null;
  }
};

export { uploadOnCloudinary };
