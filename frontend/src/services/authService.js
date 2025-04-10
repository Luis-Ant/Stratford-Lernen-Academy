// Manejar las peticiones HTTP.
import axios from "axios";

const API_URL = "http://localhost:3001/auth"; // Ajusta la URL según tu backend

export const login = async (usuarioTag, contraseña) => {
  try {
    const response = await axios.post(`${API_URL}/login`, {
      usuarioTag,
      contraseña,
    });
    return response.data; // Retorna el token y cualquier dato adicional
  } catch (error) {
    throw error.response?.data?.message || "Error al iniciar sesión";
  }
};
