namespace Aufgabe11 {

    export class MovingObject {
        x: number;
        y: number;
        r: number;
        b: number;
        g: number;
        radius: number;
        color: string;

        constructor(_color: string) {
            this.setRandomPosition();
            this.color = _color;
            }
            
        setRandomPosition(): void {
            /*this.x = Math.random() * crc2.canvas.width;
            this.y = Math.random() * crc2.canvas.height;*/
            /*this.r = Math.random() * 600;
            this.g = Math.random() * 100;
            this.b = Math.random() * 200;*/
        }
        
        move(): void {
            }
        
        draw(): void {
            }
        
    }
}