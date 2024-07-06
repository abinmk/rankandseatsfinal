const Exam = require('../models/Exam');

exports.createExam = async (req, res) => {
  const { title, description, questions } = req.body;
  try {
    const exam = new Exam({ title, description, questions });
    await exam.save();
    res.status(201).json(exam);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};

exports.getExams = async (req, res) => {
  try {
    const exams = await Exam.find();
    res.status(200).json(exams);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};
