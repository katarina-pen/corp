window.addEventListener('load', () => {
    // console.log("hello");
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");
    //TEXT 1
    font = '14px sans-serif',
    hasInput = false;

    //Resizing
    // canvas.height = window.innerHeight;
    // canvas.width = window.innerWidth;
    canvas.height = canvas.offsetHeight;
    canvas.width = canvas.offsetWidth;
    let color = "black"
    ctx.strokeStyle = color;
    let lineShape = "round"
    let currentTool = "pen";
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


        // CURSOR TEST
        // const cursor = document.querySelector(".cursor")

        // document.addEventListener("mousemove", (event) => {

        //     const {width,height} = cursor.getBoundingClientRect()

        //     cursor.style.left = `${event.x-width/2}px`
        //     cursor.style.top = `${event.y-height/2}px`
        // })


        //2. Måla :D

    }
    //EventListeners
    canvas.addEventListener('mousedown', startPos);
    canvas.addEventListener('mouseup', endPos);
    canvas.addEventListener('mousemove', draw);



    //TEXT 2
    canvas.onclick = function (e) {
        if (currentTool == "text") {
            if (hasInput) return;
            addInput(e.offsetX, e.offsetY);
        }
    }

        //Function to dynamically add an input box: 
    function addInput(x, y) {

        var input = document.createElement('input');

        input.type = 'text';
        input.placeholder = "Write text here";
        input.style.position = 'fixed';
        input.style.left = (x - 4) + 'px';
        input.style.top = (y - 4) + 'px';

        input.onkeydown = handleEnter;

        document.body.appendChild(input);

        input.focus();

        hasInput = true;
    }

        //Key handler for input box:
    function handleEnter(e) {
        var keyCode = e.keyCode;
        if (keyCode === 13) {
            drawText(this.value, parseInt(this.style.left, 10), parseInt(this.style.top, 10));
            document.body.removeChild(this);
            hasInput = false;
        }
    }

    //Draw the text onto canvas:
    function drawText(txt, x, y) {
        ctx.textBaseline = 'top';
        ctx.textAlign = 'left';
        ctx.font = font;
        //Texten blir färgen som användaren har valt.
        ctx.fillStyle = color;
        ctx.fillText(txt, x - 4, y - 4);
    }

    textBtn.addEventListener("click", () => {
        currentTool = "text";
    }); 
    // createText);

    // brush slider
    const brushRange = document.querySelector("#brushRange");
    const quantity = document.querySelector("#quantity");
    let brushSize = parseInt(brushRange.value);
    //texten där värdet på brush size står
    const brushOutput = document.querySelector("#brushOutput");
    brushOutput.textContent = brushSize

    //FORM
    quantity.addEventListener("input", () => {
        document.getElementById("notFittingNumber").style.display = "none";

        if (quantity.value < 1 || quantity.value > 100) {
            document.getElementById("notFittingNumber").style.display = "block";
            brushOutput.textContent = "Error";
            document.getElementById("brushOutput").style.color = "#ff0000";
        } else {
            brushSize = parseInt(quantity.value);
            brushOutput.textContent = brushSize;
            brushRange.value = brushSize
            
        }
    })

    //SLIDER
    brushRange.addEventListener("input", () => {
        brushSize = parseInt(brushRange.value);
        brushOutput.textContent = brushSize;
        quantity.value = brushSize
        document.getElementById("notFittingNumber").style.display = "none";
        document.getElementById("brushOutput").style.color = "#4682b4";


    })
    //ERROR MESSAGE
    // notFittingNumber.addEventListener("input",() => {
    //     document.getElementById("#notFittingNumber").style.display = "none";

    //     if (quantity.value < 1 || quantity.value > 100 ) {
    //         document.getElementById("#notFittingNumber").style.display = "block";
    //     }

    // } )

    //Color change
    // HOTPINK
    hotpinkBtn = document.querySelector("#hotpinkBtn");
    hotpinkBtn.addEventListener("click", () => {
        color = "hotpink";
    });

    // const buttonGroup = document.getElementById("button-group");
    // let prevButton = null;

    // const buttonPressed = (e) => {
    //     if (e.target.nodeName === 'BUTTON') {
    //         e.target.classList.add('active'); // Add .active CSS Class

    //         if (prevButton !== null) {
    //             prevButton.classList.remove('active');  // Remove .active CSS Class
    //         }

    //         prevButton = e.target;
    //     }
    // }
    // buttonGroup.addEventListener("click", buttonPressed);



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
        document.getElementById("yellowBtn").style.border = "thick solid #0000FF";

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
        currentTool = "square";
        lineShape = "square";
        console.log("square pressed");
    });

    //Pencil tool
    const pencilBtn = document.querySelector("#pencilBtn");
    pencilBtn.addEventListener("click", () => {
        // ctx.fillRect(x,y,200,200);
        currentTool = "pen"
        lineShape = "round";
        console.log("pencil pressed");
    });

    //Fill tool
    fillBtn = document.querySelector("#fillBtn");
    fillBtn.addEventListener("click", () => {
        currentTool = "fill";
        ctx.fillStyle = color;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    });


});