const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const AdminBro = require('admin-bro');
const AdminBroExpress = require('@admin-bro/express');
const AdminBroMongoose = require('@admin-bro/mongoose');
const path = require('path');
const bodyParser = require('body-parser');

require('dotenv').config();

const adminRoutes = require('./routes/adminRoutes');
const authRoutes = require('./routes/auth');
const datasetRoutes = require('./routes/datasetRoutes');

const app = express();
const port = process.env.PORT || 5001;

app.use('/static', express.static(path.join(__dirname, 'static')));

app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:5173'],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true
}));

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

    AdminBro.registerAdapter(AdminBroMongoose);

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
    const roundResources = collections.filter(col => col.name.match(/^\w+_\w+_\d{4}_\w+$/)).map(col => {
      const [exam, examType, year, round] = col.name.split('_');
      const schema = new mongoose.Schema({
        examName: String,
        year: String,
        round: String,
        rank: Number,
        allottedQuota: String,
        allottedInstitute: String,
        course: String,
        allottedCategory: String,
        candidateCategory: String
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
      if (exam === 'NEET' && examType === 'PG') {
        if (col.name.includes('ALL_INDIA')) {
          parentCategory = 'NEET_PG_ALL_INDIA';
        } else if (col.name.includes('STATE')) {
          parentCategory = 'NEET_PG_STATE';
        }
      } else if (exam === 'NEET' && examType === 'SS') {
        parentCategory = 'NEET_SS';
      } else if (exam === 'INI' && examType === 'CET') {
        parentCategory = 'INI_CET';
      } else {
        parentCategory = `${exam}_${examType}`;
      }

      return {
        resource: model,
        options: {
          navigation: {
            name: parentCategory,
            icon: 'Document'
          },
          properties: { _id: { isVisible: false } },
          actions: {
            deleteByCategory: {
              actionType: 'resource',
              icon: 'Delete',
              handler: async (request, response, context) => {
                const { category } = request.payload;
                if (category) {
                  await model.deleteMany({ category });
                  return {
                    redirectUrl: context.h.resourceUrl(),
                    notice: {
                      message: `All records with category ${category} have been deleted.`,
                      type: 'success'
                    }
                  };
                } else {
                  return {
                    notice: {
                      message: 'Category is required to delete records.',
                      type: 'error'
                    }
                  };
                }
              },
              component: AdminBro.bundle(path.join(__dirname, 'components/DeleteByCategory')),
            }
          }
        }
      };
    });

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

    const resources = [
      { resource: User, options: { properties: { _id: { isVisible: false } } } },
      { resource: Course, options: { properties: { _id: { isVisible: false } } } },
      { resource: College, options: { properties: { _id: { isVisible: false } } } },
      ...roundResources,
      ...generatedResultResources
    ];

    const adminBro = new AdminBro({
      resources,
      rootPath: '/admin',
      branding: {
        companyName: 'Rank and Seats',
        logo: '/static/logo.png',
        softwareBrothers: false,
      },
      dashboard: {
        handler: async (req, res, context) => {
          res.redirect('/admin/resources/User'); // Replace with your desired redirect
        },
        component: false, // Hide the dashboard component
      },
    });

    const ADMIN = {
      email: process.env.ADMIN_EMAIL || 'admin@rankandseats.com',
      password: process.env.ADMIN_PASSWORD || '100200@admin',
    };

    const router = AdminBroExpress.buildAuthenticatedRouter(adminBro, {
      authenticate: async (email, password) => {
        if (email === ADMIN.email && password === ADMIN.password) {
          return ADMIN;
        }
        return null;
      },
      cookieName: 'adminbro',
      cookiePassword: 'somepassword',
    }, null, {
      resave: false,
      saveUninitialized: true,
      cookie: { maxAge: 86400000 },
    });

    app.use(adminBro.options.rootPath, router);
    app.use(bodyParser.json());
    // Register other middlewares after AdminBro setup
    app.use(bodyParser.urlencoded({ extended: true }));

    // Register routes
    app.use('/api', adminRoutes);
    app.use('/api/auth', authRoutes);
    app.use('/api', datasetRoutes);

    app.use((err, req, res, next) => {
      console.error(err.stack);
      res.status(500).send('Something broke!');
    });

    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch(err => console.error('MongoDB connection error:', err));
