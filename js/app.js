// Enemies our player must avoid
var Enemy = function() {
    this.randomStartingPoint = function() {
        var rand = (Math.floor(Math.random() * Math.floor(3)));
        const yVal = {
            0: 65,
            1: 150,
            2: 225
        };
        return yVal[rand];
    };
    this.x = -75;
    this.y = this.randomStartingPoint();
    this.speed = this.randomSpeed();
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};
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
    this.x = 300;
    this.y = 320;
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
    }
    this.update = function() {
        //console.log('Player.update error fixing');
    }
}

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    //console.log('Render, dammit!');
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [(new Enemy()),new Enemy()];
var player = new Player();

this.buggyRecursion = function(){
    this.newEnemySpawns = new Promise(function () {
        window.setTimeout(function spawnOfLadybugSatan() {
            //console.log('I solemnly swear I am up to no good!');
            allEnemies.push(new Enemy());
            this.buggyRecursion();
        }, Math.random() * 2500);
    });
}
this.buggyRecursion();
//this.newEnemySpawns.then(function(){
    
//});

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
