import { Link, useLocation } from 'react-router-dom';

/**
 * Generate dynamic classNames for the link.
 * @param {string} path - The current path
 * @param {string} currentPath - The path of the current location
 * @returns {string} - A string containing class names
 */
const generateLinkClasses = (path, currentPath) => {
    const baseClasses = 'mr-4 p-2 rounded-md text-blue-800 hover:text-purple-600 hover:bg-lightblue-400 hover:shadow-lg transform transition-transform duration-200';
    const activeClasses = 'bg-gradient-to-r from-lightblue-400 to-blue-200 text-purple-700';

    return `${baseClasses} ${currentPath === path ? activeClasses : ''}`;
};

/**
 * Header Component - Represents the header of the application.
 */
function Header() {
    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <div className="bg-gradient-to-r from-lightblue-400 to-blue-300 p-4 md:p-6 shadow-1xl">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="flex items-center">
                    <img src="/images/logo.jpg" alt="Avenida Azul Logo" className="w-16 h-16 md:w-20 md:h-20 mr-4" loading="lazy"/>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-4 md:mb-0">Avenida Azul</h1>
                </div>

                <div className="flex flex-wrap justify-center md:justify-start items-center space-y-0">
                    <NavigationLinks currentPath={currentPath} />
                </div>
            </div>
        </div>
    );
}

/**
 * NavigationLinks Component - Represents the navigation links in the header.
 * @param {Object} props - The component's props
 * @param {string} props.currentPath - The current path
 */
const NavigationLinks = ({ currentPath }) => (
    <>
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
                className={generateLinkClasses(path, currentPath)}
            >
                {label}
            </Link>
        ))}
    </>
);

export default Header;
