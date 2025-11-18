<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Razas y líneas genéticas
    
    .row.mb-5
      .col-lg-3.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/2.png", data-aos="zoom-in")
      .col-lg-9.order-lg-1
        p(data-aos="fade-left") Una raza en animales domésticos puede definirse como un conjunto de individuos con características fenotípicas, genéticas y productivas homogéneas, que las transmiten a su descendencia y han sido reproducidos bajo un programa de selección reconocido.

        .bg-color-24.mb-3(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/tema4/1.svg', alt='')
            .col-lg
              .p-4
                p.mb-0(data-aos="fade-up") Una línea (o “línea genética”) es un subconjunto dentro de una raza o el resultado de cruces seleccionados, caracterizado por una trayectoria de selección más específica hacia un objetivo técnico concreto (por ejemplo, mayor crecimiento, prolificidad o adaptación ambiental). A diferencia de las razas, las líneas no siempre están completamente fijadas y se utilizan como herramienta para mejorar la productividad de los sistemas.
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema4/3.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 En la producción de cuyes, por ejemplo, muchas denominaciones como “Perú”, “Andina”, “Inti” o “Kuri” se refieren a líneas mejoradas, más que a razas oficialmente reconocidas. Esta distinción es clave para el manejo genético, los planes de cruzamiento, la trazabilidad y el aumento sostenido del rendimiento.
    
    separador
    
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.1 Clasificación técnica del cuy: tipos y líneas
    
    p.mb-5 Según Guerra León (2009), en la producción de cuyes se reconocen dos criterios fundamentales para su clasificación: los tipos morfológicos y las líneas genéticas o productivas.

    .row.mb-5.justify-content-center.mb-3
      .col-sm-6.col-lg-4.mb-4.mb-lg-0(data-aos="fade-down")
        .tarjeta--boton.bg-color-3.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema4/5.svg', alt='Texto que describa la imagen')
          p.text-center <b>Los tipos morfológicos</b> responden a características visibles del animal, como la longitud y el arreglo del pelaje.
    
      .col-sm-6.col-lg-4.mb-4.mb-lg-0(data-aos="fade-up")
        .tarjeta--boton.bg-color-3.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema4/6.svg', alt='Texto que describa la imagen')
          p.text-center <b>Las líneas genéticas</b> resultan de la selección dirigida con fines productivos, como carne, prolificidad, rusticidad o adaptación climática.
    
      .col-sm-6.col-lg-4.mb-4.mb-sm-0(data-aos="fade-down")
        figure
          img(src='@/assets/curso/tema4/4.png', alt='Texto que describa la imagen')
      
    p Conocer ambos criterios es fundamental para establecer sistemas de selección, garantizar uniformidad genética en los planteles reproductores y mejorar progresivamente la eficiencia del sistema productivo.

    .bg-full-width.bg-fondo-3
      .px-4.px-md-5
        separador
        
        #t_4_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 4.2 Tipos morfológicos de cuyes
        
        p.mb-5 Los tipos morfológicos están determinados por el tipo de pelaje y se utilizan como referencia visual para clasificar los animales dentro de las líneas genéticas. A continuación, se resumen los cuatro tipos principales:

        .row.justify-content-center.mb-5.align-items-center
          .col-lg-7.mb-3.mb-lg-0.order-lg-2
            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema4/8.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Tipo 1
                p.text-center Pelo lacio, corto y pegado al cuerpo. Es el más común en sistemas productivos y constituye la base de líneas como Perú, Andina, Inti y Kuri.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema4/8.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Tipo 2
                p.text-center Pelo corto, lacio y con rosetas irregulares. Tiene menor valor productivo y se utiliza principalmente en exhibición o como mascota.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema4/8.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Tipo 3
                p.text-center Pelo largo, lacio e irregular. Requiere mayor mantenimiento y presenta escasa presencia en la producción de carne.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema4/8.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Tipo 4
                p.text-center Pelo erizado o crespo. Es poco frecuente y puede emplearse ocasionalmente para selección genética experimental. 
          .col-lg-4.order-lg-1
            figure
              img(src='@/assets/curso/tema4/7.png', alt='')
    
    separador
    
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.3 Líneas genéticas del cuy
        
    p.mb-5 Las líneas genéticas son el resultado de programas de mejoramiento diseñados para aumentar la productividad en carne, prolificidad o adaptabilidad. A continuación, se describen las principales líneas presentes en sistemas tecnificados y familiares de Colombia y la región andina.

    .bg-full-width.bg-color-7
      .px-4.px-md-5
        .row.align-items-start.mb-5
          .col-lg-4.mb-3.mb-lg-0.order-lg-2
            figure
              img(src="@/assets/curso/tema4/9.png", alt="").mb-4.mb-lg-0
          .col-lg-8.order-lg-1
            AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-14")
              .div(titulo="Línea Perú")
                p Línea ampliamente utilizada en sistemas comerciales por su precocidad y rendimiento cárnico. 
                ul.lista-ul--color.mb-0
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 <b>Tipo morfológico</b>: Tipo 1. 
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 <b>Color característico</b>: Alazán puro o combinado con blanco. 
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 <b>Prolificidad</b>: Promedio de 3 crías por parto. 
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 <b>Aptitud productiva</b>: Carne. 
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 <b>Características</b>: Cuerpo compacto, buena masa muscular y crecimiento acelerado. Originaria de Perú y difundida mediante programas de mejoramiento genético. 
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 <b>Parámetros estimados</b>: 800-1000 g en 9-10 semanas; camada de 3-4 crías.
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 <b>Ventajas</b>: Buena adaptación a zonas andinas y alto rendimiento. 
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 <b>Desventajas</b>: Requiere manejo técnico adecuado y puede presentar mayor mortalidad neonatal frente a líneas más recientes.
              .div(titulo="Línea Andina")
                p Línea con excelente adaptación a la altura, reconocida por su prolificidad y rusticidad. 
                ul.lista-ul--color.mb-0
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 <b>Tipo morfológico</b>: Tipo 1. 
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 <b>Color característico</b>: Blanco puro. 
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 <b>Prolificidad</b>: 5 crías por parto (superior al promedio). 
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 <b>Aptitud productiva</b>: Carne y rusticidad. 
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 <b>Características</b>: Adaptada a zonas frías y de altitud, con excelente fertilidad. 
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 <b>Parámetros estimados</b>: 3.8-4 crías por camada; crecimiento aceptable en climas fríos. 
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 <b>Ventajas</b>: Alta prolificidad y rusticidad en sistemas familiares. 
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 <b>Desventajas</b>: Disminuye productividad en climas cálidos; requiere adaptación al trasladarse a otras zonas.
              .div(titulo="Línea Inti")
                p Desarrollada para ofrecer buena prolificidad con menor mortalidad neonatal. 
                ul.lista-ul--color.mb-0
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 <b>Tipo morfológico</b>: Tipo 1. 
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 <b>Color característico</b>: Bayo puro o combinado con blanco. 
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 <b>Prolificidad</b>: 3-4 crías por parto. 
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 <b>Aptitud productiva</b>: Carne y reproducción. 
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 <b>Características</b>: Precocidad, buena sobrevivencia y adaptabilidad; línea intermedia entre Perú y Andina. 
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 <b>Parámetros estimados</b>: 800 g en 10 semanas; mortalidad neonatal cercana al 9 %. 
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 <b>Ventajas</b>: Menor mortalidad, crecimiento estable y buena adaptación climática. 
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 <b>Desventajas</b>: Requiere trazabilidad genética para conservar sus características.
              .div(titulo="Línea Kuri")
                p Una de las líneas más modernas, adaptada a condiciones locales del sur de Colombia.  
                ul.lista-ul--color.mb-0
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 <b>Tipo morfológico</b>: Tipo 1. 
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 <b>Color característico</b>: Marrón rojizo (bayo), con posibles manchas blancas. 
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 <b>Prolificidad</b>: 3-4 crías por parto (constante).  
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 <b>Aptitud productiva</b>: Carne y reproducción, ideal para sistemas familiares y tecnificados. 
                h5 Características productivas:
                ul.lista-ul--color.mb-0  
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 <b>Peso al nacimiento</b>: 12-130 g. 
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 <b>Peso al destete (21 días)</b>: 35-400 g. 
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 <b>Peso al sacrificio (70 días)</b>: 85-1000 g. 
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 <b>Rendimiento en canal</b>: 65-70 %. 
                p <b>Particularidades</b>: Alta sobrevivencia neonatal, adaptación a zonas templadas y frías del sur andino colombiano (Nariño, Cauca, Putumayo), buena respuesta a dietas locales y forraje, desarrollada por programas de mejoramiento en Perú y Ecuador, introducida a Colombia vía cooperación. 
                p <b>Ventajas</b>: Excelente rendimiento, crecimiento rápido y estable, ideal para venta comercial o consumo familiar. 
                p <b>Desventajas</b>: Mayor costo inicial de reproductores requiere manejo técnico para mantener ventajas productivas y disponibilidad limitada en algunas regiones.

        separador
        
        #t_4_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 4.4 Relevancia y adaptación en Colombia
        
        .row.mb-5.align-items-center
          .col-lg-5.mb-3.mb-lg-0.order-lg-2
            figure
              img(src="@/assets/curso/tema4/10.png", data-aos="zoom-in")
          .col-lg-7.order-lg-1
            p La implementación de líneas genéticas desarrolladas en otros países requiere procesos de adaptación y validación local. Aunque el Manual técnico de crianza de cuyes fue desarrollado en Cajamarca (Perú), estas mismas líneas y tipos han sido difundidos y adaptados en sistemas colombianos familiares y semi-comerciales, especialmente en departamentos andinos como Nariño, Cauca y Huila. En estas regiones se mantienen programas de selección local coordinados con Agrosavia y entidades territoriales. En Colombia se reporta el uso de:
            .bg-color-10.p-4.tarjeta(data-aos="fade-up")
              .row.justify-content-center.align-items-center
                .col-lg-auto.mb-3.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema4/11.svg', alt='')
                .col-lg
                  .p-3.bg-color-white.tarjeta
                    ul.lista-ul--color.mb-0
                      li.mb-3.d-flex
                        i.fa-solid.fa-circle-check
                        p.mb-0 Líneas adaptadas como Perú, Andina e Inti, ya sea importadas o cruzadas con razas criollas locales.
                      li.mb-3.d-flex
                        i.fa-solid.fa-circle-check
                        p.mb-0 Razas criollas colombianas seleccionadas empíricamente, con prolificidad media (2-3 crías por parto) y alta rusticidad.

        p.mb-5 Las entidades Agrosavia (2022) y el ICA (2024) recomiendan fortalecer los registros productivos, la trazabilidad genética y la selección con base en prolificidad y ganancia diaria de peso, con el fin de avanzar hacia la formalización de líneas colombianas propias.

        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
            h3.titulo-con-imagen__texto Razas más significativas de conejos

    .row.mb-5.align-items-center
      .col-lg-5.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema4/12.png", data-aos="zoom-in")
      .col-lg-7.order-lg-1
        p La producción cunícola en Colombia ha crecido como alternativa rentable y sostenible dentro de sistemas agropecuarios familiares y semi-intensivos. El conejo doméstico (Oryctolagus cuniculus) destaca por su alta eficiencia biológica: gestación corta (30-32 días), madurez sexual temprana (4-5 meses) y conversión alimenticia favorable, lo que permite múltiples partos al año y rápida recuperación de inversión.
        .bg-color-5.mb-3
          .px-4.px-md-5.py-4
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema4/13.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 En Colombia, los principales departamentos productores son Cundinamarca, Antioquia, Valle del Cauca, Nariño, Cauca, Huila, Tolima y Santander. Las asociaciones rurales, universidades y AGROSAVIA han impulsado programas de mejoramiento genético y capacitación técnica. Los objetivos productivos más frecuentes son:
        .bg-color-11.p-4.tarjeta(data-aos="fade-up")
          .bg-color-white.tarjeta.p-4
            ul.lista-ul--color.mb-0
              li.mb-2.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 Producción de carne magra y de alta calidad nutricional.
              li.mb-2.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 Generación de pie de cría mejorado para sistemas rurales.
              li.mb-0.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 Aprovechamiento de piel, estiércol y orina como insumos agrícolas o artesanales.
    
    p.mb-5 Las razas utilizadas en Colombia se agrupan en tres grandes categorías:

    .row.mb-5.justify-content-center.mb-3
      .col-sm-6.col-lg-3.mb-4.mb-sm-0(data-aos="fade-down")
        figure
          img(src='@/assets/curso/tema4/14.png', alt='Texto que describa la imagen')
      .col-sm-6.col-lg-3.mb-4.mb-lg-0(data-aos="fade-down")
        .tarjeta--boton.bg-color-3.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema4/15.svg', alt='Texto que describa la imagen')
          h5.text-center Razas cárnicas
          p.text-center Rendimiento de canal, engorde, precocidad
      .col-sm-6.col-lg-3.mb-4.mb-lg-0(data-aos="fade-up")
        .tarjeta--boton.bg-color-3.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema4/16.svg', alt='Texto que describa la imagen')
          h5.text-center Razas mixtas
          p.text-center Carne + piel o carne + rusticidad
      .col-sm-6.col-lg-3.mb-4.mb-lg-0(data-aos="fade-up")
        .tarjeta--boton.bg-color-3.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema4/17.svg', alt='Texto que describa la imagen')
          h5.text-center Razas criollas
          p.text-center Adaptación local, rusticidad, bajo costo
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Razas cárnicas
    
    p.mb-5 Estas razas se destacan por su rápido crecimiento, alta eficiencia alimenticia y buen rendimiento en canal. Son ideales para sistemas intensivos orientados a la producción de carne.

    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/18.png", alt="").mb-4.mb-lg-0
      .col-lg-8
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-14")
          .div(titulo="Nueva Zelanda Blanca")
            ul.lista-ul--color.mb-0
              li.mb-2.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Origen:</b> Estados Unidos.  
              li.mb-2.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Color:</b> Blanco puro con ojos rosados. 
              li.mb-2.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Peso adulto</b>: 4,0-5,0 kg. 
            h5 Características técnicas:
            ul.lista-ul--color.mb-0.ms-3 
              li.mb-2.d-flex
                i.fa-solid.fa-circle.bg-color-18
                p.mb-0 Prolificidad: 8-10 gazapos por parto. 
              li.mb-2.d-flex
                i.fa-solid.fa-circle.bg-color-18
                p.mb-0 Ganancia diaria: 35-40 g/día.  
              li.mb-2.d-flex
                i.fa-solid.fa-circle.bg-color-18
                p.mb-0 FCR: 3:1. 
              li.mb-2.d-flex
                i.fa-solid.fa-circle.bg-color-18
                p.mb-0 Rendimiento de canal: 55-60 %.  
              li.mb-2.d-flex
                i.fa-solid.fa-circle.bg-color-18
                p.mb-0 Excelente instinto maternal y adaptabilidad.
            ul.lista-ul--color.mb-0
              li.mb-2.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Aptitud</b>: Carne.   
              li.mb-2.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Particularidad</b>: Ideal para cruzamientos terminales con razas como el Californiano.  
          .div(titulo="Californiano")
            ul.lista-ul--color.mb-0
              li.mb-2.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Origen:</b> California, EE. UU.  
              li.mb-2.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Color:</b> Blanco con manchas en orejas, nariz, patas y cola.  
              li.mb-2.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Peso adulto</b>: 3,5-4,5 kg.  
            h5 Características:
            ul.lista-ul--color.mb-0.ms-3 
              li.mb-2.d-flex
                i.fa-solid.fa-circle.bg-color-18
                p.mb-0 Prolificidad:  7-9. 
              li.mb-2.d-flex
                i.fa-solid.fa-circle.bg-color-18
                p.mb-0 FCR: 3:1. 
              li.mb-2.d-flex
                i.fa-solid.fa-circle.bg-color-18
                p.mb-0 Rendimiento de canal: 55-58 %.   
              li.mb-2.d-flex
                i.fa-solid.fa-circle.bg-color-18
                p.mb-0 Raza compacta y precoz. 
            ul.lista-ul--color.mb-0
              li.mb-2.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Aptitud</b>: Carne y pie de cría.  
              li.mb-2.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Particularidad</b>: Base genética común en Colombia.
          .div(titulo="Gigante de Flandes")
            ul.lista-ul--color.mb-0
              li.mb-2.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Origen:</b> Bélgica.   
              li.mb-2.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Color:</b> Gris, arena, negro o leonado.   
              li.mb-2.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Peso adulto</b>: 6-8 kg.   
            h5 Características:
            ul.lista-ul--color.mb-0.ms-3 
              li.mb-2.d-flex
                i.fa-solid.fa-circle.bg-color-18
                p.mb-0 Prolificidad: 6-8.  
              li.mb-2.d-flex
                i.fa-solid.fa-circle.bg-color-18
                p.mb-0 FCR: 3,5:1. 
              li.mb-2.d-flex
                i.fa-solid.fa-circle.bg-color-18
                p.mb-0 Rendimiento: 60 %.   
              li.mb-2.d-flex
                i.fa-solid.fa-circle.bg-color-18
                p.mb-0 Carne con mayor proporción ósea. 
            ul.lista-ul--color.mb-0
              li.mb-2.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Aptitud</b>: Carne y exhibición.  
              li.mb-2.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Particularidad</b>: Requiere mayor espacio y buena ventilación.
          .div(titulo="León de Borgoña")
            ul.lista-ul--color.mb-0
              li.mb-2.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Origen:</b> Francia.  
              li.mb-2.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Color:</b> Rojo intenso.  
              li.mb-2.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Peso adulto</b>: 4-4,5 kg. 
            h5 Características:
            ul.lista-ul--color.mb-0.ms-3 
              li.mb-2.d-flex
                i.fa-solid.fa-circle.bg-color-18
                p.mb-0 Prolificidad: 8-10. 
              li.mb-2.d-flex
                i.fa-solid.fa-circle.bg-color-18
                p.mb-0 Carne magra de excelente terneza.  
            ul.lista-ul--color.mb-0
              li.mb-2.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Aptitud</b>: Carne y cruzamientos.   
              li.mb-2.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Particularidad</b>: Buen desempeño en altitudes medias.
          
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Razas mixtas de conejos

    p.mb-5 Estas razas se caracterizan por su doble propósito, combinando buenas cualidades cárnicas con pieles de valor comercial y una notable rusticidad.

    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Chinchilla Gigante" :icono="require('@/assets/componentes/10.svg')")
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4 Chinchilla Gigante
            ul.lista-ul--color.mb-0
              li.mb-2.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Origen:</b> Francia.    
              li.mb-2.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Color:</b> Gris perla con reflejos plateados.    
              li.mb-2.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Peso adulto</b>: 4,5-6 kg.   
            h5 Características:
            ul.lista-ul--color.mb-0.ms-3 
              li.mb-2.d-flex
                i.fa-solid.fa-circle.bg-color-18
                p.mb-0 Prolificidad: 6-8. 
              li.mb-2.d-flex
                i.fa-solid.fa-circle.bg-color-18
                p.mb-0 FCR: 3,2:1.  
              li.mb-2.d-flex
                i.fa-solid.fa-circle.bg-color-18
                p.mb-0 Rendimiento: 55 %.   
              li.mb-2.d-flex
                i.fa-solid.fa-circle.bg-color-18
                p.mb-0 Piel reconocida por su calidad. 
            ul.lista-ul--color.mb-0
              li.mb-2.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Aptitud</b>: Carne y piel. 
              li.mb-2.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Particularidad</b>: Muy utilizada en artesanía por la calidad de su pelaje.
          .col-md-5
            figure
              img(src='@/assets/curso/tema4/19.png', alt='Texto que describa la imagen')
      .py-4.py-md-5(titulo="<em>Rex</em>" :icono="require('@/assets/componentes/10.svg')")
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4 <em>Rex</em>
            ul.lista-ul--color.mb-0
              li.mb-2.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Origen:</b> Francia.  
              li.mb-2.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Color:</b> Castaño, negro, azul, blanco o chinchilla.   
              li.mb-2.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Peso adulto</b>: 3-3,5 kg.  
            h5 Características:
            ul.lista-ul--color.mb-0.ms-3 
              li.mb-2.d-flex
                i.fa-solid.fa-circle.bg-color-18
                p.mb-0 Prolificidad: 5-7.  
              li.mb-2.d-flex
                i.fa-solid.fa-circle.bg-color-18
                p.mb-0 FCR: 3,4:1.  
              li.mb-2.d-flex
                i.fa-solid.fa-circle.bg-color-18
                p.mb-0 Rendimiento: 53 %. 
              li.mb-2.d-flex
                i.fa-solid.fa-circle.bg-color-18
                p.mb-0 Carne de sabor delicado.  
            ul.lista-ul--color.mb-0
              li.mb-2.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Aptitud</b>: Piel y carne  
              li.mb-2.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Particularidad</b>: Piel aterciopelada de alta calidad, muy apreciada en peletería.
          .col-md-5
            figure
              img(src='@/assets/curso/tema4/20.png', alt='Texto que describa la imagen') 
      .py-4.py-md-5(titulo="Mariposa (<em>Papillon</em>)" :icono="require('@/assets/componentes/10.svg')")
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4 Mariposa (<em>Papillon</em>)
            ul.lista-ul--color.mb-0
              li.mb-2.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Origen:</b> Francia.    
              li.mb-2.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Color:</b> Blanco con manchas negras o azules simétricas.    
              li.mb-2.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Peso adulto</b>: 4,5-5 kg.   
            h5 Características:
            ul.lista-ul--color.mb-0.ms-3 
              li.mb-2.d-flex
                i.fa-solid.fa-circle.bg-color-18
                p.mb-0 Prolificidad: 7-9.   
              li.mb-2.d-flex
                i.fa-solid.fa-circle.bg-color-18
                p.mb-0 FCR: 3,1:1. 
              li.mb-2.d-flex
                i.fa-solid.fa-circle.bg-color-18
                p.mb-0 Rendimiento: 55 %.   
            ul.lista-ul--color.mb-0
              li.mb-2.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Aptitud</b>: Carne y piel.  
              li.mb-2.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Particularidad</b>: Alta adaptabilidad a climas cálidos y buen comportamiento en sistemas familiares.
          .col-md-5
            figure
              img(src='@/assets/curso/tema4/21.png', alt='Texto que describa la imagen')     

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Razas criollas o adaptadas
    
    p.mb-5 Estas razas se han desarrollado localmente mediante cruzamientos y selección natural, lo que les confiere rusticidad, adaptabilidad y bajo requerimiento de manejo intensivo.

    .bg-full-width.bg-color-7
      .px-4.px-md-5
        .row.justify-content-center
          .col-lg-10
            .bg-color-6.mb-5.p-4.tarjeta(data-aos="fade-up")
              .row.justify-content-center.align-items-center
                .col-lg-auto.mb-3.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema4/22.png', alt='')
                .col-lg
                  .p-3.bg-color-white.tarjeta
                    h5 Conejo criollo colombiano
                    ul.lista-ul--color.mb-0
                      li.mb-3.d-flex
                        i.fa-solid.fa-circle-check
                        p.mb-0 <b>Origen:</b> Resultado de cruzamientos entre razas comerciales y poblaciones locales.       
                      li.mb-3.d-flex
                        i.fa-solid.fa-circle-check
                        p.mb-0 <b>Peso adulto</b>: 3,0-4,0 kg.    
                    h5 Características:
                    ul.lista-ul--color.mb-0.ms-3 
                      li.mb-3.d-flex
                        i.fa-solid.fa-circle.bg-color-18
                        p.mb-0 Alta rusticidad y resistencia.  
                      li.mb-3.d-flex
                        i.fa-solid.fa-circle.bg-color-18
                        p.mb-0 Buena tolerancia a forrajes de baja calidad. 
                      li.mb-3.d-flex
                        i.fa-solid.fa-circle.bg-color-18
                        p.mb-0 Prolificidad: 6-8 crías. 
                      li.mb-3.d-flex
                        i.fa-solid.fa-circle.bg-color-18
                        p.mb-0 Rendimiento en canal: 52-55 %.    
                    ul.lista-ul--color.mb-0
                      li.mb-3.d-flex
                        i.fa-solid.fa-circle-check
                        p.mb-0 <b>Aptitud</b>: Carne y reproducción.   
                      li.mb-3.d-flex
                        i.fa-solid.fa-circle-check
                        p.mb-0 <b>Particularidad</b>: Ideal para sistemas sostenibles y agroecológicos, con excelente adaptación a condiciones rurales colombianas.
        
        p.mb-5 A continuación, se presentan las principales razas cunícolas de interés productivo en el país, comparadas según su peso, prolificidad, eficiencia alimenticia y rendimiento en canal.

        .row.justify-content-center.mb-5
          .col-lg-12.mb-3.mb-lg-0(data-aos="zoom-in").order-lg-2
            .titulo-sexto.color-acento-contenido
              h5 Tabla 14.
              span Cuadro comparativo de razas cárnicas y mixtas en Colombia
            .tabla-a.color-acento-contenido.tbl
              table
                thead
                  tr
                    th.bg-color-9 Raza
                    th.bg-color-9 Peso adulto (kg)
                    th.bg-color-9 Crías/parto
                    th.bg-color-9 FCR
                    th.bg-color-9 Rend. canal (%)
                    th.bg-color-9 Aptitud principal
                    th.bg-color-9 Particularidad
                tbody.bg-color-white
                  tr
                    td Nueva Zelanda
                    td 4,5-5,0
                    td 8-10
                    td 3:1
                    td 55-60
                    td Carne
                    td Precocidad y maternidad
                  tr.bg-color-sintesis
                    td Californiano
                    td 3,5-4,5
                    td 7-9
                    td 3:1
                    td 55-58
                    td Carne
                    td Rusticidad, temperamento
                  tr
                    td Gigante de Flandes
                    td 6-8
                    td 6-8
                    td 3,5:1
                    td 60
                    td Carne
                    td Gran tamaño corporal
                  tr.bg-color-sintesis
                    td Chinchilla
                    td 4,5-6,0
                    td 6-8
                    td 3,2:1
                    td 55
                    td Carne y piel
                    td Piel de alto valor
                  tr
                    td Rex
                    td 3,0-3,5
                    td 5-7
                    td 3,4:1
                    td 53
                    td Piel y carne
                    td Manto aterciopelado
                  tr.bg-color-sintesis
                    td León de Borgoña
                    td 4,0-4,5
                    td 8-10
                    td 3:1
                    td 55
                    td Carne
                    td Ideal para cruzamientos
                  tr
                    td Mariposa
                    td 4,5-5,0
                    td 7-9
                    td 3,1:1
                    td 55
                    td Carne y piel
                    td Adaptable a zonas tropicales
                  tr.bg-color-sintesis
                    td Criollo colombiano
                    td 3,0-4,0
                    td 6-8
                    td 3,3:1
                    td 52-55
                    td Carne
                    td Alta rusticidad y adaptación local

        
        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
            h3.titulo-con-imagen__texto Relevancia para Colombia
        
        p.mb-5 En el contexto colombiano, la producción cunícola ha mostrado avances importantes. Según Agrosavia (2023):

        .row.justify-content-center
          .col-lg-10
            .bg-color-10.mb-5.p-4.tarjeta(data-aos="fade-up")
              .row.justify-content-center.align-items-center
                .col-lg-auto.mb-3.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema4/23.png', alt='')
                .col-lg
                  .p-3.bg-color-white.tarjeta
                    ul.lista-ul--color.mb-0
                      li.mb-3.d-flex
                        i.fa-solid.fa-circle-check
                        p.mb-0 Las razas Nueva Zelanda y Californiano representan el 80 % de la producción comercial.      
                      li.mb-3.d-flex
                        i.fa-solid.fa-circle-check
                        p.mb-0 Las líneas criollas y mixtas predominan en sistemas rurales del Eje Cafetero y el sur del país.
                      li.mb-3.d-flex
                        i.fa-solid.fa-circle-check
                        p.mb-0 Programas de mejoramiento liderados por universidades buscan consolidar una línea cárnica nacional adaptada al trópico alto.     
                      li.mb-3.d-flex
                        i.fa-solid.fa-circle-check
                        p.mb-0 El ICA promueve la adopción de Buenas Prácticas Pecuarias (BPP) y trazabilidad genética para registro sanitario.

        separador
        
    #t_4_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.5 Aves de corral (razas de postura y engorde)

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema4/24.png')})`}"
      )(data-aos="zoom-in")
      .bloque-texto-g__texto.p-4
        p.mb-0 La avicultura en Colombia comprende una diversidad de líneas genéticas orientadas a la producción de huevo y carne, tanto en sistemas comerciales como en explotaciones familiares y de traspatio. La elección de la raza o línea genética impacta directamente en el rendimiento zootécnico, la adaptabilidad al clima y la eficiencia alimenticia, por lo que conocer las características técnicas de cada una resulta esencial para optimizar la producción.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Líneas comerciales de ponedoras
    
    p.mb-5 A continuación se resumen las principales líneas híbridas utilizadas en Colombia para la producción de huevos, destacando sus características, productividad y ventajas técnicas:

    .row.justify-content-center.mb-5
      .col-lg-12.mb-3.mb-lg-0(data-aos="zoom-in").order-lg-2
        .titulo-sexto.color-acento-contenido
          h5 Tabla 15.
          span Líneas comerciales de ponedoras
        .tabla-a.color-acento-contenido.tbl
          table
            thead
              tr
                th.bg-color-9 Línea / “Raza” comercial
                th.bg-color-9 Características generales
                th.bg-color-9 Parámetros productivos estimados
                th.bg-color-9 Ventajas
                th.bg-color-9 Desventajas
            tbody.bg-color-white
              tr
                td Hy-Line (W-36, W-80, Brown)
                td Aves ligeras (blancas) o medianas (marrones); alta adaptabilidad al trópico.
                td 320-340 huevos/año; peso del huevo 60-63 g; buena conversión.
                td Muy productivas; buena persistencia; excelente calidad del huevo.
                td Sensibles al estrés calórico (líneas blancas).
              tr.bg-color-sintesis
                td Lohmann (Brown, LSL)
                td Aves rústicas, resistentes y de buen comportamiento.
                td 310-330 huevos/año; buen tamaño de huevo; excelente cáscara.
                td Alta viabilidad (>90 %); adaptable a sistemas semi-intensivos.
                td Requiere manejo nutricional estricto.
              tr
                td Isa (Brown, White)
                td Aves activas, buen temperamento, fáciles de manejar.
                td 315-330 huevos/año; 62-64 g por huevo; buena persistencia.
                td Alta productividad; buena aceptación; huevos uniformes.
                td Más susceptibles a enfermedades sin buena bioseguridad.
              tr.bg-color-sintesis
                td Hisex (Brown, White)
                td Aves livianas, alta eficiencia alimenticia.
                td 310-325 huevos/año; buena conversión y tamaño del huevo.
                td Excelente conversión; buena calidad de cáscara; climas cálidos.
                td Persistencia menor sin buen manejo.
              tr
                td Dekalb (White, Brown)
                td Aves resistentes y adaptables.
                td 300-320 huevos/año; huevos consistentes y de buen tamaño.
                td Rústicas; buen desempeño en el trópico; buena cáscara.
                td Menor producción frente a Hy-Line o Lohmann en óptimas condiciones.

    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Razas Criollas y producción alternativa
    
    p.mb-5 En zonas rurales de Colombia se encuentran variedades de gallinas criollas y eco tipos locales que, aunque menos productivos en comparación con los híbridos comerciales, presentan una alta rusticidad y valor cultural. Se emplean principalmente en sistemas de traspatio o proyectos comunitarios.

    .row.justify-content-center.mb-5
      .col-lg-12.mb-3.mb-lg-0(data-aos="zoom-in").order-lg-2
        .titulo-sexto.color-acento-contenido
          h5 Tabla 16.
          span Razas Criollas y producción alternativa
        .tabla-a.color-acento-contenido.tbl
          table
            thead
              tr
                th.bg-color-9 Eco tipo / Variedad
                th.bg-color-9 Características generales
                th.bg-color-9 Parámetros productivos estimados
                th.bg-color-9 Ventajas
                th.bg-color-9 Desventajas
            tbody.bg-color-white
              tr
                td Criolla común
                td Plumaje variado, tamaño mediano; fenotipo diverso.
                td 130-160 huevos/año; 40-50 g/huevo.
                td Rústica; resistente a enfermedades; valor cultural.
                td Baja productividad; huevos pequeños.
              tr.bg-color-sintesis
                td Kika
                td Ave pequeña, plumaje variado, común en zonas andinas.
                td 100-140 huevos/año.
                td Poco demandante en alimento; resistente.
                td Bajo rendimiento; huevo pequeño.
              tr
                td Huevos azules / verdes
                td Criollas con gen oocyan (color de cáscara).
                td 120-150 huevos/año; 40-48 g.
                td Diferenciación comercial; rusticidad.
                td Baja productividad; poca uniformidad.
              tr.bg-color-sintesis
                td Piroca (cuello desnudo)
                td Cuello sin plumas, buena tolerancia al calor.
                td 120-140 huevos/año.
                td Fácil desplume; adaptada al calor.
                td Apariencia poco atractiva; productividad baja.
              tr
                td Copetona
                td Penacho en cabeza; fenotipo ornamental.
                td 110-130 huevos/año.
                td Valor cultural y ornamental.
                td Baja postura; poca uniformidad.
              tr.bg-color-sintesis
                td Calzada
                td Plumas en patas; frecuente en zonas rurales.
                td 100-130 huevos/año.
                td Rusticidad; valor cultural.
                td Huevos pequeños; bajo rendimiento.
              tr
                td Criolla costeña
                td Adaptada al calor y humedad; plumaje variado.
                td 130-150 huevos/año; 45 g promedio.
                td Excelente en trópico bajo; resistente.
                td Producción baja frente a híbridos.
              tr.bg-color-sintesis
                td Santandereana
                td Sin cola o con vértebras reducidas; huevos azules.
                td 25-100 huevos/año; peso ≈ 2,5-3 kg.
                td Huevos de color atractivo; rusticidad.
                td Productividad baja; variabilidad genética.
              tr
                td Tapuncha
                td Sin cola (sin pigostilo); huevos blancos.
                td 25-100 huevos/año; peso ≈ 1,5-2,5 kg.
                td Peculiar morfología; muy rústica.
                td Baja postura; huevos sin valor agregado.
              tr.bg-color-sintesis
                td Sedosa (Silkie)
                td Plumaje tipo algodón; piel negra, 5 dedos.
                td ≈ 100 huevos/año; hembras 1-1,5 kg.
                td Ornamentales; excelentes madres.
                td Muy baja postura; no rentable comercialmente.

    

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Líneas genéticas de pollos de engorde
    
    p.mb-5 Los pollos de carne en Colombia pertenecen mayoritariamente a líneas híbridas seleccionadas por su crecimiento rápido, conversión alimenticia eficiente y uniformidad en lote. Se emplean en sistemas intensivos, semi-intensivos y, en menor medida, en programas alternativos de producción campesina. A continuación, se describen las líneas más relevantes:

  
    AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-14")
      .div(titulo="Cobb 500")
        .row.align-items-start.mb-5
          .col-lg-5.mb-3.mb-lg-0.order-lg-2
            figure
              img(src="@/assets/curso/tema4/25.png", alt="").mb-4.mb-lg-0
          .col-lg-7.mb-3.mb-lg-0.order-lg-1
            ul.lista-ul--color.mb-0
              li.mb-1.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Origen:</b> Estados Unidos (Cobb-Vantress Inc.).  
              li.mb-1.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Tipo</b>: Híbrido comercial. 
            h5 Características técnicas:
            ul.lista-ul--color.mb-0.ms-3 
              li.mb-1.d-flex
                i.fa-solid.fa-circle.bg-color-18
                p.mb-0 Peso: 2,5 kg en 38-42 días.  
              li.mb-1.d-flex
                i.fa-solid.fa-circle.bg-color-18
                p.mb-0 Conversión: 1,6-1,8. 
              li.mb-1.d-flex
                i.fa-solid.fa-circle.bg-color-18
                p.mb-0 Alta eficiencia y textura magra. 
              li.mb-1.d-flex
                i.fa-solid.fa-circle.bg-color-18
                p.mb-0 Buena pechuga y uniformidad. 
            ul.lista-ul--color.mb-0
              li.mb-1.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Aptitud</b>: Carne (engorde intensivo).   
              li.mb-1.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Zonas comunes</b>: Cundinamarca, Valle del Cauca, Antioquia y Santander.
      .div(titulo="Ross 308")
        .row.align-items-start.mb-5
          .col-lg-5.mb-3.mb-lg-0.order-lg-2
            figure
              img(src="@/assets/curso/tema4/26.png", alt="").mb-4.mb-lg-0
          .col-lg-7.mb-3.mb-lg-0.order-lg-1
            ul.lista-ul--color.mb-0
              li.mb-1.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Origen:</b> Reino Unido (Aviagen). 
              li.mb-1.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Tipo</b>: Línea híbrida de alto rendimiento. 
            h5 Características técnicas:
            ul.lista-ul--color.mb-0.ms-3 
              li.mb-1.d-flex
                i.fa-solid.fa-circle.bg-color-18
                p.mb-0 Peso: 2,6 kg en 40 días. 
              li.mb-1.d-flex
                i.fa-solid.fa-circle.bg-color-18
                p.mb-0 Conversión: 1,6-1,9. 
              li.mb-1.d-flex
                i.fa-solid.fa-circle.bg-color-18
                p.mb-0 Alta uniformidad y bajo índice de mortalidad.  
              li.mb-1.d-flex
                i.fa-solid.fa-circle.bg-color-18
                p.mb-0 Alto rendimiento en muslo y pechuga. 
            ul.lista-ul--color.mb-0
              li.mb-1.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Aptitud</b>: Carne.  
              li.mb-1.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Particularidad</b>: Muy utilizada por grandes integradoras avícolas.
      .div(titulo="<em>>Hubbard Flex / Classic</em>")
        .row.align-items-start.mb-5
          .col-lg-5.mb-3.mb-lg-0.order-lg-2
            figure
              img(src="@/assets/curso/tema4/27.png", alt="").mb-4.mb-lg-0
          .col-lg-7.mb-3.mb-lg-0.order-lg-1
            ul.lista-ul--color.mb-0
              li.mb-1.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Origen:</b> Francia / Estados Unidos.   
              li.mb-1.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Tipo</b>: Línea híbrida de crecimiento medio. 
            h5 Características técnicas:
            ul.lista-ul--color.mb-0.ms-3 
              li.mb-1.d-flex
                i.fa-solid.fa-circle.bg-color-18
                p.mb-0 Peso: 2,2-2,8 kg en 45 días.   
              li.mb-1.d-flex
                i.fa-solid.fa-circle.bg-color-18
                p.mb-0 Conversión: 1,8-2,0.  
              li.mb-1.d-flex
                i.fa-solid.fa-circle.bg-color-18
                p.mb-0 Buena estructura ósea. 
              li.mb-1.d-flex
                i.fa-solid.fa-circle.bg-color-18
                p.mb-0 Alta resistencia al calor. 
            ul.lista-ul--color.mb-0
              li.mb-1.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Aptitud</b>: Carne / pollo alternativo.   
              li.mb-1.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Particularidad</b>: Ideal para sistemas de pollo campesino tecnificado.
      .div(titulo="Arbor Acres Plus")
        .row.align-items-start.mb-5
          .col-lg-5.mb-3.mb-lg-0.order-lg-2
            figure
              img(src="@/assets/curso/tema4/28.png", alt="").mb-4.mb-lg-0
          .col-lg-7.mb-3.mb-lg-0.order-lg-1
            ul.lista-ul--color.mb-0
              li.mb-1.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Origen:</b> Estados Unidos (Aviagen).  
              li.mb-1.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Tipo</b>: Línea pesada. 
            h5 Características técnicas:
            ul.lista-ul--color.mb-0.ms-3 
              li.mb-1.d-flex
                i.fa-solid.fa-circle.bg-color-18
                p.mb-0 Ganancia diaria: 60-65 g/día
              li.mb-1.d-flex
                i.fa-solid.fa-circle.bg-color-18
                p.mb-0 Conversión: 1,7-1,9.  
              li.mb-1.d-flex
                i.fa-solid.fa-circle.bg-color-18
                p.mb-0 Rendimiento en canal: 72-74 %. 
              li.mb-1.d-flex
                i.fa-solid.fa-circle.bg-color-18
                p.mb-0 Buena resistencia metabólica. 
            ul.lista-ul--color.mb-0
              li.mb-1.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Aptitud</b>: Carne.  
              li.mb-1.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Zonas comunes</b>: Costa Atlántica y Santander.
      .div(titulo="<em>Lohmann Meat</em>")
        .row.align-items-start.mb-5
          .col-lg-5.mb-3.mb-lg-0.order-lg-2
            figure
              img(src="@/assets/curso/tema4/29.png", alt="").mb-4.mb-lg-0
          .col-lg-7.mb-3.mb-lg-0.order-lg-1
            ul.lista-ul--color.mb-0
              li.mb-1.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Origen:</b> Alemania.   
              li.mb-1.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Tipo</b>: Línea doble propósito. 
            h5 Características técnicas:
            ul.lista-ul--color.mb-0.ms-3 
              li.mb-1.d-flex
                i.fa-solid.fa-circle.bg-color-18
                p.mb-0 Peso: 2,0-2,3 kg en 49 días.  
              li.mb-1.d-flex
                i.fa-solid.fa-circle.bg-color-18
                p.mb-0 Conversión: 1,9-2,0. 
              li.mb-1.d-flex
                i.fa-solid.fa-circle.bg-color-18
                p.mb-0 Carne rosada, tierna y magra.  
            ul.lista-ul--color.mb-0
              li.mb-1.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Aptitud</b>: Carne en sistemas familiares.    
              li.mb-1.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Particularidad</b>: Empleada en proyectos rurales promovidos por el SENA y Agrosavia.

    separador
    
    #t_4_6.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.6 Codornices (líneas japonesas y comerciales)
    
    .bg-color-3.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema4/30.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") La codorniz (<em>Coturnix coturnix japonica</em>) se ha consolidado en Colombia como una especie menor de gran relevancia en sistemas alternativos, tanto por su alta eficiencia productiva como por su excelente adaptabilidad a espacios reducidos. Su ciclo corto y su versatilidad permiten obtener carne y huevos con muy buena rentabilidad bajo condiciones de manejo técnico.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Importancia productiva y parámetros técnicos

    p.mb-5 A continuación, se presentan los principales parámetros técnicos observados en sistemas bien manejados en Colombia, tanto en ponedoras como en líneas de carne.

    .row.justify-content-center.mb-5
      .col-lg-7.mb-3.mb-lg-0(data-aos="zoom-in")
        .titulo-sexto.color-acento-contenido.mb-5
          h5 Tabla 17.
          span Parámetros productivos típicos en codornices (en condiciones óptimas)
        .tabla-a.color-acento-contenido.tbl
          table
            thead
              tr
                th.bg-color-9 Parámetro
                th.bg-color-9 Valor típico en condiciones óptimas
            tbody.bg-color-white
              tr
                td Inicio de postura
                td 38-40 días de edad
              tr.bg-color-sintesis
                td Producción de huevos por ave/año
                td Hasta ~300 huevos
              tr
                td Edad de sacrificio (líneas cárnicas)
                td 42-56 días
              tr.bg-color-sintesis
                td Peso promedio al sacrificio
                td 180-220 g por ave
              tr
                td Fertilidad
                td > 96 % en reproductoras bien manejadas
              tr.bg-color-sintesis
                td Incubabilidad
                td > 80 %

      .col-lg-5
        figure
          img(src='@/assets/curso/tema4/31.png', alt='Texto que describa la imagen')
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Aptitud productiva y ventajas
    
    p.mb-5 La codorniz presenta una doble aptitud (carne y huevos), con predominancia de la producción de postura en líneas japonesas. Entre sus ventajas más destacadas se encuentran:
    
    .row.mb-5.align-items-center
      .col-lg-5.order-2
        .bg-color-11.p-4.tarjeta(data-aos="fade-up")
          figure.mb-4
            img(src='@/assets/curso/tema4/33.svg', alt='', style="max-width: 90px")
          p.text-white <b>Desventajas</b>: la producción en alta densidad implica riesgos sanitarios si no se controla adecuadamente la ventilación, la iluminación y la bioseguridad.
      .col-lg-7.order-1.mb-3.mb-lg-0
        .bg-color-10.p-4.tarjeta(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/tema4/32.png', alt='')
            .col-lg
              .p-3.bg-color-white.tarjeta
                ul.lista-ul--color.mb-0
                  li.mb-3.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 Alta rotación de ciclo productivo
                  li.mb-3.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 Buena conversión alimenticia.
                  li.mb-3.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 Producción intensiva en espacios reducidos.
                  li.mb-3.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 Adaptabilidad a climas templados y tropicales en Colombia.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Principales líneas genéticas de codornices en Colombia
    
    p.mb-5 A continuación, se describen las líneas genéticas más comunes utilizadas en Colombia, agrupadas según su aptitud predominante.

    .bg-full-width.bg-color-13
      .px-4.px-md-5
        .row.align-items-start.mb-5
          .col-lg-4.mb-3.mb-lg-0.order-lg-2
            figure
              img(src="@/assets/curso/tema4/34.png", alt="").mb-4.mb-lg-0
          .col-lg-8.order-lg-1
            AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-14")
              .div(titulo="<em>Coturnix coturnix japonica</em> (Codorniz japonesa)")
                p Esta es la línea genética más empleada en sistemas comerciales por su alta productividad en postura y excelente adaptación. 
                h5 Aspecto - Descripción 
                ul.lista-ul--color.mb-0
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 <b>Origen</b>: Asia Oriental (Japón), adaptada a nivel mundial. 
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 <b>Inicio de postura</b>: ~38-40 días. 
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 <b>Producción de huevos</b>: Hasta ~300 huevos por año.  
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 <b>Aptitud principal</b>: Postura de huevos (también aprovechable para carne). 
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 <b>Adaptación</b>: Muy buena en altitudes medias y climas templados; requiere control ambiental para maximizar el rendimiento. 
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 <b>Observación</b>: Alta fertilidad e incubabilidad cuando se maneja técnicamente.
              .div(titulo="Codorniz “koreana” o coreana")
                p Línea menos común y de menor tamaño corporal, empleada en sistemas pequeños como alternativa familiar. 
                h5 Aspecto - Descripción 
                ul.lista-ul--color.mb-0
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 <b>Origen</b>:Asia; menor desarrollo comercial frente a la japónica.  
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 <b>Producción de huevos</b>: Inferior a la línea japonesa en condiciones similares. 
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 <b>Aptitud principal</b>: Postura, ocasionalmente carne en sistemas familiares. 
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 <b>Adaptación</b>: Adecuada para traspatio o sistemas de autoconsumo.  
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 <b>Observación</b>: Menor rentabilidad comparada con la japónica en producción comercial.
              .div(titulo="Líneas cárnicas comerciales (<em>Texas White, Giant Brown, Giant White</em>)")
                p Seleccionadas para lograr mayor peso en menor tiempo, se conocen en Colombia como “líneas cárnicas” o “doradas”.  
                h5 Aspecto - Descripción 
                ul.lista-ul--color.mb-0
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 <b>Origen</b>: Estados Unidos y Europa; incluyen líneas como Texas White y Giant Brown.  
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 <b>Edad de faena</b>: 42-56 días.  
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 <b>Peso vivo al sacrificio</b>: 180-220 g. 
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 <b>Aptitud principal</b>: Producción de carne. 
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 <b>Adaptación</b>: compatible con sistemas de rotación rápida o producción mixta. 
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 <b>Observación</b>: requiere condiciones controladas para expresar su máximo potencial productivo.

        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
            h3.titulo-con-imagen__texto Consideraciones para el manejo genético y técnico
        
        p.mb-5 Es importante señalar que, en la producción de codornices, se trabaja principalmente con líneas genéticas más que con razas formalmente establecidas. Por ello:

        .row.mb-5.align-items-center
          .col-lg-3.mb-3.mb-lg-0.order-lg-2
            figure
              img(src="@/assets/curso/tema4/35.png", data-aos="zoom-in")
          .col-lg-9.order-lg-1
            .bg-color-10.p-4.tarjeta(data-aos="fade-up")
              .row.justify-content-center.align-items-center
                .col-lg-auto.mb-3.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema4/36.svg', alt='')
                .col-lg
                  .p-3.bg-color-white.tarjeta
                    ul.lista-ul--color.mb-0
                      li.mb-3.d-flex
                        i.fa-solid.fa-circle-check
                        p.mb-0 La calidad del material genético y el control de la consanguinidad son claves para evitar problemas de fertilidad y caída en la productividad.
                      li.mb-0.d-flex
                        i.fa-solid.fa-circle-check
                        p.mb-0 Las reproductoras deben seleccionarse cuidadosamente y mantenerse bajo programas técnicos que consideren iluminación, ventilación, densidad de alojamiento y bioseguridad.
        
        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
            h3.titulo-con-imagen__texto Adaptación y relevancia en Colombia
        
        p.mb-5 La coturnicultura ha tomado fuerza en departamentos como Antioquia, Cundinamarca y Valle del Cauca, donde se integran pequeños productores y microempresas que aprovechan su ciclo corto para generar ingresos en poco tiempo. El sistema es especialmente útil para:

        .row.justify-content-center
          .col-lg-10
            .bg-color-19.mb-5.p-4.tarjeta(data-aos="fade-up")
              .row.justify-content-center.align-items-center
                .col-lg-auto.mb-3.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema4/37.png', alt='')
                .col-lg
                  .p-3.bg-color-white.tarjeta
                    ul.lista-ul--color.mb-0
                      li.mb-3.d-flex
                        i.fa-solid.fa-circle-check
                        p.mb-0 Fincas familiares que buscan diversificación.
                      li.mb-3.d-flex
                        i.fa-solid.fa-circle-check
                        p.mb-0 Emprendimientos con espacio limitado.
                      li.mb-3.d-flex
                        i.fa-solid.fa-circle-check
                        p.mb-0 Proyectos de comercialización local de huevos gourmet y carne diferenciada.

        separador
        
        #t_4_7.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 4.7 Cabras (Capra hircus): Razas lecheras, cárnicas y criollas
    
    .row.mb-5.align-items-center
      .col-lg-5.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema4/38.png", data-aos="zoom-in")
      .col-lg-7.order-lg-1
        p La caprinocultura en Colombia cumple un papel fundamental en zonas de clima seco y montaña, siendo una fuente importante de proteína animal, ingreso familiar y resiliencia agroecológica. Su desarrollo ha sido promovido por programas locales de mejoramiento, especialmente en zonas donde otras especies tienen menor adaptación.
        .bg-color-5.mb-3
          .px-4.px-md-5.py-4
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema4/38-1.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 Departamentos con mayor presencia: La Guajira, Cesar, Huila, Boyacá, Tolima, Nariño, Santander y Valle del Cauca. Las razas de cabras presentes en el país se agrupan en tres grandes tipos: lecheras, cárnicas y criollas. A continuación, se describen las más representativas.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Razas caprinas lecheras
    
    p.mb-5 Estas razas se destacan por su alto rendimiento lácteo, rusticidad y adaptación a diversas condiciones agroecológicas, siendo fundamentales en la producción caprina de Colombia.

    AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-14")
      .div(titulo="Alpina Francesa")
        .row.align-items-start.mb-5
          .col-lg-4.mb-3.mb-lg-0.order-lg-2
            figure
              img(src="@/assets/curso/tema4/39.png", alt="").mb-4.mb-lg-0
          .col-lg-8.mb-3.mb-lg-0.order-lg-1
            ul.lista-ul--color.mb-0
              li.mb-1.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Origen:</b> Francia (zona alpina).   
              li.mb-1.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Color</b>: marrón claro con cara y patas negras. 
              li.mb-1.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Peso adulto</b>: hembras 55-65 kg; machos 70-80 kg.   
              li.mb-1.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Producción de leche</b>: 600-900 L por lactancia (250-300 días). 
              li.mb-1.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Grasa butirosa</b>: 3,5-4,0 %.  
              li.mb-1.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Características</b>: buena persistencia, rusticidad moderada y aptitud para zonas templadas. 
              li.mb-1.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Adaptación en Colombia</b>: Presente en Huila y Boyacá, usada en cruzamientos con criollas para mejorar rendimiento.
      .div(titulo="<em>Saanen</em>")
        .row.align-items-start.mb-5
          .col-lg-4.mb-3.mb-lg-0.order-lg-2
            figure
              img(src="@/assets/curso/tema4/40.png", alt="").mb-4.mb-lg-0
          .col-lg-8.mb-3.mb-lg-0.order-lg-1
            ul.lista-ul--color.mb-0
              li.mb-1.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Origen:</b> Suiza.    
              li.mb-1.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Color</b>: blanco o crema.  
              li.mb-1.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Peso adulto</b>: hembras 60-70 kg; machos 80-90 kg.    
              li.mb-1.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Producción de leche</b>: 700-1.200 L por lactancia.    
              li.mb-1.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Características</b>: alta producción, temperamento dócil y necesidad de mayor cuidado sanitario. 
              li.mb-1.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Limitación</b>: sensible al calor extremo. 
              li.mb-1.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Recomendación</b>: ideal para zonas de clima templado alto.
      .div(titulo="<em>Toggenburg</em>")
        .row.align-items-start.mb-5
          .col-lg-4.mb-3.mb-lg-0.order-lg-2
            figure
              img(src="@/assets/curso/tema4/41.png", alt="").mb-4.mb-lg-0
          .col-lg-8.mb-3.mb-lg-0.order-lg-1
            ul.lista-ul--color.mb-0
              li.mb-1.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Origen:</b> Suiza.   
              li.mb-1.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Color</b>: marrón chocolate con marcas blancas.  
              li.mb-1.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Peso adulto</b>: marrón chocolate con marcas blancas.   
              li.mb-1.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Producción de leche</b>: 600-800 L por lactancia.    
              li.mb-1.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Características</b>: buena persistencia lactacional y tolerancia al frío.  
              li.mb-1.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Uso en Colombia</b>: común en cruzamientos en zonas altas de Boyacá y Nariño.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Razas caprinas cárnicas
    
    p.mb-5 Estas razas se valoran por su rápido crecimiento, alto peso al sacrificio y buen rendimiento en canal, características que las hacen esenciales en los sistemas de producción de carne caprina en Colombia.

    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="<em>Boer</em>" :icono="require('@/assets/componentes/4.svg')")
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            h5 <em>Boer</em>
            ul.lista-ul--color.mb-0
              li.mb-2.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Origen</b>: Sudáfrica. 
              li.mb-2.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Color</b>: blanco con cabeza rojiza.  
              li.mb-2.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Peso adulto</b>: machos 90-120 kg; hembras 70-90 kg. 
              li.mb-2.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Prolificidad</b>: 1,6-2 crías por parto. 
              li.mb-2.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Ganancia diaria de peso (GPD)</b>: 180-250 g/día. 
              li.mb-2.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Rendimiento en canal</b>: 50-55 %.  
              li.mb-2.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Características</b>: Excelente tasa de crecimiento, rusticidad y buena adaptación a diferentes sistemas.  
              li.mb-2.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Zonas</b>: Valle del Cauca, Huila y Costa Atlántica.
          .col-md-5
            figure
              img(src='@/assets/curso/tema4/42.png', alt='Texto que describa la imagen')
      .py-4.py-md-5(titulo="<em>Anglo Nubian</em>" :icono="require('@/assets/componentes/4.svg')")
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4 <em>Anglo Nubian</em>
            ul.lista-ul--color.mb-0
              li.mb-2.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Origen</b>: Inglaterra.  
              li.mb-2.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Color</b>: variado (moteado, marrón, blanco o negro).  
              li.mb-2.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Peso adulto</b>: 70-90 kg.  
              li.mb-2.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Aptitud</b>: mixta (leche y carne). 
              li.mb-2.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Producción de leche</b>: 500-700 L por lactancia, con 5 % de grasa.    
              li.mb-2.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Características</b>: orejas largas, buena adaptación al calor y rusticidad aceptable.
              li.mb-2.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Uso en Colombia</b>: utilizada en cruzamientos en zonas cálidas como Cesar, La Guajira y Huila. 
          .col-md-5
            figure
              img(src='@/assets/curso/tema4/43.png', alt='Texto que describa la imagen')

    .bg-full-width.bg-color-7
      .px-4.px-md-5
        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
            h3.titulo-con-imagen__texto Razas criollas colombianas
        
        p.mb-5 Las razas criollas representan una valiosa reserva genética local, bien adaptada a condiciones de escasez hídrica, forrajes bajos en proteína y enfermedades parasitarias.

        .row.justify-content-center
          .col-lg-10
            .bg-color-6.mb-5.p-4.tarjeta(data-aos="fade-up")
              .row.justify-content-center.align-items-center
                .col-lg-auto.mb-3.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema4/44.png', alt='')
                .col-lg
                  .p-3.bg-color-white.tarjeta
                    h5 Cabra criolla colombiana
                    ul.lista-ul--color.mb-0
                      li.mb-3.d-flex
                        i.fa-solid.fa-circle-check
                        p.mb-0 <b>Origen:</b> deriva de poblaciones ibéricas y africanas introducidas desde la colonia.  
                      li.mb-3.d-flex
                        i.fa-solid.fa-circle-check
                        p.mb-0 <b>Distribución</b>: La Guajira, Cesar, Magdalena, Huila.     
                      li.mb-3.d-flex
                        i.fa-solid.fa-circle-check
                        p.mb-0 <b>Peso adulto</b>:  40-55 kg.   
                      li.mb-3.d-flex
                        i.fa-solid.fa-circle-check
                        p.mb-0 <b>Producción de leche</b>: 200-350 L/lactancia.  
                      li.mb-3.d-flex
                        i.fa-solid.fa-circle-check
                        p.mb-0 <b>Prolificidad</b>: 1,8-2 crías por parto.
                      li.mb-3.d-flex
                        i.fa-solid.fa-circle-check
                        p.mb-0 <b>Características</b>: alta rusticidad, resistencia a sequía y a endoparásitos. 
                      li.mb-3.d-flex
                        i.fa-solid.fa-circle-check
                        p.mb-0 <b>Importancia</b>: base genética para cruzamientos orientados a mejorar sistemas extensivos.
        
        separador
        
        #t_4_8.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 4.8 Ovejas (<em>Ovis aries</em>): Razas de lana, carne y doble propósito

        .row.mb-5.align-items-center
          .col-lg-5.mb-3.mb-lg-0.order-lg-2
            figure
              img(src="@/assets/curso/tema4/45.png", data-aos="zoom-in")
          .col-lg-7.order-lg-1
            p La ovinocultura en Colombia ha mostrado crecimiento en las últimas décadas, con una población superior a los 2 millones de animales (ICA, 2024). Se enfoca en la producción de carne, leche artesanal, lana y fibra, especialmente en climas cálidos secos y zonas de altura.
            .bg-color-3.mb-3
              .px-4.px-md-5.py-4
                .row.align-items-center
                  .col-lg-auto
                    img(src="@/assets/curso/tema4/46.svg", style="max-width: 90px").mx-auto
                  .col-lg
                    p.mb-0 <b>Zonas con mayor desarrollo</b>: Costa Atlántica (Córdoba, Sucre, Cesar, Guajira), Santander, Tolima, Boyacá y Nariño.
            p Las razas se agrupan en tres categorías: cárnicas, de lana y doble propósito.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Razas ovinas de carne
    
    p.mb-5 Estas razas se distinguen por su rápido crecimiento, alta prolificidad y excelente rendimiento en canal, siendo fundamentales en la producción ovina de Colombia.

    AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-14")
      .div(titulo="<em>Dorper</em>")
        .row.align-items-start.mb-5
          .col-lg-5.mb-3.mb-lg-0.order-lg-2
            figure
              img(src="@/assets/curso/tema4/47.png", alt="").mb-4.mb-lg-0
          .col-lg-7.mb-3.mb-lg-0.order-lg-1
            ul.lista-ul--color.mb-0
              li.mb-1.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Origen:</b> Sudáfrica.   
              li.mb-1.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Color</b>: blanco con cabeza negra (Dorper) o completamente blanco (White Dorper).  
              li.mb-1.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Peso adulto</b>: machos 70-110 kg; hembras 50-70 kg.    
              li.mb-1.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Prolificidad</b>: 1,6-2 crías por parto.  
              li.mb-1.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Ganancia diaria</b>: 180-220 g/día.   
              li.mb-1.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Rendimiento en canal</b>: 45-50 %.  
              li.mb-1.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Características</b>: buena adaptación al calor, piel de alto valor comercial. 
              li.mb-1.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Zonas</b>: Costa Caribe y Santander.
      .div(titulo="Santa Inés")
        .row.align-items-start.mb-5
          .col-lg-5.mb-3.mb-lg-0.order-lg-2
            figure
              img(src="@/assets/curso/tema4/48.png", alt="").mb-4.mb-lg-0
          .col-lg-7.mb-3.mb-lg-0.order-lg-1
            ul.lista-ul--color.mb-0
              li.mb-1.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Origen:</b> Brasil.     
              li.mb-1.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Color</b>: marrón rojizo.  
              li.mb-1.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Peso adulto</b>: 60-80 kg.     
              li.mb-1.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Prolificidad</b>: 1,5-2 crías por parto.    
              li.mb-1.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Rendimiento en canal</b>: 48-52 %. 
              li.mb-1.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Características</b>: sin lana, resistente a parásitos y adecuada para climas cálidos.  
              li.mb-1.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Zonas</b>: Tolima, Huila y Valle del Cauca.
      .div(titulo="<em>Pelibuey</em>")
        .row.align-items-start.mb-5
          .col-lg-5.mb-3.mb-lg-0.order-lg-2
            figure
              img(src="@/assets/curso/tema4/49.png", alt="").mb-4.mb-lg-0
          .col-lg-7.mb-3.mb-lg-0.order-lg-1
            ul.lista-ul--color.mb-0
              li.mb-1.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Origen:</b> Cuba.  
              li.mb-1.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Color</b>: marrón claro a rojizo.  
              li.mb-1.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Peso adulto</b>: 45-65 kg.       
              li.mb-1.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Características</b>: pelo corto, alta rusticidad y excelente adaptabilidad. 
              li.mb-1.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Rendimiento en canal</b>: 45-48 %. 
              li.mb-1.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Uso</b>: comúnmente empleada en cruzamientos con Dorper para mejorar rusticidad y desempeño en trópico bajo. 

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Razas ovinas de lana y doble propósito
    
    p.mb-5 Estas razas combinan una buena producción cárnica con lana de calidad aceptable, adaptándose a diferentes condiciones climáticas y sistemas productivos.

    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="<em>Romney Marsh</em>" :icono="require('@/assets/componentes/4.svg')")
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            h5 <em>Romney Marsh</em>
            ul.lista-ul--color.mb-0
              li.mb-2.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Origen</b>: Reino Unido
              li.mb-2.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Color</b>: blanco, con lana larga y rizada. 
              li.mb-2.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Peso adulto</b>: 60-90 kg. 
              li.mb-2.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Producción de lana</b>: 4-6 kg por año. 
              li.mb-2.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Aptitud</b>: doble propósito (carne y lana). 
              li.mb-2.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Zonas</b>: Boyacá y Nariño
          .col-md-5
            figure
              img(src='@/assets/curso/tema4/50.png', alt='Texto que describa la imagen')
      .py-4.py-md-5(titulo="<em>Corriedale</em>" :icono="require('@/assets/componentes/4.svg')")
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4 <em>Corriedale</em>
            ul.lista-ul--color.mb-0
              li.mb-2.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Origen</b>: Nueva Zelanda.   
              li.mb-2.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Color</b>: Blanco.  
              li.mb-2.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Peso adulto</b>: 55-80 kg.  
              li.mb-2.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Producción de lana</b>: 4-5 kg por año. 
              li.mb-2.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Características</b>: animal dócil, de prolificidad moderada y buena adaptación. 
              li.mb-2.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Aptitud</b>: doble propósito (carne y lana).
          .col-md-5
            figure
              img(src='@/assets/curso/tema4/51.png', alt='Texto que describa la imagen')
      .py-4.py-md-5(titulo="Criolla colombiana" :icono="require('@/assets/componentes/4.svg')")
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4 Criolla colombiana
            ul.lista-ul--color.mb-0
              li.mb-2.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Origen</b>: resultado de cruzamientos entre razas ibéricas y africanas.    
              li.mb-2.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Peso adulto</b>: 40-60 kg.  
              li.mb-2.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Prolificidad</b>: 1,3-1,8 crías por parto. 
              li.mb-2.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Aptitud</b>: carne y rusticidad. 
              li.mb-2.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Zonas</b>: Guajira, Nariño y Huila.
              li.mb-2.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Observaciones</b>: alta resistencia a condiciones tropicales y excelente adaptación a sistemas extensivos.
          .col-md-5
            figure
              img(src='@/assets/curso/tema4/52.png', alt='Texto que describa la imagen')

    .tarjeta.color-primario.p-3.mb-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/tema4/53.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              pSe invita a leer el documento Comportamiento y adaptación de las especies menores, donde se aborda el estudio del comportamiento, adaptación fisiológica y manejo de animales menores como cuyes, conejos, aves de corral, codornices, cabras y ovejas.
            .col-sm-auto
              a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo1.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download

    
</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
