const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Part = require('./models/Part');

dotenv.config();

const partsData = [
  { name: 'Injektorë Naite (Set)', brand: 'Peugeot', model: '208 / 308', year: 2015, category: 'Sistemi i Karburantit', partNumber: 'INJ-PSA-001', price: 150.00, stock: 5, isNewPart: false, isFeatured: true, image: '/images/IMG_8730.jpg' },
  { name: 'Pompë Nafte / Presioni Lartë', brand: 'Citroën', model: 'C3 / C4', year: 2013, category: 'Sistemi i Karburantit', partNumber: 'PUMP-HP-002', price: 220.00, stock: 3, isNewPart: false, isFeatured: false, image: '/images/IMG_8731.jpg' },
  { name: 'Motorr Ventilatori Kabine', brand: 'Peugeot', model: '208', year: 2016, category: 'Sistemi i Ftohjes', partNumber: 'MOT-VEN-208', price: 45.00, stock: 8, isNewPart: false, isFeatured: true, image: '/images/IMG_8732.jpg' },
  { name: 'Motorr Ventilatori Kabine', brand: 'Renault', model: 'Clio', year: 2017, category: 'Sistemi i Ftohjes', partNumber: 'MOT-VEN-CLIO', price: 40.00, stock: 6, isNewPart: false, isFeatured: false, image: '/images/IMG_8733.jpg' },
  { name: 'Garniturë Injektorësh', brand: 'Peugeot', model: 'Partner', year: 2018, category: 'Sistemi i Karburantit', partNumber: 'INJ-SET-005', price: 180.00, stock: 4, isNewPart: false, isFeatured: true, image: '/images/IMG_8734.jpg' },
  { name: 'Injektor i Vetëm 1.6 HDi', brand: 'Citroën', model: 'Berlingo', year: 2016, category: 'Sistemi i Karburantit', partNumber: 'INJ-SNGL-006', price: 50.00, stock: 12, isNewPart: false, isFeatured: false, image: '/images/IMG_8735.jpg' },
  { name: 'Injektor Renault 1.5 dCi', brand: 'Renault', model: 'Megane', year: 2015, category: 'Sistemi i Karburantit', partNumber: 'INJ-RE-007', price: 45.00, stock: 10, isNewPart: false, isFeatured: false, image: '/images/IMG_8736.jpg' },
  { name: 'Injektor Karburanti', brand: 'Peugeot', model: '3008', year: 2019, category: 'Sistemi i Karburantit', partNumber: 'INJ-PSA-008', price: 55.00, stock: 7, isNewPart: false, isFeatured: false, image: '/images/IMG_8737.jpg' },
  { name: 'Injektor Karburanti', brand: 'Citroën', model: 'C5', year: 2013, category: 'Sistemi i Karburantit', partNumber: 'INJ-CI-009', price: 40.00, stock: 15, isNewPart: false, isFeatured: false, image: '/images/IMG_8738.jpg' },
  { name: 'Injektor Karburanti', brand: 'Renault', model: 'Captur', year: 2016, category: 'Sistemi i Karburantit', partNumber: 'INJ-RE-010', price: 45.00, stock: 9, isNewPart: false, isFeatured: false, image: '/images/IMG_8739.jpg' },
  { name: 'Kompresor Kondicioneri', brand: 'Peugeot', model: '207 / 208', year: 2012, category: 'Sistemi i Klimës', partNumber: 'AC-COMP-207', price: 110.00, stock: 4, isNewPart: false, isFeatured: true, image: '/images/IMG_8740.jpg' },
  { name: 'Kompresor Kondicioneri', brand: 'Peugeot', model: '207', year: 2009, category: 'Sistemi i Klimës', partNumber: 'AC-COMP-012', price: 90.00, stock: 5, isNewPart: false, isFeatured: false, image: '/images/IMG_8741.jpg' },
  { name: 'Kavo Marshe (Set)', brand: 'Renault', model: 'Clio / Megane', year: 2015, category: 'Transmisioni', partNumber: 'GEAR-CAB-RE', price: 35.00, stock: 7, isNewPart: false, isFeatured: false, image: '/images/IMG_8742.jpg' },
  { name: 'Levë Marshi e Kompletuar', brand: 'Peugeot', model: '207 / C3', year: 2013, category: 'Transmisioni', partNumber: 'GEAR-LEV-PSA', price: 50.00, stock: 3, isNewPart: false, isFeatured: true, image: '/images/IMG_8743.jpg' },
  { name: 'Kompresor Kondicioneri', brand: 'Citroën', model: 'C3 / C4', year: 2014, category: 'Sistemi i Klimës', partNumber: 'AC-COMP-CI', price: 100.00, stock: 6, isNewPart: false, isFeatured: false, image: '/images/IMG_8744.jpg' },
  { name: 'Kompresor Kondicioneri', brand: 'Renault', model: 'Clio / Megane', year: 2018, category: 'Sistemi i Klimës', partNumber: 'AC-COMP-RE', price: 120.00, stock: 2, isNewPart: false, isFeatured: false, image: '/images/IMG_8745.jpg' },
  { name: 'Motorr i Kompletuar 1.6 HDi', brand: 'Peugeot', model: '308', year: 2014, category: 'Motorri', partNumber: 'ENG-PSA-1.6', price: 850.00, stock: 1, isNewPart: false, isFeatured: true, image: '/images/IMG_8746.jpg' },
  { name: 'Tuba Kondicioneri', brand: 'Citroën', model: 'Berlingo / Partner', year: 2013, category: 'Sistemi i Klimës', partNumber: 'AC-HOS-018', price: 30.00, stock: 14, isNewPart: false, isFeatured: false, image: '/images/IMG_8747.jpg' },
  { name: 'Kambio Manuale 5 Marsha', brand: 'Peugeot', model: '208', year: 2015, category: 'Transmisioni', partNumber: 'GBX-PSA-5SP', price: 280.00, stock: 2, isNewPart: false, isFeatured: true, image: '/images/IMG_8748.jpg' },
  { name: 'Motorr i Kompletuar 1.6 Turbo', brand: 'Hyundai', model: 'Tucson / Mini', year: 2017, category: 'Motorri', partNumber: 'ENG-HY-1.6T', price: 1200.00, stock: 1, isNewPart: false, isFeatured: true, image: '/images/IMG_8749.jpg' },
  { name: 'Box Filtri Ajri', brand: 'Hyundai', model: 'i30 / Mini', year: 2019, category: 'Motorri', partNumber: 'AIR-BOX-021', price: 40.00, stock: 5, isNewPart: false, isFeatured: false, image: '/images/IMG_8750.jpg' },
  { name: 'Motorr Elektrik / Inverter', brand: 'Renault', model: 'Zoe', year: 2016, category: 'Sistemi Elektrik', partNumber: 'EL-INV-ZOE', price: 600.00, stock: 1, isNewPart: false, isFeatured: true, image: '/images/IMG_8751.jpg' },
  { name: 'Kolektor Thithje 1.6 16V', brand: 'Renault', model: 'Megane / Clio', year: 2011, category: 'Motorri', partNumber: 'INT-MAN-RE', price: 55.00, stock: 3, isNewPart: false, isFeatured: false, image: '/images/IMG_8752.jpg' },
  { name: 'Motorr i Kompletuar 1.5 dCi', brand: 'Renault', model: 'Clio / Captur', year: 2015, category: 'Motorri', partNumber: 'ENG-RE-1.5DCI', price: 750.00, stock: 2, isNewPart: false, isFeatured: true, image: '/images/IMG_8753.jpg' },
  { name: 'Gjysëmaks (Drive Shaft)', brand: 'Peugeot', model: '208', year: 2014, category: 'Transmisioni', partNumber: 'DRV-SHA-25', price: 65.00, stock: 6, isNewPart: false, isFeatured: false, image: '/images/IMG_8754.jpg' },
  { name: 'Stopa të Pasëm (Set)', brand: 'Peugeot', model: '308', year: 2016, category: 'Ndriçimi', partNumber: 'TL-308-026', price: 90.00, stock: 4, isNewPart: false, isFeatured: false, image: '/images/IMG_8755.jpg' },
  { name: 'Pompë Karburanti', brand: 'Peugeot', model: '208 / 308', year: 2015, category: 'Sistemi i Karburantit', partNumber: 'FUEL-PUMP-PSA', price: 55.00, stock: 8, isNewPart: false, isFeatured: false, image: '/images/IMG_8756.jpg' },
  { name: 'Kompjuter Motorri (ECU)', brand: 'Peugeot', model: '207 / 208', year: 2012, category: 'Motorri', partNumber: 'ECU-PSA-028', price: 130.00, stock: 5, isNewPart: false, isFeatured: true, image: '/images/IMG_8757.jpg' },
  { name: 'Pasqyrë e Majtë', brand: 'Citroën', model: 'C3 Picasso', year: 2014, category: 'Karroceria', partNumber: 'MIRR-C3P-029', price: 45.00, stock: 3, isNewPart: false, isFeatured: false, image: '/images/IMG_8758.jpg' },
  { name: 'Skaldime Timoni / Hidrogrup', brand: 'Renault', model: 'Megane / Scenic', year: 2013, category: 'Sistemi i Drejtimit', partNumber: 'STR-RACK-RE', price: 180.00, stock: 2, isNewPart: false, isFeatured: true, image: '/images/IMG_8759.jpg' },
  { name: 'Derë e Kompletuar', brand: 'Citroën', model: 'Berlingo / C3', year: 2018, category: 'Karroceria', partNumber: 'DOOR-CI-031', price: 150.00, stock: 4, isNewPart: false, isFeatured: false, image: '/images/IMG_8760.jpg' },
  { name: 'Aks i Pasëm (Rear Beam)', brand: 'Citroën', model: 'Berlingo / Partner', year: 2014, category: 'Transmisioni', partNumber: 'AXL-RR-032', price: 250.00, stock: 2, isNewPart: false, isFeatured: true, image: '/images/IMG_8761.jpg' },
  { name: 'Tuba Uji / Ftohje', brand: 'Peugeot', model: '308', year: 2017, category: 'Sistemi i Ftohjes', partNumber: 'HOS-WAT-033', price: 20.00, stock: 20, isNewPart: false, isFeatured: false, image: '/images/IMG_8762.jpg' },
  { name: 'Parafrymë / Maskarino', brand: 'Renault', model: 'Clio / Megane', year: 2019, category: 'Karroceria', partNumber: 'GRIL-RE-034', price: 65.00, stock: 5, isNewPart: false, isFeatured: false, image: '/images/IMG_8763.jpg' },
  { name: 'Parafrymë / Maskarino', brand: 'Citroën', model: 'C3 / C4', year: 2020, category: 'Karroceria', partNumber: 'GRIL-CI-035', price: 70.00, stock: 3, isNewPart: false, isFeatured: false, image: '/images/IMG_8764.jpg' },
  { name: 'Parafrymë të Pasme', brand: 'Renault', model: 'Clio / Captur', year: 2016, category: 'Karroceria', partNumber: 'BMP-RR-RE', price: 85.00, stock: 4, isNewPart: false, isFeatured: false, image: '/images/IMG_8765.jpg' },
  { name: 'Tuba Ajri / Thithje', brand: 'Peugeot', model: '208 / 308', year: 2015, category: 'Motorri', partNumber: 'INT-HOS-PSA', price: 25.00, stock: 15, isNewPart: false, isFeatured: false, image: '/images/IMG_8766.jpg' },
  { name: 'Kambio 1.6 Benzine', brand: 'Citroën', model: 'C4', year: 2011, category: 'Transmisioni', partNumber: 'GBX-CI-1.6BZ', price: 220.00, stock: 3, isNewPart: false, isFeatured: false, image: '/images/IMG_8767.jpg' },
  { name: 'Parafango e Përparme', brand: 'Renault', model: 'Modus / Clio', year: 2008, category: 'Karroceria', partNumber: 'FEND-RE-039', price: 40.00, stock: 10, isNewPart: false, isFeatured: false, image: '/images/IMG_8768.jpg' }
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ Lidhur me MongoDB');

    // Fshi të dhënat ekzistuese
    await Part.deleteMany({});
    console.log('🗑️ Pastruat koleksionin e pjesëve');

    // Shto të dhënat e reja
    await Part.insertMany(partsData);
    console.log(`🚀 Të gjitha të ${partsData.length} pjesët u zhvendosën me sukses në MongoDB me fotot origjinale!`);

    process.exit();
  } catch (err) {
    console.error('❌ Gabim gjatë mbjelljes:', err);
    process.exit(1);
  }
};

seedDB();
