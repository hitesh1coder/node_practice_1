const express = require("express");
const app = express();
const data = require("./data.json");

let date_time = new Date();
// get current hours
let hours = date_time.getHours();
if (hours < 10) {
  hours = "0" + hours;
}
// get current minutes
let minutes = date_time.getMinutes();
if (minutes < 10) {
  minutes = "0" + minutes;
}
// get current seconds
let seconds = date_time.getSeconds();
if (seconds < 10) {
  seconds = "0" + seconds;
}
// get curentTime
let currentTime = hours + ":" + minutes + ":" + seconds;

// routes
app.get("/", (req, res) => {
  res.send("hello server");
});
app.get("/health-api", (req, res) => {
  res.json({ time: currentTime, app: "express-server", status: "active" });
});
app.get("/all", (req, res) => {
  res.send(data);
});
app.get("/vegetable", (req, res) => {
  let vegetable = data.filter((ele) => {
    return ele.category === "Vegetable";
  });
  res.send(vegetable);
});
app.get("/fruit", (req, res) => {
  let fruit = data.filter((ele) => {
    return ele.category === "Fruit";
  });
  res.send(fruit);
});
app.get("/protien", (req, res) => {
  let protien = data.filter((ele) => {
    return ele.category === "Protein";
  });
  res.send(protien);
});
app.get("/calorie-above-100", (req, res) => {
  let calorieAbove100 = data.filter((ele) => {
    return ele.calorie > 100;
  });
  res.send(calorieAbove100);
});
app.get("/calorie-below-100", (req, res) => {
  let calorieBelow100 = data.filter((ele) => {
    return ele.calorie < 100;
  });
  res.send(calorieBelow100);
});
app.listen(5000, () => {
  console.log("server started on port 5000");
});
