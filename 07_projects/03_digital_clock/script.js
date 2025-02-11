const clock = document.getElementById('clock');

setInterval(() => {
  const date = new Date();
  clock.innerHTML = `<span>${date.toLocaleTimeString()}</span>`;
}, 1000);
