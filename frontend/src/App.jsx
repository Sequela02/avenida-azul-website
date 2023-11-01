// Importing required modules and components
import './App.css';
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutUs from "./components/AboutUs";
import HomePage from "./components/HomePage";
import Footer from './components/Footer';
import GalleryPage from "./components/GalleryPage";
import ContactPage from "./components/ContactPage";
import WorkshopPage from "./components/WorkshopPage";
import SocialFooter from "./components/SocialFooter";
/**
 * App Component
 *
 * This is the main component that wraps all the routes and global components like Header and Footer.
 *
 * @returns JSX.Element
 */
function App() {
    return (
        // Router component for handling routes
        <Router>
            {/* Main App container */}
            <div className="App " >
                {/* Header component */}
                <Header />

                {/* Routes for different pages */}
                <Routes>
                    {/* Home Page */}
                    <Route path="/" element={<HomePage/>} />

                    {/* About Us Page */}
                    <Route path="/about" element={<AboutUs />} />

                    {/* Classes Page (Placeholder) */}
                    <Route path="/classes" element={<WorkshopPage/>} />

                    {/* Gallery Page */}
                    <Route path="/gallery" element={<GalleryPage/>} />

                    {/* Contact Page (Placeholder) */}
                    <Route path="/contact" element={<ContactPage/>} />


                </Routes>
            </div>
            <SocialFooter/>
            {/* Footer component */}
            <Footer />
        </Router>
    );
}

// Exporting App component
export default App;
