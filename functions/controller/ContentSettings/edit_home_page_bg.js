const parseMultipartForm = require("../../utils/parseMultipartForm");
const UploadImage = require("./upload_images");
const db = require("./../../../models/");
const ContentSettingsImages = db.ContentSettingsImages;

const EditHomePageBg = async (req, res) => {
  try {
    const { data, files } = await parseMultipartForm(req);

    if (files && files.length !== 0) {
      var { error, uploaded_images } = await UploadImage(
        files,
        "CONTENT_IMAGES"
      );
      if (error) {
        throw error;
      }
    }

    if (data.toDeleteImageId.length !== 0) {
      await ContentSettingsImages.destroy({
        where: {
          id: data.toDeleteImageId,
        },
      });
    }

    const images =
      uploaded_images &&
      uploaded_images.map((image) => ({
        // fk_id: data.id,
        type: "HOME_BG",
        url: image.src,
      }));

    uploaded_images && (await ContentSettingsImages.bulkCreate(images));

    res.status(200).json({
      message: "processing",
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

module.exports = EditHomePageBg;
