export default {
  global: {
    Name:
      'Gestión sostenible y bienestar animal en la producción de especies menores',
    Description:
      'El componente formativo presenta la clasificación zoológica como fundamento para identificar y organizar especies menores usadas en Colombia: cuy, conejo, aves, codorniz, cabra y oveja. Comprender esta jerarquía, de reino a especie, facilita manejo técnico, reproducción, nutrición, sanidad y trazabilidad, además de apoyar el cumplimiento normativo. También integra taxonomía, origen y ciclos productivos para orientar decisiones sostenibles y fortalecer bienestar animal.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Clasificación biológica de las especies menores',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto de clasificación zoológica',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Taxonomía general de las especies pecuarias menores',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Ciclo productivo de las especies menores',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Etapas comunes del ciclo productivo',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Ciclo productivo del cuy (<em>Cavia porcellus</em>)',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo:
              'Ciclo productivo del conejo (<em>Oryctolagus cuniculus</em>)',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo:
              'Ciclo productivo de las aves de corral (<em>Gallus gallus domesticus</em>)',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo:
              'Ciclo productivo de la codorniz (<em>Coturnix coturnix japonica</em>)',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo: 'Ciclo productivo de la cabra (<em>Capra hircus</em>)',
            hash: 't_2_6',
          },
          {
            numero: '2.7',
            titulo: 'Ciclo productivo de la oveja (<em>Ovis aries</em>)',
            hash: 't_2_7',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Aptitud productiva y parámetros zootécnicos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Definición de aptitud productiva',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo:
              'Producción de carne, leche, huevos y fibra (por especie menor)',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo:
              'Comparativo de indicadores productivos entre especies menores',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Rendimiento y conversión alimenticia',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Razas y líneas genéticas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Clasificación técnica del cuy: tipos y líneas',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Tipos morfológicos de cuyes',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Líneas genéticas del cuy',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Relevancia y adaptación en Colombia',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Aves de corral (razas de postura y engorde)',
            hash: 't_4_5',
          },
          {
            numero: '4.6',
            titulo: 'Codornices (líneas japonesas y comerciales)',
            hash: 't_4_6',
          },
          {
            numero: '4.7',
            titulo:
              'Cabras (<em>Capra hircus</em>): Razas lecheras, cárnicas y criollas',
            hash: 't_4_7',
          },
          {
            numero: '4.8',
            titulo:
              'Ovejas (<em>Ovis aries</em>): Razas de lana, carne y doble propósito',
            hash: 't_4_8',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Importancia económica y social de la producción menor',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo:
              'Rol de las especies menores en la economía familiar y rural',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Producción sostenible y su impacto ambiental positivo',
            hash: 't_5_2',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Buenas Prácticas Pecuarias (BPP) en especies menores',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Concepto y principios de las Buenas Prácticas Pecuarias  ',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Objetivos de las BPP en especies menores',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Componentes esenciales de las BPP',
            hash: 't_6_3',
          },
          {
            numero: '6.4',
            titulo: 'Trazabilidad en las cadenas productivas',
            hash: 't_6_4',
          },
          {
            numero: '6.5',
            titulo: 'Trazabilidad en las cadenas productivas',
            hash: 't_6_5',
          },
          {
            numero: '6.6',
            titulo: 'Trazabilidad en las cadenas productivas',
            hash: 't_6_6',
          },
          {
            numero: '6.7',
            titulo: 'Aplicación normativa por especie',
            hash: 't_6_7',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Clasificación biológica de las especies menores',
      referencia:
        'Instituto Colombiano Agropecuario – ICA. (2020). <em>Resolución 067449 de 2020: Por la cual se establecen los requisitos para la certificación en Buenas Prácticas Pecuarias (BPP) en la producción primaria de especies menores</em>. Bogotá, Colombia.',
      tipo: 'Documento normativo',
      link:
        'https://www.ica.gov.co/getattachment/6b7f82ab-bccd-4bf5-a5c6-5bfff35b772b/2020R67449.aspx',
    },
    {
      tema: 'Ciclo productivo del cuy (Cavia porcellus)',
      referencia:
        'Ministerio de Agricultura y Desarrollo Rural. (2022, 9 de junio). <em>Manual de condiciones de bienestar animal en la producción de conejos y/o cuyes en el sector agropecuario (MN-IDP-05)</em>. Bogotá, Colombia.',
      tipo: 'Manual técnico',
      link:
        'https://www.minagricultura.gov.co/SIG/DocumentosSIG/12GESTION_DE_INNOVACION_DES_TECN_Y_PROTECCION_SANITARIA/Manual%20Condiciones%20de%20Bienestar%20Animal%20en%20la%20Produccio%CC%81n%20de%20Conejos%20y-o%20Cuyes%20en%20el%20Sector%20Agropecuario%20V1.pdf',
    },
    {
      tema: 'Aptitud productiva y parámetros zootécnicos',
      referencia:
        'Ministerio de Salud y Protección Social – INVIMA. (2007). <em>Decreto 1500 de 2007: Por el cual se establece el reglamento técnico para el sistema oficial de inspección, vigilancia y control de carne y productos cárnicos comestibles</em>.',
      tipo: 'Documento normativo',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=38923',
    },
  ],
  glosario: [
    {
      termino: 'Aptitud productiva',
      significado:
        'Capacidad de un animal para producir carne, leche, huevos o fibra eficientemente.',
    },
    {
      termino: 'Bienestar animal',
      significado:
        'Estado físico y mental adecuado del animal bajo condiciones óptimas de manejo.',
    },
    {
      termino: 'Bioseguridad',
      significado:
        'Conjunto de medidas para prevenir y controlar enfermedades en unidades pecuarias.',
    },
    {
      termino: 'Buenas Prácticas Pecuarias (BPP)',
      significado:
        'Normas que aseguran producción inocua, sostenible y responsable de animales y alimentos.',
    },
    {
      termino: 'Conversión alimenticia',
      significado:
        'Relación entre alimento consumido y peso corporal ganado por el animal.',
    },
    {
      termino: 'Cunicultura',
      significado: 'Cría y manejo técnico de conejos con fines productivos.',
    },
    {
      termino: 'Especies menores',
      significado:
        'Animales de pequeño tamaño utilizados en producción pecuaria: cuyes, aves, cabras, etc.',
    },
    {
      termino: 'Inocuidad alimentaria',
      significado:
        'Condición que garantiza que los alimentos no representen riesgo para la salud.',
    },
    {
      termino: 'Normatividad sanitaria',
      significado:
        'Conjunto de leyes y resoluciones que regulan la sanidad y seguridad agropecuaria.',
    },
    {
      termino: 'Ovinos',
      significado:
        'Especie pecuaria productora de carne, lana y leche; incluye ovejas y carneros.',
    },
    {
      termino: 'Productividad',
      significado:
        'Nivel de eficiencia en la obtención de productos animales por unidad de tiempo.',
    },
    {
      termino: 'Raza',
      significado:
        'Grupo de animales con características genéticas y morfológicas comunes.',
    },
    {
      termino: 'Trazabilidad',
      significado:
        'Seguimiento del producto animal desde su origen hasta el consumidor final.',
    },
    {
      termino: 'Valor agregado',
      significado:
        'Mejora o transformación que incrementa el valor comercial de un producto pecuario.',
    },
  ],
  referencias: [
    {
      referencia:
        'Agrosavia. (2022). <em>Manual técnico de Buenas Prácticas Pecuarias para sistemas familiares rurales</em>. Mosquera, Colombia.',
      link: '',
    },
    {
      referencia:
        'Agrosavia. (2023). <em>Producción pecuaria sostenible en especies menores</em>. Corporación Colombiana de Investigación Agropecuaria.',
      link: '',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (1989). <em>Ley 84: Estatuto Nacional de Protección Animal</em>. Diario Oficial.',
      link: '',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2016). <em>Ley 1774: Protección y bienestar animal</em>. Diario Oficial.',
      link: '',
    },
    {
      referencia:
        'FAO. (2023). <em>Bienestar animal y sostenibilidad en América Latina</em>. Organización de las Naciones Unidas para la Alimentación y la Agricultura.',
      link: '',
    },
    {
      referencia:
        'Guerra León, C. R. (s. f.). <em>Manual técnico de crianza de cuyes</em>. Proyecto de Desarrollo Rural Sostenible.',
      link:
        'https://www.cedepas.org.pe/sites/default/files/manual_tecnico_de_crianza_de_cuyes.pdf',
    },
    {
      referencia:
        'ICA — Instituto Colombiano Agropecuario. (2024). <em>Guía nacional de implementación y certificación de Buenas Prácticas Pecuarias (BPP)</em>. ICA.',
      link: '',
    },
    {
      referencia:
        'ICA — Instituto Colombiano Agropecuario. (2024). <em>Resoluciones y lineamientos para producción, bienestar e inocuidad en especies menores (Resolución No. 00016416; Programa Nacional Ovino-Caprino)</em>.',
      link:
        'https://www.ica.gov.co/getattachment/1ea4c816-7e31-41c9-9b88-166dd254caf4/2024R00016409.aspx',
    },
    {
      referencia:
        'Ministerio de Agricultura y Desarrollo Rural (MADR). (2020). <em>Resolución ICA 067449 de 2020</em>. Diario Oficial de Colombia.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Agricultura y Desarrollo Rural (MADR). (2022). <em>Resolución 000205 de 2022 — Manual de bienestar para conejos y cuyes</em>. Gobierno de Colombia.',
      link:
        'https://www.minagricultura.gov.co/Normatividad/Resoluciones/RESOLUCI%C3%93N%20NO.%20000205%20DE%202022.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
