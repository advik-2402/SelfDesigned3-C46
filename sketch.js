var userImg, bomberImg, tankImg;
var user, bomber, tank;
var bg;
var bullImg, tankBullImg, bombImg;
var bulletsGroup;
var enemy;
var flag;

function preload() {
    userImg = loadImage("images/user.png");
    bomberImg = loadImage("images/user bomb.png");
    tankImg = loadImage("images/user tank.png");

    bg = loadImage("images/bg2.jpg");

    bullImg = loadImage("images/gunBullet.png");
    tankBullImg = loadImage("images/tank bullet.png");
    bombImg = loadImage("images/bomb.png")
}

function setup() {
    var canvas = createCanvas(1400, 700);
    user = new Player();
    bulletsGroup = new Group();

    enemy = createSprite(1200, 400, 50, 50);

    flag = 3;
}

function draw() {
    background(bg);

    user.display();

    user.playerMove();
    user.playerCollide();

    if (bulletsGroup.isTouching(enemy)) {
        enemy.destroy();
    }

    drawSprites();
}

function keyPressed() {
    if (keyCode === 32) {
        var bullet = createSprite(user.body.x + 105, user.body.y - 50, 20, 20);
        bullet.velocityX = 12;
        if (flag === 3) {
            bullet.addImage("GunBullet", bullImg);
            bullet.scale = 0.2;
        }

        if (flag === 2){
            bullet.addImage("TankBullet", tankBullImg);
            bullet.scale = 0.4;
            bullet.x = user.body.x + 60;
            bullet.y = user.body.y - 5;;
        }

        if(flag === 1){
            bullet.addImage("BombBullet", bombImg);
            bullet.scale = 0.2;
        }

        bulletsGroup.add(bullet);
    }
}

