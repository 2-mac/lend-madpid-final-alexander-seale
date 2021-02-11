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
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . d d d d d d d d . . . . 
        . . . d d d d f d d d d d . . . 
        . . d d d d f f f d d d d d . . 
        . . d d d d d f d d d d d d . . 
        . . d d d d d f d d d d d d . . 
        . . d d d d d d d d d d d d . . 
        . . d f f d d f d d f f f d . . 
        . . d f f f d f d d f f f d . . 
        . . d f d f d f d d f d d d . . 
        . . d d d d d d d d d d d d . . 
        . . d d d d d d d d d d d d . . 
        . . d d d d d d d d d d d d . . 
        . . d d d d d d d d d d d d . . 
        . . d d d d d d d d d d d d . . 
        `)
    mySprite.destroy(effects.ashes, 500)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    mySprite2.destroy(effects.fire, 500)
    info.changeScoreBy(1)
    mySprite3 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . 1 1 1 1 1 1 . . . . . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 . . . 
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . 1 1 f f f 1 1 1 f f f 1 1 . . 
        . 1 1 f f f 1 1 1 f f f 1 1 . . 
        . 1 1 f f f 1 1 1 f f f 1 1 . . 
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . . 1 1 f 1 1 f 1 1 1 . . . . 
        . . . 1 1 f 1 1 f 1 1 f . . . . 
        . . . f f f f f f f f f . . . . 
        . . . 1 1 f 1 1 f 1 1 f . . . . 
        . . . 1 1 1 1 1 1 1 1 f . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    mySprite3.setVelocity(27, -53)
    mySprite3.setPosition(21, 120)
    mySprite3.setBounceOnWall(true)
    mySprite4 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 . . . 
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . 1 1 f f f f 1 1 1 f f f 1 . . 
        . 1 1 f f f f f 1 f f f f 1 . . 
        . 1 1 f f f f f 1 1 f f f 1 . . 
        . . 1 f f f f 1 1 1 f f f 1 . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . . 1 1 1 1 1 1 1 1 1 1 . . . 
        . . . . 1 1 f 1 1 1 1 1 . . . . 
        . . . . 1 1 f 1 1 f 1 1 . . . . 
        . . . . f f f f f f f f . . . . 
        . . . . 1 1 f 1 1 f 1 1 . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . . . 1 1 1 1 1 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    mySprite4.setPosition(0, 0)
    mySprite4.setVelocity(27, -53)
    mySprite4.setBounceOnWall(true)
})
let mySprite4: Sprite = null
let mySprite3: Sprite = null
let projectile: Sprite = null
let mySprite2: Sprite = null
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
mySprite2 = sprites.create(img`
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
    `, SpriteKind.Enemy)
mySprite2.setBounceOnWall(true)
mySprite2.setVelocity(27, -53)
info.setLife(3)
mySprite2.setPosition(34, 0)
mySprite.setStayInScreen(true)
