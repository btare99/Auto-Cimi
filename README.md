# 🚗 Auto Cimi - Platformë Moderne E-commerce për Pjesë Këmbimi

Një platformë profesionale full-stack e ndërtuar me stack-un MERN (MongoDB, Express, React, Node.js) për menaxhimin dhe shitjen e pjesëve të këmbimit për makina. Ky projekt është i optimizuar posaçërisht për pjesë të makinave Franceze dhe Hyundai, me një dizajn modern dhe performancë të lartë.

![Auto Cimi Banner](https://images.unsplash.com/photo-1486006396113-ad7302ff172c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80)

## ✨ Karakteristikat Kryesore

### 🌐 Frontend (Faqja e Klientit)
- **Dizajn Premium**: Ndërfaqe "Cold" dhe minimaliste e ndërtuar me React dhe CSS moderne.
- **Kërkim i Avancuar**: Filtra të detajuar sipas Markës, Modelit dhe Vitit të makinës.
- **Coming Soon**: Seksion i veçantë për makinat që priten të vijnë së shpejti.
- **New Arrivals**: Shfaqja e pjesëve më të reja në magazinë.
- **Rezervime Online**: Mundësi për të rezervuar pjesë ose shërbime direkt nga platforma.
- **Responsive**: Eksperiencë e plotë në çdo pajisje (Mobile, Tablet, Desktop).

### 🔐 Paneli i Menaxhimit (Admin)
- **Menaxhimi i Inventarit**: Shtim, modifikim dhe fshirje e pjesëve të këmbimit.
- **Menaxhimi i Porosive**: Ndjekja e porosive të klientëve në kohë reale.
- **Sistemi i Njoftimeve**: Email-e automatike për çdo porosi të re.
- **Siguri e Lartë**: Autentikim me JWT (JSON Web Tokens) për mbrojtjen e të dhënave.

### 🛠️ Teknologjitë e Përdorura

**Frontend:**
- React.js (Vite)
- Framer Motion (Animacione)
- Axios (Integrimi i API)
- Context API (Menaxhimi i Gjendjes)
- Vanilla CSS (Me variabla moderne)

**Backend:**
- Node.js & Express.js
- MongoDB & Mongoose
- JSON Web Tokens (JWT)
- Nodemailer (Njoftimet me Email)
- Multer (Menaxhimi i Fotove)

## 🚀 Instalimi dhe Konfigurimi

### Parakushtet
- Node.js i instaluar
- MongoDB (Lokal ose Atlas)

### 1. Klonimi i Projektit
```bash
git clone https://github.com/your-username/auto-cimi.git
cd auto-cimi
```

### 2. Konfigurimi i Backend-it
```bash
cd backend
npm install
```
Krijoni një skedar `.env` në folderin `backend`:
```env
PORT=5005
MONGO_URI=lidhja_juaj_mongodb
JWT_SECRET=çelësi_juaj_sekret
EMAIL_USER=email@juaj.com
EMAIL_PASS=fjalëkalimi_i_aplikacionit
```
Populllimi i databazës me të dhëna fillestare (opsionale):
```bash
node seedParts.js
```
Nisja e serverit:
```bash
npm start
```

### 3. Konfigurimi i Frontend-it
```bash
cd ../frontend
npm install
npm run dev
```

Platforma do të jetë e aksesueshme në `http://localhost:5173`.

## 📁 Struktura e Projektit

```text
auto-cimi/
├── backend/                # API me Express & Node.js
│   ├── models/             # Skemat e Mongoose
│   ├── routes/             # Endpoints të API
│   ├── middleware/         # Siguria dhe Validimet
│   ├── uploads/            # Fotot e produkteve
│   └── server.js           # Pika e hyrjes së serverit
├── frontend/               # Aplikacioni React
│   ├── src/
│   │   ├── components/     # Komponentët UI
│   │   ├── context/        # Menaxhimi i state-it
│   │   ├── pages/          # Faqet kryesore
│   │   └── App.jsx         # Routing & Layout
│   └── package.json
└── README.md
```

## 📜 Licenca
Ky projekt është i licencuar nën Licencën MIT.

---
Ndërtuar me profesionalizëm për **Auto Cimi**.
