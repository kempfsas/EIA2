namespace Abschlussaufgabe {
    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;

    export let flowers: MainFlower[] = [];

    //let player: Bee[] = [];
    let n: number = 1;
    let m: number = 5;
    let r: number = 61; //für den Timer
    let imgData: ImageData;

    let player: Bee = new Bee();

    let audio = new Audio("GameMusic3.mp3");

    let highscore: number = 0;

    function init(_event: Event): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        console.log(crc2);


        //Hintergund wird mittels einer Klasse erstellt
        hintergrund();
        //Speichern des Bildes, damit es nicht jedes mal neu gezeichnet werden muss:
        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);
        console.log(imgData);

        window.addEventListener('keydown', flyingBee);

        /*for (let i: number = 0; i < m; i++) {
            let purple: PurpleFlower = new PurpleFlower;
            flowers.push(purple);
        }*/

        /*for (let i: number = 0; i < n; i++) {
            let bees: Bee = new Bee();
            bees.x = (740);
            bees.y = Math.random() * 625;
            bees.radius = Math.random() * 10;

            player.push(bees);
        }*/

        audio.loop = true;
        audio.play();
        animate();
        checkPosition();
        createFlowers();
        createTimer();
    }




    function animate(): void {
        window.setTimeout(animate, 10);

        //crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        crc2.putImageData(imgData, 0, 0);

        moveObjects();
        drawObjects();
    }

    function checkPosition(): void {
        window.setTimeout(checkPosition, 10);
        for (let i: number = 0; i < flowers.length; i++) {
            let flower = flowers[i];
            let collected = player.collectedFlowers(flower.x, flower.y);

            if (collected) {
                flowers.splice(i, 1);
                //this.flower = null;
                gameScore(flower.points);
            }
        }
    }

    function createFlowers(): void {
        window.setTimeout(createFlowers, 2500);

        let p: number = Math.floor(Math.random() * 4);
        switch (p) {
            case 0:
                let purpleFlowers: PurpleFlower = new PurpleFlower();
                flowers.push(purpleFlowers);
                break;
            case 1:
                let redFlowers: RedFlower = new RedFlower();
                flowers.push(redFlowers);
                break;
            case 2:
                let blueFlowers: BlueFlower = new BlueFlower();
                flowers.push(blueFlowers);
                break;
            case 3:
                let greenFlowers: GreenFlower = new GreenFlower();
                flowers.push(greenFlowers);
                break;
        }
    }


    function flyingBee(_event: KeyboardEvent): void {
        if (_event.key == "ArrowLeft") {
            player.moveLeft();
        }
        if (_event.key == "ArrowRight") {
            player.moveRight();
        }
        if (_event.key == "ArrowUp") {
            player.moveUp();
        }
        if (_event.key == "ArrowDown") {
            player.moveDown();
        }
    }







    function moveObjects(): void {

        /*for (let i: number = 0; i < player.length; i++) {
            player[i].move();
        
        }*/

        for (let i: number = 0; i < flowers.length; i++) {
            flowers[i].checkPosition();
        }
    }

    function drawObjects(): void {
        for (let i: number = 0; i < flowers.length; i++)
            flowers[i].draw();

        player.draw();
        showTimer();
        showScore();
        gameEnd();
    }


    function createTimer(): void {
        console.log("setTimer");
        setInterval(function() {
            if (r >= 0) {
                r--;
            }
        }, 1000
        );
    }

    function showTimer(): void {
        crc2.font = "40px Comic Sans MS";
        crc2.fillStyle = "white";
        crc2.fillText("Time: " + r + " sec.", 60, 550);

    }

    function gameScore(points: number): void {
        highscore += points;
    }

    function showScore(): void {
        crc2.font = "40px Comic Sans MS";
        crc2.fillStyle = "white";
        crc2.fillText("Score: " + highscore + " Points", 500, 550);
    }


    function gameEnd(): void {
        if (r <= 0) {
            alert("Game's over! You've collected " + highscore + " Points");
        }
    }


}
