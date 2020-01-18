var matrix = [];
var m = 10;
var n = 10;
var side = 50 ;
var grassArr = [];
var grassEater = [];  
var gishatich = [];
var predator = [];
var predator2 = [];

function setup() {
   frameRate(5);
   
   background('#acacac')

    
for(var i = 0; i < m; i++){
    matrix[i] = [];
    for(var a = 0; a < n; a++){
      matrix[i][a] = Math.floor(random([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,4,5]));
    }
   }
   for (var y = 0; y < matrix.length; y++) {
       for (var x = 0; x < matrix[y].length; x++){
        if(matrix[y][x] == 1){
          grassArr.push(new Grass(x,y,1));
        }
        else if(matrix[y][x] == 2){
          grassEater.push(new  GrassEater(x,y,2))
        }
          else if (matrix[y][x] == 3){
          gishatich.push(new Gishatich(x,y,3))
        }
         else if (matrix[y][x] == 4){
          predator.push(new Predator(x,y,4))
        }
        else if (matrix[y][x] == 5){
          predator2.push(new Predator2(x,y,5))
        }
       } 
       
    }
      console.log(grassArr);
      createCanvas(matrix[0].length * side, matrix.length * side);
      console.log(grassEater);


}

function draw() {

   for (var y = 0; y < matrix.length; y++) {
       for (var x = 0; x < matrix[y].length; x++) {

           if (matrix[y][x] == 1) {
               fill("green");
               rect(x * side, y * side, side, side);
           }
           if (matrix[y][x] == 0) {
               fill("grey");
               rect(x * side, y * side, side, side);
           }
           else if (matrix[y][x] == 2) {
               fill("yellow");
               rect(x * side, y * side, side, side);
           }
           else if (matrix[y][x] == 3){
            fill("red");
            rect(x * side, y * side, side, side);
           }
            else if (matrix[y][x] == 4){
            fill("purple");
            rect(x * side, y * side, side, side);
           }
            else if (matrix[y][x] == 5){
            fill("black");
            rect(x * side, y * side, side, side);
           }
       }
   }

   for(var i in grassArr){
       grassArr[i].mul();
   }

    for(var i in grassEater){
     grassEater[i].move();
     grassEater[i].eat();
     grassEater[i].mul();
     grassEater[i].die();

    }

   for(var i in gishatich){
    gishatich[i].move();
    gishatich[i].eat();
    gishatich[i].mul();
    gishatich[i].die();
   }

   for(var i in predator){
    predator[i].move();
    predator[i].eat();
    predator[i].eat2();
    predator[i].eat3();
    predator[i].mul();
    predator[i].die();
   }

    for(var i in predator2){
    predator2[i].move();
    predator2[i].eat();
    predator2[i].eat1();
    predator2[i].eat2();
    predator2[i].mul();
    predator2[i].mul2();
    predator2[i].die();
    predator2[i].die2();
   }
}


