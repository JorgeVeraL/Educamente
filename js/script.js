const TEL = "5215655332790";

function waLink(msg){
  return `https://wa.me/${TEL}?text=${encodeURIComponent(msg)}`;
}

function pedirInfo(modalidad){
  const msg = `Hola Fátima, me interesa información sobre las clases de regularización, modalidad ${modalidad}.`;
  window.open(waLink(msg), '_blank');
}

document.getElementById('cta-general').href = waLink("Hola Fátima, me gustaría más información sobre las clases de regularización.");
document.getElementById('float-wa').href = waLink("Hola Fátima, tengo una duda sobre las clases de regularización.");

const head = document.getElementById('head');
addEventListener('scroll', () => head.classList.toggle('scrolled', scrollY > 10));

const menuBtn = document.getElementById('menu-btn');
const nav = document.getElementById('nav');
menuBtn.addEventListener('click', () => nav.classList.toggle('open'));
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
