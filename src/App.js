import logo from './logo.svg';
import './App.css';
import Register from './components/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Search from './components/Search';
import ViewAll from './components/ViewAll';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/search" element={<Search/>}/>
        <Route path="/viewall" element={<ViewAll/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
