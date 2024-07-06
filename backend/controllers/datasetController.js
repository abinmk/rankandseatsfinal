const mongoose = require('mongoose');
const GeneratedDataset = require('../models/GeneratedDataset');

// Function to get the selected dataset
exports.getSelectedDataset = async (req, res) => {
    try {
        const selectedDataset = await GeneratedDataset.findOne({ includeInAllotments: true });
        if (!selectedDataset) {
            return res.status(400).send('No selected dataset found.');
        }
        res.json(selectedDataset);
    } catch (error) {
        console.error('Error fetching selected dataset:', error);
        res.status(500).send('Failed to fetch selected dataset.');
    }
};

// Function to set the selected dataset
exports.setSelectedDataset = async (req, res) => {
    try {
        const { selectedDataset } = req.body;
        await GeneratedDataset.updateMany({}, { $set: { includeInAllotments: false } });
        await GeneratedDataset.updateOne({ displayName: selectedDataset }, { $set: { includeInAllotments: true } });
        res.send('Selected dataset updated successfully.');
    } catch (error) {
        console.error('Error setting selected dataset:', error);
        res.status(500).send('Failed to set selected dataset.');
    }
};

// Function to get filter options for the selected dataset
exports.getFilterOptions = async (req, res) => {
    try {
        const selectedDataset = await GeneratedDataset.findOne({ includeInAllotments: true });
        if (!selectedDataset) {
            return res.status(400).send('No selected dataset found.');
        }

        const datasetName = selectedDataset.selectedDataset;
        const schema = new mongoose.Schema({}, { strict: false });

        let AllotmentModel;
        try {
            AllotmentModel = mongoose.model(datasetName);
        } catch (error) {
            if (error.name === 'MissingSchemaError') {
                AllotmentModel = mongoose.model(datasetName, schema, datasetName);
            } else {
                throw error;
            }
        }

        const quotas = await AllotmentModel.distinct('allottedQuota');
        const institutes = await AllotmentModel.distinct('allottedInstitute');
        const courses = await AllotmentModel.distinct('course');
        const allottedCategories = await AllotmentModel.distinct('allottedCategory');
        const candidateCategories = await AllotmentModel.distinct('candidateCategory');

        res.json({ quotas, institutes, courses, allottedCategories, candidateCategories });
    } catch (error) {
        console.error('Error fetching filter options:', error);
        res.status(500).send('Failed to fetch filter options.');
    }
};

// Function to get allotment data based on selected dataset and filters
exports.getAllotmentData = async (req, res) => {
    try {
        const { page = 1, limit = 10, quota, institute, course, allottedCategory, candidateCategory } = req.query;

        const selectedDataset = await GeneratedDataset.findOne({ includeInAllotments: true });
        if (!selectedDataset) {
            return res.status(400).send('No selected dataset found.');
        }

        const datasetName = selectedDataset.selectedDataset;
        const schema = new mongoose.Schema({}, { strict: false });

        let AllotmentModel;
        try {
            AllotmentModel = mongoose.model(datasetName);
        } catch (error) {
            if (error.name === 'MissingSchemaError') {
                AllotmentModel = mongoose.model(datasetName, schema, datasetName);
            } else {
                throw error;
            }
        }

        const filters = {};
        if (quota) filters.allottedQuota = quota;
        if (institute) filters.allottedInstitute = institute;
        if (course) filters.course = course;
        if (allottedCategory) filters.allottedCategory = allottedCategory;
        if (candidateCategory) filters.candidateCategory = candidateCategory;

        const data = await AllotmentModel.find(filters)
            .skip((page - 1) * limit)
            .limit(parseInt(limit))
            .lean();
        const totalItems = await AllotmentModel.countDocuments(filters);

        res.json({
            data,
            currentPage: page,
            totalPages: Math.ceil(totalItems / limit),
            totalItems,
        });
    } catch (error) {
        console.error('Error fetching allotment data:', error);
        res.status(500).send('Failed to fetch allotment data.');
    }
};

// Function to list all generated datasets
exports.listAvailableDatasets = async (req, res) => {
    try {
      const { examName, year, round } = req.query;
      let query = {};
      if (examName) query.displayName = { $regex: new RegExp(`^${examName}`) };
      if (year) query.displayName = { $regex: new RegExp(`${year}`) };
    //   if (round) query.displayName = { $regex: new RegExp(`${round}`) };
  
      const datasets = await GeneratedDataset.find(query);
      res.json(datasets);
    } catch (error) {
      console.error('Error listing datasets:', error);
      res.status(500).send('Failed to list datasets.');
    }
  };
  


