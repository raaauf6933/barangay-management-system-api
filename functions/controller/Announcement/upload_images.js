const cloudinary = require("cloudinary");
const fs = require("fs");

cloudinary.config({
  cloud_name: "dlwccjs49",
  api_key: "949219879593799",
  api_secret: "-CvaOSMiE6KitboBz28bBPQO_eo",
});

const UploadImage = async (files, path_folder) => {
  let uploaded_images = [];

  for (const file of files) {
    try {
      let upload_result = await cloudinary.v2.uploader.upload(file.filepath, {
        public_id: `${file.filename}-${Math.floor(Math.random() * 100 + 1)}`,
        folder: path_folder,
      });
      fs.unlinkSync(file.filepath);
      // fs.unlinkSync(image.path);

      uploaded_images.push({ src: upload_result.secure_url });
    } catch (error) {
      console.log(error);
      return { error };
    }
  }

  return { uploaded_images };
};

module.exports = UploadImage;
