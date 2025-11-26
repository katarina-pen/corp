window.addEventListener('load', () => {
    // console.log("hello");
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");
    
    //Resizing
    // canvas.height = window.innerHeight;
    // canvas.width = window.innerWidth;
    canvas.height = canvas.offsetHeight;
    canvas.width = canvas.offsetWidth;
    var color = "black"
    ctx.strokeStyle = color;
    // ctx.strokeRect(50, 50, 200, 200);

    //Variables
    let painting = false;

    function startPos(e) {
        painting = true;
        console.log("draw1");
        draw(e);
        console.log("draw2");

    }

    function endPos() {
        painting = false;
        ctx.beginPath();

    }

    function draw(e) {
        //1. Kolla om mousedown är true
        // console.log("draw längst upp")
        if (!painting) return;
        ctx.strokeStyle = color;
        ctx.lineWidth = brushSize;
        ctx.lineCap = "round";
        // console.log("målar")
        // ctx.lineTo(e.clientX, e.clientY); //musens position
        // ctx.stroke();
        // ctx.beginPath();
        // ctx.moveTo(e.clientX, e.clientY);
        const x = e.offsetX;
        const y = e.offsetY;

        ctx.lineTo(x, y);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(x, y);
        


        //2. Måla :D

    }
    //EventListeners
    canvas.addEventListener('mousedown', startPos);
    canvas.addEventListener('mouseup', endPos);
    canvas.addEventListener('mousemove', draw);




    
    // brush slider
    const brushRange = document.querySelector("#brushRange");
    let brushSize = parseInt(brushRange.value);
    //texten där värdet på brush size står
    const brushOutput = document.querySelector("#brushOutput");
brushOutput.textContent = brushSize

brushRange.addEventListener("input", () => {
    brushSize = parseInt(brushRange.value);
    brushOutput.textContent = brushSize;
})

//Color change
hotpinkBtn = document.querySelector("#hotpinkBtn");
hotpinkBtn.addEventListener("click", colorChange);

orangeBtn = document.querySelector("#orangeBtn");
orangeBtn.addEventListener("click", colorChange);

function colorChange() {
    // color = "hotpink";

    if (orangeBtn.PerformClick) {
        color = "orange"
    }
}

// const colorHotpink = document.querySelector("colorHotpink");


});