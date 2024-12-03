import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Products from './Pages/Products';
import Contact from './Pages/Contact';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path='/Home' element={<Home/>} />
          <Route path='/products' element={<Products/>} />
          <Route path='/Contact' element={<Contact/>} />
        </Routes>
        </BrowserRouter>
        
    </div>
  );
}

export default App;
