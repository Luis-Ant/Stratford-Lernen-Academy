import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { login } from "../../services/authService";
import { AuthContext } from "../../context/authContext";

const LoginForm = () => {
  const { login: loginContext } = useContext(AuthContext);
  const navigate = useNavigate(); // Hook para redirigir después del login
  const [showPassword, setShowPassword] = useState(false); // Estado para alternar mostrar/ocultar contraseña

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().min(3).required(),
      password: Yup.string().min(6).required(),
    }),
    validateOnBlur: false,
    validateOnChange: false,

    onSubmit: async (values) => {
      try {
        const userData = await login(values.username, values.password);
        loginContext(userData);
      } catch (err) {
        console.error("Error al iniciar sesión", err);
      }
    },
  });

  return (
    <form
      className="login-form"
      onSubmit={formik.handleSubmit}
      style={styles.form}
    >
      <div style={styles.inputGroup}>
        <label htmlFor="username" style={styles.label}>
          Username
        </label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Enter your username"
          value={formik.values.username}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          style={styles.input}
        />
        {formik.touched.username && formik.errors.username && (
          <p style={styles.error}>{formik.errors.username}</p>
        )}
      </div>
      <div style={styles.inputGroup}>
        <label htmlFor="password" style={styles.label}>
          Password
        </label>
        <div style={styles.passwordContainer}>
          <input
            type={showPassword ? "text" : "password"} // Alterna entre texto y contraseña
            id="password"
            name="password"
            placeholder="Enter your password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            style={styles.input}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)} // Alterna el estado
            style={styles.togglePassword}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
        {formik.touched.password && formik.errors.password && (
          <p style={styles.error}>{formik.errors.password}</p>
        )}
      </div>
      <div style={styles.options}>
        <label style={styles.rememberMe}>
          <input type="checkbox" /> Remember Me
        </label>
        <a href="/forgot-password" style={styles.forgotPassword}>
          Forgot Password?
        </a>
      </div>
      {formik.errors.general && (
        <p style={styles.error}>{formik.errors.general}</p>
      )}
      <button
        type="submit"
        style={styles.button}
        disabled={formik.isSubmitting}
      >
        Sign in
      </button>
    </form>
  );
};

const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1rem",
    maxWidth: "400px",
    margin: "0 auto",
  },
  inputGroup: {
    width: "100%",
  },
  label: {
    display: "block",
    marginBottom: "0.5rem",
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    padding: "0.5rem",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  passwordContainer: {
    display: "flex",
    alignItems: "center",
    position: "relative",
  },
  togglePassword: {
    position: "absolute",
    right: "10px",
    color: "#007bff",
    cursor: "pointer",
    fontSize: "0.9rem",
  },
  options: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
  },
  rememberMe: {
    fontSize: "0.9rem",
  },
  forgotPassword: {
    fontSize: "0.9rem",
    color: "#007bff",
    textDecoration: "none",
  },
  error: {
    color: "red",
    fontSize: "0.9rem",
  },
  button: {
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "0.75rem 1.5rem",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "1rem",
  },
};

export default LoginForm;
