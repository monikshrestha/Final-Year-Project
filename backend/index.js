const mysql = require("mysql");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "sajilodb",
});

db.connect((err) => {
  if (!err) console.log("DB conenction succed");
  else console.log("DB conenction failed");
});


// app.get("/support", (req, res) => {

// });


// Viewing the tables from app feedback
app.get('/support', (req, res) => {
  db.query('SELECT * FROM app_feedback', (err, row) => {
    if (!err) res.send(row);
    else console.log(err);
  });
});

// Deleting the ID from app feedback
app.delete('/support/:id', (req, res) => {
    db.query('DELETE FROM app_feedback WHERE fedID =?',[req.params.id], (err, row, fields) => {
      if (!err) res.send('deleted sucessfully');
      else console.log(err);
    });
  });

// Inserting Value in the database
// app.get("/support", (req, res) => {
//   const sqlInsert ="INSERT INTO app_feedback (fedName, fedEmail, fedfedback) VALUES ('Monik', 'test@gmail.com', 'it works')";
//   db.query(sqlInsert, (err, row) => {
//     if (!err) console.log(row);
//     else console.log(err);
//   });
// });



app.listen(3001, () => {
  console.log("Running on the port: 3001");
});