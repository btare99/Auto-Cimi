# 🚗 Auto Cimi — Udhëzues Konfigurimi

## Struktura e Projektit

```
mini/
├── backend/          ← Node.js + Express + MongoDB
│   ├── models/       ← Peugeot, Orders, ComingCars schemas
│   ├── routes/       ← API endpoints
│   ├── server.js     ← Entry point
│   ├── seed.js       ← Të dhëna demo
│   └── .env          ← Konfigurimi (EMAIL, MONGODB)
└── src/              ← React Frontend
    ├── api/          ← Axios calls
    ├── context/      ← CartContext
    ├── components/   ← Navbar, Cart, PartCard, PartModal, Footer
    └── pages/        ← HomePage, PartsPage, CheckoutPage, About, Contact
```

---

## 1️⃣ Instaloni MongoDB

**Shkarkoni MongoDB Community Server:**
👉 https://www.mongodb.com/try/download/community

- Zgjidhni: Windows → msi
- Instaloni dhe sigurohuni që shërbimi `MongoDB` është aktiv
- Ose përdorni **MongoDB Atlas** (cloud falas): https://www.mongodb.com/atlas

### Nëse përdorni MongoDB Atlas:
1. Krijoni account falas
2. Krijoni cluster
3. Merrni connection string dhe vendoseni në `.env`:
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/autocimi
```

---

## 2️⃣ Konfiguroni Email (.env)

Hapni skedarin `backend/.env` dhe plotësoni:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/autocimi
EMAIL_USER=your_gmail@gmail.com
EMAIL_PASS=your_app_password_here
EMAIL_TO=orders@autocimi.al
FRONTEND_URL=http://localhost:5174
```

### Si të merrni App Password për Gmail:
1. Shkoni te: **Google Account → Security → 2-Step Verification** (aktivizoni)
2. Pastaj: **Security → App Passwords**
3. Zgjidhni "Mail" dhe "Windows Computer"
4. Kopjoni passwordin 16-karakterësh → vendoseni si `EMAIL_PASS`

---

## 3️⃣ Startoni Projektin

### Terminal 1 — Backend:
```bash
cd mini/backend
node server.js
# ✅ Auto Cimi Backend po ekzekutohet në http://localhost:5000
# ✅ MongoDB u lidh me sukses
```

### Terminal 2 — Seed (vetëm herën e parë):
```bash
cd mini/backend
node seed.js
# ✅ U shtuan 28 pjesë dhe 4 makina "vine se shpejti"
```

### Terminal 3 — Frontend:
```bash
cd mini
npm run dev
# ✅ VITE → http://localhost:5174/
```

---

## 4️⃣ API Endpoints

| Metoda | Endpoint | Përshkrimi |
|--------|----------|------------|
| GET | `/api/parts` | Listo pjesët (me filter) |
| GET | `/api/parts/filters` | Merr markat & modelet |
| GET | `/api/parts/new` | Pjesë të reja |
| GET | `/api/parts/:id` | Detajet e një pjese |
| POST | `/api/parts` | Shto pjesë (admin) |
| PUT | `/api/parts/:id` | Ndrysho pjesë |
| DELETE | `/api/parts/:id` | Fshi pjesë |
| GET | `/api/orders` | Listo porositë |
| POST | `/api/orders` | Krijo porosi + dërgo email |
| PATCH | `/api/orders/:id/status` | Ndrysho statusin |
| GET | `/api/coming-cars` | Makina "vine se shpejti" |
| POST | `/api/coming-cars` | Shto makinë |

### Parametrat e Filtrit (GET /api/parts):
```
?brand=Peugeot&model=3008&year=2020&category=Frenat&search=disk&isNew=true&page=1&limit=12
```

---

## 5️⃣ Shto Pjesë të Reja (API)

```bash
curl -X POST http://localhost:5000/api/parts \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Disk Freni Përpara",
    "brand": "Peugeot",
    "model": "5008",
    "years": [2020, 2021, 2022],
    "category": "Frenat",
    "partNumber": "PE-5008-DF-01",
    "price": 55.00,
    "stock": 10,
    "isNewPart": true
  }'
```

---

## 6️⃣ Faqet e Faqes

| URL | Faqja |
|-----|-------|
| `/` | Kryefaqja me Hero, Pjesë të Reja, Vine Se Shpejti |
| `/pjeset` | Katalogu me filtra Brand/Model/Vit/Kategori |
| `/porosite` | Formulari i Porosisë me email |
| `/rreth-nesh` | Rreth kompanisë |
| `/kontakt` | Formular kontakti |
