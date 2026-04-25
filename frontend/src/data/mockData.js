// frontend/src/data/mockData.js

export const parts = [
  // PEUGEOT 3008
  { _id: '1', name: 'Disk Freni Përpara', brand: 'Peugeot', model: '3008', years: [2017, 2018, 2019, 2020, 2021], category: 'Frenat', partNumber: 'PE-3008-DF-01', price: 45.00, stock: 12, isNewPart: true, isFeatured: true, image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&q=80' },
  { _id: '2', name: 'Filtër Ajri Motor', brand: 'Peugeot', model: '3008', years: [2016, 2017, 2018, 2019, 2020], category: 'Filtra', partNumber: 'PE-3008-FA-01', price: 18.50, stock: 25, isNewPart: false, isFeatured: false, image: 'https://images.unsplash.com/photo-1599256621730-535171e28e50?w=600&q=80' },
  { _id: '3', name: 'Kthinë Amortizatori Para', brand: 'Peugeot', model: '3008', years: [2017, 2018, 2019], category: 'Sospensioni', partNumber: 'PE-3008-KA-01', price: 89.00, stock: 8, isNewPart: true, isFeatured: true, image: 'https://images.unsplash.com/photo-1625047509168-a7026f36ae04?w=600&q=80' },
  { _id: '4', name: 'Bateri 70Ah', brand: 'Peugeot', model: '3008', years: [2016, 2017, 2018, 2019, 2020, 2021], category: 'Elektrik', partNumber: 'PE-3008-BA-01', price: 120.00, stock: 5, isNewPart: false, isFeatured: false, image: 'https://images.unsplash.com/photo-1619641782842-83f2f96033d5?w=600&q=80' },

  // PEUGEOT 208
  { _id: '5', name: 'Disk Freni Përpara', brand: 'Peugeot', model: '208', years: [2019, 2020, 2021, 2022], category: 'Frenat', partNumber: 'PE-208-DF-01', price: 38.00, stock: 15, isNewPart: true, isFeatured: true, image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&q=80' },
  { _id: '6', name: 'Pasqyrë Anësore Djathtas', brand: 'Peugeot', model: '208', years: [2019, 2020, 2021], category: 'Karroseria', partNumber: 'PE-208-PA-01', price: 95.00, stock: 4, isNewPart: false, isFeatured: false, image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=600&q=80' },
  { _id: '7', name: 'Filtër Vajguri', brand: 'Peugeot', model: '208', years: [2019, 2020, 2021, 2022], category: 'Filtra', partNumber: 'PE-208-FV-01', price: 12.00, stock: 30, isNewPart: false, isFeatured: false, image: 'https://images.unsplash.com/photo-1599256621730-535171e28e50?w=600&q=80' },

  // PEUGEOT 308
  { _id: '8', name: 'Rrip Distribucioni', brand: 'Peugeot', model: '308', years: [2014, 2015, 2016, 2017, 2018], category: 'Motor', partNumber: 'PE-308-RD-01', price: 65.00, stock: 10, isNewPart: false, isFeatured: true, image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=600&q=80' },
  { _id: '9', name: 'Termostat Uji', brand: 'Peugeot', model: '308', years: [2014, 2015, 2016, 2017, 2018], category: 'Motor', partNumber: 'PE-308-TU-01', price: 28.00, stock: 18, isNewPart: false, isFeatured: false, image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=600&q=80' },
  { _id: '10', name: 'Amortizator Para i Majtë', brand: 'Peugeot', model: '308', years: [2013, 2014, 2015, 2016], category: 'Sospensioni', partNumber: 'PE-308-AM-01', price: 75.00, stock: 6, isNewPart: true, isFeatured: false, image: 'https://images.unsplash.com/photo-1625047509168-a7026f36ae04?w=600&q=80' },

  // RENAULT CLIO
  { _id: '11', name: 'Disk Freni Prapa', brand: 'Renault', model: 'Clio', years: [2019, 2020, 2021, 2022], category: 'Frenat', partNumber: 'RE-CL-DP-01', price: 35.00, stock: 20, isNewPart: true, isFeatured: true, image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&q=80' },
  { _id: '12', name: 'Sensor Parkimi', brand: 'Renault', model: 'Clio', years: [2020, 2021, 2022], category: 'Elektrik', partNumber: 'RE-CL-SP-01', price: 55.00, stock: 9, isNewPart: true, isFeatured: false, image: 'https://images.unsplash.com/photo-1619641782842-83f2f96033d5?w=600&q=80' },
  { _id: '13', name: 'Pasqyrë Anësore Majtas', brand: 'Renault', model: 'Clio', years: [2019, 2020, 2021], category: 'Karroseria', partNumber: 'RE-CL-PM-01', price: 88.00, stock: 5, isNewPart: false, isFeatured: false, image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=600&q=80' },

  // RENAULT MEGANE
  { _id: '14', name: 'Alternator 140A', brand: 'Renault', model: 'Megane', years: [2015, 2016, 2017, 2018, 2019], category: 'Elektrik', partNumber: 'RE-ME-AL-01', price: 155.00, stock: 3, isNewPart: false, isFeatured: true, image: 'https://images.unsplash.com/photo-1619641782842-83f2f96033d5?w=600&q=80' },
  { _id: '15', name: 'Pompë Uji', brand: 'Renault', model: 'Megane', years: [2015, 2016, 2017, 2018], category: 'Motor', partNumber: 'RE-ME-PU-01', price: 42.00, stock: 11, isNewPart: false, isFeatured: false, image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=600&q=80' },
  { _id: '16', name: 'Kit Amortizator Para', brand: 'Renault', model: 'Megane', years: [2016, 2017, 2018, 2019], category: 'Sospensioni', partNumber: 'RE-ME-KA-01', price: 180.00, stock: 4, isNewPart: true, isFeatured: true, image: 'https://images.unsplash.com/photo-1625047509168-a7026f36ae04?w=600&q=80' },

  // RENAULT DUSTER
  { _id: '17', name: 'Braket Motor Djathtas', brand: 'Renault', model: 'Duster', years: [2018, 2019, 2020, 2021], category: 'Motor', partNumber: 'RE-DU-BM-01', price: 78.00, stock: 7, isNewPart: false, isFeatured: false, image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=600&q=80' },
  { _id: '18', name: 'Filtër Klimë', brand: 'Renault', model: 'Duster', years: [2018, 2019, 2020, 2021, 2022], category: 'Filtra', partNumber: 'RE-DU-FK-01', price: 22.00, stock: 22, isNewPart: false, isFeatured: false, image: 'https://images.unsplash.com/photo-1599256621730-535171e28e50?w=600&q=80' },

  // CITROEN C3
  { _id: '19', name: 'Disk Freni Përpara', brand: 'Citroën', model: 'C3', years: [2017, 2018, 2019, 2020, 2021], category: 'Frenat', partNumber: 'CI-C3-DF-01', price: 40.00, stock: 14, isNewPart: true, isFeatured: false, image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&q=80' },
  { _id: '20', name: 'Bomë Freni', brand: 'Citroën', model: 'C3', years: [2017, 2018, 2019, 2020], category: 'Frenat', partNumber: 'CI-C3-BF-01', price: 95.00, stock: 5, isNewPart: false, isFeatured: true, image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&q=80' },

  // CITROEN C5
  { _id: '21', name: 'Sensor Oksigjeni', brand: 'Citroën', model: 'C5', years: [2015, 2016, 2017, 2018], category: 'Elektrik', partNumber: 'CI-C5-SO-01', price: 68.00, stock: 8, isNewPart: false, isFeatured: false, image: 'https://images.unsplash.com/photo-1619641782842-83f2f96033d5?w=600&q=80' },
  { _id: '22', name: 'Kompresor Klimë', brand: 'Citroën', model: 'C5', years: [2014, 2015, 2016, 2017], category: 'Sistemi i Klimës', partNumber: 'CI-C5-KK-01', price: 280.00, stock: 2, isNewPart: false, isFeatured: true, image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=600&q=80' },

  // HYUNDAI TUCSON
  { _id: '23', name: 'Disk Freni Përpara', brand: 'Hyundai', model: 'Tucson', years: [2019, 2020, 2021, 2022, 2023], category: 'Frenat', partNumber: 'HY-TU-DF-01', price: 52.00, stock: 18, isNewPart: true, isFeatured: true, image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&q=80' },
  { _id: '24', name: 'Rrip Distribucioni Kit', brand: 'Hyundai', model: 'Tucson', years: [2015, 2016, 2017, 2018, 2019], category: 'Motor', partNumber: 'HY-TU-RD-01', price: 125.00, stock: 6, isNewPart: false, isFeatured: true, image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=600&q=80' },
  { _id: '25', name: 'Sensor ABS Para i Majtë', brand: 'Hyundai', model: 'Tucson', years: [2019, 2020, 2021], category: 'Elektrik', partNumber: 'HY-TU-ABS-01', price: 45.00, stock: 10, isNewPart: true, isFeatured: false, image: 'https://images.unsplash.com/photo-1619641782842-83f2f96033d5?w=600&q=80' },

  // HYUNDAI I30
  { _id: '26', name: 'Amortizator Para i Djathtë', brand: 'Hyundai', model: 'i30', years: [2017, 2018, 2019, 2020], category: 'Sospensioni', partNumber: 'HY-I30-AD-01', price: 88.00, stock: 7, isNewPart: false, isFeatured: false, image: 'https://images.unsplash.com/photo-1625047509168-a7026f36ae04?w=600&q=80' },
  { _id: '27', name: 'Filtër Ajri Kabine', brand: 'Hyundai', model: 'i30', years: [2017, 2018, 2019, 2020, 2021], category: 'Filtra', partNumber: 'HY-I30-FAK-01', price: 15.00, stock: 35, isNewPart: false, isFeatured: false, image: 'https://images.unsplash.com/photo-1599256621730-535171e28e50?w=600&q=80' },
  { _id: '28', name: 'Pompë Karburanti', brand: 'Hyundai', model: 'i30', years: [2016, 2017, 2018, 2019], category: 'Motor', partNumber: 'HY-I30-PK-01', price: 135.00, stock: 4, isNewPart: true, isFeatured: true, image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=600&q=80' },

  // HYUNDAI KONA
  { _id: '29', name: 'Sensor Parkimi Prapa', brand: 'Hyundai', model: 'Kona', years: [2020, 2021, 2022, 2023], category: 'Elektrik', partNumber: 'HY-KO-SPP-01', price: 48.00, stock: 12, isNewPart: true, isFeatured: false, image: 'https://images.unsplash.com/photo-1619641782842-83f2f96033d5?w=600&q=80' },
  { _id: '30', name: 'Goma Pylli Amortizatori', brand: 'Hyundai', model: 'Kona', years: [2020, 2021, 2022], category: 'Sospensioni', partNumber: 'HY-KO-GP-01', price: 32.00, stock: 16, isNewPart: false, isFeatured: false, image: 'https://images.unsplash.com/photo-1625047509168-a7026f36ae04?w=600&q=80' },

];

export const comingCars = [
  {
    _id: 'c1',
    brand: 'Peugeot',
    model: 'E-3008',
    year: 2024,
    description: 'SUV elektrik i gjeneratës së re. Pritet shumë shpejt!',
    expectedDate: 'Maj 2025',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80',
  },
  {
    _id: 'c2',
    brand: 'Renault',
    model: 'Scenic E-Tech',
    year: 2024,
    description: 'Familjar modern me teknologji hibride të avancuar.',
    expectedDate: 'Qershor 2025',
    image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=800&q=80',
  },
  {
    _id: 'c3',
    brand: 'Hyundai',
    model: 'IONIQ 6',
    year: 2024,
    description: 'Berlina elektrike me autonomi të lartë dhe dizajn futuristik.',
    expectedDate: 'Korrik 2025',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80',
  },
  {
    _id: 'c4',
    brand: 'Citroën',
    model: 'ë-C3',
    year: 2024,
    description: 'Makina e vogël elektrike e arritshme për çdo famil.',
    expectedDate: 'Gusht 2025',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80',
  },
];

export const filters = {
  brands: ['Peugeot', 'Renault', 'Citroën', 'Hyundai'],
  brandModels: {
    Peugeot: ['3008', '208', '308'],
    Renault: ['Clio', 'Megane', 'Duster'],
    Citroën: ['C3', 'C5'],
    Hyundai: ['Tucson', 'i30', 'Kona'],
  },
  categories: ['Frenat', 'Motor', 'Sospensioni', 'Elektrik', 'Filtra', 'Karroseria', 'Sistemi i Klimës'],
};
