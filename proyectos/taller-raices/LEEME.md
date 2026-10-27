# El hilo mágico de los continentes · Web completa

Sitio web estático con taller, cuento ilustrado, personajes, recursos y videojuego. Versión: 26 de octubre de 2026. Proyecto de referencia: Cumbres–Consulado Colombiano 2025.

## Abrir y usar

Abrir index.html en un navegador actualizado. Mantener las carpetas assets, personajes y descargas junto a las páginas. No requiere instalación, cuentas de niños, servidor de aplicaciones ni base de datos.

Para alojamiento web: subir el contenido íntegro de esta carpeta a la raíz de un alojamiento de archivos estáticos con HTTPS. index.html es la entrada. No cambiar nombres ni eliminar subcarpetas. El alojamiento debe servir HTML, CSS, JavaScript, SVG, WebP y ZIP con sus tipos MIME habituales.

La publicación privada con Sites quedó pendiente: el control automático de permisos rechazó el paso de sincronización del código necesario para publicarla. No existe todavía una URL de despliegue verificada. Esta entrega local contiene la web completa y comprobada. El sitio registrado conserva su identidad en el espacio de trabajo de preparación; no se incluye en el paquete portable.

## Páginas

- index.html: presentación, experiencia del taller, personajes y accesos al juego.
- taller.html: objetivos, acompañamiento por edades, secuencia de 60 minutos, actividad manual, materiales e inclusión.
- cuento.html: lectura completa ilustrada e impresión desde el navegador.
- personajes.html: ocho personajes, su papel y preguntas de mediación.
- recursos.html: fichas, guía, paquete sin conexión, fuentes culturales y uso del guardado local.
- juego.html: mapa, seis encuentros, pasaporte, preguntas con reintentos, cuatro parejas, telar de 48 casillas, dibujo libre, descargas PNG y cierre.

## Desarrollo pedagógico

4–6 años: lectura oral, señalamientos, dos colores y tiras anchas, con apoyo adulto.
7–9 años: lectura compartida, preguntas y parejas, patrones con tres colores.
10–12 años: comparación de materiales, motivos personales y cartela explicativa.

Secuencia: bienvenida 5 min, cuento 15 min, texturas y Colombia 10 min, creación 20 min, cierre 10 min. El cálculo de materiales es orientativo y usa una base y ocho tiras por participante. El equipo adapta cantidades a los materiales y tamaño de las piezas.

El juego digital es una exploración gráfica. La actividad manual permite experimentar la urdimbre y la trama con cartón, papel e hilos. No se atribuyen motivos inventados a comunidades ni se presenta una tradición como única de todo un continente.

## Recursos y edición

assets/site.css y assets/site.js: diseño y controles de las páginas del taller.
assets/game.css y assets/game.js: diseño y lógica del videojuego.
personajes/: ilustraciones optimizadas WebP; variantes pequeñas para miniaturas.
descargas/guia-taller.html: guía imprimible.
descargas/mi-tejido.html: ficha imprimible con cuadrícula y cartela.
descargas/taller-sin-conexion.zip: versión portable sin una copia recursiva del propio ZIP.

No hay dependencias externas de código ni fuentes remotas. La presentación usa colores crema, violeta y verde suave, ilustraciones de lápiz y acuarela y tipografías del sistema. Las imágenes se comprimieron y dimensionaron para la web sin retocar el contenido gráfico.

Los originales y las indicaciones de ilustración de la entrega anterior se conservan aparte; esta web reutiliza los ocho personajes aprobados en la conversación. No se declara licencia pública de redistribución del material gráfico.

## Funcionamiento del guardado

El videojuego guarda pasaporte, casillas, color y dibujo en localStorage cuando el navegador lo permite. El guardado pertenece a este navegador y dispositivo; no sincroniza usuarios ni dispositivos. Las parejas se mezclan en una partida nueva al recargar. «Un viaje nuevo» restablece el progreso con confirmación. Las descargas PNG son la forma recomendada de conservar las creaciones.

