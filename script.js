// les variables globales et les regrouper sous un objet namespace qui regroupe les variables sous forme de propriétés de cet objet
const global = {
  sp: document.getElementsByTagName('span'),
  btn_start: document.getElementById('start'),
  btn_stop: document.getElementById('stop'),
  t: '',
  ms: 0,
  s: 0,
  mn: 0,
  h: 0,
};

// fonction pour initialiser les variables globales quand la page se charge
window.onload = function () {
  /* exécuter cette fonction au chargement de la page */
  global.ms = 0;
};

// mettre en place le compteur
function update_chrono() {
  global.ms++;
  if (global.ms == 10) {
    global.ms = 1;
    global.s++;
  }
  if (global.s == 60) {
    global.s = 0;
    global.mn++;
  }
  if (global.mn == 60) {
    global.mn = 0;
    global.h++;
  }

  // insertion des valeurs dans la span
  global.sp[0].innerHTML = global.h + 'h';
  global.sp[1].innerHTML = global.mn + 'min';
  global.sp[2].innerHTML = global.s + 's';
  global.sp[3].innerHTML = global.ms + 'ms';
}

// mettre en place la fonction start
window.addEventListener('keydown', (event) => {
  console.log(event.key);
  if (event.key == ' ') {
    start();
  }
  if (event.key == 'Enter') stop();
  if (event.key == '0') reset();
});

function start() {
  // On vérifie si le chronomètre n'est pas déjà en marche
  // en regardant si le bouton start est activé.
  if (global.btn_start.disabled == false) {
    global.t = setInterval(update_chrono, 100);
    global.btn_start.disabled = true;
  }
}

// stopper le chrono
function stop() {
  clearInterval(
    global.t
  ); /* suppression de l'intervalle t pour que la fonction update ne s'exécute plus d'elle même */
  global.btn_start.disabled = false;
}

// initialiser le chrono
function reset() {
  clearInterval(global.t);
  global.btn_start.disabled = false;

  // innitialiser les valeurs des variables
  global.ms = 0;
  global.s = 0;
  global.mn = 0;
  global.h = 0;

  // et les inserer directemennt dans les spans
  global.sp[0].innerHTML = global.h + 'h';
  global.sp[1].innerHTML = global.mn + 'min';
  global.sp[2].innerHTML = global.s + 's';
  global.sp[3].innerHTML = global.ms + 'ms';
}
