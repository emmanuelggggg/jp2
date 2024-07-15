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
      end : dayjs('2024-08-09T12:00:00').toDate(),
      title: "Planeación didáctica y administrativa"
    },
    {
      start : dayjs('2024-08-12T12:00:00').toDate(),
      end : dayjs('2024-08-16T12:00:00').toDate(),
      title: "Planeación didáctica y administrativa"
    },   
    {
      start : dayjs('2024-08-19T12:00:00').toDate(),
      end : dayjs('2024-08-19T12:00:00').toDate(),
      title: "Planeación didáctica y administrativa"
    },   
    {
      start : dayjs('2024-08-22T12:00:00').toDate(),
      end : dayjs('2024-08-23T12:00:00').toDate(),
      title: "Taller de integración estudiantes nuevo ingreso"
    },   
    {
      start : dayjs('2024-08-26T12:00:00').toDate(),
      end : dayjs('2024-08-26T12:00:00').toDate(),
      title: "Inicio de clases"
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
      start : dayjs('2024-09-15T12:00:00').toDate(),
      end : dayjs('2024-09-15T12:00:00').toDate(),
      title: "Bienvenida Internacional"
    },  
    {
      start : dayjs('2024-09-16T12:00:00').toDate(),
      end : dayjs('2024-09-16T12:00:00').toDate(),
      title: "Desfile Civico militar"
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
      start : dayjs('2024-09-29T12:00:00').toDate(),
      end : dayjs('2024-09-29T12:00:00').toDate(),
      title: "Evaluación 1er Periodo Parcial"
    },  
    {
      start : dayjs('2024-09-30T09:00:00').toDate(),
      end : dayjs('2024-09-30T12:00:00').toDate(),
      title: "Reunión de academia"
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