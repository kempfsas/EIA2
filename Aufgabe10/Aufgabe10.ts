namespace Aufgabe10 {
    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;
    export let ctx: CanvasRenderingContext2D;
    let fishes: Fishes[] = [];
    let bubbles: Bubbles[] = [];
    //let starfishes: Starfish[] = [];
    let n: number = 16;
    let imgData: ImageData;
    
    //let imgData: ImageData;
    function init( _event: Event ): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        ctx = canvas.getContext("2d");
        console.log(crc2);


        //Hintergund mittels einer Klasse erstellen
        let hg: Background = new Background;
        hg.paint();
        imgData = crc2.getImageData( 0, 0, canvas.width, canvas.height ); //Speichern des Canvas als Bild
        console.log(imgData);

        //Luftblasen 
        for ( let i: number = 0; i < n; i++ ) {
            let bubble: Bubbles = new Bubbles();
            bubble.x = (740);
            bubble.y = Math.random() * 625;
            bubble.radius = Math.random() * 10;

            bubbles.push(bubble);
        }

        //Fische
        for ( let i: number = 0; i < n; i++ ) {
            let fish: Fishes = new Fishes();
            fish.x = Math.random() * crc2.canvas.width;
            fish.y = Math.random() * crc2.canvas.height;
            fish.r = Math.random() * 400;
            fish.g = Math.random() * 150;
            fish.b = Math.random() * 360;

            fishes.push(fish);

        }

        //Seesterne
        /*for (let i: number = 0; i < n; i++) {
            let starfish: Starfish = new Starfish();
            starfish.x = Math.random() * crc2.canvas.width;
            starfish.y = Math.random() * crc2.canvas.height;
            
            starfishes.push(starfish);
            }*/

        //Animation aufrufen
        animate();

    }

    function animate(): void {
        window.setTimeout(animate, 18);

        //console.log(animate);
        
        crc2.putImageData(imgData, 0, 0); 
        //crc2.clearRect( 0, 0, crc2.canvas.width, crc2.canvas.height );

        moveObjects();
        drawObjects();
    }

    function moveObjects(): void {
        for ( let i: number = 0; i < fishes.length; i++ ) {
            fishes[i].move();
        }

        for ( let i: number = 0; i < bubbles.length; i++ ) {
            bubbles[i].move();
        }
        
        /*for (let i: number = 0; i < starfishes.length; i++) {
            starfishes[i].move();
            }*/

    }

    function drawObjects(): void {
        for ( let i: number = 0; i < fishes.length; i++ )
            fishes[i].draw();


        for ( let i: number = 0; i < bubbles.length; i++ )
            bubbles[i].drawBubble();

        /*for (let i: number = 0; i < starfishes.length; i++)
            starfishes[i].drawStarfish();*/
}
    }