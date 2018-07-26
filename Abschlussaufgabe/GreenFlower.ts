namespace Abschlussaufgabe {

    export class GreenFlower extends MainFlower {

        constructor() {
            super();
            this.setColor();
            this.checkPosition();
            this.setRandomPosition();
            this.blossoms = -3;
           // this.draw();
        }
        
        setColor(): void {
            this.color = "green";
        }
        

    }
}