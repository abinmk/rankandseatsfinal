const mongoose = require('mongoose');

const AdmittedStudentsSchema = new mongoose.Schema({
    admittedYear: { type: String, required: true },
    instituteState: { type: String, required: true },
    allottedInstitute: { type: String, required: true },
    course: { type: String, required: true },
    studentName: { type: String, required: true },
    studentState: { type: String, required: true },
    admittedBy: { type: String, required: true },
});

const AdmittedStudents = mongoose.model('AdmittedStudents', AdmittedStudentsSchema);

module.exports = AdmittedStudents;