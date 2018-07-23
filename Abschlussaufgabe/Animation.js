var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    window.addEventListener("load", init);
    Abschlussaufgabe.flowers = [];
    //let player: Bee[] = [];
    let n = 1;
    let m = 5;
    let r = 61; //f�r den Timer
    let imgData;
    let player = new Abschlussaufgabe.Bee();
    let audio = new Audio("GameMusic3.mp3");
    let highscore = 0;
    function init(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        Abschlussaufgabe.crc2 = canvas.getContext("2d");
        console.log(Abschlussaufgabe.crc2);
        //Hintergund wird mittels einer Klasse erstellt
        Abschlussaufgabe.hintergrund();
        //Speichern des Bildes, damit es nicht jedes mal neu gezeichnet werden muss:
        imgData = Abschlussaufgabe.crc2.getImageData(0, 0, canvas.width, canvas.height);
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
    function animate() {
        window.setTimeout(animate, 10);
        //crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        Abschlussaufgabe.crc2.putImageData(imgData, 0, 0);
        moveObjects();
        drawObjects();
    }
    function checkPosition() {
        window.setTimeout(checkPosition, 10);
        for (let i = 0; i < Abschlussaufgabe.flowers.length; i++) {
            let flower = Abschlussaufgabe.flowers[i];
            let collected = player.collectedFlowers(flower.x, flower.y);
            if (collected) {
                Abschlussaufgabe.flowers.splice(i, 1);
                //this.flower = null;
                gameScore(flower.points);
            }
        }
    }
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
    function moveObjects() {
        /*for (let i: number = 0; i < player.length; i++) {
            player[i].move();
        
        }*/
        for (let i = 0; i < Abschlussaufgabe.flowers.length; i++) {
            Abschlussaufgabe.flowers[i].checkPosition();
        }
    }
    function drawObjects() {
        for (let i = 0; i < Abschlussaufgabe.flowers.length; i++)
            Abschlussaufgabe.flowers[i].draw();
        player.draw();
        showTimer();
        showScore();
        gameEnd();
    }
    function createTimer() {
        console.log("setTimer");
        setInterval(function () {
            if (r >= 0) {
                r--;
            }
        }, 1000);
    }
    function showTimer() {
        Abschlussaufgabe.crc2.font = "40px Comic Sans MS";
        Abschlussaufgabe.crc2.fillStyle = "white";
        Abschlussaufgabe.crc2.fillText("Time: " + r + " sec.", 60, 550);
    }
    function gameScore(points) {
        highscore += points;
    }
    function showScore() {
        Abschlussaufgabe.crc2.font = "40px Comic Sans MS";
        Abschlussaufgabe.crc2.fillStyle = "white";
        Abschlussaufgabe.crc2.fillText("Score: " + highscore + " Points", 500, 550);
    }
    function gameEnd() {
        if (r <= 0) {
            alert("Game's over! You've collected " + highscore + " Points");
        }
    }
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=Animation.js.map