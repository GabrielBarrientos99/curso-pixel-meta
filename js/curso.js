(function () {
  // ---------- Lección 3: el viaje de un clic ----------
  var pasos = [
    { texto: '1. La persona ve tu anuncio en Instagram y hace clic. Meta le agrega a la dirección un código único del clic: el fbclid.',
      codigo: 'https://tuweb.com/?fbclid=AbC123' },
    { texto: '2. Se abre tu web. El código base del píxel se descarga, se conecta con tu libreta y anota PageView. Además guarda dos cookies: _fbp (este visitante) y _fbc (vino del clic AbC123).',
      codigo: "fbq('init', '1234567890');\nfbq('track', 'PageView');\n// cookies: _fbp=fb.1.…  _fbc=fb.1.…AbC123" },
    { texto: '3. La persona baja hasta el precio. El píxel anota ViewContent con el valor de la oferta.',
      codigo: "fbq('track', 'ViewContent', { value: 1240, currency: 'PEN' });" },
    { texto: '4. Llena el formulario y llega a la página de gracias. Aquí se anota el Lead: solo llega quien de verdad envió sus datos.',
      codigo: "fbq('track', 'Lead');" },
    { texto: '5. Meta junta todo: el Lead vino del mismo navegador que tenía la cookie del clic AbC123. Resultado: en el Administrador de anuncios aparece 1 resultado para ese anuncio, y la campaña aprende a buscar gente parecida.',
      codigo: 'Ejemplo: Anuncio "Clínicas noche" → 1 Lead · S/ 6.40 por resultado' },
  ];
  var actual = 0;
  var caja = document.getElementById('recorrido');
  if (caja) {
    var texto = document.getElementById('paso-texto');
    var codigo = document.getElementById('paso-codigo');
    var puntos = document.getElementById('paso-puntos');
    pasos.forEach(function () { puntos.appendChild(document.createElement('i')); });
    function pintar() {
      texto.textContent = pasos[actual].texto;
      codigo.textContent = pasos[actual].codigo;
      caja.querySelectorAll('[data-paso]').forEach(function (g) {
        var activo = g.getAttribute('data-paso').split(' ').indexOf(String(actual)) !== -1;
        g.querySelector('rect').classList.toggle('activa', activo);
      });
      puntos.querySelectorAll('i').forEach(function (p, i) { p.classList.toggle('on', i === actual); });
      document.getElementById('paso-atras').disabled = actual === 0;
      document.getElementById('paso-sig').textContent = actual === pasos.length - 1 ? 'Volver a empezar' : 'Siguiente';
    }
    document.getElementById('paso-sig').onclick = function () { actual = (actual + 1) % pasos.length; pintar(); };
    document.getElementById('paso-atras').onclick = function () { if (actual > 0) { actual--; pintar(); } };
    pintar();
  }

  // ---------- Repaso ----------
  var preguntas = [
    { p: '¿El píxel y el conjunto de datos son lo mismo?', o: ['Sí, son lo mismo', 'No: el píxel es un lápiz que escribe en el conjunto de datos'], c: 1,
      e: 'El conjunto de datos es la libreta. El píxel es solo la forma de escribir desde la web.' },
    { p: '¿El píxel solo anota a la gente que viene de anuncios?', o: ['Sí, solo a ellos', 'No, anota a todos; Meta separa a los que vinieron de un anuncio'], c: 1,
      e: 'Anota a todos los visitantes. El fbclid y la cookie _fbc permiten saber quién llegó desde un anuncio.' },
    { p: 'Si tienes píxel, ¿puedes seguir mandando anuncios directo a WhatsApp?', o: ['Sí', 'No'], c: 0,
      e: 'Sí. Para contar las ventas del chat se usa la API de conversiones para mensajes (con el ctwa_clid), no el píxel.' },
    { p: 'La venta se cerró por Yape después de un chat. ¿Cómo se entera Meta?', o: ['El píxel la ve sola', 'Tu servidor la envía por la API, o la subes en un CSV'], c: 1,
      e: 'El píxel solo ve lo que pasa en la web. Las ventas de fuera se avisan desde el servidor o con un archivo.' },
    { p: 'Subir tu lista de clientes a Públicos, ¿mide qué anuncio vendió?', o: ['Sí', 'No, solo sirve para mostrarles anuncios, excluirlos o buscar parecidos'], c: 1,
      e: 'Para medir y optimizar ventas se necesitan eventos (Purchase) en el conjunto de datos.' },
  ];
  var cont = document.getElementById('preguntas');
  if (cont) {
    preguntas.forEach(function (q) {
      var div = document.createElement('div');
      div.className = 'pregunta';
      var p = document.createElement('p'); p.textContent = q.p; div.appendChild(p);
      var ops = document.createElement('div'); ops.className = 'opciones';
      var r = document.createElement('div'); r.className = 'respuesta';
      q.o.forEach(function (txt, i) {
        var b = document.createElement('button'); b.type = 'button'; b.textContent = txt;
        b.onclick = function () {
          ops.querySelectorAll('button').forEach(function (x) { x.classList.remove('bien', 'mal'); });
          b.classList.add(i === q.c ? 'bien' : 'mal');
          r.textContent = (i === q.c ? '¡Correcto! ' : 'Casi. ') + q.e;
        };
        ops.appendChild(b);
      });
      div.appendChild(ops); div.appendChild(r);
      cont.appendChild(div);
    });
  }
})();
