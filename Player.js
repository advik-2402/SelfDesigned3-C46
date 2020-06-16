class Player {
    constructor() {
        this.body = createSprite(140, 550, 20, 20);
        this.body.addImage("User", userImg);
        this.body.addImage("Bomb", bomberImg);
        this.body.addImage("Tank", tankImg);
    }

    display() {
        if (keyIsDown(LEFT_ARROW)) {
            this.body.changeImage("Bomb", bombImg);
            flag = 1;
        }

        if (keyIsDown(RIGHT_ARROW)) {
            this.body.changeImage("Tank", tankImg);
            flag = 2;
        }

        if (keyCode === 117) {
            this.body.changeImage("User", userImg);
            flag = 3;
        }
    }

    playerMove() {
        if (keyIsDown(UP_ARROW)) {
            this.body.position.y -= 10;
        }

        if (keyIsDown(DOWN_ARROW)) {
            this.body.position.y += 10;
        }
    }

    playerCollide() {
        var edges = createEdgeSprites();
        this.body.collide(edges[2]);
        this.body.collide(edges[3]);
    }
}