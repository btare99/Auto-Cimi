// frontend/src/data/mockData.js

// Të dhënat e pjesëve të identifikuara nga imazhet në src/images/
export const parts = [
  { _id: '1', name: 'Injektorë Naite (Set)', brand: 'Peugeot', model: '208 / 308', years: [2012, 2018], category: 'Sistemi i Karburantit', partNumber: 'INJ-PSA-001', price: 150.00, stock: 5, isNewPart: false, isFeatured: true, image: '/src/images/IMG_8730.jpg' },
  { _id: '2', name: 'Pompë Nafte / Presioni Lartë', brand: 'Citroën', model: 'C3 / C4', years: [2010, 2016], category: 'Sistemi i Karburantit', partNumber: 'PUMP-HP-002', price: 220.00, stock: 3, isNewPart: false, isFeatured: false, image: '/src/images/IMG_8731.jpg' },
  { _id: '3', name: 'Motorr Ventilatori Kabine', brand: 'Peugeot', model: '208', years: [2012, 2019], category: 'Sistemi i Ftohjes', partNumber: 'MOT-VEN-208', price: 45.00, stock: 8, isNewPart: false, isFeatured: true, image: '/src/images/IMG_8732.jpg' },
  { _id: '4', name: 'Motorr Ventilatori Kabine', brand: 'Renault', model: 'Clio', years: [2013, 2020], category: 'Sistemi i Ftohjes', partNumber: 'MOT-VEN-CLIO', price: 40.00, stock: 6, isNewPart: false, isFeatured: false, image: '/src/images/IMG_8733.jpg' },
  { _id: '5', name: 'Garniturë Injektorësh', brand: 'Peugeot', model: 'Partner', years: [2015, 2021], category: 'Sistemi i Karburantit', partNumber: 'INJ-SET-005', price: 180.00, stock: 4, isNewPart: false, isFeatured: true, image: '/src/images/IMG_8734.jpg' },
  { _id: '6', name: 'Injektor i Vetëm 1.6 HDi', brand: 'Citroën', model: 'Berlingo', years: [2014, 2018], category: 'Sistemi i Karburantit', partNumber: 'INJ-SNGL-006', price: 50.00, stock: 12, isNewPart: false, isFeatured: false, image: '/src/images/IMG_8735.jpg' },
  { _id: '7', name: 'Injektor Renault 1.5 dCi', brand: 'Renault', model: 'Megane', years: [2012, 2017], category: 'Sistemi i Karburantit', partNumber: 'INJ-RE-007', price: 45.00, stock: 10, isNewPart: false, isFeatured: false, image: '/src/images/IMG_8736.jpg' },
  { _id: '8', name: 'Injektor Karburanti', brand: 'Peugeot', model: '3008', years: [2016, 2022], category: 'Sistemi i Karburantit', partNumber: 'INJ-PSA-008', price: 55.00, stock: 7, isNewPart: false, isFeatured: false, image: '/src/images/IMG_8737.jpg' },
  { _id: '9', name: 'Injektor Karburanti', brand: 'Citroën', model: 'C5', years: [2010, 2015], category: 'Sistemi i Karburantit', partNumber: 'INJ-CI-009', price: 40.00, stock: 15, isNewPart: false, isFeatured: false, image: '/src/images/IMG_8738.jpg' },
  { _id: '10', name: 'Injektor Karburanti', brand: 'Renault', model: 'Captur', years: [2013, 2019], category: 'Sistemi i Karburantit', partNumber: 'INJ-RE-010', price: 45.00, stock: 9, isNewPart: false, isFeatured: false, image: '/src/images/IMG_8739.jpg' },
  { _id: '11', name: 'Kompresor Kondicioneri', brand: 'Peugeot', model: '207 / 208', years: [2008, 2015], category: 'Sistemi i Klimës', partNumber: 'AC-COMP-207', price: 110.00, stock: 4, isNewPart: false, isFeatured: true, image: '/src/images/IMG_8740.jpg' },
  { _id: '12', name: 'Kompresor Kondicioneri', brand: 'Peugeot', model: '207', years: [2006, 2012], category: 'Sistemi i Klimës', partNumber: 'AC-COMP-012', price: 90.00, stock: 5, isNewPart: false, isFeatured: false, image: '/src/images/IMG_8741.jpg' },
  { _id: '13', name: 'Kavo Marshe (Set)', brand: 'Renault', model: 'Clio / Megane', years: [2012, 2018], category: 'Transmisioni', partNumber: 'GEAR-CAB-RE', price: 35.00, stock: 7, isNewPart: false, isFeatured: false, image: '/src/images/IMG_8742.jpg' },
  { _id: '14', name: 'Levë Marshi e Kompletuar', brand: 'Peugeot', model: '207 / C3', years: [2009, 2016], category: 'Transmisioni', partNumber: 'GEAR-LEV-PSA', price: 50.00, stock: 3, isNewPart: false, isFeatured: true, image: '/src/images/IMG_8743.jpg' },
  { _id: '15', name: 'Kompresor Kondicioneri', brand: 'Citroën', model: 'C3 / C4', years: [2010, 2017], category: 'Sistemi i Klimës', partNumber: 'AC-COMP-CI', price: 100.00, stock: 6, isNewPart: false, isFeatured: false, image: '/src/images/IMG_8744.jpg' },
  { _id: '16', name: 'Kompresor Kondicioneri', brand: 'Renault', model: 'Clio / Megane', years: [2014, 2021], category: 'Sistemi i Klimës', partNumber: 'AC-COMP-RE', price: 120.00, stock: 2, isNewPart: false, isFeatured: false, image: '/src/images/IMG_8745.jpg' },
  { _id: '17', name: 'Motorr i Kompletuar 1.6 HDi', brand: 'Peugeot', model: '308', years: [2012, 2016], category: 'Motorri', partNumber: 'ENG-PSA-1.6', price: 850.00, stock: 1, isNewPart: false, isFeatured: true, image: '/src/images/IMG_8746.jpg' },
  { _id: '18', name: 'Tuba Kondicioneri', brand: 'Citroën', model: 'Berlingo / Partner', years: [2008, 2018], category: 'Sistemi i Klimës', partNumber: 'AC-HOS-018', price: 30.00, stock: 14, isNewPart: false, isFeatured: false, image: '/src/images/IMG_8747.jpg' },
  { _id: '19', name: 'Kambio Manuale 5 Marsha', brand: 'Peugeot', model: '208', years: [2012, 2019], category: 'Transmisioni', partNumber: 'GBX-PSA-5SP', price: 280.00, stock: 2, isNewPart: false, isFeatured: true, image: '/src/images/IMG_8748.jpg' },
  { _id: '20', name: 'Motorr i Kompletuar 1.6 Turbo', brand: 'Hyundai', model: 'Tucson / Mini', years: [2015, 2020], category: 'Motorri', partNumber: 'ENG-HY-1.6T', price: 1200.00, stock: 1, isNewPart: false, isFeatured: true, image: '/src/images/IMG_8749.jpg' },
  { _id: '21', name: 'Box Filtri Ajri', brand: 'Hyundai', model: 'i30 / Mini', years: [2016, 2022], category: 'Motorri', partNumber: 'AIR-BOX-021', price: 40.00, stock: 5, isNewPart: false, isFeatured: false, image: '/src/images/IMG_8750.jpg' },
  { _id: '22', name: 'Motorr Elektrik / Inverter', brand: 'Renault', model: 'Zoe', years: [2013, 2019], category: 'Sistemi Elektrik', partNumber: 'EL-INV-ZOE', price: 600.00, stock: 1, isNewPart: false, isFeatured: true, image: '/src/images/IMG_8751.jpg' },
  { _id: '23', name: 'Kolektor Thithje 1.6 16V', brand: 'Renault', model: 'Megane / Clio', years: [2008, 2014], category: 'Motorri', partNumber: 'INT-MAN-RE', price: 55.00, stock: 3, isNewPart: false, isFeatured: false, image: '/src/images/IMG_8752.jpg' },
  { _id: '24', name: 'Motorr i Kompletuar 1.5 dCi', brand: 'Renault', model: 'Clio / Captur', years: [2013, 2018], category: 'Motorri', partNumber: 'ENG-RE-1.5DCI', price: 750.00, stock: 2, isNewPart: false, isFeatured: true, image: '/src/images/IMG_8753.jpg' },
  { _id: '25', name: 'Gjysëmaks (Drive Shaft)', brand: 'Peugeot', model: '208', years: [2012, 2018], category: 'Transmisioni', partNumber: 'DRV-SHA-25', price: 65.00, stock: 6, isNewPart: false, isFeatured: false, image: '/src/images/IMG_8754.jpg' },
  { _id: '26', name: 'Stopa të Pasëm (Set)', brand: 'Peugeot', model: '308', years: [2014, 2017], category: 'Ndriçimi', partNumber: 'TL-308-026', price: 90.00, stock: 4, isNewPart: false, isFeatured: false, image: '/src/images/IMG_8755.jpg' },
  { _id: '27', name: 'Pompë Karburanti', brand: 'Peugeot', model: '208 / 308', years: [2013, 2019], category: 'Sistemi i Karburantit', partNumber: 'FUEL-PUMP-PSA', price: 55.00, stock: 8, isNewPart: false, isFeatured: false, image: '/src/images/IMG_8756.jpg' },
  { _id: '28', name: 'Kompjuter Motorri (ECU)', brand: 'Peugeot', model: '207 / 208', years: [2010, 2016], category: 'Motorri', partNumber: 'ECU-PSA-028', price: 130.00, stock: 5, isNewPart: false, isFeatured: true, image: '/src/images/IMG_8757.jpg' },
  { _id: '29', name: 'Pasqyrë e Majtë', brand: 'Citroën', model: 'C3 Picasso', years: [2009, 2017], category: 'Karroceria', partNumber: 'MIRR-C3P-029', price: 45.00, stock: 3, isNewPart: false, isFeatured: false, image: '/src/images/IMG_8758.jpg' },
  { _id: '30', name: 'Skaldime Timoni / Hidrogrup', brand: 'Renault', model: 'Megane / Scenic', years: [2010, 2016], category: 'Sistemi i Drejtimit', partNumber: 'STR-RACK-RE', price: 180.00, stock: 2, isNewPart: false, isFeatured: true, image: '/src/images/IMG_8759.jpg' },
  { _id: '31', name: 'Derë e Kompletuar', brand: 'Citroën', model: 'Berlingo / C3', years: [2015, 2022], category: 'Karroceria', partNumber: 'DOOR-CI-031', price: 150.00, stock: 4, isNewPart: false, isFeatured: false, image: '/src/images/IMG_8760.jpg' },
  { _id: '32', name: 'Aks i Pasëm (Rear Beam)', brand: 'Citroën', model: 'Berlingo / Partner', years: [2008, 2018], category: 'Transmisioni', partNumber: 'AXL-RR-032', price: 250.00, stock: 2, isNewPart: false, isFeatured: true, image: '/src/images/IMG_8761.jpg' },
  { _id: '33', name: 'Tuba Uji / Ftohje', brand: 'Peugeot', model: '308', years: [2014, 2021], category: 'Sistemi i Ftohjes', partNumber: 'HOS-WAT-033', price: 20.00, stock: 20, isNewPart: false, isFeatured: false, image: '/src/images/IMG_8762.jpg' },
  { _id: '34', name: 'Parafrymë / Maskarino', brand: 'Renault', model: 'Clio / Megane', years: [2016, 2022], category: 'Karroceria', partNumber: 'GRIL-RE-034', price: 65.00, stock: 5, isNewPart: false, isFeatured: false, image: '/src/images/IMG_8763.jpg' },
  { _id: '35', name: 'Parafrymë / Maskarino', brand: 'Citroën', model: 'C3 / C4', years: [2017, 2023], category: 'Karroceria', partNumber: 'GRIL-CI-035', price: 70.00, stock: 3, isNewPart: false, isFeatured: false, image: '/src/images/IMG_8764.jpg' },
  { _id: '36', name: 'Parafrymë të Pasme', brand: 'Renault', model: 'Clio / Captur', years: [2013, 2020], category: 'Karroceria', partNumber: 'BMP-RR-RE', price: 85.00, stock: 4, isNewPart: false, isFeatured: false, image: '/src/images/IMG_8765.jpg' },
  { _id: '37', name: 'Tuba Ajri / Thithje', brand: 'Peugeot', model: '208 / 308', years: [2012, 2018], category: 'Motorri', partNumber: 'INT-HOS-PSA', price: 25.00, stock: 15, isNewPart: false, isFeatured: false, image: '/src/images/IMG_8766.jpg' },
  { _id: '38', name: 'Kambio 1.6 Benzine', brand: 'Citroën', model: 'C4', years: [2008, 2014], category: 'Transmisioni', partNumber: 'GBX-CI-1.6BZ', price: 220.00, stock: 3, isNewPart: false, isFeatured: false, image: '/src/images/IMG_8767.jpg' },
  { _id: '39', name: 'Parafango e Përparme', brand: 'Renault', model: 'Modus / Clio', years: [2005, 2012], category: 'Karroceria', partNumber: 'FEND-RE-039', price: 40.00, stock: 10, isNewPart: false, isFeatured: false, image: '/src/images/IMG_8768.jpg' },
];

