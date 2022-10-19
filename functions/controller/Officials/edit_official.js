const parseMultipartForm = require("../../utils/parseMultipartForm");
const db = require("./../../../models/");
const UploadImage = require("./../../utils/uploadImage");
const Officials = db.Officials;

const EditOfficial = async (req, res) => {
  try {
    const { data, files } = await parseMultipartForm(req);

    if (files && files.length !== 0) {
      var { error, uploaded_images } = await UploadImage(
        files,
        "OFFICIALS_IMAGES"
      );
      if (error) {
        throw error;
      }
    }

    const result = await Officials.update(
      {
        position_id: data.position,
        first_name: data.first_name,
        last_name: data.last_name,
        photo_url:
          uploaded_images && uploaded_images?.length > 0
            ? uploaded_images[0].src
            : null,
        contact_no: data?.contact_no ? data?.contact_no : null,
        email: data?.email ? data?.email : null,
        status: data.status,
      },
      {
        where: {
          id: data.id,
        },
      }
    );

    res.status(200).json({
      result,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

module.exports = EditOfficial;
