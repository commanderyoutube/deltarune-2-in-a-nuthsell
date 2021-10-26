controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.stopAnimation(animation.AnimationTypes.All, mySprite2)
    animation.runImageAnimation(
    mySprite2,
    [img`
        . . . . . . f 7 7 f . . . . . . 
        . . . . f f 7 7 7 7 f f . . . . 
        . . . f 7 7 7 7 7 7 7 7 f . . . 
        . . f f 7 7 7 7 7 7 7 7 f f . . 
        . f f 7 7 7 7 7 7 7 7 7 7 f f . 
        f 7 7 7 7 f 7 f f 7 f 7 7 7 7 f 
        . f f f f f f f f f f f f f f . 
        . f f f f f f f f f f f f f f . 
        . f f f f f f f f f f f f f f . 
        . . f f f f f f f f f f f f . . 
        . . 3 3 3 3 3 7 7 7 f f f . . . 
        . 3 3 3 3 7 7 7 7 7 7 f . . . . 
        3 3 3 . f 7 7 7 7 7 7 f . . . . 
        3 . . . f 7 7 7 7 7 7 f . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . f f . . . . . . . 
        . . . . . . f 7 7 f . . . . . . 
        . . . . f f 7 7 7 7 f f . . . . 
        . . . f 7 7 7 7 7 7 7 7 f . . . 
        . . . f 7 7 7 7 7 7 7 7 f . . . 
        . f f f 7 7 7 7 7 7 7 7 f f f . 
        f 7 7 7 7 f 7 f f f 7 f 7 7 7 f 
        . f f f f f f f f f f f f f f . 
        . f f f f f f f f f f f f f f . 
        . f f f f f f f f f f f f f f . 
        . . f f f f f f f f f f f f . . 
        . . . 3 3 3 3 f f f f f f . . . 
        . 3 3 3 3 f f f f f f f . . . . 
        3 3 3 . f 7 7 7 7 7 7 f . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . f f f . . . . . . . . . 
        `,img`
        . . . . . . f 7 7 f . . . . . . 
        . . . . f f 7 7 7 7 f f . . . . 
        . . . f 7 7 7 7 7 7 7 7 f . . . 
        . . f f 7 7 7 7 7 7 7 7 f f . . 
        . f f 7 7 7 7 7 7 7 7 7 7 f f . 
        f 7 7 7 7 f 7 f f 7 f 7 7 7 7 f 
        . . f f f f f f f f f f f f . . 
        . f f f f f f f f f f f f f f . 
        . f f f f f f f f f f f f f f . 
        . . f f f f f f f f f f f f . . 
        . . . f f f 7 7 7 7 f f f . . . 
        . . 3 3 3 3 f f f 7 7 f . . . . 
        . 3 3 3 f 7 7 7 7 7 7 f . . . . 
        3 3 . . f 7 7 7 7 7 7 f . . . . 
        3 . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . f f . . . . . . . 
        . . . . . . f 7 7 f . . . . . . 
        . . . . f f 7 7 7 7 f f . . . . 
        . . . f 7 7 7 7 7 7 7 7 f . . . 
        . . . f 7 7 7 7 7 7 7 7 f . . . 
        . f f f 7 7 7 7 7 7 7 7 f f f . 
        f 7 7 7 f 7 f f f 7 f 7 7 7 7 f 
        . f f f f f f f f f f f f f f . 
        . f f f f f f f f f f f f f f . 
        . f f f f f f f f f f f f f f . 
        . . f f f f f f f f f f f f . . 
        . . . f f f f f f f f f f . . . 
        . . 3 3 3 3 3 3 f f f f . . . . 
        . 3 3 3 3 3 7 7 7 7 7 f . . . . 
        3 3 3 3 . f f f f f f f . . . . 
        . . . . . . . . . f f f . . . . 
        `],
    50,
    false
    )
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.stopAnimation(animation.AnimationTypes.All, mySprite2)
    animation.runImageAnimation(
    mySprite2,
    [img`
        . . . . . f f 7 7 f f . . . . . 
        . . . . f f 7 7 7 7 f f . . . . 
        . . . f f 7 7 7 7 7 7 f f . . . 
        . . f f 7 7 7 7 7 7 7 7 f f . . 
        . f f 7 7 7 7 7 7 7 7 7 7 f f . 
        f 7 7 7 7 f f f f f f 7 7 7 7 f 
        . f f f f 7 7 f f 7 7 f f f f . 
        . f f f 7 1 f 7 7 f 1 7 f f f . 
        . f f f 7 1 f 7 7 f 1 7 f f f . 
        . . f f f 7 7 f f 7 7 f f f . . 
        . . . f f f f f f f f f f . . . 
        . . . f 3 3 3 3 7 7 f f . . . . 
        . . . 3 3 3 7 7 7 7 7 f . . . . 
        . . 3 3 f 7 7 7 7 7 7 f . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . f 7 7 f . . . . . . 
        . . . . . f f 7 7 f f . . . . . 
        . . . . f f 7 7 7 7 f f . . . . 
        . . . f f 7 7 7 7 7 7 f f . . . 
        . . f f 7 7 7 7 7 7 7 7 f f . . 
        . f f 7 7 7 7 7 7 7 7 7 7 f f . 
        f 7 7 7 7 f f f f f f 7 7 7 7 f 
        . f f f f 7 7 f f 7 7 f f f f . 
        . . f f 7 1 f 7 7 f 1 7 f f . . 
        . . f f 7 1 f 7 7 f 1 7 f f . . 
        . . . f f 7 7 f f 7 7 f f . . . 
        . . . 3 3 3 3 7 7 7 f . . . . . 
        . . 3 3 3 7 7 7 7 7 7 f . . . . 
        . 3 3 . f 7 7 7 7 7 7 f . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . f f f . . . . . . . . . 
        `,img`
        . . . . . f f 7 7 f f . . . . . 
        . . . . f f 7 7 7 7 f f . . . . 
        . . . f f 7 7 7 7 7 7 f f . . . 
        . . f f 7 7 7 7 7 7 7 7 f f . . 
        . f f 7 7 7 7 7 7 7 7 7 7 f f . 
        f 7 7 7 7 f f f f f f 7 7 7 7 f 
        . f f f f 7 7 f f 7 7 f f f f . 
        . . f f 7 1 f 7 7 f 1 7 f f . . 
        . . f f 7 1 f 7 7 f 1 7 f f . . 
        . . f f f 7 7 f f 7 7 f f f . . 
        . . . f f f f f f f f f f . . . 
        . . . 3 3 3 7 7 7 7 7 f . . . . 
        . 3 3 3 f 7 7 7 7 7 7 f . . . . 
        3 3 . . f 7 7 7 7 7 7 f . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . f 7 7 f . . . . . . 
        . . . . . f 7 7 7 7 f . . . . . 
        . . . . f 7 7 7 7 7 7 f . . . . 
        . . . f 7 7 7 7 7 7 7 7 f . . . 
        . . f 7 7 7 7 7 7 7 7 7 7 f . . 
        . f 7 7 7 7 7 7 7 7 7 7 7 7 f . 
        f 7 7 7 7 f f f f f f 7 7 7 7 f 
        . f f f f 7 7 f f 7 7 f f f f . 
        . . f f 7 b f 7 7 f b 7 f f . . 
        . . f f 7 1 f 7 7 f 1 7 f f . . 
        . . . f f 7 7 f f 7 7 f f . . . 
        . . . 3 3 3 3 7 7 f f f . . . . 
        . . 3 3 3 3 3 7 7 7 7 f . . . . 
        . 3 3 3 3 7 f 7 7 7 7 f . . . . 
        3 3 3 . . f f f f f f f . . . . 
        3 3 . . . . . . . f f f . . . . 
        `],
    50,
    false
    )
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.stopAnimation(animation.AnimationTypes.All, mySprite2)
    animation.runImageAnimation(
    mySprite2,
    [img`
        ........................
        .....ffff...............
        ...fff77fff.............
        ..fff7777fff............
        .fff777777fff...........
        fff777777777ff..........
        7777ffffff7777f.........
        .fff77ff77fff...........
        fff71f77f17fff..........
        fff71f77f17fff..........
        .fff77ff77fff...........
        fddddfffffff............
        fbbbbf7777f77...........
        fbbbbf7777f777..........
        .fccf77777f7f77.........
        ..ffffffff7fff7.........
        ....ff..ff..............
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `,img`
        ........................
        ......ffff..............
        ....fff77fff............
        ...fff7777fff...........
        ..fff777777fff..........
        .ff7777777777ff.........
        f7777ffffff7777f........
        ..fff77ff77fff..........
        .fff71f77f17fff.........
        .fff71f77f17fff.........
        fdfff77ff77fff..........
        fbfffffffff777..........
        fbf7f77777777...........
        fcf.f77333f7............
        .ff.f773337f............
        ....fff333ff............
        .....f333ff.............
        ....3333................
        ....333.................
        ....33..................
        ........................
        ........................
        ........................
        ........................
        `,img`
        ........................
        .......ff...............
        ......f77f..............
        .....ff77ff.............
        ...fff7777fff...........
        ..fff777777fff..........
        ..fff777777fff..........
        .ff7777777777fff........
        f7777ff77ff77777f.......
        .ffff77ff77ffff.........
        fdff71f77f17fff.........
        fbff71f77f17ff..........
        fbfff77ff77ff...........
        fcf.fff77ff77...........
        .ff.f77777f77...........
        ....ffffff777...........
        .....ffff7ff7...........
        ........77ff77..........
        .........333............
        ........33333...........
        ........33333...........
        .......3333333..........
        .......3333333..........
        ......333333333.........
        `,img`
        ......ffff..............
        ....fff77fff............
        ...fff7777fff...........
        ..fff777777fff..........
        .fff777777777ff.........
        f7777ffffff7777f........
        ..fff77ff77fff......333.
        .fff71f77f17fff....3333.
        .fff71f77f17fff...3333..
        .ffff77ff77ffff.33333...
        fdffffffffffff773333....
        fbffffffffff777f333.....
        fbf7f777777f777ff7......
        fcf.f777777f77777.......
        .ff.f777777f............
        ....ffffffff............
        .....ff..ff.............
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `],
    50,
    false
    )
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.stopAnimation(animation.AnimationTypes.All, mySprite2)
    animation.runImageAnimation(
    mySprite2,
    [img`
        . . . . f f f f f f . . . . . . 
        . . . f 7 7 7 7 7 7 f f . . . . 
        . . f 7 7 7 7 7 7 7 7 f f . . . 
        . . f 7 7 7 7 7 7 7 7 7 f . . . 
        . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
        f 7 7 7 f f f f 7 7 7 7 7 7 f . 
        . f f f f f 7 7 f f f f f f . . 
        . f f f f 7 f 1 7 f f f f f . . 
        . . f f f 7 f 1 7 f f f f f . . 
        . . . f f f 7 7 f f f f f . . . 
        . . . f 7 f f f f f f f . . . . 
        . . . f 7 3 3 3 3 f . . . . . . 
        . . . f 7 7 7 3 3 3 f . . . . . 
        . . . f 7 7 7 7 7 3 3 f . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . f 7 7 7 7 7 f . . . . . 
        . . . f 7 7 7 7 7 7 7 f . . . . 
        . . f 7 7 7 7 7 7 7 7 7 f . . . 
        . f 7 7 7 7 7 7 7 7 7 7 7 f f . 
        f 7 7 7 f f f f 7 7 7 7 7 7 7 f 
        . f f f f f 7 7 f f f f f f f . 
        . f f f f 7 f 1 7 f f f f f . . 
        . . f f f 7 f 1 7 f f f f . . . 
        . . . f f f 7 7 3 3 3 f f . . . 
        . . . f 7 7 7 7 7 7 3 3 3 f . . 
        . . . f 7 7 7 7 7 7 7 3 3 3 f . 
        . . f f 7 7 f 7 7 f f f f f . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `,img`
        . . . . f f f f f f . . . . . . 
        . . . f 7 7 7 7 7 7 f f . . . . 
        . . f 7 7 7 7 7 7 7 7 f f . . . 
        . . f 7 7 7 7 7 7 7 7 7 f . . . 
        . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
        f 7 7 7 f f f f 7 7 7 7 7 7 f . 
        . f f f f f 7 7 f f f f f f . . 
        . f f f f 7 f 1 7 f f f f f . . 
        . . f f f 7 f 1 7 f f f f f . . 
        . . . f f f 7 7 f f f f f . . . 
        . . . f 7 f f f b b f f . . . . 
        . . . f 7 3 3 b d d b 7 f . . . 
        . . . f 7 7 7 b d d b 7 f . . . 
        . . . f 7 7 7 7 b b 3 f . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 7 7 7 7 7 7 f f . . . . 
        . . f 7 7 7 7 7 7 7 7 f f . . . 
        . . f 7 7 7 7 7 7 7 7 7 f . . . 
        . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
        f 7 7 7 f f f f 7 7 7 7 7 7 f . 
        . f f f f f 7 7 f f f f f f . . 
        . f f f f 7 f b 7 f f f f f . . 
        . . f f f 7 f 1 7 f f f f f . . 
        . . . f f f 7 7 f b b f f . . . 
        . . . f 7 3 3 3 b d d b f . . . 
        . . . f 7 7 7 3 b d d b f . . . 
        . . f f 7 7 7 7 7 b b f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `],
    50,
    false
    )
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.stopAnimation(animation.AnimationTypes.All, mySprite2)
    animation.runImageAnimation(
    mySprite2,
    [img`
        . . . . . . f 7 7 7 7 f . . . . . 
        . . . . f f 7 7 7 7 7 7 f . . . . 
        . . . f f 7 7 7 7 7 7 7 7 f . . . 
        . . . f 7 7 7 7 7 7 7 7 7 f . . . 
        . f f f 7 7 7 7 7 7 7 7 7 7 f f . 
        f 7 7 7 7 7 7 7 f f f f 7 7 7 7 f 
        . f f f f f f f 7 7 f f f f f f . 
        . . f f f f f 7 1 f 7 f f f f . . 
        . . f f f f f 7 1 f 7 f f f . . . 
        . . . f f f f f 7 7 f f f . . . . 
        . . . . f f 7 7 3 3 3 3 f . . . . 
        . . . . . f 7 3 3 3 7 7 f . . . . 
        . . . . f 3 3 3 7 7 7 7 f . . . . 
        . . . . . f 7 7 f 7 7 7 f . . . . 
        . . . . . . f f f f f f . . . . . 
        . . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . f 7 7 f . . . . . . 
        . . . . . . f 7 7 7 7 f . . . . . 
        . . . . f f 7 7 7 7 7 7 f . . . . 
        . . . f f 7 7 7 7 7 7 7 7 f . . . 
        . . . f 7 7 7 7 7 7 7 7 7 f . . . 
        . f f f 7 7 7 7 7 7 7 7 7 7 f f . 
        f 7 7 7 7 7 7 7 f f f f 7 7 7 7 f 
        . f f f f f f f 7 7 f f f f f f . 
        . . f f f f f 7 1 f 7 f f f f . . 
        . . f f f f f 7 1 f 7 f f f . . . 
        . . . f f f f f 7 7 3 3 f . . . . 
        . . . . . f 7 7 3 3 3 3 f . . . . 
        . . . . . f 3 3 3 3 7 7 f . . . . 
        . . . . f f 3 3 7 f 7 7 f f . . . 
        . . . . f f f f f f f f f f . . . 
        . . . . . f f . . . f f f . . . . 
        `,img`
        . . . . . . f 7 7 7 7 f . . . . . 
        . . . . f f 7 7 7 7 7 7 f . . . . 
        . . . f f 7 7 7 7 7 7 7 7 f . . . 
        . . . f 7 7 7 7 7 7 7 7 7 f . . . 
        . f f 7 7 7 7 7 7 7 7 7 7 7 f f . 
        f 7 7 7 7 7 7 7 f f f f 7 7 7 7 f 
        . f f f f f f f 7 7 f f f f f f . 
        . . f f f f f 7 1 f 7 f f f f . . 
        . . f f f f f 7 1 f 7 f f f . . . 
        . . . f f f f f 7 7 f f f . . . . 
        . . . . f f 7 7 3 3 3 3 f . . . . 
        . . . . . f 7 3 3 3 7 7 f . . . . 
        . . . . . 3 3 3 7 7 7 7 f . . . . 
        . . . . . f 7 7 f 7 7 7 f . . . . 
        . . . . . . f f f f f f . . . . . 
        . . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . f 7 7 f . . . . . . 
        . . . . . . f 7 7 7 7 f . . . . . 
        . . . . f f 7 7 7 7 7 7 f . . . . 
        . . . f 7 7 7 7 7 7 7 7 7 f . . . 
        . . . f 7 7 7 7 7 7 7 7 7 f . . . 
        . f f 7 7 7 7 7 7 7 7 7 7 7 f f . 
        f 7 7 7 7 7 7 7 f f f f 7 7 7 7 f 
        . f f f f f f f 7 7 f f f f f f . 
        . . f f f f f 7 1 f 7 f f f f . . 
        . . f f f f f 7 1 f 7 f f f . . . 
        . . . f f f 7 f 7 7 3 3 f . . . . 
        . . . . f 7 7 3 3 3 3 7 f . . . . 
        . . . . f 3 3 3 3 7 7 7 f . . . . 
        . . . . 3 3 3 f 7 7 7 7 f f . . . 
        . . . . f f f f f f f f f f . . . 
        . . . . . f f . . . f f f . . . . 
        `],
    50,
    false
    )
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.stopAnimation(animation.AnimationTypes.All, mySprite2)
    animation.runImageAnimation(
    mySprite2,
    [img`
        . . . . . f f 7 7 f f . . . . . 
        . . . . f f 7 7 7 7 f f . . . . 
        . . . f f 7 7 7 7 7 7 f f . . . 
        . . f f 7 7 7 7 7 7 7 7 f f . . 
        . f f 7 7 7 7 7 7 7 7 7 7 f f . 
        f 7 7 7 7 f f f f f f 7 7 7 7 f 
        . f f f f 7 7 f f 7 7 f f f f . 
        . f f f 7 1 f 7 7 f 1 7 f f f . 
        . f f f 7 1 f 7 7 f 1 7 f f f . 
        . . f f f 7 7 f f 7 7 f f f . . 
        . . . f f f f f f f f f f . . . 
        . . . f 3 3 3 3 7 7 f f . . . . 
        . . . 3 3 3 7 7 7 7 7 f . . . . 
        . . 3 3 f 7 7 7 7 7 7 f . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . f 7 7 f . . . . . . 
        . . . . . f f 7 7 f f . . . . . 
        . . . . f f 7 7 7 7 f f . . . . 
        . . . f f 7 7 7 7 7 7 f f . . . 
        . . f f 7 7 7 7 7 7 7 7 f f . . 
        . f f 7 7 7 7 7 7 7 7 7 7 f f . 
        f 7 7 7 7 f f f f f f 7 7 7 7 f 
        . f f f f 7 7 f f 7 7 f f f f . 
        . . f f 7 1 f 7 7 f 1 7 f f . . 
        . . f f 7 1 f 7 7 f 1 7 f f . . 
        . . . f f 7 7 f f 7 7 f f . . . 
        . . . 3 3 3 3 7 7 7 f . . . . . 
        . . 3 3 3 7 7 7 7 7 7 f . . . . 
        . 3 3 . f 7 7 7 7 7 7 f . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . f f f . . . . . . . . . 
        `,img`
        . . . . . f f 7 7 f f . . . . . 
        . . . . f f 7 7 7 7 f f . . . . 
        . . . f f 7 7 7 7 7 7 f f . . . 
        . . f f 7 7 7 7 7 7 7 7 f f . . 
        . f f 7 7 7 7 7 7 7 7 7 7 f f . 
        f 7 7 7 7 f f f f f f 7 7 7 7 f 
        . f f f f 7 7 f f 7 7 f f f f . 
        . . f f 7 1 f 7 7 f 1 7 f f . . 
        . . f f 7 1 f 7 7 f 1 7 f f . . 
        . . f f f 7 7 f f 7 7 f f f . . 
        . . . f f f f f f f f f f . . . 
        . . . 3 3 3 7 7 7 7 7 f . . . . 
        . 3 3 3 f 7 7 7 7 7 7 f . . . . 
        3 3 . . f 7 7 7 7 7 7 f . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . f 7 7 f . . . . . . 
        . . . . . f 7 7 7 7 f . . . . . 
        . . . . f 7 7 7 7 7 7 f . . . . 
        . . . f 7 7 7 7 7 7 7 7 f . . . 
        . . f 7 7 7 7 7 7 7 7 7 7 f . . 
        . f 7 7 7 7 7 7 7 7 7 7 7 7 f . 
        f 7 7 7 7 f f f f f f 7 7 7 7 f 
        . f f f f 7 7 f f 7 7 f f f f . 
        . . f f 7 b f 7 7 f b 7 f f . . 
        . . f f 7 1 f 7 7 f 1 7 f f . . 
        . . . f f 7 7 f f 7 7 f f . . . 
        . . . 3 3 3 3 7 7 f f f . . . . 
        . . 3 3 3 3 3 7 7 7 7 f . . . . 
        . 3 3 3 3 7 f 7 7 7 7 f . . . . 
        3 3 3 . . f f f f f f f . . . . 
        3 3 . . . . . . . f f f . . . . 
        `],
    50,
    false
    )
})
let mySprite2: Sprite = null
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddfffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffddddddffddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddffddfffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffdddddddddfdddddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddfdddddfffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddfffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffdddddddddddddddddddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddddddddddddfffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffddddddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddddffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffdddddddddddddddddddfffddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddddddddddddfffddfffffffffffffffffffffffffffffffffffff
    fffffffffffffddddbddddddddddddddddddffdddddffffffffffffffffffffffffffffffffffffffffffffffffffffddddbddddddddddddddddddffdddddfffffffffffffffffffffffffffffffffff
    ffffffffffffddddddbddddddddddddddddfffdddddfffffffffffffffffffffffffffffffffffffffffffffffffffddddddbddddddddddddddddfffdddddfffffffffffffffffffffffffffffffffff
    ffffffffffffddddddddddddddddddddddbdddddddddffffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddddddbdddddddddffffffffffffffffffffffffffffffffff
    ffffffffffffddddddddddddddddddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddddddddddddddddffffffffffffffffffffffffffffffffff
    fffffffffffffdddddddddddddddddddddddddddddddfffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddddddddddddddddddddddddffffffffffffffffffffffffffffffffff
    ffdddffffddddbdddddddddddddddddddddddddddddffddfffffffffffffddddffffffffffffffffffffdddffffddddbdddddddddddddddddddddddddddddffddfffffffffffffddddffffffffffffff
    fdddddffdddddddddddddddddddddddddddddddddddfddddfffffffffffddddddffffffffffffffffffdddddffdddddddddddddddddddddddddddddddddddfddddfffffffffffddddddfffffffffffff
    fdddddfddddddddddddddddddddddddddddddddddddfddddfffffffffffddddddfdddffffffffffffffdddddfddddddddddddddddddddddddddddddddddddfddddfffffffffffddddddfdddfffffffff
    ffddddddddddddddddddddddddddddddddddddddddddddddfffffffffffffdddddddddffffffffffffffddddddddddddddddddddddddddddddddddddddddddddddfffffffffffffdddddddddffffffff
    fddddddddddddddddddddddddddddddddddddddddddddddfffffffffddddfdddddddddfffffffffffffddddddddddddddddddddddddddddddddddddddddddddddfffffffffddddfdddddddddffffffff
    ddddddddddddddddddddddddddddddddddddddddddddddddfffffffddddddddddddddffffffffff4ffddddddddd66dddddddddddddddddddddddddddddddddddddfffffffddddddddddddddfffffffff
    dddddddddddddddddddddddddddddddddddddddddddddddddfdddffddddddddddddddddddffffff666ddddddddd666dddddddddddddddddddddddddddddddddddddfdddffddddddddddddddddddfffff
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffff4666ddddddddd666ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffff
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfff6666666dddddd66666dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffff
    ddddddddddddddddddddddddddddddddddddddddd666666666ddddddddddddddddddddddddddd6666666dddddd66666dddddddddddddddddddddddddddddddddddddddddd6666666666ddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddd666666666ddddddddddddddddddddddddddd6666666dddddd66666dddddddddddddddddddddddddddddddddddddddddd6666666666ddddddddddddd
    ddddddddddddddddddd666ddddddddddddddddddd644666666ddddddddddddddddddddddddddd6446666ddddd6666666dddddddddddddddddddd66ddddddddddddddddddd6646466666ddddddddddddd
    dddddddddddddddddd66666dddddddddddddddddd666666646ddddddddddddddddddddddddddd6666666ddddd6666666ddddddddddddddddddd6666dddddddddddddddddd6666664466ddddddddddddd
    ddddddddddddddddd666666dddddddddddddddddd666666666dddddddddd6dddddddd66666ddd6466666ddddd6666666ddddddddddddddddd666666dddddddddddddddddd6666666666ddddddddddddd
    ddddddddddddddddd66646dddddd6dddddddddddd666666666ddddddddd66dddddddd66666ddd6666666ddddd6666666ddddddddddddddddd66646dddddd66ddddddddddd6666466666dddddddd66ddd
    ddddddddddddddddd666666ddddd6dddddddddddd666666646ddddddddd66dddddddd66666ddd6666666ddddd6666666ddddddddddddddddd666666ddddd66ddddddddddd6666666466dddddddd66ddd
    dddddddd666dddddd66446ddddd666ddddddddddd666666666dd666666d66dddddddd66666ddd6666666ddddd6666666ddddddddd66dddddd66646ddddd666ddddddddddd6666666666d666666666ddd
    6d66dddd666666666664666ddd66666dddddddddd666666646dd644666d66ddddddddd66466dd6666666ddd6666666666d66dddd666666666666646dddd6666dddddddddd6666664466d644666666ddd
    6666ddddd64664666666666ddd66666dddddddddd666666666dd666646d66dddddddd666666dd6646666ddd6666666666666dddd664666466666666dddd6666dddddddddd6666666666d666646666ddd
    6646ddddd66644446666666ddd66666dddddddddd666666666dd666646666dddddddd666666dd6666666ddd6666666666646dddd666646446666666dddd6666dddddddddd6666666666d666646666ddd
    6666dddd6666666666666666dd666666dd66d66d66666666666d644666666dddddddd666666dd6666666ddd6666666666666dddd6666666666666666dd666666ddd6dd6666666666666d644666666ddd
    6646dddd6666666666666666dd666666dd66666666666666666d666666666dd6dd6dd666666dd6666666ddd6666666666646dddd6666666666666666dd666666ddd6666666666666666d666666666ddd
    66666d664646666666666666dd6666666d666644666666666666644886666666d666dd66466dd6666666ddd666666666666666d66646666666666666dd6666666ddd6446666668666666644888666d66
    66666d666666666666666666664666666d666666666888666666666888666666d666d666666dd6666666ddd666666666666666d66666666666666666666666666d666666666688666666666888666d66
    66666d666666666666666666666666666d66666666688866666666688866666666666666666666666666ddd666666666666666d66666666666666666666666666d666666666688666666666888666666
    66666d666666666666666666666666666d6666666888888866666688888666666666666666666666666666d666666666666666d66666666666666666666666666d646666668888888666668888866666
    666668888888886666666666666666666d6666666888888866666688888666666666666666666666666666d666666666666668888888888666666666666666666d666666668888888666668888866666
    666668888888886666666666666666666d6666666888888866666688888666666666666666666666666666d666666666666668888888888666666666666666666d666666668888888666668888866666
    666668558888886666666666666666666d6666666855888866666888888866444666666666666666886666d666666666666668858588888666666666666666666d666666668888888666688888888446
    666668888888586666666666666666666d6666666888888866666888888866644666666666666668888666d666666666666668888885588666666666666666666d666666668888888666688888888666
    66666888888888666666666686666666688888666858888866666888888866666666666466666888888666d6666666666666688888888886666666666666666666888866668885888666688888888666
    6666688888888866666666688666666668888866688888886666688888886646666666666666688858666666886666666666688885888886666666688666666666888866668885888666688888888646
    6666688888885866666666688666666668888866688888886666688888886644466666666666688888866666886666666666688888885886666666688666666668888886668888888666688888888446
    6666688888888866888888688666666668888866688888886666688888886666666668846666688858666668886666666666688888888886888888888666666668888886668885888666688888888666
    6666688888885866855888688666666666885886688888886668888888888688666688888888888885866668888666666666688888855886855888888666666668888888668888888668888888888888
    6666688888888866888858688666666668888886688588886668888888888888666688588858888888866668888666666666688888888886888858888666666668888888668888588668888888888888
    6666688888888866888858888666666668888886688888886668888888888858666688885855888888866668888666666666688888888886888858888666666668888888668888888668888888888888
    6886888888888886855888888666666668888886688888886668888888888888666688888888888888886688888866686688888888888886855888888666666668888888668888888668888888888888
    8888888888888886888888888668668668888886688888886668888888888858666688888888888888886688888866688888888888888886888888888666668668888888668888888668888888888888
    8855888888888888855558888888688866885886688888886668888888888888886888588888888888886688888886668558888888888888855858888688688868888888668888888668888888888888
    8888888888888888888888888888688868888886688888886668888888888888886888888888888888888888888886888888888888888888888888888688688888888888668888588668888888888888
    8888888888888888888888888888888888888888888888886668888888888888886888888888888888888888888886888888888888888888888888888888888888888888888888888668888888888888
    8888888888888888888888888888888888888888888888888868888888888888886888888888888888888888888886858888888888888888888888888888888888888888888888888868888888888888
    8888888888888888888888888888888888888888888888888868888888888888886888888888888888888888888886888888888888888888888888888888885888888888888888888868888888888888
    8888888888888888888888888888888888888888888888888868888888888888886888888888888888888888888886888888888888888888888888888888888888888888888888888868888888888888
    8888888888888888888888888855588888888888888888888868888888888888886888888888888888888888888886888888888888888888888888888558585888888888888888888888888888888888
    8888888888888888888888888885588888888888888888888868888888888888886888888888888888888888888886888888888888888888888888888888585888888888888888888888888888888888
    8888888888888888888888888888888888858888888888888868888888888888888888888888888888888888888888888888888888888888888888888888885888858888888888888888888888888888
    8888888888888888888888888858888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888858888888888888888888888888888888888888
    8888888888888888888888888855588888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888558588888888888888888888888888888888888
    8888888888888888888888888888888888858888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888878888888888888888788888888888888888888887888888888888888878888888888888888888888788888888888888887888888888888888888888878888888888888888788888
    8888887888778888877888878887888878778887888888788877888887788887888788887877888788888878887788888778888788878888787788878888887888778888877888878887888878778887
    8878887787788788877888778887788878877877887888778778878887788877888778887887787788788877877887888778887788877888788778778878887787788788877888778887788878877877
    887788778778877888778778888778787787777888778877877887788877877888877878778777788877887787788778887787788887787877877778887788778778877888778778888778787787777b
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    `)
game.setDialogCursor(img`
    ...................8888888888.....
    .................88888888888888...
    ................8888888888888888..
    ................8888888888888888..
    ...............888888888888888888.
    ...............888868868888888888.
    ..............88888668668888888888
    ..............88886666666688888888
    ..............88886999999999688888
    ..............88889999999999988888
    ..............8888899cccc998888888
    ..............88888869999968888888
    ...............8888888899888888888
    ...............8.8888b888888888.8.
    .................888b3333b8118....
    .................8bb3333b88b118...
    ................8b33333b8888b118..
    ................833338888888888...
    ...............83338888ddd888d8...
    ...............8388888ddddd8898...
    ................89988d1111188998..
    ................8dd8811111188dd8..
    ................8dd888d11d888dd8..
    ...............8dd118888888811dd8.
    ...............8d11d88888888d11d8.
    ................8dd1888888881dd8..
    .................888888f8888888...
    ....................888f8888......
    ....................888f8888......
    ....................88888888......
    ...................8118881118.....
    ...................811d8d1118.....
    ...................8d1d8d1dd8.....
    ..................8d1dd8dd11d8....
    ..................888888d88888....
    `)
game.setDialogFrame(img`
    1 1 f f f 1 1 1 1 1 1 f f f 1 1 
    1 f f f 1 1 1 1 1 1 1 1 f f f 1 
    f f f 1 1 1 1 1 1 1 1 1 1 f f f 
    f f 1 1 1 1 1 1 1 1 1 1 1 1 f f 
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
    f f 1 1 1 1 1 1 1 1 1 1 1 1 f f 
    f f f 1 1 1 1 1 1 1 1 1 1 f f f 
    1 f f f 1 1 1 1 1 1 1 1 f f f 1 
    1 1 f f f 1 1 1 1 1 1 f f f 1 1 
    `)
let mySprite = sprites.create(img`
    ........................................
    ........................................
    ........................................
    ........................................
    ........................................
    .........dd.......ddddddd...............
    .........dfdddddddfffffffdd.............
    ..........dffffffffffffffffd............
    .........ddddfffffffffffffffd...........
    .........dffffffffffffffffffd...........
    ..........ddfffff11111111ffd............
    ...........ddfff111111111df.............
    ..........dffff111ffff1ffff.............
    ...........ddff11f5555f3333f............
    .............dffff5555f3333f............
    .............ff11f5555f3333f............
    .............f1111ffff1ffff.............
    .............f11122111111ff2d...........
    ..........dd.f1112f1111111111dd.........
    .........dffdfff11ff11111111111dd.......
    .........ddffffff11fffffffffdddddd......
    ...........dfffff11f1111f11d............
    ............dfffff11ffff11f.............
    .............ddfff11f11f1ff.............
    ...............dfff1ffff1fd.............
    ..............dffff111111ffd............
    ..............dfffffffffffffd...........
    .............dfffffd111dffffd...........
    .............dffffffd1dffffffd..........
    ............dfffdffffdffffffffd.........
    ............dffddffffffffffdfffd........
    ...........dffd.dfffffffffd.df11dd......
    ..........d1dfd..dffffffffd..df11d......
    .........d11fd...dfffffffd....ddd.......
    .........dddd....dfffffffd..............
    ..................dfffffd...............
    ..................dfffffd...............
    ..................d1111fd...............
    ..................d11f1d................
    ...................d1f1d................
    ...................dddd.................
    `, SpriteKind.Player)
mySprite2 = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 7 7 f f f . . . . 
    . . . f f f 7 7 7 7 f f f . . . 
    . . f f f 7 7 7 7 7 7 f f f . . 
    . . f f 7 7 7 7 7 7 7 7 f f . . 
    . . f 7 7 f f f f f f 7 7 f . . 
    . . f f f 7 7 f f 7 7 f f f . . 
    . f f f 7 b f 7 7 f b 7 f f f . 
    . f f f 7 1 f 7 7 f 1 7 f f f . 
    . . f f f 7 7 f f 7 7 f f f . . 
    . . . f f f f f f f f f f . . . 
    . . f 3 3 3 3 3 7 7 7 7 7 f . . 
    . f 3 3 3 3 7 7 7 7 7 7 7 7 f . 
    f 3 3 3 7 7 7 7 7 7 7 7 7 7 7 f 
    . f f f f f f f f f f f f f f . 
    . . . f f f . . . . f f f . . . 
    `, SpriteKind.Player)
