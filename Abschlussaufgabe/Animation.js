var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    window.addEventListener("load", init);
    Abschlussaufgabe.flowers = []; //Gesammelte Blumen werden in dieses Array gespeichert
    let r = 61; //f�r den Timer
    let imgData;
    let player = new Abschlussaufgabe.Bee();
    let audio = new Audio("GameMusic3.mp3"); //Spielemusik
    let highscore = 0; //Score steht zu Beginn auf 0
    function init(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        Abschlussaufgabe.crc2 = canvas.getContext("2d");
        console.log(Abschlussaufgabe.crc2);
        //Hintergund wird mittels einer Klasse erstellt
        Abschlussaufgabe.hintergrund();
        //Speichern des Bildes, damit es nicht jedes mal neu gezeichnet werden muss:
        imgData = Abschlussaufgabe.crc2.getImageData(0, 0, canvas.width, canvas.height);
        console.log(imgData);
        window.addEventListener('keydown', flyingBee); //EventListener f�r Pfeiltasten
        window.addEventListener('touchstart', moveByTouch);
        window.addEventListener('touchend', moveByRelease);
        audio.loop = true; //Damit Musik sich wiederholt
        audio.play(); //Abspielen der Musik
        animate(); //Funktionsaufruf f�r "animate"
        checkPosition();
        createFlowers();
        createTimer();
    }
    //Funktion f�r die Animation
    function animate() {
        window.setTimeout(animate, 10);
        //crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        Abschlussaufgabe.crc2.putImageData(imgData, 0, 0);
        moveObjects();
        drawObjects();
    }
    function moveObjects() {
        for (let i = 0; i < Abschlussaufgabe.flowers.length; i++) {
            Abschlussaufgabe.flowers[i].checkPosition();
        }
    }
    //Objekte zeichnen
    function drawObjects() {
        for (let i = 0; i < Abschlussaufgabe.flowers.length; i++)
            Abschlussaufgabe.flowers[i].draw();
        player.draw(); //Biene wird gezeichnet
        showTimer(); //Timer wird gezeichnet
        showScore(); //Score wird gezeichnet
        gameEnd(); //Alert-Box
    }
    //Blumen werden random erstellt
    function createFlowers() {
        window.setTimeout(createFlowers, 2500);
        let p = Math.floor(Math.random() * 4);
        switch (p) {
            case 0:
                let purpleFlowers = new Abschlussaufgabe.PurpleFlower();
                Abschlussaufgabe.flowers.push(purpleFlowers);
                break;
            case 1:
                let redFlowers = new Abschlussaufgabe.RedFlower();
                Abschlussaufgabe.flowers.push(redFlowers);
                break;
            case 2:
                let blueFlowers = new Abschlussaufgabe.BlueFlower();
                Abschlussaufgabe.flowers.push(blueFlowers);
                break;
            case 3:
                let greenFlowers = new Abschlussaufgabe.GreenFlower();
                Abschlussaufgabe.flowers.push(greenFlowers);
                break;
        }
    }
    //Kontrolle der Position der Biene. 
    //Hat sie die selbe Position wie die Blume, verschwindet die Blume durch das splice
    function checkPosition() {
        window.setTimeout(checkPosition, 10);
        for (let i = 0; i < Abschlussaufgabe.flowers.length; i++) {
            let flower = Abschlussaufgabe.flowers[i];
            let collected = player.collectedFlowers(flower.x, flower.y);
            if (collected) {
                Abschlussaufgabe.flowers.splice(i, 1);
                //this.flower = null;
                gameScore(flower.score);
            }
        }
    }
    //Pfeiltasten f�r das Bewegen der Biene am PC
    function flyingBee(_event) {
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
         }
     } */
    function moveByTouch(_event) {
        /*if (_event.changedTouches[0].clientX < crc2.canvas.clientWidth / 2) {
        player.moveLeft();
        }
        if (_event.changedTouches[0].clientY < crc2.canvas.clientHeight / 2) {
            player.moveUp();
            } else {
                player.moveDown();
        }*/
        let dx = _event.changedTouches[0].clientX - this.player.x;
        let dy = _event.changedTouches[0].clientY - this.player.y;
        return Math.sqrt(dx * dx + dy * dy);
    }
    function moveByRelease(_event) {
        let distance = this.moveByTouch();
        if (distance < this.moveByTouch)
            this.moveByTouch();
    }
    //Timer 
    function createTimer() {
        console.log("setTimer");
        setInterval(function () {
            if (r >= 0) {
                r--;
            }
        }, 1000);
    }
    //Anzeige des Timers
    function showTimer() {
        Abschlussaufgabe.crc2.font = "35px Comic Sans MS";
        Abschlussaufgabe.crc2.fillStyle = "white";
        Abschlussaufgabe.crc2.fillText("Time: " + r + " sec.", 60, 550);
    }
    //Punktestand des Spiels
    function gameScore(score) {
        highscore += score;
    }
    //Angzeige des Punktestandes
    function showScore() {
        Abschlussaufgabe.crc2.font = "35px Comic Sans MS";
        Abschlussaufgabe.crc2.fillStyle = "white";
        Abschlussaufgabe.crc2.fillText("Score: " + highscore + " Blossoms", 475, 550);
    }
    //Alert-Box 1 erscheint, wenn der Timer abgelaufen ist und zeigt gesammelte Bl�ten an
    //Alert-Box 2 erscheint, wenn Alert-Box 1 weggeklickt wurde
    function gameEnd() {
        if (r <= 0) {
            alert("Bsssss game's over! You've collected " + highscore + " blossoms");
            alert("Click okay for playing Busy Bee again");
            highscore = 0;
            r = 61;
        }
    }
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=Animation.js.map