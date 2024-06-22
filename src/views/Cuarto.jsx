import React from 'react'
import { Table, Accordion } from "flowbite-react";
import {  Outlet } from 'react-router-dom';
import { Button } from "flowbite-react";
import Perfiles from '../components/Perfiles';
const Cuarto = () => {
  const semestre4 = [
    {
      semestre:"Profesiograma de 4to. Semestre",
      materia23:"Reacciones Químicas: Conservación de la Materia en la Formación de Nuevas Sustancias",
      materia24:"Conciencia Historica I. Perspectivas del México antiguo. Los Contextos Globales",
      materia25:"* Taller de Cultura Digital",
      materia26:"* Temas Selectos de Matemáticas I",
      materia27:"* Pensamiento Literario",
      materia28:"Ingles IV",
      materia29:"* Espacio y Sociedad",
      materia30:"Ciencias Sociales III",
      materiaE4:"Orientación Educativa IV",
      laboral3:"Laboral Básico",
      laboral4:"Laboral Básico",
      curriculum4:"- Curriculum Ampliado",
    }
  ]

  const CS_licenciatura = [
    "Administración",
    "Administración de Empresas",
    "Administración Gubernamental",
    "Administración Internacional",
    "Administración Pública",
    "Administración Pública y Ciencias Políticas",
    "Administración Pública y Ciencias Sociales",
    "Administración y Ciencias Políticas",
    "Análisis Político",
    "Análisis Político y Medios de Información",
    "Antropología",
    "Antropología Histórica",
    "Antropología Social",
    "Antropología Social y Cultural",
    "Antropología y Estudios de la Cultura",
    "Arqueología",
    "Ciencias Administrativas",
    "Ciencias de la Comunicación con Especialidad en Ciencias Sociales",
    "Ciencias de la Educación con Especialidad en Ciencias Sociales",
    "Ciencias de la Familia",
    "Ciencias Humanas",
    "Ciencias Jurídicas",
    "Ciencias Políticas",
    "Ciencias Políticas y Administración Pública",
    "Ciencias Políticas y Administración Pública Comercial",
    "Ciencias Sociales",
    "Comercio Exterior y Legislación",
    "Comercio Internacional",
    "Comercio Internacional de Producción",
    "Comunicación Social",
    "Consultoría Jurídica",
    "Derecho",
    "Derecho Burocrático",
    "Derecho Canónico",
    "Derecho de América del Norte",
    "Derecho de las Finanzas Públicas",
    "Derecho Económico",
    "Derecho Empresarial",
    "Derecho Internacional",
    "Derecho y Ciencias Sociales",
    "Derecho y Género",
    "Desarrollo Comunitario",
    "Desarrollo Económico",
    "Desarrollo Humano",
    "Desarrollo Humano en la Organización",
    "Desarrollo Sustentable",
    "Economía Internacional",
    "Economía y Finanzas",
    "Economía y Gobierno",
    "Educación Media con Especialidad en Ciencias Sociales",
    "Educación Media en el Área de Ciencias Sociales",
    "Educación Media Especializada en Historia y Civismo",
    "Educación Media Superior con Especialidad en Ciencias Sociales",
    "Educación Media Superior Intercultural",
    "Educación y Desarrollo Humano",
    "Estudios Humanísticos",
    "Estudios Humanísticos y Sociales",
    "Estudios Internacionales",
    "Estudios Latinoamericanos",
    "Estudios Políticos y de Gobierno",
    "Estudios Políticos y Gobierno",
    "Estudios Socioterritoriales",
    "Etnohistoria",
    "Etnología",
    "Filosofía Social y Política",
    "Filosofía y Ciencias",
    "Filosofía y Ciencias Sociales",
    "Geografía",
    "Gestión y Desarrollo Social",
    "Gobierno y Administración Pública",
    "Historia",
    "Historia y Estudios de Humanidades",
    "Historia y Sociedad Contemporánea",
    "Negocios Internacionales",
    "Negocios Nacionales e Internacionales",
    "Periodismo",
    "Periodismo y Comunicación Colectiva",
    "Planeador Territorial o Urbanística",
    "Política y Gestión Social",
    "Psicología Social",
    "Relaciones Comerciales",
    "Relaciones Económicas",
    "Relaciones Económicas Internacionales",
    "Relaciones Internacionales",
    "Sistemas Comerciales",
    "Sociología",
    "Sociología Política",
    "Sociología Rural",
    "Teoría Económica",
    "Trabajo Social"
  ];
  const CS_ingeneria = [
    "No Aplica"
  ]
  const CS_maestria = [
    "Maestría en Administración e Impartición de Justicia",
    "Maestría en Análisis Político y Medios de Información",
    "Maestría en Antropología y Estudios de la Cultura",
    "Maestría en Ciencias Sociales",
    "Maestría en Derecho",
    "Maestría en Derecho Internacional",
    "Maestría en Derechos Humanos y Garantías",
    "Maestría en Desarrollo Humano en la Organización",
    "Maestría en Economía y Política Pública",
    "Maestría en Estudios Humanísticos",
    "Maestría en Estudios Internacionales",
    "Maestría en Estudios Jurídicos",
    "Maestría en Estudios Latinoamericanos",
    "Maestría en Estudios para la Paz y del Desarrollo",
    "Maestría en Estudios Políticos y Sociales"
  ];

  const ingles =[
      "Docencia de Idiomas",
      "Docencia del Idioma Inglés",
      "Educación Bilingüe",
      "Educación Media especializado en Inglés",
      "Enseñanza de la Lengua Materna",
      "Enseñanza del Inglés",
      "Idioma Inglés",
      "Idiomas",
      "Intérprete Traductor",
      "Lengua Inglesa",
      "Lenguas",
      "Lenguas Modernas",
      "Letras Inglesas",
      "Traducción del Idioma Inglés",
      "Traducción y Didáctica del Inglés"
  ];

  const ingles_certificado =[
    "Certificación Nacional de Nivel de Idioma (CENNI)."
  ]

  const ingles_maestria =[
    "No Aplica"
  ]

  const ReaccionesQ_licencia =[
    "Acuacultura",
    "Agrobiotecnología",
    "Bioingeniería",
    "Biología",
    "Biología Ambiental",
    "Biología Área de Manejo de Recursos Naturales",
    "Biología en todas sus Especialidades",
    "Biología Experimental",
    "Biología Marina",
    "Biología Molecular",
    "Biólogo",
    "Biólogo Acuacultor",
    "Biomedicina",
    "Bioquímica en todas sus Especialidades",
    "Biotecnología",
    "Biotecnología en Acuacultura",
    "Biotecnología en todas sus Especialidades",
    "Biotecnología Genómica",
    "Ciencia de los Alimentos",
    "Ciencias",
    "Ciencias Ambientales",
    "Ciencias Atmosféricas",
    "Ciencias de la Tierra",
    "Ciencias Farmacéuticas",
    "Ciencias Físico Matemáticas",
    "Ciencias Genómicas",
    "Ciencias Químicas",
    "Cirujano Dentista",
    "Desarrollo Sustentable",
    "Ecología",
    "Ecología Marina",
    "Educación en Ciencias Naturales",
    "Educación en El Área De Ciencias Naturales",
    "Educación en Química Y Biología",
    "Educación Media con Especialidad en Ciencias Naturales",
    "Educación Media en el Área de Ciencias Naturales",
    "Educación Media Superior con Especialidad en Ciencias Experimentales",
    "Educación Media Superior con Especialidad en Ciencias Naturales",
    "Educación Media Superior Intercultural con Especialidad en Ciencias Naturales",
    "Educación Secundaria con Especialidad en Biología",
    "Educación Secundaria con Especialidad en Ciencias Naturales",
    "Educación Secundaria con Especialidad en Física",
    "Educación Secundaria con Especialidad en Química",
    "Enseñanza de Educación Media Superior en el Área de Ciencias Naturales",
    "Enseñanza y Aprendizaje de la Biología en Educación Secundaria",
    "Enseñanza y Aprendizaje de la Física en Educación Secundaria",
    "Enseñanza y Aprendizaje de la Química en Educación Secundaria",
    "Estomatología",
    "Farmacia",
    "Física",
    "Física Aplicada",
    "Física y Matemáticas",
    "Físico Matemático",
    "Geociencias",
    "Geología",
    "Geólogo Mineralogista",
    "Hidrobiología",
    "Manejo de Recursos Naturales",
    "Medicina",
    "Medicina Veterinaria Zootecnia",
    "Médico Cirujano",
    "Médico Cirujano y Homeópata",
    "Médico General",
    "Microbiología",
    "Minero Metalurgista",
    "Nanotecnología e Ingeniería Molecular",
    "Nutrición",
    "Oceanología",
    "Producción Animal",
    "Química",
    "Química Clínica",
    "Química de Alimentos",
    "Químico Bacteriólogo y Parasitólogo",
    "Químico Biólogo",
    "Químico Biólogo Clínico",
    "Químico Biólogo Parasitólogo",
    "Químico Clínico Biólogo",
    "Químico Farmacéutico Biólogo",
    "Químico Farmacéutico Industrial",
    "Químico Farmacobiólogo",
    "Químico Industrial",
    "Sistemas Costeros"
  ];
  const ReaccionesQ_ingeneria = [
  "Acuacultura",
  "Agrobiotecnología",
  "Bioingeniería",
  "Biología",
  "Biología Ambiental",
  "Biología Área de Manejo de Recursos Naturales",
  "Biología en todas sus Especialidades",
  "Biología Experimental",
  "Biología Marina",
  "Biología Molecular",
  "Biólogo",
  "Biólogo Acuacultor",
  "Biomedicina",
  "Bioquímica en todas sus Especialidades",
  "Biotecnología",
  "Biotecnología en Acuacultura",
  "Biotecnología en todas sus Especialidades",
  "Biotecnología Genómica",
  "Ciencia de los Alimentos",
  "Ciencias",
  "Ciencias Ambientales",
  "Ciencias Atmosféricas",
  "Ciencias de la Tierra",
  "Ciencias Farmacéuticas",
  "Ciencias Físico Matemáticas",
  "Ciencias Genómicas",
  "Ciencias Químicas",
  "Cirujano Dentista",
  "Desarrollo Sustentable",
  "Ecología",
  "Ecología Marina",
  "Educación en Ciencias Naturales",
  "Educación en El Área De Ciencias Naturales",
  "Educación en Química Y Biología",
  "Educación Media con Especialidad en Ciencias Naturales",
  "Educación Media en el Área de Ciencias Naturales",
  "Educación Media Superior con Especialidad en Ciencias Experimentales",
  "Educación Media Superior con Especialidad en Ciencias Naturales",
  "Educación Media Superior Intercultural con Especialidad en Ciencias Naturales",
  "Educación Secundaria con Especialidad en Biología",
  "Educación Secundaria con Especialidad en Ciencias Naturales",
  "Educación Secundaria con Especialidad en Física",
  "Educación Secundaria con Especialidad en Química",
  "Enseñanza de Educación Media Superior en el Área de Ciencias Naturales",
  "Enseñanza y Aprendizaje de la Biología en Educación Secundaria",
  "Enseñanza y Aprendizaje de la Física en Educación Secundaria",
  "Enseñanza y Aprendizaje de la Química en Educación Secundaria",
  "Estomatología",
  "Farmacia",
  "Física",
  "Física Aplicada",
  "Física y Matemáticas",
  "Físico Matemático",
  "Geociencias",
  "Geología",
  "Geólogo Mineralogista",
  "Hidrobiología",
  "Manejo de Recursos Naturales",
  "Medicina",
  "Medicina Veterinaria Zootecnia",
  "Médico Cirujano",
  "Médico Cirujano y Homeópata",
  "Médico General",
  "Microbiología",
  "Minero Metalurgista",
  "Nanotecnología e Ingeniería Molecular",
  "Nutrición",
  "Oceanología",
  "Producción Animal",
  "Química",
  "Química Clínica",
  "Química de Alimentos",
  "Químico Bacteriólogo y Parasitólogo",
  "Químico Biólogo",
  "Químico Biólogo Clínico",
  "Químico Biólogo Parasitólogo",
  "Químico Clínico Biólogo",
  "Químico Farmacéutico Biólogo",
  "Químico Farmacéutico Industrial",
  "Químico Farmacobiólogo",
  "Químico Industrial",
  "Sistemas Costeros"
  ];
  const ReaccionesQ_maestria = [
  "Maestría en Biociencias",
  "Maestría en Calidad Ambiental",
  "Maestría en Ciencias con Especialidad en Biotecnología",
  "Maestría en Ciencias con Especialidad en Hidrociencias",
  "Maestría en Ciencias con Especialidad en Ingeniería",
  "Maestría en Ciencias con Especialidad en Ingeniería Energética",
  "Maestría en Ciencias con Especialidad en Sistemas Ambientales",
  "Maestría en Ciencias de los Materiales",
  "Maestría en Ciencias del Agua",
  "Maestría en Ciencias en Desarrollo Sostenible",
  "Maestría en Ciencias Químicas",
  "Maestría en Medio Ambiente",
  "Maestría en Polímeros y Materiales"
  ];
  const Historicas_licenciatura = [
  "Administración Pública y Ciencias Sociales",
  "Administración y Ciencias Políticas",
  "Antropología",
  "Antropología Histórica",
  "Antropología Social",
  "Antropología Social y Cultural",
  "Arqueología",
  "Ciencias de la Comunicación con Especialidad en Ciencias Sociales",
  "Ciencias de la Educación con Especialidad en Ciencias Sociales",
  "Ciencias de la Familia",
  "Ciencias Del Hombre",
  "Ciencias Humanas",
  "Ciencias Jurídicas",
  "Ciencias Políticas",
  "Ciencias Políticas y Administración Pública",
  "Ciencias Políticas y Administración Pública Comercial",
  "Ciencias Religiosas",
  "Ciencias Sociales",
  "Comunicación Social",
  "Derecho y Ciencias Sociales",
  "Diseño de los Asentamientos Humanos",
  "Economía Política",
  "Economía y Gobierno",
  "Educación Indígena",
  "Educación Media con Especialidad en Ciencias Sociales",
  "Educación Media en el Área de Ciencias Sociales",
  "Educación Media en Historia",
  "Educación Media en la Especialidad en Educación Cívica y Social",
  "Educación Media Especializada en Historia y Civismo",
  "Educación Media Superior Intercultural",
  "Educación y Desarrollo Humano",
  "Enseñanza en Historia",
  "Estudios Humanísticos",
  "Estudios Humanísticos y Sociales",
  "Estudios Internacionales",
  "Estudios Latinoamericanos",
  "Estudios Políticos y de Gobierno",
  "Estudios Políticos y Gobierno",
  "Estudios Socioterritoriales",
  "Etnohistoria",
  "Etnología",
  "Filosofía Social y Política",
  "Filosofía y Ciencias Sociales",
  "Filosofía y Letras",
  "Gestión y Desarrollo Social",
  "Historia",
  "Historia de Humanidades",
  "Historia de la Antropología",
  "Historia de los Asentamientos Humanos",
  "Historia de México",
  "Historia de Países",
  "Historia General",
  "Historia Humana",
  "Historia por Épocas",
  "Historia por Especialidades",
  "Historia Universal Contemporánea",
  "Historia y Estudios de Humanidades",
  "Historia y Sociedad Contemporánea",
  "Humanidades",
  "Humanidades y Filosofía",
  "Intercultural",
  "Periodismo y Comunicación Colectiva",
  "Política y Gestión Social",
  "Relaciones Humanas",
  "Relaciones I"
  ];
  const Historicas_ingeneria =["No Aplica"];
  const Historicas_maestria = [
  "Maestría en Antropología y Estudios de la Cultura",
  "Maestría en Ciencias Sociales",
  "Maestría en Estudios Humanísticos",
  "Maestría en Estudios Latinoamericanos",
  "Maestría en Estudios Políticos y Sociales",
  "Maestría en Historia",
  "Maestría en Humanidades",
  "Maestría en Humanidades en el Área de Historia"
  ];

  const TCD_licenciatura = [
    "Administración Computacional",
    "Administración de las Telecomunicaciones",
    "Administración de Sistemas",
    "Administración de Tecnologías de la Información",
    "Ambientes Virtuales",
    "Ambientes Virtuales de Aprendizaje",
    "Análisis de Sistemas",
    "Automatización y Control",
    "Cibernética y Sistemas Computacionales",
    "Ciencias Computacionales y Telecomunicaciones",
    "Ciencias de la Computación",
    "Ciencias de la Educación con Especialidad en Tecnología Educativa",
    "Ciencias de la Informática",
    "Ciencias Físico Matemáticas",
    "Computación",
    "Computación Aplicada",
    "Computación e Informática",
    "Computación e Informática Corporativa",
    "Computación e Informática Empresarial",
    "Computación e Informática Financiera",
    "Computación e Informática Gerencial",
    "Computación e Informática Industrial",
    "Control de Calidad y Sistemas",
    "Diseñador de Programas de Computación",
    "Diseño Gráfico Digital",
    "Diseño Industrial",
    "Diseño para la Comunicación Gráfica",
    "Diseño y Comunicación Visual",
    "Educación Asistida por Computadora",
    "Informática",
    "Informática Administrativa",
    "Informática Aplicada",
    "Matemáticas Aplicadas y Computación",
    "Matemáticas Computacionales",
    "Matemáticas en Sistemas Computacionales",
    "Ofimática",
    "Sistemas Computacionales",
    "Sistemas Computacionales e Informáticos",
    "Sistemas de Computación Administrativa",
    "Sistemas de Información Administrativa",
    "Software",
    "Software y Tecnologías de la Información",
    "Tecnología Educativa",
    "Tecnología y Sistemas de Información",
    "Transmisiones"
  ];

  const TCD_ingeneria = [
    "Administración de Computación",
    "Cibernética",
    "Computación",
    "Comunicación",
    "Comunicación y Electrónica",
    "Comunicaciones y Electrónica",
    "Desarrollo de Aplicaciones Computacionales",
    "Desarrollo de Software",
    "Desarrollo Tecnológico",
    "Electrónica en Comunicaciones",
    "Electrónica y Comunicaciones",
    "Electrónico en Computación",
    "Industrial en Producción",
    "Industrial y de Sistema",
    "Informática",
    "Redes",
    "Redes y Tecnología Digital",
    "Robótica Industrial",
    "Sistemas",
    "Sistemas Computacionales",
    "Sistemas de Computación Administrativa",
    "Sistemas Inteligentes",
    "Tecnologías Computacionales",
    "Tecnología Ambiental",
    "Tecnologías de Información y Comunicación",
    "Tecnologías de la Información",
    "Telecomunicaciones",
    "Telecomunicaciones y Electrónica",
    "Teleinformática",
    "Telemática"
  ];
  const TCD_maestria = [
    "Maestría en Ciencias con Especialidad en Sistemas Inteligentes",
    "Maestría en Ciencias de Datos",
    "Maestría en Ciencias de la Ingeniería",
    "Maestría en Ciencias en Computación",
    "Maestría en Dirección en Sistemas de Información",
    "Maestría en Nuevas Tecnologías para el Aprendizaje",
    "Maestría en Software y Tecnologías de Información",
    "Maestría en Tecnologías de Información y Administración"
  ];

  const TSM_licenciatura = [
    "Actuaría",
    "Actuaría Financiera",
    "Actuario",
    "Aeronáutica",
    "Ciencias Computacionales",
    "Ciencias con Especialidad en Sistemas Inteligentes",
    "Ciencias de Datos",
    "Ciencias de la Educación con Terminal en Físico Matemáticas",
    "Ciencias Físico Matemáticas",
    "Ciencias Matemáticas",
    "Contabilidad",
    "Contador Público",
    "Contaduría Pública",
    "Control y Automatización",
    "Demografía Estadística",
    "Desarrollo Económico",
    "Dirección de Empresas",
    "Docencia de la Matemática",
    "Economía",
    "Economía Agrícola",
    "Economía Agrícola y Agronegocios",
    "Economía de la Salud",
    "Economía de Negocios",
    "Economía Empresarial",
    "Economía Internacional",
    "Economía y Finanzas",
    "Economía y Política Pública",
    "Educación con Especialidad en Matemáticas",
    "Educación en Matemáticas",
    "Educación Media Superior con especialidad en Matemáticas",
    "Educación Media Superior Intercultural especialidad en Matemáticas",
    "Enseñanza de las Matemáticas",
    "Estadística",
    "Estadística Aplicada",
    "Estadística Experimental",
    "Estudios Internacionales Finanzas",
    "Financiera",
    "Finanzas",
    "Finanzas y Banca",
    "Física",
    "Física Aplicada",
    "Física Aplicada a Finanzas",
    "Física y Matemáticas",
    "Físico Industrial",
    "Físico Matemático",
    "Geofísica",
    "Industrial Estadístico",
    "Informática",
    "Matemática Educativa",
    "Matemáticas",
    "Matemáticas Aplicadas",
    "Matemáticas Aplicadas y Computación",
    "Matemáticas Computacionales",
    "Matemáticas Educativa",
    "Matemáticas en Sistemas Computacionales",
    "Matemáticas Financieras",
    "Matemáticas y Economía",
    "Matemático",
    "Redes",
    "Relaciones Comerciales",
    "Sistemas Comerciales",
    "Sistemas Comerciales en Administración",
    "Sistemas Comerciales Administración Telemática",
    "Sistemas Computacionales",
    "Sistemas de Computación Administrativa",
    "Sistemas de Información Administrativa",
    "Tecnologías de la Información",
    "Telemática",
    "Teoría Económica",
    "Transmisiones",
    "Transporte"
  ];

  const TSM_ingeneria = [
      "Civil",
      "Civil de la Construcción",
      "Computación",
      "Comunicaciones y Electrónica",
      "Control y Automatización",
      "Demografía Estadística",
      "Desarrollo de Software",
      "Desarrollo e Innovación Empresarial",
      "Eléctrica",
      "Eléctrica Electrónica",
      "Electricista",
      "Eléctrico",
      "Eléctrico Electrónico",
      "Electromecánica",
      "Electrónica",
      "Electrónica en Comunicaciones",
      "Electrónica y Telecomunicaciones",
      "Electrónico",
      "Electrónico en Computación",
      "Electrónico en Planta y Mantenimiento",
      "Financiera",
      "Física",
      "Geofísica",
      "Geológica",
      "Gestión Empresarial",
      "Industrial",
      "Industrial Administrador",
      "Industrial Electrónica",
      "Industrial en Electrónica",
      "Industrial en Manufactura",
      "Industrial en Procesos y Servicios",
      "Industrial en Producción",
      "Industrial Estadística",
      "Industrial Mecánico en Térmica",
      "Industrial para la Dirección",
      "Industrial Química",
      "Industrial Textil",
      "Industrial y de Procesos",
      "Industrial y de Servicios",
      "Industrial y de Sistemas",
      "Informática",
      "Mantenimiento Industrial",
      "Matemática",
      "Materiales",
      "Mecánica",
      "Mecánica Automotriz",
      "Mecánico",
      "Mecánico Administrador",
      "Mecánico Agrícola",
      "Mecánico Electricista",
      "Mecánico en Térmica",
      "Mecánico Naval",
      "Mecatrónica",
      "Metalmecánica",
      "Metalurgia",
      "Metalurgia y Minerales",
      "Metalúrgica",
      "Sistemas Computacionales",
      "Sistemas de Computación Administrativa",
      "Sistemas Productivos",
      "Tecnología",
      "Tecnología Ambiental",
      "Telecomunicaciones",
      "Textil",
      "Textil en Acabados",
      "Topográfico",
      "Transporte",
      "Vehículos de Motores"
    ];
  const TSM_maestria = [
      "Maestría en Administración de Riesgos",
      "Maestría en Ciencias con Especialidad en Ingeniería Energética",
      "Maestría en Ciencias con Especialidad en Sistemas Inteligentes",
      "Maestría en Ciencias de Datos",
      "Maestría en Ciencias de la Ingeniería",
      "Maestría en Ciencias Matemáticas",
      "Maestría en Contaduría",
      "Maestría en Demografía",
      "Maestría en Economía",
      "Maestría en Estadística Aplicada",
      "Maestría en Estadística Experimental",
      "Maestría en Finanzas",
      "Maestría en Ingeniería Automotriz"
    ];

  const PL_licenciatura = [
    "Actuación",
    "Arte Dramático",
    "Ciencias de la Comunicación",
    "Ciencias de la Lengua con Acentuación en Traducción e Interpretación",
    "Ciencias Humanas",
    "Ciencias y Técnicas de la Comunicación",
    "Comunicación",
    "Comunicación Social",
    "Comunicación y Periodismo",
    "Comunicación y Relaciones Públicas",
    "Docencia de la Lengua y Literatura",
    "Educación en el Área de Español y Literatura",
    "Educación en Lengua y Literatura",
    "Educación Media con Especialidad en Español",
    "Educación Media Superior Intercultural",
    "Enseñanza de la Lengua Materna",
    "Enseñanza de la Lengua y Literatura",
    "Enseñanza del Español y Literatura",
    "Español",
    "Estudios Latinoamericanos",
    "Estudios Literarios",
    "Filología y Literatura",
    "Filosofía y Letras",
    "Filosofía y Literatura",
    "Hispanoamericana",
    "Historia del Arte",
    "Humanidades",
    "Idiomas",
    "Lengua y Literatura",
    "Lengua y Literatura Española",
    "Lengua y Literatura Hispanoamericana",
    "Lengua y Literaturas Hispanas",
    "Lengua y Literaturas Hispanoamericanas",
    "Lengua y Literaturas Modernas",
    "Lenguas",
    "Lenguas Hispánicas",
    "Lenguas Modernas en Español",
    "Letras",
    "Letras Bíblicas",
    "Letras Clásicas",
    "Letras e Historia Hispánica",
    "Letras Españolas",
    "Letras Hispanas",
    "Letras Hispanoamericanas",
    "Letras Humanas",
    "Letras Latinoamericanas",
    "Letras Mexicanas",
    "Letras y Periodismo",
    "Lingüística",
    "Lingüística Aplicada en Traducción",
    "Lingüística y Literatura Hispánica",
    "Literatura",
    "Literatura Dramática y Teatro",
    "Literatura Hispánica",
    "Literatura Hispanoamericana",
    "Literatura Hispanomexicana",
    "Literatura Iberoamericana",
    "Literatura Latinoamericana",
    "Literatura y Ciencias del Lenguaje",
    "Literatura y Lingüística",
    "Literaturas Hispánicas",
    "Normalista con Especialidad en Español",
    "Pedagogía con Especialidad en Español",
    "Pedagogía con Especialidad en Literatura",
    "Periodismo",
    "Periodismo y Comunicación",
    "Periodismo y Comunicación Colectiva"
  ];
  const PL_ingeneria = ["No Aplica"]
  const PL_maestria = [
    "Maestría en Enseñanza de la Lengua Materna",
    "Maestría en Enseñanza y Lengua de la Literatura",
    "Maestría en Estudios Humanísticos",
    "Maestría en Lingüística Aplicada"
  ];
  const ES_licenciatura = [
  "Agronomía",
  "Agrónomo Administrador",
  "Biología",
  "Biología con Acentuación en Recursos Bióticos",
  "Biología Experimental",
  "Biología Marina",
  "Biólogo Acuacultor",
  "Ciencias Ambientales",
  "Ciencias Atmosféricas",
  "Ciencias de la Educación con Área de Ciencias Químico-Biológicas",
  "Ciencias Químico-Biológicas",
  "Diseño de los Asentamientos Humanos",
  "Ecología",
  "Ecología Marina",
  "Ecólogo",
  "Educación Media con Especialidad en Ciencias Naturales",
  "Educación Media Superior con Especialidad en Ciencias Naturales",
  "Educación Media Superior con Especialidad en Geografía",
  "Geofísica",
  "Geografía",
  "Geografía del Diseño de Asentamientos Humanos",
  "Geografía Humana",
  "Geografía Social",
  "Geógrafo",
  "Geología",
  "Geólogo",
  "Geomática",
  "Hidrobiología",
  "Manejo de Recursos Naturales",
  "Marítimas",
  "Minero Metalurgista",
  "Normalista con Especialidad en Ciencias Naturales",
  "Oceanología",
  "Oceanólogo",
  "Planeación del Desarrollo Rural",
  "Planeación Territorial"
  ];
  const ES_ingenereria = [
  "Agrícola",
  "Agrobiológica",
  "Agroecológica",
  "Agroindustrial",
  "Agrónomo en Sistemas de Producción Agrícola",
  "Agrónomo en Sistemas Pecuarios de Zonas Áridas",
  "Agrónomo Especialista en Desarrollo Rural",
  "Agrónomo Fitotecnista",
  "Ambiental",
  "Bioquímico",
  "Biotecnología",
  "Ciencias del Mar",
  "Ciencias Marítimas",
  "Civil",
  "Fitotecnia",
  "Forestal",
  "Geociencias",
  "Geodésica",
  "Geógrafo e Hidrógrafo",
  "Geohidrología",
  "Geología",
  "Geológica",
  "Hortícola",
  "Meteorólogo",
  "Topógrafo"
  ];
  const ES_maestria = [
    "Maestría en Análisis Espacial y Geoinformática."
  ]
  

  const OE_licenciatura = [
    "Ciencias de la Educación",
    "Ciencias de la Educación con Énfasis en Ciencias Sociales y en Psicología Educativa",
    "Ciencias de la Educación con Formación en Docencia e Investigación",
    "Ciencias de la Familia",
    "Ciencias del Comportamiento",
    "Comunicación Educativa",
    "Comunicación Humana",
    "Desarrollo Educativo",
    "Desarrollo Humano",
    "Desarrollo Humano Diferencial",
    "Desarrollo Humano en la Organización",
    "Docencia en el Área de Ciencias Sociales y Humanidades",
    "Docencia para la Educación Media Superior",
    "Docencia Tecnológica",
    "Educación con Orientación y Tutoría",
    "Educación en Desarrollo Humano",
    "Educación en Pedagogía",
    "Educación en Psicología",
    "Educación en Psicopedagogía",
    "Educación Especial",
    "Educación Inicial",
    "Educación Media en el Área de Ciencias Sociales",
    "Educación y Desarrollo Humano",
    "Educación y Docencia",
    "Innovación y Asesoramiento Psicopedagógico",
    "Neurocognición y Aprendizaje",
    "Neuropsicología y Educación",
    "Orientación Educativa",
    "Orientación Psicológica",
    "Orientación y Consejo Educativos",
    "Pedagogía",
    "Pedagogía con Terminal en Educación Básica",
    "Psicología",
    "Psicología Clínica",
    "Psicología de la Adolescencia",
    "Psicología de la Salud",
    "Psicología del Deporte",
    "Psicología del Factor Humano",
    "Psicología del Trabajo",
    "Psicología del Trabajo y las Organizaciones",
    "Psicología Educativa",
    "Psicología en Ciencias Humanas",
    "Psicología en el Área del Trabajo",
    "Psicología en el Área Deportiva",
    "Psicología en el Área Social",
    "Psicología Familiar",
    "Psicología Humanista",
    "Psicología Industrial",
    "Psicología Industrial y Educativa",
    "Psicología Laboral",
    "Psicología Organizacional",
    "Psicología Social",
    "Psicología Social de Grupos e Instituciones",
    "Psicopedagogía",
    "Sociología",
    "Sociología Transpersonal",
    "Trabajo Social"
  ];

  const OE_ingeneria = [
    "No Aplica",
    
  ];

  const OE_maestria = [
    "No Aplica",
    
  ];

  const LB_licenciatura = [
    "Pendiente",
    
  ];
  const LB_ingeneria = [
    "Pendiente",
    
  ];

  const LB_maestria = [
    "Pendiente",
    
  ];

  const CA_licenciatura = [
    "Pendiente",
    
  ];
  const CA_ingeneria = [
    "Pendiente",
    
  ];

  const CA_maestria = [
    "Pendiente",
    
  ];

  return (
    <div>
      <div className="p-4  sm:ml-64 dark:bg-gray-600">
        <div className="p-4  dark:border-gray-700 mt-14  overflow-x-auto">
            <div>
              {
                semestre4.map ((semestre4 =>{
                  return (
                    <>                
                      <h2 className='text-xl m-8 dark:text-white' key={semestre4}>{semestre4.semestre}</h2>
                      <Table>
                        <Table.Head>
                          <Table.HeadCell>Materias</Table.HeadCell>  
                          <Table.HeadCell>Horas con docente</Table.HeadCell>  
                          <Table.HeadCell>Horas de estudio idependiente</Table.HeadCell>  
                          <Table.HeadCell>Horas totales</Table.HeadCell>  
                          <Table.HeadCell>Creditos</Table.HeadCell>  
                        </Table.Head>
                        <Table.Body className="divide-y">
                          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                              <Button href='/Materias23' outline color="gray">{semestre4.materia23}</Button>                              
                            </Table.Cell>
                            <Table.Cell>4</Table.Cell>
                            <Table.Cell>1</Table.Cell>
                            <Table.Cell>5</Table.Cell>
                            <Table.Cell>8</Table.Cell>
                          </Table.Row>
                          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                              <Button href='/Materias24' outline color="gray">{semestre4.materia24}</Button>
                            </Table.Cell>
                            <Table.Cell>3</Table.Cell>
                            <Table.Cell>0.75</Table.Cell>
                            <Table.Cell>3.75</Table.Cell>
                            <Table.Cell>6</Table.Cell>
                          </Table.Row>
                          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                              <Button href='/Materias25' outline color="gray">{semestre4.materia25}</Button>
                            </Table.Cell>
                            <Table.Cell>1</Table.Cell>
                            <Table.Cell>0.25</Table.Cell>
                            <Table.Cell>1.25</Table.Cell>
                            <Table.Cell>2</Table.Cell>
                          </Table.Row>
                          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                              <Button href='/Materias26' outline color="gray">{semestre4.materia26}</Button>
                            </Table.Cell>
                            <Table.Cell>4</Table.Cell>
                            <Table.Cell>1</Table.Cell>
                            <Table.Cell>5</Table.Cell>
                            <Table.Cell>8</Table.Cell>
                          </Table.Row>
                          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                              <Button href='/Materias27' outline color="gray">{semestre4.materia27}</Button>
                            </Table.Cell>
                            <Table.Cell>3</Table.Cell>
                            <Table.Cell>0.75</Table.Cell>
                            <Table.Cell>3.75</Table.Cell>
                            <Table.Cell>6</Table.Cell>
                          </Table.Row>
                          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                              <Button href='/Materias28' outline color="gray">{semestre4.materia28}</Button>
                            </Table.Cell>
                            <Table.Cell>3</Table.Cell>
                            <Table.Cell>0.75</Table.Cell>
                            <Table.Cell>3.75</Table.Cell>
                            <Table.Cell>6</Table.Cell>
                          </Table.Row>
                          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                              <Button href='/Materias29' outline color="gray">{semestre4.materia29}</Button>
                            </Table.Cell>
                            <Table.Cell>3</Table.Cell>
                            <Table.Cell>0.75</Table.Cell>
                            <Table.Cell>3.75</Table.Cell>
                            <Table.Cell>6</Table.Cell>
                          </Table.Row>
                          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                              <Button href='/Materias30' outline color="gray">{semestre4.materia30}</Button>
                            </Table.Cell>
                            <Table.Cell>2</Table.Cell>
                            <Table.Cell>0.5</Table.Cell>
                            <Table.Cell>2.5</Table.Cell>
                            <Table.Cell>4</Table.Cell>
                          </Table.Row>
                          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                              <Button href='/MateriasE4' outline color="gray">{semestre4.materiaE4}</Button>
                            </Table.Cell>
                            <Table.Cell>3</Table.Cell>
                            <Table.Cell>0.75</Table.Cell>
                            <Table.Cell>3.75</Table.Cell>
                            <Table.Cell>6</Table.Cell>
                          </Table.Row>
                          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                              <Button href='/Laboral3' outline color="gray">{semestre4.laboral3}</Button>
                            </Table.Cell>
                            <Table.Cell>3</Table.Cell>
                            <Table.Cell>0.75</Table.Cell>
                            <Table.Cell>3.75</Table.Cell>
                            <Table.Cell>6</Table.Cell>
                          </Table.Row>
                          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                              <Button href='/Laboral4' outline color="gray">{semestre4.laboral4}</Button>
                            </Table.Cell>
                            <Table.Cell>4</Table.Cell>
                            <Table.Cell>1</Table.Cell>
                            <Table.Cell>5</Table.Cell>
                            <Table.Cell>8</Table.Cell>
                          </Table.Row>
                          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                              <Button href='/Curriculum4' outline color="gray">{semestre4.curriculum4}</Button>
                            </Table.Cell>
                            <Table.Cell>2</Table.Cell>
                            <Table.Cell>0.5</Table.Cell>
                            <Table.Cell>2.5</Table.Cell>
                            <Table.Cell>4</Table.Cell>
                          </Table.Row>
                        </Table.Body>
                      </Table>
                    </>
                  );
                }))
              }
            </div>
            <div className="mb-11 mt-11">
              <h1 className="dark:text-white text-xl p-2">Perfiles para el docente</h1>              
              <Accordion collapseAll>
                  <Accordion.Panel>
                    <Perfiles 
                      titulo={"Reacciones Químicas: Conservación de la Materia en la Formación de Nuevas Sustancias"}
                      licenciatura ={ReaccionesQ_licencia}
                      ingeneria={ReaccionesQ_ingeneria}
                      maestria={ReaccionesQ_maestria}
                      />  
                  </Accordion.Panel>
                  <Accordion.Panel>
                    <Perfiles 
                      titulo={"Conciencia Historica I. Perspectivas del México antiguo. Los Contextos Globales"}
                      licenciatura ={Historicas_licenciatura}
                      ingeneria={Historicas_ingeneria}
                      maestria={Historicas_maestria}
                      />                    
                  </Accordion.Panel>
                  <Accordion.Panel>
                    <Perfiles 
                      titulo={"* Taller de Cultura Digital"}
                      licenciatura ={TCD_licenciatura}
                      ingeneria={TCD_ingeneria}
                      maestria={TCD_maestria}
                      />    
               
                  </Accordion.Panel>
                  <Accordion.Panel>
                      <Perfiles 
                      titulo={"* Temas Selectos de Matemáticas I"}
                      licenciatura ={TSM_licenciatura}
                      ingeneria={TSM_ingeneria}
                      maestria={TSM_maestria}
                      /> 
            
                  </Accordion.Panel>
                  <Accordion.Panel>
                     <Perfiles 
                      titulo={"* Pensamiento Literario"}
                      licenciatura ={PL_licenciatura}
                      ingeneria={PL_ingeneria}
                      maestria={PL_maestria}
                      /> 
                  </Accordion.Panel>
                  <Accordion.Panel>
                     <Perfiles 
                      titulo={"Ingles IV"}
                      licenciatura ={ingles}
                      ingeneria={ingles_certificado}
                      maestria={ingles_maestria}
                      />           
                  </Accordion.Panel>
                  <Accordion.Panel>
                     <Perfiles 
                      titulo={"* Espacio y Sociedad"}
                      licenciatura ={ES_licenciatura}
                      ingeneria={ES_ingenereria}
                      maestria={ES_maestria}
                      />
                  </Accordion.Panel>
                  <Accordion.Panel>
                     <Perfiles 
                      titulo={"Ciencias Sociales III"}
                      licenciatura ={CS_licenciatura}
                      ingeneria={CS_ingeneria}
                      maestria={CS_maestria}
                      />                   
                  </Accordion.Panel>
                  <Accordion.Panel>
                     <Perfiles 
                      titulo={"Orientación Educativa IV"}
                      licenciatura ={OE_licenciatura}
                      ingeneria={OE_ingeneria}
                      maestria={OE_maestria}
                      />                   
                  </Accordion.Panel>
                  <Accordion.Panel>
                    <Perfiles 
                      titulo={"✔️ Laboral Básico"}
                      licenciatura ={LB_licenciatura}
                      ingeneria={LB_ingeneria}
                      maestria={LB_maestria}
                      />               
                  </Accordion.Panel>
                  <Accordion.Panel>
                    <Perfiles 
                      titulo={"✔️ Laboral Básico"}
                      licenciatura ={LB_licenciatura}
                      ingeneria={LB_ingeneria}
                      maestria={LB_maestria}
                      />    
                  </Accordion.Panel>
                  <Accordion.Panel>
                     <Perfiles 
                      titulo={"- Curriculum Ampliado"}
                      licenciatura ={CA_licenciatura}
                      ingeneria={CA_ingeneria}
                      maestria={CA_maestria}
                      />    
                  </Accordion.Panel>
                </Accordion>
            </div>
        </div>
      </div>
      <Outlet/>
    </div>
  )
}

export default Cuarto


