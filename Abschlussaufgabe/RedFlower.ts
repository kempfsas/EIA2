namespace Abschlussaufgabe {

    export class RedFlower extends MainFlower {

        constructor() {
            super();
            this.setColor();
            this.checkPosition();
            this.setRandomPosition();
            this.blossoms = 2;
           // this.draw();
        }
        
        setColor(): void {
            this.color = "red";
        }
        

    }
}