var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    window.addEventListener("load", init);
    let flowers = [];
    //let player: Bee[] = [];
    let n = 1;
    let m = 10;
    let imgData;
    let player = new Abschlussaufgabe.Bee();
    function init(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        Abschlussaufgabe.crc2 = canvas.getContext("2d");
        console.log(Abschlussaufgabe.crc2);
        //Hintergund wird mittels einer Klasse erstellt
        Abschlussaufgabe.hintergrund();
        //Speichern des Bildes, damit es nicht jedes mal neu gezeichnet werden muss:
        imgData = Abschlussaufgabe.crc2.getImageData(0, 0, canvas.width, canvas.height);
        console.log(imgData);
        for (let i = 0; i < m; i++) {
            let purple = new Abschlussaufgabe.PurpleFlower;
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
    function animate() {
        window.setTimeout(animate, 10);
        //crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        Abschlussaufgabe.crc2.putImageData(imgData, 0, 0);
        moveObjects();
        drawObjects();
    }
    function moveObjects() {
        /*for (let i: number = 0; i < player.length; i++) {
            player[i].move();
        
        }*/
    }
    function drawObjects() {
        for (let i = 0; i < flowers.length; i++)
            flowers[i].draw();
        player.draw();
    }
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=Animation.js.map