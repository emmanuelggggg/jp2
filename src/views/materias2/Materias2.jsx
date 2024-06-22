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
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Clasifica, caracteriza y diferencia cuantitativa y cualitativamente las distintas actividades productivas en sectores económicos (primario, secundario y terciario, y la subdivisión de productos del campo y la ciudad) para ubicar la producción del país en regiones económicas, así como las distintas formas de organización social que se generan a la luz de dichas actividades    </p>
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
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Investiga y compara las normas jurídicas que regulan la producción en términos sectoriales. ¿Qué leyes o marco normativo se debe cumplir por ejemplo en la producción del sector primario, a través de las actividades económicas como la agricultura, la pesca, la silvicultura, la ganadería, o la extracción de recursos naturales como el petróleo y la minería?     </p>
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
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Identifica, comprende y explica la existencia y calidad de los servicios (agua potable, luz, pavimentación, piso firme, teléfono, tv, acceso a la tecnología, vías de comunicación, servicios médicos y educativos) de su comunidad y/o contexto, región, país, para valorar cuantitativa y cualitativamente el nivel de desarrollo de la comunidad, así como el nivel de bienestar y calidad de vida de los individuos.      </p>
                        
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
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Investiga, comprende y explica la importancia del empleo en la sociedad, para valorar su impacto en la dinámica social. El empleo desde el punto de vista económico y social tiende a generar un efecto positivo y multiplicador en la sociedad. Las familias pueden obtener ingresos y realizar su consumo, logrando la satisfacción de las necesidades; y por otro lado las empresas pueden vender sus mercancías, convirtiéndose de tal suerte en un círculo virtuoso con beneficios en la organización de la sociedad. El empleo tiende a disminuir las desigualdades.       </p>
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
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Observa, distingue, compara y ubica el nivel de empleo y desempleo en los sectores y regiones económicas de México, para inferir tanto los círculos virtuosos como los viciosos, estableciendo la relación causa- efecto para explicar las desigualdades y pobreza del país a partir de esta variable. Identifica al empleo informal como una variable del empleo, establece la distinción con el empleo formal para comprender las implicaciones e impactos económicos y sociales entre estas dos formas de empleo.      </p>
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
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Identifica, comprende y reflexiona entorno al papel económico distributivo y redistributivo del sistema bancario, así como de transacciones financieras que en la sociedad tienen lugar, en el mundo de los negocios, los pagos de diferentes programas sociales, cajas de ahorro, los préstamos a familias, empresas y gobierno, los pagos de servicios diversos, las compras a crédito así como el cobro del dinero que envían los migrantes a sus familias entre otros, para comprender la importancia de estos elementos que forman parte de la distribución y del sector servicios dentro de la organización de la sociedad. Las instituciones bancarias y otras entidades financieras, resultan ser los agentes económicos que en la sociedad actual manejan el dinero de la población, las empresas y del Estado, por lo cual sus funciones y articulación con la economía y la sociedad ha cobrado una importancia significativa.      </p>
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
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Establece una diferenciación y comparación entre países ricos y pobres, utilizando las categorías y subcategorías de las Ciencias Sociales. A su vez es importante que el estudiantado comprenda y asuma una postura crítica respecto al sistema mundo, a partir de los diversos planteamientos y actuaciones que desempeñan las naciones que forman parte del grupo del G7 y del foro de Davos.      </p>
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
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Conoce y comprende la política exterior del Estado mexicano para analizar y valorar diversas situaciones presentes y pasadas donde se han puesto de manifiesto las relaciones de poder entre otras naciones y nuestro país. A su vez reconocerá las relaciones de poder que se ejercen entre distintos países, las cuales se hacen visibles a partir del nivel de desarrollo o subordinación existente entre ellos. Se deberán tomar en cuenta los elementos significativos del análisis anterior del sistema mundo.      </p>
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
              Sin observaciones
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
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Utiliza herramientas digitales para el aprendizaje que le permiten acceder al conocimiento y la experiencia, innovar, hace más eficientes los procesos en el desarrollo de proyectos aplicado a las Ciencias Naturales, Experimentales y Tecnología, Ciencias Sociales, Humanidades, Recursos Sociocognitivos y Socioemocionales según sus necesidades y contextos.     </p>
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
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Colabora en equipos de trabajo con el uso de las Tecnologías de la Comunicación y la Información, Conocimiento y Aprendizajes Digitales para interactuar, comunicarse, investigar, buscar, discriminar y gestionar información.      </p>
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
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Conoce la teoría del color y metodología del diseño para la elaboración de contenidos digitales para sus actividades académicas y cotidianas de acuerdo con su contexto     </p>
                        
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
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Conoce y aplica técnicas y métodos de investigación digital como cyber etnografía, análisis del contenido en línea, focusgroup (grupo de foco) online, entrevista online en la metodología digital, métodos de investigación cualitativa online (MICO), entrevista asistida por computadora, análisis de redes sociales (ARS) para buscar, recopilar, extraer, organizar y analizar información de la situación, fenómeno o problemática de su interés conforme a su contexto y recursos      </p>
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
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Representa la solución de la situación, fenómeno o problemática a través de páginas web (hosting u hospedaje, dominio, ftp, usuarios, contraseñas), con el lenguaje de Marcas –Hyper Text MarkupLanguage o HTML.      </p>
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
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Utiliza herramientas en línea que permiten investigar y manejar información de situaciones, fenómenos o problemáticas del contexto personal, académico, social y ambiental para difundirla, recopilarla, extraerla, exportarla y analizarla en forma estructurada y organizada.      </p>
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
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>A través del concepto de conservación de la energía es posible describir y predecir el comportamiento de un sistema.      </p>
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
             Sin observaciones
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
                        <p className='text-gray-800 text-sm dark:text-gray-200'>Compara, considerando sus aprendizajes de trayectoria, el lenguaje natural con el lenguaje matemático para observar que este último requiere de precisión y rigurosidad. </p>
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
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Revisa algunos elementos de la sintaxis del lenguaje algebraico considerando que en el álgebra buscamos la expresión adecuada al problema que se pretende resolver (utilizamos la expresión simplificada, la expresión desarrollada de un número, la expresión factorizada, productos notables, según nos convenga).    </p>
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
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Examina situaciones que puedan modelarse utilizando lenguaje algebraico y resuelve problemas en los que se requiere hacer una transliteración entre expresiones del lenguaje natural y expresiones del lenguaje simbólico del algebra     </p>
                        
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
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Explica algunas relaciones entre números enteros utilizando conceptos como el de divisibilidad, el de número primo o propiedades generales sobre este conjunto numérico, apoyándose del uso adecuado del lenguaje algebraico.      </p>
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
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Conceptualiza el máximo común divisor (M.C.D.) y mínimo común múltiplo (m.c.m.) de dos números enteros y los aplica en la resolución de problemas.     </p>
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
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Revisa desde una perspectiva histórica al conjunto de los números reales, comenzando con la consideración de números decimales positivos hasta llegar a la presentación de la estructura de campo ordenado de los números reales.     </p>
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
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Resuelve situaciones-problema significativas para el estudiantado que involucren el estudio de proporcionalidad tanto directa como inversa, así como también el estudio de porcentajes, empleando la estructura algebraica de los números reales.     </p>
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
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Discute la conformación de un proyecto de vida considerando elementos básicos de la matemática financiera tales como interés simple y compuesto, ahorros y deudas a través de la aplicación de la estructura algebraica de los números reales y con la finalidad de promover la toma de decisiones más razonadas      </p>
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
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Conceptualiza el área de una superficie y deduce fórmulas para calcular áreas de figuras geométricas simples como rectángulos, triángulos, trapecios, etc., utilizando principios y propiedades básicas de geometría sintética.</p>
                        
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
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Revisa el teorema del triángulo de Napoleón, considerándolo como un problema-meta en el que se aplican resultados de la geometría euclidiana como: Teorema de Pitágoras, criterios de congruencia y semejanza de triángulos, caracterizaciones de cuadriláteros concíclicos, entre otros.</p>
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
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Emplea un sistema de coordenadas y algunos elementos básicos de geometría analítica como la distancia entre dos puntos en el plano para calcular áreas de figuras geométricas básicas y compara estos resultados con los cálculos obtenidos empleando principios básicos de geometría sintética.</p>
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
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Modela situaciones y resuelve problemas significativos para el estudiantado tanto de manera algebraica como geométrica al aplicar propiedades básicas de funciones lineales, cuadráticas y polinomiales</p>
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
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Resuelve problemáticas provenientes de las áreas del conocimiento que involucren la resolución de sistemas de ecuaciones lineales y considera una interpretación geométrica de estos sistemas.</p>
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
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Modela situaciones y resuelve problemas en los que se busca optimizar valores aplicando el teorema fundamental de la programación lineal y combinando elementos del lenguaje algebraico que conciernen al estudio de desigualdades y sistemas de ecuaciones lineales con dos incógnitas. </p>
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
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Comprende qué es una reseña y comentario crítico y por qué es importante saber reseñar y realizar un análisis crítico para mejorar la sensibilidad crítica del estudiantado y su aplicación a todas las áreas de conocimiento y a los recursos sociocognitivos.    </p>
                        <Toast>
                          <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Taller de Lectura y Redacción, Literatura</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Distingue la diferencia entre la reseña y comentario crítico y el resumen y relato simple de un texto para comprender el nivel de complejidad de cada uno de ellos.   </p>
                        <Toast>
                          <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Taller de Lectura y Redacción, Literatura</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Identifica los tipos de reseñas o comentarios críticos más comunes, para comprender su aplicación en todas las áreas de conocimiento y en los recursos sociocognitivos    </p>
                        
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Taller de Lectura y Redacción, Literatura</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Identifica los procesos involucrados en la composición de una reseña y comentario crítico para comprender la complejidad involucrada en un ejercicio crítico y elabora un mapa semántico o mental crítico sobre los temas e ideas principales del texto previo a la composición de la reseña para organizar y visualizar la información y su visión crítica.    </p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Taller de Lectura y Redacción, Literatura</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Comenta y discute en torno a los conflictos de interés presentes en una obra literaria (géneros teatral o narrativo).     </p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Taller de Lectura y Redacción, Literatura</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Identifica las etapas de la composición de una reseña y comentario crítico de un texto o una fuente de información para comprender el proceso de su elaboración.    </p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6"/>
                          </div>
                          <div className="ml-3 text-sm font-normal">Taller de Lectura y Redacción, Literatura</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Desarrolla la etapa I LECTURA ATENTA del texto para comprender la forma en que debe realizarse el análisis de la información.    </p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Taller de Lectura y Redacción, Literatura</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Desarrolla la etapa II ORGANIZACIÓN DE LAS IDEAS de la reseña y comentario crítico para comprender la forma en que debe ser ordenada.     </p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Taller de Lectura y Redacción, Literatura</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Desarrolla la etapa III PLANEACIÓN de la reseña y comentario crítico para comprender la forma en que debe ser esbozada.</p>
                        <Toast>
                          <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Taller de Lectura y Redacción, Literatura</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Desarrolla la etapa IV COMPOSICIÓN de la reseña y comentario crítico para comprender la forma en que debe ser redactada.</p>
                        
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Taller de Lectura y Redacción, Literatura</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Comenta y discute en torno a las decisiones y acciones de los personajes en obra literaria (géneros teatral o narrativo).</p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Taller de Lectura y Redacción, Literatura</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Desarrolla la etapa V REVISIÓN de la reseña y comentario crítico para comprender la forma de verificar su información e incorpora apoyos visuales, gráficos y no verbales críticos en la comunicación oral y escrita para comprender la forma en que debe enfatizarse e ilustrarse la información de la reseña.</p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Taller de Lectura y Redacción, Literatura</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Realiza la exposición oral formal de una reseña y comentario crítico de un texto para explicar y compartir su análisis crítico.</p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6"/>
                          </div>
                          <div className="ml-3 text-sm font-normal">Taller de Lectura y Redacción, Literatura</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Genera una conversación en torno a la crítica de un texto para intercambiar puntos de vista sobre la visión crítica del texto estudiado.</p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Taller de Lectura y Redacción, Literatura</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Comenta y discute en torno al mensaje crítico implícito del autor en una obra literaria (géneros teatrales, narrativo y poesía).</p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Taller de Lectura y Redacción, Literatura</div>
                          
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
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Utiliza el presente continuo en su forma afirmativa para describir acciones propias o de otras personas que están sucediendo en el momento de narrarse a través de textos, cuentos, caricaturas o narraciones.    </p>
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
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Emplea el presente continuo en su forma negativa e interrogativa para negar y cuestionar acciones que están sucediendo en el momento de narrarse a través de textos, cuentos, caricaturas o narraciones.    </p>
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
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Utiliza el pasado simple del verbo to be (was, were) en su forma afirmativa para describir estados, atributos o características tanto propias como de otras personas, lugares, objetos y eventos a través de estrategias como lecturas o diálogos.    </p>
                        
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
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Comprende los conflictos que constituyen la experiencia colectiva de una comunidad para cuestionar tales procesos de sujeción, esclavitud, servidumbre voluntaria y explotación mediante el análisis crítico del discurso. Lo anterior le permite concebir los sentidos y formas de la experiencia colectiva de una comunidad.    </p>
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
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Valora la configuración institucional de una comunidad para cuestionar y decidir qué roles cumplir en la construcción de la experiencia de su colectividad. Una institución puede concebirse como un organismo que concreta el sentido de las prácticas colectivas de una comunidad.     </p>
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
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Ejerce la crítica sobre la experiencia colectiva de una comunidad usando los discursos clásicos y contemporáneos que tratan sobre efectos de alienación para plantearse preguntas sobre qué es aquello que incapacita a una comunidad en el despliegue de todas sus riquezas e impide una experiencia colectiva gozosa y así cuestionar si esas dificultades y limitaciones se deben al carácter alienado de las relaciones colectivas.    </p>
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
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Pone en cuestión las maneras en que se reproduce una comunidad para vincularlas a su capacidad de decisión y construcción de lo colectivo.    </p>
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
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Explica hasta dónde se extiende –mundo tecnológico, natural, artístico, animal...– y quiénes conforman –humanos, animales, instituciones, cosas– la experiencia colectiva de su comunidad para que reconozcan los elementos que conforman su experiencia colectiva y sus sentidos dentro de ella, con el fin de enriquecerla.    </p>
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
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Argumenta la posibilidad y conveniencia de preservar la experiencia colectiva de una comunidad para que pueda valorar la conveniencia de mantener o de transformar el sentido, la forma y la estructura de las relaciones de una comunidad. H</p>
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
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Hipotetiza cómo podrían transformarse las experiencias colectivas de una comunidad para que desarrolle habilidades y empleen metodologías para traducir, concebir y, en acuerdo con las condiciones reales, cambiar los sentidos negativos – degradaciones, violencias, arbitrariedades...–, de la experiencia de su comunidad.</p>
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
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Reconoce la experiencia colectiva de una comunidad mediante el análisis de los discursos del Iusnaturalismo, para percatarse de que las relaciones sociales son una construcción colectiva. Se tratan y discuten conceptos sobre la conformación de lo colectivo (lo que incluye: contrato, pacto, convenio, sobrevivencia, entre otras).     </p>
                        <Toast>
                          <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Ética, Filosofía, Derecho</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Pone en cuestión las formas políticas de lo colectivo y hace visible la experiencia colectiva de una comunidad para que desarrolle herramientas que le permitan identificar, analizar y enjuiciar la manera en que se concibe y enuncia la experiencia colectiva de una comunidad.     </p>
                        <Toast>
                          <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Ética, Filosofía, Derecho</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Comprende cómo se utilizan las potencias colectivas en la experiencia de una comunidad para acercarse a los discursos y prácticas sobre los diversos efectos del poder y la construcción social: autoritarismo, participación, fascismo, patriarcado, solidaridad, democracia, entre otras.    </p>
                        
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Ética, Filosofía, Derecho</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Comprende los conflictos que constituyen la experiencia colectiva de una comunidad para cuestionar tales procesos de sujeción, esclavitud, servidumbre voluntaria y explotación mediante el análisis crítico del discurso. Lo anterior le permite concebir los sentidos y formas de la experiencia colectiva de una comunidad.    </p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Ética, Filosofía, Derecho</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Valora la configuración institucional de una comunidad para cuestionar y decidir qué roles cumplir en la construcción de la experiencia de su colectividad. Una institución puede concebirse como un organismo que concreta el sentido de las prácticas colectivas de una comunidad.     </p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Ética, Filosofía, Derecho</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Ejerce la crítica sobre la experiencia colectiva de una comunidad usando los discursos clásicos y contemporáneos que tratan sobre efectos de alienación para plantearse preguntas sobre qué es aquello que incapacita a una comunidad en el despliegue de todas sus riquezas e impide una experiencia colectiva gozosa y así cuestionar si esas dificultades y limitaciones se deben al carácter alienado de las relaciones colectivas.   </p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6"/>
                          </div>
                          <div className="ml-3 text-sm font-normal">Ética, Filosofía, Derecho</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Pone en cuestión las maneras en que se reproduce una comunidad para vincularlas a su capacidad de decisión y construcción de lo colectivo.   </p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Ética, Filosofía, Derecho</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Explica hasta dónde se extiende –mundo tecnológico, natural, artístico, animal...– y quiénes conforman –humanos, animales, instituciones, cosas– la experiencia colectiva de su comunidad para que reconozcan los elementos que conforman su experiencia colectiva y sus sentidos dentro de ella, con el fin de enriquecerla.   </p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Ética, Filosofía, Derecho</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Argumenta la posibilidad y conveniencia de preservar la experiencia colectiva de una comunidad para que pueda valorar la conveniencia de mantener o de transformar el sentido, la forma y la estructura de las relaciones de una comunidad.</p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Ética, Filosofía, Derecho</div>
                          
                        </Toast>
                      </div>
                    </li>
                    <li>
                      <div className='flex jsutify-center'>
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Hipotetiza cómo podrían transformarse las experiencias colectivas de una comunidad para que desarrolle habilidades y empleen metodologías para traducir, concebir y, en acuerdo con las condiciones reales, cambiar los sentidos negativos – degradaciones, violencias, arbitrariedades...–, de la experiencia de su comunidad.</p>
                        <Toast>
                          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            <HiCheck className="h-6 w-6" />
                          </div>
                          <div className="ml-3 text-sm font-normal">Ética, Filosofía, Derecho</div>
                          
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
              * Taller de Ciencias I
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
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>Los estados de la materia y sus cambios pueden ser identificados en el ciclo hidrológico teniendo una relación de influencia bidireccional en los desarrollos tecnológicos.       </p>
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
export const MateriasE2 = () => {
  return (
    <div>
      <div className="p-4  sm:ml-64 dark:bg-gray-600">
        <div className="p-4  dark:border-gray-700 mt-14  overflow-x-auto">
          <div className="border-l-5 border-sky-900">
            <h1 className="text-cyan-800 text-2xl font-bold dark:text-gray-200 ">
              Orientación Educativa III
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
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>          </p>
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
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>        </p> 
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
                        <p className='text-gray-800 text-sm dark:text-gray-200 '>       </p>
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