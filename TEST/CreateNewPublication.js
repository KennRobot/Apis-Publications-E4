const axios = require('axios');

const API_URL = "https://ejercicio-apirest-nodejs.onrender.com/api/publication";

// Crear una nueva publicación
const createPublication = async () => {
  try {
    const newPublication = {
      author: "Kennby Brayan Gonzalez Dominguez",
      title: "Dia de los niños",
      content: "Fecha importante que celebra a todos lo niños."
    };

    const response = await axios.post(API_URL, newPublication, {
      headers: { "Content-Type": "application/json" }
    });

    console.log("Publicación creada:", response.data);
  } catch (error) {
    console.error("Error al crear la publicación:", error.response?.data || error.message);
  }
};

// Ejecutar la prueba
createPublication();
