const axios = require('axios');

const API_URL = "https://ejercicio-apirest-nodejs.onrender.com/api/publication";

// Actualizar un comentario de una publicación
const updateCommentFromPublication = async (idpub, idcomment) => {
  try {
    const updatedComment = {
      content: "Comentario actualizado."
    };

    const response = await axios.put(`${API_URL}/${idpub}/comment/${idcomment}`, updatedComment, {
      headers: { "Content-Type": "application/json" }
    });

    console.log("Comentario actualizado:", response.data);
  } catch (error) {
    console.error("Error al actualizar el comentario:", error.response?.data || error.message);
  }
};

// Ejecutar la prueba 
updateCommentFromPublication("Df5wGBjPwODJKCm8v8kV", "2");
