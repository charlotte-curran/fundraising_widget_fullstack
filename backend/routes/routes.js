const event = {
  id: 1,
  goal: 1000,
  raised: 500
};

//function that drops tables and creates tables i need
//function function that will get both tables
//function that will add a line to money table
console.log("here");
var mysql = require("mysql");

const appRouter = app => {
  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "fundraiser"
  });
  console.log(con);

  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

  app.get("/", (req, res) => {
    connection.ping(function(err) {
      if (err) throw err;
      console.log("Server responded to ping");
      res.status(200).send("api");
    });
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
// con.query("DROP TABLE IF EXISTS payments", function(error, results, fields) {
//   if (err) {
//     return console.error("error: " + err.message);
//   }
// });

// con.query("CREATE TABLE payments", function(error, results, fields) {
//   if (err) {
//     return console.error("error: " + err.message);
//   }
// });

// con.connect(function(err) {
//   if (err) {
//     return console.error("error: " + err.message);
//   }

//   let createTodos = `create table if not exists payments(
//                           id int primary key auto_increment,
//                           amount int not null,
//                           event int not null,
//                           goal int not null
//                       )`;

//   con.query(createTodos, function(err, results, fields) {
//     if (err) {
//       console.log(err.message);
//     }
//   });

//   con.end(function(err) {
//     if (err) {
//       return console.log(err.message);
//     }
//   });
// });

// // insert statment
// let sql = `INSERT INTO payments(amount,event,goal)
//            VALUES(100,1,1000)`;

// // execute the insert statment
// con.query(sql);
