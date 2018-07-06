namespace Abschlussaufgabe {

    export function hintergrund(): void {

        background();


    }

    function background(): void {

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, "#97b065");
        gradient.addColorStop(1, "#6b8e23");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, 1000, 700);

    }
}