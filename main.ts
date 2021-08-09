enum ActionKind {
    Walking,
    Idle,
    Jumping,
    Working,
    Die,
    IdleLeft,
    WalkRight,
    WalkLeft,
    JumpRight,
    JumpLeft,
    FallRight,
    FallLeft,
    CrouchRight,
    CrouchLeft
}
namespace SpriteKind {
    export const Trap = SpriteKind.create()
    export const Coin = SpriteKind.create()
    export const Tool = SpriteKind.create()
    export const Block = SpriteKind.create()
    export const Sword = SpriteKind.create()
    export const Sword2 = SpriteKind.create()
    export const Sword3 = SpriteKind.create()
    export const GoldCoin = SpriteKind.create()
    export const Brick = SpriteKind.create()
    export const CoinDown = SpriteKind.create()
    export const BrickDown = SpriteKind.create()
    export const Stone = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Trap, function (sprite, otherSprite) {
    if (猴致远是否活着) {
        猴致远是否活着 = false
        music.baDing.play()
        animation.setAction(otherSprite, ActionKind.Working)
    }
})
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    if (sprite.tileKindAt(TileDirection.Top, assets.tile`myTile0`) && !(第1关创建指示牌)) {
        music.baDing.play()
        创建指示牌()
    }
})
scene.onHitWall(SpriteKind.Sword3, function (sprite, location) {
    sprite.setImage(img`
        . . f f f f f . . 
        . f 1 1 1 1 1 f . 
        1 f 1 f f f 1 f 1 
        1 f 1 f 2 f 1 f 1 
        1 f 1 f f f 1 f 1 
        1 f 1 1 1 1 1 f 1 
        1 1 f f f f f 1 1 
        1 1 1 f e f 1 1 1 
        1 1 1 f e f 1 1 1 
        1 1 1 f e f 1 1 1 
        f f f f f f f f f 
        f 5 5 5 5 5 5 5 f 
        f 5 5 5 5 5 5 5 f 
        f 5 5 5 5 5 5 5 f 
        f f f f f f f f f 
        f 1 1 1 f 1 1 1 f 
        f 1 1 1 f 1 1 1 f 
        f 1 1 1 f 1 1 1 f 
        f 1 1 1 f 1 1 1 f 
        f 1 1 1 f 1 1 1 f 
        f 1 1 1 f 1 1 1 f 
        f 1 1 1 f 1 1 1 f 
        f 1 1 1 f 1 1 1 f 
        f 1 1 1 f 1 1 1 f 
        f 1 1 1 f 1 1 1 f 
        f 1 1 1 f 1 1 1 f 
        f 1 1 1 f 1 1 1 f 
        f 1 1 1 f 1 1 1 f 
        f 1 1 1 f 1 1 1 f 
        f 1 1 1 f 1 1 1 f 
        f 1 1 1 f 1 1 1 f 
        f 1 1 1 f 1 1 1 f 
        `)
    sprite.vy = 0
    sprite.y += 16
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Brick, function (sprite, otherSprite) {
    if (sprite.top < otherSprite.top) {
        sprite.bottom = otherSprite.top
        sprite.vy = 0
        if (controller.A.isPressed()) {
            sprite.vy = -320
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Coin, function (sprite, otherSprite) {
    info.changeScoreBy(100)
    otherSprite.destroy(effects.spray, 500)
    mySprite = sprites.create(img`
        ff.........................................................................fffff
        f1ff....................................................................fff1111f
        f111ff...............................................................fff1111111f
        f1111fff.............................................................ff11111111f
        f1111111f..............................................................f1111111f
        f11111ff................................................................ff11111f
        f111ff....................................................................ff111f
        f1fff......................................................................ff11f
        fff.........................................................................ff1f
        f11ff.......................................................................ffff
        f1111ffff.................................................................ff111f
        f1111111ff..............................................................ff11111f
        f111111ff..............................................................f1111111f
        f11111f...............................................................ffff11111f
        f1111f....................................................................ffffff
        f11ff........................................................................fff
        ffff.......................................................................ff11f
        fffff.....................................................................f1111f
        f1111ffff................................................................f11111f
        f111111ff..............................................................ff111111f
        f11111f...............................................................f11111111f
        f1111ff.............................................................ff111111111f
        f11fff.............................................................fffffffffff1f
        f1ff.........................................................................f1f
        f1fff........................................................................f1f
        f111ffff....................................................................f11f
        f1111111ff..................................................................f11f
        f1111fffff.................................................................f111f
        f1fff.....................................................................f1111f
        fff......................................................................fffffff
        fff.........................................................................ff1f
        f11f.....................................................................fff111f
        f111ff.................................................................ff111111f
        f11111ff.............................................................ff11111111f
        f111111ff..........................................................ff1111111111f
        f111111ff...........................................................fffff111111f
        fffffff..................................................................ffff11f
        ffff.........................................................................fff
        f111ffff...................................................................fff1f
        f1111111f...............................................................fff1111f
        f111111ff.............................................................ff1111111f
        f111fff..............................................................fffffffff1f
        f11ff......................................................................fff1f
        f1ffff.................................................................ffff1111f
        f11111fffff..........................................................ff11111111f
        f1111111ff...........................................................ffffff1111f
        f111111f...................................................................fff1f
        f11111f.......................................................................ff
        `, SpriteKind.Trap)
    mySprite.setPosition(otherSprite.x, otherSprite.y - 16)
})
function 初始化地图信息 () {
    第1关创建指示牌 = false
    猴致远是否活着 = true
    脸是否向左 = false
    animation.setAction(猴致远, ActionKind.Idle)
    for (let 值 of tiles.getTilesByType(assets.tile`myTile`)) {
        tiles.setWallAt(值, true)
    }
    for (let 值 of tiles.getTilesByType(assets.tile`myTile8`)) {
        tiles.setWallAt(值, true)
    }
    for (let 值 of tiles.getTilesByType(assets.tile`myTile0`)) {
        tiles.setWallAt(值, true)
    }
    for (let 值 of tiles.getTilesByType(assets.tile`myTile1`)) {
        tiles.placeOnTile(猴致远, 值)
        tiles.setTileAt(值, assets.tile`transparency16`)
    }
    for (let 值 of tiles.getTilesByType(assets.tile`myTile9`)) {
        mySprite = sprites.create(img`
            . . b b b b . . 
            . b 5 5 5 5 b . 
            b 5 d 3 3 d 5 b 
            b 5 3 5 5 1 5 b 
            c 5 3 5 5 1 d c 
            c d d 1 1 d d c 
            . f d d d d f . 
            . . f f f f . . 
            `, SpriteKind.Coin)
        animation.runImageAnimation(
        mySprite,
        [img`
            . . b b b b . . 
            . b 5 5 5 5 b . 
            b 5 d 3 3 d 5 b 
            b 5 3 5 5 1 5 b 
            c 5 3 5 5 1 d c 
            c d d 1 1 d d c 
            . f d d d d f . 
            . . f f f f . . 
            `,img`
            . . b b b . . . 
            . b 5 5 5 b . . 
            b 5 d 3 d 5 b . 
            b 5 3 5 1 5 b . 
            c 5 3 5 1 d c . 
            c 5 d 1 d d c . 
            . f d d d f . . 
            . . f f f . . . 
            `,img`
            . . . b b . . . 
            . . b 5 5 b . . 
            . b 5 d 1 5 b . 
            . b 5 3 1 5 b . 
            . c 5 3 1 d c . 
            . c 5 1 d d c . 
            . . f d d f . . 
            . . . f f . . . 
            `,img`
            . . . b b . . . 
            . . b 5 5 b . . 
            . . b 1 1 b . . 
            . . b 5 5 b . . 
            . . b d d b . . 
            . . c d d c . . 
            . . c 3 3 c . . 
            . . . f f . . . 
            `,img`
            . . . b b . . . 
            . . b 5 5 b . . 
            . b 5 1 d 5 b . 
            . b 5 1 3 5 b . 
            . c d 1 3 5 c . 
            . c d d 1 5 c . 
            . . f d d f . . 
            . . . f f . . . 
            `,img`
            . . . b b b . . 
            . . b 5 5 5 b . 
            . b 5 d 3 d 5 b 
            . b 5 1 5 3 5 b 
            . c d 1 5 3 5 c 
            . c d d 1 d 5 c 
            . . f d d d f . 
            . . . f f f . . 
            `],
        100,
        true
        )
        tiles.placeOnTile(mySprite, 值)
        tiles.setTileAt(值, assets.tile`transparency16`)
    }
    for (let 值 of tiles.getTilesByType(assets.tile`myTile3`)) {
        创建云朵()
    }
    for (let 值 of tiles.getTilesByType(assets.tile`myTile6`)) {
        创建草丛()
    }
    if (当前关卡 == 2) {
        mySprite = sprites.create(img`
            fffffffffffffff.
            f1111111111111ff
            f11111ffffffffff
            f11ffff.........
            ffff............
            fff.............
            f1fffffffff.....
            f1111111111ffff.
            f1111ffffffffff.
            f1fff...........
            f1fff...........
            fff.............
            f11ffff.........
            f111111fff......
            f11111111fff....
            f11111111111ff..
            f1111111111111ff
            f111111111111ff.
            f1111111111ff...
            f1111111fff.....
            f11111ff........
            f1111f..........
            f11ff...........
            f1f.............
            ff..............
            f1ff............
            f111ff..........
            f11111ff........
            f1111111ff......
            f111111111fff...
            f11111111111ff..
            f1111111111111f.
            f11111111111111f
            f11111111111fff.
            f11111111fff....
            f1111111f.......
            f1111fff........
            f11ff...........
            fff.............
            ffff............
            f111fff.........
            f111111fff......
            f111111111fff...
            f11111111111ffff
            f1111111111111ff
            f111111111111f..
            f11111111111f...
            f111111111ff....
            f111111fff......
            f1111ff.........
            f11ff...........
            fff.............
            ff..............
            fff.............
            f11ff...........
            f1111fff........
            f1111111ffff....
            f11111111111ffff
            f11111111111111f
            f111111111111ff.
            f111111111fff...
            f1111111ff......
            f11111fff.......
            f111ff..........
            f1ff............
            ff..............
            fffffff.........
            f111111ffffffff.
            f1111111111111ff
            f11111111111fff.
            f11111111fff....
            f111111ff.......
            f11111f.........
            f11fff..........
            f1ff............
            f1fff...........
            f111ffff........
            f1111111ffffffff
            f1111111111111ff
            ffffffffffffff..
            `, SpriteKind.Tool)
        mySprite.setPosition(-16, 120)
        mySprite.setFlag(SpriteFlag.GhostThroughWalls, true)
    } else if (当前关卡 == 3) {
        mySprite = sprites.create(img`
            ..11111111ffffffffffffffffffffffffffffffffff....
            .fffff1111f555f11111111111111111111111111111f...
            f11111f111f555f111111111111111111111111111111f..
            f1fff1fffff555f1111111111111111111111111111111f.
            f1f2f1feeef555ffffffffffffffffffffffffff111ff11f
            f1fff1fffff555f1111111111111111111111111111111f.
            f11111f111f555f111111111111111111111111111111f..
            .fffff1111f555f11111111111111111111111111111f...
            ..11111111ffffffffffffffffffffffffffffffffff....
            `, SpriteKind.Sword)
        mySprite.setPosition(-30, 136)
        mySprite = sprites.create(img`
            ..11111111ffffffffffffffffffffffffff....
            .fffff1111f555f111111111111111111111f...
            f11111f111f555f1111111111111111111111f..
            f1fff1fffff555f11111111111111111111111f.
            f1f2f1feeef555fffffffffffffffffffffff11f
            f1fff1fffff555f11111111111111111111111f.
            f11111f111f555f1111111111111111111111f..
            .fffff1111f555f111111111111111111111f...
            ..11111111ffffffffffffffffffffffffff....
            `, SpriteKind.Sword)
        mySprite.setPosition(-30, 104)
        mySprite = sprites.create(img`
            . . 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f f f f f . . . . 
            . f f f f f 1 1 1 1 f 5 5 5 f 1 1 1 1 1 1 1 1 1 1 1 1 1 f . . . 
            f 1 1 1 1 1 f 1 1 1 f 5 5 5 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f . . 
            f 1 f f f 1 f f f f f 5 5 5 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f . 
            f 1 f 2 f 1 f e e e f 5 5 5 f f f f f f f f f f f f f f f 1 1 f 
            f 1 f f f 1 f f f f f 5 5 5 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f . 
            f 1 1 1 1 1 f 1 1 1 f 5 5 5 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f . . 
            . f f f f f 1 1 1 1 f 5 5 5 f 1 1 1 1 1 1 1 1 1 1 1 1 1 f . . . 
            . . 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f f f f f . . . . 
            `, SpriteKind.Sword)
        mySprite.setPosition(-30, 72)
        mySprite = sprites.create(img`
            ....ffffffffffffffffffffffffffffffffff11111111..
            ...f11111111111111111111111111111f555f1111fffff.
            ..f111111111111111111111111111111f555f111f11111f
            .f1111111111111111111111111111111f555fffff1fff1f
            f11ff111ffffffffffffffffffffffffff555feeef1f2f1f
            .f1111111111111111111111111111111f555fffff1fff1f
            ..f111111111111111111111111111111f555f111f11111f
            ...f11111111111111111111111111111f555f1111fffff.
            ....ffffffffffffffffffffffffffffffffff11111111..
            `, SpriteKind.Sword2)
        mySprite.setPosition(400, 136)
        mySprite = sprites.create(img`
            ....ffffffffffffffffffffffffff11111111..
            ...f111111111111111111111f555f1111fffff.
            ..f1111111111111111111111f555f111f11111f
            .f11111111111111111111111f555fffff1fff1f
            f11fffffffffffffffffffffff555feeef1f2f1f
            .f11111111111111111111111f555fffff1fff1f
            ..f1111111111111111111111f555f111f11111f
            ...f111111111111111111111f555f1111fffff.
            ....ffffffffffffffffffffffffff11111111..
            `, SpriteKind.Sword2)
        mySprite.setPosition(400, 104)
        mySprite = sprites.create(img`
            . . . . f f f f f f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 . . 
            . . . f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 5 5 5 f 1 1 1 1 f f f f f . 
            . . f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 5 5 5 f 1 1 1 f 1 1 1 1 1 f 
            . f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 5 5 5 f f f f f 1 f f f 1 f 
            f 1 1 f f f f f f f f f f f f f f f 5 5 5 f e e e f 1 f 2 f 1 f 
            . f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 5 5 5 f f f f f 1 f f f 1 f 
            . . f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 5 5 5 f 1 1 1 f 1 1 1 1 1 f 
            . . . f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 5 5 5 f 1 1 1 1 f f f f f . 
            . . . . f f f f f f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 . . 
            `, SpriteKind.Sword2)
        mySprite.setPosition(400, 72)
    }
    for (let 值 of tiles.getTilesByType(assets.tile`myTile18`)) {
        mySprite = sprites.create(img`
            ..fffff..
            .f11111f.
            1f1fff1f1
            1f1f2f1f1
            1f1fff1f1
            1f11111f1
            11fffff11
            111fef111
            111fef111
            111fef111
            fffffffff
            f5555555f
            f5555555f
            f5555555f
            fffffffff
            f111f111f
            f111f111f
            f111f111f
            f111f111f
            f111f111f
            f111f111f
            f111f111f
            f111f111f
            f111f111f
            f111f111f
            f111f111f
            f111f111f
            f111f111f
            f111f111f
            f111f111f
            f111f111f
            f111f111f
            f111f111f
            f111f111f
            f111f111f
            f111f111f
            f111f111f
            f111f111f
            f111f111f
            f111f111f
            f1111111f
            f1111111f
            f1111111f
            f111f111f
            .f11f11f.
            ..f111f..
            ...f1f...
            ....f....
            `, SpriteKind.Sword3)
        tiles.placeOnTile(mySprite, 值)
        tiles.setTileAt(值, assets.tile`transparency16`)
        mySprite.setFlag(SpriteFlag.Invisible, true)
    }
    for (let 值 of tiles.getTilesByType(assets.tile`myTile19`)) {
        mySprite = sprites.create(img`
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . 3 . . . . 
            . . . . . . . . 
            `, SpriteKind.GoldCoin)
        tiles.placeOnTile(mySprite, 值)
        animation.runImageAnimation(
        mySprite,
        [img`
            . . b b b b . . 
            . b 5 5 5 5 b . 
            b 5 d 3 3 d 5 b 
            b 5 3 5 5 1 5 b 
            c 5 3 5 5 1 d c 
            c d d 1 1 d d c 
            . f d d d d f . 
            . . f f f f . . 
            `,img`
            . . b b b . . . 
            . b 5 5 5 b . . 
            b 5 d 3 d 5 b . 
            b 5 3 5 1 5 b . 
            c 5 3 5 1 d c . 
            c 5 d 1 d d c . 
            . f d d d f . . 
            . . f f f . . . 
            `,img`
            . . . b b . . . 
            . . b 5 5 b . . 
            . b 5 d 1 5 b . 
            . b 5 3 1 5 b . 
            . c 5 3 1 d c . 
            . c 5 1 d d c . 
            . . f d d f . . 
            . . . f f . . . 
            `,img`
            . . . b b . . . 
            . . b 5 5 b . . 
            . . b 1 1 b . . 
            . . b 5 5 b . . 
            . . b d d b . . 
            . . c d d c . . 
            . . c 3 3 c . . 
            . . . f f . . . 
            `,img`
            . . . b b . . . 
            . . b 5 5 b . . 
            . b 5 1 d 5 b . 
            . b 5 1 3 5 b . 
            . c d 1 3 5 c . 
            . c d d 1 5 c . 
            . . f d d f . . 
            . . . f f . . . 
            `,img`
            . . . b b b . . 
            . . b 5 5 5 b . 
            . b 5 d 3 d 5 b 
            . b 5 1 5 3 5 b 
            . c d 1 5 3 5 c 
            . c d d 1 d 5 c 
            . . f d d d f . 
            . . . f f f . . 
            `],
        100,
        true
        )
    }
    for (let 值 of tiles.getTilesByType(assets.tile`myTile20`)) {
        mySprite = sprites.create(img`
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . 3 . . . . 
            . . . . . . . . 
            `, SpriteKind.CoinDown)
        tiles.placeOnTile(mySprite, 值)
        tiles.setTileAt(值, assets.tile`transparency16`)
        animation.runImageAnimation(
        mySprite,
        [img`
            . . b b b b . . 
            . b 5 5 5 5 b . 
            b 5 d 3 3 d 5 b 
            b 5 3 5 5 1 5 b 
            c 5 3 5 5 1 d c 
            c d d 1 1 d d c 
            . f d d d d f . 
            . . f f f f . . 
            `,img`
            . . b b b . . . 
            . b 5 5 5 b . . 
            b 5 d 3 d 5 b . 
            b 5 3 5 1 5 b . 
            c 5 3 5 1 d c . 
            c 5 d 1 d d c . 
            . f d d d f . . 
            . . f f f . . . 
            `,img`
            . . . b b . . . 
            . . b 5 5 b . . 
            . b 5 d 1 5 b . 
            . b 5 3 1 5 b . 
            . c 5 3 1 d c . 
            . c 5 1 d d c . 
            . . f d d f . . 
            . . . f f . . . 
            `,img`
            . . . b b . . . 
            . . b 5 5 b . . 
            . . b 1 1 b . . 
            . . b 5 5 b . . 
            . . b d d b . . 
            . . c d d c . . 
            . . c 3 3 c . . 
            . . . f f . . . 
            `,img`
            . . . b b . . . 
            . . b 5 5 b . . 
            . b 5 1 d 5 b . 
            . b 5 1 3 5 b . 
            . c d 1 3 5 c . 
            . c d d 1 5 c . 
            . . f d d f . . 
            . . . f f . . . 
            `,img`
            . . . b b b . . 
            . . b 5 5 5 b . 
            . b 5 d 3 d 5 b 
            . b 5 1 5 3 5 b 
            . c d 1 5 3 5 c 
            . c d d 1 d 5 c 
            . . f d d d f . 
            . . . f f f . . 
            `],
        100,
        true
        )
    }
    for (let 值 of tiles.getTilesByType(assets.tile`myTile21`)) {
        mySprite = sprites.create(img`
            d 1 1 1 1 1 1 b d 1 1 1 1 1 1 b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d d 1 d d d d d d d 
            b b b b b b d e b b b b b b d e 
            d 1 1 1 1 1 1 b d 1 1 1 1 1 1 b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d d 1 d d d d d d d 
            b b b b b b d e d b b b b b b e 
            `, SpriteKind.BrickDown)
        tiles.placeOnTile(mySprite, 值)
        tiles.setTileAt(值, assets.tile`transparency16`)
    }
    for (let 值 of tiles.getTilesByType(assets.tile`myTile22`)) {
        mySprite = sprites.create(img`
            ffffffffffffffffffffffffffffffffffffffffffffffff
            f1111111111111111111111111111111111111111111111f
            f1111111111111111111111111111111111111111111111f
            f1111111111111111111111111111111111111111111111f
            f1111111111111111111111111111111111111111111111f
            f111111f111111111111111111111ffff1111f111111111f
            f111111ff11111111111ff1111111f111f1111f111111f1f
            f111111fffffff111111ff111111f1111f1111f1111ff11f
            f11111f111111111111f1ff11111f1111f1111f111f1111f
            f11111f111111111111f11f11111f1111f11111fff11111f
            f1111f1111111111111f11f11111f1111111111ff111111f
            f1111f1111111111111f111f1111ff1111111111f111111f
            f1111f111111111111f1111f11111ff111111111f111111f
            f111f111111111111f11111f111111f11111111ff111111f
            f111fffffffffff1f11fffff1111111f1111111f1111111f
            f111f11111111111f111111f11111111ff11111f1111111f
            f111f11111111111f1111111f11111111f1111f11111111f
            f111f11111111111f1111111f111f11111f111f11111111f
            f111f11111111111f1111111f1111f1111f111f11111111f
            f111f1111111111ff11111111f111ff1fff111f11111111f
            f111f1111111111f111111111f1111fff11111f11111111f
            f111f1111111111f111111111f11111111111f111111111f
            f111ffffffffff11111111111f11111111111f111111111f
            f111111111111111111111111111111111111f111111111f
            f111111111111111111111111111111111111f111111111f
            f11111111111111111111111111111111111ff111111111f
            f1111111111111111111111111111111111111111111111f
            f1111111111111111111111111111111111111111111111f
            f1111111111111111111111111111111111111111111111f
            f1111111111111111111111111111111111111111111111f
            ffffffffffffffffffffffffffffffffffffffffffffffff
            `, SpriteKind.Stone)
        tiles.placeOnTile(mySprite, 值)
        tiles.setTileAt(值, assets.tile`transparency16`)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.GoldCoin, function (sprite, otherSprite) {
    music.baDing.play()
    otherSprite.destroy()
    mySprite = sprites.create(img`
        d 1 1 1 1 1 1 b d 1 1 1 1 1 1 b 
        1 d d d d d d b 1 d d d d d d b 
        1 d d d d d d b 1 d d d d d d b 
        1 d d d d d d b 1 d d d d d d b 
        1 d d d d d d b 1 d d d d d d b 
        1 d d d d d d b 1 d d d d d d b 
        1 d d d d d d d 1 d d d d d d d 
        b b b b b b d e b b b b b b d e 
        d 1 1 1 1 1 1 b d 1 1 1 1 1 1 b 
        1 d d d d d d b 1 d d d d d d b 
        1 d d d d d d b 1 d d d d d d b 
        1 d d d d d d b 1 d d d d d d b 
        1 d d d d d d b 1 d d d d d d b 
        1 d d d d d d b 1 d d d d d d b 
        1 d d d d d d d 1 d d d d d d d 
        b b b b b b d e d b b b b b b e 
        `, SpriteKind.Brick)
    mySprite.setPosition(otherSprite.x, otherSprite.y + 48)
    mySprite.vy = -30
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.CoinDown, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    music.baDing.play()
    otherSprite.destroy()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile13`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    if (猴致远.tileKindAt(TileDirection.Top, assets.tile`myTile4`) && 猴致远.vy < 0) {
        tiles.setWallAt(location, true)
        tiles.setTileAt(location, assets.tile`myTile5`)
        music.baDing.play()
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (猴致远.isHittingTile(CollisionDirection.Bottom)) {
        猴致远.vy = -320
    }
})
function 清除精灵 () {
    for (let 值 of sprites.allOfKind(SpriteKind.Trap)) {
        值.destroy()
    }
    for (let 值 of sprites.allOfKind(SpriteKind.Coin)) {
        值.destroy()
    }
    for (let 值 of sprites.allOfKind(SpriteKind.Tool)) {
        值.destroy()
    }
    for (let 值 of sprites.allOfKind(SpriteKind.Sword)) {
        值.destroy()
    }
    for (let 值 of sprites.allOfKind(SpriteKind.Sword2)) {
        值.destroy()
    }
    for (let 值 of sprites.allOfKind(SpriteKind.Sword3)) {
        值.destroy()
    }
    for (let 值 of sprites.allOfKind(SpriteKind.GoldCoin)) {
        值.destroy()
    }
    for (let 值 of sprites.allOfKind(SpriteKind.Brick)) {
        值.destroy()
    }
    for (let 值 of sprites.allOfKind(SpriteKind.CoinDown)) {
        值.destroy()
    }
    for (let 值 of sprites.allOfKind(SpriteKind.BrickDown)) {
        值.destroy()
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Tool, function (sprite, otherSprite) {
    if (otherSprite.x <= sprite.x && otherSprite.top <= sprite.top) {
        猴致远是否活着 = false
    } else if (sprite.top < otherSprite.top) {
        sprite.bottom = otherSprite.top
        sprite.vy = 0
        if (controller.A.isPressed()) {
            sprite.vy = -320
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile12`, function (sprite, location) {
    当前关卡 += 1
    if (当前关卡 <= 关卡总量) {
        更新地图()
    } else {
        game.over(true, effects.confetti)
    }
})
scene.onOverlapTile(SpriteKind.Tool, assets.tile`myTile16`, function (sprite, location) {
    sprite.vx = 0
    tiles.setTileAt(location, assets.tile`transparency16`)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Sword2, function (sprite, otherSprite) {
    if (otherSprite.left > sprite.left && otherSprite.top <= sprite.top) {
        猴致远是否活着 = false
    } else if (sprite.top < otherSprite.top) {
        sprite.bottom = otherSprite.top
        sprite.vy = 0
        if (controller.A.isPressed()) {
            sprite.vy = -320
        }
    }
})
function 创建英雄 () {
    猴致远 = sprites.create(img`
        . . . . . . . f f f f f . . . . 
        . . . . . . f e e e e e f . . . 
        . . . . . f e e e d d d d f . . 
        . . . . f f e e d f d d f d c . 
        . . . f d d e e d f d d f d c . 
        . . . c d b e e d d d d e e d . 
        . . . c d b e e d d c d d d d . 
        . . . . c f e e e d d c c c c . 
        . . . . . f f e e e d d d d f . 
        . . . . f e e e e f f f f f . . 
        . f . f e e e e e e f f . . . . 
        . f . f e e f e e f e e f . . . 
        . f . f e e e f e e f e e f . . 
        . f f f e f b b f b d f d b f . 
        . f f f e b d d f d d f d d f . 
        . f f f f f f f f f f f f f . . 
        `, SpriteKind.Player)
    controller.moveSprite(猴致远, 80, 0)
    猴致远.ay = 980
    猴致远.z = 10
    猴致远.setFlag(SpriteFlag.ShowPhysics, true)
    scene.cameraFollowSprite(猴致远)
    anim = animation.createAnimation(ActionKind.Idle, 1000)
    animation.attachAnimation(猴致远, anim)
    anim.addAnimationFrame(img`
        . . . . . . . f f f f f . . . . 
        . . . . . . f e e e e e f . . . 
        . . . . . f e e e d d d d f . . 
        . . . . f f e e d f d d f d c . 
        . . . f d d e e d f d d f d c . 
        . . . c d b e e d d d d e e d c 
        . . . c d b e e d d c d d d d c 
        . . . . c f e e e d d c c c c c 
        . . . . . f f e e e d d d d f . 
        . . . . f e e e e f f f f f . . 
        f f . f e e e e e e f f . . . . 
        f e . f e e f e e f e e f . . . 
        f e . f e e e f e e f e e f . . 
        f e f f e f b b f b d f d b f . 
        f f f f e b d d f d d f d d f . 
        . f f f f f f f f f f f f f . . 
        `)
    anim = animation.createAnimation(ActionKind.IdleLeft, 1000)
    animation.attachAnimation(猴致远, anim)
    anim.addAnimationFrame(img`
        . . . . f f f f f . . . . . . . 
        . . . f e e e e e f . . . . . . 
        . . f d d d d e e e f . . . . . 
        . c d f d d f d e e f f . . . . 
        . c d f d d f d e e d d f . . . 
        c d e e d d d d e e b d c . . . 
        c d d d d c d d e e b d c . . . 
        c c c c c d d e e e f c . . . . 
        . f d d d d e e e f f . . . . . 
        . . f f f f f e e e e f . . . . 
        . . . . f f e e e e e e f . f f 
        . . . f e e f e e f e e f . e f 
        . . f e e f e e f e e e f . e f 
        . f b d f d b f b b f e f f e f 
        . f d d f d d f d d b e f f f f 
        . . f f f f f f f f f f f f f . 
        `)
    anim = animation.createAnimation(ActionKind.Die, 1000)
    animation.attachAnimation(猴致远, anim)
    anim.addAnimationFrame(img`
        . f f f f f f f f f f f f f . . 
        f f f f e b d d f d d f d d f . 
        f e f f e f b b f b d f d b f . 
        f e . f e e e f e e f e e f . . 
        f e . f e e f e e f e e f . . . 
        f f . f e e e e e e f f . . . . 
        . . . . f e e e e f f f f f . . 
        . . . . . f f e e e d d d d f . 
        . . . . c f e e e d d c c c c c 
        . . . c d b e e d d c d d d d c 
        . . . c d b e e d d d d e e d c 
        . . . f d d e e d f d d f d c . 
        . . . . f f e e d f d d f d c . 
        . . . . . f e e e d d d d f . . 
        . . . . . . f e e e e e f . . . 
        . . . . . . . f f f f f . . . . 
        `)
    anim = animation.createAnimation(ActionKind.WalkRight, 100)
    animation.attachAnimation(猴致远, anim)
    anim.addAnimationFrame(img`
        . . . . . . . f f f f f . . . . 
        . . . . . . f e e e e e f . . . 
        . . . . . f e e e d d d d f . . 
        . . . . f f e e d f d d f d c . 
        . . . f d d e e d f d d f d c . 
        . . . c d b e e d d d d e e d c 
        f f . c d b e e d d c d d d d c 
        f e f . c f e e d d d c c c c c 
        f e f . . f f e e d d d d d f . 
        f e f . f e e e e f f f f f . . 
        f e f f e e e e e e e f . . . . 
        . f f e e e e f e f f e f . . . 
        . . f e e e e f e f f e f . . . 
        . . . f e f f b d f b d f . . . 
        . . . f d b b d d c d d f . . . 
        . . . f f f f f f f f f . . . . 
        `)
    anim.addAnimationFrame(img`
        . . . . . . . f f f f f . . . . 
        . . . . . . f e e e e e f . . . 
        . . . . . f e e e d d d d f . . 
        . . . . . f e e d f d d f d c . 
        . . . . f f e e d f d d f d c . 
        . . . f d d e e d d d d e e d c 
        . . . c d b e e d d c d d d d c 
        f f . c d b e e e d d c c c c c 
        f e f . c f f e e e d d d d f . 
        f e f . f e e e e f f f f f f . 
        f e f f e e e e e e e f f f f . 
        . f f e e e e f e f d d f d d f 
        . . f e e e e f e f b d f b d f 
        . . f e f f f f f f f f f f f f 
        . . f d d c f . . . . . . . . . 
        . . f f f f . . . . . . . . . . 
        `)
    anim.addAnimationFrame(img`
        . . . . . . . f f f f f . . . . 
        . . . . . . f e e e e e f . . . 
        . . . . f f e e e d d d d f . . 
        . . . f d d e e d d d d d d c . 
        . . . c d b e e d f d d f d c . 
        f f . c d b e e d f d d f d d c 
        f e f . c f e e d d d d e e d c 
        f e f . . f e e e d c d d d d c 
        f e f . . f f e e e d c c c f . 
        f e f . f e e e e f f f f f . . 
        . f f f e e e e e e e f . . . . 
        . . f e e e e f e e f e f f . . 
        . . f e e e f f f e e f f e f . 
        . f b f f f f f f c d d b d d f 
        . f d d c f . . f d d d c d d f 
        . . f f f . . . f f f f f f f . 
        `)
    anim.addAnimationFrame(img`
        . . . . . . . f f f f f . . . . 
        . . . . f f f e e e e e f . . . 
        . . . f d d e e e e d d d f . . 
        . . . c d b e e e d d d d d c . 
        . . . c d b e e d d d d d d c . 
        . f f . c f e e d f d d f d d c 
        f e f . . f e e d f d d f d d c 
        f e f . . f e e d d d d e e d c 
        f e f . . f f e e d c d d d f . 
        f e f . f e e e e e d f f f . . 
        . f f f e e e e e e e f . . . . 
        . . f f b e e e e e f f . . . . 
        . . f f d d c e e f f e f . . . 
        . . . . f f f c d d b d d f . . 
        . . . . . f f d d d c d d f . . 
        . . . . . . f f f f f f f . . . 
        `)
    anim = animation.createAnimation(ActionKind.WalkLeft, 100)
    animation.attachAnimation(猴致远, anim)
    anim.addAnimationFrame(img`
        . . . . f f f f f . . . . . . . 
        . . . f e e e e e f . . . . . . 
        . . f d d d d e e e f . . . . . 
        . c d f d d f d e e f f . . . . 
        . c d f d d f d e e d d f . . . 
        c d e e d d d d e e b d c . . . 
        c d d d d c d d e e b d c . f f 
        c c c c c d d d e e f c . f e f 
        . f d d d d d e e f f . . f e f 
        . . f f f f f e e e e f . f e f 
        . . . . f e e e e e e e f f e f 
        . . . f e f f e f e e e e f f . 
        . . . f e f f e f e e e e f . . 
        . . . f d b f d b f f e f . . . 
        . . . f d d c d d b b d f . . . 
        . . . . f f f f f f f f f . . . 
        `)
    anim.addAnimationFrame(img`
        . . . . f f f f f . . . . . . . 
        . . . f e e e e e f . . . . . . 
        . . f d d d d e e e f . . . . . 
        . c d f d d f d e e f . . . . . 
        . c d f d d f d e e f f . . . . 
        c d e e d d d d e e d d f . . . 
        c d d d d c d d e e b d c . . . 
        c c c c c d d e e e b d c . f f 
        . f d d d d e e e f f c . f e f 
        . f f f f f f e e e e f . f e f 
        . f f f f e e e e e e e f f e f 
        f d d f d d f e f e e e e f f . 
        f d b f d b f e f e e e e f . . 
        f f f f f f f f f f f f e f . . 
        . . . . . . . . . f c d d f . . 
        . . . . . . . . . . f f f f . . 
        `)
    anim.addAnimationFrame(img`
        . . . . f f f f f . . . . . . . 
        . . . f e e e e e f . . . . . . 
        . . f d d d d e e e f f . . . . 
        . c d d d d d d e e d d f . . . 
        . c d f d d f d e e b d c . . . 
        c d d f d d f d e e b d c . f f 
        c d e e d d d d e e f c . f e f 
        c d d d d c d e e e f . . f e f 
        . f c c c d e e e f f . . f e f 
        . . f f f f f e e e e f . f e f 
        . . . . f e e e e e e e f f f . 
        . . f f e f e e f e e e e f . . 
        . f e f f e e f f f e e e f . . 
        f d d b d d c f f f f f f b f . 
        f d d c d d d f . . f c d d f . 
        . f f f f f f f . . . f f f . . 
        `)
    anim.addAnimationFrame(img`
        . . . . f f f f f . . . . . . . 
        . . . f e e e e e f f f . . . . 
        . . f d d d e e e e d d f . . . 
        . c d d d d d e e e b d c . . . 
        . c d d d d d d e e b d c . . . 
        c d d f d d f d e e f c . f f . 
        c d d f d d f d e e f . . f e f 
        c d e e d d d d e e f . . f e f 
        . f d d d c d e e f f . . f e f 
        . . f f f d e e e e e f . f e f 
        . . . . f e e e e e e e f f f . 
        . . . . f f e e e e e b f f . . 
        . . . f e f f e e c d d f f . . 
        . . f d d b d d c f f f . . . . 
        . . f d d c d d d f f . . . . . 
        . . . f f f f f f f . . . . . . 
        `)
    anim = animation.createAnimation(ActionKind.JumpRight, 1000)
    animation.attachAnimation(猴致远, anim)
    anim.addAnimationFrame(img`
        . . . . . . . f f f f f . . . . 
        . . . . . . f e e e e e f . . . 
        . . . . . f e e e d d d d f . . 
        . . . . . f e e d f d d f d c . 
        . . . . f f e e d f d d f d c . 
        . . . f d d e e d d d d e e d c 
        . . . c d b e e d d c d d d d c 
        f f . c d b e e e d d c c c c c 
        f e f . c f f e e e d d d d f . 
        f e f . f e e e e f f f f f f . 
        f e f f e e e e e e e f f f f . 
        . f f e e e e f e f d d f d d f 
        . . f e e e e f e f b d f b d f 
        . . f e f f f f f f f f f f f f 
        . . f d d c f . . . . . . . . . 
        . . f f f f . . . . . . . . . . 
        `)
    anim = animation.createAnimation(ActionKind.JumpLeft, 1000)
    animation.attachAnimation(猴致远, anim)
    anim.addAnimationFrame(img`
        . . . . f f f f f . . . . . . . 
        . . . f e e e e e f . . . . . . 
        . . f d d d d e e e f . . . . . 
        . c d f d d f d e e f . . . . . 
        . c d f d d f d e e f f . . . . 
        c d e e d d d d e e d d f . . . 
        c d d d d c d d e e b d c . . . 
        c c c c c d d e e e b d c . f f 
        . f d d d d e e e f f c . f e f 
        . f f f f f f e e e e f . f e f 
        . f f f f e e e e e e e f f e f 
        f d d f d d f e f e e e e f f . 
        f d b f d b f e f e e e e f . . 
        f f f f f f f f f f f f e f . . 
        . . . . . . . . . f c d d f . . 
        . . . . . . . . . . f f f f . . 
        `)
    anim = animation.createAnimation(ActionKind.FallRight, 1000)
    animation.attachAnimation(猴致远, anim)
    anim.addAnimationFrame(img`
        . . . . . . . f f f f f . . . . 
        . . . . f f f e e e e e f . . . 
        . . . f d d e e e e d d d f . . 
        . . . c d b e e e d d d d d c . 
        . . . c d b e e d d d d d d c . 
        . f f . c f e e d f d d f d d c 
        f e f . . f e e d f d d f d d c 
        f e f . . f e e d d d d e e d c 
        f e f . . f f e e d c d d d f . 
        f e f . f e e e e e d f f f . . 
        . f f f e e e e e e e f . . . . 
        . . f f b e e e e e f f . . . . 
        . . f f d d c e e f f e f . . . 
        . . . . f f f c d d b d d f . . 
        . . . . . f f d d d c d d f . . 
        . . . . . . f f f f f f f . . . 
        `)
    anim = animation.createAnimation(ActionKind.FallLeft, 1000)
    animation.attachAnimation(猴致远, anim)
    anim.addAnimationFrame(img`
        . . . . f f f f f . . . . . . . 
        . . . f e e e e e f f f . . . . 
        . . f d d d e e e e d d f . . . 
        . c d d d d d e e e b d c . . . 
        . c d d d d d d e e b d c . . . 
        c d d f d d f d e e f c . f f . 
        c d d f d d f d e e f . . f e f 
        c d e e d d d d e e f . . f e f 
        . f d d d c d e e f f . . f e f 
        . . f f f d e e e e e f . f e f 
        . . . . f e e e e e e e f f f . 
        . . . . f f e e e e e b f f . . 
        . . . f e f f e e c d d f f . . 
        . . f d d b d d c f f f . . . . 
        . . f d d c d d d f f . . . . . 
        . . . f f f f f f f . . . . . . 
        `)
    anim = animation.createAnimation(ActionKind.CrouchRight, 1000)
    animation.attachAnimation(猴致远, anim)
    anim.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . f f f f f . . . . 
        . . . . . . f e e e e e f . . . 
        . . . . . f e e e d d d d f . . 
        . . . . f f e e d d d d d f . . 
        . . . f d d e e d f f d d d c . 
        . . . c d b e e d d d d e e d c 
        . . . c d b e e d d c d d f f c 
        . . . . f e e e f f f e f d d f 
        . . . . f f f f f e e e f d d f 
        . f f . f f e e e e e f f f f f 
        . f e . f f e e e f f e f f f . 
        . f e f f f b b f f e f d b f . 
        . f e f f b d d f e e f d d f . 
        . . f f f f f f f f f f f f f . 
        `)
    anim = animation.createAnimation(ActionKind.CrouchLeft, 1000)
    animation.attachAnimation(猴致远, anim)
    anim.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f . . . . . . . 
        . . . f e e e e e f . . . . . . 
        . . f d d d d e e e f . . . . . 
        . . f d d d d d e e f f . . . . 
        . c d d d f f d e e d d f . . . 
        c d e e d d d d e e b d c . . . 
        c f f d d c d d e e b d c . . . 
        f d d f e f f f e e e f . . . . 
        f d d f e e e f f f f f . . . . 
        f f f f f e e e e e f f . f f . 
        . f f f e f f e e e f f . e f . 
        . f b d f e f f b b f f f e f . 
        . f d d f e e f d d b f f e f . 
        . f f f f f f f f f f f f f . . 
        `)
}
function 初始化变量 () {
    scene.setBackgroundColor(1)
    当前关卡 = 1
    关卡总量 = 5
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile17`, function (sprite, location) {
    game.splash("勇敢的勇士, 我仿佛爱上你了!")
    当前关卡 = 1
    更新地图()
})
scene.onOverlapTile(SpriteKind.Brick, assets.tile`myTile19`, function (sprite, location) {
    sprite.vy = 0
    tiles.setTileAt(tiles.getTileLocation(sprite.x / 16, sprite.y / 16), assets.tile`myTile`)
    tiles.setWallAt(tiles.getTileLocation(sprite.x / 16, sprite.y / 16), true)
    sprite.destroy()
})
scene.onHitWall(SpriteKind.Sword2, function (sprite, location) {
    sprite.x += -10
})
function 更新地图 () {
    清除精灵()
    if (当前关卡 == 1) {
        tiles.setTilemap(tilemap`级别1`)
    } else if (当前关卡 == 2) {
        tiles.setTilemap(tilemap`级别3`)
    } else if (当前关卡 == 3) {
        tiles.setTilemap(tilemap`级别4`)
    } else if (当前关卡 == 4) {
        tiles.setTilemap(tilemap`级别5`)
    } else if (当前关卡 == 5) {
        tiles.setTilemap(tilemap`级别6`)
    } else if (当前关卡 == 6) {
        tiles.setTilemap(tilemap`级别7`)
    }
    初始化地图信息()
}
scene.onHitWall(SpriteKind.Sword, function (sprite, location) {
    sprite.x += 10
})
function 创建指示牌 () {
    第1关创建指示牌 = true
    mySprite = sprites.create(img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f111111111111111111111111111111111111111111111111111111111111111111111111111111f
        f111111111111111111111111111111111111111111111111111111111111111111111111111111f
        f111111111111111111111111111111111111111111111111111111111111111111111111111111f
        f111111111111111111111111111111111111111111111111111111111111111111111111111111f
        f111111111111111111111111111111111111111111111ff1111111111111111111111111111111f
        f1111111111111111111111111111111111111111111ffffff11111111111111111111111111111f
        f111111111111111111111111111111111111111111ffffffff11111111111111111111fff11111f
        f11111111111111151511111111111111111111111ffff11ffff1111111ffff11111111fff11111f
        f11111111111111f555ff11111111111111111111fff11111fff11111fffffff111111ffff11111f
        f1111111111111f152516f1111111111111111111ff111111fff1111fffffffff11111ffff11111f
        f111111111111f16666616f11111111111111111fff1111111111111fff1111ff1111fffff11111f
        f111111111111f66ffff61f11111111111111111ff11111111111111ff11111ff1111ffff111111f
        f111111111111f6ffddff6f1111111111111111fff1111111111111ff111111ff111ffff1111111f
        f11111111111f6fdfddfdf6f111111111111111fff111111111111ff111111fff111ffff1111111f
        f11111111111f6fd3dd3df6f111111111111111fff111111111111ff111111fff111fff11111111f
        f11111111111f66fddddf66f11111111111111fff1111111111111ff11111fff111fff111111111f
        f1111111111f66f3ffff3f66f1111111111111ff11111111111111ff1111ffff111fff111111111f
        f11111111111ffd353353dff11111111111111ff11111111111111ff111ffff1111ff1111111111f
        f11111111111fddf3553fddf11111111111111ff11111ffffff111ff1fffff11111ff1111111111f
        f111111111111ff333333ff111111111111111ff11111fffff1111fffffff11111ff11111111111f
        f111111111111f33533533f111111111111111ff11111ffff11111ffffff111111ff11111111111f
        f111111111111ffffffffff111111111111111ff1111fffff11111fffff11111111111111111111f
        f11111111111111ff11ff11111111111111111fffffffffff11111fff1111111111111111111111f
        f1111111111111111111111111111111111111fffffff1fff111111111111111111111111111111f
        f11111111111111111111111111111111111111fffff11ff11111111111111111ffff1111111111f
        f111111111111111111111111111111111111111111111ff11111111111111111ffff1111111111f
        f111111111111111111111111111111111111111111111ff11111111111111111ffff1111111111f
        f111111111111111111111111111111111111111111111111111111111111111111111111111111f
        f111111111111111111111111111111111111111111111111111111111111111111111111111111f
        f111111111111111111111111111111111111111111111111111111111111111111111111111111f
        f111111111111111111111111111111111111111111111111111111111111111111111111111111f
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `, SpriteKind.Trap)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile0`)
    mySprite.x += 64
    mySprite.y += -7
    for (let 值 of tiles.getTilesByType(assets.tile`myTile2`)) {
        tiles.setWallAt(值, true)
    }
    anim = animation.createAnimation(ActionKind.Working, 1000)
    animation.attachAnimation(mySprite, anim)
    anim.addAnimationFrame(img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f111111111111111111111111111111111111111111111111111111111111111111111111111111f
        f111111111111111111111111111111111111111111111111111111111111111111111111111111f
        f111111111111111111111111111111111111111111111111111111111111111111111111111111f
        f111111111111111111111111111111111111111111111111111111111111111111111111111111f
        f111111111111111111111111111111111111111111111ff1111111111111111111111111111111f
        f1111111111111111111111111111111111111111111ffffff11111111111111111111111111111f
        f111111111111111111111111111111111111111111ffffffff11111111111111111111fff11111f
        f11111111111111151511111111111111111111111ffff11ffff1111111ffff11111111fff11111f
        f11111111111111f555ff11111111111111111111fff11111fff11111fffffff111111ffff11111f
        f1111111111111f152516f1111111111111111111ff111111fff1111fffffffff11111ffff11111f
        f111111111111f16666616f11111111111111111fff1111111111111fff1111ff1111fffff11111f
        f111111111111f66ffff61f11111111111111111ff11111111111111ff11111ff1111ffff111111f
        f111111111111f6ffddff6f1111111111111111fff1111111111111ff111111ff111ffff1111111f
        f11111111111f6fdfddfdf6f111111111111111fff111111111111ff111111fff111ffff1111111f
        f11111111111f6fd3dd3df6f111111111111111fff111111111111ff111111fff111fff11111111f
        f11111111111f66fddddf66f11111111111111fff1111111111111ff11111fff111fff111111111f
        f1111111111f66f3ffff3f66f1111111111111ff11111111111111ff1111ffff111fff111111111f
        f11111111111ffd353353dff11111111111111ff11111111111111ff111ffff1111ff1111111111f
        f11111111111fddf3553fddf11111111111111ff11111ffffff111ff1fffff11111ff1111111111f
        f111111111111ff333333ff111111111111111ff11111fffff1111fffffff11111ff11111111111f
        f111111111111f33533533f111111111111111ff11111ffff11111ffffff111111ff11111111111f
        f111111111111ffffffffff111111111111111ff1111fffff11111fffff11111111111111111111f
        f11111111111111ff11ff11111111111111111fffffffffff11111fff1111111111111111111111f
        f1111111111111111111111111111111111111fffffff1fff111111111111111111111111111111f
        f11111111111111111111111111111111111111fffff11ff11111111111111111ffff1111111111f
        f111111111111111111111111111111111111111111111ff11111111111111111ffff1111111111f
        f111111111111111111111111111111111111111111111ff11111111111111111ffff1111111111f
        f111111111111111111111111111111111111111111111111111111111111111111111111111111f
        f111111111111111111111111111111111111111111111111111111111111111111111111111111f
        f111111111111111111111111111111111111111111111111111111111111111111111111111111f
        f1111111111111111111111111111111111111111111111111111111111111111111f1111111111f
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        .f1111ff11ff11ff111111111fff1111f111111f111ff111ff11111111ff11f1111ff111ff1111f.
        .f1111ff1fff11ff1111ff111f..f111ff1111fff1f..f1ff.f11111ff.f11f111f.ff1fff111ff.
        .f111f.ff..f1ff.f111f.f1f...ff1f.ff11f..f1f..ff...f1111f....ff.f1f...f1f.f11ff..
        ..f1f..ff..ff...f11f..f1f....fff..f11f..ff...ff...f11ff.....ff.ff.....f..fff....
        ..ff...f.........ff...ff......f...ffff............fff.......f...f.........ff....
        `)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.BrickDown, function (sprite, otherSprite) {
    otherSprite.vy = 50
    otherSprite.setFlag(SpriteFlag.AutoDestroy, true)
    if (sprite.top < otherSprite.top) {
        sprite.bottom = otherSprite.top
        sprite.vy = 0
        if (controller.A.isPressed()) {
            sprite.vy = -320
        }
    }
})
function 创建云朵 () {
    mySprite = sprites.create(img`
        ................................................
        ................................................
        ....................fff.........................
        ..................ff111fff......................
        ................ff11111111ff.......fff..........
        ......ffff.....ff11111111111ff...ff111ff........
        ....fff11fffffff1111111111111ffff1111111ff......
        ..fff111111111111111111111111111111111111f......
        .ff11111111111111111111111111111111111111f......
        .f11111111111111111111111111111111fff1111ff.....
        .ff111111111111fffffff111111111ffff1fff111f.....
        ..f1111111111ff111111ff1111111f1111111ff11f.....
        ..ff11111111ff11111111f111111f111111111f11f.....
        ...f1111111f1111111111f1111111111111111f11f.....
        ....f11111111111111111111111111111111111111ff...
        ....f111111111111111111111111111111111111111ff..
        ...f11111111111111111111111111111111111111111f..
        ...f1111111111111111111111111111f1111111111111f.
        ..ff11111111111111f1111111111111f1111111111111f.
        ..f1111111111111111ff111111111ff11111111111111f.
        ..f111111111111111111ffffffffff111111111111111f.
        ..f1111111111111111111111111111111111111111111f.
        ..f111111111111111111111111111111111111111111f..
        ..ff11111111111111111111111111111111111111111f..
        ...ff1111111111111111111111111111111111111111f..
        ...ff111111111111111111111111ffffff111111111ff..
        ...f111111111111111111111111ff....ff1111111ff...
        ..f1111111111111111111111fff.......fffffffff....
        ..f1111111111111111111111f......................
        ..ff1111111111111111ffffff......................
        ...ff111111111f1111ff...........................
        ....fffffffffffffff.............................
        `, SpriteKind.Trap)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile3`)
    mySprite.x += 8
    anim = animation.createAnimation(ActionKind.Working, 1000)
    animation.attachAnimation(mySprite, anim)
    anim.addAnimationFrame(img`
        ................................................
        ................................................
        ....................222.........................
        ..................22111222......................
        ................221111111122.......222..........
        ......2222.....221111111111122...2211122........
        ....22211222222211111111111112222111111122......
        ..2221111111111111111111111111111111111112......
        .22111111111111111111111111111111111111112......
        .211111111111111111111111111111111111111122.....
        .221111111111111111111111111111111111111112.....
        ..21111111111111111111111111111111111111112.....
        ..22111111111111111111111111111111111111112.....
        ...2111111112222222222211111222222222211112.....
        ....21111111211111111111111121111111111111122...
        ....211111112211111111111111221111111111111122..
        ...2111111111111111111111111111111111111111112..
        ...21111111111111111111111111111111111111111112.
        ..221111111111111111111111111111111111111111112.
        ..211111111111111111111111111111111111111111112.
        ..211111111111111111111111111111111111111111112.
        ..211111111111111111222222222211111111111111112.
        ..21111111111111111111111111111111111111111112..
        ..22111111111111111111111111111111111111111112..
        ...2211111111111111111111111111111111111111112..
        ...2211111111111111111111111122222211111111122..
        ...211111111111111111111111122....22111111122...
        ..21111111111111111111111222.......222222222....
        ..211111111111111111111112......................
        ..221111111111111111222222......................
        ...221111111112111122...........................
        ....222222222222222.............................
        `)
}
function 创建草丛 () {
    mySprite = sprites.create(img`
        ..........88..............88....
        ...88.....88.......88.....88....
        ...878...878.......878...878....
        ...8768.8878.......8768.8878....
        ...8678.8778.88....8678.8778.88.
        ...887888778.868...887888778.868
        ...88768676888868888876867688886
        88f88778778867866888877877886786
        87888778768776888888877876877688
        86768676766768877688867676676887
        .8776676767788778887667676778877
        ..877678767687788687767876768778
        ..f87678667867888668767866786788
        ...87878668866868668787866886686
        ...86868668866868888686866886686
        ...86866668866868888686666886686
        `, SpriteKind.Trap)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile6`)
    mySprite.x += 8
    anim = animation.createAnimation(ActionKind.Working, 1000)
    animation.attachAnimation(mySprite, anim)
    anim.addAnimationFrame(img`
        ..........22..............22....
        ...22.....22.......22.....22....
        ...272...272.......272...272....
        ...2762.2272.......2762.2272....
        ...2672.2772.22....2672.2772.22.
        ...227222772.262...227222772.262
        ...22762676222262222276267622226
        22f22772772267266222277277226726
        27222772762776222222277276277622
        26762676766762277622267676676227
        .2776676767722772227667676772277
        ..277672767627722627767276762772
        ..f27672667267222662767266726722
        ...27272662266262662727266226626
        ...26262662266262222626266226626
        ...26266662266262222626666226626
        `)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Sword3, function (sprite, otherSprite) {
    if (otherSprite.vy > 0) {
        猴致远是否活着 = false
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Sword, function (sprite, otherSprite) {
    if (otherSprite.right < sprite.right && otherSprite.top <= sprite.top) {
        猴致远是否活着 = false
    } else if (sprite.top < otherSprite.top) {
        sprite.bottom = otherSprite.top
        sprite.vy = 0
        if (controller.A.isPressed()) {
            sprite.vy = -320
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile14`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`myTile15`)
    for (let 值 of sprites.allOfKind(SpriteKind.Tool)) {
        if (值.x < 400) {
            值.vx = 50
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile11`, function (sprite, location) {
    if (猴致远.tileKindAt(TileDirection.Top, assets.tile`myTile11`) && 猴致远.vy < 0) {
        tiles.setWallAt(location, true)
        tiles.setTileAt(location, assets.tile`myTile10`)
        music.baDing.play()
    }
})
let anim: animation.Animation = null
let 关卡总量 = 0
let 当前关卡 = 0
let 猴致远: Sprite = null
let 脸是否向左 = false
let mySprite: Sprite = null
let 第1关创建指示牌 = false
let 猴致远是否活着 = false
初始化变量()
创建英雄()
更新地图()
game.showLongText("你能拯救公主吗?", DialogLayout.Top)
game.onUpdate(function () {
    if (猴致远是否活着) {
        if (猴致远.vx < 0) {
            脸是否向左 = true
        } else if (猴致远.vx > 0) {
            脸是否向左 = false
        }
        if (controller.down.isPressed()) {
            if (脸是否向左) {
                animation.setAction(猴致远, ActionKind.CrouchLeft)
            } else {
                animation.setAction(猴致远, ActionKind.CrouchRight)
            }
        } else if (猴致远.vy < 0 && !(猴致远.isHittingTile(CollisionDirection.Bottom))) {
            if (脸是否向左) {
                animation.setAction(猴致远, ActionKind.JumpLeft)
            } else {
                animation.setAction(猴致远, ActionKind.JumpRight)
            }
        } else if (猴致远.vy > 0 && !(猴致远.isHittingTile(CollisionDirection.Bottom))) {
            if (脸是否向左) {
                animation.setAction(猴致远, ActionKind.FallLeft)
            } else {
                animation.setAction(猴致远, ActionKind.FallRight)
            }
        } else if (猴致远.vx < 0) {
            animation.setAction(猴致远, ActionKind.WalkLeft)
        } else if (猴致远.vx > 0) {
            animation.setAction(猴致远, ActionKind.WalkRight)
        } else {
            if (脸是否向左) {
                animation.setAction(猴致远, ActionKind.IdleLeft)
            } else {
                animation.setAction(猴致远, ActionKind.Idle)
            }
        }
    }
})
game.onUpdate(function () {
    if (当前关卡 == 3) {
        if (猴致远.x >= 140 && 猴致远.x <= 202) {
            for (let 值 of sprites.allOfKind(SpriteKind.Sword)) {
                if (猴致远.y <= 值.y && 值.x <= 0) {
                    值.vx = 360
                }
            }
        }
        if (猴致远.x >= 215 && 猴致远.x <= 265) {
            for (let 值 of sprites.allOfKind(SpriteKind.Sword2)) {
                if (猴致远.y >= 值.y && 值.x >= 400) {
                    值.vx = -150
                }
            }
        }
    }
})
game.onUpdate(function () {
    if (!(猴致远是否活着) && 猴致远.isHittingTile(CollisionDirection.Bottom)) {
        game.splash("猴致远过早的离开了我们~")
        更新地图()
    }
    if (!(猴致远是否活着)) {
        animation.setAction(猴致远, ActionKind.Die)
    }
    if (猴致远.y > 170) {
        猴致远是否活着 = false
    }
})
game.onUpdate(function () {
    if (当前关卡 == 4) {
        for (let 值 of sprites.allOfKind(SpriteKind.Sword3)) {
            if (猴致远.x >= 值.x && 值.y <= 60) {
                值.setFlag(SpriteFlag.Invisible, false)
                值.vy = 1000
            }
        }
    }
})
game.onUpdate(function () {
    if (当前关卡 == 6) {
        for (let 值 of sprites.allOfKind(SpriteKind.Stone)) {
            if (猴致远.left > 值.left) {
                值.vy = 160
            }
        }
    }
})
