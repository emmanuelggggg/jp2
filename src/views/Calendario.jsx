import React from 'react'
import { Calendar, dayjsLocalizer } from 'react-big-calendar'
import dayjs from 'dayjs'

import "dayjs/locale/es"

import "react-big-calendar/lib/css/react-big-calendar.css"

const Calendario = () => {
  const localizer = dayjsLocalizer(dayjs)

  const events = [
    {
      start : dayjs('2024-08-05T12:00:00').toDate(),
      end : dayjs('2024-08-06T12:00:00').toDate(),
      title: "Receso de clases"
    },
    {
      start : dayjs('2024-08-07T12:00:00').toDate(),
      end : dayjs('2024-08-10T12:00:00').toDate(),
      title: "Planeación didáctica y administrativa"
    },
    {
      start : dayjs('2024-08-12T12:00:00').toDate(),
      end : dayjs('2024-08-16T12:00:00').toDate(),
      title: "Planeación didáctica y administrativa"
    },   
    {
      start : dayjs('2024-08-15T13:00:00').toDate(),
      end : dayjs('2024-08-16T13:00:00').toDate(),
      title: "Sesión del comité participativo de bioseguridad escolar"
    },   
    {
      start : dayjs('2024-08-19T12:00:00').toDate(),
      end : dayjs('2024-08-19T12:00:00').toDate(),
      title: "Planeación didáctica y administrativa"
    },   
    {
      start : dayjs('2024-08-19T13:00:00').toDate(),
      end : dayjs('2024-08-19T13:00:00').toDate(),
      title: "Inicio de clases prepa"
    },   
    {
      start : dayjs('2024-08-22T12:00:00').toDate(),
      end : dayjs('2024-08-23T12:00:00').toDate(),
      title: "Taller de integración estudiantes nuevo ingreso"
    },   
    {
      start : dayjs('2024-08-26T12:00:00').toDate(),
      end : dayjs('2024-08-26T12:00:00').toDate(),
      title: "Inicio de clases secundaria"
    },   
    {
      start : dayjs('2024-08-27T17:00:00').toDate(),
      end : dayjs('2024-08-27T20:30:00').toDate(),
      title: "ReuniónPadres de familia"
    },   

    //fin agosto
    {
      start : dayjs('2024-09-12T12:00:00').toDate(),
      end : dayjs('2024-09-12T12:00:00').toDate(),
      title: "Fecha limite de entrega de planeaciones didacticas y otros documentos"
    },  
    {
      start : dayjs('2024-09-13T12:00:00').toDate(),
      end : dayjs('2024-09-13T12:00:00').toDate(),
      title: "Bienvenida Internacional"
    },  
    {
      start : dayjs('2024-09-16T12:00:00').toDate(),
      end : dayjs('2024-09-16T12:00:00').toDate(),
      title: "Desfile Civico militar"
    },  
    {
      start : dayjs('2024-09-16T13:00:00').toDate(),
      end : dayjs('2024-09-16T13:00:00').toDate(),
      title: "Suspención por disposición oficial"
    },  
    {
      start : dayjs('2024-09-17T12:00:00').toDate(),
      end : dayjs('2024-09-20T12:00:00').toDate(),
      title: "Evaluación 1er Periodo Parcial"
    },  
    {
      start : dayjs('2024-09-23T12:00:00').toDate(),
      end : dayjs('2024-09-27T12:00:00').toDate(),
      title: "Evaluación 1er Periodo Parcial"
    },  
    {
      start : dayjs('2024-09-28T12:00:00').toDate(),
      end : dayjs('2024-09-28T12:00:00').toDate(),
      title: "Reunión de academia"
    },  
    {
      start : dayjs('2024-09-30T12:00:00').toDate(),
      end : dayjs('2024-09-30T12:00:00').toDate(),
      title: "Evaluación 1er Periodo Parcial"
    },  
    //fin septiembre
    {
      start : dayjs('2024-10-01T12:00:00').toDate(),
      end : dayjs('2024-10-01T12:00:00').toDate(),
      title: "Suspención por disposición oficial por transición del poder ejecutivo"
    },  
    {
      start : dayjs('2024-10-07T12:00:00').toDate(),
      end : dayjs('2024-10-11T12:00:00').toDate(),
      title: "Torneo deportivo aniversario"
    },  
    {
      start : dayjs('2024-10-14T12:00:00').toDate(),
      end : dayjs('2024-10-14T12:00:00').toDate(),
      title: "Really de aniversario y concurso de porras"
    },  
    {
      start : dayjs('2024-10-18T12:00:00').toDate(),
      end : dayjs('2024-10-18T12:00:00').toDate(),
      title: "Consulta servo escolar 1er parcial"
    },  
    {
      start : dayjs('2024-10-22T12:00:00').toDate(),
      end : dayjs('2024-10-22T12:00:00').toDate(),
      title: "Reunión representates de padres de familia "
    },  
    {
      start : dayjs('2024-10-23T12:00:00').toDate(),
      end : dayjs('2024-10-25T12:00:00').toDate(),
      title: "Evaluación 2do Parcial"
    },
    {
      start : dayjs('2024-10-26T12:00:00').toDate(),
      end : dayjs('2024-10-26T12:00:00').toDate(),
      title: "Reunión de academia"
    },   
    {
      start : dayjs('2024-10-28T12:00:00').toDate(),
      end : dayjs('2024-10-31T12:00:00').toDate(),
      title: "Evaluación 2do Parcial"
    },  
    //fin octubre
    {
      start : dayjs('2024-11-01T12:00:00').toDate(),
      end : dayjs('2024-11-01T12:00:00').toDate(),
      title: "Concurso altares"
    },   
    {
      start : dayjs('2024-11-04T12:00:00').toDate(),
      end : dayjs('2024-11-06T12:00:00').toDate(),
      title: "Evaluación 2do Parcial"
    }, 
    {
      start : dayjs('2024-11-15T12:00:00').toDate(),
      end : dayjs('2024-11-15T12:00:00').toDate(),
      title: "Feria bocacional 2024"
    }, 
    {
      start : dayjs('2024-11-18T12:00:00').toDate(),
      end : dayjs('2024-11-18T12:00:00').toDate(),
      title: "Suspención por disposición oficial"
    },  
    {
      start : dayjs('2024-11-22T12:00:00').toDate(),
      end : dayjs('2024-11-22T12:00:00').toDate(),
      title: "Reunión representates de padres de familia "
    }, 
    { 
      start : dayjs('2024-11-25T12:00:00').toDate(),
      end : dayjs('2024-11-25T12:00:00').toDate(),
      title: "Consulta servo escolar 2er parcial"
    },
    //fin noviembre 
    { 
      start : dayjs('2024-12-02T12:00:00').toDate(),
      end : dayjs('2024-12-06T12:00:00').toDate(),
      title: "Evaluación 3er parcial"
    }, 
    { 
      start : dayjs('2024-12-07T12:00:00').toDate(),
      end : dayjs('2024-12-07T12:00:00').toDate(),
      title: "Reflexión adviento P.N Sra. Gpe"
    }, 
    { 
      start : dayjs('2024-12-09T12:00:00').toDate(),
      end : dayjs('2024-12-12T12:00:00').toDate(),
      title: "Evaluación 3er parcial"
    }, 
    { 
      start : dayjs('2024-12-13T12:00:00').toDate(),
      end : dayjs('2024-12-13T12:00:00').toDate(),
      title: "Festival navideño familiar"
    }, 
    { 
      start : dayjs('2024-12-11T13:00:00').toDate(),
      end : dayjs('2024-12-13T13:00:00').toDate(),
      title: "Inscripciones al 2do,4to y 6to semestre"
    }, 
    { 
      start : dayjs('2024-12-16T13:00:00').toDate(),
      end : dayjs('2024-12-16T13:00:00').toDate(),
      title: "Convivencia navideña personal"
    }, 
    { 
      start : dayjs('2024-12-17T13:00:00').toDate(),
      end : dayjs('2024-12-31T13:00:00').toDate(),
      title: "Receso de clases navidad"
    }, 
    //fin diciembre 2024
    { 
      start : dayjs('2025-01-01T13:00:00').toDate(),
      end : dayjs('2025-01-01T13:00:00').toDate(),
      title: "Suspención por disposición oficial"
    },
    { 
      start : dayjs('2025-01-02T13:00:00').toDate(),
      end : dayjs('2025-01-03T13:00:00').toDate(),
      title: "Periodo remedial 2025-B"
    },
    { 
      start : dayjs('2025-01-06T13:00:00').toDate(),
      end : dayjs('2025-01-07T13:00:00').toDate(),
      title: "Periodo remedial 2024-B"
    },
    { 
      start : dayjs('2025-01-09T13:00:00').toDate(),
      end : dayjs('2025-01-10T13:00:00').toDate(),
      title: "Taller de academias"
    },
    { 
      start : dayjs('2025-01-13T13:00:00').toDate(),
      end : dayjs('2025-01-17T13:00:00').toDate(),
      title: "Acesorias para evaluaciones extraordinarias"
    },
    { 
      start : dayjs('2025-01-20T13:00:00').toDate(),
      end : dayjs('2025-01-20T13:00:00').toDate(),
      title: "Consulta servicio escolar boleta 3er parcial"
    },
    { 
      start : dayjs('2025-01-17T13:00:00').toDate(),
      end : dayjs('2025-01-17T13:00:00').toDate(),
      title: "Periodos de evaluación extraordinario inter semestral"
    },
    { 
      start : dayjs('2025-01-20T13:00:00').toDate(),
      end : dayjs('2025-01-24T13:00:00').toDate(),
      title: "Periodos de evaluación extraordinario inter semestral"
    },
    { 
      start : dayjs('2025-01-27T13:00:00').toDate(),
      end : dayjs('2025-01-27T13:00:00').toDate(),
      title: "Inicio de semestre 2025-A"
    },
    //find enero 2025
    { 
      start : dayjs('2025-02-03T13:00:00').toDate(),
      end : dayjs('2025-02-04T13:00:00').toDate(),
      title: "Incio de preinscripciones aspirantes nuevo ingreso"
    },
    { 
      start : dayjs('2025-02-05T13:00:00').toDate(),
      end : dayjs('2025-02-05T13:00:00').toDate(),
      title: "Suspención por disposición oficial"
    },
    { 
      start : dayjs('2025-02-07T13:00:00').toDate(),
      end : dayjs('2025-02-08T13:00:00').toDate(),
      title: "Acampada 6to semestre ('identidad y trasendencia')"
    },
    { 
      start : dayjs('2025-02-14T13:00:00').toDate(),
      end : dayjs('2025-02-14T13:00:00').toDate(),
      title: "Celebración dia del amor y de la amistad"
    },
    { 
      start : dayjs('2025-02-17T13:00:00').toDate(),
      end : dayjs('2025-02-21T13:00:00').toDate(),
      title: "Asesorias en preparación para evaluación extraordinarios"
    },
    { 
      start : dayjs('2025-02-21T13:00:00').toDate(),
      end : dayjs('2025-02-21T13:00:00').toDate(),
      title: "Reunión representantes padres de familia"
    },
    { 
      start : dayjs('2025-02-24T13:00:00').toDate(),
      end : dayjs('2025-02-28T13:00:00').toDate(),
      title: "Evaluación 1er parcial"
    },
    { 
      start : dayjs('2025-02-22T13:00:00').toDate(),
      end : dayjs('2025-02-22T13:00:00').toDate(),
      title: "Reunión de academias y reflexión cuaresmal"
    },
    //fin febrero
    { 
      start : dayjs('2025-03-03T13:00:00').toDate(),
      end : dayjs('2025-03-07T13:00:00').toDate(),
      title: "Evaluación 1er parcial"
    },
    { 
      start : dayjs('2025-03-10T13:00:00').toDate(),
      end : dayjs('2025-03-13T13:00:00').toDate(),
      title: "Asesorias en preparación para evaluación extraordinarios "
    },
    { 
      start : dayjs('2025-03-13T13:00:00').toDate(),
      end : dayjs('2025-03-14T13:00:00').toDate(),
      title: "Fin de preinscripciones aspirantes nuevo ingreso"
    },
    { 
      start : dayjs('2025-03-14T13:00:00').toDate(),
      end : dayjs('2025-03-14T13:00:00').toDate(),
      title: "Periodo de evaluación inter semestral"
    },
    { 
      start : dayjs('2025-03-17T13:00:00').toDate(),
      end : dayjs('2025-03-17T13:00:00').toDate(),
      title: "Periodo de evaluación inter semestral"
    },
    { 
      start : dayjs('2025-03-19T13:00:00').toDate(),
      end : dayjs('2025-03-20T13:00:00').toDate(),
      title: "Periodo de evaluación inter semestral"
    },
    { 
      start : dayjs('2025-03-17T13:00:00').toDate(),
      end : dayjs('2025-03-17T13:00:00').toDate(),
      title: "Evaluación psicopedagogica y de conocimiento nuevo ingreso"
    },
    { 
      start : dayjs('2025-03-18T13:00:00').toDate(),
      end : dayjs('2025-03-18T13:00:00').toDate(),
      title: "Suspención por disposición oficial"
    },
    { 
      start : dayjs('2025-03-21T13:00:00').toDate(),
      end : dayjs('2025-03-21T13:00:00').toDate(),
      title: "Consulta servicio escolar boleta 1er parcial"
    },
    { 
      start : dayjs('2025-03-24T13:00:00').toDate(),
      end : dayjs('2025-03-24T13:00:00').toDate(),
      title: "Resultado de aspirantes de nuevo ingreso aceptados"
    },
    //fin marzo
    { 
      start : dayjs('2025-03-31T13:00:00').toDate(),
      end : dayjs('2025-04-04T13:00:00').toDate(),
      title: "Evaluación 2do parcial"
    },
    { 
      start : dayjs('2025-04-07T13:00:00').toDate(),
      end : dayjs('2025-04-11T13:00:00').toDate(),
      title: "Evaluación 2do parcial"
    },
    { 
      start : dayjs('2025-04-11T13:00:00').toDate(),
      end : dayjs('2025-04-11T13:00:00').toDate(),
      title: "Reunión representantes de padres de familias"
    },
    { 
      start : dayjs('2025-04-12T13:00:00').toDate(),
      end : dayjs('2025-04-12T13:00:00').toDate(),
      title: "Reunión de academias"
    },
    { 
      start : dayjs('2025-04-14T13:00:00').toDate(),
      end : dayjs('2025-04-25T13:00:00').toDate(),
      title: "Receso semana santa"
    },
    // fin abril
    { 
    start : dayjs('2025-05-01T13:00:00').toDate(),
    end : dayjs('2025-05-01T13:00:00').toDate(),
    title: "Suspención por disposición oficial"
  },
    { 
    start : dayjs('2025-05-15T13:00:00').toDate(),
    end : dayjs('2025-05-15T13:00:00').toDate(),
    title: "Suspención por disposición oficial"
  },
  { 
    start : dayjs('2025-05-16T13:00:00').toDate(),
    end : dayjs('2025-05-16T13:00:00').toDate(),
    title: "Consulta boleta en servico escolar 2do parcial"
  },
  { 
    start : dayjs('2025-05-17T13:00:00').toDate(),
    end : dayjs('2025-05-17T13:00:00').toDate(),
    title: "Evaluación ingles aspirantes nuevo ingreso"
  },
  { 
    start : dayjs('2025-05-23T13:00:00').toDate(),
    end : dayjs('2025-05-23T13:00:00').toDate(),
    title: "Rally y convivencia dia del estudiante"
  },
  { 
    start : dayjs('2025-05-26T13:00:00').toDate(),
    end : dayjs('2025-05-30T13:00:00').toDate(),
    title: "Evaluación 3er parcial"
  },
  { 
    start : dayjs('2025-05-31T13:00:00').toDate(),
    end : dayjs('2025-05-31T13:00:00').toDate(),
    title: "Reunión de academias"
  },
  // fin mayo
  { 
    start : dayjs('2025-06-02T13:00:00').toDate(),
    end : dayjs('2025-06-06T13:00:00').toDate(),
    title: "Evaluación 3er parcial"
  },
  { 
    start : dayjs('2025-06-02T13:00:00').toDate(),
    end : dayjs('2025-06-06T13:00:00').toDate(),
    title: "Festival familiarte"
  },
  
  { 
    start : dayjs('2025-06-09T13:00:00').toDate(),
    end : dayjs('2025-06-09T13:00:00').toDate(),
    title: "Curso de nivelación aspirantes nuevo ingreso"
  },
  { 
    start : dayjs('2025-06-16T13:00:00').toDate(),
    end : dayjs('2025-06-16T13:00:00').toDate(),
    title: "Curso de nivelación aspirantes nuevo ingreso"
  },
  { 
    start : dayjs('2025-06-16T13:00:00').toDate(),
    end : dayjs('2025-06-20T13:00:00').toDate(),
    title: "Asesorias para evaluación extraordinarias"
  },
  { 
    start : dayjs('2025-06-23T13:00:00').toDate(),
    end : dayjs('2025-06-23T13:00:00').toDate(),
    title: "Curso de nivelación aspirantes nuevo ingreso"
  },
  { 
    start : dayjs('2025-06-27T13:00:00').toDate(),
    end : dayjs('2025-06-27T13:00:00').toDate(),
    title: "Graduacion XIX generación"
  },
  { 
    start : dayjs('2025-06-30T13:00:00').toDate(),
    end : dayjs('2025-06-30T13:00:00').toDate(),
    title: "Curso de nivelación aspirantes nuevo ingreso"
  },
  { 
    start : dayjs('2025-06-30T13:00:00').toDate(),
    end : dayjs('2025-06-30T13:00:00').toDate(),
    title: "Consulta en servicio escolar boleta"
  },
  //fin junio
  { 
    start : dayjs('2025-07-01T13:00:00').toDate(),
    end : dayjs('2025-07-04T13:00:00').toDate(),
    title: "Inscripciones Prepa 1ero, 3ero, 5to"
  },
  { 
    start : dayjs('2025-07-07T13:00:00').toDate(),
    end : dayjs('2025-07-07T13:00:00').toDate(),
    title: "Inscripciones Prepa 1ero, 3ero, 5to"
  },
  { 
    start : dayjs('2025-07-01T13:00:00').toDate(),
    end : dayjs('2025-07-04T13:00:00').toDate(),
    title: "Periodo de evaluaciones extraordinaria inter semestral"
  },
  { 
    start : dayjs('2025-07-11T13:00:00').toDate(),
    end : dayjs('2025-07-11T13:00:00').toDate(),
    title: "Convivencia colaboradores de la educación"
  },
  { 
    start : dayjs('2025-07-07T13:00:00').toDate(),
    end : dayjs('2025-07-07T13:00:00').toDate(),
    title: "Periodo de evaluaciones extraordinaria inter semestral"
  },
  { 
    start : dayjs('2025-07-07T13:00:00').toDate(),
    end : dayjs('2025-07-10T13:00:00').toDate(),
    title: "Talleres de academias"
  },
  ]
 


  return (
    <div>

      <div className="  sm:ml-64 dark:bg-gray-600">
        <div className="dark:border-gray-700 mt-24  overflow-x-auto">
          

          <div className="" style={{height:730 }}>
              <Calendar              
                localizer={localizer}  
                events={events}                
                messages={{
                next: "Siguiente",
                previous: "Anterior",
                today: "Hoy",
                month: "Mes",
                week: "Semana",
                day: "Día",
                }}
                views={["month", "week", "day"]}    
              />          
          </div>
        </div>
      </div>

    </div>
  )
}

export default Calendario