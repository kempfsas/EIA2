namespace Abschlussaufgabe {

    export class RedFlower extends MainFlower {

        constructor() {
            super();
            this.setColor();
            this.setRandomPosition();
            this.score = 2;
           // this.draw();
        }
        
        setColor(): void {
            this.color = "red";
        }
        

    }
}