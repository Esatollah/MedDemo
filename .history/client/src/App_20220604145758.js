import './App.css';
import SearchBar from './components/Search';
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={
<div>
      <SearchBar></SearchBar>
    </div>
      }/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
