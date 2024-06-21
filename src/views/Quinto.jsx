import React from 'react'
import { Table, Accordion, Badge } from "flowbite-react";
import {  Outlet } from 'react-router-dom';
import { Button } from "flowbite-react";

const Quinto = () => {
  const semestre5 = [
    {
      semestre:"5to Semestre",
      materia31:"La Energía en Procesos de la Vida Diaria",
      materia32:"Conciencia Historica II. México durante el expansionismo capitalista",
      extendido1:"**Extendido",
      extendido2:"**Extendido",
      extendido3:"**Extendido",
      extendido4:"**Extendido",
      laboral5:"Laboral Básico",
      laboral6:"Laboral Básico",
      curriculum5:"- Curriculum Ampliado",
    }
  ]

  const MI_licenciatura = [
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
  const MI_ingeneria = [
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
  const MI_maestria = [
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

  const CD_licenciatura = [
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

  const CD_ingeneria = [
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

  const CD_maestria = [
    "Maestría en Ciencias con Especialidad en Sistemas Inteligentes",
    "Maestría en Ciencias de Datos",
    "Maestría en Ciencias de la Ingeniería",
    "Maestría en Ciencias en Computación",
    "Maestría en Dirección en Sistemas de Información",
    "Maestría en Nuevas Tecnologías para el Aprendizaje",
    "Maestría en Software y Tecnologías de Información",
    "Maestría en Tecnologías de Información y Administración"
  ];

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

  const LI_licenciatura = [
    "Análisis Político",
    "Antropología",
    "Antropología Histórica",
    "Antropología Social",
    "Arqueología",
    "Ciencias de la Educación con Especialidad en Ciencias Sociales",
    "Ciencias de la Educación con opción o Especialidad en Ciencias Sociales",
    "Ciencias Del Hombre",
    "Ciencias Jurídicas",
    "Ciencias Políticas",
    "Ciencias Políticas y Administración Pública",
    "Ciencias Políticas y Administración Pública Comercial",
    "Ciencias Sociales",
    "Comunicación Social",
    "Demografía",
    "Derecho y Ciencias Sociales",
    "Desarrollo Comunitario",
    "Desarrollo Rural y Gestión Intercultural",
    "Economía y Gobierno",
    "Educación Media con Especialidad en Ciencias Sociales",
    "Educación Media en el Área de Ciencias Sociales",
    "Educación Media Superior Intercultural",
    "Epistemología",
    "Estudios Humanísticos y Sociales",
    "Estudios Internacionales",
    "Estudios Latinoamericanos",
    "Estudios Políticos y de Gobierno",
    "Estudios Socioterritoriales",
    "Etnografía",
    "Etnohistoria",
    "Etnología",
    "Filosofía y Ciencias Sociales",
    "Historia de la Antropología",
    "Historia de México",
    "Periodismo y Comunicación Colectiva",
    "Política y Gestión Social",
    "Relaciones Internacionales",
    "Psicología Organizacional",
    "Sociología",
    "Sociología de la Educación",
    "Sociología Política",
    "Sociología Rural",
    "Trabajo Social",
    "Urbanismo"
  ];
  const LI_ingeneria =[
    "No Aplica"
  ];
  const LI_maestria = [
    "Maestría en Análisis Político y Medios de Información",
    "Maestría en Antropología y Estudios de la Cultura",
    "Maestría en Ciencias Sociales",
    "Maestría en Estudios Humanísticos",
    "Maestría en Estudios Internacionales",
    "Maestría en Estudios Políticos y Sociales",
    "Maestría en Ingeniería en Análisis de Decisiones",
    "Maestría en Innovación Educativa",
    "Maestría en Mercadotecnia",
    "Maestría en Psicología",
    "Maestría en Sociología de la Educación"
  ];

  return (
    <div>
      <div className="p-4  sm:ml-64 dark:bg-gray-600">
        <div className="p-4  dark:border-gray-700 mt-14  overflow-x-auto">
            <div>
              {
                semestre5.map ((semestre5 =>{
                  return (
                    <>                
                      <h2 className='text-xl m-8 dark:text-white' key={semestre5}>{semestre5.semestre}</h2>
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
                              <Button href='/Materias31' outline color="gray">{semestre5.materia31}</Button>                              
                            </Table.Cell>
                            <Table.Cell>4</Table.Cell>
                            <Table.Cell>1</Table.Cell>
                            <Table.Cell>5</Table.Cell>
                            <Table.Cell>8</Table.Cell>
                          </Table.Row>
                          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                              <Button href='/Materias32' outline color="gray">{semestre5.materia32}</Button>
                            </Table.Cell>
                            <Table.Cell>3</Table.Cell>
                            <Table.Cell>0.75</Table.Cell>
                            <Table.Cell>3.75</Table.Cell>
                            <Table.Cell>6</Table.Cell>
                          </Table.Row>
                          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                              <Button href='/Materias31' outline color="gray">{semestre5.extendido1}</Button>                              
                            </Table.Cell>
                            <Table.Cell>3</Table.Cell>
                            <Table.Cell>0.75</Table.Cell>
                            <Table.Cell>3.75</Table.Cell>
                            <Table.Cell>6</Table.Cell>
                          </Table.Row>
                          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                              <Button href='/Materias32' outline color="gray">{semestre5.extendido2}</Button>
                            </Table.Cell>
                            <Table.Cell>3</Table.Cell>
                            <Table.Cell>0.75</Table.Cell>
                            <Table.Cell>3.75</Table.Cell>
                            <Table.Cell>6</Table.Cell>
                          </Table.Row>
                          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                              <Button href='/Materias31' outline color="gray">{semestre5.extendido3}</Button>                              
                            </Table.Cell>
                            <Table.Cell>3</Table.Cell>
                            <Table.Cell>0.75</Table.Cell>
                            <Table.Cell>3.75</Table.Cell>
                            <Table.Cell>6</Table.Cell>
                          </Table.Row>
                          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                              <Button href='/Materias32' outline color="gray">{semestre5.extendido4}</Button>
                            </Table.Cell>
                            <Table.Cell>3</Table.Cell>
                            <Table.Cell>0.75</Table.Cell>
                            <Table.Cell>3.75</Table.Cell>
                            <Table.Cell>6</Table.Cell>
                          </Table.Row>
                          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                              <Button href='/Materias31' outline color="gray">{semestre5.laboral5}</Button>                              
                            </Table.Cell>
                            <Table.Cell>3</Table.Cell>
                            <Table.Cell>0.75</Table.Cell>
                            <Table.Cell>3.75</Table.Cell>
                            <Table.Cell>6</Table.Cell>
                          </Table.Row>
                          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                              <Button href='/Materias32' outline color="gray">{semestre5.laboral6}</Button>
                            </Table.Cell>
                            <Table.Cell>4</Table.Cell>
                            <Table.Cell>1</Table.Cell>
                            <Table.Cell>5</Table.Cell>
                            <Table.Cell>8</Table.Cell>
                          </Table.Row>
                          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                              <Button href='/Materias32' outline color="gray">{semestre5.curriculum5}</Button>
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
            <div className="mb-11 mt-11">
              <h1 className="dark:text-white text-xl p-2">Perfiles para el docente</h1>              
              <Accordion collapseAll>
                  <Accordion.Panel>
                    <Accordion.Title>La Energía en Procesos de la Vida Diaria</Accordion.Title>
                      <Accordion.Content >
                        <p className="mb-2 text-gray-500 font-bold dark:text-gray-400">
                          Licenciatura
                        </p>    
                        <div className="flex flex-wrap gap-2">
                          {
                            MI_licenciatura.map((lic) => {
                              return(
                                <div>
                                  <Badge className="bg-green-200 text-green-800 dark:bg-green-200 dark:text-green-800" key="lic">✅ {lic}</Badge>
                                </div>
                              )
                            })
                          }
                        </div>
                        <p className="mb-2 mt-10 text-gray-500 font-bold dark:text-gray-400">
                          Ingeneria
                        </p>    
                        <div className="flex flex-wrap gap-2">
                          {
                            MI_ingeneria.map((ing) => {
                              return(
                                <div>
                                  <Badge className="bg-blue-200 text-blue-800 dark:bg-blue-200 dark:text-blue-800" key="ing">✅ {ing}</Badge>
                                </div>
                              )
                            })
                          }
                        </div>
                        <p className="mb-2 mt-10 text-gray-500 font-bold dark:text-gray-400">
                          Maestria
                        </p>    
                        <div className="flex flex-wrap gap-2">
                          {
                            MI_maestria.map((mas) => {
                              return(
                                <div>
                                  <Badge className="bg-orange-200 text-orange-800 dark:bg-orange-200 dark:text-orange-800" key="mas">✅ {mas}</Badge>
                                </div>
                              )
                            })
                          }
                        </div>
                      </Accordion.Content>
                  </Accordion.Panel>
                  <Accordion.Panel>
                    <Accordion.Title>Conciencia Historica II. México Durante el Expansionismo Capitalista</Accordion.Title>
                      <Accordion.Content >
                        <p className="mb-2 text-gray-500 font-bold dark:text-gray-400">
                          Licenciatura
                        </p>    
                        <div className="flex flex-wrap gap-2">
                          {
                            CS_licenciatura.map((lic) => {
                              return(
                                <div>
                                  <Badge className="bg-green-200 text-green-800 dark:bg-green-200 dark:text-green-800" key="lic">✅ {lic}</Badge>
                                </div>
                              )
                            })
                          }
                        </div>
                        <p className="mb-2 mt-10 text-gray-500 font-bold dark:text-gray-400">
                          Ingeneria
                        </p>    
                        <div className="flex flex-wrap gap-2">
                          {
                            CS_ingeneria.map((ing) => {
                              return(
                                <div>
                                  <Badge className="bg-red-200 text-red-800 dark:bg-red-200 dark:text-red-800" key="ing">❌ {ing}</Badge>
                                </div>
                              )
                            })
                          }
                        </div>
                        <p className="mb-2 mt-10 text-gray-500 font-bold dark:text-gray-400">
                          Maestria
                        </p>    
                        <div className="flex flex-wrap gap-2">
                          {
                            CS_maestria.map((mas) => {
                              return(
                                <div>
                                  <Badge className="bg-orange-200 text-orange-800 dark:bg-orange-200 dark:text-orange-800" key="mas">✅ {mas}</Badge>
                                </div>
                              )
                            })
                          }
                        </div>
                      </Accordion.Content>
                  </Accordion.Panel>
                  <Accordion.Panel>
                    <Accordion.Title>**Extendido</Accordion.Title>
                      <Accordion.Content >
                        <p className="mb-2 text-gray-500 font-bold dark:text-gray-400">
                          Licenciatura
                        </p>    
                        <div className="flex flex-wrap gap-2">
                          {
                            CS_licenciatura.map((lic) => {
                              return(
                                <div>
                                  <Badge className="bg-green-200 text-green-800 dark:bg-green-200 dark:text-green-800" key="lic">✅ {lic}</Badge>
                                </div>
                              )
                            })
                          }
                        </div>
                        <p className="mb-2 mt-10 text-gray-500 font-bold dark:text-gray-400">
                          Ingeneria
                        </p>    
                        <div className="flex flex-wrap gap-2">
                          {
                            CS_ingeneria.map((ing) => {
                              return(
                                <div>
                                  <Badge className="bg-red-200 text-red-800 dark:bg-red-200 dark:text-red-800" key="ing">❌ {ing}</Badge>
                                </div>
                              )
                            })
                          }
                        </div>
                        <p className="mb-2 mt-10 text-gray-500 font-bold dark:text-gray-400">
                          Maestria
                        </p>    
                        <div className="flex flex-wrap gap-2">
                          {
                            CS_maestria.map((mas) => {
                              return(
                                <div>
                                  <Badge className="bg-orange-200 text-orange-800 dark:bg-orange-200 dark:text-orange-800" key="mas">✅ {mas}</Badge>
                                </div>
                              )
                            })
                          }
                        </div>
                      </Accordion.Content>
                  </Accordion.Panel>
                  <Accordion.Panel>
                    <Accordion.Title>**Extendido</Accordion.Title>
                      <Accordion.Content >
                        <p className="mb-2 text-gray-500 font-bold dark:text-gray-400">
                          Licenciatura
                        </p>    
                        <div className="flex flex-wrap gap-2">
                          {
                            CS_licenciatura.map((lic) => {
                              return(
                                <div>
                                  <Badge className="bg-green-200 text-green-800 dark:bg-green-200 dark:text-green-800" key="lic">✅ {lic}</Badge>
                                </div>
                              )
                            })
                          }
                        </div>
                        <p className="mb-2 mt-10 text-gray-500 font-bold dark:text-gray-400">
                          Ingeneria
                        </p>    
                        <div className="flex flex-wrap gap-2">
                          {
                            CS_ingeneria.map((ing) => {
                              return(
                                <div>
                                  <Badge className="bg-red-200 text-red-800 dark:bg-red-200 dark:text-red-800" key="ing">❌ {ing}</Badge>
                                </div>
                              )
                            })
                          }
                        </div>
                        <p className="mb-2 mt-10 text-gray-500 font-bold dark:text-gray-400">
                          Maestria
                        </p>    
                        <div className="flex flex-wrap gap-2">
                          {
                            CS_maestria.map((mas) => {
                              return(
                                <div>
                                  <Badge className="bg-orange-200 text-orange-800 dark:bg-orange-200 dark:text-orange-800" key="mas">✅ {mas}</Badge>
                                </div>
                              )
                            })
                          }
                        </div>
                      </Accordion.Content>
                  </Accordion.Panel>
                  <Accordion.Panel>
                    <Accordion.Title>**Extendido</Accordion.Title>
                      <Accordion.Content >
                        <p className="mb-2 text-gray-500 font-bold dark:text-gray-400">
                          Licenciatura
                        </p>    
                        <div className="flex flex-wrap gap-2">
                          {
                            CS_licenciatura.map((lic) => {
                              return(
                                <div>
                                  <Badge className="bg-green-200 text-green-800 dark:bg-green-200 dark:text-green-800" key="lic">✅ {lic}</Badge>
                                </div>
                              )
                            })
                          }
                        </div>
                        <p className="mb-2 mt-10 text-gray-500 font-bold dark:text-gray-400">
                          Ingeneria
                        </p>    
                        <div className="flex flex-wrap gap-2">
                          {
                            CS_ingeneria.map((ing) => {
                              return(
                                <div>
                                  <Badge className="bg-red-200 text-red-800 dark:bg-red-200 dark:text-red-800" key="ing">❌ {ing}</Badge>
                                </div>
                              )
                            })
                          }
                        </div>
                        <p className="mb-2 mt-10 text-gray-500 font-bold dark:text-gray-400">
                          Maestria
                        </p>    
                        <div className="flex flex-wrap gap-2">
                          {
                            CS_maestria.map((mas) => {
                              return(
                                <div>
                                  <Badge className="bg-orange-200 text-orange-800 dark:bg-orange-200 dark:text-orange-800" key="mas">✅ {mas}</Badge>
                                </div>
                              )
                            })
                          }
                        </div>
                      </Accordion.Content>
                  </Accordion.Panel>
                  <Accordion.Panel>
                    <Accordion.Title>**Extendido</Accordion.Title>
                      <Accordion.Content >
                        <p className="mb-2 text-gray-500 font-bold dark:text-gray-400">
                          Licenciatura
                        </p>    
                        <div className="flex flex-wrap gap-2">
                          {
                            CS_licenciatura.map((lic) => {
                              return(
                                <div>
                                  <Badge className="bg-green-200 text-green-800 dark:bg-green-200 dark:text-green-800" key="lic">✅ {lic}</Badge>
                                </div>
                              )
                            })
                          }
                        </div>
                        <p className="mb-2 mt-10 text-gray-500 font-bold dark:text-gray-400">
                          Ingeneria
                        </p>    
                        <div className="flex flex-wrap gap-2">
                          {
                            CS_ingeneria.map((ing) => {
                              return(
                                <div>
                                  <Badge className="bg-red-200 text-red-800 dark:bg-red-200 dark:text-red-800" key="ing">❌ {ing}</Badge>
                                </div>
                              )
                            })
                          }
                        </div>
                        <p className="mb-2 mt-10 text-gray-500 font-bold dark:text-gray-400">
                          Maestria
                        </p>    
                        <div className="flex flex-wrap gap-2">
                          {
                            CS_maestria.map((mas) => {
                              return(
                                <div>
                                  <Badge className="bg-orange-200 text-orange-800 dark:bg-orange-200 dark:text-orange-800" key="mas">✅ {mas}</Badge>
                                </div>
                              )
                            })
                          }
                        </div>
                      </Accordion.Content>
                  </Accordion.Panel>
                  <Accordion.Panel>
                    <Accordion.Title>Laboral Básico</Accordion.Title>
                      <Accordion.Content >
                        <p className="mb-2 text-gray-500 font-bold dark:text-gray-400">
                          Licenciatura
                        </p>    
                        <div className="flex flex-wrap gap-2">
                          {
                            CS_licenciatura.map((lic) => {
                              return(
                                <div>
                                  <Badge className="bg-green-200 text-green-800 dark:bg-green-200 dark:text-green-800" key="lic">✅ {lic}</Badge>
                                </div>
                              )
                            })
                          }
                        </div>
                        <p className="mb-2 mt-10 text-gray-500 font-bold dark:text-gray-400">
                          Ingeneria
                        </p>    
                        <div className="flex flex-wrap gap-2">
                          {
                            CS_ingeneria.map((ing) => {
                              return(
                                <div>
                                  <Badge className="bg-red-200 text-red-800 dark:bg-red-200 dark:text-red-800" key="ing">❌ {ing}</Badge>
                                </div>
                              )
                            })
                          }
                        </div>
                        <p className="mb-2 mt-10 text-gray-500 font-bold dark:text-gray-400">
                          Maestria
                        </p>    
                        <div className="flex flex-wrap gap-2">
                          {
                            CS_maestria.map((mas) => {
                              return(
                                <div>
                                  <Badge className="bg-orange-200 text-orange-800 dark:bg-orange-200 dark:text-orange-800" key="mas">✅ {mas}</Badge>
                                </div>
                              )
                            })
                          }
                        </div>
                      </Accordion.Content>
                  </Accordion.Panel>
                  <Accordion.Panel>
                    <Accordion.Title>Laboral Básico</Accordion.Title>
                      <Accordion.Content >
                        <p className="mb-2 text-gray-500 font-bold dark:text-gray-400">
                          Licenciatura
                        </p>    
                        <div className="flex flex-wrap gap-2">
                          {
                            CS_licenciatura.map((lic) => {
                              return(
                                <div>
                                  <Badge className="bg-green-200 text-green-800 dark:bg-green-200 dark:text-green-800" key="lic">✅ {lic}</Badge>
                                </div>
                              )
                            })
                          }
                        </div>
                        <p className="mb-2 mt-10 text-gray-500 font-bold dark:text-gray-400">
                          Ingeneria
                        </p>    
                        <div className="flex flex-wrap gap-2">
                          {
                            CS_ingeneria.map((ing) => {
                              return(
                                <div>
                                  <Badge className="bg-red-200 text-red-800 dark:bg-red-200 dark:text-red-800" key="ing">❌ {ing}</Badge>
                                </div>
                              )
                            })
                          }
                        </div>
                        <p className="mb-2 mt-10 text-gray-500 font-bold dark:text-gray-400">
                          Maestria
                        </p>    
                        <div className="flex flex-wrap gap-2">
                          {
                            CS_maestria.map((mas) => {
                              return(
                                <div>
                                  <Badge className="bg-orange-200 text-orange-800 dark:bg-orange-200 dark:text-orange-800" key="mas">✅ {mas}</Badge>
                                </div>
                              )
                            })
                          }
                        </div>
                      </Accordion.Content>
                  </Accordion.Panel>
                  <Accordion.Panel>
                    <Accordion.Title> - Curriculum Ampliado</Accordion.Title>
                      <Accordion.Content >
                        <p className="mb-2 text-gray-500 font-bold dark:text-gray-400">
                          Licenciatura
                        </p>    
                        <div className="flex flex-wrap gap-2">
                          {
                            CS_licenciatura.map((lic) => {
                              return(
                                <div>
                                  <Badge className="bg-green-200 text-green-800 dark:bg-green-200 dark:text-green-800" key="lic">✅ {lic}</Badge>
                                </div>
                              )
                            })
                          }
                        </div>
                        <p className="mb-2 mt-10 text-gray-500 font-bold dark:text-gray-400">
                          Ingeneria
                        </p>    
                        <div className="flex flex-wrap gap-2">
                          {
                            CS_ingeneria.map((ing) => {
                              return(
                                <div>
                                  <Badge className="bg-red-200 text-red-800 dark:bg-red-200 dark:text-red-800" key="ing">❌ {ing}</Badge>
                                </div>
                              )
                            })
                          }
                        </div>
                        <p className="mb-2 mt-10 text-gray-500 font-bold dark:text-gray-400">
                          Maestria
                        </p>    
                        <div className="flex flex-wrap gap-2">
                          {
                            CS_maestria.map((mas) => {
                              return(
                                <div>
                                  <Badge className="bg-orange-200 text-orange-800 dark:bg-orange-200 dark:text-orange-800" key="mas">✅ {mas}</Badge>
                                </div>
                              )
                            })
                          }
                        </div>
                      </Accordion.Content>
                  </Accordion.Panel>
                </Accordion>
            </div>
        </div>
      </div>
      <Outlet/>
    </div>
  )
}

export default Quinto
