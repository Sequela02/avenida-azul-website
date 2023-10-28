import { Link, useLocation } from 'react-router-dom';

function Header() {
    const location = useLocation();

    return (
        <div className="bg-gradient-to-r from-lightblue-400 to-blue-300 p-4 md:p-6 shadow-2xl">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">

                <div className="flex items-center">
                    <img src="/images/logo.jpg" alt="Avenida Azul Logo" className="w-16 h-16 md:w-20 md:h-20 mr-4"/>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-4 md:mb-0">Avenida Azul</h1>
                </div>

                <div className="flex flex-wrap justify-center md:justify-start items-center space-y-0">
                    {[
                        { path: '/', label: 'Home' },
                        { path: '/about', label: 'Sobre nosotros' },
                        { path: '/information', label: 'Talleres' },
                        { path: '/gallery', label: 'Galería' },
                        { path: '/contact', label: 'Contacto' }
                    ].map(({ path, label }) => (
                        <Link
                            key={path}
                            to={path}
                            className={`mr-4 p-2 rounded-md text-blue-800 hover:text-purple-600 hover:bg-lightblue-400 hover:shadow-lg transform transition-transform duration-200 ${location.pathname === path ? 'bg-gradient-to-r from-lightblue-400 to-blue-200 text-purple-700' : ''}`}
                        >
                            {label}
                        </Link>
                    ))}
                </div>

            </div>
        </div>
    );
}

export default Header;
