namespace Abschlussaufgabe {

    export class GreenFlower extends MainFlower {

        constructor() {
            super();
            this.setColor();
            this.setRandomPosition();
            this.score = -3;
           // this.draw();
        }
        
        setColor(): void {
            this.color = "green";
        }
        

    }
}