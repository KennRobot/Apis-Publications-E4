const axios = require('axios');

const API_URL = "https://ejercicio-apirest-nodejs.onrender.com/api/publication";

// Actualizar el número de likes de un comentario
const updateCommentLikes = async (idPub, idComment, increment = true) => {
  try {
    const likeData = { increment };

    const response = await axios.patch(`${API_URL}/${idPub}/comment/${idComment}/like`, likeData, {
      headers: { "Content-Type": "application/json" }
    });

    console.log(`✅ Likes ${increment ? "incrementados" : "disminuidos"}:`, response.data);
  } catch (error) {
    console.error("❌ Error al actualizar los likes:", error.response?.data || error.message);
  }
};

// Ejecutar la prueba
// Para incrementar los likes es true y decrementar es false
updateCommentLikes("Df5wGBjPwODJKCm8v8kV", "2", true); 
