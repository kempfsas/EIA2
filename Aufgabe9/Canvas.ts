namespace L08_Canvas {
    window.addEventListener("load", init);
    let crc2: CanvasRenderingContext2D;
    let ctx: CanvasRenderingContext2D;
    let width: number;
    let height: number;
    

    function init(_event: Event): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        ctx = canvas.getContext("2d");
        console.log(crc2);
        
            width = canvas.width;
            height = canvas.height;

        //crc2.fillStyle = "rgba(255,0,0,0.5)";
        //crc2.fillRect(50, 50, 100, 50);

        //drawDavidStar(300, 100);
        //drawDavidStar(100, 200);
        //Hintergrund zeichnen lassen
         drawBackground( 260 );
        
         drawWave();
        
        
        
        //Boden zeichnen lassen
        drawBottomLine();
        
        //Schatzkiste zeichnen lassen
        drawChestCover(750, 575);
        drawChestBottom(700, 615, 90, 65);
        
        //Seestern zeichnen lassen
        drawStarfish(550, 750);
        drawStarfish(325, 675);
        
        //drawTurtle(300, 400,30);
        
        //Steine zeichnen lassen
        drawStones(0, 625);
        
        //Seegras zeichnen lassen
        drawSeaweed(30, 645);
        drawSeaweed(55, 650);
        drawSeaweed(80, 645);
        
        drawSeaweed(945, 680);
        drawSeaweed(975, 700);
        drawSeaweed(955, 725);
        drawSeaweed(910, 700);
        drawSeaweed(930, 715);
     
        

    //Math.random für Luftblasen
    for ( let i: number = 0; i < 10; i++ ) {
            let x: number = (740);
            let y: number = Math.random() * 625;
            
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
      
        //drawOctopus();
}
    
    //Funktionen
    
    //Funktion für Hintergrund
    function drawBackground( _sandHeight: number ): void {

        crc2.fillStyle = "rgb(77, 121, 255)";
        crc2.fillRect( 0, 0, crc2.canvas.width, crc2.canvas.height );

}
    
    //Funktion für Welle
    function drawWave(): void {
        crc2.beginPath();
        crc2.moveTo(0, 50);
        crc2.quadraticCurveTo(350, 200, 1000, 200);
        crc2.lineTo(1000,150);
        crc2.quadraticCurveTo(550, 150, 400, 0);
        crc2.lineTo(0, 0);
        crc2.lineTo(0, 50);
        crc2.fillStyle = "rgb(128, 159, 255)";/*'rgb(169, 215, 245)'*/;
        crc2.fill();
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
        ctx.bezierCurveTo(_x +80, _y -40, _x +80, _y +60, _x +60, _y +70)
        crc2.fill();
        //crc2.lineTo(_x + 140, _y);
        crc2.closePath();
        ctx.stroke();
        }
    
    function drawChestBottom(_x: number, _y: number, _width: number, _height: number): void {
        //crc2.stroke();
        ctx.beginPath();
        crc2.fillStyle = "rgb(102, 51, 0)";
        crc2.moveTo(_x + 40, _y);
        crc2.fillRect( _x + 25, _y + 25, _width, _height );
        crc2.closePath();
        crc2.stroke();
        }
    
        
    //Funktion für Luftblasen
    function drawBubbles(_x: number, _y: number, _radius: number): void {
        ctx.beginPath();
        crc2.fillStyle = "rgb(230, 255, 247)";
        ctx.arc(_x, _y, _radius,0,2*Math.PI);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
        }
    
    //Funktion für Schildkröte
   /* function drawTurtle(_x: number, _y: number, _radius: number): void {
        ctx.beginPath();
        crc2.fillStyle = "rgb(230, 255, 247)";
        ctx.arc(_x+10, _y+5, _radius,0,2*Math.PI);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
     
    }*/
    
    
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
        crc2.stroke();
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
        crc2.fillStyle = "rgb(255, 51, 255)"; 
        crc2.moveTo(_x, _y -25);
        crc2.lineTo(_x + 20, _y);
        crc2.lineTo(_x -5, _y +25);   
        crc2.lineTo(_x +30, _y + 18);
        crc2.lineTo(_x +50, _y + 40);
        crc2.lineTo(_x + 50, _y+12);
        crc2.lineTo(_x +80, _y - 5);
        crc2.lineTo(_x + 50, _y -8);
        crc2.lineTo(_x +50, _y -35);
        crc2.lineTo(_x + 30, _y -12);
        crc2.lineTo(_x, _y-25);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
}

    
    //Funktion für Seegras
      function drawSeaweed(_x: number, _y: number ): void {
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

    
    
    //Funktion für Steine
      function drawStones(_x : number, _y: number): void {
        crc2.beginPath();
        crc2.fillStyle = "rgb(140, 140, 140)";
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x, _y - 40);
        crc2.lineTo(_x + 30, _y -50);
        crc2.lineTo(_x + 50, _y -70);
        crc2.lineTo(_x + 70, _y -80);
        crc2.lineTo(_x +100, _y -80);
        crc2.lineTo(_x +120, _y -100);
        crc2.lineTo(_x + 150, _y -110);
        crc2.lineTo(_x + 200, _y -90);
        crc2.lineTo(_x +200, _y -60);
        crc2.lineTo(_x +250, _y - 30);
        crc2.lineTo(_x +300, _y -20);
        crc2.lineTo(_x +325, _y +10);
        crc2.lineTo(_x +175, _y +20);
        crc2.lineTo(_x, _y + 15);
        crc2.lineTo(_x, _y);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
      }
    
    
    
