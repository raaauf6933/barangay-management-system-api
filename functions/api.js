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
const GetResidentIssuances = require("./controller/Issuance/get_resident_issuances");
const GetResidentIssuance = require("./controller/Issuance/get_resident_issuance");
const EditResidentIssuance = require("./controller/Issuance/edit_resident_issuance");
const GetResidents = require("./controller/Residents/get_residents");
const GetPositions = require("./controller/Positions/get_positions");
const CreatePosition = require("./controller/Positions/create_positon");
const GetPosition = require("./controller/Positions/get_position");
const EditPosition = require("./controller/Positions/edit_position");
const GetOfficials = require("./controller/Officials/get_officials");
const CreateOfficial = require("./controller/Officials/create_officials");
const GetOfficial = require("./controller/Officials/get_official");
const EditOfficial = require("./controller/Officials/edit_official");
const CreateResident = require("./controller/Residents/create_resident");
const GetResident = require("./controller/Residents/get_resident");
const EditResident = require("./controller/Residents/edit_resident");
const GetUsers = require("./controller/Users/get_users");
const CreateUser = require("./controller/Users/create_user");
const GetUser = require("./controller/Users/get_user");
const EditUser = require("./controller/Users/edit_user");
const Login = require("./controller/Auth/login");
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

router.post("/auth/login", Login);

// Announcements
router.post("/announcement/create_announcement", CreateAnnouncement);
router.post("/announcement/edit_announcement", EditAnnouncement);
router.get("/announcement/get_announcements", GetAnnouncements);
router.get("/announcement/get_announcement", GetAnnouncement);

// Issuance
router.post("/issuance/create_resident_issuance", CreateResidentIssuance);
router.post("/issuance/edit_resident_issuance", EditResidentIssuance);
router.get("/issuance/get_resident_issuances", GetResidentIssuances);
router.get("/issuance/get_resident_issuance", GetResidentIssuance);

// Residents
router.post("/residents/create_resident", CreateResident);
router.post("/residents/edit_resident", EditResident);
router.get("/residents/get_resident", GetResident);
router.get("/residents/get_residents", GetResidents);

// Positions
router.post("/positions/create_positon", CreatePosition);
router.post("/positions/edit_position", EditPosition);
router.get("/positions/get_positions", GetPositions);
router.get("/positions/get_position", GetPosition);

// Officials
router.post("/officials/create_official", CreateOfficial);
router.post("/officials/edit_official", EditOfficial);
router.get("/officials/get_official", GetOfficial);
router.get("/officials/get_officials", GetOfficials);

// Users
router.post("/users/create_user", CreateUser);
router.post("/users/edit_user", EditUser);
router.get("/users/get_user", GetUser);
router.get("/users/get_users", GetUsers);

router.get("/test_endpoint", (_req, res) => {
  res.json({
    message: "API is live!",
  });
});

app.use("/", router);

module.exports.handler = serverless(app);
