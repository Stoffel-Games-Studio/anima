canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Fill the canvas, cropping Rive if necessary
let layout = new rive.Layout({
    fit: rive.Fit.Cover,
});

const r = new rive.Rive({
    src: 'https://cdn.rive.app/animations/vehicles.riv',
    canvas: document.getElementById('canvas'),
    autoplay: true,
    stateMachines: 'bumpy',
    layout: layout,
    onLoad: (_) => {
        // Get the inputs via the name of the state machine
        const inputs = r.stateMachineInputs('bumpy');
        // Find the input you want to set a value for, or trigger
        const bumpTrigger = inputs.find(i => i.name === 'bump');
        button.onclick = () => bumpTrigger.fire();
    },
});
