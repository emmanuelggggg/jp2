
import './App.css';
import { Flowbite } from "flowbite-react";
import { Route, Routes } from 'react-router-dom';
import noche from  './img/logo-juanp.png';
import NavBar from './components/nav&side/NavBar';
import SideBar from './components/nav&side/SideBar';
import Index from './views/Index';
import Primeros from './views/Primeros';
import Segundo from './views/Segundo';
import Tercero from './views/Tercero';
import Cuarto from './views/Cuarto';
import Quinto from './views/Quinto';
import Sexto from './views/Sexto';
import {Materias1, Materias2, Materias3} from './views/materias1/Materias1';

function App() {
  return (
    <Flowbite >      
    
      <Routes>
        <Route path='/' element={<SideBar />}>
          <Route path='/' element={<Index />}></Route>
          <Route path='/Primeros' element={<Primeros />}></Route>

          <Route path='/Materias1' element={<Materias1 />}></Route>
          <Route path='/Materias2' element={<Materias2 />}></Route>
          <Route path='/Materias3' element={<Materias3 />}></Route>

          <Route path='/Segundo' element={<Segundo />}></Route>
          <Route path='/Tercero' element={<Tercero />}></Route>
          <Route path='/Cuarto' element={<Cuarto />}></Route>
          <Route path='/Quinto' element={<Quinto />}></Route>
          <Route path='/Sexto' element={<Sexto />}></Route>
        </Route>
      </Routes>
      <NavBar noche={noche}></NavBar>
      <SideBar></SideBar>

      
      
      

    </Flowbite>
  );
}

export default App;
