import { Route, Routes } from 'react-router';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home/Index';
import Admin from './pages/Admin';

function App() {
  return (
    <div className='appContainer'>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  )
}

export default App