// Function to list all generated datasets
exports.listGeneratedDatasets = async (req, res) => {
  try {
    const datasets = await GeneratedDataset.find({});
    res.json(datasets);
  } catch (error) {
    console.error('Error fetching generated datasets:', error);
    res.status(500).send('Failed to fetch generated datasets.');
  }
};

// Function to get all generated datasets
exports.getGeneratedDatasets = async (req, res) => {
  try {
    const datasets = await GeneratedDataset.find();
    res.json(datasets);
  } catch (error) {
    console.error('Error fetching datasets:', error);
    res.status(500).send('Failed to fetch datasets.');
  }
};

// Function to update a generated dataset
exports.updateGeneratedDataset = async (req, res) => {
  try {
    const datasetId = req.params.id;
    const updateData = req.body;

    const updatedDataset = await GeneratedDataset.findByIdAndUpdate(
      datasetId,
      updateData,
      { new: true }
    );

    if (!updatedDataset) {
      return res.status(404).send('Dataset not found.');
    }

    res.json(updatedDataset);
  } catch (error) {
    console.error('Error updating dataset:', error);
    res.status(500).send('Failed to update dataset.');
  }
};

  exports.generateCombinedResults = async (req, res) => {
    try {
      const { examName, resultName, year, selectedDataSets } = req.body;
  
      if (!examName || !resultName || !year || !selectedDataSets || selectedDataSets.length === 0) {
        return res.status(400).send({ message: 'examName, resultName, year, and selectedDataSets are required.' });
      }
  
      const combinedCollectionName = `GENERATED_${examName}_${resultName}`;
      if (await mongoose.connection.db.listCollections({ name: combinedCollectionName }).hasNext()) {
        console.log(`Deleting existing collection: ${combinedCollectionName}`);
        await mongoose.connection.db.dropCollection(combinedCollectionName);
      }
  
      const schema = new mongoose.Schema({}, { strict: false });
      let CombinedModel;
      try {
        CombinedModel = mongoose.model(combinedCollectionName);
      } catch (error) {
        if (error.name === 'MissingSchemaError') {
          CombinedModel = mongoose.model(combinedCollectionName, schema, combinedCollectionName);
        } else {
          throw error;
        }
      }
  
      let CourseModel;
      try {
        CourseModel = mongoose.model('courses');
      } catch (error) {
        if (error.name === 'MissingSchemaError') {
          const courseSchema = new mongoose.Schema({}, { strict: false });
          CourseModel = mongoose.model('courses', courseSchema, 'courses');
        } else {
          throw error;
        }
      }
  
      let CollegeModel;
      try {
        CollegeModel = mongoose.model('colleges');
      } catch (error) {
        if (error.name === 'MissingSchemaError') {
          const collegeSchema = new mongoose.Schema({}, { strict: false });
          CollegeModel = mongoose.model('colleges', collegeSchema, 'colleges');
        } else {
          throw error;
        }
      }
  
      const courses = await CourseModel.find({}).lean();
      const colleges = await CollegeModel.find({}).lean();
  
      const courseMap = courses.reduce((acc, course) => {
        acc[course.course] = course;
        return acc;
      }, {});
  
      const collegeMap = colleges.reduce((acc, college) => {
        acc[college.collegeName] = college;
        return acc;
      }, {});
  
      for (const dataSet of selectedDataSets) {
        let RoundModel;
        try {
          RoundModel = mongoose.model(dataSet);
        } catch (error) {
          if (error.name === 'MissingSchemaError') {
              RoundModel = mongoose.model(dataSet, schema, dataSet);
          } else {
            throw error;
          }
        }
        const roundData = await RoundModel.find({}).lean();
  
        const enrichedData = roundData.map(data => {
          const courseDetails = courseMap[data.course] || {};
          const collegeDetails = collegeMap[data.allottedInstitute] || {};
          return {
            ...data,
            ...courseDetails,
            ...collegeDetails,
            _id: new mongoose.Types.ObjectId() // Ensure a new unique _id for each document
          };
        });
  
        await CombinedModel.insertMany(enrichedData);
      }
  
      // Create a metadata entry for the generated dataset
      const metadata = new GeneratedDataset({
        displayName: `${examName} ${resultName}`,
        includeInAllotments: true,
        selectedDataset: combinedCollectionName  // Set the selectedDataset field
      });
      await metadata.save();
  
      res.send('Combined results with course and college details have been successfully generated and saved.');
    } catch (err) {
      console.error('Error generating combined results:', err);
      res.status(500).send('Failed to generate combined results.');
    }
  };

