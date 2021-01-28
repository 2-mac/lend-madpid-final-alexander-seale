controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 2 2 2 . . . . . . . . . 
        . . . . . . . . . . 2 2 . . . . 
        . . 2 2 4 4 4 4 4 . 2 2 . . . . 
        . . 2 2 4 4 4 5 4 4 . . . . . . 
        . . . 2 4 4 4 5 5 4 4 . . . . . 
        . . . . 4 5 5 5 5 4 4 . . . . . 
        . . . 4 4 4 4 5 5 4 . . . . . . 
        . 2 . 4 4 . 4 4 5 4 . . . . . . 
        . 2 . . . 4 . 4 4 4 2 2 . . . . 
        . . . . 4 4 . . . . . 2 . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 100, 0)
})
let projectile: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundImage(assets.image`Tester`)
mySprite = sprites.create(img`
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
let mySprite2 = sprites.create(img`
    . 4 4 5 5 5 5 f f f f f f 5 5 . 
    4 4 5 5 f f f f 1 1 1 1 f f 5 4 
    4 2 2 f f 1 1 1 1 1 1 1 1 f 4 4 
    . 4 2 f 1 1 f f f 1 f f f f 5 5 
    2 2 5 f 1 1 f f f 1 f f f 1 f 5 
    4 4 5 f 1 1 f f f 1 f f f 1 f 5 
    . 4 5 f f 1 1 1 1 1 1 1 1 f f 5 
    . . 5 5 f f 1 1 1 1 1 1 f f 5 4 
    . . . 5 5 f 1 f 1 f 1 f f 5 5 4 
    . . . . . f f f f f f f f . . . 
    . . . . . f 1 f 1 f 1 f f . . . 
    . . . . . f 1 1 1 1 1 1 f . . . 
    . . . . . f f f f f f f f . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite.setStayInScreen(true)
mySprite2.setBounceOnWall(true)
mySprite2.setVelocity(27, -53)
info.setLife(3)
