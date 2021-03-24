class Projectile extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y, 'bullet')
        this.x = 200
        this.y = 200
        scene.add.existing(this)
        scene.physics.add.existing(this)
    }

<<<<<<< HEAD
    // called when the player presses the spacebar
    fire(x, y, scene, pointer) {
        // displays the projectile
        this.body.reset(x, y)
        this.setActive(true)
        this.setVisible(true)
        
=======
    fire(x, y, scene, pointer) {
        this.body.reset(x, y)
        this.setActive(true)
        this.setVisible(true)
>>>>>>> origin/master
        this.setSize(15,3)

        let angle = Phaser.Math.Angle.BetweenPoints(this, pointer)
        this.rotation = angle
        scene.physics.velocityFromRotation(angle, 150, this.body.velocity)

    }

    recycle() {
        this.setActive(false)
        this.setVisible(false)
    }
}

// Class for the Sprite Group
class Projectiles extends Phaser.Physics.Arcade.Group {
    constructor (scene) {
        super(scene.physics.world, scene);
        this.createMultiple({
<<<<<<< HEAD
            frameQuantity: 40,
=======
            frameQuantity: 100,
>>>>>>> origin/master
            key: 'bullet',
            active: false,
            visible: false,
            classType: Projectile
        })
    }

    fireProjectile(x, y, scene, pointer) {
        let projectile = this.getFirstDead(false)
        if (projectile) {
            projectile.fire(x, y, scene, pointer)
        }
    }
}