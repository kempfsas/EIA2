namespace Abschlussaufgabe {
    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;

    export let flowers: MainFlower[] = []; //Gesammelte Blumen werden in dieses Array gespeichert

    let r: number = 61; //für den Timer

    let imgData: ImageData;

    let player: Bee = new Bee();

    let audio = new Audio("GameMusic3.mp3"); //Spielemusik

    let highscore: number = 0; //Score steht zu Beginn auf 0



    function init(_event: Event): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        console.log(crc2);


        //Hintergund wird mittels einer Klasse erstellt
        hintergrund();
        //Speichern des Bildes, damit es nicht jedes mal neu gezeichnet werden muss:
        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);
        console.log(imgData);

        //window.addEventListener('keydown', flyingBee); //EventListener für Pfeiltasten

        //window.addEventListener('touchstart', moveByTouch);



        audio.loop = true; //Damit Musik sich wiederholt
        audio.play(); //Abspielen der Musik
        animate(); //Funktionsaufruf für "animate"
        checkPosition();
        createFlowers();
        createTimer();
    }



    //Funktion für die Animation
    function animate(): void {
        window.setTimeout(animate, 10);

        //crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        crc2.putImageData(imgData, 0, 0);

        moveObjects();
        drawObjects();
    }


    function moveObjects(): void {

        for (let i: number = 0; i < flowers.length; i++) {
            flowers[i].checkPosition();
        }
    }


    //Objekte zeichnen
    function drawObjects(): void {
        for (let i: number = 0; i < flowers.length; i++)
            flowers[i].draw();

        player.draw(); //Biene wird gezeichnet
        showTimer(); //Timer wird gezeichnet
        showScore(); //Score wird gezeichnet
        gameEnd(); //Alert-Box
    }



    //Blumen werden random erstellt
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



    //Kontrolle der Position der Biene. 
    //Hat sie die selbe Position wie die Blume, verschwindet die Blume durch das splice
    function checkPosition(): void {
        window.setTimeout(checkPosition, 10);
        for (let i: number = 0; i < flowers.length; i++) {
            let flower = flowers[i];
            let collected = player.collectedFlowers(flower.x, flower.y);

            if (collected) {
                flowers.splice(i, 1);
                //this.flower = null;
                gameScore(flower.score);
            }
        }
    }



    window.addEventListener('keydown', function flyingBee(_e: KeyboardEvent): void {
        if (_e.key == "ArrowUp") {
            player.moveUp();
        }
        if (_e.key == "ArrowDown") {
            player.moveDown();
        }

        if (_e.key == "ArrowLeft") {
            player.moveLeft();
        }
        if (_e.key == "ArrowRight") {
            player.moveRight();
        }

    }, false);


    window.addEventListener('touchmove', function(_e: TouchEvent) {


        if (_e.changedTouches[0].clientX < crc2.canvas.clientWidth / 2) {
            player.moveLeft();
        } else {
            player.moveRight();
        }

        if (_e.changedTouches[0].clientY < crc2.canvas.clientHeight / 2) {
            player.moveUp();
        } else {
            player.moveDown();
        }

    }, false);


    //Steuerung der Biene auf Tablet und Smartphone
    /* function moveByTouch(_event: TouchEvent): void {
         if (_event.changedTouches[0].clientX < crc2.canvas.clientWidth / 2) {
             player.moveLeft();
         } else {
             player.moveRight();   
         }
         
         if (_event.changedTouches[0].clientY < crc2.canvas.clientHeight / 2) {
             player.moveUp();
             } else {
                 player.moveDown();    
         }   } */





    //Timer 
    function createTimer(): void {
        console.log("setTimer");
        setInterval(function() {
            if (r >= 0) {
                r--;
            }
        }, 1000
        );
    }

    //Anzeige des Timers
    function showTimer(): void {
        crc2.font = "35px Comic Sans MS";
        crc2.fillStyle = "white";
        crc2.fillText("Time: " + r + " sec.", 60, 550);

    }


    //Punktestand des Spiels
    function gameScore(score: number): void {
        highscore += score;
    }

    //Angzeige des Punktestandes
    function showScore(): void {
        crc2.font = "35px Comic Sans MS";
        crc2.fillStyle = "white";
        crc2.fillText("Score: " + highscore + " Blossoms", 475, 550);
    }





    //Alert-Box 1 erscheint, wenn der Timer abgelaufen ist und zeigt gesammelte Blüten an
    //Alert-Box 2 erscheint, wenn Alert-Box 1 weggeklickt wurde
    function gameEnd(): void {
        if (r <= 0) {
            alert("Bsssss game's over! You've collected " + highscore + " blossoms");
            alert("Click okay for playing Busy Bee again");
            highscore = 0;
            r = 61;

        }
    }


}
