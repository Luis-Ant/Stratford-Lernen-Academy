import React, { useState, useContext } from "react";
import { login } from "../services/authService";
import { AuthContext } from "../context/authContext";

const LoginForm = () => {
  const [usuarioTag, setUsuarioTag] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const { login: loginContext } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = await login(usuarioTag, contraseña);
      console.log("Login exitoso:", userData); // Imprime la respuesta del backend
      loginContext(userData); // Actualiza el contexto con los datos del usuario
    } catch (err) {
      console.error("Error en el login:", err); // Imprime el error si ocurre
      setError(
        err.response?.data?.message || "Error desconocido al iniciar sesión"
      );
    }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <div className="input-group">
        <label htmlFor="usuarioTag">Username</label>
        <input
          type="text"
          id="usuarioTag"
          name="usuarioTag"
          placeholder="Enter your username"
          value={usuarioTag}
          onChange={(e) => setUsuarioTag(e.target.value)}
          required
        />
      </div>
      <div className="input-group">
        <label htmlFor="password">Password</label>
        <div className="password-container">
          <input
            type={showPassword ? "text" : "contraseña"}
            id="contraseña"
            name="contraseña"
            placeholder="Enter your password"
            value={contraseña}
            onChange={(e) => setContraseña(e.target.value)}
            required
          />
          <span
            className="toggle-password-text"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "Hide" : "Show"}
          </span>
        </div>
      </div>
      {error && <p className="error">{error}</p>}
      <div className="input-group">
        <button type="submit">Login</button>
      </div>
    </form>
  );
};

export default LoginForm;
