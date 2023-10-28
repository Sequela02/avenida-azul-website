import './App.css';
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutUs from "./components/AboutUs";
import HomePage from "./components/HomePage";
import Footer from './components/Footer';
function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage/>} />
                    <Route path="/about" element={<AboutUs />} />
                    <Route path="/classes" element={<div>Classes Page</div>} />
                    <Route path="/gallery" element={<div>Gallery Page</div>} />
                    <Route path="/contact" element={<div>Contact Page</div>} />
                    <Route path="/" element={<div>Home Page</div>} />
                </Routes>
            </div>
            <Footer />
        </Router>
    );
}

export default App;
