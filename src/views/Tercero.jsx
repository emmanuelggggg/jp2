import React from 'react'
import { Table, Accordion } from "flowbite-react";
import {  Outlet } from 'react-router-dom';
import { Button } from "flowbite-react";
import Perfiles from "../components/Perfiles";
const Tercero = () => {
  const semestre3 = [
    {
      semestre:"Profesiograma de 3er. Semestre",
      materia17:"Ecosistemas, Interacciones, Energía y Dinámica",
      materia18:"Pensamiento Matematico III",
      materia19:"Lengua y Comunicación III",
      materia20:"Ingles III",
      materia21:"Humanidades III",
      materia22:"* Taller de Ciencias II",
      materiaE3:"Orientación Educativa III",
      laboral1:"Laboral Básico",
      laboral2:"Laboral Básico",
      curriculum3:" - Curriculum Ampliado",
      
    }
  ]

  const PM_licenciatura = [
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

  const PM_ingeneria = [
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
    "Informática Mantenimiento Industrial",
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

  const PM_maestria = [
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

  const LC_licenciatura = [
    "Antropología Lingüística",
    "Ciencias de la Comunicación",
    "Ciencias de la Educación en el Área de Lengua y Literatura Española",
    "Ciencias de la Educación y Periodismo",
    "Ciencias de la Información",
    "Ciencias de la Lengua con Acentuación en Traducción e Interpretación",
    "Ciencias del Lenguaje",
    "Ciencias y Técnicas de la Comunicación",
    "Ciencias y Tecnologías de la Comunicación",
    "Comunicación",
    "Comunicación Académica",
    "Comunicación Colectiva",
    "Comunicación Colectiva y Periodismo",
    "Comunicación Educativa",
    "Comunicación Multimedia",
    "Comunicación Organizacional",
    "Comunicación Social",
    "Comunicación Visual",
    "Comunicación y Gestión Cultural",
    "Comunicación y Medios de Información",
    "Comunicación y Periodismo",
    "Comunicación y Relaciones Públicas",
    "Comunicación y Tecnología Educativa",
    "Diseño de la Información",
    "Docencia de Francés y Español",
    "Docencia de la Lengua y Literatura",
    "Educación Bilingüe",
    "Educación en el Área de Español",
    "Educación en el Área de Español y Literatura",
    "Educación en Español",
    "Educación en Lengua y Literatura",
    "Educación Media con Especialidad en Español",
    "Educación Media de Lengua y Literatura Española",
    "Educación Media en el Área de Español",
    "Educación Media en Español",
    "Educación Media en la Especialidad de Español",
    "Educación Media en Literatura y Lingüística",
    "Educación Media Especializada en Lengua y Literatura Españolas",
    "Educación Media Superior con Especialidad en Español",
    "Educación Media Superior con Terminal en Comunicación",
    "Educación Media Superior en el Área de Español",
    "Educación Media Superior en la Especialidad de Español",
    "Educación Media Superior Especialidad en Español",
    "Educación Media Superior Especialidad en Literatura",
    "Educación Primaria con Intercultural Bilingüe",
    "Educación Secundaria con Especialidad en Español",
    "Educación Secundaria en Español",
    "Enseñanza de la Lengua Materna",
    "Enseñanza de la Lengua y Literatura",
    "Enseñanza del Español y Literatura",
    "Enseñanza y Lengua de la Literatura",
    "Escenografía",
    "Español",
    "Español",
    "Estudios Latinoamericanos",
    "Estudios Literarios",
    "Filología",
    "Filología y Literatura",
    "Filosofía y Letras",
    "Filosofía y Literatura",
    "Lengua y Lenguas Hispanas",
    "Lengua y Lingüística Aplicada",
    "Lengua y Literatura",
    "Lengua y Literatura de Hispanoamérica",
    "Lengua y Literatura Española",
    "Lengua y Literatura Españolas",
    "Lengua y Literatura Hispánica",
    "Lengua y Literatura Hispanoamericana",
    "Lengua y Literatura Modernas",
    "Lengua y Literaturas Hispanas",
    "Lengua y Literaturas Hispánicas",
    "Lengua y Literaturas Hispanoamericanas",
    "Lengua y Literaturas Modernas",
    "Lenguaje",
    "Lenguas",
    "Lenguas Clásicas",
    "Lenguas Clásicas",
    "Lenguas Hispanas",
    "Lenguas Hispanas",
    "Lenguas Hispánicas",
    "Lenguas Modernas",
    "Lenguas Modernas Aplicadas",
    "Lenguas Modernas en Español",
    "Letras",
    "Letras Clásicas",
    "Letras e Historia Hispánica",
    "Letras Españolas",
    "Letras Hispanas",
    "Letras Hispánicas",
    "Letras Hispanoamericanas",
    "Letras Latinoamericanas",
    "Letras Modernas",
    "Letras y Periodismo",
    "Educación Media en el Área en Español",
    "Lingüística",
    "Lingüística Aplicada",
    "Lingüística Aplicada al Español",
    "Lingüística Aplicada en Traducción",
    "Lingüística y Literatura",
    "Lingüística y Literatura Hispánica",
    "Literatura",
    "Literatura Comparada",
    "Literatura Dramática y Teatro",
    "Literatura Hispánica",
    "Literatura Hispanoamericana",
    "Literatura Iberoamericana",
    "Literatura Latinoamericana",
    "Literatura Universal",
    "Literatura y Ciencias del Lenguaje",
    "Literatura y Letras",
    "Literatura y Lingüística",
    "Literaturas Hispánicas",
    "Maestro Normalista con Especialidad en Español",
    "Medios",
    "Normalista con Especialidad en Español",
    "Pedagogía con Especialidad en Español",
    "Pedagogía con Especialidad en Lengua y Literatura Hispánica",
    "Pedagogía del Español",
    "Periodismo",
    "Periodismo e Información",
    "Periodismo y Ciencias de la Comunicación",
    "Periodismo y Comunicación",
    "Periodismo y Comunicación Colectiva",
    "Periodismo y Medios",
    "Periodismo y Medios de Información",
    "Profesor de Educación Media en la Especialidad de Lengua y Literatura"
  ];
  const LC_ingeneria=["No Aplica"]
  const LC_maestria=["No Aplica"]

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

  const humanidades_licenciatura = [
    "Administración y Ciencias Políticas",
    "Antropología",
    "Antropología Social y Cultural",
    "Ciencias Humanas",
    "Ciencias Jurídicas",
    "Ciencias Políticas",
    "Comunicación Social",
    "Derecho",
    "Derecho y Ciencias Sociales",
    "Derecho y Género",
    "Desarrollo Humano",
    "Educación Cívica",
    "Educación con Especialidad en Formación Cívica y Ética",
    "Educación en el Área de Español y Literatura",
    "Educación en Lengua y Literatura",
    "Educación Indígena",
    "Educación Media con Especialidad en Ciencias Sociales",
    "Educación Media Especializada en Historia y Civismo",
    "Educación Media Superior Intercultural",
    "Educación y Desarrollo Humano",
    "Estudios de Género",
    "Estudios Humanísticos y Sociales",
    "Estudios Latinoamericanos",
    "Estudios Literarios",
    "Etnohistoria",
    "Etnología",
    "Filología y Literatura",
    "Filosofía",
    "Filosofía Social y Política",
    "Filosofía y Ciencias",
    "Filosofía y Ciencias Sociales",
    "Filosofía y Letras",
    "Filosofía y Literatura",
    "Historia",
    "Historia y Sociedad Contemporánea",
    "Humanidades",
    "Humanidades y Filosofía",
    "Letras",
    "Letras Clásicas",
    "Letras e Historia",
    "Letras e Historia Hispánica",
    "Letras Españolas",
    "Letras Hispanas",
    "Letras Hispánicas",
    "Letras Hispanoamericanas",
    "Letras Humanas",
    "Letras Latinoamericanas",
    "Letras y Periodismo",
    "Lingüística",
    "Lingüística Aplicada en Traducción",
    "Lingüística y Literatura Hispánica",
    "Literatura",
    "Literatura Hispánica",
    "Literatura Hispanoamericana",
    "Literatura Hispanomexicana",
    "Literatura Iberoamericana",
    "Literatura Latinoamericana",
    "Literatura y Ciencias del Lenguaje",
    "Literatura y Filosofía",
    "Literatura y Lingüística",
    "Literaturas Hispánicas",
    "Lógica",
    "Psicología",
    "Relaciones Humanas",
    "Sociología",
    "Sociología Política",
    "Teología",
    "Trabajo Social"
  ];
  const humanidades_ingeneria = [
    "No Aplica"
  ];
  const humanidades_maestria = [
    "Maestría en Antropología y Estudios de la Cultura",
    "Maestría en Docencia en Educación Superior de Filosofía",
    "Maestría en Estudios de Género",
    "Maestría en Estudios Humanísticos",
    "Maestría en Estudios Latinoamericanos",
    "Maestría en Estudios para la Paz y el Desarrollo",
    "Maestría en Filosofía",
    "Maestría en Filosofía de la Ciencia",
    "Maestría en Filosofía y Letras",
    "Maestría en Lingüística Aplicada"
  ];


  const EIED_licenciatura = [
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
  const EIED_ingeneria = [
  "Aeroespacial",
  "Aeronáutica",
  "Agrícola",
  "Agrobiológica",
  "Agroindustrial",
  "Agroquímica",
  "Ambiental",
  "Biomédica",
  "Biomédica Industrial",
  "Civil",
  "Eléctrica",
  "Eléctrica Electrónica",
  "Electromecánica",
  "Electrónica",
  "Acuacultura",
  "Acuicultura",
  "Agroalimentos",
  "Agroecología",
  "Agronomía",
  "Agronomía en todas sus Especialidades",
  "Agronomía Fitotecnista",
  "Agronomía Industrial",
  "Alimentos",
  "Análisis Espacial y Biociencias",
  "Biología Agropecuaria",
  "Biología Pesquera",
  "Biónica",
  "Bioprocesos",
  "Bioquímica",
  "Bioquímica Industrial",
  "Biotecnología",
  "Ciencias de la Electrónica",
  "Conservación y Manejo de Recursos Naturales",
  "Control y Automatización",
  "Energética",
  "Energía",
  "Energías Renovables",
  "Geología Ambiental",
  "Hortícola",
  "Industrias Alimentarias",
  "Instrumentación Electrónica",
  "Instrumentación Electrónica y Nanosensores",
  "Manejo de Recursos Forestales",
  "Manejo de Recursos Naturales",
  "Mantenimiento Industrial",
  "Mantenimiento Petrolero",
  "Manufactura",
  "Materiales",
  "Mecatrónica",
  "Mecatrónica en todas sus Especialidades",
  "Metal Mecánica",
  "Metalurgia",
  "Metalurgia en todas sus Especialidades",
  "Metalurgia y Materiales",
  "Minas",
  "Minas y Metalurgia",
  "Nanotecnología",
  "Pesquerías",
  "Petroquímica en todas sus Especialidades",
  "Procesos Ambientales",
  "Producción Industrial",
  "Producción Vegetal",
  "Recursos Naturales Renovables",
  "Recursos Naturales y Agropecuarios",
  "Sistemas Ambientales",
  "Sistemas Automotrices",
  "Sistemas Costeros",
  "Sistemas de Energía",
  "Sistemas Energéticos Sustentables",
  "Tecnología Ambiental",
  "Telecomunicaciones",
  "Telemática",
  "Topografía en todas sus Especialidades",
  "Topografía y Geodésica",
  "Transporte",
  "Física Industrial",
  "Forestal",
  "Geofísica",
  "Geológica",
  "Hidráulica",
  "Hidrológica",
  "Industrial",
  "Industrial Manufactura",
  "Industrial para la Dirección",
  "Industrial Procesos y Servicios",
  "Mecánica",
  "Mecánica Automotriz",
  "Mecánica Eléctrica",
  "Mecánica en todas sus Especialidades",
  "Mecánica Industrial",
  "Metalúrgica",
  "Metalúrgica y Ciencias de los Materiales",
  "Metalurgista y de Materiales",
  "Oceánica",
  "Petrolera",
  "Petroquímica",
  "Química",
  "Química Agrícola",
  "Química Ambiental",
  "Química en todas sus Especialidades",
  "Química Industrial",
  "Química Metalúrgica",
  "Química Petrolera",
  "Textil",
  "Ingeniero Agrónomo",
  "Ingeniero Agrónomo en Sistemas de Producción Agrícola",
  "Ingeniero Agrónomo en Sistemas Pecuarios",
  "Ingeniero Agrónomo especialista en Desarrollo Rural",
  "Ingeniero Agrónomo especialista en Fitotecnia",
  "Ingeniero Agrónomo Horticultor",
  "Ingeniero Agrónomo Industrial",
  "Ingeniero Electricista",
  "Ingeniero Físico Industrial",
  "Ingeniero Mecánico Agrícola",
  "Ingeniero Mecánico Electricista",
  "Ingeniero Mecánico Naval",
  "Ingeniero Topógrafo"
  ];
  const EIED_maestria = [
  "Biociencias",
  "Calidad Ambiental",
  "Ciencias con Especialidad en Biotecnología",
  "Ciencias con Especialidad en Hidrociencias",
  "Ciencias con Especialidad en Ingeniería",
  "Ciencias con Especialidad en Ingeniería Energética",
  "Ciencias con Especialidad en Sistemas Ambientales",
  "Ciencias de los Materiales",
  "Ciencias del Agua",
  "Ciencias en Desarrollo Sostenible",
  "Ciencias Químicas",
  "Medio Ambiente",
  "Polímeros y Materiales"
];

  const TC_licenciatura =[
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
  const TC_ingeneria = [
  "Aeroespacial",
  "Aeronáutica",
  "Agrícola",
  "Agrobiológica",
  "Agroindustrial",
  "Agroquímica",
  "Ambiental",
  "Biomédica",
  "Biomédica Industrial",
  "Civil",
  "Eléctrica",
  "Eléctrica Electrónica",
  "Electromecánica",
  "Electrónica",
  "Acuacultura",
  "Acuicultura",
  "Agroalimentos",
  "Agroecología",
  "Agronomía",
  "Agronomía en todas sus Especialidades",
  "Agronomía Fitotecnista",
  "Agronomía Industrial",
  "Alimentos",
  "Análisis Espacial y Biociencias",
  "Biología Agropecuaria",
  "Biología Pesquera",
  "Biónica",
  "Bioprocesos",
  "Bioquímica",
  "Bioquímica Industrial",
  "Biotecnología",
  "Ciencias de la Electrónica",
  "Conservación y Manejo de Recursos Naturales",
  "Control y Automatización",
  "Energética",
  "Energía",
  "Energías Renovables",
  "Geología Ambiental",
  "Hortícola",
  "Industrias Alimentarias",
  "Instrumentación Electrónica",
  "Instrumentación Electrónica y Nanosensores",
  "Manejo de Recursos Forestales",
  "Manejo de Recursos Naturales",
  "Mantenimiento Industrial",
  "Mantenimiento Petrolero",
  "Manufactura",
  "Materiales",
  "Mecatrónica",
  "Mecatrónica en todas sus Especialidades",
  "Metal Mecánica",
  "Metalurgia",
  "Metalurgia en todas sus Especialidades",
  "Metalurgia y Materiales",
  "Minas",
  "Minas y Metalurgia",
  "Nanotecnología",
  "Pesquerías",
  "Petroquímica en todas sus Especialidades",
  "Procesos Ambientales",
  "Producción Industrial",
  "Producción Vegetal",
  "Recursos Naturales Renovables",
  "Recursos Naturales y Agropecuarios",
  "Sistemas Ambientales",
  "Sistemas Automotrices",
  "Sistemas Costeros",
  "Sistemas de Energía",
  "Sistemas Energéticos Sustentables",
  "Tecnología Ambiental",
  "Telecomunicaciones",
  "Telemática",
  "Topografía en todas sus Especialidades",
  "Topografía y Geodésica",
  "Transporte",
  "Física Industrial",
  "Forestal",
  "Geofísica",
  "Geológica",
  "Hidráulica",
  "Hidrológica",
  "Industrial",
  "Industrial Manufactura",
  "Industrial para la Dirección",
  "Industrial Procesos y Servicios",
  "Mecánica",
  "Mecánica Automotriz",
  "Mecánica Eléctrica",
  "Mecánica en todas sus Especialidades",
  "Mecánica Industrial",
  "Metalúrgica",
  "Metalúrgica y Ciencias de los Materiales",
  "Metalurgista y de Materiales",
  "Oceánica",
  "Petrolera",
  "Petroquímica",
  "Química",
  "Química Agrícola",
  "Química Ambiental",
  "Química en todas sus Especialidades",
  "Química Industrial",
  "Química Metalúrgica",
  "Química Petrolera",
  "Textil",
  "Ingeniero Agrónomo",
  "Ingeniero Agrónomo en Sistemas de Producción Agrícola",
  "Ingeniero Agrónomo en Sistemas Pecuarios",
  "Ingeniero Agrónomo especialista en Desarrollo Rural",
  "Ingeniero Agrónomo especialista en Fitotecnia",
  "Ingeniero Agrónomo Horticultor",
  "Ingeniero Agrónomo Industrial",
  "Ingeniero Electricista",
  "Ingeniero Físico Industrial",
  "Ingeniero Mecánico Agrícola",
  "Ingeniero Mecánico Electricista",
  "Ingeniero Mecánico Naval",
  "Ingeniero Topógrafo"
  ];
  const TC_maestria = [
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
                semestre3.map ((semestre3 =>{
                  return (
                    <>                
                      <h2 className='text-xl m-8 dark:text-white' key={semestre3}>{semestre3.semestre}</h2>
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
                              <Button href='/Materias17' outline color="gray">{semestre3.materia17}</Button>                              
                            </Table.Cell>
                            <Table.Cell>4</Table.Cell>
                            <Table.Cell>1</Table.Cell>
                            <Table.Cell>5</Table.Cell>
                            <Table.Cell>8</Table.Cell>
                          </Table.Row>
                          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                              <Button href='/Materias18' outline color="gray">{semestre3.materia18}</Button>
                            </Table.Cell>
                            <Table.Cell>4</Table.Cell>
                            <Table.Cell>1</Table.Cell>
                            <Table.Cell>5</Table.Cell>
                            <Table.Cell>8</Table.Cell>
                          </Table.Row>
                          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                              <Button href='/Materias19' outline color="gray">{semestre3.materia19}</Button>
                            </Table.Cell>
                            <Table.Cell>3</Table.Cell>
                            <Table.Cell>0.75</Table.Cell>
                            <Table.Cell>3.75</Table.Cell>
                            <Table.Cell>6</Table.Cell>
                          </Table.Row>
                          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                              <Button href='/Materias20' outline color="gray">{semestre3.materia20}</Button>
                            </Table.Cell>
                            <Table.Cell>3</Table.Cell>
                            <Table.Cell>0.75</Table.Cell>
                            <Table.Cell>3.75</Table.Cell>
                            <Table.Cell>6</Table.Cell>
                          </Table.Row>
                          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                              <Button href='/Materias21' outline color="gray">{semestre3.materia21}</Button>
                            </Table.Cell>
                            <Table.Cell>5</Table.Cell>
                            <Table.Cell>1.25</Table.Cell>
                            <Table.Cell>6.25</Table.Cell>
                            <Table.Cell>10</Table.Cell>
                          </Table.Row>
                          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                              <Button href='/Materias22' outline color="gray">{semestre3.materia22}</Button>
                            </Table.Cell>
                            <Table.Cell>3</Table.Cell>
                            <Table.Cell>0.75</Table.Cell>
                            <Table.Cell>3.75</Table.Cell>
                            <Table.Cell>6</Table.Cell>
                          </Table.Row>
                          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                              <Button href='/MateriasE3' outline color="gray">{semestre3.materiaE3}</Button>
                            </Table.Cell>
                            <Table.Cell>3</Table.Cell>
                            <Table.Cell>0.75</Table.Cell>
                            <Table.Cell>3.75</Table.Cell>
                            <Table.Cell>6</Table.Cell>
                          </Table.Row>
                          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                              <Button href='/Laboral1' outline color="gray">{semestre3.laboral1}</Button>
                            </Table.Cell>
                            <Table.Cell>3</Table.Cell>
                            <Table.Cell>0.75</Table.Cell>
                            <Table.Cell>3.75</Table.Cell>
                            <Table.Cell>6</Table.Cell>
                          </Table.Row>
                          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                              <Button href='/Laboral2' outline color="gray">{semestre3.laboral2}</Button>
                            </Table.Cell>
                            <Table.Cell>4</Table.Cell>
                            <Table.Cell>1</Table.Cell>
                            <Table.Cell>5</Table.Cell>
                            <Table.Cell>8</Table.Cell>
                          </Table.Row>
                          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                              <Button href='/Curriculum3' outline color="gray">{semestre3.curriculum3}</Button>
                            </Table.Cell>
                            <Table.Cell>3</Table.Cell>
                            <Table.Cell>0.75</Table.Cell>
                            <Table.Cell>3.75</Table.Cell>
                            <Table.Cell>6</Table.Cell>
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
                      titulo={"Ecosistemas, Interacciones, Energía y Dinámica"}
                      licenciatura ={EIED_licenciatura}
                      ingeneria={EIED_ingeneria}
                      maestria={EIED_maestria}
                      />  
                  </Accordion.Panel>
                  <Accordion.Panel>
                    <Perfiles 
                      titulo={"Pensamiento Matematico III"}
                      licenciatura ={PM_licenciatura}
                      ingeneria={PM_ingeneria}
                      maestria={PM_maestria}
                      />                    
                  </Accordion.Panel>
                  <Accordion.Panel>
                    <Perfiles 
                      titulo={"Lengua y Comunicación III"}
                      licenciatura ={LC_licenciatura}
                      ingeneria={LC_ingeneria}
                      maestria={LC_maestria}
                      />                
                  </Accordion.Panel>
                  <Accordion.Panel>
                     <Perfiles 
                      titulo={"Ingles III"}
                      licenciatura ={ingles}
                      ingeneria={ingles_certificado}
                      maestria={ingles_maestria}
                      />                    
                  </Accordion.Panel>
                  <Accordion.Panel>
                    <Perfiles 
                      titulo={"Humanidades III"}
                      licenciatura ={humanidades_licenciatura}
                      ingeneria={humanidades_ingeneria}
                      maestria={humanidades_maestria}
                      />                    
                  </Accordion.Panel>
                  <Accordion.Panel>
                    <Perfiles 
                      titulo={"* Taller de Ciencias II"}
                      licenciatura ={TC_licenciatura}
                      ingeneria={TC_ingeneria}
                      maestria={TC_maestria}
                      />                    
                  </Accordion.Panel>
                  <Accordion.Panel>
                    <Perfiles 
                      titulo={"Orientación Educativa III"}
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

export default Tercero