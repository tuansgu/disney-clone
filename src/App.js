import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./components/Login"
import Header from './components/Header';
import Home from './components/Home';
import Search from './components/Search';

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Routes>
          {/* Sử dụng element prop để chỉ định thành phần cho Route */}
          
          <Route path='/' element={<Login />}/> 
          <Route path="/home" element={<Home />}/>
          <Route path="/search" element={<Search />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
