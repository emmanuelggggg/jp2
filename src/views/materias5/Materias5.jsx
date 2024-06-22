import React from 'react'
import { Card ,Toast} from "flowbite-react";
import { HiCheck } from "react-icons/hi";
import BreadCrums from '../../components/BreadCrums';
export const Materias31 = () => {
  return (
    <div>
      <div className="p-4  sm:ml-64 dark:bg-gray-600">
        <div className="p-4  dark:border-gray-700 mt-14  overflow-x-auto">
          <BreadCrums 
              semestre={'/Quinto'}
              nombresemestre={'Quinto Semestre'}
              materia={'/Materias31'}
              nombremateria={'La Energía en Procesos de la Vida Diaria'}
            />
          <div className="border-l-5 border-sky-900 mt-5">
            <h1 className="text-cyan-800 text-2xl font-bold dark:text-gray-200 ">
            La Energía en Procesos de la Vida Diaria 
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
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Relación entre energía y fuerzas. Cuando dos objetos interactúan, cada uno ejerce una fuerza sobre el otro que puede causar que la energía se transfiera hacia o desde el objeto.       </p>
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
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>El movimiento de un objeto está determinado por la suma de las fuerzas que actúan sobre él; si la fuerza total sobre el objeto no es cero, su estado de movimiento cambiará. Cuanto mayor sea la masa del objeto, mayor será la fuerza requerida para lograr el mismo cambio de estado de movimiento. Para cualquier objeto dado, una fuerza mayor provoca un cambio mayor en el estado de movimiento.      </p>
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
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>El momento lineal se define para un marco de referencia particular como la masa por la velocidad del objeto. En cualquier sistema, el momento lineal total siempre se conserva.     </p>
                        
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
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>La segunda ley de Newton predice con precisión los cambios en el movimiento de los objetos macroscópicos.</p>
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
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Cuando dos objetos o sistemas interactúan, sus momentos lineales pueden cambiar. La suma de los momentos lineales de ambos sistemas es la misma antes y después de la interacción.</p>
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
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>La radiación electromagnética se puede modelar como una onda de campos eléctricos y magnéticos cambiantes o como partículas llamadas fotones. Ambos modelos permiten explicar las interacciones de la radiación con la materia.</p>
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
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>La ley de gravitación universal de Newton y la ley de Coulomb proporcionan los modelos matemáticos para describir y predecir los efectos de las fuerzas gravitatorias y electrostáticas entre objetos distantes.</p>
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
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>La energía no se crea ni se destruye, solo se mueve entre un lugar y otro, así como entre objetos y/o campos, o entre sistemas.</p>
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
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Las fuerzas a distancia se explican por campos que se encuentran en el espacio y que pueden transferir energía a través del mismo. Los imanes o las corrientes eléctricas generan campos magnéticos; las cargas eléctricas o los campos magnéticos cambiantes producen campos eléctricos.</p>
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
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Las fuerzas eléctricas y magnéticas (electromagnéticas) pueden ser atractivas o repulsivas, y sus tamaños dependen de las magnitudes de las cargas, corrientes o fuerzas magnéticas involucradas y de las distancias entre los objetos que interactúan.</p>
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
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Cuando dos objetos que interactúan a través de un campo cambian de posición relativa, la energía almacenada en el campo cambia.</p>
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
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>“Energía eléctrica”, puede significar energía almacenada en una batería o energía transmitida por corrientes eléctricas.</p>
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
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>La energía se puede transferir de un lugar a otro mediante, corrientes eléctricas, que luego se pueden usar para producir movimiento, sonido, luz o calor. Las corrientes pueden haberse producido al principio transformando la energía del movimiento en energía eléctrica.</p>
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
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Como resultado de reacciones químicas, la energía se transfiere de un sistema de moléculas en interacción a otro. La respiración celular es un proceso químico en el que se rompen los enlaces de las moléculas de oxígeno y se forman nuevos compuestos que pueden transportar energía a los músculos. La respiración celular también libera la energía necesaria para mantener la temperatura corporal a pesar de la continua transferencia de energía al entorno circundante. </p>
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
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Todos los procesos de la Tierra son el resultado del flujo de energía y el ciclo de la materia dentro y entre los sistemas del planeta. La energía del Sol es la principal fuente de la energía que sustenta las condiciones y procesos físicos, químicos y biológicos de la Tierra.</p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6"/>
                          </div>
                          <div className="ml-3 text-sm font-normal">Física</div>
                          
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
export const Materias32 = () => {
  return (
    <div>
      <div className="p-4  sm:ml-64 dark:bg-gray-600">
        <div className="p-4  dark:border-gray-700 mt-14  overflow-x-auto">
          <BreadCrums 
              semestre={'/Quinto'}
              nombresemestre={'Quinto Semestre'}
              materia={'/Materias32'}
              nombremateria={'Conciencia Historica II. México Durante el Expansionismo Capitalista'}
            />
          <div className="border-l-5 border-sky-900 mt-5">
            <h1 className="text-cyan-800 text-2xl font-bold dark:text-gray-200 ">
            Conciencia Historica II. México Durante el Expansionismo Capitalista
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
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>El estudiantado explica las circunstancias y condiciones que provocaron la lucha insurgente que dio origen a la independencia de México para que interprete los diversos proyectos de emancipación que surgieron.     </p>
                        <Toast>
                          <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Historia</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>El estudiantado explica las características que conforman el liberalismo mexicano, sus expresiones jurídicas, sus rasgos políticos y perspectivas sociales que permitieron la formación de la República Mexicana y que fundamentan la vida política y jurídica actual.      </p>
                        
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Historia</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Las y los estudiantes explican los procesos de invasión de Francia y Estados Unidos que vivió México a lo largo del siglo XIX, como parte del desarrollo del capitalismo para que interpreten cómo los intereses externos e internos influyen en la vida económica, política y social de las naciones.       </p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Historia</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>La comunidad estudiantil explica las luchas obreras, campesinas y femeninas por derechos políticos, sociales, laborales y por el sufragio universal en el siglo XIX para que valore el origen de los derechos sociales, económicos y políticos vigentes      </p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Historia</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>La comunidad estudiantil explica las características de las vertientes conservadoras que emergieron en el siglo XIX y sus diversas expresiones: proyectos monárquicos, centralismo político, conservadurismo religiosos y sociales para que interprete sus cambios y continuidades y asuma una postura crítica frente a ellas.      </p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6"/>
                          </div>
                          <div className="ml-3 text-sm font-normal">Historia</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>El estudiantado explica la relación del Estado Mexicano y las élites económicas y políticas con los pueblos indígenas con el propósito explicar el proceso de desamortización de bienes que sufrieron las comunidades indígenas en el siglo XIX y los problemas agrarios que trajo consigo dicho proceso, así como el deslinde de tierras efectuado por el porfiriato y sus afectaciones, las rebeliones indígenas surgidas en diversos estados y regiones, así como la visión liberal en torno a los pueblos indígenas para que valoren la trayectoria histórica de ese importante sector de la población desde el nacimiento de México como nación.      </p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Historia</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>La comunidad estudiantil valora el porfiriato: crecimiento económico, inequidades sociales, violencia y prácticas políticas no democráticas como antecedente de la Revolución Mexicana.      </p>
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
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Las y los estudiantes explican las causas y factores de la Revolución Mexicana, sus etapas, los intereses y objetivos de las facciones y grupos que participaron en ella para valorar su legado político, económico y social en el México actual    </p>
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
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>El estudiantado interpreta el contexto global de la Revolución Mexicana: Revolución Rusa y Primera Guerra Mundial para que valore las trayectorias y articulaciones de los procesos históricos ocurridos en el mundo y México.    </p>
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
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>La comunidad estudiantil explica las características de la posrevolución y el cardenismo para que interprete su influencia en la historia de sus comunidades, municipios, estados y regiones.    </p>
                        <Toast>
                          <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
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

export const MateriasE5 = () => {
  return (
    <div>
      <div className="p-4  sm:ml-64 dark:bg-gray-600">
        <div className="p-4  dark:border-gray-700 mt-14  overflow-x-auto">
          <BreadCrums 
              semestre={'/Quinto'}
              nombresemestre={'Quinto Semestre'}
              materia={'/MateriasE5'}
              nombremateria={'Orientación Educativa V'}
            />
          <div className="border-l-5 border-sky-900 mt-5">
            <h1 className="text-cyan-800 text-2xl font-bold dark:text-gray-200 ">
              Orientación Educativa V
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
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>           </p>
                        <Toast>
                          <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Psicología</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>         </p> 
                        <Toast>
                          <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Psicología</div>
                          
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
                          <div className="ml-3 text-sm font-normal">Psicología</div>
                          
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
                          <div className="ml-3 text-sm font-normal">Psicología</div>
                          
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
                          <div className="ml-3 text-sm font-normal">Psicología</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>           </p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6"/>
                          </div>
                          <div className="ml-3 text-sm font-normal">Psicología</div>
                          
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
                          <div className="ml-3 text-sm font-normal">Psicología</div>
                          
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
                          <div className="ml-3 text-sm font-normal">Psicología</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>           </p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Psicología</div>
                          
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
                          <div className="ml-3 text-sm font-normal">Psicología</div>
                          
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
                          <div className="ml-3 text-sm font-normal">Psicología</div>
                          
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

export const Extendido1 = () => {
  return (
    <div>
      <div className="p-4  sm:ml-64 dark:bg-gray-600">
        <div className="p-4  dark:border-gray-700 mt-14  overflow-x-auto">
          <BreadCrums 
              semestre={'/Quinto'}
              nombresemestre={'Quinto Semestre'}
              materia={'/Extendido1'}
              nombremateria={'Extendido'}
            />
          <div className="border-l-5 border-sky-900 mt-5">
            <h1 className="text-cyan-800 text-2xl font-bold dark:text-gray-200 ">
            **Extendido
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
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>    </p>
                        <Toast>
                          <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal"> **Extendido</div>
                          
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
                          <div className="ml-3 text-sm font-normal"> **Extendido</div>
                          
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
                          <div className="ml-3 text-sm font-normal"> **Extendido</div>
                          
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
                          <div className="ml-3 text-sm font-normal"> **Extendido</div>
                          
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
                          <div className="ml-3 text-sm font-normal"> **Extendido</div>
                          
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
                          <div className="ml-3 text-sm font-normal"> **Extendido</div>
                          
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
                          <div className="ml-3 text-sm font-normal"> **Extendido</div>
                          
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
                          <div className="ml-3 text-sm font-normal"> **Extendido</div>
                          
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
export const Extendido2 = () => {
  return (
    <div>
      <div className="p-4  sm:ml-64 dark:bg-gray-600">
        <div className="p-4  dark:border-gray-700 mt-14  overflow-x-auto">
          <BreadCrums 
              semestre={'/Quinto'}
              nombresemestre={'Quinto Semestre'}
              materia={'/Extendido2'}
              nombremateria={'Extendido'}
            />
          <div className="border-l-5 border-sky-900 mt-5">
            <h1 className="text-cyan-800 text-2xl font-bold dark:text-gray-200 ">
            **Extendido
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
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>    </p>
                        <Toast>
                          <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal"> **Extendido</div>
                          
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
                          <div className="ml-3 text-sm font-normal"> **Extendido</div>
                          
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
                          <div className="ml-3 text-sm font-normal"> **Extendido</div>
                          
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
                          <div className="ml-3 text-sm font-normal"> **Extendido</div>
                          
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
                          <div className="ml-3 text-sm font-normal"> **Extendido</div>
                          
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
                          <div className="ml-3 text-sm font-normal"> **Extendido</div>
                          
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
                          <div className="ml-3 text-sm font-normal"> **Extendido</div>
                          
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
                          <div className="ml-3 text-sm font-normal"> **Extendido</div>
                          
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
export const Extendido3 = () => {
  return (
    <div>
      <div className="p-4  sm:ml-64 dark:bg-gray-600">
        <div className="p-4  dark:border-gray-700 mt-14  overflow-x-auto">
          <BreadCrums 
              semestre={'/Quinto'}
              nombresemestre={'Quinto Semestre'}
              materia={'/Extendido3'}
              nombremateria={'Extendido3'}
            />
          <div className="border-l-5 border-sky-900 mt-5">
            <h1 className="text-cyan-800 text-2xl font-bold dark:text-gray-200 ">
            **Extendido
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
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>    </p>
                        <Toast>
                          <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal"> **Extendido</div>
                          
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
                          <div className="ml-3 text-sm font-normal"> **Extendido</div>
                          
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
                          <div className="ml-3 text-sm font-normal"> **Extendido</div>
                          
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
                          <div className="ml-3 text-sm font-normal"> **Extendido</div>
                          
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
                          <div className="ml-3 text-sm font-normal"> **Extendido</div>
                          
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
                          <div className="ml-3 text-sm font-normal"> **Extendido</div>
                          
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
                          <div className="ml-3 text-sm font-normal"> **Extendido</div>
                          
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
                          <div className="ml-3 text-sm font-normal"> **Extendido</div>
                          
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
export const Extendido4 = () => {
  return (
    <div>
      <div className="p-4  sm:ml-64 dark:bg-gray-600">
        <div className="p-4  dark:border-gray-700 mt-14  overflow-x-auto">
          <BreadCrums 
              semestre={'/Quinto'}
              nombresemestre={'Quinto Semestre'}
              materia={'/Extendido4'}
              nombremateria={'Extendido4'}
            />
          <div className="border-l-5 border-sky-900 mt-5">
            <h1 className="text-cyan-800 text-2xl font-bold dark:text-gray-200 ">
            **Extendido
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
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>    </p>
                        <Toast>
                          <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal"> **Extendido</div>
                          
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
                          <div className="ml-3 text-sm font-normal"> **Extendido</div>
                          
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
                          <div className="ml-3 text-sm font-normal"> **Extendido</div>
                          
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
                          <div className="ml-3 text-sm font-normal"> **Extendido</div>
                          
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
                          <div className="ml-3 text-sm font-normal"> **Extendido</div>
                          
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
                          <div className="ml-3 text-sm font-normal"> **Extendido</div>
                          
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
                          <div className="ml-3 text-sm font-normal"> **Extendido</div>
                          
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
                          <div className="ml-3 text-sm font-normal"> **Extendido</div>
                          
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
export const Laboral5 = () => {
  return (
    <div>
      <div className="p-4  sm:ml-64 dark:bg-gray-600">
        <div className="p-4  dark:border-gray-700 mt-14  overflow-x-auto">
          <BreadCrums 
              semestre={'/Quinto'}
              nombresemestre={'Quinto Semestre'}
              materia={'/Laboral5'}
              nombremateria={'Laboral Básico'}
            />
          <div className="border-l-5 border-sky-900 mt-5">
            <h1 className="text-cyan-800 text-2xl font-bold dark:text-gray-200 ">
            Laboral Básico
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
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>    </p>
                        <Toast>
                          <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Laboral Básico</div>
                          
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
                          <div className="ml-3 text-sm font-normal">Laboral Básico</div>
                          
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
                          <div className="ml-3 text-sm font-normal">Laboral Básico</div>
                          
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
                          <div className="ml-3 text-sm font-normal">Laboral Básico</div>
                          
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
                          <div className="ml-3 text-sm font-normal">Laboral Básico</div>
                          
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
                          <div className="ml-3 text-sm font-normal">Laboral Básico</div>
                          
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
                          <div className="ml-3 text-sm font-normal">Laboral Básico</div>
                          
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
                          <div className="ml-3 text-sm font-normal">Laboral Básico</div>
                          
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
export const Laboral6 = () => {
  return (
    <div>
      <div className="p-4  sm:ml-64 dark:bg-gray-600">
        <div className="p-4  dark:border-gray-700 mt-14  overflow-x-auto">
          <BreadCrums 
              semestre={'/Quinto'}
              nombresemestre={'Quinto Semestre'}
              materia={'/Laboral6'}
              nombremateria={'Laboral Básico'}
            />
          <div className="border-l-5 border-sky-900 mt-5">
            <h1 className="text-cyan-800 text-2xl font-bold dark:text-gray-200 ">
            Laboral Básico
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
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>    </p>
                        <Toast>
                          <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Laboral Básico</div>
                          
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
                          <div className="ml-3 text-sm font-normal">Laboral Básico</div>
                          
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
                          <div className="ml-3 text-sm font-normal">Laboral Básico</div>
                          
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
                          <div className="ml-3 text-sm font-normal">Laboral Básico</div>
                          
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
                          <div className="ml-3 text-sm font-normal">Laboral Básico</div>
                          
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
                          <div className="ml-3 text-sm font-normal">Laboral Básico</div>
                          
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
                          <div className="ml-3 text-sm font-normal">Laboral Básico</div>
                          
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
                          <div className="ml-3 text-sm font-normal">Laboral Básico</div>
                          
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
export const Curriculum5 = () => {
  return (
    <div>
      <div className="p-4  sm:ml-64 dark:bg-gray-600">
        <div className="p-4  dark:border-gray-700 mt-14  overflow-x-auto">
          <BreadCrums 
              semestre={'/Quinto'}
              nombresemestre={'Quinto Semestre'}
              materia={'/Curriculum5'}
              nombremateria={'Curriculum Ampliado'}
            />
          <div className="border-l-5 border-sky-900 mt-5">
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
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>    </p>
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
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>     </p>
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
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>      </p>
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
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>      </p>
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
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>      </p>
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
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>      </p>
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