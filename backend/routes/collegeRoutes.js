const express = require('express');
const axios = require('axios');
const router = express.Router();
const College = require('../models/College');

router.get('/colleges', async (req, res) => {
  const { page = 1, limit = 10, state, institute, university, instituteType } = req.query;

  const query = {};
  if (state) query.state = state;
  if (institute) query.collegeName = institute;
  if (university) query.universityName = university;
  if (instituteType) query.instituteType = instituteType;

  try {
    const colleges = await College.find(query)
      .skip((page - 1) * limit)
      .limit(Number(limit));
      
    const total = await College.countDocuments(query);
    res.json({ data: colleges, totalPages: Math.ceil(total / limit), currentPage: Number(page) });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching data' });
  }
});

router.get('/colleges/:id', async (req, res) => {
  try {
    const college = await College.findById(req.params.id);
    if (college) {
      res.json(college);
    } else {
      res.status(404).json({ error: 'College not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch college' });
  }
});

router.post('/expand-url', async (req, res) => {
  const { shortUrl } = req.body;
  try {
    const response = await axios.get(shortUrl, { maxRedirects: 0, validateStatus: null });
    if (response    .status === 301 || response.status === 302) {
        res.json({ expandedUrl: response.headers.location });
      } else {
        res.status(400).json({ error: 'Failed to expand URL' });
      }
    } catch (error) {
      console.error('Error expanding URL:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
  router.get('/college-filter-options', async (req, res) => {
    const { state, institute, university, instituteType } = req.query;
  
    const query = {};
    if (state) query.state = state;
    if (institute) query.collegeName = institute;
    if (university) query.universityName = university;
    if (instituteType) query.instituteType = instituteType;
  
    try {
      const states = await College.distinct('state', query);
      const institutes = await College.distinct('collegeName', query);
      const universities = await College.distinct('universityName', query);
      const instituteTypes = await College.distinct('instituteType', query);
  
      res.json({
        states,
        institutes,
        universities,
        instituteTypes
      });
    } catch (error) {
      console.error('Error fetching filter options:', error);
      res.status(500).json({ error: 'Error fetching filter options' });
    }
  });
  
  module.exports = router;
  
