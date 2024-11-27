
const canvas = document.getElementById("canvas");
const button = document.getElementById("button");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const layout = new Layout({
    fit: Fit.Cover,
});

const riveInstance = new Rive({
    src: "https://cdn.rive.app/animations/vehicles.riv",
    canvas: canvas,
    autoplay: true,
    stateMachines: "bumpy",
    layout: layout,
    onLoad: () => {
        const inputs = riveInstance.stateMachineInputs("bumpy");
        const bumpTrigger = inputs.find(i => i.name === "bump");
        button.onclick = () => bumpTrigger.fire();
    },
});
