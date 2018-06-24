namespace Aufgabe10 {
    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;
    export let ctx: CanvasRenderingContext2D;
    let fishes: Fishes[] = [];
    let bubbles: Bubbles[] = [];
    let starfishes: Starfish[] = [];
    let n: number = 16;
    let m: number = 0;
    let imgData: ImageData;


    function init(_event: Event): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        ctx = canvas.getContext("2d");
        console.log(crc2);


        //Hintergund wird mittels einer Klasse erstellt
        let hg: Background = new Background;
        hg.screen();
        //Speichern des Bildes, damit es nicht jedes mal neu gezeichnet werden muss:
        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);
        console.log(imgData);


        //Luftblasen aus der Schatzkiste
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



        //Fische
        for (let i: number = 0; i < n; i++) {
            let fish: Fishes = new Fishes();
            fish.x = Math.random() * crc2.canvas.width;
            fish.y = Math.random() * crc2.canvas.height;
            fish.r = Math.random() * 600;
            fish.g = Math.random() * 100;
            fish.b = Math.random() * 200;

            fishes.push(fish);

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

    }

    function drawObjects(): void {
        for (let i: number = 0; i < starfishes.length; i++)
            starfishes[i].drawStarfish();


        for (let i: number = 0; i < fishes.length; i++)
            fishes[i].draw();

        for (let i: number = 0; i < bubbles.length; i++)
            bubbles[i].drawBubble();

    }
} //Schließen von namespace