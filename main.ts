let strip = neopixel.create(DigitalPin.P0, 8, NeoPixelMode.RGB)
basic.forever(function () {
    basic.showNumber(input.temperature())
    if (input.temperature() > 30) {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        strip.show()
    } else if (input.temperature() < 25) {
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
        strip.show()
    } else {
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
        strip.show()
    }
})
