import React from 'react'
import { Breadcrumb, BreadcrumbItem } from "flowbite-react";
import { HiHome } from "react-icons/hi";

const BreadCrums = ({semestre, materia, nombremateria, nombresemestre}) => {
  return (
    <Breadcrumb aria-label="Solid background breadcrumb example" className="bg-gray-50 px-5 py-3 dark:bg-gray-800">
      <BreadcrumbItem href="/" icon={HiHome}>
        Home
      </BreadcrumbItem>
      <BreadcrumbItem href={semestre}>{nombresemestre}</BreadcrumbItem>
      <BreadcrumbItem href={materia}>{nombremateria}</BreadcrumbItem>
    </Breadcrumb>
  );
}

export default BreadCrums