import React from 'react'
import {Accordion,Badge} from "flowbite-react";


const Perfiles = ({titulo, licenciatura, ingeneria, maestria}) => {
  return (
    <div>
        <Accordion.Title>{titulo}</Accordion.Title>
          <Accordion.Content >
            <p className="mb-2 text-gray-500 font-bold dark:text-gray-400">
              Licenciatura
            </p>    
            <div className="flex flex-wrap gap-2">
              {
                licenciatura.map((lic) => {
                  return(
                    <div key={lic}>
                      {
                        (lic === "No Aplica") ? <Badge className="bg-red-200 text-red-800 dark:bg-red-200 dark:text-red-800" >❌ {lic}</Badge> : <Badge className="bg-green-200 text-green-800 dark:bg-green-200 dark:text-green-800" >✅ {lic}</Badge>
                      }                      
                    </div>
                  )
                })
              }
            </div>
            <p className="mb-2 mt-10 text-gray-500 font-bold dark:text-gray-400">
              Ingeneria
            </p>    
            <div className="flex flex-wrap gap-2">
              {
                ingeneria.map((ing) => {
                  return(
                    <div key={ing}> 
                      {
                        (ing === "No Aplica") ? <Badge className="bg-red-200 text-red-800 dark:bg-red-200 dark:text-red-800" >❌ {ing}</Badge> : <Badge className="bg-orange-200 text-orange-800 dark:bg-orange-200 dark:text-orange-800" >✅ {ing}</Badge>
                      }   
                      
                    </div>
                  )
                })
              }
            </div>
            <p className="mb-2 mt-10 text-gray-500 font-bold dark:text-gray-400">
              Maestria
            </p>    
            <div className="flex flex-wrap gap-2">
              {
                maestria.map((mas) => {
                  return(
                    <div key={mas}>
                      {
                        (mas === "No Aplica") ? <Badge className="bg-red-200 text-red-800 dark:bg-red-200 dark:text-red-800" >❌ {mas}</Badge> : <Badge className="bg-sky-200 text-sky-900 dark:bg-sky-200 dark:text-sky-900" >✅ {mas}</Badge>
                        }  
                    </div>
                  )
                })
              }
            </div>
        </Accordion.Content>
    </div>
  )
}

export default Perfiles