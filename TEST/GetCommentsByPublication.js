const axios = require('axios');

const API_URL = "https://ejercicio-apirest-nodejs.onrender.com/api/publication";

// Obtener comentarios de una publicación
const getCommentsFromPublication = async (idpub) => {
  try {
    const response = await axios.get(`${API_URL}/${idpub}/comments`);
    console.log("Comentarios de la publicación:", response.data);
  } catch (error) {
    console.error("Error al obtener los comentarios:", error.response?.data || error.message);
  }
};

// Ejecutar la prueba (reemplaza con un ID real de una publicación existente)
getCommentsFromPublication("Df5wGBjPwODJKCm8v8kV");
