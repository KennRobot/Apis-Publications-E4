const axios = require('axios');

const API_URL = "https://ejercicio-apirest-nodejs.onrender.com/api/publication";

// Obtener una publicación por ID
const getPublicationById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    console.log("Publicación encontrada:", response.data);
  } catch (error) {
    console.error("Error al obtener la publicación:", error.response?.data || error.message);
  }
};

// Ejecutar pruebas
getPublicationById("ujl5Ve5IssNV9IlkynzD");
