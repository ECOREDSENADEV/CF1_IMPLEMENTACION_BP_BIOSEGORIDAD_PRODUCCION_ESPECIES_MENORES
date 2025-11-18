<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 Buenas Prácticas Pecuarias (BPP) en especies menores
    
    .bloque-texto-a.color-acento-contenido.p-4.p-md-5.mb-5 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          figure
            img(src="@/assets/curso/tema6/1.png", data-aos="zoom-in") 
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p La implementación de Buenas Prácticas Pecuarias (BPP) en la producción de cuyes, conejos, aves, codornices, cabras y ovejas representa un eje fundamental para asegurar productos inocuos, sostenibles y éticos. En el contexto colombiano, estas prácticas están alineadas con la normativa del ICA y organismos internacionales como la FAO y Agrosavia, buscando elevar la calidad sanitaria y ambiental del sistema productivo.
    
    separador
    
    #t_6_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.1 Concepto y principios de las Buenas Prácticas Pecuarias
    
    .bg-full-width.bg-color-13
      .px-4.px-md-5
        .row.mb-5.align-items-center
          .col-lg-5.mb-3.mb-lg-0.order-lg-2
            figure
              img(src="@/assets/curso/tema6/2.png", data-aos="zoom-in")
          .col-lg-7.order-lg-1
            p Antes de aplicar medidas técnicas, es fundamental comprender qué son las BPP y sobre qué principios se sustentan. Las Buenas Prácticas Pecuarias (BPP) son el conjunto de acciones, principios y normas técnicas aplicadas en la producción animal, cuyo objetivo es garantizar la inocuidad de los alimentos, el bienestar de los animales, la sostenibilidad ambiental y la trazabilidad a lo largo de toda la cadena productiva (FAO, 2023; ICA, 2024).
            .bg-color-5.mb-3
              .px-4.px-md-5.p-4
                .row.align-items-center
                  .col-lg-auto.mb-3.mb-lg-0
                    img(src="@/assets/curso/tema6/3.svg", style="max-width: 90px").mx-auto
                  .col-lg
                    p.mb-0 Su finalidad es minimizar los riesgos biológicos, químicos y físicos, produciendo alimentos seguros y saludables sin comprometer el entorno ni la salud pública.

        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
            h3.titulo-con-imagen__texto Principios fundamentales
        
        p.mb-5 A continuación, se resumen los cinco principios clave que rigen las BPP en el ámbito pecuario:

        .bg-full-width.bg-color-7
          .px-4.px-md-5
            .bg-full-width.tarjeta.bg-fondo-slider.mb-5
              .p-4.p-md-5
                SlyderA(tipo="b").bg-color-16.tarjeta.p-4
                  .row.align-items-center.p-4.p-md-5
                    .col-lg-5.order-2
                      figure
                        img(src="@/assets/curso/tema6/4.png")
                    .col-lg-7.order-1.mb-3.mb-lg-0
                      h5 Producción inocua y segura
                      p Garantizar productos animales libres de contaminantes.
                  .row.align-items-center.p-4.p-md-5
                    .col-lg-5.order-2
                      figure
                        img(src="@/assets/curso/tema6/5.png")
                    .col-lg-7.order-1.mb-3.mb-lg-0
                      h5 Bienestar animal
                      p Cumplir con las cinco libertades: sin hambre ni sed, sin incomodidad, sin dolor ni enfermedad, libres para comportarse naturalmente y libres de miedo o estrés.
                  .row.align-items-center.p-4.p-md-5
                    .col-lg-5.order-2
                      figure
                        img(src="@/assets/curso/tema6/6.png")
                    .col-lg-7.order-1.mb-3.mb-lg-0
                      h5 Uso racional de medicamentos
                      p Aplicar medicamentos con registro ICA, respetando tiempos de retiro y sin generar resistencia antimicrobiana.
                  .row.align-items-center.p-4.p-md-5
                    .col-lg-5.order-2
                      figure
                        img(src="@/assets/curso/tema6/7.png")
                    .col-lg-7.order-1.mb-3.mb-lg-0
                      h5 Gestión ambiental responsable
                      p Manejo adecuado del estiércol y residuos para evitar contaminación de suelos y fuentes hídricas.
                  .row.align-items-center.p-4.p-md-5
                    .col-lg-5.order-2
                      figure
                        img(src="@/assets/curso/tema6/8.png")
                    .col-lg-7.order-1.mb-3.mb-lg-0
                      h5 Trazabilidad
                      p Registrar todo el proceso productivo desde el nacimiento hasta la comercialización.
        
        separador
        
        #t_6_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 6.2 Objetivos de las BPP en especies menores
        
        p.mb-5 Los objetivos de las BPP en la producción de especies menores se orientan tanto al bienestar animal como a la calidad de los productos y la sostenibilidad del sistema. La tabla siguiente sintetiza estos fines y su aplicación práctica:

        .row.justify-content-center.mb-5
          .col-lg-12.mb-3.mb-lg-0(data-aos="zoom-in").order-lg-2
            .titulo-sexto.color-acento-contenido
              h5 Tabla 19.
              span Objetivos clave en la producción pecuaria responsable
            .tabla-a.color-acento-contenido.tbl
              table
                thead
                  tr
                    th.bg-color-9 Objetivo
                    th.bg-color-9 Descripción
                    th.bg-color-9 Aplicación práctica
                tbody.bg-color-white
                  tr
                    td Garantizar inocuidad alimentaria
                    td Evitar contaminantes en carne, leche, huevos o pieles.
                    td Control sanitario y registros de tratamientos.
                  tr.bg-color-sintesis
                    td Asegurar bienestar animal
                    td Minimizar el estrés durante la cría y el sacrificio.
                    td Ambientes con temperatura y ventilación adecuados.
                  tr
                    td Proteger la salud pública
                    td Reducir riesgos zoonóticos como salmonelosis o brucelosis.
                    td Vacunación y control de plagas.
                  tr.bg-color-sintesis
                    td Optimizar productividad sostenible
                    td Mejorar eficiencia y reducir pérdidas económicas.
                    td Alimentación balanceada y control reproductivo.
                  tr
                    td Promover sostenibilidad ambiental
                    td Disminuir el impacto ambiental de las unidades productivas.
                    td Uso de compostaje y biodigestores.

        
        separador
        
    #t_6_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.3 Componentes esenciales de las BPP
    
    p.mb-5 Las BPP se estructuran en torno a cuatro componentes clave que integran prácticas de manejo productivo, sanitario, ambiental y documental. A continuación, se describe cada uno de ellos:

    TabsB.color-acento-contenido.mb-5
      .p-4.py-md-5(titulo="A. Manejo del agua y la alimentación" :icono="require('@/assets/componentes/6.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-6.mb-4.mb-md-0
            h5 A. Manejo del agua y la alimentación
            p Una nutrición adecuada y agua limpia son fundamentales para evitar enfermedades y asegurar un crecimiento eficiente. 
            ul.lista-ul--color.mb-0
              li.mb-2.d-flex
                i.fa-solid.fa-circle-check.bg-color-18
                p.mb-0 Agua potable obligatoria (Resolución 2115 de 2007). 
              li.mb-2.d-flex
                i.fa-solid.fa-circle-check.bg-color-18
                p.mb-0 Limpieza semanal de bebederos.  
              li.mb-2.d-flex
                i.fa-solid.fa-circle-check.bg-color-18
                p.mb-0 Alimentación con forrajes limpios, raciones balanceadas y suplementos minerales. 
              h5 Recomendaciones alimentarias por especie: 
              ul.lista-ul--color.mb-0
                li.mb-2.d-flex
                  i.fa-solid.fa-circle-check.bg-color-18
                  p.mb-0 Cuyes y conejos: forraje fresco, leguminosas y concentrados vegetales.  
                li.mb-2.d-flex
                  i.fa-solid.fa-circle-check.bg-color-18
                  p.mb-0 Cabras y ovejas: pastoreo rotativo, sales minerales y henos.  
                li.mb-2.d-flex
                  i.fa-solid.fa-circle-check.bg-color-18
                  p.mb-0 Aves y codornices: alimentos certificados y libres de micotoxinas.
          .col-lg-5
            figure
              img(src='@/assets/curso/tema6/9.png', alt='Texto que describa la imagen')
      .p-4.py-md-5(titulo="B. Bienestar y sanidad animal " :icono="require('@/assets/componentes/7.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-6.mb-4.mb-md-0
            h5 B. Bienestar y sanidad animal 
            p Garantizar la salud y el bienestar implica atender aspectos físicos, sanitarios y emocionales. 
            ul.lista-ul--color.mb-0
              li.mb-2.d-flex
                i.fa-solid.fa-circle-check.bg-color-18
                p.mb-0 Aplicación de las cinco libertades (FAWC, 1993). 
              li.mb-2.d-flex
                i.fa-solid.fa-circle-check.bg-color-18
                p.mb-0 Cumplimiento de la Resolución ICA 136 de 2020 sobre transporte.  
              li.mb-2.d-flex
                i.fa-solid.fa-circle-check.bg-color-18
                p.mb-0 Protocolos de bioseguridad: pediluvios, cuarentenas y lavado de manos.
              li.mb-2.d-flex
                i.fa-solid.fa-circle-check.bg-color-18
                p.mb-0 Planes sanitarios con vacunación y antiparasitarios registrados. 
          .col-lg-5
            figure
              img(src='@/assets/curso/tema6/10.png', alt='Texto que describa la imagen')
      .p-4.py-md-5(titulo="C. Manejo ambiental y residuos" :icono="require('@/assets/componentes/7.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-6.mb-4.mb-md-0
            h5 C. Manejo ambiental y residuos
            p La gestión adecuada de los residuos previene la contaminación y fomenta la sostenibilidad. 
            ul.lista-ul--color.mb-0
              li.mb-2.d-flex
                i.fa-solid.fa-circle-check.bg-color-18
                p.mb-0 Clasificación de residuos sólidos, líquidos y biológicos. 
              li.mb-2.d-flex
                i.fa-solid.fa-circle-check.bg-color-18
                p.mb-0 Aprovechamiento del estiércol en compost o biodigestores.   
              li.mb-2.d-flex
                i.fa-solid.fa-circle-check.bg-color-18
                p.mb-0 Aprovechamiento del estiércol en compost o biodigestores.
              li.mb-2.d-flex
                i.fa-solid.fa-circle-check.bg-color-18
                p.mb-0 Cumplimiento del Decreto 1500 de 2007 y la Ley 99 de 1993. 
            p <b>Ejemplo</b>: en cunicultura, el estiércol seco compostado se transforma en abono natural sin riesgos sanitarios.
          .col-lg-5
            figure
              img(src='@/assets/curso/tema6/11.png', alt='Texto que describa la imagen')
      .p-4.py-md-5(titulo="D. Registro y documentación técnica" :icono="require('@/assets/componentes/7.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-6.mb-4.mb-md-0
            h5 D. Registro y documentación técnica
            p La trazabilidad se fundamenta en una gestión documental organizada y actualizada. Según el ICA (2024), los registros obligatorios incluyen: 
            ul.lista-ul--color.mb-0
              li.mb-2.d-flex
                i.fa-solid.fa-circle-check.bg-color-18
                p.mb-0 Nacimientos, servicios y partos. 
              li.mb-2.d-flex
                i.fa-solid.fa-circle-check.bg-color-18
                p.mb-0 Tratamientos y vacunaciones.  
              li.mb-2.d-flex
                i.fa-solid.fa-circle-check.bg-color-18
                p.mb-0  Mortalidad, consumo de alimento y desinfecciones. 
              li.mb-2.d-flex
                i.fa-solid.fa-circle-check.bg-color-18
                p.mb-0  Movilización animal mediante la Guía Sanitaria de Movilización (GSM).
          .col-lg-5
            figure
              img(src='@/assets/curso/tema6/12.png', alt='Texto que describa la imagen')
    
    separador
    
    #t_6_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.4 Trazabilidad en las cadenas productivas
    
    p.mb-5 La trazabilidad permite seguir el recorrido de un animal o producto desde su origen hasta el consumidor. En especies menores, esta práctica fortalece la bioseguridad y la confianza del mercado.

    .row.mb-5.justify-content-center.mb-3
      .col-sm-6.col-lg-3.mb-4.mb-lg-0(data-aos="fade-down")
        .tarjeta--boton.bg-color-25.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema6/13.svg', alt='Texto que describa la imagen')
          h5.text-center Identificación individual o por lotes
          p.text-center Anillos, tatuajes, microchips o etiquetas.
      .col-sm-6.col-lg-3.mb-4.mb-lg-0(data-aos="fade-down")
        .tarjeta--boton.bg-color-25.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema6/14.svg', alt='Texto que describa la imagen')
          h5.text-center Registro genético y sanitario
          p.text-center Historia clínica y reproductiva.
      .col-sm-6.col-lg-3.mb-4.mb-lg-0(data-aos="fade-down")
        .tarjeta--boton.bg-color-25.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema6/15.svg', alt='Texto que describa la imagen')
          h5.text-center Guías de movilización ICA
          p.text-center Documento legal para transporte intermunicipal.
      .col-sm-6.col-lg-3.mb-4.mb-lg-0(data-aos="fade-down")
        .tarjeta--boton.bg-color-25.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema6/16.svg', alt='Texto que describa la imagen')
          h5.text-center Sistema SIGMA
          p.text-center Plataforma nacional para control de movilización.
    
    separador
    
    #t_6_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.5 Inocuidad de los productos pecuarios
    
    .row.mb-5.align-items-center
      .col-lg-3.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema6/17.png", data-aos="zoom-in")
      .col-lg-9.order-lg-1
        p La inocuidad garantiza que los productos de origen animal sean aptos para el consumo humano sin representar riesgos sanitarios. Esta se logra mediante una cadena de control que abarca desde la producción hasta el sacrificio.
        .bg-color-10.p-4.tarjeta(data-aos="fade-up")
          .row.justify-content-center.align-items-center.mb-3
            .col-lg-auto.mb-3.mb-lg-0.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/tema6/18.png', alt='')
            .col-lg
              .p-3.bg-color-white.tarjeta
                h5 Principios clave:
                ul.lista-ul--color.mb-0
                  li.mb-3.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 Control sanitario continuo en granja y en faena.
                  li.mb-3.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 Cumplimiento de Buenas Prácticas de Manufactura (BPM).
                  li.mb-3.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 Respeto de tiempos de retiro de medicamentos.
                  li.mb-3.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 Higiene rigurosa en instalaciones y utensilios.
                  li.mb-3.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 Observancia del Decreto 1500 de 2007 y Resolución 2674 de 2013.
          p <b>Ejemplo</b>. En avicultura, el uso responsable de antibióticos y el fortalecimiento de la bioseguridad disminuyen la presencia de Salmonella y E. coli.

    separador
        
    .bg-full-width.bg-color-13
      .px-4.px-md-5
        #t_6_6.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 6.6 Normatividad
        
        p.mb-5 La producción pecuaria de especies menores en Colombia está regulada por un marco legal amplio que busca garantizar calidad, bienestar y sostenibilidad. A continuación, se presentan las principales normas aplicables:

        .row.justify-content-center.mb-5
          .col-lg-12.mb-3.mb-lg-0(data-aos="zoom-in").order-lg-2
            .titulo-sexto.color-acento-contenido
              h5 Tabla 20.
              span Principales normas por entidad
            .tabla-a.color-acento-contenido.tbl
              table
                thead
                  tr
                    th.bg-color-9 Norma
                    th.bg-color-9 Entidad
                    th.bg-color-9 Aplicación específica
                tbody.bg-color-white
                  tr
                    td Decreto 1500 de 2007
                    td MinSalud / Invima
                    td Control sanitario de carnes y lácteos. Incluye sacrificio, procesamiento y transporte.
                  tr.bg-color-sintesis
                    td Ley 84 de 1989
                    td Congreso de la República
                    td Estatuto Nacional de Protección Animal.
                  tr
                    td Ley 1774 de 2016
                    td Congreso de la República
                    td Reconoce a los animales como seres sintientes.
                  tr.bg-color-sintesis
                    td Ley 1955 de 2019 (Art. 247)
                    td Congreso de la República
                    td Promueve la certificación en BPP.
                  tr
                    td Resolución ICA 136 de 2020
                    td ICA
                    td Reglamenta el transporte de especies menores.
                  tr.bg-color-sintesis
                    td Resolución ICA 240 de 2013
                    td ICA
                    td Movilización sanitaria de cabras y ovejas.
                  tr
                    td Resolución ICA 3651 y 3652 de 2014
                    td ICA
                    td Programas de bioseguridad para avicultura.
                  tr.bg-color-sintesis
                    td Resolución ICA 067449 de 2020
                    td ICA
                    td Requisitos para certificación en BPP.
                  tr
                    td Resolución ICA 68167 de 2020
                    td ICA
                    td Condiciones sanitarias y de bioseguridad para especies menores.


        separador
        
        #t_6_7.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 6.7 Aplicación normativa por especie
        
        p Esta tabla resume las normas más relevantes según la especie productiva, facilitando su consulta y aplicación:

        .row.justify-content-center.mb-5
          .col-lg-12.mb-3.mb-lg-0(data-aos="zoom-in").order-lg-2
            .titulo-sexto.color-acento-contenido
              h5 Tabla 21.
              span Normatividad aplicable por especie en sistemas pecuarios alternativos (Colombia)
            .tabla-a.color-acento-contenido.tbl
              table
                thead
                  tr
                    th.bg-color-9 Especie
                    th.bg-color-9 Normas principales aplicables
                    th.bg-color-9 Aspectos clave regulados
                tbody.bg-color-white
                  tr
                    td Cuyes
                    td 067449/2020, 68167/2020, 136/2020, Ley 1774
                    td Bienestar, bioseguridad y trazabilidad.
                  tr.bg-color-sintesis
                    td Conejos
                    td 067449/2020, 68167/2020, 136/2020, 1500/2007
                    td BPP, transporte humanitario, procesamiento.
                  tr
                    td Aves de corral
                    td 3651-3652/2014, 68167/2020, 136/2020, 1500/2007
                    td Bioseguridad, sanidad y control de faena.
                  tr.bg-color-sintesis
                    td Codornices
                    td 68167/2020, 067449/2020, 136/2020, 1500/2007
                    td Inocuidad, trazabilidad y bienestar.
                  tr
                    td Cabras
                    td 067449/2020, 68167/2020, 240/2013, 136/2020
                    td Sanidad caprina, leche y carne.
                  tr.bg-color-sintesis
                    td Ovejas
                    td 067449/2020, 68167/2020, 240/2013, 136/2020
                    td Bioseguridad, movilidad y bienestar.


</template>

<script>
export default {
  name: 'Tema6',
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
