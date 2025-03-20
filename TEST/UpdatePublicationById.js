const axios = require('axios');

const API_URL = "https://ejercicio-apirest-nodejs.onrender.com/api/publication";

// Actualizar una publicación por ID
const updatePublication = async (id) => {
  try {
    const updatedPublication = {
        title: "Dia de los niños",
        content: "Dia importante que celebra a todos lo niños. Festejan y comen mucho."
    };

    const response = await axios.put(`${API_URL}/${id}`, updatedPublication, {
      headers: { "Content-Type": "application/json" }
    });

    console.log("Publicación actualizada:", response.data);
  } catch (error) {
    console.error("Error al actualizar la publicación:", error.response?.data || error.message);
  }
};

// Ejecutar la prueba 
updatePublication("ujl5Ve5IssNV9IlkynzD");
