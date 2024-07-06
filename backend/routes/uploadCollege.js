// const mongoose = require('mongoose');
// const readExcelFile = require('read-excel-file/node');
// const multer = require('multer');
// const path = require('path');

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'uploads/');
//   },
//   filename: (req, file, cb) => {
//     cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
//   },
// });

// const upload = multer({ storage: storage }).single('file');

// exports.uploadCollege = (req, res) => {
//   upload(req, res, function (err) {
//     if (err instanceof multer.MulterError || err) {
//       return res.status(500).send({ message: err.message });
//     } else if (err) {
//       return res.status(500).send({ message: err.message });
//     }

//     const filePath = path.join(__dirname, '..', 'uploads', req.file.filename);

//     readExcelFile(filePath).then((rows) => {
//       rows.shift(); // Remove header row
//       const colleges = rows.map((row) => ({
//         collegeShortName: row[0],
//         collegeAddress: row[1],
//         collegeName: row[2],
//         universityName: row[3],
//         state: row[4],
//         instituteType: row[5],
//         yearOfEstablishment: row[6],
//         totalHospitalBeds: row[7],
//         locationMapLink: row[8],
//         nearestRailwayStation: row[9],
//         distanceFromRailwayStation: row[10],
//         nearestAirport: row[11],
//         distanceFromAirport: row[12]
//       }));

//       const CollegeModel = mongoose.model('College'); // Use the pre-defined College model

//       CollegeModel.insertMany(colleges)
//         .then(() => res.send('College details have been successfully saved to MongoDB.'))
//         .catch((err) => {
//           console.error('MongoDB insertion error:', err);
//           res.status(500).send('Failed to insert college details into MongoDB');
//         });
//     }).catch((err) => {
//       console.error('Error reading Excel file:', err);
//       res.status(500).send('Failed to process college file');
//     });
//   });
// };
