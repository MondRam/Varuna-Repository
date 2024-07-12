import varunaLogo from '../imagenes/VarunaLogo.jpeg';
import notificasion from '../imagenes/notificasion.jpeg';
import lupa from '../imagenes/lupita.png';
import grafica from '../imagenes/Grafica (2).jpeg';
import mensaje from '../imagenes/mensajito.jpeg';
import personas from '../imagenes/personas.jpeg';

const Home = () => {
  return (
    <div className="bg-gray-100 font-sans antialiased min-h-screen flex flex-col">
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-md p-6">
          <nav className="space-y-4">
            <div className="bg-white rounded-lg shadow-lg p-4">
              <div className="bg-blue-600 text-white p-3 rounded-lg flex justify-between items-center">
                <span>Panel</span>
                <div className="bg-blue-800 rounded-full h-6 w-6 flex items-center justify-center">1</div>
              </div>
              <div className="mt-4 space-y-4">
                <div className="flex justify-between items-center p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
                  <div className="flex items-center">
                    <div className="bg-purple-500 rounded-full h-6 w-6 flex items-center justify-center mr-2">
                      <img src="icon-results.png" alt="" className="h-4 w-4" />
                    </div>
                    <span>Resultados</span>
                  </div>
                  <div className="bg-gray-200 rounded-full h-6 w-6 flex items-center justify-center">3</div>
                </div>
                <div className="flex justify-between items-center p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
                  <div className="flex items-center">
                    <div className="bg-green-500 rounded-full h-6 w-6 flex items-center justify-center mr-2">
                      <img src="icon-posts.png" alt="" className="h-4 w-4" />
                    </div>
                    <span>Posts</span>
                  </div>
                  <div className="bg-red-500 text-white rounded-full px-2 py-1 text-xs">NEW</div>
                </div>
                <div className="flex justify-between items-center p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
                  <div className="flex items-center">
                    <div className="bg-blue-500 rounded-full h-6 w-6 flex items-center justify-center mr-2">
                      <img src="icon-uploads.png" alt="" className="h-4 w-4" />
                    </div>
                    <span>Archivos subidos</span>
                  </div>
                  <div className="bg-gray-200 rounded-full h-6 w-6 flex items-center justify-center">3</div>
                </div>
              </div>
            </div>

            {/* Usuarios */}
            <div className="bg-white rounded-lg shadow-lg p-4">
              <div className="bg-blue-600 text-white p-3 rounded-lg flex justify-between items-center">
                <span>Usuarios</span>
                <div className="bg-blue-800 rounded-full h-6 w-6 flex items-center justify-center">8</div>
              </div>
              <div className="mt-4 space-y-4">
                <div className="flex items-center p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
                  <img src="https://via.placeholder.com/24" alt="Equipo VARUNA" className="rounded-full mr-2" />
                  <span className="text-gray-700">IRIS</span>
                  <span className="ml-auto bg-green-500 rounded-full w-3 h-3"></span>
                </div>
                <div className="flex items-center p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
                  <img src="https://via.placeholder.com/24" alt="Usuario 1" className="rounded-full mr-2" />
                  <span className="text-gray-700">Usuario 1</span>
                  <span className="ml-auto bg-gray-400 rounded-full w-3 h-3"></span>
                </div>
                <div className="flex items-center p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
                  <img src="https://via.placeholder.com/24" alt="Admin" className="rounded-full mr-2" />
                  <span className="text-gray-700">Admin</span>
                  <span className="ml-auto bg-green-500 rounded-full w-3 h-3"></span>
                </div>
                <div className="flex items-center p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
                  <img src="https://via.placeholder.com/24" alt="Chatbot" className="rounded-full mr-2" />
                  <span className="text-gray-700">Chatbot</span>
                  <span className="ml-auto bg-green-500 rounded-full w-3 h-3"></span>
                </div>
                <div className="flex items-center p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
                  <img src="https://via.placeholder.com/24" alt="Gerente" className="rounded-full mr-2" />
                  <span className="text-gray-700">Gerente</span>
                  <span className="ml-auto bg-yellow-400 rounded-full w-3 h-3"></span>
                </div>
                <div className="flex items-center p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
                  <img src="https://via.placeholder.com/24" alt="Usuario 2" className="rounded-full mr-2" />
                  <span className="text-gray-700">Usuario 2</span>
                  <span className="ml-auto bg-yellow-400 rounded-full w-3 h-3"></span>
                </div>
              </div>
            </div>

            <a href="#" className="flex items-center space-x-4 p-2 text-gray-600 hover:bg-gray-200 rounded-md">
              <span className="material-icons">analytics</span>
              <span>Resultados</span>
            </a>
            <a href="#" className="flex items-center space-x-4 p-2 text-gray-600 hover:bg-gray-200 rounded-md">
              <span className="material-icons">post_add</span>
              <span>Posts</span>
              <span className="ml-auto text-xs bg-red-500 text-white rounded-full px-2">NEW</span>
            </a>
            <a href="#" className="flex items-center space-x-4 p-2 text-gray-600 hover:bg-gray-200 rounded-md">
              <span className="material-icons">cloud_upload</span>
              <span>Archivos subidos</span>
            </a>
            <div className="mt-4">
              <a href="#" className="flex items-center space-x-4 p-2 text-gray-600 hover:bg-gray-200 rounded-md">
                <span className="material-icons">settings</span>
                <span>Configuración</span>
              </a>
              <a href="#" className="flex items-center space-x-4 p-2 text-gray-600 hover:bg-gray-200 rounded-md">
                <span className="material-icons">logout</span>
                <span>Cerrar Sesión</span>
              </a>
            </div>
          </nav>
        </aside>

        {/* Main content */}
        <div className="flex-1 p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Tarjetas de estadísticas */}
          <div className="bg-white p-4 shadow-md rounded-md">
            <div className="flex justify-between items-center">
              <div>
                <h4 className="text-gray-600">Resultados</h4>
                <span className="text-2xl font-semibold">1,345</span>
              </div>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Ver</button>
            </div>
          </div>

          <div className="bg-white p-4 shadow-md rounded-md">
            <div className="flex justify-between items-center">
              <div>
                <h4 className="text-gray-600">Publicaciones</h4>
                <span className="text-2xl font-semibold">12,456</span>
              </div>
              <button className="bg-green-500 text-white px-4 py-2 rounded-md">Ver</button>
            </div>
          </div>

          <div className="bg-white p-4 shadow-md rounded-md">
            <div className="flex justify-between items-center">
              <div>
                <h4 className="text-gray-600">Archivos</h4>
                <span className="text-2xl font-semibold">1,000</span>
              </div>
              <button className="bg-red-500 text-white px-4 py-2 rounded-md">Ver</button>
            </div>
          </div>

          {/* Gráficos y tablas */}
          <div className="col-span-2 bg-white p-4 shadow-md rounded-md">
            <div className="text-center">Gráfico de datos del agua</div>
          </div>

          <div className="bg-white p-4 shadow-md rounded-md">
            <div className="text-center">Estadísticas Web / Aplicación</div>
          </div>

          <div className="bg-white p-4 shadow-md rounded-md">
            <div className="text-center">Costos x Litro</div>
          </div>

          {/* Más tarjetas y contenido */}
        </div>
      </div>
    </div>
  );
}

export default Home;
