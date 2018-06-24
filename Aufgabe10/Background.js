var Aufgabe10;
(function (Aufgabe10) {
    class Background {
        screen() {
            this.drawBackground(260);
            this.drawWave();
            this.drawBottomLine();
            this.drawStone(0, 625);
            this.drawChestCover(750, 575);
            this.drawChestBottom(700, 615, 90, 65);
            //this.drawStarfish(550, 750);
            //this.drawStarfish(325, 675);
            this.drawSeaweed(30, 645);
            this.drawSeaweed(55, 650);
            this.drawSeaweed(80, 645);
            this.drawSeaweed(945, 680);
            this.drawSeaweed(975, 700);
            this.drawSeaweed(955, 725);
            this.drawSeaweed(910, 700);
            this.drawSeaweed(930, 715);
            this.drawOctopus();
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
        drawOctopus() {
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.fillStyle = "rgb(166, 77, 255)";
            Aufgabe10.crc2.moveTo(400, 130);
            Aufgabe10.crc2.bezierCurveTo(330, 130, 230, 170, 247, 280);
            Aufgabe10.crc2.quadraticCurveTo(255, 350, 320, 400);
            Aufgabe10.crc2.bezierCurveTo(200, 400, 195, 555, 150, 450);
            Aufgabe10.crc2.bezierCurveTo(175, 575, 240, 425, 335, 425);
            Aufgabe10.crc2.bezierCurveTo(245, 535, 320, 470, 225, 520);
            Aufgabe10.crc2.bezierCurveTo(280, 560, 330, 490, 355, 435);
            Aufgabe10.crc2.bezierCurveTo(370, 455, 360, 495, 300, 540);
            Aufgabe10.crc2.bezierCurveTo(375, 555, 405, 425, 395, 440);
            Aufgabe10.crc2.bezierCurveTo(420, 490, 415, 475, 380, 560);
            Aufgabe10.crc2.bezierCurveTo(460, 480, 440, 480, 430, 435);
            Aufgabe10.crc2.bezierCurveTo(480, 450, 450, 570, 450, 580);
            Aufgabe10.crc2.bezierCurveTo(490, 500, 485, 500, 475, 435);
            Aufgabe10.crc2.bezierCurveTo(510, 500, 490, 550, 515, 560);
            Aufgabe10.crc2.bezierCurveTo(515, 500, 520, 460, 510, 430);
            Aufgabe10.crc2.bezierCurveTo(575, 525, 510, 525, 540, 575);
            Aufgabe10.crc2.bezierCurveTo(575, 525, 575, 540, 545, 430);
            Aufgabe10.crc2.bezierCurveTo(675, 550, 630, 440, 700, 440);
            Aufgabe10.crc2.bezierCurveTo(640, 400, 650, 515, 575, 410);
            Aufgabe10.crc2.quadraticCurveTo(630, 375, 620, 270);
            Aufgabe10.crc2.bezierCurveTo(590, 130, 440, 130, 400, 130);
            Aufgabe10.crc2.closePath();
            Aufgabe10.crc2.fill();
            //crc2.scale(2,2);
            //crc2.setTransform(2,0,0,1,0,0);
            Aufgabe10.crc2.stroke();
            //eyes
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.arc(340, 225, 25, 0, 2 * Math.PI, false);
            Aufgabe10.crc2.fillStyle = 'rgb(255, 255 ,255)';
            Aufgabe10.crc2.closePath();
            Aufgabe10.crc2.fill();
            Aufgabe10.crc2.stroke();
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.arc(500, 225, 25, 0, 2 * Math.PI, false);
            Aufgabe10.crc2.closePath();
            Aufgabe10.crc2.fill();
            Aufgabe10.crc2.stroke();
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.arc(340, 235, 15, 0, 2 * Math.PI, true);
            Aufgabe10.crc2.fillStyle = 'rgb(1, 1, 1)';
            Aufgabe10.crc2.closePath();
            Aufgabe10.crc2.fill();
            Aufgabe10.crc2.stroke();
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.arc(500, 235, 15, 0, 2 * Math.PI, true);
            Aufgabe10.crc2.closePath();
            Aufgabe10.crc2.fill();
            Aufgabe10.crc2.stroke();
            //mouth
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.arc(430, 345, 25, 0, 2 * Math.PI, false);
            Aufgabe10.crc2.closePath();
            Aufgabe10.crc2.fill();
            Aufgabe10.crc2.stroke();
            /*crc2.beginPath();
            crc2.arc(460, 300, 90, 0, Math.PI / 2, false);
            crc2.lineWidth = 6;
            crc2.lineCap = 'round';
            //crc2.stroke();
            crc2.closePath();*/
        }
    }
    Aufgabe10.Background = Background;
})(Aufgabe10 || (Aufgabe10 = {}));
//# sourceMappingURL=Background.js.map