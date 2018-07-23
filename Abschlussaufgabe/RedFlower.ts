namespace Abschlussaufgabe {

    export class RedFlower extends MainFlower {

        constructor() {
            super();
            this.setColor();
            this.setRandomPosition();
            this.points = 2;
           // this.draw();
        }
        
        setColor(): void {
            this.color = "red";
        }
        

    }
}