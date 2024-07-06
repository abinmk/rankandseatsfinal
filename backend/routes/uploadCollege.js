const express = require('express');
const router = express.Router();
const multer = require('multer');
const axios = require('axios');
const College = require('../models/College');
const fs = require('fs');
const csv = require('csv-parser');

const upload = multer({ dest: 'uploads/' });

router.post('/upload-college', upload.single('file'), async (req, res) => {
  const file = req.file;

  if (!file) {
    return res.status(400).send({ error: 'No file uploaded' });
  }

  const colleges = [];
  fs.createReadStream(file.path)
    .pipe(csv())
    .on('data', (row) => {
      colleges.push(row);
    })
    .on('end', async () => {
      try {
        for (const college of colleges) {
          if (college.locationMapLink) {
            try {
              const expandedUrl = await expandUrl(college.locationMapLink);
              college.locationMapLink = expandedUrl;
            } catch (error) {
              console.error('Error expanding URL:', error);
            }
          }
        }

        await College.insertMany(colleges);
        fs.unlinkSync(file.path); // Remove the uploaded file after processing
        res.send({ message: 'College details uploaded and URLs expanded successfully' });
      } catch (error) {
        console.error('Error uploading college details:', error);
        res.status(500).send({ error: 'Failed to upload college details' });
      }
    });
});

const expandUrl = async (url) => {
  try {
    const response = await axios.get(url, { maxRedirects: 0 });
    return response.request.res.responseUrl;
  } catch (error) {
    console.error('Error expanding URL:', error);
    return url;
  }
};

module.exports = router;
