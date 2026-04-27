import axios from 'axios';

// URL e Backend-it (ne produksion kjo do te jete URL e serverit tuaj)
const API_URL = import.meta.env.VITE_API_URL || '/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// PARTS
export const fetchParts = async (params = {}) => {
  const response = await api.get('/parts', { params });
  return response.data;
};

export const fetchPartById = async (id) => {
  const response = await api.get(`/parts/${id}`);
  return response.data;
};

export const fetchFilters = async () => {
  const response = await api.get('/parts/filters');
  return response.data;
};

export const fetchNewParts = async () => {
  const response = await api.get('/parts/new');
  return response.data;
};

// ORDERS
export const createOrder = async (orderData) => {
  const response = await api.post('/orders', orderData);
  return response.data;
};

// COMING CARS
export const fetchComingCars = async () => {
  const response = await api.get('/coming-cars');
  return response.data;
};

// RESERVATIONS
export const createReservation = async (reservationData) => {
  const response = await api.post('/reservations', reservationData);
  return response.data;
};

const API = {
  fetchParts,
  fetchPartById,
  fetchFilters,
  fetchNewParts,
  createOrder,
  fetchComingCars,
  createReservation
};

export default API;
