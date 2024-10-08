const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Schema for selected exams and their counseling types
const examSelectionSchema = new mongoose.Schema({
  exam: { type: String, default: "NEET_PG" },
  counselingType: { type: String, default: "ALL INDIA"},
});

// Schema for wishlist items
const wishlistItemSchema = new mongoose.Schema({
  allotmentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Allotment', required: true },
  allotment: { type: mongoose.Schema.Types.Mixed, required: true },
  uuid: { type: String, required: true },
  order:{type: Number ,required:true}
});

// Schema for wishlist grouped by exam and counseling type
const wishlistSchema = new mongoose.Schema({
  examName: { type: String, required: false },
  counselingType: { type: String, required: false },
  items: [wishlistItemSchema],
});

// Main User Schema
const userSchema = new mongoose.Schema({
  currentToken :{type:String,default:null},
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  mobileNumber: { type: String, required: true, unique: true },
  state: { type: String },
  counseling: { type: String },
  password: { type: String },
  otp: { type: String },
  isAdmin: { type: Boolean, default: false },
  paymentStatus: { type: String, default: 'Unpaid' },
  selectedExams: {
    type: [examSelectionSchema],
    default: [{ exam: "NEET_PG", counselingType: "ALL INDIA" }],
  },
  wishlist: [wishlistSchema], // Grouped wishlist by exam and counseling type
}, { timestamps: true });


// Hash the password before saving the user
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Compare input password with the hashed password in the database
userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

module.exports = mongoose.model('User', userSchema);
