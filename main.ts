basic.forever(function () {
    soundExpression.happy.playUntilDone()
})
basic.forever(function () {
    basic.showNumber(input.lightLevel())
})
basic.forever(function () {
    if (input.lightLevel() < 100) {
        music.setTempo(49)
    } else if (input.lightLevel() >= 100 && input.lightLevel() < 200) {
        music.setTempo(176)
    } else {
        music.setTempo(307)
    }
})
