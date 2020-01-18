class Grass {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.multiply = 0;
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
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    mul() {
        this.multiply++;
        var newCell = random(this.chooseCell(0));
        if (this.multiply >= 4 && newCell) {
            var newGrass = new Grass(newCell[0], newCell[1], this.index);
            grassArr.push(newGrass);
            matrix[newCell[1]][newCell[0]] = 1;
            this.multiply = 0;
        }
    }
}


class GrassEater {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energy = 5;
        this.index = index;
        this.directions = [];
    }
    getNewCoordinates(){
        this.directions = [
         [this.x - 1, this.y - 1],
         [this.x    , this.y - 1],
         [this.x + 1, this.y - 1],
         [this.x - 1, this.y    ],
         [this.x + 1, this.y    ],
         [this.x - 1, this.y + 1],
         [this.x    , this.y + 1],
         [this.x + 1, this.y + 1]
        ];
     }

    chooseCell(character) {
       this.getNewCoordinates();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
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


class Gishatich{
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energy = 5;
        this.index = index;
        this.directions = [];
    }
    getNewCoordinates(){
        this.directions = [
         [this.x - 1, this.y - 1],
         [this.x    , this.y - 1],
         [this.x + 1, this.y - 1],
         [this.x - 1, this.y    ],
         [this.x + 1, this.y    ],
         [this.x - 1, this.y + 1],
         [this.x    , this.y + 1],
         [this.x + 1, this.y + 1]
        ];
     }

    chooseCell(character) {
       this.getNewCoordinates();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }

    move() {
       
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);
 
        if(newCell){
            var newX = newCell[0];
            var newY = newCell[1]; 
            matrix[newY][newX] = this.index;            
            matrix[this.y][this.x] = 0;
            this.x = newX;
            this.y = newY;
            this.energy--;
        }
    }

    eat() {
        var emptyCells = this.chooseCell(2);
        var grassEat = random(emptyCells);

        if ( grassEat) {
            var newX =  grassEat[0];
            var newY =  grassEat[1];
            matrix[newY][newX] = this.index;
            matrix[this.y][this.x] = 0;
            
            for (var i in grassEater) {
                if (newX == grassEater[i].x && newY == grassEater[i].y) {
                    grassEater.splice(i,1);
                    break;
                }
            }
            this.x = newX; 
            this.y = newY;
            this.energy+=2;
        }
    }
      mul() {
        var newCell = random(this.chooseCell(0));
        if (this.energy >= 10 && newCell) {
            var newGishatich = new Gishatich(newCell[0], newCell[1], this.index);
            gishatich.push(newGishatich);
            matrix[newCell[1]][newCell[0]] = this.index;
            this.energy = 5;
        }
    }
    die(){
        
        if(this.energy <= 0){
            matrix[this.y][this.x] = 0;
            for (var i in gishatich) {
                if (this.x == gishatich[i].x && this.y == gishatich[i].y) {
                    gishatich.splice(i, 1);
                    break;
                }
            }
        }
    }

}



class Predator{
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energy = 5;
        this.index = index;
        this.directions = [];
    }
    getNewCoordinates(){
        this.directions = [
         [this.x - 1, this.y - 1],
         [this.x    , this.y - 1],
         [this.x + 1, this.y - 1],
         [this.x - 1, this.y    ],
         [this.x + 1, this.y    ],
         [this.x - 1, this.y + 1],
         [this.x    , this.y + 1],
         [this.x + 1, this.y + 1],
         [this.x - 1, this.y - 2],
         [this.x    , this.y - 2],
         [this.x + 1, this.y - 2],
         [this.x - 1, this.y    ],
         [this.x + 1, this.y    ],
         [this.x - 1, this.y + 2],
         [this.x    , this.y + 2],
         [this.x + 1, this.y + 2],
         [this.x - 2, this.y - 1],
         [this.x    , this.y - 1],
         [this.x + 2, this.y - 1],
         [this.x - 2, this.y    ],
         [this.x + 2, this.y    ],
         [this.x - 2, this.y + 1],
         [this.x    , this.y + 1],
         [this.x + 2, this.y + 1],
         [this.x - 1, this.y - 3],
         [this.x    , this.y - 3],
         [this.x + 1, this.y - 3],
         [this.x - 1, this.y    ],
         [this.x + 1, this.y    ],
         [this.x - 1, this.y + 3],
         [this.x    , this.y + 3],
         [this.x + 1, this.y + 3],
         [this.x - 3, this.y - 1],
         [this.x    , this.y - 1],
         [this.x + 3, this.y - 1],
         [this.x - 3, this.y    ],
         [this.x + 3, this.y    ],
         [this.x - 3, this.y + 1],
         [this.x    , this.y + 1],
         [this.x + 3, this.y + 1],
        ];
     }

    chooseCell(character) {
       this.getNewCoordinates();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
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
            var newX =  grass[0];
            var newY =  grass[1];
            matrix[newY][newX] = this.index;
            matrix[this.y][this.x] = 0;
            
            for (var i in grassArr) {
                if (newX === grassArr[i].x && newY === grassArr[i].y) {
                    grassArr.splice(i,1);
                    break;
                }
            }
            this.x = newX; 
            this.y = newY;
            this.energy+=1;
        }
    }
     eat2() {
        var emptyCells = this.chooseCell(2);
        var grassEat = random(emptyCells);

        if (grassEat) {
            var newX =  grassEat[0];
            var newY =  grassEat[1];
            matrix[newY][newX] = this.index;
            matrix[this.y][this.x] = 0;
            
            for (var i in grassEater) {
                if (newX === grassEater[i].x && newY === grassEater[i].y) {
                    grassEater.splice(i,1);
                    break;
                }
            }
            this.x = newX; 
            this.y = newY;
            this.energy+=1;
        }
    }
    eat3() {
        var emptyCells = this.chooseCell(3);
        var gish = random(emptyCells);

        if (gish) {
            var newX =  gish[0];
            var newY =  gish[1];
            matrix[newY][newX] = this.index;
            matrix[this.y][this.x] = 0;
            
            for (var i in gishatich) {
                if (newX == gishatich[i].x && newY == gishatich[i].y) {
                    gishatich.splice(i,1);
                    break;
                }
            }
            this.x = newX; 
            this.y = newY;
            this.energy+=2;
        }
    }
      mul() {
        var newCell = random(this.chooseCell(0));
        if (this.energy >= 15 && newCell) {
            var newPredator = new Predator(newCell[0], newCell[1], this.index);
            predator.push(newPredator);
            matrix[newCell[1]][newCell[0]] = this.index;
            this.energy = 5;
        }
    }
    die(){
        
        if(this.energy <= 0){
            matrix[this.y][this.x] = 0;
            for (var i in predator) {
                if (this.x == predator[i].x && this.y == predator[i].y) {
                    predator.splice(i, 1);
                    break;
                }
            }
        }
    }

}

