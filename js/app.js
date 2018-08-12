// Enemies our player must avoid
var Enemy = function() {
    this.randomStartingPoint = function() {
        var rand = (Math.floor(Math.random() * Math.floor(3)));
        const yVal = {
            0: 71,
            1: 154,
            2: 237
        };
        return yVal[rand];
    };
    //Starts off-screen, random speed, and can start in any of the 3 designated roads.
    this.x = -75;
    this.y = this.randomStartingPoint();
    this.speed = this.randomSpeed();
    // The image/sprite for enemies
    this.sprite = 'images/enemy-bug.png';
};
//Enemy random speed function
Enemy.prototype.randomSpeed = function() {
    var rand = (Math.floor(Math.random() * Math.floor(3)));
    const speed = {
        0: 150,
        1: 350,
        2: 500
    };
    return speed[rand];
};
// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    //if (sqrt((this.x-player.x)^2 + (this.y-player.y)^2)) {
    if ((this.y != undefined) && (player.y != undefined ) && (this.x != undefined) && (player.x != undefined )&& (this.y == player.y) && Math.abs(this.x - player.x) < 50) {
        console.log(this.x + ', ' + player.x);
        console.log('bang');
        player.x = 199;
        player.y = 403;
        return;
    };
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x+=(dt*this.speed);
};
// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
function Player() {
    this.sprite = 'images/char-princess-girl.png';
    this.x = 199;
    this.y = 403;
    this.handleInput =  function(param) {
        var y = this.y;
        var x = this.x;
        if (param === 'up') {
            y -= 83;
            if (y <= -40) {return};
            this.y = y;
        }
        if (param === 'down') {
            y += 83;
            if (y >= 450) {return};
            this.y = y;
        }
        if (param === 'left') {
            x -= 101;
            if (x <= -4) {return};
            this.x = x;
        }
        if (param === 'right') {
            x += 101;
            if (x >= 500) {return};
            this.x = x;
        }
        console.log(x,y);
        if (player.y <= 0) {
            console.log("winner winner, chicken dinner!");
            modal.style.display = "block";
        };
    }
    this.update = function() {
        //console.log('Player.update error fixing');
    }
}
//Render
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    //console.log('Render, dammit!');
};
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [(new Enemy()),new Enemy()];
var player = new Player();
//Makes bugs keep coming
this.buggyRecursion = function(){
    this.newEnemySpawns = new Promise(function () {
        window.setTimeout(function spawnOfLadybugSatan() {
            //console.log('I solemnly swear I am up to no good!');
            allEnemies.push(new Enemy());
            this.buggyRecursion();
        }, Math.random() * 2500);
    });
}
//Calls buggyRecursion function in order to create a constant flow of enemies
this.buggyRecursion();
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    player.handleInput(allowedKeys[e.keyCode]);
});

// Get the modal
var modal = document.getElementById('myModal');

//Game Won modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
replay.onclick = function(event) {
    modal.style.display = "none";
    reset();
}

var reset = function() {
    player.x = 199;
    player.y = 403;
}