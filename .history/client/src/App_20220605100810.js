import './App.css';
import SearchBar from './Routes/Search';
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<div><SearchBar/></div>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
