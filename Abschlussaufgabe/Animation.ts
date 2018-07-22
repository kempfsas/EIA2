namespace Abschlussaufgabe {
    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;
    let flowers: MainFlower[] = [];
    //let player: Bee[] = [];
    let n: number = 1;
    let m: number = 10;
    let imgData: ImageData;
    
    let player: Bee = new Bee();


    function init(_event: Event): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        console.log(crc2);




        //Hintergund wird mittels einer Klasse erstellt
        hintergrund();
        //Speichern des Bildes, damit es nicht jedes mal neu gezeichnet werden muss:
        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);
        console.log(imgData);


      
        for (let i: number = 0; i < m; i++) {
            let purple: PurpleFlower = new PurpleFlower;
            flowers.push(purple);
        }
        
        /*for (let i: number = 0; i < n; i++) {
            let bees: Bee = new Bee();
            bees.x = (740);
            bees.y = Math.random() * 625;
            bees.radius = Math.random() * 10;

            player.push(bees);
        }*/

        animate();
    }
    
    
    
    
        function animate(): void {
        window.setTimeout(animate, 10);

        //crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        crc2.putImageData(imgData, 0, 0);
        
        moveObjects();
        drawObjects();
    }
    
        function moveObjects(): void {

        /*for (let i: number = 0; i < player.length; i++) {
            player[i].move();
        
        }*/
    }
    
    function drawObjects(): void {
        for (let i: number = 0; i < flowers.length; i++)
            flowers[i].draw();
        
        player.draw();
        }
    

    

}