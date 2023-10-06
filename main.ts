let strip = neopixel.create(DigitalPin.P0, 8, NeoPixelMode.RGB)
basic.forever(function () {
    basic.showNumber(input.temperature())
    strip.setBrightness(25)
    if (input.temperature() > 30) {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        strip.show()
    } else if (input.temperature() < 25) {
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
        strip.show()
    } else if (input.temperature() == 30) {
        strip.showColor(neopixel.colors(NeoPixelColors.Orange))
        strip.show()
    } else if (input.temperature() == 25) {
        strip.showColor(neopixel.colors(NeoPixelColors.Purple))
        strip.show()
    } else {
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
        strip.show()
    }
})
