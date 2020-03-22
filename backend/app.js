const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes/routes");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes(app);

const server = app.listen(8080, () => {
  console.log("app running on port: ", server.address().port);
});
