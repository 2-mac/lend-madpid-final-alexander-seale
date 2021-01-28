scene.setBackgroundImage(assets.image`Tester`)
let mySprite = sprites.create(img`
    . . . . . . d d d d . . . . . . 
    . . . . . . f d d f . . . . . . 
    . . . . . . d d d d . . . . . . 
    . . . . . . d d d d . . . . . . 
    . . d d d f f d d f f d d d . . 
    . d d d d d f f f f d d d d d . 
    d d d d d d d f f d d d d d d d 
    d d d . d d d d d d d d . d d d 
    d d d . d d d d d d d d . d d d 
    f f f . d d d d d d d d . f f f 
    d d d . f f f f f f f f . d d d 
    . . . . f f f f f f f f . . . . 
    . . . . d d f . . f d d . . . . 
    . . . . d d d . . d d d . . . . 
    . . . . d d d . . d d d . . . . 
    . . . 5 5 5 5 . . 5 5 5 5 . . . 
    `, SpriteKind.Player)
mySprite.setVelocity(0, 0)
controller.moveSprite(mySprite)
