class GrassEater extends LivingCreature {
    constructor(x, y, index){
        super(x, y, index);
        this.energy = 8;
    }
   getNewCoordinates() {
       this.directions = [
           [this.x - 1, this.y - 1],
           [this.x, this.y - 1],
           [this.x + 1, this.y - 1],
           [this.x - 1, this.y],
           [this.x + 1, this.y],
           [this.x - 1, this.y + 1],
           [this.x, this.y + 1],
           [this.x + 1, this.y + 1]
       ];
   }
   chooseCell(character) {
       this.getNewCoordinates();
       return super.chooseCell(character);
   }
   move() {
       
    var emptyCells = this.chooseCell(0);
    var newCell = random(emptyCells);

    if(newCell){
        var newX = newCell[0];
        var newY = newCell[1];             
        matrix[this.y][this.x] = 0;
        matrix[newY][newX] = this.index;
        this.x = newX;
        this.y = newY;
        this.energy--;
    }
}
eat() {
    var emptyCells = this.chooseCell(1);
    var grass = random(emptyCells);

    if (grass) {
        var newX = grass[0];
        var newY = grass[1];
        matrix[newY][newX] = this.index;
        matrix[this.y][this.x] = 0;
        
        for (var i in grassArr) {
            if (newX == grassArr[i].x && newY == grassArr[i].y) {
                grassArr.splice(i,1);
                break;
            }
        }
        this.x = newX; 
        this.y = newY;
        this.energy+=2;
    }
}
mul() {
        
        this.multiply++;
        var newCell = random(this.chooseCell(0));
        if (this.energy >= 5 && newCell) {
        var newGrassEater = new GrassEater(newCell[0], newCell[1], this.index);
        grassEater.push(newGrassEater);
        matrix[newCell[1]][newCell[0]] = this.index;
        this.multiply = 0;
    }
}

die(){
    
    if(this.energy <= 0){
        matrix[this.y][this.x] = 0;
        for (var i in grassEater) {
            if (this.x == grassEater[i].x && this.y == grassEater[i].y) {
                grassEater.splice(i, 1);
                break;
            }
        }
    }
}
}
