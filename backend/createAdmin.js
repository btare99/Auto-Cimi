const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./models/User');

dotenv.config();

const createAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/autocimi');
    console.log('✅ Lidhur me MongoDB');

    let admin = await User.findOne({ username: 'admin' });
    
    if (admin) {
      console.log('ℹ️ Admini ekziston, po përditësoj fjalëkalimin...');
      admin.password = process.env.ADMIN_PASSWORD || 'admin123';
      await admin.save();
      console.log('✅ Fjalëkalimi u përditësua me sukses!');
    } else {
      admin = new User({
        username: 'admin',
        password: process.env.ADMIN_PASSWORD || 'admin123',
      });
      await admin.save();
      console.log('✅ Admini u krijua me sukses!');
    }

    console.log('Username: admin');
    console.log('Password:', process.env.ADMIN_PASSWORD || 'admin123');
    process.exit(0);
  } catch (err) {
    console.error('❌ Gabim:', err);
    process.exit(1);
  }
};

createAdmin();
