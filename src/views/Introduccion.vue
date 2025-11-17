<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/intro/1.png", data-aos="zoom-in")
      .col-lg-8
        .row.align-items-center.mb-3
          .col-lg-auto
            img(src="@/assets/curso/intro/2.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 La clasificación biológica de las especies menores constituye un pilar esencial para la producción pecuaria en Colombia, ya que permite identificar, ordenar y comprender la diversidad animal desde una perspectiva científica. Este conocimiento facilita un manejo técnico más preciso, mejora la productividad y garantiza el cumplimiento de la normatividad vigente en materia de bienestar y sanidad animal.
        .bg-color-1.tarjeta.p-4(data-aos="fade-left").mb-3
          p.mb-0 A través de la taxonomía, se establece una estructura jerárquica que organiza los organismos según sus características morfológicas, genéticas y evolutivas. Comprender esta clasificación no solo posibilita reconocer las particularidades de cada especie, sino también aplicar prácticas adecuadas de reproducción, alimentación y control sanitario, adaptadas a las condiciones ambientales locales.
    
        .bg-color-2.p-3(data-aos="fade-left")
          .row.align-items-center
            .col-lg-auto.order-2
              img(src="@/assets/curso/intro/3.svg", style="max-width: 178px").mx-auto
            .col-lg.order-1.mb-3.mb-lg-0
              p.mb-0 Además, la identificación taxonómica de especies como el cuy, el conejo, las aves, la codorniz, la cabra y la oveja contribuye a fortalecer la trazabilidad y la sostenibilidad de los sistemas productivos. Este enfoque integrador permite al productor rural optimizar los recursos, asegurar la inocuidad alimentaria y promover una ganadería menor responsable y respetuosa con el entorno.
    
        

</template>

<script>
export default {
  name: 'Introduccion',
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
