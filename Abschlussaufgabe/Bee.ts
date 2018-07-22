namespace Abschlussaufgabe {
    
    export class Bee {
        x: number;
        y: number;
        radius: number;
        
        constructor() {
            this.x = 100;
            this.y = 100;
            }
        
       move(): void {}
        
        draw(): void {
            //Kopf
            /*crc2.beginPath();
            crc2.fillStyle = "yellow";
            crc2.moveTo(this.x, this.y);
            crc2.arc(this.x, this.y-10, 10, 0,2*Math.PI);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
            crc2.closePath();*/
            
            //Körper
            crc2.beginPath();
            crc2.fillStyle = "yellow";
            //crc2.lineWidth = 5;
            crc2.moveTo(this.x, this.y);
            crc2.arc( this.x, this.y, 15, 0,2*Math.PI);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
            crc2.closePath();
            
            //Streifen
            crc2.beginPath();
            crc2.moveTo(90, 88); //erster Streifen
            crc2.lineTo(90, 112);
            crc2.moveTo(100,85); //zweiter Streifen
            crc2.lineTo(100, 115);
            crc2.moveTo(110, 88); //dritter Streifen
            crc2.lineTo(110, 112);
            crc2.lineWidth = 4; //Dicke der Streifen
            crc2.closePath();
            crc2.stroke();
            
            //Flügel
            
            crc2.beginPath();
            crc2.fillStyle ="lightblue";
            crc2.moveTo(100,85);
            
            crc2.quadraticCurveTo(110, 60, 130, 65);
            crc2.quadraticCurveTo(130, 100, 100, 85);
            crc2.quadraticCurveTo(90, 60, 70, 65);
            crc2.quadraticCurveTo(70, 100, 100, 85);
            
            /*crc2.quadraticCurveTo(110, 120, 130, 125);
            crc2.quadraticCurveTo(130, 105, 100, 85); 
            crc2.quadraticCurveTo(90, 120, 70, 125); 
            crc2.quadraticCurveTo(70, 105, 100, 85);*/
            
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
            
            

            
            }
        
    }

}