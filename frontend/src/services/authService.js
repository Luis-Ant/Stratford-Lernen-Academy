// Manejar las peticiones HTTP.
import axiosInstance from "../utils/axiosConfig";

export const login = async (username, password) => {
  try {
    const response = await axiosInstance.post("/login", {
      usuarioTag: username,
      contraseña: password,
    });
    return response.data; // Devuelve los datos del backend
  } catch (error) {
    console.error("Error en el servicio de login:", error);
    throw error;
  }
};
