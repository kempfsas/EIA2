namespace L08_Canvas {
    window.addEventListener("load", init);
    let crc2: CanvasRenderingContext2D;
    let ctx: CanvasRenderingContext2D;

    function init(_event: Event): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        ctx = canvas.getContext("2d");
        console.log(crc2);

        //crc2.fillStyle = "rgba(255,0,0,0.5)";
        //crc2.fillRect(50, 50, 100, 50);

        //drawDavidStar(300, 100);
        //drawDavidStar(100, 200);
        //Hintergrund zeichnen lassen
         drawBackground( 260 );
        
        //Boden zeichnen lassen
        drawBottomLine();
        
        //Schatzkiste zeichnen lassen
        drawChestCover(235, 415);
        drawChestBottom(215, 460, 63, 50);
        
        //Seestern zeichnen lassen
        drawStarfish(120, 550);
        
        //Seegras zeichnen lassen
        drawSeeweed(30, 430);
        

       /* for (let i: number = 0; i < 100; i++) {
            let x: number = Math.random() * crc2.canvas.width;
            let y: number = Math.random() * crc2.canvas.height;
            //drawDavidStar(x, y);
            //drawBubbles(x,y);
        }
    } */
    
        
    //Math.random für Luftblasen
    for ( let i: number = 0; i < 10; i++ ) {
            let x: number = Math.random() * crc2.canvas.width;
            let y: number = Math.random() * crc2.canvas.height;

            drawBubbles(x, y, 10);
}
      
     //Math.random für Fische
     for ( let i: number = 0; i < 4; i++ ) {
            let x: number = Math.random() * crc2.canvas.width;
            let y: number = Math.random() * crc2.canvas.height;

            drawFish1(x, y);
}
        
      for ( let i: number = 0; i < 3; i++ ) {
            let x: number = Math.random() * crc2.canvas.width;
            let y: number = Math.random() * crc2.canvas.height;

            drawFish2(x, y);
}
        
      for ( let i: number = 0; i < 2; i++ ) {
            let x: number = Math.random() * crc2.canvas.width;
            let y: number = Math.random() * crc2.canvas.height;

            drawFish3(x, y);
}
        
       for ( let i: number = 0; i < 3; i++ ) {
            let x: number = Math.random() * crc2.canvas.width;
            let y: number = Math.random() * crc2.canvas.height;

            drawFish4(x, y);
}
        
}
    
    //Funktionen
    
    //Funktion für Hintergrund
    function drawBackground( _sandHeight: number ): void {

        crc2.fillStyle = "rgb(77, 121, 255)";
        crc2.fillRect( 0, 0, crc2.canvas.width, crc2.canvas.height );

}
    
    //Funktion für Boden
    function drawBottomLine(): void {
        crc2.beginPath();
        crc2.fillStyle = "rgb(179, 134, 0)";
        crc2.moveTo(0, 625);
        crc2.quadraticCurveTo(30, 650, 500, 600);
        crc2.quadraticCurveTo(675, 600, 1000, 650);
        crc2.quadraticCurveTo(1000, 800, 1000, 800);
        crc2.quadraticCurveTo(1000, 800, 0, 800);
        crc2.quadraticCurveTo(0, 675, 0, 675);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
    }
    //Funktionen für Schatzkiste
    function drawChestCover(_x: number, _y: number): void {
        ctx.beginPath();
        crc2.fillStyle = "rgb(102, 51, 0)";
        ctx.moveTo(_x,_y);
        ctx.bezierCurveTo(_x +60, _y -20, _x +60, _y +40, _x +40, _y +50)
        ctx.stroke();
        crc2.fill();
        //crc2.lineTo(_x + 140, _y);
        crc2.closePath();
        }
    
    function drawChestBottom(_x: number, _y: number, _width: number, _height: number): void {
        //crc2.stroke();
        ctx.beginPath();
        crc2.fillStyle = "rgb(102, 51, 0)";
        crc2.moveTo(_x, _y + 200);
        crc2.fillRect( _x, _y, _width, _height );
        }
    
        
    //Funktion für Luftblasen
    function drawBubbles(_x: number, _y: number, _radius: number): void {
        ctx.beginPath();
        crc2.fillStyle = "rgb(230, 255, 247)";
        ctx.arc(_x, _y, _radius,0,2*Math.PI);
        //crc2.closePath();
        //crc2.stroke();
        crc2.fill();
        }
    
    //Funktionen für Fische
    function drawFish1(_x: number, _y: number): void {
        ctx.beginPath();
        crc2.fillStyle = "rgb(255, 102, 0)";
        ctx.moveTo(_x, _y);
        ctx.bezierCurveTo(_x +30, _y, _x +30, _y +20, _x, _y +20); //vorderer Teil Fisch
        crc2.moveTo(_x, _y +20);
        crc2.lineTo(_x -20, _y +10); //Schwanzflosse
        crc2.lineTo(_x -25, _y +15); //Schwanzflosse
        crc2.lineTo(_x -25, _y);
        crc2.lineTo(_x -20, _y +5); //hinterer Teil Fisch
        crc2.lineTo(_x, _y);
        ctx.stroke();
        ctx.fill();
        crc2.closePath();
        }
    
    function drawFish2(_x: number, _y: number): void {
        ctx.beginPath();
        crc2.fillStyle = "rgb(255, 51, 51)";
        ctx.moveTo(_x, _y);
        ctx.bezierCurveTo(_x -35, _y, _x -35, _y -25, _x, _y -25); //vorderer Teil Fisch
        crc2.moveTo(_x, _y -25);
        crc2.lineTo(_x +25, _y -15); //Schwanzflosse
        crc2.lineTo(_x +30, _y -20); //Schwanzflosse
        crc2.lineTo(_x +30, _y);
        crc2.lineTo(_x +25, _y -10); //hinterer Teil Fisch
        crc2.lineTo(_x, _y);
        ctx.stroke();
        ctx.fill();
        crc2.closePath();
        }
    
     function drawFish3(_x: number, _y: number): void {
        ctx.beginPath();
        crc2.fillStyle = "rgb(255, 204, 0)";
        ctx.moveTo(_x, _y);
        ctx.bezierCurveTo(_x +40, _y, _x +40, _y +30, _x, _y +30); //vorderer Teil Fisch
        crc2.moveTo(_x, _y +30);
        crc2.lineTo(_x -30, _y +20); //Schwanzflosse
        crc2.lineTo(_x -35, _y +25); //Schwanzflosse
        crc2.lineTo(_x -35, _y);
        crc2.lineTo(_x -30, _y +15); //hinterer Teil Fisch
        crc2.lineTo(_x, _y);
        ctx.stroke();
        ctx.fill();
        crc2.closePath();
        }
        
      function drawFish4(_x: number, _y: number): void {
        ctx.beginPath();
        crc2.fillStyle = "rgb(0, 179, 0)";
        ctx.moveTo(_x, _y);
        ctx.bezierCurveTo(_x -30, _y, _x -30, _y -20, _x, _y -20); //vorderer Teil Fisch
        crc2.moveTo(_x, _y -20);
        crc2.lineTo(_x +20, _y -10); //Schwanzflosse
        crc2.lineTo(_x +25, _y -15); //Schwanzflosse
        crc2.lineTo(_x +25, _y);
        crc2.lineTo(_x +20, _y -5); //hinterer Teil Fisch
        crc2.lineTo(_x, _y);
        ctx.stroke();
        ctx.fill();
        crc2.closePath();
        }
    
    //Funktion für Seestern
      function drawStarfish(_x: number, _y: number ): void {
        crc2.beginPath();
        crc2.fillStyle = "rgb(255, 165, 0)";    
        crc2.moveTo(_x, _y - 25);
        crc2.lineTo(_x + 25, _y + 15);
        crc2.lineTo(_x - 25, _y + 15);
        crc2.closePath();
            
        crc2.moveTo(_x, _y + 25);
        crc2.lineTo(_x + 25, _y - 15);
        crc2.lineTo(_x - 25, _y - 15);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
}
    
    //Funktion für Seegras
      function drawSeeweed(_x: number, _y: number ): void {
        crc2.beginPath();
        crc2.fillStyle = "rgb(34,139,34)";
        crc2.moveTo( _x, _y);
        crc2.lineTo( _x + 10, _y - 100 );
        crc2.lineTo( _x + 15, _y );
        crc2.lineTo( _x + 20, _y - 60 );
        crc2.lineTo( _x + 25, _y);
        crc2.closePath();
        ctx.stroke();
        crc2.fill();   
        }
    
}