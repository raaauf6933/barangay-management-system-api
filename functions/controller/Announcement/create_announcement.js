const parseMultipartForm = require("../../utils/parseMultipartForm");
const db = require("./../../../models/");
const UploadImage = require("./upload_images");
const Announcement = db.Announcement;
const Images = db.Images;

const CreateAnnouncement = async (req, res) => {
  try {
    const { data, files } = await parseMultipartForm(req);

    if (files && files.length !== 0) {
      var { error, uploaded_images } = await UploadImage(
        files,
        "ANNOUNCEMENT_IMAGES"
      );
      if (error) {
        throw error;
      }
    }

    const result = await Announcement.create({
      title: data.title,
      content: data.content,
      status: data.status,
    });

    const images =
      uploaded_images &&
      uploaded_images.map((image) => ({
        fk_id: result.id,
        type: "ANNOUNCEMENT",
        url: image.src,
      }));

    uploaded_images && (await Images.bulkCreate(images));

    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

module.exports = CreateAnnouncement;
