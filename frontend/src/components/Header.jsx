import { Link, useLocation } from 'react-router-dom';

/**
 * Generate dynamic classNames for the link.
 * @param {string} path - The current path
 * @param {string} currentPath - The path of the current location
 * @returns {string} - A string containing class names
 */
const generateLinkClasses = (path, currentPath) => {
    const baseClasses = 'my-2 md:my-0 md:mr-4 py-1 px-4 text-lg md:text-xl rounded-md text-blue-700 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white transform transition-transform duration-300';
    const activeClasses = 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md';

    return `${baseClasses} ${currentPath === path ? activeClasses : ''}`;
};

/**
 * Header Component - Represents the header of the application.
 */
function Header() {
    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <div className="bg-white p-4 md:p-6 shadow-lg">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="flex items-center mb-4 md:mb-0">
                    <img src="/images/logo.jpg" alt="Avenida Azul Logo" className="w-16 h-16 md:w-20 md:h-20 mr-4" loading="lazy"/>
                    <h1 className="text-3xl md:text-4xl font-extrabold text-blue-700 transition-transform duration-300 hover:scale-105">Avenida Azul</h1>
                </div>

                <nav className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
                    <NavigationLinks currentPath={currentPath} />
                </nav>
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
            { path: '/classes', label: 'Talleres' },
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
