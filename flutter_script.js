function startFlutterApp() {
  const splash = document.querySelector('.hexagon-container');
  if (splash) {
    splash.style.opacity = 0;
    splash.style.display = 'none';
  }
}

document.addEventListener('DOMContentLoaded', (event) => {
  setTimeout(startFlutterApp, 4000);
  setTimeout(()=> {
    var script = document.createElement('script');
    script.src = './flutter_bootstrap.js';
    document.body.appendChild(script);
  }, 3000);
});