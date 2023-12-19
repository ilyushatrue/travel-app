import { Box, Typography } from '@mui/material';
import NavigationBar from './components/layout/header/NavigationBar';
import {Routes, Route} from 'react-router-dom'
import {Home, Prices,  Contacts, Tours,  About, Login, Registration} from './pages/index';

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
        <Route path="/register" element={<Registration/>}/>
      </Routes>
    </>
    
  );
}

export default App;
