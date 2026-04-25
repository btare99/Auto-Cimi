const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const Part = require('./models/Part');
const ComingCar = require('./models/ComingCar');

const parts = [
  // PEUGEOT 3008
  { name: 'Disk Freni Përpara', brand: 'Peugeot', model: '3008', years: [2017, 2018, 2019, 2020, 2021], category: 'Frenat', partNumber: 'PE-3008-DF-01', price: 45.00, stock: 12, isNewPart: true, isFeatured: true },
  { name: 'Filtër Ajri Motor', brand: 'Peugeot', model: '3008', years: [2016, 2017, 2018, 2019, 2020], category: 'Filtra', partNumber: 'PE-3008-FA-01', price: 18.50, stock: 25, isNewPart: false, isFeatured: false },
  { name: 'Kthinë Amortizatori Para', brand: 'Peugeot', model: '3008', years: [2017, 2018, 2019], category: 'Sospensioni', partNumber: 'PE-3008-KA-01', price: 89.00, stock: 8, isNewPart: true, isFeatured: true },
  { name: 'Bateri 70Ah', brand: 'Peugeot', model: '3008', years: [2016, 2017, 2018, 2019, 2020, 2021], category: 'Elektrik', partNumber: 'PE-3008-BA-01', price: 120.00, stock: 5, isNewPart: false, isFeatured: false },

  // PEUGEOT 208
  { name: 'Disk Freni Përpara', brand: 'Peugeot', model: '208', years: [2019, 2020, 2021, 2022], category: 'Frenat', partNumber: 'PE-208-DF-01', price: 38.00, stock: 15, isNewPart: true, isFeatured: true },
  { name: 'Pasqyrë Anësore Djathtas', brand: 'Peugeot', model: '208', years: [2019, 2020, 2021], category: 'Karroseria', partNumber: 'PE-208-PA-01', price: 95.00, stock: 4, isNewPart: false, isFeatured: false },
  { name: 'Filtër Vajguri', brand: 'Peugeot', model: '208', years: [2019, 2020, 2021, 2022], category: 'Filtra', partNumber: 'PE-208-FV-01', price: 12.00, stock: 30, isNewPart: false, isFeatured: false },

  // PEUGEOT 308
  { name: 'Rrip Distribucioni', brand: 'Peugeot', model: '308', years: [2014, 2015, 2016, 2017, 2018], category: 'Motor', partNumber: 'PE-308-RD-01', price: 65.00, stock: 10, isNewPart: false, isFeatured: true },
  { name: 'Termostat Uji', brand: 'Peugeot', model: '308', years: [2014, 2015, 2016, 2017, 2018], category: 'Motor', partNumber: 'PE-308-TU-01', price: 28.00, stock: 18, isNewPart: false, isFeatured: false },
  { name: 'Amortizator Para i Majtë', brand: 'Peugeot', model: '308', years: [2013, 2014, 2015, 2016], category: 'Sospensioni', partNumber: 'PE-308-AM-01', price: 75.00, stock: 6, isNewPart: true, isFeatured: false },

  // RENAULT CLIO
  { name: 'Disk Freni Prapa', brand: 'Renault', model: 'Clio', years: [2019, 2020, 2021, 2022], category: 'Frenat', partNumber: 'RE-CL-DP-01', price: 35.00, stock: 20, isNewPart: true, isFeatured: true },
  { name: 'Sensor Parkimi', brand: 'Renault', model: 'Clio', years: [2020, 2021, 2022], category: 'Elektrik', partNumber: 'RE-CL-SP-01', price: 55.00, stock: 9, isNewPart: true, isFeatured: false },
  { name: 'Pasqyrë Anësore Majtas', brand: 'Renault', model: 'Clio', years: [2019, 2020, 2021], category: 'Karroseria', partNumber: 'RE-CL-PM-01', price: 88.00, stock: 5, isNewPart: false, isFeatured: false },

  // RENAULT MEGANE
  { name: 'Alternator 140A', brand: 'Renault', model: 'Megane', years: [2015, 2016, 2017, 2018, 2019], category: 'Elektrik', partNumber: 'RE-ME-AL-01', price: 155.00, stock: 3, isNewPart: false, isFeatured: true },
  { name: 'Pompë Uji', brand: 'Renault', model: 'Megane', years: [2015, 2016, 2017, 2018], category: 'Motor', partNumber: 'RE-ME-PU-01', price: 42.00, stock: 11, isNewPart: false, isFeatured: false },
  { name: 'Kit Amortizator Para', brand: 'Renault', model: 'Megane', years: [2016, 2017, 2018, 2019], category: 'Sospensioni', partNumber: 'RE-ME-KA-01', price: 180.00, stock: 4, isNewPart: true, isFeatured: true },

  // RENAULT DUSTER
  { name: 'Braket Motor Djathtas', brand: 'Renault', model: 'Duster', years: [2018, 2019, 2020, 2021], category: 'Motor', partNumber: 'RE-DU-BM-01', price: 78.00, stock: 7, isNewPart: false, isFeatured: false },
  { name: 'Filtër Klimë', brand: 'Renault', model: 'Duster', years: [2018, 2019, 2020, 2021, 2022], category: 'Filtra', partNumber: 'RE-DU-FK-01', price: 22.00, stock: 22, isNewPart: false, isFeatured: false },

  // CITROEN C3
  { name: 'Disk Freni Përpara', brand: 'Citroën', model: 'C3', years: [2017, 2018, 2019, 2020, 2021], category: 'Frenat', partNumber: 'CI-C3-DF-01', price: 40.00, stock: 14, isNewPart: true, isFeatured: false },
  { name: 'Bomë Freni', brand: 'Citroën', model: 'C3', years: [2017, 2018, 2019, 2020], category: 'Frenat', partNumber: 'CI-C3-BF-01', price: 95.00, stock: 5, isNewPart: false, isFeatured: true },

  // CITROEN C5
  { name: 'Sensor Oksigjeni', brand: 'Citroën', model: 'C5', years: [2015, 2016, 2017, 2018], category: 'Elektrik', partNumber: 'CI-C5-SO-01', price: 68.00, stock: 8, isNewPart: false, isFeatured: false },
  { name: 'Kompresor Klimë', brand: 'Citroën', model: 'C5', years: [2014, 2015, 2016, 2017], category: 'Sistemi i Klimës', partNumber: 'CI-C5-KK-01', price: 280.00, stock: 2, isNewPart: false, isFeatured: true },

  // HYUNDAI TUCSON
  { name: 'Disk Freni Përpara', brand: 'Hyundai', model: 'Tucson', years: [2019, 2020, 2021, 2022, 2023], category: 'Frenat', partNumber: 'HY-TU-DF-01', price: 52.00, stock: 18, isNewPart: true, isFeatured: true },
  { name: 'Rrip Distribucioni Kit', brand: 'Hyundai', model: 'Tucson', years: [2015, 2016, 2017, 2018, 2019], category: 'Motor', partNumber: 'HY-TU-RD-01', price: 125.00, stock: 6, isNewPart: false, isFeatured: true },
  { name: 'Sensor ABS Para i Majtë', brand: 'Hyundai', model: 'Tucson', years: [2019, 2020, 2021], category: 'Elektrik', partNumber: 'HY-TU-ABS-01', price: 45.00, stock: 10, isNewPart: true, isFeatured: false },

  // HYUNDAI I30
  { name: 'Amortizator Para i Djathtë', brand: 'Hyundai', model: 'i30', years: [2017, 2018, 2019, 2020], category: 'Sospensioni', partNumber: 'HY-I30-AD-01', price: 88.00, stock: 7, isNewPart: false, isFeatured: false },
  { name: 'Filtër Ajri Kabine', brand: 'Hyundai', model: 'i30', years: [2017, 2018, 2019, 2020, 2021], category: 'Filtra', partNumber: 'HY-I30-FAK-01', price: 15.00, stock: 35, isNewPart: false, isFeatured: false },
  { name: 'Pompë Karburanti', brand: 'Hyundai', model: 'i30', years: [2016, 2017, 2018, 2019], category: 'Motor', partNumber: 'HY-I30-PK-01', price: 135.00, stock: 4, isNewPart: true, isFeatured: true },

  // HYUNDAI KONA
  { name: 'Sensor Parkimi Prapa', brand: 'Hyundai', model: 'Kona', years: [2020, 2021, 2022, 2023], category: 'Elektrik', partNumber: 'HY-KO-SPP-01', price: 48.00, stock: 12, isNewPart: true, isFeatured: false },
  { name: 'Goma Pylli Amortizatori', brand: 'Hyundai', model: 'Kona', years: [2020, 2021, 2022], category: 'Sospensioni', partNumber: 'HY-KO-GP-01', price: 32.00, stock: 16, isNewPart: false, isFeatured: false },
];

