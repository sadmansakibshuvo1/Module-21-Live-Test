const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
    {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        rollNumber: { type: String, required: true, unique: true },
        phoneNumber: { type: String, required: true },
        password: { type: String, required: true },
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

const studentModel = mongoose.model("students", DataSchema);

module.exports = studentModel;
