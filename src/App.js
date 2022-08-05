import './App.css';

import Homepage from './Pages/Homepage';
import AboutUs from './Pages/AboutUs';
import Packages from './Pages/Packages';
import Places from './Pages/Places';
import Contact from './Pages/Contact';
import ErrorPage from './Pages/ErrorPage';


import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
         <Route path="/about" element={<AboutUs/>} />
         <Route path="/packages" element={<Packages/>} />
        <Route path="/places" element={<Places/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
    </div>
  );
}

export default App;
