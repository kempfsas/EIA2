var Aufgabe10;
(function (Aufgabe10) {
    class Background {
        paint() {
            this.drawBackground(260);
            this.drawWave();
            this.drawBottomLine();
            this.drawStone(0, 625);
            this.drawChestCover(750, 575);
            this.drawChestBottom(700, 615, 90, 65);
            this.drawStarfish(550, 750);
            this.drawStarfish(325, 675);
            this.drawSeaweed(30, 645);
            this.drawSeaweed(55, 650);
            this.drawSeaweed(80, 645);
            this.drawSeaweed(945, 680);
            this.drawSeaweed(975, 700);
            this.drawSeaweed(955, 725);
            this.drawSeaweed(910, 700);
            this.drawSeaweed(930, 715);
            //this.drawOctopus
        }
        drawBackground(_sandHeight) {
            Aufgabe10.crc2.fillStyle = "rgb(77, 121, 255)";
            Aufgabe10.crc2.fillRect(0, 0, Aufgabe10.crc2.canvas.width, Aufgabe10.crc2.canvas.height);
        }
        drawWave() {
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.moveTo(0, 50);
            Aufgabe10.crc2.quadraticCurveTo(350, 200, 1000, 200);
            Aufgabe10.crc2.lineTo(1000, 150);
            Aufgabe10.crc2.quadraticCurveTo(550, 150, 400, 0);
            Aufgabe10.crc2.lineTo(0, 0);
            Aufgabe10.crc2.lineTo(0, 50);
            Aufgabe10.crc2.fillStyle = "rgb(128, 159, 255)"; /*'rgb(169, 215, 245)'*/
            ;
            Aufgabe10.crc2.fill();
        }
        drawBottomLine() {
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.fillStyle = "rgb(179, 134, 0)";
            Aufgabe10.crc2.moveTo(0, 625);
            Aufgabe10.crc2.quadraticCurveTo(30, 650, 500, 600);
            Aufgabe10.crc2.quadraticCurveTo(675, 600, 1000, 650);
            Aufgabe10.crc2.quadraticCurveTo(1000, 800, 1000, 800);
            Aufgabe10.crc2.quadraticCurveTo(1000, 800, 0, 800);
            Aufgabe10.crc2.quadraticCurveTo(0, 675, 0, 675);
            Aufgabe10.crc2.closePath();
            Aufgabe10.crc2.stroke();
            Aufgabe10.crc2.fill();
        }
        drawChestCover(_x, _y) {
            Aufgabe10.ctx.beginPath();
            Aufgabe10.crc2.fillStyle = "rgb(102, 51, 0)";
            Aufgabe10.ctx.moveTo(_x, _y);
            Aufgabe10.ctx.bezierCurveTo(_x + 80, _y - 40, _x + 80, _y + 60, _x + 60, _y + 70);
            Aufgabe10.crc2.fill();
            //crc2.lineTo(_x + 140, _y);
            Aufgabe10.crc2.closePath();
            Aufgabe10.ctx.stroke();
        }
        drawChestBottom(_x, _y, _width, _height) {
            //crc2.stroke();
            Aufgabe10.ctx.beginPath();
            Aufgabe10.crc2.fillStyle = "rgb(102, 51, 0)";
            Aufgabe10.crc2.moveTo(_x + 40, _y);
            Aufgabe10.crc2.fillRect(_x + 25, _y + 25, _width, _height);
            Aufgabe10.crc2.closePath();
            Aufgabe10.crc2.stroke();
        }
        drawStone(_x, _y) {
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.fillStyle = "rgb(140, 140, 140)";
            Aufgabe10.crc2.moveTo(_x, _y);
            Aufgabe10.crc2.lineTo(_x, _y - 40);
            Aufgabe10.crc2.lineTo(_x + 30, _y - 50);
            Aufgabe10.crc2.lineTo(_x + 50, _y - 70);
            Aufgabe10.crc2.lineTo(_x + 70, _y - 80);
            Aufgabe10.crc2.lineTo(_x + 100, _y - 80);
            Aufgabe10.crc2.lineTo(_x + 120, _y - 100);
            Aufgabe10.crc2.lineTo(_x + 150, _y - 110);
            Aufgabe10.crc2.lineTo(_x + 200, _y - 90);
            Aufgabe10.crc2.lineTo(_x + 200, _y - 60);
            Aufgabe10.crc2.lineTo(_x + 250, _y - 30);
            Aufgabe10.crc2.lineTo(_x + 300, _y - 20);
            Aufgabe10.crc2.lineTo(_x + 325, _y + 10);
            Aufgabe10.crc2.lineTo(_x + 175, _y + 20);
            Aufgabe10.crc2.lineTo(_x, _y + 15);
            Aufgabe10.crc2.lineTo(_x, _y);
            Aufgabe10.crc2.closePath();
            Aufgabe10.crc2.stroke();
            Aufgabe10.crc2.fill();
        }
        drawSeaweed(_x, _y) {
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.fillStyle = "rgb(34,139,34)";
            Aufgabe10.crc2.moveTo(_x, _y);
            Aufgabe10.crc2.lineTo(_x + 10, _y - 100);
            Aufgabe10.crc2.lineTo(_x + 15, _y);
            Aufgabe10.crc2.lineTo(_x + 20, _y - 60);
            Aufgabe10.crc2.lineTo(_x + 25, _y);
            Aufgabe10.crc2.closePath();
            Aufgabe10.crc2.stroke();
            Aufgabe10.crc2.fill();
        }
        drawStarfish(_x, _y) {
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.fillStyle = "rgb(255, 51, 255)";
            Aufgabe10.crc2.moveTo(_x, _y - 25);
            Aufgabe10.crc2.lineTo(_x + 20, _y);
            Aufgabe10.crc2.lineTo(_x - 5, _y + 25);
            Aufgabe10.crc2.lineTo(_x + 30, _y + 18);
            Aufgabe10.crc2.lineTo(_x + 50, _y + 40);
            Aufgabe10.crc2.lineTo(_x + 50, _y + 12);
            Aufgabe10.crc2.lineTo(_x + 80, _y - 5);
            Aufgabe10.crc2.lineTo(_x + 50, _y - 8);
            Aufgabe10.crc2.lineTo(_x + 50, _y - 35);
            Aufgabe10.crc2.lineTo(_x + 30, _y - 12);
            Aufgabe10.crc2.lineTo(_x, _y - 25);
            Aufgabe10.crc2.closePath();
            Aufgabe10.crc2.fill();
            Aufgabe10.crc2.stroke();
        }
    }
    Aufgabe10.Background = Background;
})(Aufgabe10 || (Aufgabe10 = {}));
//# sourceMappingURL=Background.js.map