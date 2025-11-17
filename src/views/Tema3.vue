<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Aptitud productiva y parámetros zootécnicos
    
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/1.png')})`}"
      )(data-aos="zoom-in")
      .bloque-texto-g__texto.p-4
        p.mb-0 La producción pecuaria de especies menores depende en gran parte de su aptitud productiva, entendida como la capacidad del animal para expresar, bajo ciertas condiciones de manejo, un rendimiento determinado (ya sea en carne, leche, huevos o fibra). Para evaluar esta capacidad, se recurre a parámetros zootécnicos cuantificables que permiten comparar animales, lotes o sistemas, identificar cuellos de botella, y orientar decisiones técnicas, económicas y de mejoramiento genético.
    
    separador
    
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.1 Definición de aptitud productiva
    
    p.mb-5 Aptitud productiva es la capacidad genética y fisiológica de un animal o línea para expresar una determinada producción bajo condiciones de manejo específicas (carne, leche, huevos, fibra). No es solo un rasgo genético: resulta de la interacción entre genética × ambiente × manejo. En términos zootécnicos, se mide mediante indicadores cuantificables que permiten comparar animales, lotes y sistemas productivos.

    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Componentes de la aptitud productiva" :icono="require('@/assets/componentes/2.svg')")
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4 Componentes de la aptitud productiva
            ul.lista-ul--color.mb-0
              li.mb-2.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Genética</b>: potencial de crecimiento, prolificidad, producción láctea, calidad de fibra
              li.mb-2.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Ambientales</b>: clima, altitud, fotoperiodo, disponibilidad de agua y forraje  
              li.mb-2.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Nutricionales</b>: calidad y balance de la dieta por fase productiva
              li.mb-2.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Sanidad y manejo</b>: control de enfermedades, bienestar, densidad, higiene
              li.mb-2.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Economía y mercado</b>: precio, demanda y cadena de valor que incentiva determinadas aptitudes
          .col-md-5
            figure
              img(src='@/assets/curso/tema3/2.png', alt='Texto que describa la imagen')
      .py-4.py-md-5(titulo="Componentes de la aptitud productiva" :icono="require('@/assets/componentes/3.svg')")
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4 Por qué es importante medirla
            p Medir la aptitud productiva permite:
            ul.lista-ul--color.mb-0
              li.mb-2.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 Seleccionar reproductores más eficientes
              li.mb-2.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 Comparar sistemas (familiar vs intensivo) 
              li.mb-2.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 Planear inversiones y calcular rentabilidad
              li.mb-2.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 Detectar cuellos de botella (por ejemplo, baja conversión alimenticia o alta mortalidad neonatal)
          .col-md-5
            figure
              img(src='@/assets/curso/tema3/3.png', alt='Texto que describa la imagen')
    
    separador
    
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2 Producción de carne, leche, huevos y fibra (por especie menor)
    
    p.mb-5 A continuación, se describen los productos principales por especie, junto con sus características técnicas relevantes y los rangos de producción típicos que se observan en sistemas productivos representativos. Los valores se expresan como rangos alcanzables bajo condiciones de manejo técnico medio u óptimo.

    .bg-full-width.bg-color-7
      .px-4.px-md-5
        .bg-full-width.tarjeta.bg-fondo-slider.mb-5
          .p-4.p-md-5
            SlyderA(tipo="b").bg-color-16.tarjeta.p-4
              .row.align-items-center.p-4.p-md-5
                .col-lg-5.order-2
                  figure
                    img(src="@/assets/curso/tema3/4.png")
                .col-lg-7.order-1.mb-3.mb-lg-0
                  h5 Cuy (<em>Cavia porcellus</em>)
                  ul.lista-ul--color.mb-0
                    li.mb-2.d-flex
                      i.fa-solid.fa-circle-check
                      p.mb-0 Producto principal: carne (consumo local o mercado de nicho) 
                    li.mb-2.d-flex
                      i.fa-solid.fa-circle-check
                      p.mb-0 Rendimiento y calidad: carne magra, alto contenido proteico, bajo en grasa; rendimiento en canal ≈ 60-70 % del peso vivo 
                    li.mb-2.d-flex
                      i.fa-solid.fa-circle-check
                      p.mb-0 Tiempo a faena: 60-90 días; peso típico de faena: 0,8-1,0 kg 
                    li.mb-2.d-flex
                      i.fa-solid.fa-circle-check
                      p.mb-0 Parámetros clave: camada de 2-5 crías; destete a los 18-21 días; ADG (ganancia diaria) posdestete ≈ 6-10 g/día
              .row.align-items-center.p-4.p-md-5
                .col-lg-5.order-2
                  figure
                    img(src="@/assets/curso/tema3/5.png")
                .col-lg-7.order-1.mb-3.mb-lg-0
                  h5 Conejo (<em>Oryctolagus cuniculus</em>)
                  ul.lista-ul--color.mb-0
                    li.mb-2.d-flex
                      i.fa-solid.fa-circle-check
                      p.mb-0 Producto principal: carne (piel y estiércol como subproductos)  
                    li.mb-2.d-flex
                      i.fa-solid.fa-circle-check
                      p.mb-0 Peso de sacrificio: 2,3-2,5 kg a los 75-90 días 
                    li.mb-2.d-flex
                      i.fa-solid.fa-circle-check
                      p.mb-0 Rendimiento en canal: ≈ 55-60 %  
                    li.mb-2.d-flex
                      i.fa-solid.fa-circle-check
                      p.mb-0 Parámetros: camada de 6-10 gazapos; destete a los 28-30 días; ADG posdestete ≈ 25-35 g/día; FCR ≈ 3:1
              .row.align-items-center.p-4.p-md-5
                .col-lg-5.order-2
                  figure
                    img(src="@/assets/curso/tema3/6.png")
                .col-lg-7.order-1.mb-3.mb-lg-0
                  h5 Aves de corral (<em>Gallus gallus domesticus</em>)
                  h5 Pollos de engorde: 
                  ul.lista-ul--color.mb-0
                    li.mb-2.d-flex
                      i.fa-solid.fa-circle-check
                      p.mb-0 Tiempo a faena: 35-45 días 
                    li.mb-2.d-flex
                      i.fa-solid.fa-circle-check
                      p.mb-0 Peso: 2,0-2,5 kg  
                    li.mb-2.d-flex
                      i.fa-solid.fa-circle-check
                      p.mb-0 FCR: ≈ 1,6-1,9 
                    li.mb-2.d-flex
                      i.fa-solid.fa-circle-check
                      p.mb-0 Rendimiento en canal: 68-75 % 
                  h5 Gallinas ponedoras: 
                  ul.lista-ul--color.mb-0
                    li.mb-2.d-flex
                      i.fa-solid.fa-circle-check
                      p.mb-0 Producción: 280-340 huevos/ave/año (según línea genética) 
                    li.mb-2.d-flex
                      i.fa-solid.fa-circle-check
                      p.mb-0 Producción: 280-340 huevos/ave/año (según línea genética) 
                    li.mb-2.d-flex
                      i.fa-solid.fa-circle-check
                      p.mb-0 Vida productiva: 72-80 semanas 
              .row.align-items-center.p-4.p-md-5
                .col-lg-5.order-2
                  figure
                    img(src="@/assets/curso/tema3/7.png")
                .col-lg-7.order-1.mb-3.mb-lg-0
                  h5 Codorniz (<em>Coturnix coturnix japonica</em>)
                  ul.lista-ul--color.mb-0
                    li.mb-2.d-flex
                      i.fa-solid.fa-circle-check
                      p.mb-0 Productos: huevos y carne 
                    li.mb-2.d-flex
                      i.fa-solid.fa-circle-check
                      p.mb-0 Inicio de postura: ≈ 38-40 días 
                    li.mb-2.d-flex
                      i.fa-solid.fa-circle-check
                      p.mb-0 Producción anual: 280-320 huevos/ave/año (líneas comerciales) 
                    li.mb-2.d-flex
                      i.fa-solid.fa-circle-check
                      p.mb-0 Peso para carne: 180-220 g a los 42-56 días 
                    li.mb-2.d-flex
                      i.fa-solid.fa-circle-check
                      p.mb-0 FCR: ≈ 2,5:1
              .row.align-items-center.p-4.p-md-5
                .col-lg-5.order-2
                  figure
                    img(src="@/assets/curso/tema3/8.png")
                .col-lg-7.order-1.mb-3.mb-lg-0
                  h5 Cabra (<em>Capra hircus</em>)
                  ul.lista-ul--color.mb-0
                    li.mb-2.d-flex
                      i.fa-solid.fa-circle-check
                      p.mb-0 Productos: leche, carne, piel y fibra (según raza)  
                    li.mb-2.d-flex
                      i.fa-solid.fa-circle-check
                      p.mb-0 Producción de leche: 120-350 litros por lactancia (según raza y manejo) 
                    li.mb-2.d-flex
                      i.fa-solid.fa-circle-check
                      p.mb-0 Partos al año: 1-2 (en sistemas intensivos)  
                    li.mb-2.d-flex
                      i.fa-solid.fa-circle-check
                      p.mb-0 Lactancia: 60-240 días según manejo 
                    li.mb-2.d-flex
                      i.fa-solid.fa-circle-check
                      p.mb-0 Crías por parto: 1-3 (promedio 1,5-2)
              .row.align-items-center.p-4.p-md-5
                .col-lg-5.order-2
                  figure
                    img(src="@/assets/curso/tema3/9.png")
                .col-lg-7.order-1.mb-3.mb-lg-0
                  h5 Oveja (<em>Ovis aries</em>)
                  ul.lista-ul--color.mb-0
                    li.mb-2.d-flex
                      i.fa-solid.fa-circle-check
                      p.mb-0 Productos: carne (cordero), lana, leche (en razas especializadas) 
                    li.mb-2.d-flex
                      i.fa-solid.fa-circle-check
                      p.mb-0 Partos/año: 1 (en sistemas tradicionales) hasta 1,5-2 (en sistemas intensivos) 
                    li.mb-2.d-flex
                      i.fa-solid.fa-circle-check
                      p.mb-0 Gestación: 145-155 días 
                    li.mb-2.d-flex
                      i.fa-solid.fa-circle-check
                      p.mb-0 Ganancia diaria de peso: 150-220 g/día (corderos, según nutrición) 
                    li.mb-2.d-flex
                      i.fa-solid.fa-circle-check
                      p.mb-0 Rendimiento en canal: ≈ 45-55 %

        separador
        
        #t_3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 3.3 Comparativo de indicadores productivos entre especies menores
        
        p.mb-5 La siguiente tabla resume indicadores clave que permiten comparar aptitudes productivas entre especies menores. Los valores son rangos típicos alcanzables en condiciones comerciales/familiares bien manejadas en Colombia y regiones andinas/tropicales.

        .row.justify-content-center.mb-5
          .col-lg-8.mb-3.mb-lg-0(data-aos="zoom-in").order-lg-2
            .titulo-sexto.color-acento-contenido
              h5 Tabla 13.
              span Parámetros productivos de especies pecuarias menores
            .tabla-a.color-acento-contenido.tbl


    separador
    
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.4 Rendimiento y conversión alimenticia
    
    .row.mb-5.align-items-center
      .col-lg-3.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/10.svg", data-aos="zoom-in")
      .col-lg-9.order-lg-1
        .bg-color-3.tarjeta.p-4(data-aos="fade-left")
          p.mb-0 Esta sección aborda los conceptos esenciales y herramientas para calcular y mejorar la eficiencia en la producción pecuaria.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Conceptos y fórmulas clave
    
    p.mb-5 Los siguientes conceptos permiten cuantificar la eficiencia productiva de los sistemas pecuarios. Las fórmulas presentadas son aplicables en campo y resultan fundamentales para el análisis técnico y económico del desempeño animal.

    .row.align-items-start.mb-5
      .col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/11.png", alt="").mb-4.mb-lg-0
      .col-lg-9
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-14")
          .div(titulo="Ganancia diaria media (ADG)")
            p ADG = (Peso final − Peso inicial) / Días del periodo Refleja la velocidad de crecimiento del animal.
    
          .div(titulo="Conversión alimenticia (FCR)")
            p FCR = Cantidad total de alimento consumido (kg) / Incremento de peso vivo (kg) Valores bajos indican mejor aprovechamiento del alimento.
    
          .div(titulo="Índice de conversión económica")
            p Costo de alimento / kg de producto (por ejemplo, carne) Permite relacionar el gasto en alimentación con la producción obtenida.
    
          .div(titulo="Rendimiento en canal")
            p Rendimiento (%) = (Peso de canal / Peso vivo en pie) × 100 Indica la proporción de carne utilizable respecto al peso total del animal.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Factores que afectan FCR y rendimiento

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/12.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") Diversos factores inciden sobre la eficiencia con que los animales transforman el alimento en producto final. A continuación, se describen los principales elementos que pueden mejorar o deteriorar la conversión alimenticia y el rendimiento en canal.
        .bg-color-6.tarjeta.p-4(data-aos="fade-left")
          .bg-color-white.tarjeta.p-4
            ul.lista-ul--color.mb-0
              li.mb-3.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Genética</b>: líneas genéticas mejoradas para crecimiento o conversión.
              li.mb-3.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Edad y etapa productiva</b>: animales jóvenes tienen mejor conversión que animales viejos.
              li.mb-3.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Densidad y estrés ambiental</b>: calor, humedad, hacinamiento perjudican FCR.
              li.mb-3.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Calidad de la dieta</b>: balance energético/proteico, aminoácidos limitantes, fibra adecuada.
              li.mb-3.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Sanidad</b>: enfermedades subclínicas disminuyen ganancia y aumentan FCR.
              li.mb-3.d-flex
                i.fa-solid.fa-circle-check
                p.mb-0 <b>Manejo de agua y acceso continuo</b>: hidratación deficiente reduce consumo y rendimiento.
    
    .bg-full-width.bg-color-13
      .px-4.px-md-5
        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
            h3.titulo-con-imagen__texto Ejemplos (estimaciones prácticas)
        
        p.mb-5 Se presentan a continuación rangos de conversión alimenticia observados comúnmente en especies menores bajo condiciones manejadas técnica y comercialmente. Estos valores sirven como referencia comparativa entre especies y sistemas.

        .row.mb-5.align-items-center
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema3/13.png", data-aos="zoom-in")
          .col-lg-8
            .bg-color-3.p-4.tarjeta(data-aos="fade-up")
              .row.justify-content-center.align-items-center
                .col-lg-auto.mb-3.mb-lg-0.order-lg-2
                  figure
                    img(src='@/assets/curso/tema3/14.svg', alt='')
                .col-lg.order-lg-1
                  .p-3.bg-color-white.tarjeta
                    ul.lista-ul--color.mb-0
                      li.mb-3.d-flex
                        i.fa-solid.fa-circle-check
                        p.mb-0 Broiler comercial: FCR 1.6-1.9
                      li.mb-3.d-flex
                        i.fa-solid.fa-circle-check
                        p.mb-0 Conejo: FCR 3:1
                      li.mb-3.d-flex
                        i.fa-solid.fa-circle-check
                        p.mb-0 Cuy: FCR 4-6:1
                      li.mb-3.d-flex
                        i.fa-solid.fa-circle-check
                        p.mb-0 Cabra en pastoreo: FCR 4-6 (mejora en confinamiento)
                      li.mb-3.d-flex
                        i.fa-solid.fa-circle-check
                          p.mb-0 Codorniz: FCR ≈ 2.5:1

        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
            h3.titulo-con-imagen__texto Cómo mejorar el FCR (prácticas recomendadas)
        
        p.mb-5 Aplicar estrategias adecuadas de nutrición, manejo y sanidad puede mejorar considerablemente la conversión alimenticia. Las siguientes prácticas son clave para optimizar la eficiencia en distintas fases del ciclo productivo.

        .row.mb-5
          .col-lg-6.order-lg-2.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema3/15.png", data-aos="zoom-in")
          .col-lg-6.order-lg-1
            .bg-color-19.tarjeta.p-4(data-aos="fade-left")
              .bg-color-white.tarjeta.p-4
                ul.lista-ul--color.mb-0
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 Selección genética por eficiencia.
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 Formulación de raciones por fase (pre-inicio, inicio, crecimiento, final).
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 Uso de aditivos nutricionales (enzimas, probióticos, prebióticos).
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 Manejo ambiental (control térmico, ventilación, camas secas).
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 Programas sanitarios (vacunación y desparasitación).
                  li.mb-2.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0 Agua limpia y ad libitum.

        p.mb-5 A continuación, se presenta un pódcast  que analiza el valor agregado y los usos secundarios de los productos pecuarios, destacando estrategias aplicables en Colombia para mejorar la rentabilidad, diversificar la producción y fortalecer la sostenibilidad en los sistemas agropecuarios.
    
    .row.mb-5
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/16.png", data-aos="zoom-in")
      .col-lg-7
        .bg-color-8.mb-5
          .p-4
            .row.justify-content-center.align-items-center
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema3/17.svg", data-aos="zoom-in")
              .col-lg-7
                h3.text-white Pódcast:
        
                TarjetaAudio.color-acento-botones.bg-color-white.mb-3(
                  texto="Valor agregado y aprovechamiento integral en la producción pecuaria: estrategias y usos secundarios "
                  tiempo
                  :audio="require('../assets/curso/podcast/podcast1.mp3')"
                )
    
    .bg-full-width.bg-fondo-3
      .px-4.px-md-5
        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
            h3.titulo-con-imagen__texto Casos prácticos por especie

        p.mb-5 Cada especie ofrece oportunidades concretas de diversificación productiva. A continuación, se presentan ejemplos prácticos de cómo puede aplicarse el valor agregado y el uso integral de los recursos en sistemas reales.


        .row.justify-content-center.mb-5.align-items-center
          .col-lg-7.mb-3.mb-lg-0.order-lg-2
            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema3/19.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Cuy
                p.text-center Venta como producto fresco para mercados locales; transformación en conservas o empaques turísticos; estiércol para huertos.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema3/19.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Conejo
                p.text-center Carne fresca y procesada, pieles para artesanía, estiércol como fertilizante
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema3/19.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Aves
                p.text-center Cortes industrializados, huevos etiquetados, compost con cama.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema3/19.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Codorniz
                p.text-center Huevos y carne para gastronomía gourmet.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema3/19.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Cabra
                p.text-center Quesos artesanales, piel, estiércol compostado.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema3/19.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Oveja
                p.text-center Carne, lana para textiles o artesanía, leche para quesos.
          .col-lg-4.order-lg-1
            figure
              img(src='@/assets/curso/tema3/18.png', alt='')

</template>

<script>
export default {
  name: 'Tema3',
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
