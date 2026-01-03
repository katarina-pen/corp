window.addEventListener('load', () => {
    // console.log("hello");
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");

    //Resizing
    // canvas.height = window.innerHeight;
    // canvas.width = window.innerWidth;
    canvas.height = canvas.offsetHeight;
    canvas.width = canvas.offsetWidth;
    let color = "black"
    ctx.strokeStyle = color;
    let lineShape = "round"
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
        ctx.lineCap = lineShape;

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
        //Skapar rektangel
        // function fillSquare() {
        //     // ctx.fillRect(x, y, 50, 50)
        //     ctx.fillStyle = color;
        //     ctx.fillRect(0, 0, canvas.width, canvas.height);
        // }



        // document.getElementById('fillBtn').onclick = function () {
        //     canvas.addEventListener("click", fillSquare)
        // }







        //2. Måla :D

    }
    //EventListeners
    canvas.addEventListener('mousedown', startPos);
    canvas.addEventListener('mouseup', endPos);
    canvas.addEventListener('mousemove', draw);





    // brush slider
    const brushRange = document.querySelector("#brushRange");
    const quantity = document.querySelector("#quantity");
    let brushSize = parseInt(brushRange.value);
    //texten där värdet på brush size står
    const brushOutput = document.querySelector("#brushOutput");
    brushOutput.textContent = brushSize

    brushRange.addEventListener("input", () => {
        brushSize = parseInt(brushRange.value);
        brushOutput.textContent = brushSize;

    })

    //Color change
    // HOTPINK
    hotpinkBtn = document.querySelector("#hotpinkBtn");
    hotpinkBtn.addEventListener("click", () => {
        color = "hotpink";
    });

    // BLACK
    blackBtn = document.querySelector("#blackBtn");
    blackBtn.addEventListener("click", () => {
        color = "black";
    });

    //WHITE 
    whiteBtn = document.querySelector("#whiteBtn");
    //ERASE
    eraseBtn = document.querySelector("#eraseBtn");

    function whiteColor() {
        color = "white";
        lineShape = "round"
    }
    eraseBtn.addEventListener("click", whiteColor);
    whiteBtn.addEventListener("click", whiteColor);


    //RED 
    redbtn = document.querySelector("#redBtn");
    redBtn.addEventListener("click", () => {
        color = "red";
    });

    //YELLOW 
    yellowBtn = document.querySelector("#yellowBtn");
    yellowBtn.addEventListener("click", () => {
        color = "yellow";
    });

    //GREEN 
    greenBtn = document.querySelector("#greenBtn");
    greenBtn.addEventListener("click", () => {
        color = "green";
    });

    //ORANGE 
    orangeBtn = document.querySelector("#orangeBtn");
    orangeBtn.addEventListener("click", () => {
        color = "orange";
    });

    //GREY 
    greyBtn = document.querySelector("#greyBtn");
    greyBtn.addEventListener("click", () => {
        color = "grey";
    });

    //PURPLE 
    purpleBtn = document.querySelector("#purpleBtn");
    purpleBtn.addEventListener("click", () => {
        color = "purple";
    });

    //BROWN 
    brownBtn = document.querySelector("#brownBtn");
    brownBtn.addEventListener("click", () => {
        color = "brown";
    });

    //BEIGE 
    beigeBtn = document.querySelector("#beigeBtn");
    beigeBtn.addEventListener("click", () => {
        color = "beige";
    });

    //brat 
    bratBtn = document.querySelector("#bratBtn");
    bratBtn.addEventListener("click", () => {
        color = "#8ACE00";

    });

    //Buttons and drawing functions
    //ERASE finns längre upp med whiteBtn

    //Square tool
    squareBtn = document.querySelector("#squareBtn");
    squareBtn.addEventListener("click", () => {
        // ctx.fillRect(x,y,200,200);
        lineShape = "square";
        console.log("square pressed");
    });

    //Pencil tool
    const pencilBtn = document.querySelector("#pencilBtn");
    pencilBtn.addEventListener("click", () => {
        // ctx.fillRect(x,y,200,200);
        lineShape = "round";
        console.log("pencil pressed");
    });

    //Fill tool
    fillBtn = document.querySelector("#fillBtn");
    fillBtn.addEventListener("click", () => {
        ctx.fillStyle = color;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    });

    


});