require('dotenv').config(); // Load env vars first!

const express = require('express');
const connectDB = require('./config/db');
const jobRoutes = require('./routes/jobRoutes');
const enrollmentRoutes = require('./routes/enrollmentRoutes');
const contactRoutes = require("./routes/contactRoutes");
const userRoutes = require("./routes/userRoutes");
//const createAdmin = require("./utils/createAdmin"); // ✅ Import this

const app = express();
const cors = require('cors');
app.use(cors({
  origin: [
    'https://isaar.in',
    'https://www.isaar.in',
    'https://admin.isaar.in',
    'https://isar-main.onrender.com',
    'https://main.d3dfmh442d4tq3.amplifyapp.com' // ✅ your new Amplify build!
  ],
  credentials: true
}));

  


// Connect to MongoDB
connectDB()/*.then(() => {
  // ✅ Create default admin user once DB is connected
  createAdmin();
});*/

app.use(express.json());
app.use('/uploads', express.static('uploads'));
app.use('/api', jobRoutes);
app.use("/api/enrollments", enrollmentRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/admin", userRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

