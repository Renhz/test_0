import greet from 'app';

if (document?.getElementById('demo')) {
  const demo = document.getElementById('demo');
  if (demo) {
    demo.innerText = greet('Maxwin');
  }
}
