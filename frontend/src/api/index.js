// src/api/index.js - Simulated API calls with mock data
import { parts, comingCars, filters } from '../data/mockData';

// Simulated delay to mimic network request
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// PARTS
export const fetchParts = async (params = {}) => {
  await delay(500);
  let filtered = [...parts];

  if (params.brand) filtered = filtered.filter(p => p.brand === params.brand);
  if (params.model) filtered = filtered.filter(p => p.model === params.model);
  if (params.category) filtered = filtered.filter(p => p.category === params.category);
  if (params.year) filtered = filtered.filter(p => p.years.includes(parseInt(params.year)));
  if (params.search) {
    const q = params.search.toLowerCase();
    filtered = filtered.filter(p => 
      p.name.toLowerCase().includes(q) || 
      p.partNumber.toLowerCase().includes(q) ||
      p.model.toLowerCase().includes(q)
    );
  }
  if (params.isNew === 'true') filtered = filtered.filter(p => p.isNewPart);

  // Simple pagination simulation
  const page = parseInt(params.page) || 1;
  const limit = parseInt(params.limit) || 12;
  const start = (page - 1) * limit;
  const end = start + limit;

  return {
    data: {
      parts: filtered.slice(start, end),
      total: filtered.length,
      pages: Math.ceil(filtered.length / limit),
      currentPage: page
    }
  };
};

export const fetchPartById = async (id) => {
  await delay(300);
  const part = parts.find(p => p._id === id);
  return { data: part };
};

export const fetchFilters = async () => {
  await delay(300);
  return { data: filters };
};

export const fetchNewParts = async () => {
  await delay(400);
  return { data: parts.filter(p => p.isNewPart) };
};

// ORDERS
export const createOrder = async (data) => {
  await delay(1000);
  console.log('Order created (mock):', data);
  return { 
    data: { 
      message: 'Porosia u dërgua me sukses!',
      orderNumber: 'AC-' + Math.floor(100000 + Math.random() * 900000)
    } 
  };
};

// COMING CARS
export const fetchComingCars = async () => {
  await delay(400);
  return { data: comingCars };
};

const API = { fetchParts, fetchPartById, fetchFilters, fetchNewParts, createOrder, fetchComingCars };
export default API;