//octopus outline
    function drawOctopus (): void {
        crc2.beginPath();
        crc2.fillStyle = "rgb(166, 77, 255)";
        crc2.moveTo(400, 90);
        crc2.bezierCurveTo(350, 90, 220, 150, 200, 250);
        crc2.quadraticCurveTo(175, 330, 250, 400);
        crc2.bezierCurveTo(200, 400, 195, 555, 125, 450);
        crc2.bezierCurveTo(175, 600, 240, 425, 252, 415);
        crc2.bezierCurveTo(245, 475, 280, 465, 200, 550);
        crc2.bezierCurveTo(280, 550, 250, 460, 295, 440);
        crc2.bezierCurveTo(290, 465, 330, 495, 275, 550);
        crc2.bezierCurveTo(375, 475, 300, 425, 350, 445);
        crc2.bezierCurveTo(400, 480, 330, 475, 350, 550);
        crc2.bezierCurveTo(405, 475, 365, 455, 370, 450);
        crc2.bezierCurveTo(440, 450, 400, 570, 415, 570);
        crc2.bezierCurveTo(450, 500, 405, 450, 425, 450);
        crc2.bezierCurveTo(445, 500, 440, 550, 490, 560);
        crc2.bezierCurveTo(460, 500, 430, 450, 445, 450);
        crc2.bezierCurveTo(520, 525, 460, 525, 525, 575);
        crc2.bezierCurveTo(475, 525, 545, 525, 480, 440);
        crc2.bezierCurveTo(590, 580, 580, 475, 600, 450);
        crc2.bezierCurveTo(560, 465, 580, 540, 500, 425);
        crc2.quadraticCurveTo(610, 375, 590, 250);
        crc2.bezierCurveTo(540, 110, 440, 93, 400, 90);
        crc2.fill();
        //crc2.setTransform(2,0,0,1,0,0);
        crc2.stroke();
        //crc2.scale(2,2);
        crc2.closePath();
        
        //eyes
        crc2.beginPath();
        crc2.arc(300, 225, 25, 0, 2 * Math.PI, false);
        crc2.fillStyle = 'rgb(255, 255 ,255)';
        crc2.fill();
        crc2.stroke();
        crc2.closePath();

        crc2.beginPath();
        crc2.arc(500, 225, 25, 0, 2 * Math.PI, false);
        crc2.fill();
        crc2.stroke();
        crc2.closePath();
        
        crc2.beginPath();
        crc2.arc(300, 235, 15, 0, 2 * Math.PI, true);
        crc2.fillStyle = 'rgb(1, 1, 1)';
        crc2.fill();
        crc2.stroke();
        crc2.closePath();
        
        crc2.beginPath();
        crc2.arc(500, 235, 15, 0, 2 * Math.PI, true);
        crc2.fill();
        crc2.stroke();
        crc2.closePath();
        
        //mouth
        crc2.beginPath();
        crc2.arc(420, 300, 100, 0, Math.PI/2, false);
        crc2.lineWidth = 5;
        crc2.lineCap = 'round';
        crc2.stroke();
        crc2.closePath();
         }       
        
}