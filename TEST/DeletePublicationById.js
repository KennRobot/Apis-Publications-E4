const axios = require('axios');

const API_URL = "https://ejercicio-apirest-nodejs.onrender.com/api/publication";

// Eliminar una publicación por ID
const deletePublication = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    console.log("Publicación eliminada:", response.data);
  } catch (error) {
    console.error("Error al eliminar la publicación:", error.response?.data || error.message);
  }
};

// Ejecutar la prueba (reemplaza con un ID real)
deletePublication("ujl5Ve5IssNV9IlkynzD");
