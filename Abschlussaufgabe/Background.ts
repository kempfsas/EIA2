namespace Abschlussaufgabe {

    export function hintergrund(): void {

        background();
        gameName();


    }

    function background(): void {

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, 450);
        gradient.addColorStop(0, "#a9c9e9");
        //gradient.addColorStop(1, "#97b065");
        gradient.addColorStop(1, "#6b8e23");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, 1000, 700);

    }
    
     function gameName(): void {
        crc2.font = "150px Indie Flower";
        crc2.fillStyle = "#6b8e23";//"#97b065";
        crc2.fillText("Busy Bee", 120, 300);
        }
    
}