# Relatoría · Filadelfia · 20 de septiembre de 2026

Sitio documental estático del conversatorio empresarial con el Dr. Leonel Fernández, organizado por la Cámara de Comercio Dominicana de Filadelfia. Preparado para el repositorio `RELATORIA-FILADELFIA-20-09-2026` y GitHub Pages.

## Publicar en GitHub Pages

1. Descomprime el archivo ZIP y abre la carpeta `RELATORIA-FILADELFIA-20-09-2026`.
2. En tu repositorio de GitHub, utiliza **Add file → Upload files**. Sube **el contenido de la carpeta**, incluyendo `assets` y `documentos`. `index.html` debe quedar en la raíz del repositorio, no dentro de otra carpeta.
3. Guarda los archivos con **Commit changes** en la rama `main`.
4. En **Settings → Pages → Build and deployment**, selecciona **Deploy from a branch**.
5. Selecciona la rama **main**, la carpeta **/(root)** y pulsa **Save**.
6. Cuando GitHub termine el despliegue, abre el enlace que aparece en **Settings → Pages** y comprueba la navegación, los estilos y la descarga del documento fuente.

Incluye también `.nojekyll`, el archivo vacío que indica que no se necesita procesamiento con Jekyll. En macOS, los archivos ocultos se muestran con Cmd + Shift + punto. Si la carga del navegador lo omite, puedes crearlo en GitHub con **Add file → Create new file** y nombrarlo `.nojekyll`.

Guía oficial: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

La cuenta o la organización propietaria no se presupone. La dirección típica es `https://TU-USUARIO-O-ORGANIZACION.github.io/RELATORIA-FILADELFIA-20-09-2026/`. Sustituye ese ejemplo por el enlace real que proporcione GitHub.

## Archivos incluidos

- `index.html`: portada, resumen, ficha, propuestas, participantes, próximos pasos, minuta, transcripción completa y notas editoriales. Todo el contenido está en el HTML para lectura sin JavaScript y para indexación.
- `assets/styles.css`: diseño adaptable, accesibilidad visual y estilos de impresión A4.
- `assets/app.js`: impresión y señalización de la sección consultada en el índice. No requiere bibliotecas.
- `documentos/relatoria-fuente.txt`: copia íntegra del archivo original `Pasted text.txt`.
- `.nojekyll`: evita el procesamiento con Jekyll.
- `README.md`: estas instrucciones.

No se necesita instalar software, compilar ni introducir claves de acceso. Las rutas son relativas y admiten publicación dentro de la ruta de un repositorio. Puedes abrir `index.html` directamente en el navegador para revisarlo antes de subirlo. No hay analítica, cookies, servicios externos ni fuentes remotas.

## Imprimir o guardar como PDF

Pulsa **Imprimir / PDF** en la cabecera. En el diálogo del navegador elige **Guardar como PDF**. Selecciona A4 y desactiva los encabezados y pies automáticos del navegador para una salida limpia. También puedes utilizar Cmd + P o Ctrl + P. La impresión incluye el documento completo, con la transcripción; oculta los controles y los índices de navegación. El sitio no depende de un PDF preexistente.

## Fuente y fidelidad editorial

La única fuente del contenido es `Pasted text.txt`, recuperado como adjunto de la conversación original. La fecha fue confirmada posteriormente por el usuario como **20 de septiembre de 2026**. Se ha conservado el texto original de la minuta, que contenía `[fecha y dirección por confirmar]`, y se ha explicado la confirmación de la fecha en las notas. La dirección sigue pendiente.

El resumen ejecutivo, las listas de planteamientos y próximos pasos, la minuta y los **86 párrafos de intervenciones de la transcripción depurada** se conservan íntegros. Se añadieron encabezados de navegación, una ficha derivada de la fuente y notas editoriales. No se consultó el audio ni se volvió a depurar el texto.

Los nombres, cifras y pasajes entre corchetes se mantienen. Las opiniones políticas, diagnósticos económicos y afirmaciones sobre salud o legislación se presentan como declaraciones de sus participantes, no como hechos verificados ni como orientación profesional. Los pasos sugeridos no se presentan como acuerdos ejecutados.

La fuente contiene una petición de Franklin Medrano de no difundir en redes una idea mencionada durante el encuentro. Esa referencia se conserva dentro del documento, sin convertirla en mensaje promocional ni añadir botones de difusión.

No se incorporaron fotografías, logotipos, direcciones, datos de contacto ni cifras ajenas a la fuente. La cabecera tipográfica es un rótulo documental, no un logotipo institucional. No se atribuye autoría, patrocinio oficial ni licencia de reutilización que el documento no establezca.

SHA-256 del archivo fuente: `3f0c7d33bbaa0a13e1c40f0d2605f61ff2d131b8741d82e0d0dc6791e040d7ed`.

## Metadatos para buscadores y enlaces compartidos

Se incluyen idioma español, título, descripción, Open Graph y Twitter Card de texto. No se ha inventado una imagen social ni una dirección pública.

Al conocer la URL definitiva, añade dentro de `<head>` en `index.html`, reemplazando la dirección de ejemplo en ambas líneas:

```html
<link rel="canonical" href="https://TU-USUARIO-O-ORGANIZACION.github.io/RELATORIA-FILADELFIA-20-09-2026/">
<meta property="og:url" content="https://TU-USUARIO-O-ORGANIZACION.github.io/RELATORIA-FILADELFIA-20-09-2026/">
```

No publiques esas líneas con los marcadores de ejemplo. Si posteriormente dispones de una imagen autorizada, puedes añadir `og:image` con su URL absoluta y `og:image:alt` con una descripción precisa. El sitio funciona sin esos campos; no garantiza cómo cada plataforma previsualiza un enlace.

## Cambios futuros

Edita los textos de `index.html`. Mantén las marcas de incertidumbre hasta contar con confirmación y registra las aclaraciones en la sección de notas. Conserva el archivo original como fuente documental. Los colores y tamaños se editan en `assets/styles.css`. Si agregas secciones, actualiza también el índice y utiliza identificadores únicos.

## Crédito de preparación

El pie de página incluye «Preparado por ODLC», a petición del usuario, tanto en pantalla como en la versión de impresión.
