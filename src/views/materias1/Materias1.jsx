import React from 'react'
import { Card ,Toast} from "flowbite-react";
import { HiCheck } from "react-icons/hi";
export const Materias1 = () => {
  return (
    <div>
      <div className="p-4  sm:ml-64 dark:bg-gray-600">
        <div className="p-4  dark:border-gray-700 mt-14  overflow-x-auto">
          <div className="border-l-5 border-sky-900">
            <h1 className="text-cyan-800 text-2xl font-bold dark:text-gray-200 ">
              Materia y sus interacciones
            </h1>
          </div>
          <div className="overflow-x-auto mt-11">
            <Card className="w-full">
              <p className="text-gray-800 text-lg dark:text-gray-200 m-2"><strong className="font-bold">Observaciones :</strong></p>
              <p className='text-gray-800 text-sm dark:text-gray-200 '>
                Por su ubicación en el mapa curricular, esta UAC tiene relación directa con el Taller de Ciencias I  y “Conservación de la energía y sus interacciones con la materia”, a partir de la profundización en la práctica científica al retomar los aprendizajes desarrollados en dichas prácticas, se buscará que el estudiantado se apropie de los conceptos centrales y los pueda generalizar en diferentes ambientes de aprendizaje.
              </p>
            </Card>
            <Card  className="w-full flex mt-5 dark:bg-gray-500">
                <div className="flex justify-between">
                  <p className="text-cyan-800 text-md font-bold dark:text-gray-200 m-2">Progreciones </p>
                  <p className="text-cyan-800 text-md  dark:text-gray-200 m-2"> </p>
                  <p className="text-cyan-800 text-md font-bold dark:text-gray-200 m-2">Perfil </p>
                  <p className="text-cyan-800 text-md  dark:text-gray-200 m-2"> </p>
                </div>
                <div className="container mx-auto px-4">                  
                  <ul className='list-decimal text-gray-800 dark:text-white'>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>La materia es todo lo que ocupa un lugar en el espacio y tiene masa. Todas las sustancias están formadas por alguno o varios de los más de 100 elementos químicos, que se unen entre sí mediante diferentes tipos de enlaces.</p>
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
                        <p className='text-gray-800 text-sm dark:text-gray-200 '> Las moléculas están formadas por átomos, que pueden ser desde dos hasta miles. Las sustancias puras están constituidas por un solo tipo de átomo, molécula o iones. Una sustancia pura tiene propiedades físicas y químicas características y a través de ellas es posible identificarla</p>
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
                        <p className='text-gray-800 text-sm dark:text-gray-200 '> Los gases y los líquidos están constituidos por átomos o moléculas que tienen libertad de movimiento. <strong className="text-white text-sm dark:text-gray-500 ">Ratoncito ton ton ton </strong></p>
                        
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
                        <p className='text-gray-800 text-sm dark:text-gray-200 '> En un gas las moléculas están muy separadas, exceptuando cuando colisionan. En un líquido las moléculas se encuentran en contacto unas con otras.</p>
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
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>  En un sólido, los átomos están estrechamente espaciados y vibran en su posición, pero no cambian de ubicación relativa</p>
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
                        <p className='text-gray-800 text-sm dark:text-gray-200 '> El mundo natural es grande y complejo, por lo que para estudiarlo se definen partes pequeñas denominadas sistemas. Dentro de un sistema el número total de átomos no cambia en una reacción química y, por lo tanto, se conserva la masa.</p>
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
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>La temperatura de un sistema es proporcional a la energía potencial por átomo o molécula o ion y la energía cinética interna promedio. La magnitud de esta relación depende del tipo de átomo o molécula o ion y de las interacciones entre las partículas del material.</p>
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
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Utilizando los modelos de la materia es posible comprender, describir y predecir los cambios de estado físico que suceden con las variaciones de temperatura o presión.</p>
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
                        <p className='text-gray-800 text-sm dark:text-gray-200 '> La estructura, propiedades, transformaciones de la materia y las fuerzas de contacto entre objetos materiales se explican a partir de la atracción y repulsión entre cargas eléctricas a escala atómica.</p>
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
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>  Los sistemas pueden ser muy variados, por ejemplo, galaxias, máquinas, organismos o partículas fundamentales. Los sistemas se caracterizan por tener recursos, componentes, límites, flujos y retroalimentaciones, en estos siempre se conservan la energía y la materia.</p>
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
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>La energía térmica total de un sistema depende conjuntamente del número total de átomos en el sistema, el estado físico del material y el ambiente circundante. La temperatura está en función de la energía total de un sistema.</p>
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
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Para cambiar la temperatura de una muestra de materia en una cantidad determinada, es necesario transferir una cantidad de energía que depende de la naturaleza de la materia, el tamaño de la muestra y el entorno.</p>
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
                        <p className='text-gray-800 text-sm dark:text-gray-200 '> Los sistemas en la naturaleza evolucionan hacia estados más estables en los que la distribución de energía es más uniforme, por ejemplo, el agua fluye cuesta abajo, los objetos más calientes que el entorno que los rodea se enfrían y el efecto invernadero que contribuye al equilibrio térmico de la Tierra.</p>
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
                        <p className='text-gray-800 text-sm dark:text-gray-200 '> Algunas sustancias permiten el paso de la luz a través de ellos, otros únicamente un poco, porque en las sustancias los átomos de cada elemento emiten y absorben frecuencias características de luz, lo que permite identificar la presencia de un elemento, aún en cantidades microscópicas.</p>
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
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Reunir y dar sentido a la información para describir que los materiales sintéticos provienen de recursos naturales e impactan a la sociedad.</p>
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
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>La ciencia como un esfuerzo humano para el bienestar, parte 1. Discusión de la aplicación de las ciencias naturales: la nanotecnología.</p>
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
export const Materias2 = () => {
  return (
    <div>
      <div className="p-4  sm:ml-64 dark:bg-gray-600">
        <div className="p-4  dark:border-gray-700 mt-14  overflow-x-auto">          
          Ciencias Sociales I
        </div>
      </div>
    </div>
  )
}
export const Materias3 = () => {
  return (
    <div>
      <div className="p-4  sm:ml-64 dark:bg-gray-600">
        <div className="p-4  dark:border-gray-700 mt-14  overflow-x-auto">          
          Cultura Digital I
        </div>
      </div>
    </div>
  )
}
export const Materias4 = () => {
  return (
    <div>
      <div className="p-4  sm:ml-64 dark:bg-gray-600">
        <div className="p-4  dark:border-gray-700 mt-14  overflow-x-auto">          
          Pensamiento Matematico I
        </div>
      </div>      
    </div>
  )
}
export const Materias5 = () => {
  return (
    <div>
      <div className="p-4  sm:ml-64 dark:bg-gray-600">
        <div className="p-4  dark:border-gray-700 mt-14  overflow-x-auto">          
          Lengua y Comunicación I
        </div>
      </div>
    </div>
  )
}
export const Materias6 = () => {
  return (
    <div>
      <div className="p-4  sm:ml-64 dark:bg-gray-600">
        <div className="p-4  dark:border-gray-700 mt-14  overflow-x-auto">          
          Ingles I
        </div>
      </div>
    </div>
  )
}
export const Materias7 = () => {
  return (
    <div>
      <div className="p-4  sm:ml-64 dark:bg-gray-600">
        <div className="p-4  dark:border-gray-700 mt-14  overflow-x-auto">          
          Humanidades I
        </div>
      </div>    
    </div>
  )
}
export const Materias8 = () => {
  return (
    <div>
      <div className="p-4  sm:ml-64 dark:bg-gray-600">
        <div className="p-4  dark:border-gray-700 mt-14  overflow-x-auto">          
          * Laboratorio de investigación I
        </div>
      </div>
    </div>
  )
}