import './App.css';
import SearchBar from './Routes/Search';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Bestellungen from './Routes/Bestellungen';


ReactModal.setAppElement('#root')
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<div><SearchBar/></div>}/>
      <Route path='/bestellungen' element={<div><Bestellungen/></div>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
