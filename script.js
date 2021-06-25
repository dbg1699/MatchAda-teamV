swal("Hello world!");

const emoji = document.createElement('div');
emoji.textContent = ' \ud83c\udf3c emoji!';
document.body.appendChild(emoji);

twemoji.parse(document.body);

const img = emoji.querySelector('img');

// note the div is preserved
img.parentNode === emoji; // true

img.src;        // https://twemoji.maxcdn.com/v/latest/72x72/2764.png
img.alt;        // \ud83c\udf3c
img.className;  // emoji
img.draggable;  // false

function generatorImage(icon, options) { //generar iconos concatenados
    return '\ud83c\udf3c, \ud83c\udf35'.concat(
      options.base, // by default Twitter Inc. CDN
      options.size, // by default "72x72" string
      '/',
      icon,         // the found emoji as code point
      options.ext   // by default ".png"
    );
  }
  
