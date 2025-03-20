const axios = require('axios');

const API_URL = "https://ejercicio-apirest-nodejs.onrender.com/api/publication";

// Obtener todas las publicaciones
const getPublications = async () => {
  try {
    const response = await axios.get(API_URL);
    console.log("Publicaciones:", response.data);
  } catch (error) {
    console.error("Error al obtener publicaciones:", error.response?.data || error.message);
  }
};

// Ejecutar pruebas
getPublications();
