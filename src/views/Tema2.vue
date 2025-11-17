<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Ciclo productivo de las especies menores
    
    .row.mb-5
      .col-lg-5.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/1.png", data-aos="zoom-in")
      .col-lg-7.order-lg-1
        p(data-aos="fade-left") El ciclo productivo comprende el conjunto de etapas biológicas, reproductivas y productivas que atraviesan las especies pecuarias menores desde su nacimiento hasta su comercialización o reemplazo. Este proceso está influenciado por diversos factores como la genética, alimentación, sanidad, ambiente, manejo técnico y el objetivo zootécnico (producción de carne, leche, huevo, piel o fibra).
    
        .bg-color-12.p-4(data-aos="fade-left")
          p.mb-0 En Colombia, el conocimiento y control de cada fase permite mejorar la productividad, garantizar la inocuidad alimentaria, aplicar las Buenas Prácticas Pecuarias (BPP) y cumplir con las exigencias de bienestar animal conforme a la normativa vigente (ICA, Resolución 68167 de 2020; Resolución 136 de 2020; Ley 1774 de 2016).
    
    separador
    
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1 Etapas comunes del ciclo productivo
    
    .bg-full-width.bg-color-13
      .px-4.px-md-5
        p.mb-5 Antes de analizar el ciclo específico de cada especie, es necesario conocer las fases generales que componen el sistema productivo en animales menores. Aunque existen particularidades fisiológicas por especie, las etapas fundamentales del ciclo son compartidas, y su correcta aplicación es clave para una producción eficiente y sostenible.

        .row.align-items-start.mb-5
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema2/2.png", alt="").mb-4.mb-lg-0
          .col-lg-8
            AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-14")
              .div(titulo="Selección y manejo de reproductores")
                p Elección de animales genéticamente superiores, sanos y adaptados. Se evalúan fenotipo, peso, fertilidad, prolificidad y rusticidad. Se realiza cuarentena y vacunación.
        
              .div(titulo="Empadre, monta o inseminación")
                p Fecundación mediante monta natural, empadre controlado o inseminación artificial. Se registra fecha y número de servicios para trazabilidad.
        
              .div(titulo="Gestación, incubación o preparto")
                p Desarrollo embrionario. Requiere dieta adecuada, control de enfermedades y reducción de estrés. En aves, incluye incubación natural o artificial.
        
              .div(titulo="Parto, puesta o nacimiento")
                p Etapa crítica. Se garantiza higiene, temperatura óptima, supervisión y reducción de mortalidad neonatal.
        
        .row.align-items-start.mb-5
          .col-lg-4.mb-3.mb-lg-0.order-lg-2
            figure
              img(src="@/assets/curso/tema2/3.png", alt="").mb-4.mb-lg-0
          .col-lg-8.order-lg-1
            AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-14")
              .div(titulo="Lactancia o crianza inicial")
                p En mamíferos, depende de la leche materna; en aves, de alimento <em>prestarter</em>. Importa la bioseguridad y suministro de agua limpia.
              .div(titulo="Destete o cambio de fase")
                p Transición al alimento sólido. Riesgo sanitario elevado. Se previene el estrés y enfermedades digestivas.
              .div(titulo="Crecimiento, engorde o producción")
                p Desarrollo hasta peso/producto óptimo. Se mide conversión alimenticia, ganancia diaria, calidad del producto y bienestar animal.
              .div(titulo="Finalización y comercialización")
                p Animales listos para sacrificio, ordeño o recolección. Se aplica normativa de inocuidad y se evalúan resultados económicos.
              .div(titulo="Reemplazo de reproductores")
                p Selección de jóvenes con alto valor genético para mantener o mejorar la eficiencia del sistema. Se registran datos sanitarios y productivos.

    separador
    
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Ciclo productivo del cuy (<em>Cavia porcellus</em>)
    
    .row.mb-5.align-items-center
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/4.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-15.tarjeta.p-4(data-aos="fade-left")
          p El cuy es una de las especies menores más relevantes en sistemas de producción familiar, comunitaria y agroecológica en Colombia. Su precocidad reproductiva, alta prolificidad y eficiencia alimenticia permiten obtener múltiples camadas al año, lo que lo convierte en una alternativa rentable para las zonas andinas.
          p.mb-0 A continuación, se describe su ciclo productivo detallado, desde la selección de reproductores hasta la fase de engorde o reemplazo.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Características productivas generales
    
    p.mb-5 Antes de analizar sus fases específicas, es importante conocer los principales parámetros productivos del cuy, los cuales permiten planificar y ajustar el sistema según los objetivos del productor.

    .bg-full-width.bg-color-7
      .px-4.px-md-5
        .row.justify-content-center
          .col-lg-10
            .bg-color-11.mb-5.p-4.tarjeta(data-aos="fade-up")
              .row.justify-content-center.align-items-center
                .col-lg-auto.mb-3.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema2/5.png', alt='')
                .col-lg
                  .p-3.bg-color-white.tarjeta
                     ul.lista-ul--color.mb-0
                      li.mb-3.d-flex
                        i.fa-solid.fa-circle-check
                        p.mb-0 <b>Especie</b>: Cavia porcellus (mamífero roedor herbívoro).
                      li.mb-3.d-flex
                        i.fa-solid.fa-circle-check
                        p.mb-0 <b>Madurez sexual</b>: hembras a los 2,5-3 meses; machos a los 3-4 meses.
                      li.mb-3.d-flex
                        i.fa-solid.fa-circle-check
                        p.mb-0 <b>Crías por parto</b>: 2-5 gazapos.
                      li.mb-3.d-flex
                        i.fa-solid.fa-circle-check
                        p.mb-0 <b>Peso al nacimiento</b>: 100-130 g.
                      li.mb-3.d-flex
                        i.fa-solid.fa-circle-check
                        p.mb-0 <b>Peso al sacrificio</b>: 800-1000 g (70-80 días).
                      li.mb-3.d-flex
                        i.fa-solid.fa-circle-check
                        p.mb-0 <b>Rendimiento en canal</b>: 65-70 %.
                      li.mb-3.d-flex
                        i.fa-solid.fa-circle-check
                        p.mb-0 <b>Tasa de mortalidad neonatal</b>: < 10 % en sistemas tecnificados.
                      li.mb-0.d-flex
                        i.fa-solid.fa-circle-check
                        p.mb-0 <b>Intervalo entre partos</b>: 68 ± 3 días.
          
          .titulo-con-imagen.mb-5(data-aos="fade-right")
            .titulo-con-imagen__fondo
              img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
              h3.titulo-con-imagen__texto Etapas del ciclo productivo del cuy
          
          p.mb-5 El ciclo del cuy puede dividirse en siete etapas principales, las cuales deben ejecutarse bajo criterios técnicos para maximizar el rendimiento y mantener el bienestar animal.

          .row.justify-content-center.align-items-center.mb-5
            .col-lg-9
              .titulo-sexto.color-acento-contenido
                h5 Figura 1.
                span Etapas del ciclo productivo del cuy
          
              figure
                img(src="@/assets/curso/tema2/6.svg", data-aos="zoom-in", alt="Diagrama sobre las etapas del ciclo productivo del cuy que incluye el emparejamiento, gestación, parto, lactancia, cría, destete y selección para reinicio del ciclo o engorde.")
    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        .tarjeta.bg-color-16.p-4
          PasosB.color-acento-contenido
            .row(titulo="Paso 1").p-5
              .col-md-7.mb-4.mb-md-0
                h5.mb-5 a)	Selección de reproductores
                ul.lista-ul--color.mb-0
                  li.mb-3.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 Se eligen animales sanos, sin defectos morfológicos, con buen pelaje y peso. 
                  li.mb-3.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 Hembras: provenientes de madres prolíficas (≥3 crías por parto). 
                  li.mb-3.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 Machos: ≥900 g, sin defectos en extremidades o genitales. 
                  li.mb-3.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 Reemplazo sugerido cada 8-10 meses. 
                  li.mb-3.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 Se priorizan líneas adaptadas a la altura (Nariño, Cauca, Boyacá).
              .col-md-5
                figure
                  img(src='@/assets/curso/tema2/7.svg', alt='Texto que describa la imagen')
            .row(titulo="Paso 2").p-5
              .col-md-7.mb-4.mb-md-0
                h5.mb-5 b)	Empadre o monta
                ul.lista-ul--color.mb-0
                  li.mb-3.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 Existen dos estrategias principales de reproducción, cuya elección depende de los objetivos del sistema.  
                  li.mb-3.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 Empadre continuo: el macho permanece con las hembras permanentemente, lo que genera mayor número de partos pero menor control. 
                  li.mb-3.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 Empadre controlado: el macho se introduce solo durante el celo (relación 1:5), lo que permite mejor trazabilidad y sanidad. 
                  li.mb-3.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 El celo de la hembra ocurre cada 15-18 días y dura entre 6 y 11 horas.
              .col-md-5
                figure
                  img(src='@/assets/curso/tema2/9.svg', alt='Texto que describa la imagen')
            .row(titulo="Paso 3").p-5
              .col-md-7.mb-4.mb-md-0
                h5.mb-5 c)	Gestación
                ul.lista-ul--color.mb-0
                  li.mb-3.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 Etapa crítica que requiere control ambiental y nutricional. 
                  li.mb-3.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 Duración: 59-72 días (promedio 63 ± 3 días).  
                  li.mb-3.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 Requiere 16-18 % de proteína y 2800-3000 kcal/kg.  
                  li.mb-3.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 Temperatura ideal: 18-22 °C.  
                  li.mb-3.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 En los últimos 10 días, se recomienda alojamiento individual para reducir el estrés.
              .col-md-5
                figure
                  img(src='@/assets/curso/tema2/10.svg', alt='Texto que describa la imagen')
            .row(titulo="Paso 4").p-5
              .col-md-7.mb-4.mb-md-0
                h5.mb-5 d)	Parto
                ul.lista-ul--color.mb-0
                  li.mb-3.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 Ocurre generalmente en la noche y sin asistencia. 
                  li.mb-3.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 Camada promedio: 2-5 crías completamente desarrolladas. 
                  li.mb-3.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 Peso: 100-130 g.  
                  li.mb-3.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 Requiere cama limpia y sin corrientes de aire
              .col-md-5
                figure
                  img(src='@/assets/curso/tema2/11.svg', alt='Texto que describa la imagen')
            .row(titulo="Paso 5").p-5
              .col-md-7.mb-4.mb-md-0
                h5.mb-5 e)	Lactancia y destete
                ul.lista-ul--color.mb-0
                  li.mb-3.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 La alimentación con leche materna es fundamental en los primeros días.  
                  li.mb-3.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 Duración: 18-21 días. 
                  li.mb-3.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 Las crías comienzan a consumir alimento sólido desde el tercer día. 
                  li.mb-3.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 Separación de machos y hembras al destete para evitar reproducción precoz. 
                  li.mb-3.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 Las hembras pueden entrar en celo 12-24 horas después del parto.
              .col-md-5
                figure
                  img(src='@/assets/curso/tema2/12.svg', alt='Texto que describa la imagen')
            .row(titulo="Paso 6").p-5
              .col-md-7.mb-4.mb-md-0
                h5.mb-5 f)	Recría o engorde
                ul.lista-ul--color.mb-0
                  li.mb-3.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 Período posterior al destete hasta alcanzar el peso de faena. 
                  li.mb-3.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 Duración: 45-60 días. 
                  li.mb-3.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 Alimentación: pastos, heno, residuos agrícolas y concentrado (12-15 % proteína).  
                  li.mb-3.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 Conversión alimenticia: 4,5:1.  
                  li.mb-3.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 Peso final: 800-1000 g.
              .col-md-5
                figure
                  img(src='@/assets/curso/tema2/13.svg', alt='Texto que describa la imagen')
            .row(titulo="Paso 7").p-5
              .col-md-7.mb-4.mb-md-0
                h5.mb-5 g)	Reemplazo de reproductores
                ul.lista-ul--color.mb-0
                  li.mb-3.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 Es necesario para evitar el desgaste productivo.  
                  li.mb-3.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 Se realiza cada 8-10 meses o tras 4 camadas.  
                  li.mb-3.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 Se seleccionan animales jóvenes con mejores condiciones genéticas y sanitarias.
              .col-md-5
                figure
                  img(src='@/assets/curso/tema2/8.svg', alt='Texto que describa la imagen')
        
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Indicadores técnicos del cuy en Colombia
    
    p.mb-5 Estos valores promedio permiten planificar y monitorear el sistema de producción en función del rendimiento esperado:

    .row.justify-content-center.mb-5
      .col-lg-5.mb-3.mb-lg-0(data-aos="zoom-in").order-lg-2
        .titulo-sexto.color-acento-contenido
          h5 Tabla 7.
          span Indicadores técnicos del cuy en Colombia
        .tabla-a.color-acento-contenido.tbl
          table
            thead
              tr
                th.bg-color-9 Clasificación científica
                th.bg-color-9 Taxón
            tbody.bg-color-white
              tr
                td Reino
                td Animalia
              tr.bg-color-sintesis
                td Filo
                td Chordata
              tr
                td Clase
                td Mammalia
              tr.bg-color-sintesis
                td Orden
                td Artiodactyla
              tr
                td Familia
                td Bovidae
              tr.bg-color-sintesis
                td Subfamilia
                td Caprinae
              tr
                td Género
                td Ovis
              tr.bg-color-sintesis
                td Especie
                td Ovis aries
      .col-lg-5.order-lg-1
        figure
          img(src='@/assets/curso/tema2/14.png', alt='Texto que describa la imagen')
          
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Particularidades regionales
    
    .row.mb-5.align-items-center
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/15.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-15.tarjeta.p-4(data-aos="fade-left")
          p.mb-0 En regiones como Nariño, Cauca, Putumayo, Boyacá y Cundinamarca, el cuy se integra a sistemas agropecuarios mixtos, donde se aprovechan residuos agrícolas como alimento y se produce abono orgánico mediante el estiércol. Este enfoque se enmarca en la economía circular agroecológica, aportando proteína animal de calidad y fortaleciendo la economía rural.
    
    separador
    
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.3 Ciclo productivo del conejo (<em>Oryctolagus cuniculus</em>)
    
    .row.mb-5.align-items-center
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/16.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-12.tarjeta.p-5(data-aos="fade-left")
          p.mb-0 El conejo doméstico es una especie de alto rendimiento productivo, ideal para sistemas familiares o semiintensivos. Su prolificidad, ciclo corto y eficiente conversión alimenticia lo hacen una alternativa viable para la producción de carne, piel y abono orgánico. En Colombia, su cría se concentra en zonas templadas y frías como el altiplano cundiboyacense, Antioquia, Nariño y el Eje Cafetero, donde se aprovechan sus cualidades zootécnicas en sistemas agropecuarios diversificados.

    .bg-full-width.bg-color-7
      .px-4.px-md-5
        .row.justify-content-center
          .col-lg-10
            .bg-color-17.mb-5.p-4.tarjeta(data-aos="fade-up")
              .row.justify-content-center.align-items-center
                .col-lg-auto.mb-3.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema2/17.svg', alt='')
                .col-lg
                  .p-3.bg-color-white.tarjeta
                    h5 Duración general del ciclo
                    p El ciclo reproductivo del conejo es uno de los más cortos entre las especies pecuarias, lo que permite una elevada rotación productiva:
                    ul.lista-ul--color.mb-0
                      li.mb-3.d-flex
                        i.fa-solid.fa-circle-check
                        p.mb-0 <b>Duración del ciclo productivo</b>: 70-90 días por camada
                      li.mb-3.d-flex
                        i.fa-solid.fa-circle-check
                        p.mb-0 <b>Producción anual</b>: 6-7 camadas por hembra
                      li.mb-3.d-flex
                        i.fa-solid.fa-circle-check
                        p.mb-0 <b>Finalidad principal</b>: carne, piel y abono orgánico
    
        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
            h3.titulo-con-imagen__texto Características productivas generales
        
        p.mb-5 Los principales parámetros técnicos que orientan el manejo del conejo se presentan a continuación:

        .row.justify-content-center
          .col-lg-10
            .bg-color-17.mb-5.p-4.tarjeta(data-aos="fade-up")
              .row.justify-content-center.align-items-center
                .col-lg-auto.mb-3.mb-lg-0.order-lg-2
                  figure
                    img(src='@/assets/curso/tema2/18.png', alt='')
                .col-lg.order-lg-1
                  .p-3.bg-color-white.tarjeta
                    ul.lista-ul--color.mb-0
                      li.mb-3.d-flex
                        i.fa-solid.fa-circle-check
                        p.mb-0 <b>Madurez sexual</b>: hembras a los 4-5 meses; machos a los 5-6 meses
                      li.mb-3.d-flex
                        i.fa-solid.fa-circle-check
                        p.mb-0 <b>Duración de gestación</b>: 30-32 días
                      li.mb-3.d-flex
                        i.fa-solid.fa-circle-check
                        p.mb-0 <b>Tamaño de camada</b>: 6-10 gazapos
                      li.mb-3.d-flex
                        i.fa-solid.fa-circle-check
                        p.mb-0 <b>Peso al nacimiento</b>: 40-60 g
                      li.mb-3.d-flex
                        i.fa-solid.fa-circle-check
                        p.mb-0 <b>Peso al destete</b>: 500-700 g (28 días)
                      li.mb-3.d-flex
                        i.fa-solid.fa-circle-check
                        p.mb-0 <b>Peso al sacrificio</b>: 2,3-2,5 kg (75-90 días)
                      li.mb-3.d-flex
                        i.fa-solid.fa-circle-check
                        p.mb-0 <b>Rendimiento en canal</b>: 55-60 %
                      li.mb-3.d-flex
                        i.fa-solid.fa-circle-check
                        p.mb-0 <b>Conversión alimenticia</b>: 3:1
                      li.mb-3.d-flex
                        i.fa-solid.fa-circle-check
                        p.mb-0 <b>Mortalidad pre-destete</b>: < 10 %
                      li.mb-3.d-flex
                        i.fa-solid.fa-circle-check
                        p.mb-0 <b>Vida productiva de la hembra</b>: hasta 3 años

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Etapas del ciclo productivo del conejo
    
    p.mb-5 El manejo técnico de esta especie se basa en siete etapas clave, cada una con prácticas específicas que determinan el éxito del sistema productivo.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9
        .titulo-sexto.color-acento-contenido
          h5 Figura 2.
          span Etapas del ciclo productivo del conejo
    
        figure
          img(src="@/assets/curso/tema2/19.png", data-aos="zoom-in", alt="Diagrama sobre las etapas del ciclo productivo del conejo que incluye selección de reproductores, empadre, gestación, parto, lactancia y destete, recría y engorde, y finalización con comercialización. ")
    
    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        .tarjeta.bg-color-16.p-4
          PasosB.color-acento-contenido
            .row(titulo="Paso 1").p-5
              .col-md-7.mb-4.mb-md-0
                h5.mb-5 a) Selección de reproductores
                ul.lista-ul--color.mb-0
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 Esta fase busca establecer una base genética sólida mediante la elección de razas con buen rendimiento productivo. 
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 Razas recomendadas: Nueva Zelanda, California, Chinchilla, Mariposa, Rex. 
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 Criterios de selección: crecimiento rápido, prolificidad, rusticidad y buen temperamento. 
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 Las hembras deben ser reemplazadas cada 2,5-3 años o cuando disminuya la productividad. 
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 Los reproductores deben estar libres de enfermedades y presentar buen estado corporal.
              .col-md-5
                figure
                  img(src='@/assets/curso/tema2/20.png', alt='Texto que describa la imagen')
            .row(titulo="Paso 2").p-5
              .col-md-7.mb-4.mb-md-0
                h5.mb-5 b) Empadre o monta
                ul.lista-ul--color.mb-0
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 La reproducción en conejos requiere manejo controlado por su particular fisiología reproductiva. 
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 Celo cada 16-18 días.  
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 Ovulación inducida por la cópula. 
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 Métodos disponibles: 
                ul.lista-ul--color.mb-0.ms-3
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle.bg-color-18
                    p.mb-0 Monta natural (más común). 
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle.bg-color-18
                    p.mb-0 Inseminación artificial (en sistemas tecnificados). 
                ul.lista-ul--color.mb-0
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 Se recomienda introducir la hembra en la jaula del macho.
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 Relación óptima: 1 macho por cada 10 hembras.
              .col-md-5
                figure
                  img(src='@/assets/curso/tema2/21.png', alt='Texto que describa la imagen')
            .row(titulo="Paso 3").p-5
              .col-md-7.mb-4.mb-md-0
                h5.mb-5 c)	Gestación
                ul.lista-ul--color.mb-0
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 El cuidado durante la gestación es esencial para evitar pérdidas reproductivas. 
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 Duración: 30-32 días.  
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 Dieta: 16-18 % de proteína cruda.   
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 Agua limpia y buena ventilación.  
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 Jaulas maternales con cama seca (viruta o paja). 
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 Jaulas Colocar caja-nido a los 25 días de gestación.
              .col-md-5
                figure
                  img(src='@/assets/curso/tema2/22.png', alt='Texto que describa la imagen')
            .row(titulo="Paso 4").p-5
              .col-md-7.mb-4.mb-md-0
                h5.mb-5 d)	Parto
                ul.lista-ul--color.mb-0
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 La madre construye el nido con su propio pelo. 
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 Ocurre generalmente de noche.  
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 Camada: 6-10 gazapos (según raza y nutrición).   
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 Crías nacen altriciales (sin pelo, ciegas y dependientes). 
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 Temperatura del nido: 30-32 °C.
              .col-md-5
                figure
                  img(src='@/assets/curso/tema2/23.png', alt='Texto que describa la imagen')
            .row(titulo="Paso 5").p-5
              .col-md-7.mb-4.mb-md-0
                h5.mb-5 e)	Lactancia y destete
                ul.lista-ul--color.mb-0
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 Etapa crítica para el desarrollo inicial de los gazapos.  
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 Duración: 28-30 días. 
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 La madre amamanta una o dos veces por día.  
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 Desde el día 20, las crías inician el consumo de alimento sólido.  
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 Destete al día 28, separando por sexo y tamaño.
              .col-md-5
                figure
                  img(src='@/assets/curso/tema2/24.png', alt='Texto que describa la imagen')
            .row(titulo="Paso 6").p-5
              .col-md-7.mb-4.mb-md-0
                h5.mb-5 f)	Recría o engorde
                ul.lista-ul--color.mb-0
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 Fase final antes del sacrificio o venta. . 
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 Duración: hasta los 75-90 días de edad. 
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 Alimentación: heno, forraje verde (trébol, alfalfa, kikuyo), avena forrajera y concentrado (16-18 % proteína).  
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 Conversión alimenticia: 3:1.  
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 Ganancia diaria: 30-35 g. 
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 Densidad recomendada: 5-6 animales/m².
              .col-md-5
                figure
                  img(src='@/assets/curso/tema2/25.png', alt='Texto que describa la imagen')
            .row(titulo="Paso 7").p-5
              .col-md-7.mb-4.mb-md-0
                h5.mb-5 g)	Finalización y comercialización
                ul.lista-ul--color.mb-0
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 El producto final es carne magra de alta calidad.   
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 Sacrificio entre los 75-90 días.   
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 Canales con bajo contenido de grasa y colesterol.
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 Estiércol utilizado como fertilizante orgánico de alto valor. 
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 Reproductores se reemplazan cada 2-3 años en sistemas familiares. 
              .col-md-5
                figure
                  img(src='@/assets/curso/tema2/26.png', alt='Texto que describa la imagen')
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Indicadores técnicos del ciclo productivo del conejo en Colombia
    
    p.mb-5 Los siguientes valores resumen los parámetros productivos más importantes del sistema de cunicultura en Colombia. Estos indicadores permiten monitorear el desempeño de los animales, planificar el manejo técnico y evaluar la rentabilidad del sistema según los estándares nacionales.

    .bg-full-width.bg-fondo-2
      .px-4.px-md-5
        .row.justify-content-center.mb-5
          .col-lg-5.mb-3.mb-lg-0(data-aos="zoom-in").order-lg-2
            .titulo-sexto.color-acento-contenido
              h5 Tabla 8.
              span Indicadores técnicos del ciclo productivo del conejo en Colombia
            .tabla-a.color-acento-contenido.tbl
              table
                thead
                  tr
                    th.bg-color-9 Indicador
                    th.bg-color-9 Valor promedio
                tbody.bg-color-white
                  tr
                    td Duración de gestación
                    td 30-32 días
                  tr.bg-color-sintesis
                    td Camadas por año
                    td 6-7
                  tr
                    td Crías por camada
                    td 6-10
                  tr.bg-color-sintesis
                    td Peso al nacimiento
                    td 40-60 g
                  tr
                    td Peso al destete
                    td 500-700 g
                  tr.bg-color-sintesis
                    td Peso al sacrificio
                    td 2,3-2,5 kg
                  tr
                    td Rendimiento en canal
                    td 55-60 %
                  tr.bg-color-sintesis
                    td Mortalidad pre-destete
                    td <10 %
                  tr
                    td Conversión alimenticia
                    td 3:1

          .col-lg-4.order-lg-1
            figure
              img(src='@/assets/curso/tema2/27.png', alt='Texto que describa la imagen')

        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
            h3.titulo-con-imagen__texto Particularidades de la cunicultura en Colombia
        
        .row.mb-5
          .col-lg-5.order-lg-2.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema2/28.png", data-aos="zoom-in")
          .col-lg-7.order-lg-1
            p(data-aos="fade-left") La cría de conejos se desarrolla principalmente en sistemas rurales de pequeña escala, donde cumple funciones económicas, alimentarias y agroecológicas. Sus ventajas más destacadas incluyen:
        
            .bg-color-10.p-4(data-aos="fade-left")
              .row.align-items-center
                .col-lg-auto.order-2
                  img(src="@/assets/curso/tema2/29.svg", style="max-width: 174px").mx-auto
                .col-lg.order-1.mb-3.mb-lg-0
                  .bg-color-white.p-4.tarjeta
                    ul.lista-ul--color.mb-0
                      li.mb-2.d-flex
                        i.fa-solid.fa-circle-check
                        p.mb-0 Bajo requerimiento de espacio.
                      li.mb-2.d-flex
                        i.fa-solid.fa-circle-check
                        p.mb-0 Alta eficiencia alimenticia.
                      li.mb-2.d-flex
                        i.fa-solid.fa-circle-check
                        p.mb-0 Producción integral: carne, piel y abono.
                      li.mb-0.d-flex
                        i.fa-solid.fa-circle-check
                        p.mb-0 Estiércol seco con alto contenido de nitrógeno y fósforo, ideal para huertos y sistemas agroecológicos.
    
    separador
    
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.4 Ciclo productivo de las aves de corral (<em>Gallus gallus domesticus</em>)
    
    .row.mb-5
      .col-lg-5.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/30.png", data-aos="zoom-in")
      .col-lg-7.order-lg-1
        p(data-aos="fade-left") Las aves de corral comprenden dos líneas productivas principales en Colombia: los pollos de engorde, destinados a la obtención de carne, y las gallinas ponedoras, orientadas a la producción de huevos. Ambos sistemas requieren un manejo técnico especializado, basado en principios de sanidad, nutrición, bioseguridad y bienestar animal.
    
        .bg-color-19.tarjeta.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/30-1.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 La regulación de estas prácticas está definida por la Resolución ICA 3642 de 2013 y la Resolución ICA 68167 de 2020, que establecen las normas para la producción, manejo sanitario y bienestar de especies menores.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Pollos de engorde
    
    p.mb-5 El sistema de producción de pollos de engorde está diseñado para obtener carne en corto tiempo, con alta eficiencia alimenticia y bajo índice de mortalidad. Su duración total es de 35 a 45 días, dependiendo de la genética y el manejo. A continuación, se presenta la secuencia técnica y biológica que compone el ciclo productivo del pollo de engorde, desde la selección de reproductores hasta la comercialización, con énfasis en las condiciones de manejo y los estándares aplicados en Colombia.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        .titulo-sexto.color-acento-contenido
          h5 Figura 3.
          span Etapas del ciclo productivo de pollo de engorde
    
        figure
          img(src="@/assets/curso/tema2/31.png", data-aos="zoom-in", alt="Diagrama sobre las etapas del ciclo productivo del pollo que incluye selección de reproductores, cría, crecimiento, engorde y sacrificio o faena. ")

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        .tarjeta.bg-color-16.p-4
          PasosB.color-acento-contenido
            .row(titulo="Paso 1").p-5
              .col-md-7.mb-4.mb-md-0
                h5.mb-5 Selección de reproductores y obtención de pollitos
                ul.lista-ul--color.mb-0
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 Se emplean líneas híbridas de crecimiento rápido.  
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 Incubación artificial de huevos fértiles (21 días). 
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 Pollitos trasladados a granjas de engorde certificadas.
              .col-md-5
                figure
                  img(src='@/assets/curso/tema2/32.png', alt='Texto que describa la imagen')
            .row(titulo="Paso 2").p-5
              .col-md-7.mb-4.mb-md-0
                h5.mb-5 Cría (0-14 días)
                ul.lista-ul--color.mb-0
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 Etapa crítica de adaptación. 
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 Temperatura inicial: 32-34 °C, reduciéndose gradualmente.  
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 Alimentación balanceada y vacunación inicial (<em>Newcastle, Gumboro</em>).
              .col-md-5
                figure
                  img(src='@/assets/curso/tema2/33.png', alt='Texto que describa la imagen')
            .row(titulo="Paso 3").p-5
              .col-md-7.mb-4.mb-md-0
                h5.mb-5 Crecimiento (15-28 días)
                ul.lista-ul--color.mb-0
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 Desarrollo estructural. 
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 Ajuste de densidad (~10-12 aves/m²).  
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 Control ambiental y limpieza de cama.   
              .col-md-5
                figure
                  img(src='@/assets/curso/tema2/34.png', alt='Texto que describa la imagen')
            .row(titulo="Paso 4").p-5
              .col-md-7.mb-4.mb-md-0
                h5.mb-5 Engorde (29-42 días)
                ul.lista-ul--color.mb-0
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 Máxima eficiencia alimenticia. 
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 Peso comercial: 2,2-2,5 kg.  
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 Conversión alimenticia: 1,6-1,8.    
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 Mortalidad menor al 5 %.
              .col-md-5
                figure
                  img(src='@/assets/curso/tema2/35.png', alt='Texto que describa la imagen')
            .row(titulo="Paso 5").p-5
              .col-md-7.mb-4.mb-md-0
                h5.mb-5 Sacrificio o faena
                ul.lista-ul--color.mb-0
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 Traslado a planta autorizada por INVIMA.  
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 Sacrificio con trazabilidad y cumplimiento de normas de inocuidad.
              .col-md-5
                figure
                  img(src='@/assets/curso/tema2/36.png', alt='Texto que describa la imagen')

    .bg-full-width.bg-color-7
      .px-4.px-md-5
        .row.mb-5.align-items-center
          .col-lg-5.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema2/37.png", data-aos="zoom-in")
          .col-lg-7
            .bg-color-20.tarjeta.p-4(data-aos="fade-left")
              p.mb-0 En Colombia, la producción pecuaria se caracteriza por una alta tecnificación y una fuerte integración empresarial que abarca todas las etapas del proceso productivo, desde la selección genética hasta la distribución final. Este modelo permite un control total de la cadena de valor, garantizando trazabilidad, calidad e inocuidad en los productos. Además, el sector debe cumplir estrictamente con las normas ambientales, sanitarias y laborales vigentes, lo que asegura prácticas sostenibles y responsables dentro del marco legal nacional.
        
        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
            h3.titulo-con-imagen__texto Gallinas ponedoras
        
        p.mb-5 El ciclo de producción de huevo dura entre 72 y 80 semanas e implica un manejo riguroso desde la cría hasta el reemplazo.

        h3.bg-color-10.d-inline.p-2.tarjeta Fases del ciclo productivo
        p.mb-5.mt-5 El ciclo productivo de las aves de postura comprende distintas etapas que garantizan la madurez sexual, el máximo rendimiento y la renovación del plantel para mantener la productividad del sistema.

        .row.mb-5.justify-content-center
          .col-lg-3.order-lg-2.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema2/38.png", data-aos="zoom-in")
          .col-lg-7.order-lg-1
            LineaTiempoD.color-secundario
              div.text-small(numero="a" titulo="Cría y levante (0-18 semanas)")
                ul.lista-ul--color.mb-0
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check.bg-color-18
                    p.mb-0 Formación del sistema reproductivo.   
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check.bg-color-18
                    p.mb-0 Control de luz, temperatura y alimentación. 
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check.bg-color-18
                    p.mb-0 Ajuste del fotoperiodo para estimular el desarrollo adecuado.
              div.text-small(numero="b" titulo="Inicio de postura (18-20 semanas)")
                ul.lista-ul--color.mb-0
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check.bg-color-18
                    p.mb-0 Coincide con la madurez sexual. 
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check.bg-color-18
                    p.mb-0 Aumento progresivo en la producción de huevos.
              div.text-small(numero="c" titulo="Pico de postura (25-40 semanas)")
                ul.lista-ul--color.mb-0
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check.bg-color-18
                    p.mb-0 Máximo rendimiento (~90 % de postura).    
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check.bg-color-18
                    p.mb-0 Fotoperiodo de 14-16 horas de luz. 
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check.bg-color-18
                    p.mb-0 Manejo nutricional y sanitario estricto.
              div.text-small(numero="d" titulo="Fase de declinación (40-72 semanas)")
                ul.lista-ul--color.mb-0
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check.bg-color-18
                    p.mb-0 Disminución gradual de la postura.   
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check.bg-color-18
                    p.mb-0 Evaluación de la calidad del huevo y persistencia productiva.
              div.text-small(numero="e" titulo="Reemplazo y descarte (72-80 semanas)")
                ul.lista-ul--color.mb-0
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check.bg-color-18
                    p.mb-0 Las aves se sacrifican o se venden.  
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check.bg-color-18
                    p.mb-0 Ingreso de nuevas pollitas para el reinicio del ciclo productivo.

        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
            h3.titulo-con-imagen__texto Indicadores técnicos comunes

        p A pesar de que los pollos de engorde y las gallinas ponedoras tienen objetivos productivos distintos, es posible comparar algunos de sus parámetros técnicos clave. Esta comparación permite identificar diferencias en duración del ciclo, eficiencia alimenticia y productividad, aspectos esenciales para la planificación en sistemas avícolas.

        .row.justify-content-center.mb-5
          .col-lg-8.mb-3.mb-lg-0(data-aos="zoom-in").order-lg-2
            .titulo-sexto.color-acento-contenido
              h5 Tabla 9.
              span Indicadores técnicos comunes
            .tabla-a.color-acento-contenido.tbl
              table
                thead
                  tr
                    th.bg-color-9 Parámetro
                    th.bg-color-9 Pollos de engorde
                    th.bg-color-9 Gallinas ponedoras
                tbody.bg-color-white
                  tr
                    td Duración del ciclo
                    td 35-45 días
                    td 72-80 semanas
                  tr.bg-color-sintesis
                    td Conversión alimenticia
                    td 1,6-1,8
                    td —
                  tr
                    td Producción promedio
                    td 2,2-2,5 kg/ave
                    td 300-340 huevos/ave/ciclo
                  tr.bg-color-sintesis
                    td Mortalidad aceptable
                    td <5 %
                    td <8 %
                  tr
                    td Temperatura óptima
                    td 21-28 °C
                    td 18-25 °C
          .col-lg-3.order-lg-1
            figure
              img(src='@/assets/curso/tema2/39.png', alt='Texto que describa la imagen')
            
    .bg-full-width.bg-color-7
      .px-4.px-md-5
        .row.justify-content-center
          .col-lg-10
            .bg-color-19.mb-5.p-4.tarjeta(data-aos="fade-up")
              .row.justify-content-center.align-items-center
                .col-lg-auto.mb-3.mb-lg-0.order-lg-2
                  figure
                    img(src='@/assets/curso/tema2/40.png', alt='')
                .col-lg.order-lg-1
                  p Las particularidades para Colombia son: 
                  .p-3.bg-color-white.tarjeta
                    ul.lista-ul--color.mb-0
                      li.mb-3.d-flex
                        i.fa-solid.fa-circle-check
                        p.mb-0 Se utilizan líneas comerciales como Hy-Line, Lohmann, Bovans, Isa Brown
                      li.mb-3.d-flex
                        i.fa-solid.fa-circle-check
                        p.mb-0 Aplicación obligatoria de sistemas de bioseguridad y trazabilidad
                      li.mb-3.d-flex
                        i.fa-solid.fa-circle-check
                        p.mb-0 Bienestar animal como eje central del manejo: control de densidades, enriquecimiento ambiental y suministro constante de recursos
                    p.mb-0 El ciclo productivo de las aves, tanto de engorde como de postura, exige planificación técnica basada en la combinación de genética, nutrición, ambiente y sanidad, bajo el marco de las Buenas Prácticas Pecuarias (BPP). En Colombia, la avicultura se ha consolidado como una actividad estratégica para la seguridad alimentaria nacional, destacándose por su alta productividad, tecnificación y cumplimiento normativo.
    
    separador
    
    #t_2_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.5 Ciclo productivo de la codorniz (<em>Coturnix coturnix japonica</em>)
    
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/41.png')})`}"
      )(data-aos="zoom-in")
      .bloque-texto-g__texto.p-4
        p.mb-0 La codorniz japonesa (Coturnix coturnix japonica) es una especie aviar menor de gran importancia económica por su rápido crecimiento, alta eficiencia productiva y bajo requerimiento de espacio, lo que la convierte en una excelente opción para sistemas intensivos, familiares o de economía campesina. En Colombia, la coturnicultura ha ganado terreno especialmente en departamentos como Antioquia, Cundinamarca y Valle del Cauca, consolidándose como una alternativa rentable y sostenible dentro de las especies menores.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Duración total del ciclo productivo
    
    p.mb-5 El ciclo productivo de la codorniz es uno de los más cortos dentro de las aves de corral:

    .row.mb-5.align-items-center
      .col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/42.png", data-aos="zoom-in")
      .col-lg-9
        .bg-color-21.p-4(data-aos="fade-left").tarjeta
          .row
            .col-lg-3
              .bg-color-white.tarjeta.p-3.text-center.h-100
                h5 Duración total
                p.mb-0 6-8 semanas
            .col-lg-3
              .bg-color-white.tarjeta.p-3.text-center.h-100
                h5 Inicio de postura
                p.mb-0 Entre los 38 y 42 días de edad
            .col-lg-3
              .bg-color-white.tarjeta.p-3.text-center.h-100
                h5 Vida productiva
                p.mb-0 Aproximadamente 10-12 meses
            .col-lg-3
              figure
                img(src="@/assets/curso/tema2/43.svg", data-aos="zoom-in")
    
    p.mb-5 Durante este periodo, las codornices pueden alcanzar picos de postura del 90-95 % y producir en promedio 300 huevos/año por ave.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Etapas del ciclo productivo
    
    p.mb-5 El desarrollo de la codorniz comprende varias etapas claramente diferenciadas, desde la selección de reproductores hasta la finalización del lote. Cada fase debe ser manejada con criterios técnicos específicos para optimizar la productividad y reducir riesgos sanitarios.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        .titulo-sexto.color-acento-contenido
          h5 Figura 4.
          span Etapas del ciclo productivo de la codorniz
    
        figure
          img(src="@/assets/curso/tema2/44.png", data-aos="zoom-in", alt="Diagrama sobre las etapas del ciclo productivo de la codorniz que incluye selección de reproductores, incubación y nacimiento, cría y crecimiento inicial, producción de huevos, producción de carne y finalización con reemplazo. ")

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        .tarjeta.bg-color-16.p-4
          PasosB.color-acento-contenido
            .row(titulo="Paso 1").p-5
              .col-md-7.mb-4.mb-md-0
                h5.mb-5 Selección de reproductores
                p Se eligen aves de líneas genéticas diferenciadas según el propósito productivo:
                ul.lista-ul--color.mb-0
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 Líneas ponedoras: aves de menor tamaño, madurez sexual temprana y alta eficiencia de ovoposición. 
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 Líneas de carne: aves de mayor peso corporal, crecimiento acelerado y mejor rendimiento de canal.
                p La selección considera la adaptación al clima local, la sanidad del plantel y el cumplimiento de las normas de bioseguridad (Resolución ICA 68167 de 2020).
              .col-md-5
                figure
                  img(src='@/assets/curso/tema2/45.png', alt='Texto que describa la imagen')
            .row(titulo="Paso 2").p-5
              .col-md-7.mb-4.mb-md-0
                h5.mb-5 Incubación y nacimiento
                ul.lista-ul--color.mb-0
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 Duración de incubación: 16-17 días.
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 Se requiere una temperatura de 37,5 °C y humedad relativa del 60-65 % durante los primeros 14 días, aumentando a 70 % en el periodo final.  
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 Los pollitos son precoces y activos al nacimiento, por lo que rápidamente pasan a la fase de cría bajo condiciones controladas.
              .col-md-5
                figure
                  img(src='@/assets/curso/tema2/46.png', alt='Texto que describa la imagen')
            .row(titulo="Paso 3").p-5
              .col-md-7.mb-4.mb-md-0
                h5.mb-5 Cría y crecimiento inicial (0-21 días)
                ul.lista-ul--color.mb-0
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 Temperatura inicial: 36-37 °C, disminuyendo gradualmente 1 °C por día hasta alcanzar 25 °C.
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 Densidad recomendada: 60-80 codornices/m². 
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 Alimentación: concentrado iniciador con 24-26 % de proteína y agua fresca constante. 
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 Se debe garantizar una iluminación continua (24 h/día) durante los primeros días para estimular el consumo de alimento y uniformidad de crecimiento. 
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 La mortalidad aceptable en esta fase es menor al 7 %. 
              .col-md-5
                figure
                  img(src='@/assets/curso/tema2/47.png', alt='Texto que describa la imagen')
            .row(titulo="Paso 4").p-5
              .col-md-7.mb-4.mb-md-0
                h5.mb-5 Producción de huevos
                ul.lista-ul--color.mb-0
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 Inicio de postura: a los 38-40 días de edad. 
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 Inicio de postura: a los 38-40 días de edad.  
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 Producción anual: 280-320 huevos por ave (dependiendo de la genética y manejo).    
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 Peso promedio del huevo: 10-12 g.
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 Duración del ciclo: 10-12 meses, tras lo cual disminuye la eficiencia y se realiza el reemplazo del plantel.   
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 Factores clave: iluminación (16-17 horas diarias), alimentación balanceada, ventilación y control sanitario.
              .col-md-5
                figure
                  img(src='@/assets/curso/tema2/48.png', alt='Texto que describa la imagen')
            .row(titulo="Paso 5").p-5
              .col-md-7.mb-4.mb-md-0
                h5.mb-5 Producción de carne
                ul.lista-ul--color.mb-0
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 Aves seleccionadas de líneas pesadas o descartadas del ciclo de postura. 
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 Edad de sacrificio: 42-56 días.
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 Peso promedio al beneficio: 180-220 g por ave.
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 Conversión alimenticia: 2,5:1 (kg alimento/kg peso vivo).
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 Rendimiento en canal: 70-75 %.
              .col-md-5
                figure
                  img(src='@/assets/curso/tema2/49.png', alt='Texto que describa la imagen')
            .row(titulo="Paso 6").p-5
              .col-md-7.mb-4.mb-md-0
                h5.mb-5 Finalización y reemplazo
                p Al término de su vida productiva (10-12 meses), las codornices son descartadas o utilizadas para carne, y se reemplazan por nuevas generaciones.
                p El corto ciclo permite rotaciones múltiples durante el año, optimizando la utilización de espacio y recursos.

              .col-md-5
                figure
                  img(src='@/assets/curso/tema2/50.png', alt='Texto que describa la imagen')
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Indicadores técnicos generales
    
    p.mb-5 Los siguientes valores resumen los parámetros productivos más relevantes del sistema coturnícola. Son útiles para planificar el manejo zootécnico, evaluar resultados y comparar rendimientos entre lotes en producción de carne o postura.

    .row.justify-content-center.mb-5
      .col-lg-5.mb-3.mb-lg-0(data-aos="zoom-in").order-lg-2
        .titulo-sexto.color-acento-contenido
          h5 Tabla 10.
          span Indicadores técnicos generales
        .tabla-a.color-acento-contenido.tbl
          table
            thead
              tr
                th.bg-color-9 Parámetro
                th.bg-color-9 Valor promedio
            tbody.bg-color-white
              tr
                td Edad de inicio de postura
                td 38-40 días
              tr.bg-color-sintesis
                td Duración del ciclo productivo
                td 6-8 semanas
              tr
                td Producción anual de huevos
                td 280-320 huevos/ave
              tr.bg-color-sintesis
                td Peso del huevo
                td 10-12 g
              tr
                td Peso adulto (carne)
                td 180-220 g
              tr.bg-color-sintesis
                td Conversión alimenticia
                td 2,5:1
              tr
                td Mortalidad
                td <7 %
              tr.bg-color-sintesis
                td Duración de incubación
                td 16-17 días
      .col-lg-3.order-lg-1
        figure
          img(src='@/assets/curso/tema2/51.png', alt='Texto que describa la imagen')

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Particularidades en Colombia
    
    p.mb-5 La coturnicultura colombiana se encuentra en crecimiento, especialmente en sistemas de pequeña escala que integran familias rurales, agroemprendimientos y proyectos de diversificación pecuaria.

    .row.justify-content-center
      .col-lg-10
        .bg-color-6.mb-5.p-4.tarjeta(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto.mb-3.mb-lg-0.order-lg-2
              figure
                img(src='@/assets/curso/tema2/52.png', alt='')
            .col-lg.order-lg-1
              .p-3.bg-color-white.tarjeta
                ul.lista-ul--color.mb-0
                  li.mb-3.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 Se recomienda aplicar protocolos de bioseguridad, trazabilidad e inocuidad alimentaria definidos por el ICA.
                  li.mb-3.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 El cumplimiento de buenas prácticas de alimentación, densidad, iluminación y manejo ambiental es esencial.
                  li.mb-3.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 La alta rotación de lotes permite una rápida recuperación de inversión, pero exige estricto control sanitario y planificación reproductiva.
                  li.mb-3.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 La carne y los huevos de codorniz tienen alta aceptación comercial por su valor nutricional (altas proteínas, bajo colesterol) y presentación gourmet, abriendo oportunidades en mercados especializados.
    
    .row.justify-content-center 
      .col-lg-10
        .bg-color-5.tarjeta.mb-5
          .px-4.px-md-5.py-4
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema2/53.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 El ciclo productivo de la codorniz se caracteriza por su precocidad, alta eficiencia y rentabilidad, siendo ideal para sistemas productivos sostenibles e intensivos. En Colombia, su desarrollo aporta al fortalecimiento de la economía rural y a la diversificación de las especies menores, siempre dentro del cumplimiento de las Buenas Prácticas Pecuarias (BPP), la bioseguridad y las normas sanitarias vigentes.
    
    separador
    
    #t_2_6.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.6 Ciclo productivo de la cabra (Capra hircus)

    p.mb-5 La cabra (Capra hircus) es una especie menor de alta versatilidad productiva, aprovechada para la obtención de carne, leche, piel y fibra. Su capacidad de adaptación a condiciones climáticas adversas y su eficiencia alimenticia la convierten en una especie clave para los sistemas familiares, semi intensivos y extensivos, especialmente en regiones áridas y semiáridas de Colombia como La Guajira, Huila, Cesar y Norte de Santander.

    .row.mb-5
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/54.png", data-aos="zoom-in")
      .col-lg-7
        .bg-color-15.tarjeta.p-4(data-aos="fade-left")
          img(src="@/assets/curso/tema2/55.svg", style="max-width: 90px").mb-3
          p.mb-0 El ciclo productivo de la cabra varía según el sistema de manejo, pero en promedio abarca de 8 a 10 meses entre el empadre y la finalización del periodo de lactancia. Este proceso puede organizarse técnicamente para lograr tres crías en dos años, optimizando el uso del hato reproductivo y favoreciendo la sostenibilidad productiva.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Duración general del ciclo
    
    p.mb-5 El ciclo biológico y productivo de la cabra está determinado por su capacidad reproductiva y el tipo de explotación (carne, leche o doble propósito). A continuación, se presentan los parámetros promedio observados en los sistemas caprinos colombianos.

    .bg-full-width.bg-color-7
      .px-4.px-md-5
        .row.justify-content-center
          .col-lg-10
            .bg-color-11.mb-5.p-4.tarjeta(data-aos="fade-up")
              .row.justify-content-center.align-items-center
                .col-lg-auto.mb-3.mb-lg-0.order-lg-2
                  figure
                    img(src='@/assets/curso/tema2/56.png', alt='')
                .col-lg.order-lg-1
                  .p-3.bg-color-white.tarjeta
                     ul.lista-ul--color.mb-0
                      li.mb-3.d-flex
                        i.fa-solid.fa-circle-check
                        p.mb-0 <b>Duración del ciclo</b>: 8-10 meses.
                      li.mb-3.d-flex
                        i.fa-solid.fa-circle-check
                        p.mb-0 <b>Producción anual:</b> 1-2 partos por hembra (hasta 3 crías en 2 años con buena planificación).
                      li.mb-3.d-flex
                        i.fa-solid.fa-circle-check
                        p.mb-0 <b>Vida útil reproductiva</b>: 6-8 años.
                      
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Etapas del ciclo productivo
    
    p.mb-5 El ciclo productivo de la cabra se compone de una secuencia de fases biológicas y productivas interdependientes. Cada etapa requiere condiciones técnicas específicas de alimentación, sanidad y manejo para garantizar una producción eficiente y sostenible.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        .titulo-sexto.color-acento-contenido
          h5 Figura 5.
          span Etapas del ciclo productivo de la cabra
    
        figure
          img(src="@/assets/curso/tema2/57.png", data-aos="zoom-in", alt="Diagrama sobre el ciclo productivo de la cabra que incluye selección de reproductores, monta, gestación, parto, lactancia y crecimiento de crías, engorde o producción de leche, y finalización con reemplazo. ")

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        .tarjeta.bg-color-16.p-4
          PasosB.color-acento-contenido
            .row(titulo="Paso 1").p-5
              .col-md-7.mb-4.mb-md-0
                h5.mb-5 Selección de reproductores
                p Se seleccionan machos y hembras de razas rústicas o especializadas según el objetivo productivo (carne, leche o doble propósito). Los criterios incluyen buen estado corporal, alta fertilidad, antecedentes de partos exitosos, buena conformación mamaria en cabras lecheras y ausencia de defectos genéticos o físicos. En Colombia predominan razas criollas, <em>Anglonubia, Alpina, Saanen y Boer</em>, adaptadas a sistemas familiares o de pastoreo bajo condiciones tropicales.
              .col-md-5
                figure
                  img(src='@/assets/curso/tema2/58.png', alt='Texto que describa la imagen')
            .row(titulo="Paso 2").p-5
              .col-md-7.mb-4.mb-md-0
                h5.mb-5 Empadre / monta / cobertura
                p El empadre puede ser natural continuo (convivencia constante con el macho) o controlado/estacional, programado para coincidir con épocas de buena oferta de forraje. La relación macho:hembra recomendada es 1:25. La edad de primera monta es de 8-10 meses, siempre que el animal alcance al menos el 60 % del peso adulto. Con buena planificación alimenticia y sanitaria, es posible obtener tres partos en dos años (CONtexto Ganadero, 2023).
              .col-md-5
                figure
                  img(src='@/assets/curso/tema2/59.png', alt='Texto que describa la imagen')
            .row(titulo="Paso 3").p-5
              .col-md-7.mb-4.mb-md-0
                h5.mb-5 Gestación
                p La gestación dura entre 145 y 155 días (≈ 5 meses). El número de crías por parto oscila entre 1 y 3, dependiendo de la raza y el manejo nutricional. Durante esta etapa se debe garantizar una dieta balanceada y controlar enfermedades parasitarias y abortivas. Se recomienda suplementación energética y proteica en el último tercio del embarazo para evitar partos distócicos y mejorar la vitalidad de las crías.
              .col-md-5
                figure
                  img(src='@/assets/curso/tema2/60.png', alt='Texto que describa la imagen')
            .row(titulo="Paso 4").p-5
              .col-md-7.mb-4.mb-md-0
                h5.mb-5 Parto
                p El parto es una fase crítica del ciclo. Debe llevarse a cabo en instalaciones limpias, secas y tranquilas, con supervisión para evitar complicaciones. La atención posparto incluye la limpieza del ombligo con antiséptico, asegurar el calostrado en las primeras seis horas de vida y el monitoreo del estado corporal de la madre.
              .col-md-5
                figure
                  img(src='@/assets/curso/tema2/61.png', alt='Texto que describa la imagen')
            .row(titulo="Paso 5").p-5
              .col-md-7.mb-4.mb-md-0
                h5.mb-5 Lactancia y crecimiento de crías
                p La lactancia dura entre 60 y 90 días. Durante este periodo, los cabritos maman y comienzan a consumir forraje tierno o concentrado iniciador. En cabras lecheras se realiza el ordeño diario posterior al amamantamiento parcial o tras destete temprano. En sistemas de doble propósito, parte de la leche se destina al consumo humano y parte se reserva para el desarrollo de las crías. El destete se lleva a cabo cuando los cabritos alcanzan entre 8 y 12 kg de peso vivo.
              .col-md-5
                figure
                  img(src='@/assets/curso/tema2/62.png', alt='Texto que describa la imagen')
            .row(titulo="Paso 6").p-5
              .col-md-7.mb-4.mb-md-0
                h5.mb-5 Recría / engorde / producción de leche
                p En sistemas de carne, los cabritos se engordan hasta alcanzar 25-30 kg, momento ideal para su venta o sacrificio. En sistemas lecheros, la cabra entra en fase de producción de leche que puede extenderse de 120 a 300 días, según la raza y el manejo. Se recomienda un intervalo servicio-parto de aproximadamente 45 días en sistemas intensivos para conservar la eficiencia reproductiva. En Colombia, las razas Saanen y Alpina alcanzan producciones de 250-350 litros por lactancia, mientras que las razas criollas producen entre 80 y 150 litros en sistemas familiares.
              .col-md-5
                figure
                  img(src='@/assets/curso/tema2/63.png', alt='Texto que describa la imagen')
            .row(titulo="Paso 6").p-5
              .col-md-7.mb-4.mb-md-0
                h5.mb-5 Finalización y reemplazo
                p Al finalizar la lactancia o cuando la cabra presenta una disminución en su productividad, se procede a su reemplazo. Se seleccionan hembras jóvenes de alto potencial genético, y se descartan los animales con enfermedades o bajo rendimiento. También se comercializa la carne, la leche excedente y los subproductos como piel, estiércol o quesos artesanales. El ciclo reproductivo puede repetirse cada 8-10 meses en unidades familiares o semiintensivas.
              .col-md-5
                figure
                  img(src='@/assets/curso/tema2/64.png', alt='Texto que describa la imagen')
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Indicadores técnicos
    
    p.mb-5 Los indicadores técnicos permiten evaluar el rendimiento biológico y económico del sistema caprino. Estos parámetros sirven como guía para el seguimiento productivo y la toma de decisiones en los sistemas de carne, leche o doble propósito.

    .row.justify-content-center.mb-5
      .col-lg-5.mb-3.mb-lg-0(data-aos="zoom-in").order-lg-2
        .titulo-sexto.color-acento-contenido
          h5 Tabla 11.
          span Indicadores técnicos
        .tabla-a.color-acento-contenido.tbl
          table
            thead
              tr
                th.bg-color-9 Parámetro
                th.bg-color-9 Valor promedio
            tbody.bg-color-white
              tr
                td Duración del ciclo
                td 8-10 meses
              tr.bg-color-sintesis
                td Gestación
                td 145-155 días
              tr
                td Lactancia
                td 60-90 días
              tr.bg-color-sintesis
                td Crías por parto
                td 1-3
              tr
                td Producción anual de leche
                td 120-300 litros (razas lecheras)
              tr.bg-color-sintesis
                td Edad de empadre
                td 8-10 meses
              tr
                td Intervalo parto-parto
                td 8 meses aproximadamente
              tr.bg-color-sintesis
                td Rendimiento en canal (carne)
                td 45-50 %
              tr
                td Reemplazo del hato
                td Cada 3 años
      .col-lg-3.order-lg-1
        figure
          img(src='@/assets/curso/tema2/65.png', alt='Texto que describa la imagen')

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Particularidades para Colombia

    .row.mb-5
      .col-lg-5.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/66.png", data-aos="zoom-in")
      .col-lg-7.order-lg-1
        p(data-aos="fade-left") La capricultura colombiana se desarrolla principalmente bajo sistemas familiares o de pastoreo extensivo, caracterizados por su rusticidad, resiliencia y bajos costos de mantenimiento.
        .bg-color-22.tarjeta.p-4(data-aos="fade-left")
          .bg-color-white.tarjeta.p-5
            ul.lista-ul--color.mb-0
              li.mb-0.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 Es fundamental aplicar las Buenas Prácticas Pecuarias (BPP), protocolos de bioseguridad, bienestar animal y trazabilidad, conforme a la Resolución ICA 68167 de 2020.
              li.mb-0.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 La cabra contribuye significativamente a la seguridad alimentaria rural, la generación de ingresos y la sostenibilidad de sistemas mixtos (agropecuarios o silvopastoriles).
              li.mb-0.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 Su estiércol constituye un fertilizante orgánico valioso, aportando al manejo circular de nutrientes y al mejoramiento del suelo.
    
    .row.justify-content-center 
      .col-lg-10
        .bg-color-23.tarjeta.mb-5
          .px-4.px-md-5.py-4
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema2/67.svg", style="max-width: 90px").mx-auto
              .col-lg.text-white
                p.mb-0 El ciclo productivo de la cabra combina eficiencia reproductiva, rusticidad y diversidad de productos, posicionándola como una especie estratégica para los sistemas pecuarios sostenibles en Colombia. Su aprovechamiento integral —leche, carne, piel y abono— permite fortalecer la economía rural y fomentar la resiliencia frente al cambio climático.
    
    separador
    
    #t_2_7.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.7 Ciclo productivo de la oveja (<em>Ovis aries</em>)
    
    .bg-color-3.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema2/68.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") La oveja (<em>Ovis aries</em>) es una especie menor de gran importancia productiva y cultural, utilizada para la obtención de carne, lana y leche. Su adaptabilidad a diversos climas y sistemas (extensivo, semi intensivo o familiar), así como su valor en la economía rural, la convierten en una opción clave para el desarrollo pecuario en Colombia. En regiones como Nariño, Boyacá, Cauca, Cundinamarca y parte del Caribe seco, la ovinocultura cumple una función alimentaria, económica y de sostenibilidad ambiental.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Duración general del ciclo
    
    p.mb-5 El ciclo productivo de la oveja está determinado por su ritmo reproductivo y el objetivo zootécnico (carne, lana o doble propósito). A continuación, se presenta la duración general del ciclo bajo condiciones típicas de manejo en sistemas familiares o semi intensivos en Colombia.

    .row.justify-content-center
      .col-lg-10
        .bg-color-10.mb-5.p-4.tarjeta(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto.mb-3.mb-lg-0.order-lg-2
              figure
                img(src='@/assets/curso/tema2/69.png', alt='')
            .col-lg.order-lg-1
              .p-3.bg-color-white.tarjeta
                ul.lista-ul--color.mb-0
                  li.mb-3.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 <b>Duración del ciclo</b>: 7-10 meses
                  li.mb-3.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 <b>Producción anual:</b> 1 parto por hembra (en condiciones intensificadas: hasta 3 crías cada 2 años)
                  li.mb-3.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 <b>Vida útil reproductiva</b>: 5-7 años
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Etapas del ciclo productivo
    
    p.mb-5 El ciclo biológico y productivo de la oveja incluye varias etapas que deben gestionarse adecuadamente para garantizar una buena eficiencia reproductiva y productiva. A continuación, se detallan estas fases:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        .titulo-sexto.color-acento-contenido
          h5 Figura 6.
          span Etapas del ciclo productivo de la oveja
    
        figure
          img(src="@/assets/curso/tema2/70.png", data-aos="zoom-in", alt="Diagrama sobre el ciclo productivo del ovino que incluye selección de reproductores, empadre, gestación, parto, lactancia, recría, y finalización con reemplazo.")

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        .tarjeta.bg-color-16.p-4
          PasosB.color-acento-contenido
            .row(titulo="Paso 1").p-5
              .col-md-7.mb-4.mb-md-0
                h5.mb-5 Selección de reproductores
                p Se escogen hembras y carneros con buena conformación, sanidad comprobada, buena fertilidad y producción esperada según la línea (carne o lana). En Colombia se usan razas como <em>Pelibuey, Katahdin</em>, Santa Inés, <em>Dorper</em> y criolla. Los carneros deben tener libido activa, buen aplomo y testículos simétricos.
              .col-md-5
                figure
                  img(src='@/assets/curso/tema2/71.png', alt='Texto que describa la imagen')
            .row(titulo="Paso 2").p-5
              .col-md-7.mb-4.mb-md-0
                h5.mb-5 Empadre / monta / cobertura
                p El empadre puede ser natural o sincronizado. La estacionalidad reproductiva de algunas razas puede ser limitada por fotoperiodo. En razas tropicalizadas, el empadre es continuo o planificado. La relación macho:hembra recomendada es de 1:30. Se puede usar inseminación artificial en programas de mejoramiento.
              .col-md-5
                figure
                  img(src='@/assets/curso/tema2/72.png', alt='Texto que describa la imagen')
            .row(titulo="Paso 3").p-5
              .col-md-7.mb-4.mb-md-0
                h5.mb-5 Gestación
                p La gestación dura entre 144 y 152 días (~5 meses). El número de crías por parto varía entre 1 y 3. Se debe brindar nutrición adecuada y monitoreo sanitario para prevenir toxemias, abortos y deficiencias. En el último tercio se aumenta la energía y proteína de la dieta.
              .col-md-5
                figure
                  img(src='@/assets/curso/tema2/73.png', alt='Texto que describa la imagen')
            .row(titulo="Paso 4").p-5
              .col-md-7.mb-4.mb-md-0
                h5.mb-5 Parto
                p Se debe asegurar higiene, sombra, cama seca y asistencia en caso de distocias. El parto suele ser rápido (1-2 h). El calostro debe administrarse dentro de las primeras 6 horas. Se realiza corte y desinfección del ombligo, y se verifica la viabilidad del cordero.
              .col-md-5
                figure
                  img(src='@/assets/curso/tema2/74.png', alt='Texto que describa la imagen')
            .row(titulo="Paso 5").p-5
              .col-md-7.mb-4.mb-md-0
                h5.mb-5 Lactancia y crecimiento inicial
                p La lactancia dura de 60 a 90 días. Durante este tiempo los corderos maman y pueden recibir <em>creep feeding</em> a partir de los 15 días. En sistemas de doble propósito se puede ordeñar parcialmente a la madre. El destete se realiza a los 2-3 meses, cuando el cordero pesa entre 12 y 18 kg.
              .col-md-5
                figure
                  img(src='@/assets/curso/tema2/75.png', alt='Texto que describa la imagen')
            .row(titulo="Paso 6").p-5
              .col-md-7.mb-4.mb-md-0
                h5.mb-5 Recría / engorde / producción de leche
                p En sistemas de carne, los corderos se engordan hasta los 30-40 kg (4-5 meses). En sistemas lecheros, la oveja produce durante 120-180 días. Las razas lecheras como <em>Lacaune o East Friesian</em> requieren ordeño dos veces al día. La conversión alimenticia mejora con pasturas de calidad y suplementos.
              .col-md-5
                figure
                  img(src='@/assets/curso/tema2/76.png', alt='Texto que describa la imagen')
            .row(titulo="Paso 6").p-5
              .col-md-7.mb-4.mb-md-0
                h5.mb-5 Finalización y reemplazo
                p Una vez termina la lactancia o se reduce la productividad, se reemplazan las ovejas por hembras jóvenes seleccionadas. Los animales viejos o improductivos se destinan a carne. El estiércol ovino puede aprovecharse como fertilizante orgánico.
              .col-md-5
                figure
                  img(src='@/assets/curso/tema2/77.png', alt='Texto que describa la imagen')
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Indicadores técnicos
    
    p.mb-5 Los siguientes parámetros representan promedios observados en sistemas ovinos colombianos con buen manejo. Sirven de referencia para evaluar el desempeño productivo y planificar el ciclo de manera eficiente.

    .row.justify-content-center.mb-5
      .col-lg-8.mb-3.mb-lg-0(data-aos="zoom-in").order-lg-2
        .titulo-sexto.color-acento-contenido
          h5 Tabla 12.
          span Indicadores técnicos
        .tabla-a.color-acento-contenido.tbl
          table
            thead
              tr
                th.bg-color-9 Parámetro
                th.bg-color-9 Valor promedio
            tbody.bg-color-white
              tr
                td Duración del ciclo
                td 7-10 meses
              tr.bg-color-sintesis
                td Gestación
                td 144-152 días
              tr
                td Lactancia
                td 60-90 días
              tr.bg-color-sintesis
                td Crías por parto
                td 1-3
              tr
                td Edad de empadre
                td 8-10 meses
              tr.bg-color-sintesis
                td Intervalo entre partos
                td 8-9 meses
              tr
                td Peso al destete
                td 12-18 kg
              tr.bg-color-sintesis
                td Peso a sacrificio
                td 30-40 kg (4-5 meses)
              tr
                td Rendimiento en canal
                td 45-52 %
              tr.bg-color-sintesis
                td Producción de leche (razas lecheras)
                td 100-300 litros/lactancia
              tr
                td Reemplazo del hato
                td Cada 3-4 años

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Particularidades para Colombia
    
    p.mb-5 La ovinocultura colombiana es principalmente de tipo familiar, extensiva o semiintensiva, desarrollada en regiones rurales donde se aprovecha la rusticidad de las razas y su capacidad de pastoreo. Algunas características particulares son:

    .bg-full-width.tarjeta.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-color-16.tarjeta.p-4
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/78.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Adaptabilidad climática
              p Las razas criollas y tropicalizadas permiten producción desde zonas frías hasta el Caribe seco.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/79.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Bajos costos de mantenimiento
              p El pastoreo extensivo reduce los costos, aunque puede limitar la productividad si no existe un control nutricional adecuado.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/80.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Oportunidades comerciales
              p El cordero joven es altamente demandado por su carne magra y suave. Además, la lana se utiliza con fines artesanales en algunas regiones.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/81.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Normativa vigente
              p Se deben aplicar las Buenas Prácticas Pecuarias (BPP), los programas sanitarios del ICA y garantizar la trazabilidad conforme a la Resolución 68167 de 2020.

    .row.justify-content-center 
      .col-lg-10
        .bg-color-3.tarjeta.mb-5
          .px-4.px-md-5.py-4
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema2/82.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 El ciclo productivo de la oveja combina eficiencia reproductiva, rusticidad y diversificación de productos (carne, leche, lana), lo que permite su integración en sistemas sostenibles de producción familiar o semi intensiva en Colombia. Su contribución a la seguridad alimentaria rural, el empleo y la fertilización de suelos con estiércol la convierten en una especie de alto valor estratégico en zonas rurales del país.




</template>

<script>
export default {
  name: 'Tema2',
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
