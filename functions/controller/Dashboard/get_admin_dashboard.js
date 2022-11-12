const db = require("./../../../models/");
const Announcements = db.Announcement;
const IssuanceResident = db.IssuanceResident;
const Residents = db.Residents;
const Blotter = db.Blotter;
const Users = db.Users;

const GetAdminDashboard = async (req, res) => {
  try {
    const announcemets = await Announcements.count();
    const issuances = await IssuanceResident.count();
    const pending_issuances = await IssuanceResident.count({
      where: {
        status: "PENDING",
      },
    });

    const residents = await Residents.count();
    const blotters = await Blotter.count();

    const pending_blotters = await Blotter.count({
      where: {
        status: "PENDING",
      },
    });

    const users = await Users.count();
    const active_users = await Users.count({
      where: {
        status: 1,
      },
    });

    return res.status(200).json({
      announcemets,
      issuances,
      pending_issuances,
      residents,
      blotters,
      pending_blotters,
      users,
      active_users,
    });
  } catch (error) {
    res.status(400).json({
      message: error.messsage,
    });
  }
};

module.exports = GetAdminDashboard;