const comingCars = [
  {
    brand: 'Peugeot',
    model: 'E-3008',
    year: 2024,
    description: 'SUV elektrik i gjeneratës së re. Pritet shumë shpejt!',
    expectedDate: 'Maj 2025',
    image: '',
  },
  {
    brand: 'Renault',
    model: 'Scenic E-Tech',
    year: 2024,
    description: 'Familjar modern me teknologji hibride të avancuar.',
    expectedDate: 'Qershor 2025',
    image: '',
  },
  {
    brand: 'Hyundai',
    model: 'IONIQ 6',
    year: 2024,
    description: 'Berlina elektrike me autonomi të lartë dhe dizajn futuristik.',
    expectedDate: 'Korrik 2025',
    image: '',
  },
  {
    brand: 'Citroën',
    model: 'ë-C3',
    year: 2024,
    description: 'Makina e vogël elektrike e arritshme për çdo famil.',
    expectedDate: 'Gusht 2025',
    image: '',
  },
];

async function seed() {
  await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/autocimi');
  console.log('✅ Lidhur me MongoDB');

  await Part.deleteMany({});
  await ComingCar.deleteMany({});

  await Part.insertMany(parts);
  await ComingCar.insertMany(comingCars);

  console.log(`✅ U shtuan ${parts.length} pjesë dhe ${comingCars.length} makina "vine se shpejti"`);
  mongoose.disconnect();
}

seed().catch(console.error);
