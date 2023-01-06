import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Home/>
      <Routes>
       <Route/>
      </Routes>
      <Footer/>
      </BrowserRouter>
   
    </div>
  );
}

export default App;
