import logo from './logo.svg';
import './App.css';
import Navigation from './components/navigation';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';

function App() {
  return (
     <div className="App">
      <Routes>
    <Route path="/" element={ <Home  />} />
 </Routes>
    </div>
  );
}

export default App;
