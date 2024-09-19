const mongoose = require('mongoose');

// Define the schema for the CollegeResult collection
const CollegeSchema = new mongoose.Schema({}, { strict: false, collection: 'COLLEGE_RESULT' });

const CollegeResult = mongoose.model('CollegeResult', CollegeSchema);
const fullCollegeResultSchema = new mongoose.Schema({
  collegeName: { type: String, default: '', required: true }, // College name is required, default to empty if missing
  state: { type: String, default: '' },
  collegeAddress: { type: String, default: '' },
  instituteType: { type: String, default: '' },
  universityName: { type: String, default: '' },
  yearOfEstablishment: { type: Number, default: 0 },
  totalHospitalBeds: { type: Number, default: 0 },
  locationMapLink: { type: String, default: '' },
  nearestRailwayStation: { type: String, default: '' },
  distanceFromRailwayStation: { type: Number, default: 0 },
  nearestAirport: { type: String, default: '' },
  distanceFromAirport: { type: Number, default: 0 },
  phoneNumber: { type: String, default: '' },
  website: { type: String, default: '' },
  courses: [
    {
      courseName: { type: String, default: '' }, // Default course name to empty string if missing
      totalSeatsInCourse: { type: Number, default: 0 }, // Default total seats to 0 if missing
      quotas: [
        {
          quota: { type: String, default: '' },
          courseFee: { type: Number, default: 0 },
          nriFee: { type: Number, default: 0 },
          stipendYear1: { type: Number, default: 0 },
          stipendYear2: { type: Number, default: 0 },
          stipendYear3: { type: Number, default: 0 },
          bondYear: { type: Number, default: 0 },
          bondPenality: { type: Number, default: 0 },
          seatLeavingPenality: { type: Number, default: 0 },
        }
      ]
    }
  ]
}, {
  strict: false, // Disables validation for fields not defined in the schema
  collection: 'FULL_COLLEGE_RESULT' // Explicitly set collection name
});

// Register the model
const FullCollegeResult = mongoose.model('FullCollegeResult', fullCollegeResultSchema);

exports.getCollegesDataById = async (req, res) => {
  try {
      const collegeId = req.params.id;
      // console.log('Received ID:', collegeId); // Log the received ID

      // Fetch the college details by ID from the CollegeResult collection
      const college = await CollegeResult.findById(collegeId);
      // console.log('Found College:', college); // Log the found document

      if (!college) {
          return res.status(404).json({ message: 'College not found' });
      }

      res.json(college);
  } catch (error) {
      console.error('Error fetching college by ID:', error);
      res.status(500).json({ message: 'Server error' });
  }
};

exports.getCollegesData = async (req, res) => {
  try {
    let { page = 1, limit = 10, ...filters } = req.query;

    // Ensure page and limit are numbers and valid
    page = Math.max(1, Number(page));
    limit = Math.max(1, Number(limit));

    const collectionName = 'COLLEGE_RESULT';
    let CollegeModel;

    // Ensure the model is registered or create a new one
    try {
      CollegeModel = mongoose.model(collectionName);
    } catch (error) {
      if (error.name === 'MissingSchemaError') {
        CollegeModel = mongoose.model(
          collectionName,
          new mongoose.Schema({}, { strict: false }),
          collectionName
        );
      } else {
        throw error;
      }
    }

    const query = {};

    // Utility function to add range filters
    const addRangeFilter = (field, min, max) => {
      const rangeQuery = {};
      if (min !== undefined) {
        rangeQuery.$gte = Number(min);
      }
      if (max !== undefined) {
        rangeQuery.$lte = Number(max);
      }
      if (Object.keys(rangeQuery).length > 0) {
        query[field] = rangeQuery;
      }
    };

    // Process filters to handle min and max range queries
    for (const key in filters) {
      if (filters.hasOwnProperty(key) && filters[key]) {
        // Check if the key ends with [min] or [max]
        const minMatch = key.match(/(.*)\[min\]$/);
        const maxMatch = key.match(/(.*)\[max\]$/);

        if (minMatch) {
          const field = minMatch[1];
          const maxKey = `${field}[max]`;
          addRangeFilter(field, filters[key], filters[maxKey]);
          delete filters[maxKey]; // Remove max key from filters to prevent duplicate processing
        } else if (!maxMatch) {
          // Only add non-range filters
          query[key] = Array.isArray(filters[key]) ? { $in: filters[key] } : filters[key];
        }
      }
    }

    // console.log('Query:', query); // Logging the query for debugging

    const data = await CollegeModel.find(query)
      .skip((page - 1) * limit)
      .limit(limit)
      .lean();
    const totalItems = await CollegeModel.countDocuments(query);

    res.json({
      data,
      currentPage: page,
      totalPages: Math.ceil(totalItems / limit),
      totalItems,
    });
  } catch (error) {
    console.error('Error fetching college data:', error);
    res.status(500).send('Failed to fetch college data.');
  }
};



exports.getFilterOptions = async (req, res) => {
  try {
    const collectionName = `COLLEGE_RESULT`; // Ensure this matches your dataset name
    let CollegeModel;

    try {
      CollegeModel = mongoose.model(collectionName);
    } catch (error) {
      if (error.name === 'MissingSchemaError') {
        CollegeModel = mongoose.model(collectionName, new mongoose.Schema({}, { strict: false }), collectionName);
      } else {
        throw error;
      }
    }

    const state = await CollegeModel.distinct('state');
    const collegeName = await CollegeModel.distinct('collegeName');
    const instituteType = await CollegeModel.distinct('instituteType');
    const universityName = await CollegeModel.distinct('universityName');
    const yearOfEstablishment = await CollegeModel.distinct('yearOfEstablishment');
    const totalHospitalBedsRange = await CollegeModel.aggregate([
      { $group: { _id: null, min: { $min: '$totalHospitalBeds' }, max: { $max: '$totalHospitalBeds' } } }
    ]);

    res.json({
      state,
      collegeName,
      instituteType,
      universityName,
      yearOfEstablishment,
      totalHospitalBedsRange: totalHospitalBedsRange[0],
    });
  } catch (error) {
    console.error('Error fetching filter options:', error);
    res.status(500).send('Failed to fetch filter options.');
  }
};

exports.getCollegeByName = async (req, res) => {
  const { collegeName } = req.params;
  
  try {
      // console.log('Entered method to fetch college by name:', collegeName);

      const college = await FullCollegeResult.findOne({ collegeName });

      if (!college) {
          return res.status(404).json({ error: 'College not found' });
      }

      res.json(college);
  } catch (error) {
      console.error('Error fetching college by name:', error);
      res.status(500).json({ error: 'Server error' });
  }
};

