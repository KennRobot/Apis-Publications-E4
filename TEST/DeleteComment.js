const axios = require('axios');

const API_URL = "https://ejercicio-apirest-nodejs.onrender.com/api/publication";

// Eliminar un comentario de una publicación
const deleteCommentFromPublication = async (idpub, idcomment) => {
  try {
    const response = await axios.delete(`${API_URL}/${idpub}/comment/${idcomment}`);
    console.log("Comentario eliminado:", response.data);
  } catch (error) {
    console.error("Error al eliminar el comentario:", error.response?.data || error.message);
  }
};

// Ejecutar la prueba
deleteCommentFromPublication("Df5wGBjPwODJKCm8v8kV", "1");
