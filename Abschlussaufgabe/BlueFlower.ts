namespace Abschlussaufgabe {

    export class BlueFlower extends MainFlower {

        constructor() {
            super();
            this.setColor();
            this.checkPosition();
            this.setRandomPosition();
            this.blossoms = 1;
           // this.draw();
        }
        
        setColor(): void {
            this.color = "blue";
        }
        

    }
}