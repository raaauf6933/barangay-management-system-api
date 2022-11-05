const db = require("./../../../models/");
const ContentSettingsImages = db.ContentSettingsImages;

const GetHomePageBg = async (req, res) => {
  try {
    const result = await ContentSettingsImages.findAll({
      where: {
        type: "HOME_BG",
      },
    });

    res.status(200).json({ result });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = GetHomePageBg;
