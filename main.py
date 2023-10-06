strip = neopixel.create(DigitalPin.P0, 8, NeoPixelMode.RGB)

def on_forever():
    basic.show_number(input.temperature())
    if input.temperature() > 30:
        strip.show_color(neopixel.colors(NeoPixelColors.RED))
        strip.show()
    elif input.temperature() < 25:
        strip.show_color(neopixel.colors(NeoPixelColors.BLUE))
        strip.show()
    elif input.temperature() == 30:
        strip.show_color(neopixel.colors(NeoPixelColors.ORANGE))
        strip.show()
    elif input.temperature() == 25:
        strip.show_color(neopixel.colors(NeoPixelColors.PURPLE))
        strip.show()
    else:
        strip.show_color(neopixel.colors(NeoPixelColors.GREEN))
        strip.show()
basic.forever(on_forever)
