<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Importancia económica y social de la producción menor
    
    p.mb-5 A continuación, se presenta un video que analiza las contribuciones económicas y sociales de las especies menores en contextos rurales, destacando su rol en la diversificación productiva, la inclusión social y la seguridad alimentaria.

    .bg-full-width.bg-color-7
      .px-4.px-md-5
        figure.mb-5
          .video.mb-2
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          figcaption Video: Leyenda del video
        
    
        separador
        
        #t_5_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 5.1 Rol de las especies menores en la economía familiar y rural
        
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema5/1.png')})`}"
          )(data-aos="zoom-in")
          .bloque-texto-g__texto.p-4
            p.mb-0 Las especies menores cumplen una función esencial en la sostenibilidad económica y alimentaria de las familias rurales. Su manejo es posible en espacios reducidos, con recursos locales y sin necesidad de grandes infraestructuras.
        
        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
            h3.titulo-con-imagen__texto Funciones principales
        
        p.mb-5 Las especies menores ofrecen múltiples funciones dentro del sistema rural, que van desde lo alimentario hasta lo educativo. La siguiente tabla resume estos roles y sus ejemplos aplicados en Colombia:

        .row.justify-content-center.mb-5
          .col-lg-12.mb-3.mb-lg-0(data-aos="zoom-in").order-lg-2
            .titulo-sexto.color-acento-contenido
              h5 Tabla 18.
              span Funciones principales de las especies menores en la economía rural colombiana
            .tabla-a.color-acento-contenido.tbl
        
        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
            h3.titulo-con-imagen__texto Impacto rural
        
        p.mb-5 Además de sus funciones específicas, las especies menores fortalecen la autonomía alimentaria, el empoderamiento comunitario y la resiliencia productiva. Entre sus impactos más relevantes se encuentran:

        .row.justify-content-center
          .col-lg-10
            .bg-color-11.mb-5.p-4.tarjeta(data-aos="fade-up")
              .row.justify-content-center.align-items-center
                .col-lg-auto.mb-3.mb-lg-0.order-lg-2
                  figure
                    img(src='@/assets/curso/tema5/2.png', alt='')
                .col-lg.order-lg-1
                  .p-3.bg-color-white.tarjeta
                     ul.lista-ul--color.mb-0
                      li.mb-3.d-flex
                        i.fa-solid.fa-circle-check
                        p.mb-0 Contribuyen al autoabastecimiento alimentario, reduciendo la dependencia de productos externos.
                      li.mb-3.d-flex
                        i.fa-solid.fa-circle-check
                        p.mb-0 Fomentan el empoderamiento femenino: más del 60 % de las explotaciones menores están lideradas por mujeres (FAO, 2023).
                      li.mb-3.d-flex
                        i.fa-solid.fa-circle-check
                        p.mb-0 Incrementan la resiliencia ante crisis económicas o climáticas, gracias a su rápida reproducción y adaptabilidad.
                      li.mb-3.d-flex
                        i.fa-solid.fa-circle-check
                        p.mb-0 Según el ICA (2024), el 70 % de las fincas campesinas del Altiplano Cundiboyacense y el suroccidente colombiano incluyen al menos una especie menor en su modelo productivo.
        
        separador
        
        #t_5_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 5.2 Producción sostenible y su impacto ambiental positivo
        
        .bg-color-3.mb-5(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/tema5/3.png', alt='')
            .col-lg
              .p-4
                p.mb-0(data-aos="fade-up") La producción de especies menores puede convertirse en un modelo agroecológico ejemplar cuando se gestiona bajo criterios de sostenibilidad, bienestar animal y economía circular. A diferencia de los sistemas intensivos de gran escala, las producciones menores familiares integran suelo, planta y animal con bajo impacto ambiental.
    
    .bg-full-width.bg-fondo-3
      .px-4.px-md-5
        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
            h3.titulo-con-imagen__texto Prácticas sostenibles destacadas
        
        p.mb-5 Las siguientes prácticas permiten que la producción menor sea ambientalmente responsable y resiliente, integrándose a sistemas agroecológicos de bajo impacto:

        .row.justify-content-center.mb-5.align-items-center
          .col-lg-8.mb-3.mb-lg-0.order-lg-2
            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema5/5.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Reciclaje de nutrientes
                p.text-center Uso de estiércol como abono orgánico o <em>lombricompost</em>, mejora la fertilidad del suelo y reduce fertilizantes químicos.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema5/6.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Uso eficiente de agua y energía
                p.text-center Sistemas familiares consumen hasta un 70 % menos agua que la ganadería bovina. Se incorporan bebederos automáticos y energía solar.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema5/7.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Baja huella de carbono
                p.text-center Menor emisión de metano y otros GEI; el uso de residuos agrícolas evita emisiones adicionales.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema5/8.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 agroecológica
                p.text-center Articulación con huertas familiares y sistemas silvopastoriles, generando sinergias entre agricultura, suelo y biodiversidad.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema5/9.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Bienestar animal y salud pública
                p.text-center Manejo ético, control de zoonosis y mejora sanitaria. Cumplimiento de la Resolución ICA 136 de 2020.
          .col-lg-3.order-lg-1
            figure
              img(src='@/assets/curso/tema5/4.png', alt='')
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Impacto ambiental positivo
    
    p.mb-5 Finalmente, los beneficios ecológicos derivados de estas prácticas refuerzan la sostenibilidad rural. A continuación se detallan los efectos más significativos:

    .row.mb-5.justify-content-center.mb-3
      .col-sm-6.col-lg-3.mb-4.mb-lg-0(data-aos="fade-down")
        .tarjeta--boton.bg-color-3.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema5/10.svg', alt='Texto que describa la imagen')
          h5.text-center Razas cárnicas
          p.text-center Rendimiento de canal, engorde, precocidad
      .col-sm-6.col-lg-3.mb-4.mb-lg-0(data-aos="fade-down")
        .tarjeta--boton.bg-color-3.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema5/11.svg', alt='Texto que describa la imagen')
          h5.text-center Razas cárnicas
          p.text-center Rendimiento de canal, engorde, precocidad
      .col-sm-6.col-lg-3.mb-4.mb-lg-0(data-aos="fade-down")
        .tarjeta--boton.bg-color-3.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema5/12.svg', alt='Texto que describa la imagen')
          h5.text-center Razas mixtas
          p.text-center Carne + piel o carne + rusticidad
      .col-sm-6.col-lg-3.mb-4.mb-lg-0(data-aos="fade-down")
        .tarjeta--boton.bg-color-3.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema5/13.svg', alt='Texto que describa la imagen')
          h5.text-center Razas criollas
          p.text-center Adaptación local, rusticidad, bajo costo

</template>

<script>
export default {
  name: 'Tema5',
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
