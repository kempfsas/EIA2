namespace Aufgabe11 {
    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;
    let movingObjects: MovingObject[] = [];
    /*let bubbles: Bubbles[] = [];
    let starfishes: Starfish[] = [];
    let foodie: Food[] = [];*/
    let n: number = 16;
    let m: number = 0;
    let imgData: ImageData;


    function init(_event: Event): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        console.log(crc2);


        canvas.addEventListener("click", insertNewObject);
        
        //Hintergund wird mittels einer Klasse erstellt
        let hg: Hintergrund = new Hintergrund;
        hg.screen();
        //Speichern des Bildes, damit es nicht jedes mal neu gezeichnet werden muss:
        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);
        console.log(imgData);
        
                
        for (let i: number = 0; i <= m; i++) {
            let starfishes: Starfish = new Starfish(/*"rgb(255, 51, 255)"*/);
            movingObjects.push(starfishes);
        }
        
        for (let i: number = 0; i < n; i++) {
            let fishes: Fish = new Fish(/*"#00ffff"*/);
            movingObjects.push(fishes);
            
            let bubbles: Bubble = new Bubble(/*"rgb(230, 255, 247)"*/);
            movingObjects.push(bubbles);
            
            /*let foodie: Food = new Food("rgb(204, 102, 0)");
            fishes.push(foodie);*/
            
            }

        animate();
    }
    
    /*function insertNewObject(_event: Event): void {
        let foodie: Food = new Food("rgb(204, 102, 0)");
        fishes.push(foodie);
    }*/
    
    function insertNewObject(_event: MouseEvent): void {

        //Abfrage für x und y des MouseEvents
        let x: number = _event.clientX;
        let y: number = _event.clientY;

        let r: number = Math.floor(Math.random() * 2);

        switch (r) {
            case 0:
                let foodie: Food = new Food();
                foodie.x = x;
                foodie.y = y;
                movingObjects.push(foodie);
                break;
            }

        
        }
    
    function animate(): void {
        window.setTimeout(animate, 10);

        //crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        crc2.putImageData(imgData, 0, 0);
        
        moveObjects();
        drawObjects();
    }
    
    function moveObjects(): void {
        for (let i: number = 0; i < movingObjects.length; i++) {
            movingObjects[i].move();
        }
    }
    
    function drawObjects(): void {
        for (let i: number = 0; i < movingObjects.length; i++) {
            movingObjects[i].draw();
        }
    }
    

    
}


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

    //Funktion für Animation der Objekte
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