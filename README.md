
# Image to ASCII Converter - Retro Terminal 💻

## Descripción General

Este proyecto es una aplicación web que convierte imágenes en arte ASCII, recreando la estética de terminales retro. La aplicación permite a los usuarios cargar imágenes y transformarlas en caracteres ASCII, con controles para ajustar la resolución del resultado final. La interfaz está diseñada para simular una pantalla CRT (tubo de rayos catódicos) antigua, completa con efectos visuales como líneas de escaneo y parpadeo.
![Image](https://github.com/user-attachments/assets/b0d0aabe-4ced-41fd-8f7c-c4f0b413fa84)
## Características Principales

-   **Conversión de Imágenes a ASCII**: Transforma cualquier imagen en una representación de caracteres ASCII.
-   **Interfaz Retro**: Diseño que emula una terminal antigua con efectos CRT.
-   **Ajuste de Resolución**: Control deslizante para modificar la densidad de caracteres en la salida.
-   **Soporte para Diferentes Formatos**: Acepta varios formatos de imagen comunes.
-   **Efectos Visuales**: Incluye efectos de parpadeo de pantalla, líneas de escaneo y brillo de texto para una experiencia auténtica.

## Tecnologías Utilizadas

-   **HTML5**: Estructura básica de la aplicación.
-   **CSS3**: Estilizado con efectos de terminal retro, incluyendo animaciones.
-   **JavaScript**: Procesamiento de imágenes y conversión a caracteres ASCII.
-   **Canvas API**: Manipulación de píxeles de la imagen para la conversión.

## Estructura del Proyecto

-   **index.html**: Contiene la estructura principal de la aplicación.
-   **style.css**: Define el estilo visual de la interfaz, incluyendo los efectos CRT.
-   **script.js**: Implementa la lógica para cargar y convertir imágenes.
-   **fonts/**: Contiene la fuente "Apple" para el estilo de terminal.
-   **images/**: Incluye imágenes como el marco de la pantalla CRT.

## Funcionamiento

El proceso de conversión funciona de la siguiente manera:

1.  El usuario carga una imagen a través del botón "Cargar Imagen".
2.  La aplicación analiza la imagen, dividiendo la en una cuadrícula de celdas.
3.  Para cada celda, calcula el valor de brillo promedio.
4.  Cada valor de brillo se convierte en un carácter ASCII específico (espacios para áreas claras, caracteres más densos para áreas oscuras).
5.  El resultado se muestra en el canvas, creando una representación ASCII de la imagen original.
6.  El usuario puede ajustar la resolución con el control deslizante para obtener diferentes niveles de detalle.

## Consideraciones Importantes

-   Se recomienda utilizar imágenes menores de 1000px x 1000px para un mejor rendimiento.
-   Imágenes con buen contraste producen mejores resultados ASCII.
-   La aplicación funciona mejor con navegadores modernos que soportan completamente la API Canvas.
-   Los efectos visuales (parpadeo, líneas de escaneo) están optimizados para recrear la experiencia de terminales antiguas.

## Ejecución

Para utilizar la aplicación:

1.  Abra el archivo `index.html` en un navegador web moderno.
2.  Haga clic en "Cargar Imagen" para seleccionar una imagen de su dispositivo.
3.  Ajuste la resolución según sea necesario usando el control deslizante.
4.  Disfrute de su imagen convertida a arte ASCII con estilo retro.

## Vista Previa de la Interfaz

La interfaz simula una antigua terminal CRT con:

-   Marco de pantalla de estilo vintage
-   Texto de color ámbar con efectos de brillo
-   Líneas de escaneo animadas
-   Efectos de parpadeo de pantalla
-   Estilo de fuente de ordenador antiguo

![Image](https://github.com/user-attachments/assets/37125dbd-4340-4774-8d14-719f0a48267c)
### Referencias

 - https://www.youtube.com/watch?v=HeT-5RZgEQY
 - https://aleclownes.com/2017/02/01/crt-display.html