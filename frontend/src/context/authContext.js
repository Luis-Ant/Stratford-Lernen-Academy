// Contexto de autenticación para manejar el estado del usuario en la aplicación.
import React, { createContext, useState, useEffect, useCallback } from "react";
import Cookies from "js-cookie";
import axiosInstance from "../utils/axiosConfig";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser({
      ...userData.user,
      tipoUsuario: userData.tipoUsuario,
      nombreUsuario: userData.nombreUsuario,
    });
    // Guardar los tokens en las cookies
    Cookies.set("accessToken", userData.accessToken, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
    });
    Cookies.set("refreshToken", userData.refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      expires: 7,
    });
  };

  const logout = () => {
    setUser(null);
    Cookies.remove("accessToken");
    Cookies.remove("refreshToken");
  };

  const refreshSession = useCallback(async () => {
    try {
      const response = await axiosInstance.post("/refreshToken", {
        refreshToken: Cookies.get("refreshToken"),
      });
      // Actualizar el access token en las cookies
      Cookies.remove("accessToken"); // Eliminar el token anterior
      Cookies.set("accessToken", response.data.accessToken, {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
      });
    } catch (err) {
      console.error("Error refreshing token:", err);
      logout();
    }
  }, [logout]);

  useEffect(() => {
    const interval = setInterval(() => {
      refreshSession(); // Refrescar el token cada cierto tiempo
    }, 14 * 60 * 1000); // Refrescar el token cada 14 minutos (antes de que expire el access token)
    return () => clearInterval(interval);
  }, [refreshSession]);

  useEffect(() => {
    const checkSession = async () => {
      const refreshToken = Cookies.get("refreshToken");
      if (refreshToken) {
        try {
          await refreshSession(); // Intentar renovar el access token al cargar la app
        } catch (err) {
          console.error("Session expired:", err);
          logout();
        }
      }
    };
    checkSession();
  }, [refreshSession]);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
