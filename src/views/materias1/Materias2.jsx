import React from 'react'
import { Card ,Toast} from "flowbite-react";
import { HiCheck } from "react-icons/hi";
export const Materias9 = () => {
  return (
    <div>
      <div className="p-4  sm:ml-64 dark:bg-gray-600">
        <div className="p-4  dark:border-gray-700 mt-14  overflow-x-auto">
          <div className="border-l-5 border-sky-900">
            <h1 className="text-cyan-800 text-2xl font-bold dark:text-gray-200 ">
              Conservación de la Energía y su Interacción con la Materia
            </h1>
          </div>
          <div className="overflow-x-auto mt-11">
            <Card className="w-full">
              <p className="text-gray-800 text-lg dark:text-gray-200 m-2"><strong className="font-bold">Observaciones :</strong></p>
              <p className='text-gray-800 text-sm dark:text-gray-200 '>
              Por su ubicación en el mapa curricular, esta UAC tiene relación directa con el Taller de Ciencias I  y “La materia y sus interacciones”, a partir de la profundización en la práctica científica al retomar los aprendizajes desarrollados en dichas prácticas, se buscará que el estudiantado se apropie de los conceptos centrales y los pueda generalizar en diferentes ambientes de aprendizaje.
              </p>
            </Card>
            <Card  className="w-full flex mt-5 dark:bg-gray-500">
                <div className="flex justify-between">
                  <p className="text-cyan-800 text-md font-bold dark:text-gray-200 m-2">Progresiones </p>
                  <p className="text-cyan-800 text-md  dark:text-gray-200 m-2"> </p>
                  <p className="text-cyan-800 text-md font-bold dark:text-gray-200 m-2">Perfil </p>
                  <p className="text-cyan-800 text-md  dark:text-gray-200 m-2"> </p>
                </div>
                <div className="container mx-auto px-4">                  
                  <ul className='list-decimal text-gray-800 dark:text-white'>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>La energía puede ser transferida de un objeto en movimiento a otro objeto cuando colisionan. La energía está presente cuando hay objetos en movimiento, hay sonido, hay luz o hay calor.</p>
                        <Toast>
                          <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Física</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>La energía tiene diferentes manifestaciones (por ejemplo, energía en campos electromagnéticos, energía térmica, energía de movimiento).</p>
                        <Toast>
                          <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Física</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>La energía se puede transferir de distintas formas y entre objetos o sistemas, así como al interior de ellos.</p>
                        
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Física</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Cuando la energía fluye es posible detectar la transferencia de energía a través de un objeto o sistema.</p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Física</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>El cambio de estado y/o el movimiento de la materia en un sistema es promovido por la transferencia de energía.</p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Física-Química</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>La temperatura de un sistema se da en función de la energía cinética promedio y a la energía potencial por partícula. La relación depende del tipo de átomo o molécula del material y sus interacciones.</p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6"/>
                          </div>
                          <div className="ml-3 text-sm font-normal">Física-Química</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>La energía requerida para cambiar la temperatura de un objeto está en función de su masa y naturaleza, así como del medio.</p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Física-Química</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>La energía se transfiere de sistemas u objetos más calientes a otros más fríos.</p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Física</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>La energía no puede ser creada o destruida, pero puede ser transportada de un lugar a otro y transferida entre sistemas.</p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Física-Química</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>La energía no se puede destruir, sin embargo, se puede convertir en otras formas de menor utilidad (por ejemplo, cuando hay pérdidas por calor).</p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6"/>
                          </div>
                          <div className="ml-3 text-sm font-normal">Física-Química</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>El funcionamiento de los sistemas depende de su disponibilidad de energía.</p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Física-Química</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>En los sistemas cerrados las cantidades totales de materia y energía se conservan</p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Física-Química</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Los cambios de energía y materia en un sistema se pueden rastrear a través de sus flujos hacía, desde y dentro del mismo.</p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Física-Química</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Emplear el principio de conservación en el que la energía no se crea ni se destruye, significa que el cambio total de energía en cualquier sistema es siempre igual al total de energía transferida dentro o fuera del sistema.</p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6"/>
                          </div>
                          <div className="ml-3 text-sm font-normal">Física-Química</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>A través del concepto de conservación de la energía es posible describir y predecir el comportamiento de un sistema.</p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Física-Química</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>La ciencia como un esfuerzo humano para el bienestar, parte 2. Discusión de la aplicación de las ciencias naturales: sobre la generación de energía eléctrica.</p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Física-Química</div>
                          
                        </Toast>
                      </div>
                    </li>
                    
                    
                  </ul>
                </div>
            </Card>
        </div>
        </div>
      </div>
    </div>
  )
}
export const Materias10 = () => {
  return (
    <div>
      <div className="p-4  sm:ml-64 dark:bg-gray-600">
        <div className="p-4  dark:border-gray-700 mt-14  overflow-x-auto">
          <div className="border-l-5 border-sky-900">
            <h1 className="text-cyan-800 text-2xl font-bold dark:text-gray-200 ">
              Ciencias Sociales II
            </h1>
          </div>
          <div className="overflow-x-auto mt-11">
            <Card className="w-full">
              <p className="text-gray-800 text-lg dark:text-gray-200 m-2"><strong className="font-bold">Observaciones :</strong></p>
              <p className='text-gray-800 text-sm dark:text-gray-200 '>
              
              </p>
            </Card>
            <Card  className="w-full flex mt-5 dark:bg-gray-500">
                <div className="flex justify-between">
                  <p className="text-cyan-800 text-md font-bold dark:text-gray-200 m-2">Progresiones </p>
                  <p className="text-cyan-800 text-md  dark:text-gray-200 m-2"> </p>
                  <p className="text-cyan-800 text-md font-bold dark:text-gray-200 m-2">Perfil </p>
                  <p className="text-cyan-800 text-md  dark:text-gray-200 m-2"> </p>
                </div>
                <div className="container mx-auto px-4">                  
                  <ul className='list-decimal text-gray-800 dark:text-white'>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>    </p>
                        <Toast>
                          <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Ciencias Sociales</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>     </p>
                        <Toast>
                          <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Ciencias Sociales</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>      </p>
                        
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Ciencias Sociales</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>       </p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Ciencias Sociales</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>      </p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Ciencias Sociales</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>      </p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6"/>
                          </div>
                          <div className="ml-3 text-sm font-normal">Ciencias Sociales</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>      </p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Ciencias Sociales</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>      </p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Ciencias Sociales</div>
                          
                        </Toast>
                      </div>
                    </li>
                    
                    
                  </ul>
                </div>
            </Card>
        </div>
        </div>
      </div>
    </div>
  )
}
export const Materias11 = () => {
  return (
    <div>
      <div className="p-4  sm:ml-64 dark:bg-gray-600">
        <div className="p-4  dark:border-gray-700 mt-14  overflow-x-auto">
          <div className="border-l-5 border-sky-900">
            <h1 className="text-cyan-800 text-2xl font-bold dark:text-gray-200 ">
              Cultura Digital II
            </h1>
          </div>
          <div className="overflow-x-auto mt-11">
            <Card className="w-full">
              <p className="text-gray-800 text-lg dark:text-gray-200 m-2"><strong className="font-bold">Observaciones :</strong></p>
              <p className='text-gray-800 text-sm dark:text-gray-200 '>
              
              </p>
            </Card>
            <Card  className="w-full flex mt-5 dark:bg-gray-500">
                <div className="flex justify-between">
                  <p className="text-cyan-800 text-md font-bold dark:text-gray-200 m-2">Progresiones </p>
                  <p className="text-cyan-800 text-md  dark:text-gray-200 m-2"> </p>
                  <p className="text-cyan-800 text-md font-bold dark:text-gray-200 m-2">Perfil </p>
                  <p className="text-cyan-800 text-md  dark:text-gray-200 m-2"> </p>
                </div>
                <div className="container mx-auto px-4">                  
                  <ul className='list-decimal text-gray-800 dark:text-white'>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>     </p>
                        <Toast>
                          <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Cultura Digital</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>      </p>
                        <Toast>
                          <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Cultura Digital</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>     </p>
                        
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Cultura Digital</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>      </p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Cultura Digital</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>      </p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Cultura Digital</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>      </p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6"/>
                          </div>
                          <div className="ml-3 text-sm font-normal">Cultura Digital</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>      </p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Cultura Digital</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>      </p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Cultura Digital</div>
                          
                        </Toast>
                      </div>
                    </li>
                    
                    
                  </ul>
                </div>
            </Card>
        </div>
        </div>
      </div>
    </div>
  )
}
export const Materias12 = () => {
  return (
    <div>
      <div className="p-4  sm:ml-64 dark:bg-gray-600">
        <div className="p-4  dark:border-gray-700 mt-14  overflow-x-auto">
          <div className="border-l-5 border-sky-900">
            <h1 className="text-cyan-800 text-2xl font-bold dark:text-gray-200 ">
              Pensamiento Matemático II
            </h1>
          </div>
          <div className="overflow-x-auto mt-11">
            <Card className="w-full">
              <p className="text-gray-800 text-lg dark:text-gray-200 m-2"><strong className="font-bold">Observaciones :</strong></p>
              <p className='text-gray-800 text-sm dark:text-gray-200 '>
             
              </p>
            </Card>
            <Card  className="w-full flex mt-5 dark:bg-gray-500">
                <div className="flex justify-between">
                  <p className="text-cyan-800 text-md font-bold dark:text-gray-200 m-2">Progresiones </p>
                  <p className="text-cyan-800 text-md  dark:text-gray-200 m-2"> </p>
                  <p className="text-cyan-800 text-md font-bold dark:text-gray-200 m-2">Perfil </p>
                  <p className="text-cyan-800 text-md  dark:text-gray-200 m-2"> </p>
                </div>
                <div className="container mx-auto px-4">                  
                  <ul className='list-decimal text-gray-800 dark:text-white'>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200'>     </p>
                        <Toast>
                          <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Pensamiento Matemático</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>    </p>
                        <Toast>
                          <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Pensamiento Matemático</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>     </p>
                        
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Pensamiento Matemático</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>      </p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Pensamiento Matemático</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>     </p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Pensamiento Matemático</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>     </p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6"/>
                          </div>
                          <div className="ml-3 text-sm font-normal">Pensamiento Matemático</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>     </p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Pensamiento Matemático</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>      </p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Pensamiento Matemático</div>
                          
                        </Toast>
                      </div>
                    </li>
                    
                    
                  </ul>
                </div>
            </Card>
        </div>
        </div>
      </div>
    </div>
  )
}
export const Materias13 = () => {
  return (
    <div>
      <div className="p-4  sm:ml-64 dark:bg-gray-600">
        <div className="p-4  dark:border-gray-700 mt-14  overflow-x-auto">
          <div className="border-l-5 border-sky-900">
            <h1 className="text-cyan-800 text-2xl font-bold dark:text-gray-200 ">
              Lengua y Comunicación II
            </h1>
          </div>
          <div className="overflow-x-auto mt-11">
            <Card className="w-full">
              <p className="text-gray-800 text-lg dark:text-gray-200 m-2"><strong className="font-bold">Observaciones :</strong></p>
              <p className='text-gray-800 text-sm dark:text-gray-200 '>
              
              </p>
            </Card>
            <Card  className="w-full flex mt-5 dark:bg-gray-500">
                <div className="flex justify-between">
                  <p className="text-cyan-800 text-md font-bold dark:text-gray-200 m-2">Progresiones </p>
                  <p className="text-cyan-800 text-md  dark:text-gray-200 m-2"> </p>
                  <p className="text-cyan-800 text-md font-bold dark:text-gray-200 m-2">Perfil </p>
                  <p className="text-cyan-800 text-md  dark:text-gray-200 m-2"> </p>
                </div>
                <div className="container mx-auto px-4">                  
                  <ul className='list-decimal text-gray-800 dark:text-white'>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>    </p>
                        <Toast>
                          <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Lengua y Comunicación</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>   </p>
                        <Toast>
                          <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Lengua y Comunicación</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>    </p>
                        
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Lengua y Comunicación</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>    </p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Lengua y Comunicación</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>     </p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Lengua y Comunicación</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>    </p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6"/>
                          </div>
                          <div className="ml-3 text-sm font-normal">Lengua y Comunicación</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>    </p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Lengua y Comunicación</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>     </p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Lengua y Comunicación</div>
                          
                        </Toast>
                      </div>
                    </li>
                    
                    
                  </ul>
                </div>
            </Card>
        </div>
        </div>
      </div>
    </div>
  )
}
export const Materias14 = () => {
  return (
    <div>
      <div className="p-4  sm:ml-64 dark:bg-gray-600">
        <div className="p-4  dark:border-gray-700 mt-14  overflow-x-auto">
          <div className="border-l-5 border-sky-900">
            <h1 className="text-cyan-800 text-2xl font-bold dark:text-gray-200 ">
              Inglés II
            </h1>
          </div>
          <div className="overflow-x-auto mt-11">
            <Card className="w-full">
              <p className="text-gray-800 text-lg dark:text-gray-200 m-2"><strong className="font-bold">Observaciones :</strong></p>
              <p className='text-gray-800 text-sm dark:text-gray-200 '>
              
              </p>
            </Card>
            <Card  className="w-full flex mt-5 dark:bg-gray-500">
                <div className="flex justify-between">
                  <p className="text-cyan-800 text-md font-bold dark:text-gray-200 m-2">Progresiones </p>
                  <p className="text-cyan-800 text-md  dark:text-gray-200 m-2"> </p>
                  <p className="text-cyan-800 text-md font-bold dark:text-gray-200 m-2">Perfil </p>
                  <p className="text-cyan-800 text-md  dark:text-gray-200 m-2"> </p>
                </div>
                <div className="container mx-auto px-4">                  
                  <ul className='list-decimal text-gray-800 dark:text-white'>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>    </p>
                        <Toast>
                          <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Inglés</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>    </p>
                        <Toast>
                          <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Inglés</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>    </p>
                        
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Inglés</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>    </p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Inglés</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>     </p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Inglés</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>    </p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6"/>
                          </div>
                          <div className="ml-3 text-sm font-normal">Inglés</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>    </p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Inglés</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>    </p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Inglés</div>
                          
                        </Toast>
                      </div>
                    </li>
                    
                    
                  </ul>
                </div>
            </Card>
        </div>
        </div>
      </div>
    </div>
  )
}
export const Materias15 = () => {
  return (
    <div>
      <div className="p-4  sm:ml-64 dark:bg-gray-600">
        <div className="p-4  dark:border-gray-700 mt-14  overflow-x-auto">
          <div className="border-l-5 border-sky-900">
            <h1 className="text-cyan-800 text-2xl font-bold dark:text-gray-200 ">
              Humanidades II
            </h1>
          </div>
          <div className="overflow-x-auto mt-11">
            <Card className="w-full">
              <p className="text-gray-800 text-lg dark:text-gray-200 m-2"><strong className="font-bold">Observaciones :</strong></p>
              <p className='text-gray-800 text-sm dark:text-gray-200 '>
              
              </p>
            </Card>
            <Card  className="w-full flex mt-5 dark:bg-gray-500">
                <div className="flex justify-between">
                  <p className="text-cyan-800 text-md font-bold dark:text-gray-200 m-2">Progresiones </p>
                  <p className="text-cyan-800 text-md  dark:text-gray-200 m-2"> </p>
                  <p className="text-cyan-800 text-md font-bold dark:text-gray-200 m-2">Perfil </p>
                  <p className="text-cyan-800 text-md  dark:text-gray-200 m-2"> </p>
                </div>
                <div className="container mx-auto px-4">                  
                  <ul className='list-decimal text-gray-800 dark:text-white'>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>     </p>
                        <Toast>
                          <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Humanidades</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>     </p>
                        <Toast>
                          <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Humanidades</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>    </p>
                        
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Humanidades</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>    </p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Humanidades</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>     </p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Humanidades</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>   </p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6"/>
                          </div>
                          <div className="ml-3 text-sm font-normal">Humanidades</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>   </p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Humanidades</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>   </p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Humanidades</div>
                          
                        </Toast>
                      </div>
                    </li>
                    
                    
                  </ul>
                </div>
            </Card>
        </div>
        </div>
      </div>
    </div>
  )
}
export const Materias16 = () => {
  return (
    <div>
      <div className="p-4  sm:ml-64 dark:bg-gray-600">
        <div className="p-4  dark:border-gray-700 mt-14  overflow-x-auto">
          <div className="border-l-5 border-sky-900">
            <h1 className="text-cyan-800 text-2xl font-bold dark:text-gray-200 ">
              *Taller de Ciencias I
            </h1>
          </div>
          <div className="overflow-x-auto mt-11">
            <Card className="w-full">
              <p className="text-gray-800 text-lg dark:text-gray-200 m-2"><strong className="font-bold">Observaciones :</strong></p>
              <p className='text-gray-800 text-sm dark:text-gray-200 '>
              Por su ubicación en el mapa curricular, Taller de Ciencias I busca robustecer los conocimientos de las UAC de “La materia y sus interacciones” y “Conservación de la energía y sus interacciones con la materia”, a partir de la profundización en la práctica científica. Esto no implica que las UAC anteriores no lleven a cabo ejercicios prácticos por sí mismas, sino que, al retomar los aprendizajes desarrollados en dichas prácticas, se buscará que el estudiantado se apropie de los conceptos centrales y los pueda generalizar en diferentes ambientes de aprendizaje.
              </p>
            </Card>
            <Card  className="w-full flex mt-5 dark:bg-gray-500">
                <div className="flex justify-between">
                  <p className="text-cyan-800 text-md font-bold dark:text-gray-200 m-2">Progresiones </p>
                  <p className="text-cyan-800 text-md  dark:text-gray-200 m-2"> </p>
                  <p className="text-cyan-800 text-md font-bold dark:text-gray-200 m-2">Perfil </p>
                  <p className="text-cyan-800 text-md  dark:text-gray-200 m-2"> </p>
                </div>
                <div className="container mx-auto px-4">                  
                  <ul className='list-decimal text-gray-800 dark:text-white'>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>El desarrollo de tecnologías considera la estructura y propiedades de los materiales, así como su impacto en múltiples ámbitos sociales.</p>
                        <Toast>
                          <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Química</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Los enlaces químicos representan un papel importante en el desarrollo tecnológico, permitiendo la fabricación de materiales más resistentes, duraderos y maleables.</p> 
                        <Toast>
                          <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Química</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>La materia que utiliza la sociedad no desaparece, se conserva y su gestión a pesar de su desuso es una acción prioritaria desde el desarrollo tecnológico, científico y social.</p>
                        
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Química</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Las variables de temperatura y presión de un sistema determinado influyen en la materia y cantidad de energía que se requieren para el desarrollo tecnológico. </p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Física</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>5.	 Los estados de la materia y sus cambios pueden ser identificados en el ciclo hidrológico teniendo una relación de influencia bidireccional en los desarrollos tecnológicos.       </p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Química</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>La transferencia de energía es capaz de modificar un sistema, generando movimiento en sus partículas y el uso de este conocimiento incide en el avance tecnológico y la vida cotidiana.        </p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6"/>
                          </div>
                          <div className="ml-3 text-sm font-normal">Física</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>La interacción de la materia con la energía genera cambios físicos y químicos, algunas de estas interacciones son utilizadas en la tecnología influyendo en la sociedad y el ambiente.       </p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Físico-Química</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>La ciencia como un esfuerzo humano para el bienestar, parte 1.5 Discusión de la relación entre ciencia, tecnología y sociedad para proponer ideas innovadoras sobre el impacto de materiales y tecnologías.        </p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Físico-Química</div>
                          
                        </Toast>
                      </div>
                    </li>
                    
                    
                  </ul>
                </div>
            </Card>
        </div>
        </div>
      </div>
    </div>
  )
}
export const Curriculum2 = () => {
  return (
    <div>
      <div className="p-4  sm:ml-64 dark:bg-gray-600">
        <div className="p-4  dark:border-gray-700 mt-14  overflow-x-auto">
          <div className="border-l-5 border-sky-900">
            <h1 className="text-cyan-800 text-2xl font-bold dark:text-gray-200 ">
              - Curriculum Ampliado
            </h1>
          </div>
          <div className="overflow-x-auto mt-11">
            <Card className="w-full">
              <p className="text-gray-800 text-lg dark:text-gray-200 m-2"><strong className="font-bold">Observaciones :</strong></p>
              <p className='text-gray-800 text-sm dark:text-gray-200 '>
              Por su ubicación en el mapa curricular, Taller de Ciencias I busca robustecer los conocimientos de las UAC de “La materia y sus interacciones” y “Conservación de la energía y sus interacciones con la materia”, a partir de la profundización en la práctica científica. Esto no implica que las UAC anteriores no lleven a cabo ejercicios prácticos por sí mismas, sino que, al retomar los aprendizajes desarrollados en dichas prácticas, se buscará que el estudiantado se apropie de los conceptos centrales y los pueda generalizar en diferentes ambientes de aprendizaje.
              </p>
            </Card>
            <Card  className="w-full flex mt-5 dark:bg-gray-500">
                <div className="flex justify-between">
                  <p className="text-cyan-800 text-md font-bold dark:text-gray-200 m-2">Progresiones </p>
                  <p className="text-cyan-800 text-md  dark:text-gray-200 m-2"> </p>
                  <p className="text-cyan-800 text-md font-bold dark:text-gray-200 m-2">Perfil </p>
                  <p className="text-cyan-800 text-md  dark:text-gray-200 m-2"> </p>
                </div>
                <div className="container mx-auto px-4">                  
                  <ul className='list-decimal text-gray-800 dark:text-white'>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>El desarrollo de tecnologías considera la estructura y propiedades de los materiales, así como su impacto en múltiples ámbitos sociales.</p>
                        <Toast>
                          <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Química</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Los enlaces químicos representan un papel importante en el desarrollo tecnológico, permitiendo la fabricación de materiales más resistentes, duraderos y maleables.</p> 
                        <Toast>
                          <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Química</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>La materia que utiliza la sociedad no desaparece, se conserva y su gestión a pesar de su desuso es una acción prioritaria desde el desarrollo tecnológico, científico y social.</p>
                        
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Química</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Las variables de temperatura y presión de un sistema determinado influyen en la materia y cantidad de energía que se requieren para el desarrollo tecnológico. </p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Física</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>5.	 Los estados de la materia y sus cambios pueden ser identificados en el ciclo hidrológico teniendo una relación de influencia bidireccional en los desarrollos tecnológicos.       </p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Química</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>La transferencia de energía es capaz de modificar un sistema, generando movimiento en sus partículas y el uso de este conocimiento incide en el avance tecnológico y la vida cotidiana.        </p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6"/>
                          </div>
                          <div className="ml-3 text-sm font-normal">Física</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>La interacción de la materia con la energía genera cambios físicos y químicos, algunas de estas interacciones son utilizadas en la tecnología influyendo en la sociedad y el ambiente.       </p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Físico-Química</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>La ciencia como un esfuerzo humano para el bienestar, parte 1.5 Discusión de la relación entre ciencia, tecnología y sociedad para proponer ideas innovadoras sobre el impacto de materiales y tecnologías.        </p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Físico-Química</div>
                          
                        </Toast>
                      </div>
                    </li>
                    
                    
                  </ul>
                </div>
            </Card>
        </div>
        </div>
      </div>
    </div>
  )
}