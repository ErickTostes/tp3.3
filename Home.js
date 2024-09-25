import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    setIsAuthenticated(false);
    navigate('/login');
  };

  return (
    <div className="home-container">
      <h1>Bem-vindo à Página Inicial!</h1>
      <p>Você está autenticado com sucesso.</p>
      <button onClick={handleLogout} className="logout-button">Sair</button>
    </div>
  );
};

export default Home;
