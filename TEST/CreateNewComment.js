const axios = require('axios');

const API_URL = "https://ejercicio-apirest-nodejs.onrender.com/api/publication";

// Agregar un comentario a una publicación
const addCommentToPublication = async (idpub) => {
  try {
    const commentData = {
      user: "Esteban",
      content: "Este es un comentario apropiado"
    };

    const response = await axios.post(`${API_URL}/${idpub}/comment`, commentData, {
      headers: { "Content-Type": "application/json" }
    });

    console.log("Comentario agregado:", response.data);
  } catch (error) {
    console.error("Error al agregar el comentario:", error.response?.data || error.message);
  }
};

// Ejecutar la prueba 
addCommentToPublication("Df5wGBjPwODJKCm8v8kV");
