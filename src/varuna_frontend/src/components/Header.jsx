import React from 'react';
import { Link } from 'react-router-dom';
import LogoutButton from './LogoutButton';
import varunaLogo from '../imagenes/VarunaLogo.jpeg';
import notificasion from '../imagenes/notificasion.jpeg';
import lupa from '../imagenes/lupita.png';
import grafica from '../imagenes/Grafica (2).jpeg';
import mensaje from '../imagenes/mensajito.jpeg';
import personas from '../imagenes/personas.jpeg';

const Header = ({ onLogout }) => {
    return (
        <header className="bg-white shadow-md p-4 flex justify-between items-center w-full">
            <div className="flex items-center space-x-4">
                <img src={varunaLogo} alt="Logo" className="w-20 h-20" />
                <span className="text-lg font-semibold">VARUNA PLATFORM</span>
            </div>
            <nav className="flex space-x-6">
                <Link to="/panel" className="text-gray-600 hover:text-gray-800">Panel</Link>
                <Link to="/chart" className="text-gray-600 hover:text-gray-800">Graficas</Link>
                <Link to="/sensors" className="text-gray-600 hover:text-gray-800">Sensores</Link> {/* Enlace a Sensors */}
                <a href="#" className="text-gray-600 hover:text-gray-800">Resultados</a>
                <a href="#" className="text-gray-600 hover:text-gray-800">Posts</a>
                <a href="#" className="text-gray-600 hover:text-gray-800">Perfil</a>
                <a href="#" className="text-gray-600 hover:text-gray-800">Usuarios</a>
            </nav>
            <div className="relative">
                <input type="text" className="bg-gray-200 rounded-full pl-4 pr-10 py-2" placeholder="Buscar..." />
                <span className="material-icons absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                    <img src={lupa} alt="Buscar" className="h-4 w-4" />
                </span>
            </div>
            <div className="flex items-center space-x-2">
                <button className="mr-2">
                    <img src={notificasion} alt="Notificación" className="h-7 w-7" />
                </button>
                <button className="mr-2">
                    <img src={mensaje} alt="Mensaje" className="h-7 w-7" />
                </button>
                <button className="mr-2">
                    <img src={personas} alt="Personas" className="h-7 w-7" />
                </button>
                <button className="mr-2">
                    <img src={grafica} alt="Gráfica" className="h-7 w-7" />
                </button>
                <LogoutButton onLogout={onLogout} />
            </div>
        </header>
    );
};

export default Header;

