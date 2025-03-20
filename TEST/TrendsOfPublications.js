const axios = require('axios');

const API_URL = "https://ejercicio-apirest-nodejs.onrender.com/api/publication/trends/popular";

// Obtener publicaciones más populares
const getPopularPublications = async () => {
  try {
    const response = await axios.get(API_URL);
    console.log("Publicaciones populares:", response.data);
  } catch (error) {
    console.error("Error al obtener publicaciones populares:", error.response?.data || error.message);
  }
};

// Ejecutar la prueba
getPopularPublications();