scene.cameraFollowSprite(mySprite2)
controller.player2.moveSprite(mySprite)
let mySprite3 = sprites.create(img`
    . . . . . . . . . . . 1 . . . . 
    . 1 . . . . . . . . . 1 . . . . 
    . 1 . . . 1 . . . 1 1 1 1 1 . . 
    . 1 . . 1 1 . . . 1 . 1 . . . . 
    . 1 . . 1 . . . . 1 . 1 . . . . 
    . 1 . 1 1 . . . . 1 1 1 . . . . 
    . 1 . 1 . . . . . . 1 1 1 . . . 
    . 1 1 1 . . . . . . . 1 1 1 . . 
    . 1 1 . . . . . . . . 1 . 1 1 . 
    . 1 . 1 . . . . . . . 1 . . 1 . 
    . 1 . 1 1 . . . . . . 1 . . 1 . 
    . 1 . . 1 . . . . . . 1 . 1 . . 
    . 1 . . 1 1 . . . . . 1 1 1 . . 
    . 1 . . . 1 . . . 1 1 1 1 . . . 
    . 1 . . . . . . . . . 1 . . . . 
    . . . . . . . . . . . 1 . . . . 
    `, SpriteKind.Food)
mySprite2.setPosition(0, 0)
mySprite.sayText("THE KROMER")
let mySprite4 = sprites.create(img`
    . . f . f f f f . f . . . . . . . . 
    . f 1 f 1 1 1 1 f 1 f . . . . . . . 
    . f 1 1 1 1 1 1 1 1 f . . . . . f . 
    . f 1 1 1 1 1 1 1 1 1 f . . . f 1 f 
    f 1 1 f 1 1 f 1 1 1 1 f f . . f 1 f 
    f 1 1 1 1 1 1 1 1 1 1 1 1 f f 1 1 f 
    f 1 1 1 f f 1 1 1 1 1 1 1 1 1 1 1 f 
    f 1 f 1 f 1 1 f 1 1 1 1 1 1 1 1 1 f 
    f 1 1 f f f f 1 1 1 1 1 1 1 1 1 1 f 
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f . 
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f . 
    f 1 1 1 f f 1 1 f f 1 1 f f 1 1 f . 
    . f 1 1 f f 1 1 f f 1 1 f f 1 1 f . 
    . f 1 f . f 1 f . f 1 f . f 1 f . . 
    . . f . . . f . . . f . . . f . . . 
    `, SpriteKind.Enemy)
