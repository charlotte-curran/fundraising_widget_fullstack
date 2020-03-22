const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("db.json");
const db = low(adapter);

const newState = {};
db.setState(newState);

db.defaults({
  payments: [100],
  event: {
    id: 1,
    goal: 1000
  }
}).write();

const appRouter = app => {
  app.get("/", (req, res) => {
    res.status(200).send("api");
  });

  app.get("/event", (req, res) => {
    const event = db.get("event").value();
    res.status(200).send(event);
  });

  app.get("/payments", (req, res) => {
    const payments = db.get("payments").value();
    res.status(200).send(payments);
  });

  app.post("/payments", (req, res) => {
    db.get("payments")
      .push(req.body.payment)
      .write();
    res.status(200);
  });
};

module.exports = appRouter;
