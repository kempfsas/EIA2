var L11_Inheritance;
(function (L11_Inheritance) {
    window.addEventListener("load", init);
    let stars = [];
    let n = 50;
    //let rects: Rect[] = [];
    function init(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        L11_Inheritance.crc2 = canvas.getContext("2d");
        console.log(L11_Inheritance.crc2);
        canvas.addEventListener("click", insertNewObject);
        canvas.addEventListener("mousedown", getPosition, false);
        for (let i = 0; i < n; i++) {
            let star = new L11_Inheritance.DavidStar("#00ffff");
            stars.push(star);
            let rect = new L11_Inheritance.Rect("#ff0000");
            stars.push(rect);
            let circles = new L11_Inheritance.Circle("#00ff00");
            stars.push(circles);
            let triangles = new L11_Inheritance.Triangle("#0000ff");
            stars.push(triangles);
        }
        animate();
    }
    function insertNewObject(_event) {
        let star = new L11_Inheritance.DavidStar("#ffff00");
        stars.push(star);
        /*let circles: Circle = new Circle("#800000");
        stars.push(circles);*/
    }
    function getPosition(_event) {
        let circles = new L11_Inheritance.Circle("#800000");
        stars.push(circles);
        var x = this.circles.x;
        var y = this.circles.y;
        var radius = this.circles.radius;
        var canvas = document.getElementById("canvas");
        x -= canvas.offsetLeft;
        y -= canvas.offsetTop;
    }
    function animate() {
        window.setTimeout(animate, 10);
        L11_Inheritance.crc2.clearRect(0, 0, L11_Inheritance.crc2.canvas.width, L11_Inheritance.crc2.canvas.height);
        moveObjects();
        drawObjects();
    }
    function moveObjects() {
        for (let i = 0; i < stars.length; i++) {
            stars[i].move();
        }
    }
    function drawObjects() {
        for (let i = 0; i < stars.length; i++) {
            stars[i].draw();
        }
    }
})(L11_Inheritance || (L11_Inheritance = {}));
//# sourceMappingURL=Animation.js.map