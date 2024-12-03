canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Fill the canvas, cropping Rive if necessary
let layout = new rive.Layout({
    fit: rive.Fit.Contain,
});

const r = new rive.Rive({
    src: 'https://stoffel-games-studio.github.io/anima/assets/anima.riv',
    canvas: document.getElementById('canvas'),
    autoplay: true,
    stateMachines: 'sm',
    layout: layout,
});
