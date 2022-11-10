//const p1 = document.createElement("p1");
//p1.textContent = "Helena grew up in New Jersey and graduated from Princeton Univeristy with a concentration in Mathematics and a certificate in Vocal Consort Singing. She is learning to code. She loves to sing with her choir, Amor Artis, skiing, playing with her cousins' kids, having conversations with her friends in parked cars, and glitter.";
//document.querySelector("body").appendChild(p1);
function addingEventListener() {const input = document.getElementById('button');

function clickAlert() {
  alert('I was clicked!');
}

input.addEventListener('click', clickAlert);
}