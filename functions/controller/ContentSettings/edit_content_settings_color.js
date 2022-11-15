const db = require("./../../../models/");
const ContentSettings = db.ContentSettings;

const EditContentSettingsColor = async (req, res) => {
  const body = JSON.parse(req.apiGateway.event.body);
  try {
    const result = await ContentSettings.update(
      {
        value: body.value,
      },
      {
        where: {
          type: body.type,
        },
      }
    );

    return res.status(200).json({
      result,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

module.exports = EditContentSettingsColor;