export const comingCars = [
  { _id: 'c1', brand: 'Peugeot', model: 'E-3008', year: 2024, description: 'SUV elektrik i gjeneratës së re. Pritet shumë shpejt!', expectedDate: 'Maj 2025', image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80' },
  { _id: 'c2', brand: 'Renault', model: 'Scenic E-Tech', year: 2024, description: 'Familjar modern me teknologji hibride të avancuar.', expectedDate: 'Qershor 2025', image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=800&q=80' },
  { _id: 'c3', brand: 'Hyundai', model: 'IONIQ 6', year: 2024, description: 'Berlina elektrike me autonomi të lartë dhe dizajn futuristik.', expectedDate: 'Korrik 2025', image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80' },
  { _id: 'c4', brand: 'Citroën', model: 'ë-C3', year: 2024, description: 'Makina e vogël elektrike e arritshme për çdo famil.', expectedDate: 'Gusht 2025', image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80' },
];

export const filters = {
  brands: ['Peugeot', 'Renault', 'Citroën', 'Hyundai'],
  brandModels: {
    Peugeot: ['208', '308', '207', '3008', 'Partner', 'Expert', 'Boxer', '508', '2008'],
    Renault: ['Clio', 'Megane', 'Captur', 'Scenic', 'Zoe', 'Trafic', 'Koleos', 'Kangoo', 'Twingo', 'Modus'],
    Citroën: ['C3', 'C4', 'C5', 'Berlingo', 'Jumpy', 'C-Elysee', 'DS3', 'DS4', 'C1', 'C3 Picasso'],
    Hyundai: ['Tucson', 'i30', 'Santa Fe', 'i40', 'i20', 'Accent', 'Kona', 'Elantra', 'Ioniq', 'Bayon'],
  },
  categories: [
    'Sistemi i Karburantit',
    'Sistemi i Ftohjes',
    'Sistemi i Klimës',
    'Motorri',
    'Transmisioni',
    'Karroceria',
    'Sistemi i Drejtimit',
    'Ndriçimi',
    'Sistemi Elektrik'
  ],
};

