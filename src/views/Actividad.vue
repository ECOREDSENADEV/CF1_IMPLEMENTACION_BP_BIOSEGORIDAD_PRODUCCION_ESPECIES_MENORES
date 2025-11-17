<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Microcontroladores y sensores',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> Evaluar la comprensión y el uso adecuado de las herramientas básicas en la ventana <em>Board</em> del <em>software</em> EAGLE.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es la especie de cuy utilizada en producción en Colombia?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Cavia porcellus.', esCorrecta: true },
            { id: 'b', texto: 'Oryctolagus cuniculus.', esCorrecta: false },
            { id: 'c', texto: 'Gallus gallus domesticus.', esCorrecta: false },
            { id: 'd', texto: 'Capra hircus.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 2,
          texto: '¿Cuál es la duración aproximada de gestación en conejas?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: '45-50 días.', esCorrecta: false },
            { id: 'b', texto: '30-32 días.', esCorrecta: true },
            { id: 'c', texto: '60-65 días.', esCorrecta: false },
            { id: 'd', texto: '20-22 días.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 3,
          texto: '¿Qué tipo de producción caracteriza a la gallina ponedora?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Producción de carne.', esCorrecta: false },
            { id: 'b', texto: 'Producción de fibra.', esCorrecta: false },
            { id: 'c', texto: 'Producción de huevos.', esCorrecta: true },
            { id: 'd', texto: 'Producción de estiércol.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 4,
          texto:
            '¿Cuál es la duración promedio del ciclo productivo de los pollos de engorde?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: '60-75 días.', esCorrecta: false },
            { id: 'b', texto: '35-45 días.', esCorrecta: true },
            { id: 'c', texto: '25-30 días.', esCorrecta: false },
            { id: 'd', texto: '90-120 días.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 5,
          texto:
            '¿Qué parámetro indica mejor eficiencia en conversión alimenticia?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Mayor peso de faena.', esCorrecta: false },
            { id: 'b', texto: 'Mayor número de partos.', esCorrecta: false },
            { id: 'c', texto: 'Menor índice FCR.', esCorrecta: true },
            { id: 'd', texto: 'Mayor número de crías.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 6,
          texto: '¿Qué tipo de pelaje tiene el cuy de la línea “Perú”?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Pelo largo y crespo.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Pelo corto, liso y pegado al cuerpo.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Pelo erizado.', esCorrecta: false },
            { id: 'd', texto: 'Pelo largo e irregular.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 7,
          texto:
            '¿Cuál es la principal aptitud de la cabra en sistemas lecheros?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Producción de carne.', esCorrecta: false },
            { id: 'b', texto: 'Producción de leche.', esCorrecta: true },
            { id: 'c', texto: 'Producción de lana.', esCorrecta: false },
            { id: 'd', texto: 'Producción de estiércol.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 8,
          texto:
            '¿Cuál es el promedio de huevos que puede producir una codorniz por año?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: '180-200.', esCorrecta: false },
            { id: 'b', texto: '280-320.', esCorrecta: true },
            { id: 'c', texto: '100-150.', esCorrecta: false },
            { id: 'd', texto: '350-400.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 9,
          texto: '¿Qué representa el valor del rendimiento en canal?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La cantidad de alimento que consume el animal.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El porcentaje del peso vivo convertido en carne utilizable.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'La ganancia diaria en peso.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El número de crías por camada.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 10,
          texto:
            '¿Cuál es la especie menor con una de las mejores conversiones alimenticias (FCR)?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Conejo (3:1).', esCorrecta: false },
            {
              id: 'b',
              texto: 'Pollo de engorde (1.6-1.9:1).',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Cuy (4-6:1).', esCorrecta: false },
            { id: 'd', texto: 'Cabra (4-6:1).', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 11,
          texto: 'El conejo pertenece al orden Rodentia.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso.', esCorrecta: true },
            { id: 'b', texto: 'Verdadero.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 12,
          texto:
            'El empadre controlado permite mayor planificación reproductiva en cuyes.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso.', esCorrecta: false },
            { id: 'b', texto: 'Verdadero.', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 13,
          texto:
            'La gallina ponedora inicia su ciclo productivo alrededor de las 30 semanas.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso.', esCorrecta: true },
            { id: 'b', texto: 'Verdadero.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 14,
          texto:
            'Las líneas “Inti” y “Kuri” de cuyes tienen alta resistencia y buena conversión alimenticia.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso.', esCorrecta: false },
            { id: 'b', texto: 'Verdadero.', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 15,
          texto:
            'En Colombia, la producción de codorniz es limitada y no tiene impacto económico.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso.', esCorrecta: true },
            { id: 'b', texto: 'Verdadero.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
