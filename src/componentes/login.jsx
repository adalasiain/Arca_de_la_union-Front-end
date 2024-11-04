import React from 'react';
import './styles.css'; // Importa los estilos

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-left">
        <img src="/logo.png" alt="Arca de la Alianza" className="logo" />
        <h1>Arca de la Alianza</h1>
        <div className="tower-image"></div>
      </div>
      <div className="login-right">
        <h2>Bienvenido de regreso!</h2>
        <form className="login-form">
          <div className="input-group">
            <span className="icon">👤</span>
            <input type="text" placeholder="Usuario" required />
          </div>
          <div className="input-group">
            <span className="icon">🔒</span>
            <input type="password" placeholder="Contraseña" required />
          </div>
          <button type="submit" className="login-button">Ingresar</button>
          <a href="#" className="forgot-password">Recuperar Contraseña</a>
        </form>
      </div>
    </div>
  );
};

export default Login;
