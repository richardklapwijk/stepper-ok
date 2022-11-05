let Pause = 0
// Motor 1 Uses Pins 13, 14, 15 & 16 P13 - Blue P14 - Purple/Pink P15 - Yellow P16 - Orange Driven by a 5volt ULN2003 Darlington Array Motor 2 Uses Pins 6, 7, 9 & 10 P6 - Blue P7 - Purple/Pink P9 - Yellow P10 - Orange Driven by a 5volt ULN2003 Darlington Array
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `)
        Pause = 5
        for (let index = 0; index < 512; index++) {
            pins.digitalWritePin(DigitalPin.P0, 1)
            pins.digitalWritePin(DigitalPin.P1, 0)
            pins.digitalWritePin(DigitalPin.P2, 0)
            pins.digitalWritePin(DigitalPin.P3, 0)
            basic.pause(Pause)
            pins.digitalWritePin(DigitalPin.P0, 0)
            pins.digitalWritePin(DigitalPin.P1, 1)
            pins.digitalWritePin(DigitalPin.P2, 0)
            pins.digitalWritePin(DigitalPin.P3, 0)
            basic.pause(Pause)
            pins.digitalWritePin(DigitalPin.P0, 0)
            pins.digitalWritePin(DigitalPin.P1, 0)
            pins.digitalWritePin(DigitalPin.P2, 1)
            pins.digitalWritePin(DigitalPin.P3, 0)
            basic.pause(Pause)
            pins.digitalWritePin(DigitalPin.P0, 0)
            pins.digitalWritePin(DigitalPin.P1, 0)
            pins.digitalWritePin(DigitalPin.P2, 0)
            pins.digitalWritePin(DigitalPin.P3, 1)
            basic.pause(Pause)
        }
    }
})
// Motor 1 Uses Pins 13, 14, 15 & 16 P13 - Blue P14 - Purple/Pink P15 - Yellow P16 - Orange Driven by a 5volt ULN2003 Darlington Array Motor 2 Uses Pins 6, 7, 9 & 10 P6 - Blue P7 - Purple/Pink P9 - Yellow P10 - Orange Driven by a 5volt ULN2003 Darlington Array
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        basic.showLeds(`
            # # # # #
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `)
        Pause = 5
        for (let index = 0; index < 512; index++) {
            pins.digitalWritePin(DigitalPin.P0, 0)
            pins.digitalWritePin(DigitalPin.P1, 0)
            pins.digitalWritePin(DigitalPin.P2, 0)
            pins.digitalWritePin(DigitalPin.P3, 1)
            basic.pause(Pause)
            pins.digitalWritePin(DigitalPin.P0, 0)
            pins.digitalWritePin(DigitalPin.P1, 0)
            pins.digitalWritePin(DigitalPin.P2, 1)
            pins.digitalWritePin(DigitalPin.P3, 0)
            basic.pause(Pause)
            pins.digitalWritePin(DigitalPin.P0, 0)
            pins.digitalWritePin(DigitalPin.P1, 1)
            pins.digitalWritePin(DigitalPin.P2, 0)
            pins.digitalWritePin(DigitalPin.P3, 0)
            basic.pause(Pause)
            pins.digitalWritePin(DigitalPin.P0, 1)
            pins.digitalWritePin(DigitalPin.P1, 0)
            pins.digitalWritePin(DigitalPin.P2, 0)
            pins.digitalWritePin(DigitalPin.P3, 0)
            basic.pause(Pause)
        }
    }
})
