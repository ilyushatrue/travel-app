import { Box, Typography } from '@mui/material';
import NavigationBar from './components/layout/header/NavigationBar';
import {Routes, Route} from 'react-router-dom'
import {Home, Prices,  Contacts, Tours,  About} from './pages/index';
import Login from './pages/Login';

function App() {

  return (
    <>
      <NavigationBar/>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/prices" element={<Prices/>}/>
        <Route path="/contacts" element={<Contacts/>}/>
        <Route path="/tours" element={<Tours/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </>
    
  );
}

export default App;
