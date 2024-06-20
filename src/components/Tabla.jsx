import React from 'react'
import {  Table } from "flowbite-react";
const Tabla = ({semestre}) => {
  return (
    <div>
       <div>
              {
                semestre.map ((semestre =>{
                  return (
                    <>                
                      <h2 className='text-xl m-8 dark:text-white' key={semestre}>{semestre.semestre}</h2>
                      <Table>
                        <Table.Head>
                          <Table.HeadCell>Materias</Table.HeadCell>  
                          <Table.HeadCell>Horas con docente</Table.HeadCell>  
                          <Table.HeadCell>Horas de estudio idependiente</Table.HeadCell>  
                          <Table.HeadCell>Horas totales</Table.HeadCell>  
                          <Table.HeadCell>Créditos</Table.HeadCell>  
                        </Table.Head>
                        <Table.Body className="divide-y">
                          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                              <Button href={semestre.ref1} outline color="gray">{semestre.materia1}</Button>                              
                            </Table.Cell>
                            <Table.Cell>4</Table.Cell>
                            <Table.Cell>1</Table.Cell>
                            <Table.Cell>5</Table.Cell>
                            <Table.Cell>8</Table.Cell>
                          </Table.Row>
                          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                              <Button href={semestre.ref2} outline color="gray">{semestre.materia2}</Button>
                            </Table.Cell>
                            <Table.Cell>2</Table.Cell>
                            <Table.Cell>0.5</Table.Cell>
                            <Table.Cell>2.5</Table.Cell>
                            <Table.Cell>4</Table.Cell>
                          </Table.Row>
                          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                              <Button href={semestre.ref3} outline color="gray">{semestre.materia3}</Button>
                            </Table.Cell>
                            <Table.Cell>2</Table.Cell>
                            <Table.Cell>0.5</Table.Cell>
                            <Table.Cell>2.5</Table.Cell>
                            <Table.Cell>4</Table.Cell>
                          </Table.Row>
                          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                              <Button href={semestre.ref3} outline color="gray">{semestre.materia4}</Button>
                            </Table.Cell>
                            <Table.Cell>4</Table.Cell>
                            <Table.Cell>1</Table.Cell>
                            <Table.Cell>5</Table.Cell>
                            <Table.Cell>8</Table.Cell>
                          </Table.Row>
                          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                              <Button href={semestre.ref4} outline color="gray">{semestre.materia5}</Button>
                            </Table.Cell>
                            <Table.Cell>3</Table.Cell>
                            <Table.Cell>0.75</Table.Cell>
                            <Table.Cell>3.75</Table.Cell>
                            <Table.Cell>6</Table.Cell>
                          </Table.Row>
                          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                              <Button href={semestre.ref5} outline color="gray">{semestre.materia6}</Button>
                            </Table.Cell>
                            <Table.Cell>3</Table.Cell>
                            <Table.Cell>0.75</Table.Cell>
                            <Table.Cell>3.75</Table.Cell>
                            <Table.Cell>6</Table.Cell>
                          </Table.Row>
                          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                              <Button href={semestre.ref6} outline color="gray">{semestre.materia7}</Button>
                            </Table.Cell>
                            <Table.Cell>4</Table.Cell>
                            <Table.Cell>1</Table.Cell>
                            <Table.Cell>5</Table.Cell>
                            <Table.Cell>8</Table.Cell>
                          </Table.Row>
                          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                              <Button href={semestre.ref7} outline color="gray">{semestre.materia8}</Button>
                            </Table.Cell>
                            <Table.Cell>4</Table.Cell>
                            <Table.Cell>1</Table.Cell>
                            <Table.Cell>5</Table.Cell>
                            <Table.Cell>8</Table.Cell>
                          </Table.Row>
                          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                              <Button href={semestre.ref9} outline color="gray">{semestre.curriculum}</Button>
                            </Table.Cell>
                            <Table.Cell>4</Table.Cell>
                            <Table.Cell>1</Table.Cell>
                            <Table.Cell>5</Table.Cell>
                            <Table.Cell>8</Table.Cell>
                          </Table.Row>
                        </Table.Body>
                      </Table>
                    </>
                  );
                }))
              }
            </div>
    </div>
  )
}

export default Tabla