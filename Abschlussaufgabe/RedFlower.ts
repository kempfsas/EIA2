namespace Abschlussaufgabe {

    export class RedFlower extends MainFlower {

        constructor() {
            super();
            this.setColor();
           // this.draw();
        }
        
        setColor(): void {
            this.color = "red";
        }
        

    }
}