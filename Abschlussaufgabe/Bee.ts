namespace Abschlussaufgabe {

    export class Bee {
        x: number;
        y: number;
        radius: number;
        flower: MainFlower;
        
        beeAreaOne: number = 30;
        beeAreaTwo: number = 30;

        constructor() {
            this.x = 100;
            this.y = 100;
        }
        

        move(): void { }

        moveLeft(): void {
            if (this.x > 0) {
                this.x -= 10;
            }
        }

        moveRight(): void {
            if (this.x < crc2.canvas.width) {
                this.x += 10;
            }
        }

        moveUp(): void {
            if (this.y > 0) {
                this.y -= 10;
            }
        }

        moveDown(): void {
            if (this.y < crc2.canvas.height) {
                this.y += 10;
            }
        }

        draw(): void {

            //Körper
            crc2.beginPath();
            crc2.fillStyle = "yellow";
            crc2.moveTo(this.x, this.y);
            crc2.arc(this.x, this.y, 15, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();

            //Streifen
            crc2.beginPath();
            crc2.moveTo(this.x - 10, this.y - 12); //erster Streifen
            crc2.lineTo(this.x - 10, this.y + 12);
            crc2.moveTo(this.x, this.y - 15); //zweiter Streifen
            crc2.lineTo(this.x, this.y + 15);
            crc2.moveTo(this.x + 10, this.y - 12); //dritter Streifen
            crc2.lineTo(this.x + 10, this.y + 12);
            crc2.lineWidth = 4; //Dicke der Streifen
            crc2.closePath();
            crc2.stroke();

            //Flügel
            crc2.beginPath();
            crc2.fillStyle = "lightblue";
            crc2.moveTo(this.x, this.y - 15);

            crc2.quadraticCurveTo(this.x + 10, this.y - 40, this.x + 30, this.y - 35);
            crc2.quadraticCurveTo(this.x + 30, this.y, this.x, this.y - 15);
            crc2.quadraticCurveTo(this.x - 10, this.y - 40, this.x - 30, this.y - 35);
            crc2.quadraticCurveTo(this.x - 30, this.y, this.x, this.y - 15);

            /*crc2.quadraticCurveTo(110, 120, 130, 125);
            crc2.quadraticCurveTo(130, 105, 100, 85); 
            crc2.quadraticCurveTo(90, 120, 70, 125); 
            crc2.quadraticCurveTo(70, 105, 100, 85);*/

            crc2.closePath();
            crc2.stroke();
            crc2.fill();

        }
        
        collectedFlowers(_x: number, _y: number): boolean {
            if (_x > this.x && _x < ( this.x + this.beeAreaOne ) && _y > this.y && _y < this.y + this.beeAreaTwo ) {
                return true;
            }
            return false;
        }
        
        /*private collect(): void {
            let index: number = flowers.indexOf(this.flower);
            flowers.splice(index, 1);
            this.flower = null;
            }*/

    }

}