const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
require('dotenv').config();
const authMiddleware = require('./middlewares/authMiddleware');

const adminRoutes = require('./routes/adminRoutes');
const authRoutes = require('./routes/auth');
const datasetRoutes = require('./routes/datasetRoutes');
const allotmentsRoutes = require('./routes/allotmentsRoutes');
const seatMatrixRoutes = require('./routes/seatMatrixRoutes');
const collegesRoutes = require('./routes/collegesRoutes');
const coursesRoutes = require('./routes/coursesRoutes');
const feesRoutes = require('./routes/feesRoutes');
const wishlistRoutes = require('./routes/wishlistRoutes');
const userRoutes = require('./routes/users');
const lastRankRoutes = require('./routes/lastRankRoutes');
const paymentRoutes = require('./routes/paymentRoutes');
const informationAlertRoutes = require('./routes/informationAlertRoutes'); 
const profileRoutes = require('./routes/profileRoutes');
const admittedStudentsRoutes = require('./routes/admittedStudentsRoutes');

const app = express();
const server = require('http').createServer(app);
const port = process.env.PORT || 5001;


app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));


// Serve the React build directory
app.use(express.static(path.join(__dirname, 'build')));

// Serve additional static files from the /static directory
app.use('/static', express.static(path.join(__dirname, 'static')));

// Set up CORS
app.use(cors({
  origin: '*',  // This allows all origins
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true
}));


// MongoDB connection setup
const db = process.env.MONGO_URI;
if (!db) {
  console.error('MONGO_URI environment variable is not defined');
  process.exit(1);
}

mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(async () => {
  console.log('MongoDB connected');


  const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true }
  });

  let User;
  try {
    User = mongoose.model('User');
  } catch (error) {
    if (error.name === 'MissingSchemaError') {
      User = mongoose.model('User', userSchema);
    } else {
      throw error;
    }
  }

  // Similar model definitions for Course, College, Fee, etc.
  const courseSchema = new mongoose.Schema({
    course: String,
    courseCode: String,
    duration: String,
    courseCategory: String,
    courseType: String,
    degreeType: String,
    description: String
  });

  let Course;
  try {
    Course = mongoose.model('courses');
  } catch (error) {
    if (error.name === 'MissingSchemaError') {
      Course = mongoose.model('courses', courseSchema);
    } else {
      throw error;
    }
  }

  const collegeSchema = new mongoose.Schema({
    collegeShortName: String,
    collegeAddress: String,
    collegeName: String,
    universityName: String,
    state: String,
    instituteType: String,
    yearOfEstablishment: String,
    totalHospitalBeds: String,
    locationMapLink: String,
    nearestRailwayStation: String,
    distanceFromRailwayStation: String,
    nearestAirport: String,
    distanceFromAirport: String
  });

  let College;
  try {
    College = mongoose.model('colleges');
  } catch (error) {
    if (error.name === 'MissingSchemaError') {
      College = mongoose.model('colleges', collegeSchema);
    } else {
      throw error;
    }
  }

  const feeSchema = new mongoose.Schema({
    collegeName: String,
    courseName: String,
    feeAmount: Number,
    otherFeeDetails: String
  });

  let Fee;
  try {
    Fee = mongoose.model('fees');
  } catch (error) {
    if (error.name === 'MissingSchemaError') {
      Fee = mongoose.model('fees', feeSchema);
    } else {
      throw error;
    }
  }

  const collections = await mongoose.connection.db.listCollections().toArray();

  const generatedResultResources = collections.filter(col => col.name.startsWith('GENERATED_')).map(col => {
    const [_, exam, resultName] = col.name.split('_');
    const schema = new mongoose.Schema({
      examName: String,
      year: String,
      round: String,
      rank: Number,
      allottedQuota: String,
      allottedInstitute: String,
      course: String,
      allottedCategory: String,
      candidateCategory: String,
      courseCode: String,
      duration: String,
      courseCategory: String,
      courseType: String,
      degreeType: String,
      description: String,
      collegeShortName: String,
      collegeAddress: String,
      collegeName: String,
      universityName: String,
      state: String,
      instituteType: String,
      yearOfEstablishment: String,
      totalHospitalBeds: String,
      locationMapLink: String,
      nearestRailwayStation: String,
      distanceFromRailwayStation: String,
      nearestAirport: String,
      distanceFromAirport: String
    }, { strict: false });

    let model;
    try {
      model = mongoose.model(col.name);
    } catch (error) {
      if (error.name === 'MissingSchemaError') {
        model = mongoose.model(col.name, schema, col.name);
      } else {
        throw error;
      }
    }

    let parentCategory;
    if (exam === 'NEET_PG_ALL_INDIA') {
      parentCategory = 'NEET_PG_ALL_INDIA_GENERATED_RESULTS';
    } else if (exam === 'NEET_PG_STATE') {
      parentCategory = 'NEET_PG_STATE_GENERATED_RESULTS';
    } else if (exam === 'NEET_SS') {
      parentCategory = 'NEET_SS_GENERATED_RESULTS';
    } else if (exam === 'INI_CET') {
      parentCategory = 'INI_CET_GENERATED_RESULTS';
    } else {
      parentCategory = `${exam}_GENERATED_RESULTS`;
    }

    return {
      resource: model,
      options: {
        navigation: {
          name: parentCategory,
          icon: 'Document'
        },
        properties: { _id: { isVisible: false } }
      }
    };
  });
})
.catch(err => console.error('MongoDB connection error:', err));

// Set up body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Register API routes
app.use('/api/users', authMiddleware, userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/wishlist', authMiddleware, wishlistRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/dataset', datasetRoutes);
app.use('/api/allotments', authMiddleware, allotmentsRoutes);
app.use('/api/admittedStudents', authMiddleware, admittedStudentsRoutes);
app.use('/api/seatMatrix', authMiddleware, seatMatrixRoutes);
app.use('/api/colleges', collegesRoutes);
app.use('/api/courses', coursesRoutes);
app.use('/api/fees', feesRoutes);
app.use('/api/protected', require('./routes/protectedRoute'));
app.use('/api/lastrank', lastRankRoutes);
app.use('/api/payment', paymentRoutes);
app.use('/api/admin-data', informationAlertRoutes);
app.use('/api/profile', profileRoutes);

// Serve the React app for any route not handled by the above
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

server.setTimeout(30 * 60 * 1000);

// Start the server
server.listen(5001, () => {
  console.log('Server is running on port 5001');
});


