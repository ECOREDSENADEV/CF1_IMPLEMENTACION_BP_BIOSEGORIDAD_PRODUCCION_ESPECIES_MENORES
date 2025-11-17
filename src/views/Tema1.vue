<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Clasificación biológica de las especies menores
    
    .bg-color-3.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema1/1.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") La producción pecuaria involucra una diversidad de animales que deben ser correctamente identificados, clasificados y comprendidos desde el punto de vista biológico. Para lograrlo, es fundamental recurrir a la clasificación zoológica, la cual permite ubicar a cada especie dentro de un sistema jerárquico basado en sus características naturales. Este enfoque no solo facilita el manejo técnico de cada especie menor, sino que también garantiza la aplicación adecuada de normas de bienestar animal, sanidad, nutrición y trazabilidad. A continuación, se presentan los fundamentos generales de dicha clasificación, así como la taxonomía específica de las principales especies menores utilizadas en Colombia con fines productivos.
    
    separador
    
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.1 Concepto de clasificación zoológica
    
    .row.mb-5
      .col-lg-5.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/2.svg", data-aos="zoom-in")
      .col-lg-7.order-lg-1
        p(data-aos="fade-left") La clasificación zoológica, también llamada taxonomía, es una disciplina de la biología que estudia, describe y organiza los organismos vivos en grupos jerárquicos, basándose en sus características morfológicas, genéticas, evolutivas y ecológicas. Esta estructura jerárquica permite ordenar la biodiversidad, facilitar la comunicación científica y entender relaciones evolutivas y de parentesco entre especies. En el ámbito de la producción pecuaria, comprender la clasificación zoológica de los animales involucrados es fundamental para:
    
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/3.svg", data-aos="zoom-in")
      .col-lg-7
        .bg-fondo-1.tarjeta.p-4(data-aos="fade-left")
          .bg-color-white.tarjeta.p-5
            ul.lista-ul--color.mb-0
              li.mb-0.d-flex
                i.fa-solid.fa-circle-check.bg-color-4
                p.mb-0 Identificar con precisión la especie manejada, lo cual es crucial para aplicar correctamente aspectos relacionados con reproducción, nutrición, sanidad y regulación normativa.
              li.mb-0.d-flex
                i.fa-solid.fa-circle-check.bg-color-4
                p.mb-0 Reconocer sus características biológicas específicas (tiempo de gestación, adaptación ambiental, requerimientos nutritivos), las cuales varían entre especies, géneros y familias.
              li.mb-0.d-flex
                i.fa-solid.fa-circle-check.bg-color-4
                p.mb-0 Asegurar trazabilidad y documentación coherente en esquemas de buenas prácticas pecuarias, bienestar animal, sanidad y normatividad, considerando que ciertas normas aplican de forma diferente según la especie o grupo taxonómico.
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/4.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-5.tarjeta.p-4(data-aos="fade-left")
          p La taxonomía sigue una jerarquía universalmente aceptada que va desde los niveles más amplios hasta los más específicos:
          .bg-color-6.tarjeta.p-3.mb-3(data-aos="fade-left")
            p.mb-0 <b>Reino → Filo → Clase → Orden → Familia → Género → Especie</b> (y en algunos casos, Subespecie o Raza).
          p.mb-0 Esta clasificación está sujeta a revisión constante conforme avanzan los estudios en genética, filogenia molecular y biogeografía.

    .bg-full-width.bg-color-7
      .px-4.px-md-5
        separador
        
        #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 1.2 Taxonomía general de las especies pecuarias menores
        
        p.mb-5 A continuación, se presenta la clasificación científica y el origen/difusión de las principales especies menores de interés en la producción pecuaria en Colombia:

        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
            h3.titulo-con-imagen__texto Cuy (<em>Cavia porcellus</em>)
        
        p.mb-5 Pequeño roedor doméstico originario de los Andes sudamericanos, criado tradicionalmente para el consumo humano. Su alta prolificidad, incisivos de crecimiento continuo y dieta herbívora requieren un manejo técnico especializado.
        
        .row.justify-content-center.mb-5
          .col-lg-5.mb-3.mb-lg-0(data-aos="zoom-in")
            .titulo-sexto.color-acento-contenido
              h5 Tabla 1.
              span Clasificación científica del cuy (<em>Cavia porcellus</em>)
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
                    td Rodentia
                  tr
                    td Familia
                    td Caviidae
                  tr.bg-color-sintesis
                    td Género
                    td Cavia
                  tr
                    td Especie
                    td Cavia porcellus
          .col-lg-4
            .tarjeta--boton.bg-color-8.px-4.py-5.h-100
              .row.justify-content-center.mb-3
                .col-8
                  figure
                    img(src='@/assets/curso/tema1/5.png', alt='Texto que describa la imagen')
              div.text-center.text-white
                h5.mb-4 Origen y difusión:
                p.mb-0 Originario de Perú, Ecuador y Bolivia. Domesticado por pueblos indígenas. Su crianza se ha difundido en Colombia, especialmente en zonas de montaña y sistemas familiares.

        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
            h3.titulo-con-imagen__texto Conejo doméstico (<em>Oryctolagus cuniculus</em>)
        
        p.mb-5 Mamífero lagomorfo, muchas veces confundido con roedor. Su uso en producción cárnica está en crecimiento en Colombia. Presenta diferencias anatómicas y fisiológicas relevantes respecto a los roedores.
        
        .row.justify-content-center.mb-5
          .col-lg-5.mb-3.mb-lg-0(data-aos="zoom-in")
            .titulo-sexto.color-acento-contenido
              h5 Tabla 2.
              span Clasificación científica del conejo doméstico (<em>Oryctolagus cuniculus</em>)
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
                    td Lagomorpha
                  tr
                    td Familia
                    td Leporidae
                  tr.bg-color-sintesis
                    td Género
                    td Oryctolagus
                  tr
                    td Especie
                    td Oryctolagus cuniculus
          .col-lg-4
            .tarjeta--boton.bg-color-10.px-4.py-5.h-100
              .row.justify-content-center.mb-3
                .col-8
                  figure
                    img(src='@/assets/curso/tema1/6.png', alt='Texto que describa la imagen')
              div.text-center
                h5.mb-5 Origen y difusión:
                p.mb-0 Originario de la Península Ibérica y el suroeste de Francia. Tras su domesticación, fue introducido ampliamente en otros continentes, incluyendo América Latina y Colombia.

    .bg-full-width.bg-color-7
      .px-4.px-md-5
        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
            h3.titulo-con-imagen__texto Aves de corral (<em>Gallus gallus domesticus</em>)
        
        p.mb-5 Comprende las líneas domésticas derivadas de Gallus gallus, como gallinas ponedoras y pollos de engorde. Son fundamentales en la avicultura comercial colombiana.
        
        .row.justify-content-center.mb-5
          .col-lg-5.mb-3.mb-lg-0(data-aos="zoom-in")
            .titulo-sexto.color-acento-contenido
              h5 Tabla 3.
              span Clasificación científica de las aves de corral (<em>Gallus gallus domesticus</em>)
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
                    td Aves
                  tr.bg-color-sintesis
                    td Orden
                    td Galliformes
                  tr
                    td Familia
                    td Phasianidae
                  tr.bg-color-sintesis
                    td Género
                    td Gallus
                  tr
                    td Especie
                    td Gallus gallus domesticus
          .col-lg-4
            .tarjeta--boton.bg-color-9.px-4.py-5.h-100
              .row.justify-content-center.mb-3
                .col-8
                  figure
                    img(src='@/assets/curso/tema1/7.png', alt='Texto que describa la imagen')
              div.text-center
                h5.mb-5 Origen y difusión:
                p.mb-0 Derivada del gallo rojo salvaje (<em>Gallus gallus</em>) del sudeste asiático. Su domesticación y distribución global la convierten en una especie clave en la avicultura mundial y colombiana.

        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
            h3.titulo-con-imagen__texto Codorniz (<em>Coturnix coturnix japonica</em>)
        
        p.mb-5 Pequeña ave de corral criada intensivamente por su carne y huevos. Su rápido ciclo productivo y adaptabilidad la hacen ideal para sistemas menores.
        
        .row.justify-content-center.mb-5
          .col-lg-5.mb-3.mb-lg-0(data-aos="zoom-in")
            .titulo-sexto.color-acento-contenido
              h5 Tabla 4.
              span Clasificación científica de la codorniz (<em>Coturnix coturnix japonica</em>)
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
                    td Aves
                  tr.bg-color-sintesis
                    td Orden
                    td Galliformes
                  tr
                    td Familia
                    td Phasianidae
                  tr.bg-color-sintesis
                    td Género
                    td Coturnix
                  tr
                    td Especie
                    td Coturnix japonica
          .col-lg-4
            .tarjeta--boton.bg-color-6.px-4.py-5.h-100
              .row.justify-content-center.mb-3
                .col-8
                  figure
                    img(src='@/assets/curso/tema1/8.png', alt='Texto que describa la imagen')
              div.text-center
                h5.mb-5 Origen y difusión:
                p.mb-0 Originaria del este de Asia (Japón, Corea, China). Domesticada desde la antigüedad y hoy difundida globalmente.

        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
            h3.titulo-con-imagen__texto Cabra doméstica (<em>Capra hircus</em>)
        
        p.mb-5 Rumiante artiodáctilo muy versátil, utilizado para leche, carne, piel y fibra. En Colombia es común en sistemas de montaña, subsistencia y producción familiar.
        
        .row.justify-content-center.mb-5
          .col-lg-5.mb-3.mb-lg-0(data-aos="zoom-in")
            .titulo-sexto.color-acento-contenido
              h5 Tabla 5.
              span Clasificación científica de la cabra doméstica (<em>Capra hircus</em>)
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
                    td Capra
                  tr.bg-color-sintesis
                    td Especie
                    td Capra hircus
          .col-lg-4
            .tarjeta--boton.bg-color-11.px-4.py-5.h-100
              .row.justify-content-center.mb-3
                .col-8
                  figure
                    img(src='@/assets/curso/tema1/9.png', alt='Texto que describa la imagen')
              div.text-center.text-white
                h5.mb-5 Origen y difusión:
                p.mb-0 Doméstica del bezoar salvaje (Capra aegagrus), originario de Asia Menor y Medio Oriente, domesticada hace unos 10 000 años. Hoy está presente en todo el mundo, incluida Colombia.

        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
            h3.titulo-con-imagen__texto Oveja doméstica (<em>Ovis aries</em>)
        
        p.mb-5 Rumiante artiodáctilo criado por su carne, lana y leche. En Colombia tiene presencia tanto en producción cárnica como lanar, dependiendo de la región.
        
        .row.justify-content-center.mb-5
          .col-lg-5.mb-3.mb-lg-0(data-aos="zoom-in")
            .titulo-sexto.color-acento-contenido
              h5 Tabla 6.
              span Clasificación científica de la oveja doméstica (<em>Ovis aries</em>)
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
          .col-lg-4
            .tarjeta--boton.bg-color-10.px-4.py-5.h-100
              .row.justify-content-center.mb-3
                .col-8
                  figure
                    img(src='@/assets/curso/tema1/10.png', alt='Texto que describa la imagen')
              div.text-center
                h5.mb-5 Origen y difusión:
                p.mb-0 Descendiente del muflón asiático (Ovis orientalis), domesticada entre 9 000 y 11 000 años atrás en el Creciente Fértil. Su crianza se ha expandido globalmente.


    
    
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
