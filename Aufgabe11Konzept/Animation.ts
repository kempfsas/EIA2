namespace L11_Inheritance {
    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;
    let stars: DavidStar[] = [];
    let n: number = 50;

    //let rects: Rect[] = [];

    function init(_event: Event): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        console.log(crc2);

        canvas.addEventListener("click", insertNewObject);
        canvas.addEventListener("mousedown", getPosition, false);

        for (let i: number = 0; i < n; i++) {
            let star: DavidStar = new DavidStar("#00ffff");
            stars.push(star);

            let rect: Rect = new Rect("#ff0000");
            stars.push(rect);
            
            let circles: Circle = new Circle("#00ff00");
            stars.push(circles);
            
            let triangles: Triangle = new Triangle("#0000ff");
            stars.push(triangles);
        }
        


        animate();
    }

    function insertNewObject(_event: Event): void {
        let star: DavidStar = new DavidStar("#ffff00");
        stars.push(star);
        
        /*let circles: Circle = new Circle("#800000");
        stars.push(circles);*/
    }
    
    function getPosition (_event: Event): void {
        let circles: Circle = new Circle("#800000");
        stars.push(circles);

        var x = this.circles.x;
        var y = this.circles.y;
        var radius = this.circles.radius;

        var canvas = document.getElementById("canvas");
        
        x -= canvas.offsetLeft;
        y -= canvas.offsetTop;

        
        }

    function animate(): void {
        window.setTimeout(animate, 10);

        crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);

        moveObjects();
        drawObjects();
    }

    function moveObjects(): void {
        for (let i: number = 0; i < stars.length; i++) {
            stars[i].move();
        }
    }

    function drawObjects(): void {
        for (let i: number = 0; i < stars.length; i++) {
            stars[i].draw();
        }
    }
}