Se puede usar con ratón, tacto y teclado. Las flechas desplazan el foco entre casillas del telar; Enter o Espacio aplica el color. El dibujo libre requiere ratón o tacto. Las edades se seleccionan con pestañas que admiten flechas, Inicio y Fin. Se incluye enlace para saltar al contenido, foco visible, nombres accesibles y respeto a la reducción de movimiento.

## Pruebas realizadas

Google Chrome en escritorio y móvil simulado a 320 × 740 px:
- Seis páginas, enlaces internos y descargas con respuesta correcta.
- Carga de ilustraciones y encabezado principal por página.
- Menú móvil, tres pestañas por edades y control por teclado.
- Calculadora de materiales: 20 participantes y 160 tiras.
- Seis preguntas, reintentos y pasaporte 6/6.
- Cuatro parejas correctas.
- Telar: casillas, filas, navegación por flechas y descarga PNG.
- Dibujo: coordenadas de pantalla, descarga PNG y guardado.
- Restauración tras recargar del pasaporte, telar y dibujo.
- Reinicio del progreso persistido.
- Telar y dibujo por tacto; sin desbordamiento horizontal.
- Sin errores JavaScript en las pruebas.

Se revisaron capturas de inicio y móvil. La prueba móvil es emulada; preparar la sesión incluye probar la tableta o el ordenador de la sala. No se ha realizado una auditoría completa WCAG ni validado dispositivos que no estén disponibles en este entorno.

## Visibilidad y privacidad

La entrega está preparada para revisión privada y contiene noindex,nofollow y robots.txt con Disallow. Estas indicaciones evitan solicitar indexación; no son un sistema de acceso privado. Para un alojamiento público definitivo, la persona responsable decide el acceso y la indexación. No se incluyen anuncios ni analítica de terceros. La plataforma elegida para alojar la web puede gestionar registros técnicos de conexión.

No se añadieron fechas de sesiones, reservas, logotipos ni autoría institucional no facilitados. 2025 identifica el proyecto; los materiales originales y su revisión corresponden a 2026. No se alteraron los originales del disco E:.

## Ampliación Antártida

Se incorpora a Nieves, investigadora polar ficticia ilustrada con el generador integrado usando las láminas originales como referencia. Se conserva el estilo de lápiz, acuarela y cordones trenzados. La ropa y el muestrario son ilustrativos. El ejemplo real documentado es el uso de prendas interiores de lana por expedicionarios del Programa Antártico Australiano. La guía exige una muestra física con composición identificable para presentarla como muestra real comparable; no se acredita procedencia antártica de un recorte local. El juego añade orden de capas, sexta pregunta e hilo, diez escenas y migración del progreso anterior.

Fuente: https://www.antarctica.gov.au/about-antarctica/people-in-antarctica/clothing/

## Fichas unificadas y realización

Ocho fichas con once apartados y cuatro colores por personaje. Datos compartidos entre la página de personajes y las fichas del videojuego en assets/personajes-data.js. Cuaderno imprimible: descargas/fichas-personajes.html. Guion de preparación, desarrollo y cierre: realizacion.html. Fotografías: únicamente propias, según petición expresa. Se localizaron en la memoria externa y se integraron ocho en la página del taller realizado. Ver ARCHIVO_FOTOGRAFICO.md.

Verificado: estructura de las ocho fichas, imágenes y detalles en el juego, cuaderno imprimible, siete etapas de realización, móvil a 320 px y ausencia de errores JavaScript.

## Presentación editorial

El cuento ya existía. Esta entrega lo amplía con una experiencia interactiva y una propuesta unificada para futuros talleres. No acredita el uso del videojuego en la sesión original ni describe el guion como memoria de una actividad realizada.

## Memoria y fotografías localizadas

Se incorporan ocho fotografías reales del archivo del taller Tejiendo Raíces Ancestrales, documentado en diciembre de 2025. realizacion.html muestra el taller de origen y enlaza su memoria original en PDF. La guía para futuras sesiones se conserva en guia-realizacion.html. El material fotográfico ya no está pendiente. Se excluye la imagen generada hallada junto a las fotos y no se atribuye el uso del videojuego a la sesión original. Véanse ARCHIVO_FOTOGRAFICO.md y archivo-fotos.json.
