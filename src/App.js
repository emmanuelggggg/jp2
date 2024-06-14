
import './App.css';
import { Flowbite } from "flowbite-react";

import noche from  './img/logo-juanp.png';
import NavBar from './components/nav&side/NavBar';
import SideBar from './components/nav&side/SideBar';
import Tabla from './components/Tabla';

function App() {
  return (
    <Flowbite >      
    
      <NavBar noche={noche}></NavBar>
      <SideBar></SideBar>

      <Tabla></Tabla>
      
      

    </Flowbite>
  );
}

export default App;