class Predator2{
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energy = 5;
        this.index = index;
        this.directions = [];
        this.count = 0;
    }
   getNewCoordinates(){
        this.directions = [
         [this.x    , this.y - 1],
         [this.x    , this.y - 2],
         [this.x + 1, this.y - 2],
         [this.x - 1, this.y - 1],
         [this.x - 1, this.y + 1],
         [this.x + 1, this.y    ],
         [this.x + 2, this.y    ],
         [this.x + 2, this.y - 1],
         [this.x - 2, this.y - 1],
         [this.x    , this.y + 1],
         [this.x    , this.y + 2],
         [this.x - 1, this.y + 2],
         [this.x + 1, this.y + 2],
         [this.x - 1, this.y + 2],
         [this.x + 1, this.y    ],
         [this.x - 2, this.y    ],
         [this.x - 2, this.y - 1],
         [this.x - 2, this.y + 1],
        ];
     }

    chooseCell(character) {
       this.getNewCoordinates();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
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
            var newX =  grass[0];
            var newY =  grass[1];
            matrix[newY][newX] = this.index;
            matrix[this.y][this.x] = 0;
            
            for (var i in grassArr) {
                if (newX === grassArr[i].x && newY === grassArr[i].y) {
                    grassArr.splice(i,1);
                    break;
                }
            }
            this.x = newX; 
            this.y = newY;
            this.energy+=1;
            this.count+=1;
        }
    }
      eat1() {
        var emptyCells = this.chooseCell(2);
        var grassEat = random(emptyCells);

        if (grassEat) {
            var newX =  grassEat[0];
            var newY =  grassEat[1];
            matrix[newY][newX] = this.index;
            matrix[this.y][this.x] = 0;
            
            for (var i in grassEater) {
                if (newX === grassEater[i].x && newY === grassEater[i].y) {
                    grassEater.splice(i,1);
                    break;
                }
            }
            this.x = newX; 
            this.y = newY;
            this.energy+=1;
            this.count+=1;
        }
    }
    eat2() {
        var emptyCells = this.chooseCell(3);
        var gish = random(emptyCells);

        if (gish) {
            var newX =  gish[0];
            var newY =  gish[1];
            matrix[newY][newX] = this.index;
            matrix[this.y][this.x] = 0;
            
            for (var i in gishatich) {
                if (newX == gishatich[i].x && newY == gishatich[i].y) {
                    gishatich.splice(i,1);
                    break;
                }
            }
            this.x = newX; 
            this.y = newY;
            this.energy+=2;
            this.count+=1;
        }
    }
      mul() {
        var newCell = random(this.chooseCell(0));
        if (this.energy >= 20 && newCell) {
            var newPredator2 = new Predator2(newCell[0], newCell[1], this.index);
            predator2.push(newPredator2);
            matrix[newCell[1]][newCell[0]] = this.index;
            this.energy = 5;
        }
    }
     mul2(){
        var  newCell = random(this.chooseCell(0));
        if(this.count >= 5 && newCell){ 
            var newPredator = new Predator(newCell[0], newCell[1], 4);
            predator.push(newPredator);
            matrix[newCell[1]][newCell[0]] = this.index;
            this.energy = 5;
            this.count = 0;
        }
     }
    die(){
        if(this.count >= 10){
            matrix[this.y][this.x] = 0;
            for (var i in predator) {
                if (this.x == predator2[i].x && this.y == predator2[i].y) {
                    predator2.splice(i, 1);
                    break;
                    this.count--
                }
            }
        }
    }
    die2(){
        if(this.energy <= 0){
            matrix[this.y][this.x] = 0;
            for (var i in predator) {
                if (this.x == predator2[i].x && this.y == predator2[i].y) {
                    predator2.splice(i, 1);
                    break;
                    this.count--
                }
            }
        }
    }
}