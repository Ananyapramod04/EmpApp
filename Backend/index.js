const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors());

require('./connection');
const EmployeeModel = require('./model');

// POST API to add new blog post
app.post("/add", async (req, res) => {
  try {
    const newEmployee = new EmployeeModel(req.body);
    await newEmployee.save();
    res.status(201).send({ message: " Post added successfully" });
  } catch (error) {
    res.status(500).send({ message: "Error adding  post", error });
  }
});

// GET API to fetch all blog posts
app.get("/details", async (req, res) => {
  try {
    const data = await EmployeeModel.find();
    res.send(data);
  } catch (error) {
    res.status(500).send({ message: "Error fetching posts", error });
  }
});

// DELETE API to remove a blog post by ID
app.delete("/removedetails/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await EmployeeModel.findByIdAndDelete(id);
    res.send({ message: "Post deleted successfully" });
  } catch (error) {
    res.status(500).send({ message: "Error deleting  post", error });
  }
});

app.listen(PORT, () => {
  console.log(`${PORT} is up and running`);
});

app.put("/update/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedEmployee = await EmployeeModel.findByIdAndUpdate(id, req.body, { new: true });
    res.send({ message: "Post updated successfully", updatedEmployee });
  } catch (error) {
    res.status(500).send({ message: "Error updating post", error });
  }
});


