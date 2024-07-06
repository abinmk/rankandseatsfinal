const mongoose = require('mongoose');
const readExcelFile = require('read-excel-file/node');
const multer = require('multer');
const path = require('path');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
      cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
    },
  });
  
  const upload = multer({ storage: storage }).single('file');


exports.uploadCourse = (req, res) => {
    upload(req, res, function (err) {
      if (err instanceof multer.MulterError || err) {
        return res.status(500).send({ message: err.message });
      }
  
      const filePath = path.join(__dirname, '..', 'uploads', req.file.filename);
      const courseSchema = new mongoose.Schema({
        course: String,
        courseCode: String,
        duration: String,
        courseCategory: String,
        courseType: String,
        degreeType: String,
        description: String
      });
  
      let CourseModel;
      try {
        CourseModel = mongoose.model('courses');
      } catch (error) {
        if (error.name === 'MissingSchemaError') {
          CourseModel = mongoose.model('courses', courseSchema, 'courses');
        } else {
          throw error;
        }
      }
  
      readExcelFile(filePath).then((rows) => {
        rows.shift(); // Remove header row
        const courses = rows.map((row) => ({
          course: row[0],
          courseCode: row[1],
          duration: row[2],
          courseCategory: row[3],
          courseType: row[4],
          degreeType: row[5],
          description: row[6]
        }));
  
        CourseModel.insertMany(courses)
          .then(() => res.send('Course details have been successfully saved to MongoDB.'))
          .catch((err) => {
            console.error('MongoDB insertion error:', err);
            res.status(500).send('Failed to insert course details into MongoDB');
          });
      }).catch((err) => {
        console.error('Error reading Excel file:', err);
        res.status(500).send('Failed to process course file');
      });
    });
  };