const db = require("./../../../models/");
const ContentSettings = db.ContentSettings;

const GetColor = async (req, res) => {
  try {
    const result = await ContentSettings.findOne({
      where: {
        type: "COLOR",
      },
    });

    res.status(200).json({
      result,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

module.exports = GetColor;
