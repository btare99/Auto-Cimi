const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Part = require('./models/Part');
const ComingCar = require('./models/ComingCar');

dotenv.config();

const partsToSeed = [
  {
    name: 'Disqe Freni Përpara',
    brand: 'Peugeot',
    model: '308',
    year: '2018',
    category: 'Sistemi i Frenimit',
    price: 45.00,
    stock: 10,
    description: 'Disqe freni origjinale për Peugeot 308 (2014-2021). Kualitet i lartë.',
    images: ['https://example.com/disk.jpg'],
    isFeatured: true
  },
  {
    name: 'Filtër Ajri Motorri',
    brand: 'Renault',
    model: 'Clio',
    year: '2016',
    category: 'Motorri',
    price: 12.50,
    stock: 25,
    description: 'Filtër ajri për Renault Clio IV. Siguron performancë maksimale.',
    images: ['https://example.com/filter.jpg'],
    isNewArrival: true
  },
  {
    name: 'Bateri 70Ah',
    brand: 'Hyundai',
    model: 'Tucson',
    year: '2020',
    category: 'Sistemi Elektrik',
    price: 85.00,
    stock: 5,
    description: 'Bateri origjinale për Hyundai Tucson. Garanci 2 vjet.',
    images: ['https://example.com/battery.jpg']
  }
];

const carsToSeed = [
  {
    brand: 'Peugeot',
    model: '2008',
    year: 2024,
    image: 'https://example.com/2008.jpg',
    description: 'Pjesët e këmbimit për modelin e ri vijnë së shpejti.',
    expectedDate: 'Qershor 2024'
  },
  {
    brand: 'Renault',
    model: 'Austral',
    year: 2024,
    image: 'https://example.com/austral.jpg',
    description: 'Së shpejti pjesë këmbimi për Renault Austral.',
    expectedDate: 'Korrik 2024'
  }
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/autocimi');
    console.log('✅ Lidhur me MongoDB');

    // Fshijmë të dhënat e vjetra
    await Part.deleteMany({});
    await ComingCar.deleteMany({});
    console.log('🗑️ Të dhënat e vjetra u fshinë');

    // Shtojmë të dhënat e reja
    await Part.insertMany(partsToSeed);
    await ComingCar.insertMany(carsToSeed);
    console.log('🚀 Databaza u mbush me sukses!');

    process.exit();
  } catch (err) {
    console.error('❌ Gabim gjatë mbushjes:', err);
    process.exit(1);
  }
};

seedDB();
