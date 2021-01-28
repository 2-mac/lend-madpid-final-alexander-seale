scene.setBackgroundImage(assets.image`Tester`)
let mySprite = sprites.create(assets.image`C`, SpriteKind.Player)
mySprite.setVelocity(50, 50)
controller.moveSprite(mySprite)
let mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 5 5 . 5 5 . . . . . 
    . . . . . . 5 5 5 5 5 . . . . . 
    . f f f f f 5 5 5 5 5 f f f f f 
    . f 2 2 2 f f f . f f f 2 2 2 f 
    . f 2 2 f f 2 f f f 2 f f 2 2 f 
    . f f 2 f f 2 2 f 2 2 f f 2 f f 
    . . f f f 2 2 2 f 2 2 2 f f f . 
    . . . f f f f f f f f f f f . . 
    . . . f 1 f 1 f 1 f 1 f 1 f . . 
    . . . f 1 f 1 f 1 f 1 f 1 f . . 
    . f f f 1 f 1 f 1 f 1 f 1 f f f 
    . f . f 1 f 1 f 1 f 1 f 1 f . f 
    . f . f f f f f f f f f f f . f 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Projectile)
