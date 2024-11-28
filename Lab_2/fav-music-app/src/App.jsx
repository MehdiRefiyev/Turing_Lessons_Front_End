import './App.css';
import AllMusics from './components/AllMusics';
import Favorites from './components/Favorites';
import NavigationBar from './components/NavigationBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
      <div className='appContainer'>
        <NavigationBar />
        <Routes>
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/" element={<AllMusics />} />
        </Routes>
      </div>
  );
}

export default App;
