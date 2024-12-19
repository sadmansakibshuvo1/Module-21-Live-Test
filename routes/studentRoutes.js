const express = require("express");
const studentModel = require("../models/studentModel");

const router = express.Router();

// Create a student
router.post("/", async (req, res) => {
    try {
        const student = new studentModel(req.body);
        await student.save();
        res.status(201).send({ message: "Student created successfully", student });
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

// Read a single student by ID
router.get("/:id", async (req, res) => {
    try {
        const student = await studentModel.findById(req.params.id);
        if (!student) return res.status(404).send({ message: "Student not found" });
        res.send(student);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

// Update a student by ID
router.put("/:id", async (req, res) => {
    try {
        const student = await studentModel.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        if (!student) return res.status(404).send({ message: "Student not found" });
        res.send({ message: "Student updated successfully", student });
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

// Delete a student by ID
router.delete("/:id", async (req, res) => {
    try {
        const student = await studentModel.findByIdAndDelete(req.params.id);
        if (!student) return res.status(404).send({ message: "Student not found" });
        res.send({ message: "Student deleted successfully", student });
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

module.exports = router;
