const event = {
  id: 1,
  goal: 1000,
  raised: 500
};

const appRouter = app => {
  app.get("/", (req, res) => {
    res.status(200).send("api");
  });

  app.get("/event", (req, res) => {
    res.status(200).send(event);
  });

  app.post("/event", (req, res) => {
    console.log(req.body);
    event.raised += req.body.funds;
    res.status(200).send(event);
  });
};

module.exports = appRouter;
