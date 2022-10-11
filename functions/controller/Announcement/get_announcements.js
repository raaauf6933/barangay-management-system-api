const db = require("./../../../models/");
const Announcement = db.Announcement;
const Images = db.Images;

const GetAnnouncements = async (req, res) => {
  Announcement.hasMany(Images, {
    foreignKey: "fk_id"
  });

  try {
    const announcements = await Announcement.findAll({
      include: {
        model: Images,
        attributes: ["id", "url"],
        where: {
          type: "ANNOUNCEMENT",
        },
        required:false
      },
    });

    res.status(200).json({ announcements });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

module.exports = GetAnnouncements;
