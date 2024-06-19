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
                      <Badge className="bg-green-200 text-green-800 dark:bg-green-200 dark:text-green-800" key="lic">✅ {lic}</Badge>
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
                      <Badge className="bg-blue-200 text-blue-800 dark:bg-blue-200 dark:text-blue-800" key="ing">✅ {ing}</Badge>
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
                      <Badge className="bg-orange-200 text-orange-800 dark:bg-orange-200 dark:text-orange-800" key="mas">✅ {mas}</Badge>
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