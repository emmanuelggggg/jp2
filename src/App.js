
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

import {Materias1, Materias2, Materias3,Materias4,Materias5,Materias6,Materias7,Materias8,Curriculum1} from './views/materias1/Materias1';
import {Materias9, Materias10, Materias11,Materias12,Materias13,Materias14,Materias15,Materias16,Curriculum2} from './views/materias2/Materias2';
import {Materias17, Materias18, Materias19,Materias20,Materias21,Materias22,Laboral1,Laboral2,Curriculum3} from './views/materias3/Materias3';
import {Materias23, Materias24, Materias25,Materias26,Materias27,Materias28,Materias29,Materias30,Laboral3,Laboral4,Curriculum4} from './views/materias4/Materias4';
import {Materias31, Materias32,Extendido1,Extendido2,Extendido3,Extendido4,Laboral5,Laboral6,Curriculum5} from './views/materias5/Materias5';
import {Materias33, Materias34,Materias35, Extendido5,Extendido6,Extendido7,Extendido8,Laboral7,Laboral8,Curriculum6} from './views/materias6/Materias6';




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
          <Route path='/Materias4' element={<Materias4 />}></Route>
          <Route path='/Materias5' element={<Materias5 />}></Route>
          <Route path='/Materias6' element={<Materias6 />}></Route>
          <Route path='/Materias7' element={<Materias7 />}></Route>
          <Route path='/Materias8' element={<Materias8 />}></Route>
          <Route path='/Curriculum1' element={<Curriculum1 />}></Route>
      

          <Route path='/Segundo' element={<Segundo />}></Route>
          <Route path='/Materias9' element={<Materias9 />}></Route>
          <Route path='/Materias10' element={<Materias10 />}></Route>
          <Route path='/Materias11' element={<Materias11 />}></Route>
          <Route path='/Materias12' element={<Materias12 />}></Route>
          <Route path='/Materias13' element={<Materias13 />}></Route>
          <Route path='/Materias14' element={<Materias14 />}></Route>
          <Route path='/Materias15' element={<Materias15 />}></Route>
          <Route path='/Materias16' element={<Materias16/>}></Route>
          <Route path='/Curriculum2' element={<Curriculum2 />}></Route>


          <Route path='/Tercero' element={<Tercero />}></Route>
          <Route path='/Materias3-17' element={<Materias17 />}></Route>
          <Route path='/Materias18' element={<Materias18 />}></Route>
          <Route path='/Materias19' element={<Materias19 />}></Route>
          <Route path='/Materias20' element={<Materias20 />}></Route>
          <Route path='/Materias21' element={<Materias21 />}></Route>
          <Route path='/Materias22' element={<Materias22 />}></Route>
          <Route path='/Laboral1' element={<Laboral1 />}></Route>
          <Route path='/Laboral2' element={<Laboral2 />}></Route>
          <Route path='/Curriculum3' element={<Curriculum3 />}></Route>
        


          <Route path='/Cuarto' element={<Cuarto />}></Route>
          <Route path='/Materias23' element={<Materias23 />}></Route>
          <Route path='/Materias24' element={<Materias24 />}></Route>
          <Route path='/Materias25' element={<Materias25 />}></Route>
          <Route path='/Materias26' element={<Materias26 />}></Route>
          <Route path='/Materias27' element={<Materias27 />}></Route>
          <Route path='/Materias28' element={<Materias28 />}></Route>
          <Route path='/Materias29' element={<Materias29 />}></Route>
          <Route path='/Materias30' element={<Materias30/>}></Route>
          <Route path='/Laboral3' element={<Laboral3 />}></Route>
          <Route path='/Laboral4' element={<Laboral4 />}></Route>
          <Route path='/Curriculum4' element={<Curriculum4 />}></Route>

          <Route path='/Quinto' element={<Quinto />}></Route>
          <Route path='/Materias31' element={<Materias31/>}></Route>
          <Route path='/Materias32' element={<Materias32/>}></Route>
          <Route path='/Extendido1' element={<Extendido1/>}></Route>
          <Route path='/Extendido2' element={<Extendido2/>}></Route>
          <Route path='/Extendido3' element={<Extendido3/>}></Route>
          <Route path='/Extendido4' element={<Extendido4/>}></Route>
          <Route path='/Laboral5' element={<Laboral5 />}></Route>
          <Route path='/Laboral6' element={<Laboral6 />}></Route>
          <Route path='/Curriculum5' element={<Curriculum5 />}></Route>



          <Route path='/Sexto' element={<Sexto />}></Route>
          <Route path='/Materias33' element={<Materias33/>}></Route>
          <Route path='/Materias34' element={<Materias34/>}></Route>
          <Route path='/Materias35' element={<Materias35/>}></Route>
          <Route path='/Extendido5' element={<Extendido5/>}></Route>
          <Route path='/Extendido6' element={<Extendido6/>}></Route>
          <Route path='/Extendido7' element={<Extendido7/>}></Route>
          <Route path='/Extendido8' element={<Extendido8/>}></Route>
          <Route path='/Laboral7' element={<Laboral7 />}></Route>
          <Route path='/Laboral8' element={<Laboral8 />}></Route>
          <Route path='/Curriculum6' element={<Curriculum6 />}></Route>

        </Route>
      </Routes>
      <NavBar noche={noche}></NavBar>
      <SideBar></SideBar>

      
      
      

    </Flowbite>
  );
}

export default App;
