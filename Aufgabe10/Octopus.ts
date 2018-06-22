namespace Aufgabe10 {

    export class Octopus {
        x: number;
        y: number;

        move(): void {

            this.x += 2;
            this.y -= 0;
        }

        drawOctopus(): void {
            crc2.beginPath();
            crc2.fillStyle = "rgb(166, 77, 255)";
            crc2.moveTo(400, 130);
            crc2.bezierCurveTo(330, 130, 230, 170, 247, 280);
            crc2.quadraticCurveTo(255, 350, 320, 400);
            crc2.bezierCurveTo(200, 400, 195, 555, 150, 450);
            crc2.bezierCurveTo(175, 575, 240, 425, 335, 425);
            crc2.bezierCurveTo(245, 535, 320, 470, 225, 520);
            crc2.bezierCurveTo(280, 560, 330, 490, 355, 435);
            crc2.bezierCurveTo(370, 455, 360, 495, 300, 540);
            crc2.bezierCurveTo(375, 555, 405, 425, 395, 440);
            crc2.bezierCurveTo(420, 490, 415, 475, 380, 560);
            crc2.bezierCurveTo(460, 480, 440, 480, 430, 435);
            crc2.bezierCurveTo(480, 450, 450, 570, 450, 580);
            crc2.bezierCurveTo(490, 500, 485, 500, 475, 435);
            crc2.bezierCurveTo(510, 500, 490, 550, 515, 560);
            crc2.bezierCurveTo(515, 500, 520, 460, 510, 430);
            crc2.bezierCurveTo(575, 525, 510, 525, 540, 575);
            crc2.bezierCurveTo(575, 525, 575, 540, 545, 430);
            crc2.bezierCurveTo(675, 550, 630, 440, 700, 440);
            crc2.bezierCurveTo(640, 400, 650, 515, 575, 410);
            crc2.quadraticCurveTo(630, 375, 620, 270);
            crc2.bezierCurveTo(590, 130, 440, 130, 400, 130);
            crc2.fill();
          //crc2.scale(2,2);
            crc2.closePath  
            //crc2.setTransform(2,0,0,1,0,0);
            crc2.stroke();
   
               
            //eyes
            crc2.beginPath();
            crc2.arc(340, 225, 25, 0, 2 * Math.PI, false);
            crc2.fillStyle = 'rgb(255, 255 ,255)';
            crc2.fill();
            crc2.stroke();
            crc2.closePath();

            crc2.beginPath();
            crc2.arc(500, 225, 25, 0, 2 * Math.PI, false);
            crc2.fill();
            crc2.stroke();
            crc2.closePath();

            crc2.beginPath();
            crc2.arc(340, 235, 15, 0, 2 * Math.PI, true);
            crc2.fillStyle = 'rgb(1, 1, 1)';
            crc2.fill();
            crc2.stroke();
            crc2.closePath();

            crc2.beginPath();
            crc2.arc(500, 235, 15, 0, 2 * Math.PI, true);
            crc2.fill();
            crc2.stroke();
            crc2.closePath();

            //mouth
            crc2.beginPath();
            crc2.arc(430, 345, 25, 0, 2 * Math.PI, false);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
            /*crc2.beginPath();
            crc2.arc(460, 300, 90, 0, Math.PI / 2, false);
            crc2.lineWidth = 6;
            crc2.lineCap = 'round';
            crc2.stroke();
            crc2.closePath();*/
        }




    }

}