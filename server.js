const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./models");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require("./routes/tutorial.routes")(app);

const corsOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOptions));

// *** DB connection
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    console.error("Cannot connect to the database!", err);
    process.exit();
  });

app.get("/", (req, res) => {
  res.json({ message: "Oh hi, you are at the root." });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
