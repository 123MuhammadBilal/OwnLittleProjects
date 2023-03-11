const bodyParser = require("body-parser");

// here i am importing EXPRESS
const express = require("express");

// here i am importing nodemailer
const nodemailer = require("nodemailer");

// here i am importing Path
const path = require("path");

// here i am importing mongoose
const mongoose = require("mongoose");

const dName = "alwahabmobiles";

// my url of database
const uri = `mongodb://127.0.0.1:27017/${dName}`;

//for stay away form Deprecation Warning
mongoose.set("strictQuery", false);

//using express as const "app"
const app = express();

//path.join used to concatenate path segments into a single path string/here its concating to index.js and public path __dirname is use to get currently executing JavaScript path  "public" is subdirectory
const publicPath = path.join(__dirname, "public");

//In a Node.js web application, app.set('view engine', 'ejs') is used to configure the web application to use the EJS (Embedded JavaScript) templating engine to render dynamic HTML pages
app.set("view engine", "ejs");

// static use of website
app.use(express.static(publicPath));

app.get("/", (_, resp) => {
  resp.render("home");
});
app.get("/profile", (_, resp) => {
  resp.render("profile");
});

app.get("/about", (_, resp) => {
  resp.render("about");
});

app.get("/home", (_, resp) => {
  resp.render("home");
});
app.get("/login", (_, resp) => {
  resp.render("login");
});

app.get("/Contact", (_, resp) => {
  resp.render("contact");
});
app.get("/mobiles", (_, resp) => {
  Profile.find(function (err, profiles) {
    if (err) throw err;

    resp.render("mobiles", { profiles: profiles });
  });
});
app.get("*", (_, resp) => {
  resp.sendFile(`${publicPath}/404.html`);
});
// Start the server
app.listen(3000, function () {
  console.log("Server listening on port 3000");
});

// let me work on database
mongoose.connect(uri, {  useNewUrlParser: true},()=>{
  console.log("Connected to MongoDB");
})

// Set up Mongoose and connect to MongoDB
const profileSchema = new mongoose.Schema({
  cellName: String,
  cellModele: String,
  cellimi1: String,
  cellimi2: String,
});
const Profile = mongoose.model("Profile", profileSchema);

// Set up middleware to handle form data
app.use(bodyParser.urlencoded({ extended: true }));

// Define routes
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/profile.html");
});

app.post("/submit-form", function (req, res) {
  const formData = req.body;

  const newProfile = new Profile({
    cellName: formData.cellName,
    cellModele: formData.cellModele,
    cellimi1: formData.cellimi1,
    cellimi2: formData.cellimi2,
  });

  newProfile.save(function (err) {
    if (err) throw err;

    console.log("Form data saved to MongoDB");
    res.redirect("/mobiles");
  });
});

// Set up Mongoose and connect to MongoDB
const contactSchema = new mongoose.Schema({
  subscription_mail: String,
});
const contact = mongoose.model("contact", contactSchema);

// Set up middleware to handle form data
app.use(bodyParser.urlencoded({ extended: true }));

contact.find({}, { subscription_mail: 1, _id: 0 }, function (err, result) {
  if (err) throw err;
  const subscriptionMails = result.map((contact) => contact.subscription_mail);
  console.log(subscriptionMails);
});
app.post("/subscription_from", function (req, res) {
  const subscription_from = req.body;
  const newSub = new contact({
    subscription_mail: subscription_from.subscription_mail,
  });
  // Use the find() method to retrieve all documents from the "contacts" collection

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "kkmuhammadbilal2@gmail.com",
      pass: "epkqmckonglpvjua",
    },
  });

  // setup email data with unicode symbols
  let mailOptions = {
    from: "kkmuhammadbilal2@gmail.com", // sender address
    to: req.body.subscription_mail, // list of receivers
    subject: "Subscription", // Subject line
    text: "Thanks for Subscription you will uptodate", // plain text body
    html: '<h1>FOR MORE<h1><br><a href="">Contact with Developer</a>', // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Message sent: %s", info.messageId);
    }
  });

  newSub.save(function (err) {
    if (err) throw err;
    console.log("Subscribed succeed MongoDB");
    res.redirect("/contact");
  });
});