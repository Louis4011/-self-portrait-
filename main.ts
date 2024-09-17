scene.setBackgroundColor(1)
let mySprite = sprites.create(assets.image`louis`, SpriteKind.Player)
let projectile = sprites.create(assets.image`louis`, SpriteKind.Projectile)
controller.moveSprite(mySprite)
