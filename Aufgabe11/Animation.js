var Aufgabe11;
(function (Aufgabe11) {
    window.addEventListener("load", init);
    let movingObjects = [];
    /*let bubbles: Bubbles[] = [];
    let starfishes: Starfish[] = [];
    let foodie: Food[] = [];*/
    let n = 16;
    let m = 0;
    let imgData;
    function init(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        Aufgabe11.crc2 = canvas.getContext("2d");
        console.log(Aufgabe11.crc2);
        canvas.addEventListener("click", insertNewObject);
        //Hintergund wird mittels einer Klasse erstellt
        let hg = new Aufgabe11.Hintergrund;
        hg.screen();
        //Speichern des Bildes, damit es nicht jedes mal neu gezeichnet werden muss:
        imgData = Aufgabe11.crc2.getImageData(0, 0, canvas.width, canvas.height);
        console.log(imgData);
        for (let i = 0; i <= m; i++) {
            let starfishes = new Aufgabe11.Starfish();
            movingObjects.push(starfishes);
        }
        for (let i = 0; i < n; i++) {
            let fishes = new Aufgabe11.Fish();
            movingObjects.push(fishes);
            let bubbles = new Aufgabe11.Bubble();
            movingObjects.push(bubbles);
        }
        animate();
    }
    /*function insertNewObject(_event: Event): void {
        let foodie: Food = new Food("rgb(204, 102, 0)");
        fishes.push(foodie);
    }*/
    function insertNewObject(_event) {
        //Abfrage f�r x und y des MouseEvents
        let x = _event.clientX;
        let y = _event.clientY;
        let r = Math.floor(Math.random() * 2);
        switch (r) {
            case 0:
                let foodie = new Aufgabe11.Food();
                foodie.x = x;
                foodie.y = y;
                movingObjects.push(foodie);
                break;
        }
    }
    function animate() {
        window.setTimeout(animate, 10);
        //crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        Aufgabe11.crc2.putImageData(imgData, 0, 0);
        moveObjects();
        drawObjects();
    }
    function moveObjects() {
        for (let i = 0; i < movingObjects.length; i++) {
            movingObjects[i].move();
        }
    }
    function drawObjects() {
        for (let i = 0; i < movingObjects.length; i++) {
            movingObjects[i].draw();
        }
    }
})(Aufgabe11 || (Aufgabe11 = {}));
/*//Luftblasen aus der Schatzkiste
for (let i: number = 0; i < n; i++) {
    let bubble: Bubbles = new Bubbles();
    bubble.x = (740);
    bubble.y = Math.random() * 625;
    bubble.radius = Math.random() * 10;

    bubbles.push(bubble);
}


//Seesterne
for (let i: number = 0; i <= m; i++) {
    let starfish: Starfish = new Starfish();
    starfish.x = (325);
    starfish.y = (675);

    starfishes.push(starfish);
}

for (let i: number = 0; i <= m; i++) {
    let starfish: Starfish = new Starfish();
    starfish.x = (550);
    starfish.y = (750);

    starfishes.push(starfish);
}


for (let i: number = 0; i < n; i++) {
    let food: Food = new Food();
    food.x = Math.random() * crc2.canvas.width;
    food.y = Math.random() * crc2.canvas.height;
    food.radius = Math.random() * 10;

    foodie.push(food);

}

//Animation wird aufrufen
animate();

}

//Funktion f�r Animation der Objekte
function animate(): void {
window.setTimeout(animate, 18);

//console.log(animate);

crc2.putImageData(imgData, 0, 0);
//crc2.clearRect( 0, 0, crc2.canvas.width, crc2.canvas.height );

moveObjects();
drawObjects();
}


function moveObjects(): void {

for (let i: number = 0; i < starfishes.length; i++) {
    starfishes[i].move();
}

for (let i: number = 0; i < fishes.length; i++) {
    fishes[i].move();
}


for (let i: number = 0; i < bubbles.length; i++) {
    bubbles[i].move();
}

for (let i: number = 0; i < foodie.length; i++) {
    foodie[i].move();
}

}

function drawObjects(): void {
for (let i: number = 0; i < starfishes.length; i++)
    starfishes[i].drawStarfish();


for (let i: number = 0; i < fishes.length; i++)
    fishes[i].draw();

for (let i: number = 0; i < bubbles.length; i++)
    bubbles[i].drawBubble();

for (let i: number = 0; i < foodie.length; i++) {
    foodie[i].drawFood();
}*/ 
//# sourceMappingURL=Animation.js.map