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
              La Materia y sus Interacciones
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
                  <p className="text-cyan-800 text-md font-bold dark:text-gray-200 m-2">Progresiones </p>
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
                            <HiCheck className="h-6 w-6"/>
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
          <div className="border-l-5 border-sky-900">
            <h1 className="text-cyan-800 text-2xl font-bold dark:text-gray-200 ">
              Ciencias Sociales I
            </h1>
          </div>
          <div className="overflow-x-auto mt-11">
            <Card className="w-full">
              <p className="text-gray-800 text-lg dark:text-gray-200 m-2"><strong className="font-bold">Observaciones :</strong></p>
              <p className='text-gray-800 text-sm dark:text-gray-200 '>
              En el anterior plan de estudios en 1er. semestre no existía esta asignatura (hoy UAC), en el nuevo plan en 5to semestre desaparece ESTRUCTURA SOCIOECONOMICA y de alguna manera puede compensarse. 
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
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Reconoce sus necesidades materiales (vitales y no vitales) personales, familiares y de su comunidad para comprender y explicar la forma en que son satisfechas.</p>
                        <Toast>
                          <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Estructura Socioeconómica</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Identifica, indaga y define los procesos de producción (¿qué producir?, ¿cómo producir?, ¿cuánto producir? y ¿para quién producir?) y sus factores (tierra, trabajo, capital y organización), incluida en este proceso la relación que se establece con la naturaleza; para comprender y explicar cómo se satisfacen las necesidades en la comunidad, región, país y mundo.</p>
                        <Toast>
                          <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Estructura Socioeconómica</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Define, aplica y explica cómo se organizan las sociedades, a partir de los elementos que integran la organización de la sociedad: familia y sujeto social, clases y grupos sociales, papel social, comunidad, instituciones e interculturalidad, así como la función que tienen al interior de la misma, y las interrelaciones a que se da lugar entre estos elementos para para ubicarse al interior de la misma como un sujeto social, que a la vez es parte de una colectividad en constante interacción con las diversas colectividades.<strong className="text-white text-sm dark:text-gray-500 ">Ratoncito ton ton ton </strong></p>
                        
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Estructura Socioeconómica</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Define e identifica ¿cómo se distribuye la riqueza en las sociedades?, es decir, mediante rentas, sueldos salarios, ganancias o utilidades. Reflexiona en torno a las desigualdades que propicia esta forma de distribución.</p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Estructura Socioeconómica</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Investiga el significado de ciudadanía, características, derechos y obligaciones. Cuestiona si es considerada o considerado como ciudadana o ciudadano, así como el resto del estudiantado, y los integrantes de sus familias. Establece y contrasta la relación existente entre el concepto de ciudadanía y los derechos humanos.</p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Estructura Socioeconómica</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Observa, compara y reflexiona respecto a las diferentes combinaciones existentes entre los factores de producción (tierra, trabajo, capital y organización), para explicar el origen de las desigualdades entre los productores. Dependiendo de la forma en que se produzca, se determina la producción, y es posible observar no sólo una diversidad en las formas de producción, sino también diferencias significativas. La producción se puede realizar de forma colectiva-comunitaria, de forma pública por parte del Estado o bien por parte de los particulares.</p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6"/>
                          </div>
                          <div className="ml-3 text-sm font-normal">Estructura Socioeconómica</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Investiga las teorías sobre el origen del Estado (Rousseau, Hobbes y Locke), así como el surgimiento de los acuerdos fundacionales y Congresos Constituyentes (los cuales son vigentes hasta nuestros días), para explicar la necesidad de esas instituciones rectoras de la vida social ante la complejidad de la sociedad y las desigualdades, considerando que el Estado cuida el interés social.</p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Estructura Socioeconómica</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Caracteriza diferentes tipos de Estado en función de su organización política y/o económica, territorial y por sistema de gobierno, para identificar y explicar su realidad presente y de trayectoria histórica en su contexto; y a partir de ello poder definir las funciones del Estado y algunas de sus instituciones, para identificar la articulación que tiene con la organización de la sociedad (familia, clases y grupos sociales, papel social, comunidad, instituciones e interculturalidad), así como con el bienestar y la satisfacción de las necesidades. Comprende la importancia del municipio como forma de organización territorial y administrativa del Estado. </p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Estructura Socioeconómica</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Comprende las diferencias entre normas sociales de convivencia (se evidencian, a su vez, elementos de la ética colaborativa y solidaria) y las normas jurídicas para identificar la función social que desempeñan al interior de la vida social, siendo una de las más representativas la estabilidad y paz social.</p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Estructura Socioeconómica</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Define las atribuciones económicas del Estado para comprender la redistribución de la riqueza (impuestos redistributivos): programas sociales, inversiones públicas, salario mínimo, canasta básica, políticas de subsidios y/o precios, entre otras.</p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Estructura Socioeconómica</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Analiza y asume una postura crítica frente a las tres formas de organización económica, como son la economía de mercado, con injerencia mínima del Estado, y la economía centralizada y planificada desde el Estado (socialismo), o la combinación entre el centralismo económico y libre mercado que da lugar a una economía mixta.</p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Estructura Socioeconómica</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Identifica en las diversas dimensiones sociales las relaciones de poder para comprender el rol y funcionamiento de las mismas al interior de la organización de la sociedad.</p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Estructura Socioeconómica</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Investiga y explica el significado de bienestar para comprenderlo como un elemento sistémico que involucra la interrelación con la satisfacción de las necesidades, la organización de la sociedad, las normas sociales y jurídicas, el Estado y las relaciones de poder. El bienestar se asocia con la calidad de vida. Estos dos elementos permiten reducir las desigualdades, partiendo de la idea de que el bienestar es el estar bien.</p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Estructura Socioeconómica</div>
                          
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
export const Materias3 = () => {
  return (
    <div>
      <div className="p-4  sm:ml-64 dark:bg-gray-600">
        <div className="p-4  dark:border-gray-700 mt-14  overflow-x-auto">
          <div className="border-l-5 border-sky-900">
            <h1 className="text-cyan-800 text-2xl font-bold dark:text-gray-200 ">
              Cultura Digital I
            </h1>
          </div>
          <div className="overflow-x-auto mt-11">
            <Card className="w-full">
              <p className="text-gray-800 text-lg dark:text-gray-200 m-2"><strong className="font-bold">Observaciones :</strong></p>
              <p className='text-gray-800 text-sm dark:text-gray-200 '>
              Sin Observaciones
              </p>
            </Card>
            <Card  className="w-full flex mt-5 dark:bg-gray-500">
                <div className="flex justify-between">
                  <p className="text-cyan-800 text-md font-bold dark:text-gray-200 m-2">Progresiones </p>
                  <p className="text-cyan-800 text-md  dark:text-gray-200 m-2"> </p>
                  <p className="text-cyan-800 text-md font-bold dark:text-gray-200 m-2">Perfil </p>
                  <p className="text-cyan-800 text-md  dark:text-gray-200 m-2">  </p>
                </div>
                <div className="container mx-auto px-4">                  
                  <ul className='list-decimal text-gray-800 dark:text-white'>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Identifica y aplica la normatividad que regula el uso del ciberespacio y servicios digitales; cuida su salud digital y el medio ambiente, reconoce los criterios para la selección de información, la privacidad de la información del usuario, el respeto de los derechos de autor, los tipos de licenciamiento de software y normas del uso de la información a través de diferentes dispositivos tecnológicos según el contexto.
                        </p>
                        <Toast>
                          <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Informática</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Reconoce su identidad como ciudadano en medios digitales con credenciales para acceder al ciberespacio y plataformas para interactuar y colaborar de manera cotidiana conforme a la normatividad, seguridad, recursos disponibles y su contexto.</p>
                        <Toast>
                          <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Informática</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Conoce y utiliza los requerimientos, tipos de licenciamiento del software (navegadores, sistema operativo, niveles de acceso) y hardware (conectividad), así como las unidades de medida, sean de velocidad, procesamiento o almacenamiento de información, para acceder a servicios tecnológicos, al ciberespacio y a los servicios digitales conforme a los lineamientos de uso y gestión de la información digital según el contexto.</p>
                
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Informática</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Utiliza el ciberespacio y servicios digitales conforme a normatividad y al contexto personal, académico, social y ambiental, para integrarse con seguridad en ambientes virtuales.</p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Informática</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Conoce y utiliza herramientas de productividad: procesadores de texto, hojas de cálculo y presentaciones electrónicas para acceder al conocimiento y la experiencia de Ciencias Sociales, Ciencias Naturales, Experimentales y Tecnología, Humanidades, Recursos Sociocognitivos y Socioemocionales según el contexto.</p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Informática</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Reconoce características de una situación, fenómeno o problemática de las ciencias naturales, experimentales y tecnología, ciencias sociales, humanidades o de su vida cotidiana para establecer alternativas de solución conforme a su contexto y recursos. </p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6"/>
                          </div>
                          <div className="ml-3 text-sm font-normal">Informática</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Desarrolla una estrategia que consta de una secuencia de pasos finitos, organizados en forma lógica para dar respuesta a una situación, fenómeno o problemática de las ciencias naturales, experimentales y tecnología, ciencias sociales, humanidades o de su vida cotidiana.</p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Informática</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Conoce los diferentes métodos, técnicas o diagramas de flujo – 5 E (Enganche, Explorar, Explicar, Elaborar, Evaluar), divide y vencerás, método del caso, método del árbol de causas, método científico, diseño descendente, refinamiento por pasos- y aplica el más pertinente de acuerdo con la situación, fenómeno o problemática para representar la solución.</p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Informática</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Utiliza elementos: dato, información, variables, constantes, expresiones, operadores lógicos, operaciones relacionales, operadores aritméticos, estructuras condicionales, selectivas y repetitivas para modelar soluciones de manera algorítmica.</p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Informática</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Utiliza lenguaje algorítmico y de programación a través de medios digitales para solucionar la situación, fenómeno o problemática.</p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Informática</div>
                          
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
export const Materias4 = () => {
  return (
    <div>
      <div className="p-4  sm:ml-64 dark:bg-gray-600">
        <div className="p-4  dark:border-gray-700 mt-14  overflow-x-auto">
          <div className="border-l-5 border-sky-900">
            <h1 className="text-cyan-800 text-2xl font-bold dark:text-gray-200 ">
              Pensamiento Matemático I
            </h1>
          </div>
          <div className="overflow-x-auto mt-11">
            <Card className="w-full">
              <p className="text-gray-800 text-lg dark:text-gray-200 m-2"><strong className="font-bold">Observaciones :</strong></p>
              <p className='text-gray-800 text-sm dark:text-gray-200 '>
              Sin Observaciones
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
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Discute la importancia de la toma razonada de decisiones, tanto a nivel personal como colectivo, utilizando ejemplos reales o ficticios y de problemáticas complejas que sean significativas para valorar la recolección de datos, su organización y la aleatoriedad. Se busca llevar al estudiantado a que aprecie el poder de la matemática y el pensamiento estadístico y probabilístico. En este punto no se espera que se resuelvan las problemáticas abordadas</p>
                        <Toast>
                          <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Matemáticas</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Identifica la incertidumbre como consecuencia de la variabilidad y a través de simulaciones considera la frecuencia con la que un evento aleatorio puede ocurrir con la finalidad de tener más información sobre la probabilidad de que dicho evento suceda.</p>
                        <Toast>
                          <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Matemáticas</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Identifica la equiprobabilidad como una hipótesis que, en caso de que se pueda asumir, facilita el estudio de la probabilidad y observa que cuando se incrementa el número de repeticiones de una simulación, la frecuencia del evento estudiado tiende a su probabilidad teórica.</p>
                        
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Matemáticas</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Elige una técnica de conteo (ordenaciones con repetición, ordenaciones, permutaciones, combinaciones) para calcular el número total de casos posibles y casos favorables para eventos simples con la finalidad de hallar su probabilidad y con ello generar una mayor conciencia en la toma de decisiones. Las técnicas de conteo se introducen para entender la probabilidad de eventos aleatorios en los que la expresión explícita de su espacio muestral es poco factible</p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Matemáticas</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Observa cómo la probabilidad de un evento puede actualizarse cuando se obtiene más información al respecto y considera eventos excluyentes e independientes para emplearlos en la determinación de probabilidades condicionales. La introducción de la actualización de probabilidades se hace a través de simulaciones y sólo después se aborda el teorema de Bayes</p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Matemáticas</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Selecciona una problemática o situación de interés, con la finalidad de recolectar información y datos de fuentes confiables e identifica las variables relevantes para su estudio.</p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6"/>
                          </div>
                          <div className="ml-3 text-sm font-normal">Matemáticas</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Analiza datos categóricos y cuantitativos de alguna problemática o situación de interés para el estudiantado, a través de algunas de sus representaciones gráficas más sencillas como las gráficas de barras (variables cualitativas) o gráficos de puntos e histogramas (variables cuantitativas).</p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Matemáticas</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Analiza cómo se relacionan entre sí dos o más variables categóricas a través del estudio de alguna problemática o fenómeno de interés para el estudiantado, con la finalidad de identificar si dichas variables son independientes.</p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Matemáticas</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>9.	Analiza dos o más variables cuantitativas a través del estudio de alguna problemática o fenómenos de interés para el estudiantado, con la finalidad de identificar si existe correlación entre dichas variables.</p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Matemáticas</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Cuestiona afirmaciones estadísticas y gráficas, considerando valores atípicos (en el caso de variables cuantitativas) y la posibilidad de que existan factores o variables de confusión.</p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Matemáticas</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Identifica, ante la imposibilidad de estudiar la totalidad de una población, la opción de extraer información de ésta a través del empleo de técnicas de muestreo, en particular, valora la importancia de la aleatoriedad al momento de tomar una muestra.</p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Matemáticas</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Valora las ventajas y limitaciones de los estudios observacionales y los compara con el diseño de experimentos, a través de la revisión de algunos ejemplos tomados de diversas fuentes.</p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Matemáticas</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Describe un fenómeno, problemática o situación de interés para el estudiantado utilizando las medidas de tendencia central (media, mediana y moda) y de dispersión (desviación estándar, varianza, rango intercuartil, etc.) adecuadas al contexto y valora que tipo de conclusiones puede extraer a partir de dicha información.</p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Matemáticas</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Explica un evento aleatorio cuyo comportamiento puede describirse a través del estudio de la distribución normal y calcula la probabilidad de que dicho evento suceda.</p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Matemáticas</div>
                          
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
export const Materias5 = () => {
  return (
    <div>
      <div className="p-4  sm:ml-64 dark:bg-gray-600">
        <div className="p-4  dark:border-gray-700 mt-14  overflow-x-auto">
          <div className="border-l-5 border-sky-900">
            <h1 className="text-cyan-800 text-2xl font-bold dark:text-gray-200 ">
              Lengua y Comunicación I 
            </h1>
          </div>
          <div className="overflow-x-auto mt-11">
            <Card className="w-full">
              <p className="text-gray-800 text-lg dark:text-gray-200 m-2"><strong className="font-bold">Observaciones :</strong></p>
              <p className='text-gray-800 text-sm dark:text-gray-200 '>
              Sin Observaciones 
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
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Comprende por qué es importante desarrollar la habilidad del resumen y relato simple, con base en la capacidad de reconocer y jerarquizar los factores clave involucrados.</p>
                        <Toast>
                          <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Taller de Lectura y Redacción</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Reconoce las fuentes básicas de información, para comprender y delimitar las unidades de análisis del área: 1. El texto escrito y 2. El texto oral y visual, así como el concepto de “lectura de textos”.</p>
                        <Toast>
                          <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Taller de Lectura y Redacción</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Distingue qué es la lectura de textos y el estudio de fuentes de información para establecer el nivel de trabajo de cada elemento.
                        </p>
                        
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Taller de Lectura y Redacción</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Distingue los temas (central y secundarios) en diversos textos literarios, para comprender el tratamiento, ya sea explícito o implícito, que se le da como parte central del contenido temático en las obras literarias.</p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Taller de Lectura y Redacción</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Comprende qué es la composición de textos para aplicar el resumen y relato simple como estrategias que permiten transitar de la lectura a la escritura.</p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Taller de Lectura y Redacción</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Identifica y aplica el proceso de prelectura del texto para identificar elementos clave del texto o de la fuente de información.</p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6"/>
                          </div>
                          <div className="ml-3 text-sm font-normal">Taller de Lectura y Redacción</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Analiza un relato para identificar las afirmaciones centrales distinguiendo así el tema central del texto</p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Taller de Lectura y Redacción</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Distingue ideas centrales y secundarias en diversos textos literarios para comprender el tratamiento, ya sea explícito o implícito, que se les da como parte central de su contenido temático.</p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Taller de Lectura y Redacción</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Identifica las relaciones lógicas o argumentales entre las ideas principales y secundarias para reconocer la composición interna del texto y la información accesoria para suprimir el contenido menos relevante.</p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Taller de Lectura y Redacción</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Agrupa los temas e ideas principales del texto previo a la composición del resumen y relato simple a través de un mapa semántico o mental para visualizar la clasificación de las ideas con base en su jerarquización. El mapa semántico o mental es una herramienta y una técnica que permite la representación gráfica de las relaciones significativas de un conjunto de información.</p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Taller de Lectura y Redacción</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Identifica diversos elementos del diseño de personajes para comprender su papel como forma de incluir el tratamiento de contenidos en la literatura.</p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Taller de Lectura y Redacción</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Realiza la composición del resumen y relato simple del texto para aplicar los conocimientos aprendidos. El proceso del resumen y relato simple comienza con una operación de comprensión de lectura, con miras a la producción de un texto nuevo.</p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Taller de Lectura y Redacción</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Distingue qué es la lengua oral y sus características específicas para comprender sus particularidades. Una de las nociones fundamentales es la diferencia entre el habla y la escritura como objetos de aprendizaje. Se recomienda aplicar la propuesta de enseñanza R3 sobre las lenguas originarías</p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Taller de Lectura y Redacción</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Incorpora apoyos visuales, gráficos y elementos no verbales en la comunicación oral y escrita para comprender la forma en que debe enfatizarse e ilustrarse la información de la presentación. Los recursos visuales y gráficos son apoyos que ayudan a recordar, enfatizar, ilustrar y precisar la información que forma parte de una presentación oral.</p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Taller de Lectura y Redacción</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Identifica diversos elementos de la ubicación, ámbito y trama literarias para comprender su papel como forma de incluir el tratamiento de contenidos en la literatura. retroalimentaciones, en estos siempre se conservan la energía y la materia.</p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Taller de Lectura y Redacción</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Realiza la exposición oral formal del resumen y relato simple para explicar y compartir su conocimiento y participa en una conversación sobre temas extraídos de textos o fuentes de información para intercambiar puntos de vista sobre el texto estudiado.</p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Taller de Lectura y Redacción</div>
                          
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
export const Materias6 = () => {
  return (
    <div>
      <div className="p-4  sm:ml-64 dark:bg-gray-600">
        <div className="p-4  dark:border-gray-700 mt-14  overflow-x-auto">
          <div className="border-l-5 border-sky-900">
            <h1 className="text-cyan-800 text-2xl font-bold dark:text-gray-200 ">
              Ingles I
            </h1>
          </div>
          <div className="overflow-x-auto mt-11">
            <Card className="w-full">
              <p className="text-gray-800 text-lg dark:text-gray-200 m-2"><strong className="font-bold">Observaciones :</strong></p>
              <p className='text-gray-800 text-sm dark:text-gray-200 '>
              Sin Observaciones
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
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Comprende el uso del verbo ser o estar (afirmativo, negativo e interrogativo) y los pronombres personales para presentar información propia y de otros.</p>
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
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Identifica los imperativos para promover la comunicación en el salón de clases en una segunda lengua al dar y seguir instrucciones.</p>
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
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Comprende el uso de los verbos to be y have para describir personas, lugares o cosas y utiliza los adjetivos calificativos y artículos indefinidos para detallar las características.</p>
                        
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
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Comprende el uso de los adjetivos demostrativos (this, that, these, those) en su forma afirmativa, negativa e interrogativa para señalar algo o alguien con base en su ubicación (si se encuentra lejos o cerca) y cantidad (singular o plural).</p>
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
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Comprende el uso de there is, there are (afirmativo, negativo e interrogativo) y las preposiciones de lugar para mencionar la existencia o no de personas o cosas en un lugar específico.</p>
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
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Comprende el uso de los pronombres posesivos (mine, yours, his, hers, ours y theirs) para promover el valor de la honestidad reconociendo la pertenencia de lo que es propio y lo que no lo es.</p>
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
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Analiza y comprende que los adjetivos posesivos y el genitivo sajón se emplean para indicar la pertenencia de algo o alguien. Por lo que, los utiliza para indicar vínculos familiares y pertenencia al elaborar una genealogía.</p>
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
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Selecciona las Wh- questions para entrevistar y ser entrevistado mediante la elaboración de diálogos sencillos. Además, utiliza la conjunción because para dar razones.</p>
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
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Emplea ideas afirmativas y negativas en presente simple para expresar hábitos y rutinas propias y de otras personas. Lo anterior, permite identificar las acciones que se pueden modificar para mejorar su bienestar físico y emocional.</p>
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
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Comprende el uso de las yes/no questions y las Wh-questions en el presente simple para solicitar y brindar información específica.</p>
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
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Distingue los adverbios de frecuencia (always, usually, often, sometimes, never, entre otros) para expresar sus rutinas y las de otros.</p>
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
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Emplea las preposiciones de tiempo in, on, at y los conectores: and, but y then para mencionar el momento en el que sucede un evento y para contrastar, unir y ampliar ideas elaborando una agenda de actividades semanales.</p>
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
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Identifica los usos del verbo modal can y en particular, comprende el uso para expresar habilidades físicas, cognitivas y sociales (afirmativo, negativo e interrogativo).</p>
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
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Comprende el uso del verbo modal can (afirmativo, negativo e interrogativo) para hacer solicitudes y pedir o dar permiso.</p>
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
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Analiza un relato para identificar las afirmaciones centrales distinguiendo así el tema central del texto.</p>
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
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Comprende el uso de much, many, a lot, a few, a little y some para describir su plato del buen comer.</p>
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
export const Materias7 = () => {
  return (
    <div>
      <div className="p-4  sm:ml-64 dark:bg-gray-600">
        <div className="p-4  dark:border-gray-700 mt-14  overflow-x-auto">
          <div className="border-l-5 border-sky-900">
            <h1 className="text-cyan-800 text-2xl font-bold dark:text-gray-200 ">
              Humanidades I
            </h1>
          </div>
          <div className="overflow-x-auto mt-11">
            <Card className="w-full">
              <p className="text-gray-800 text-lg dark:text-gray-200 m-2"><strong className="font-bold">Observaciones :</strong></p>
              <p className='text-gray-800 text-sm dark:text-gray-200 '>
              Sin obversaciones 
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
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Explora a partir de la pregunta “¿Por qué estoy aquí?” o aquellas que le permiten cuestionar el carácter histórico y existencial de su identidad, para acercarse (de forma contextual) a los saberes, recursos, prácticas y aplicaciones de las humanidades, especialmente la Filosofía, la Ética o la Lógica, como son la argumentación y el pensamiento crítico.</p>
                        <Toast>
                          <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Filosofía y Ética</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Reconoce la experiencia de sí misma/o analizando discursos clásicos y contemporáneos sobre las pasiones y los vicios para que se percate cómo se estructuran las vivencias desde colectividad.</p>
                        <Toast>
                          <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Filosofía y Ética</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Pone en cuestión la experiencia de sí misma/o revisando discursos clásicos y contemporáneos sobre el conocimiento y el cuidado de sí misma/o, para analizar cómo se percibe a sí misma/o en relación con los otros/as</p>
                        
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Filosofía y Ética</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Cuestiona cómo sus pasiones y virtudes configuran su propia experiencia, para reflexionar cómo están estructurada sus vivencias y el sentido de la vida que asume.</p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Filosofía y Ética</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Comprende el papel que los otros –humanos, animales, cosas, instituciones– tienen en la experiencia de sí misma/o, para distinguir las diversas maneras en cómo se relaciona con seres animados y/o inanimados</p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Filosofía y Ética</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Distingue los significados –económicos, sociales, de género, ambientales, políticos, entre otros– que constituyen su vida y los vincula a sus capacidades de construir la colectividad, para identificar que el tipo de discurso depende del consenso y del reconocimiento colectivo.</p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6"/>
                          </div>
                          <div className="ml-3 text-sm font-normal">Filosofía y Ética</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Enuncia lo que conoce de sí misma/o para saber quién es en relación con los acontecimientos, discursos, instituciones, imágenes, objetos y prácticas, para expresar cómo se sitúa a sí mismo en la colectividad.</p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Filosofía y Ética</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Ejerce la crítica usando discursos clásicos y contemporáneos que postulan el problema de una vida alienada, mutilada en sus capacidades, que le impide construir una vida propia colectividad, para dar cuenta de cómo se encarna la servidumbre voluntaria.</p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Filosofía y Ética</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Argumenta la configuración –histórica, política, social, ambiental, tecnológica, etcétera– de su propia experiencia, para justificar y fundamentar sus propias decisiones y así fortalecer sus capacidades de construir la colectividad.</p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Filosofía y Ética</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Valora la configuración de su propia experiencia al cuestionar y decidir los roles que puede cumplir en relación con acontecimientos, discursos, instituciones, imágenes, objetos y prácticas, para ejercitar su capacidad práctica y de juicio en los diferentes ámbitos de su vida.</p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Filosofía y Ética</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Interpreta qué podría ser una mejor experiencia de sí misma/o en relación con los acontecimientos, discursos, instituciones, imágenes, objetos y prácticas que conforman sus vivencias, para describir y especificar el sentido de lo que le sería deseable vivir</p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Filosofía y Ética</div>
                          
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
export const Materias8 = () => {
  return (
    <div>
      <div className="p-4  sm:ml-64 dark:bg-gray-600">
        <div className="p-4  dark:border-gray-700 mt-14  overflow-x-auto">
          <div className="border-l-5 border-sky-900">
            <h1 className="text-cyan-800 text-2xl font-bold dark:text-gray-200 ">
              *Laboratorio de Investigación
            </h1>
          </div>
          <div className="overflow-x-auto mt-11">
            <Card className="w-full">
              <p className="text-gray-800 text-lg dark:text-gray-200 m-2"><strong className="font-bold">Observaciones :</strong></p>
              <p className='text-gray-800 text-sm dark:text-gray-200 '>
              Sin Observaciones 
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
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Descubre el interés y la necesidad de generar una actitud reflexiva en la identificación de las problemáticas propias de las Ciencias Sociales a través de los referentes conceptuales y las diferentes formas de indagación y reconocimiento del entorno social por medio de los elementos, características y tipos de conocimientos, haciendo uso de su experiencia para que se convierta en un sujeto de cambio social, favoreciendo el desarrollo de un pensamiento crítico y plural.</p>
                        <Toast>
                          <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Metodología de la Investigación</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Conoce las características y tipos de investigación en Ciencias Sociales, además de los paradigmas de la investigación con los que pueden ser abordados; valorando la importancia de cada una de ellas, para que reconozca las problemáticas propias de su comunidad e identifique el enfoque que puede utilizar en la investigación.</p>
                        <Toast>
                          <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Metodología de la Investigación</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Identifica como parte de la caja de herramientas a los métodos  enfoques teóricos-metodológicos que permiten el estudio de la investigación social mediante el conocimiento de los métodos (deductivo e inductivo, análisis-síntesis, experimental y no experimental), así como de los enfoques (cualitativo, cuantitativo o mixto), lo que le permitirá distinguir las características particulares de cada uno de ellos, para comprender la importancia de su aplicación en el estudio de las problemáticas de la comunidad y elegir las herramientas pertinentes, según su contexto social.<strong className="text-white text-sm dark:text-gray-500 ">Ratoncito ton ton ton </strong></p>
                        
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Metodología de la Investigación</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Distingue las diversas técnicas e instrumentos de investigación utilizados en las Ciencias Sociales, como elementos de la caja de herramientas, que le permitan al estudiantado identificar las características, similitudes y diferencias entre cada una de ellas, para reconocer la metodología de la recolección, concentración, procesamiento y análisis de datos de la información fidedigna, con la finalidad de comprender cómo se abordan en las problemáticas sociales.</p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Metodología de la Investigación</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Reconoce la importancia de utilizar los elementos metodológicos de las normas APA como parte de los contenidos de la caja de herramientas, asignando los créditos de las fuentes consultadas para la búsqueda de información, con el propósito de dar sustento al desarrollo del producto de investigación social y así favorecer el comportamiento ético y responsable en el manejo de la información en su vida cotidiana.</p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Metodología de la Investigación</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Elabora un protocolo de investigación donde observa, selecciona y delimita el tema de investigación, plantea una problemática social de la comunidad,conforma el estado del arte, realiza la formulación del problema (preguntas de investigación, objetivos, justificación e hipótesis o supuestos) y propone el cronograma de desarrollo de la investigación, para que cuente con una estructura de seguimiento del producto, fundamentado en una metodología y se asuma como un agente investigador.</p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6"/>
                          </div>
                          <div className="ml-3 text-sm font-normal">Metodología de la Investigación</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Fundamenta la problemática a atender en su investigación a través del marco teórico (conceptual, histórico, referencial, etc.), analizando la literatura relacionada con la problemática social para ubicarla en el contexto y en el momento histórico en el que se encuentra.</p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Metodología de la Investigación</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Construye el diseño metodológico seleccionando el conjunto de elementos que lo conforman (paradigma, enfoque, método, sujetos de estudio, población, muestra y objeto de investigación) y los aplica en el desarrollo del proceso investigativo mediante el uso de la caja de herramientas de investigación, para que las y los estudiantes fortalezcan su pensamiento reflexivo, crítico y plural, favoreciendo el reconocimiento como agentes de transformación social, política, económica y cultural de su comunidad.</p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Metodología de la Investigación</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Diseña instrumento(s) de investigación a partir del enfoque, método(s) y  técnica(s) seleccionadas para la recolección de datos que le permitan sistematizar la información e interpretar la realidad social según la problemática de su comunidad.</p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Metodología de la Investigación</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Recolecta la información de la problemática social detectada en su comunidad, utilizando las técnicas e instrumentos de investigación para la obtención de datos que servirán como sustento de su investigación que empleará reflexivamente en la exploración de su entorno local, regional y mundial.</p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Metodología de la Investigación</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Analiza la información recolectada en su investigación sistematizando, referenciando e interpretando los datos obtenidos que permitan comprende los problemas sociales, políticos, económicos y/o culturales de su comunidad, para la generación de conclusiones y sugerencias que promuevan la construcción de su propuesta de solución a la problemática planteada.</p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Metodología de la Investigación</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Presenta una propuesta de solución a la problemática detectada en su comunidad, a través de un producto final de investigación que refleje el pensamiento reflexivo, analítico y autocrítico del estudiantado para contribuir a la mejora de su contexto y a la transformación social.</p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Metodología de la Investigación</div>
                          
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
export const Curriculum1 = () => {
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
              Pendiente 
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
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>       </p>
                        <Toast>
                          <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Curriculum Ampliado</div>
                          
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
                          <div className="ml-3 text-sm font-normal">Curriculum Ampliado</div>
                          
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
                          <div className="ml-3 text-sm font-normal">Curriculum Ampliado</div>
                          
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
                          <div className="ml-3 text-sm font-normal">Curriculum Ampliado</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>         </p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Curriculum Ampliado</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>        </p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6"/>
                          </div>
                          <div className="ml-3 text-sm font-normal">Curriculum Ampliado</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>        </p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Curriculum Ampliado</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>         </p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Curriculum Ampliado</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>         </p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Curriculum Ampliado</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>         </p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Curriculum Ampliado</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>          </p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Curriculum Ampliado</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>          </p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Curriculum Ampliado</div>
                          
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