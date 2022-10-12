const express = require("express");
const serverless = require("serverless-http");
const cors = require("cors");
const CreateAnnouncement = require("./controller/Announcement/create_announcement");
const app = express();
const router = express.Router();
// controller
const Authentication = require("./controller/authentication");
const GetAnnouncements = require("./controller/Announcement/get_announcements");
const GetAnnouncement = require("./controller/Announcement/get_announcement");
const EditAnnouncement = require("./controller/Announcement/edit_annoncement");
const CreateResidentIssuance = require("./controller/Issuance/create_resident_issuance");
// const parseMultipartForm = require("./utils/parseMultipartForm");

// middleware
// const auth = require("./middleware/auth");

app.use(
  cors({
    origin: "*", // <-- location of the react app
    credentials: true,
    allowedHeaders: "*",
  })
);

router.get("/auth", Authentication);

// Announcements
router.post("/announcement/create_announcement", CreateAnnouncement);
router.post("/announcement/edit_announcement", EditAnnouncement);
router.get("/announcement/get_announcements", GetAnnouncements);
router.get("/announcement/get_announcement", GetAnnouncement);

// Issuance
router.post("/issuance/create_resident_issuance", CreateResidentIssuance);

router.get("/test_endpoint", (_req, res) => {
  res.json({
    message: "API is live!",
  });
});

app.use("/", router);

module.exports.handler = serverless(app);
