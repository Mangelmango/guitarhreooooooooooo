input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 6; index++) {
        note = randint(0, 2)
        if (note == 1) {
            basic.showLeds(`
                . . # . .
                . . # . .
                . # # . .
                . . # . .
                . # # # .
                `)
            basic.pause(1000)
        } else if (note == 2) {
            basic.showLeds(`
                . # # # .
                . . . # .
                . # # # .
                . # . . .
                . # # # .
                `)
            basic.pause(1000)
        } else {
            basic.showLeds(`
                . . # . .
                . # . # .
                . # . # .
                . # . # .
                . . # . .
                `)
            basic.pause(1000)
        }
    }
})
let tuch2 = 0
let tuch0 = 0
let note = 0
basic.showString("skake to start!")
if (note == 0) {
	
}
basic.forever(function () {
    tuch0 = 0
    tuch2 = 2
    tuch2 = 1
})
