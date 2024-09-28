// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
//audio.currentTime = 110;    
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "I'm going back to 505", time: 10 },
  { text: "If it's a seven hour flight or a forty-five", time: 14 },
  { text: " minute drive ", time: 17 },
  { text: "In my imagination, you're waiting lying on your ", time: 22 },
  { text: "side", time: 24 },
  { text: "With your hands between your thighs", time: 27 },

  { text: "Stop and wait a sec' Oh, when you look at me like", time: 39 },
  { text: " that, my darling, ", time: 41 },
  { text: "what did you expect?  ", time: 43 },
  { text: "I'd probably still adore you with your hands around", time: 49 },
  { text: " my neck", time: 50 },
  { text: "Or I did last time I checked", time: 56 },
  

  { text: "Not shy of a spark, A knife twists", time: 66 },
  { text: " at the thought that I should fall short", time: 69 },
  { text: " of the mark  ", time: 72 },

  { text: "Frightened by the bite, though it's no harsher than", time: 77 },
  { text: " the bark ", time: 79 },

  { text: "The middle of adventure is such a perfect place", time: 83 },
  { text: "to start", time: 86  },

  { text: "I'm going back to 505, If it's a seven", time: 92 },
  { text: "hour flight or a", time: 96 },
  { text: "45-minute drive", time: 99  },

  { text: "In my imagination, you're waiting lying on your", time: 104 },
  { text: "side", time:105  },

  { text: "With your hands between your thighs", time: 111 },

  { text: "But I crumble completely when you cry", time: 147 },
  { text: "It seems like once again you've had to ", time: 150 },
  { text: "greet me with goodbye", time:153  },

  { text: "I'm always just about to go and ", time: 157 },
  { text: "spoil a surprise", time: 160 },

  { text: "Take my hands off of your eyes too soon", time: 165 },

  { text: "I'm going back to 505, If it's a seven", time: 175 },
  { text: "hour flight or a ", time: 178 },
  { text: "45-minute drive", time:180  },

  { text: "In my imagination, you're waiting lying  ", time: 185 },
  { text: "on your side", time: 186 },
  { text: "With your hands between your thighs and a smile", time: 193 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);