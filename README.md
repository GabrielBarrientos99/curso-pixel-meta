# Curso visual: el píxel de Meta, explicado como a un niño

**Verlo en línea:** https://gabrielbarrientos99.github.io/curso-pixel-meta/

Curso gratuito de **Biai** con mapas estructurales y animaciones de flujo para entender:

1. **La libreta de Meta**: qué es un conjunto de datos (dataset).
2. **El lápiz de la web**: el píxel y sus eventos (`PageView`, `ViewContent`, `Lead`, `Purchase`...).
3. **El viaje de un clic**: cómo Meta une el clic en un anuncio con la conversión (`fbclid`, `_fbp`, `_fbc`). Recorrido paso a paso.
4. **El lápiz del servidor**: la API de conversiones y la deduplicación con `event_id`.
5. **Ventas por WhatsApp**: la API de conversiones para mensajes, el `ctwa_clid` y "Maximizar compras a través de mensajes".
6. **Anuncio → web → WhatsApp**: qué ve el píxel y qué no.
7. **Lista de clientes vs. eventos**: para qué sirve cada uno y qué datos están prohibidos.
8. **Repaso** de 5 preguntas.

Todo está basado en la documentación oficial de Meta. Los enlaces van al final de cada lección.

## Verlo

Son archivos estáticos (HTML, CSS y JS), sin dependencias:

```bash
python -m http.server 5181 --directory curso-pixel-meta
# abrir http://localhost:5181
```

Se puede publicar gratis con GitHub Pages (Settings → Pages → rama `main`, carpeta `/`).

## Estructura

```
index.html      las 7 lecciones, el mapa del curso y el repaso
css/curso.css   estilos y animaciones de flujo (respeta "reducir movimiento")
js/curso.js     recorrido paso a paso (lección 3) y preguntas del repaso
```
