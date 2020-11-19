input.onButtonPressed(Button.A, function () {
    if (step >= 30) {
        basic.showNumber(step)
        basic.clearScreen()
        basic.showIcon(IconNames.Happy)
        music.playMelody("G F G A - F E D ", 500)
        music.playMelody("G F G A - F E D ", 500)
        music.playMelody("G F G A - F E D ", 500)
        basic.clearScreen()
    } else if (step >= 10) {
        basic.showNumber(step)
        basic.clearScreen()
        basic.showIcon(IconNames.Asleep)
        music.playMelody("E B C5 A B G A F ", 1000)
        music.playMelody("E B C5 A B G A F ", 1000)
        music.playMelody("E B C5 A B G A F ", 1000)
        basic.clearScreen()
    } else {
        basic.showNumber(step)
        basic.clearScreen()
        basic.showIcon(IconNames.Sad)
        music.playMelody("C D E F G A B C5 ", 1000)
        music.playMelody("C D E F G A B C5 ", 1000)
        music.playMelody("C D E F G A B C5 ", 1000)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.AB, function () {
    dataStreamer.writeString("AVG of Calories : ")
    dataStreamer.writeNumber(sum / day)
    dataStreamer.writeLine()
})
input.onButtonPressed(Button.B, function () {
    dataStreamer.writeString("Day: ")
    dataStreamer.writeNumber(day + 1)
    dataStreamer.writeLine()
    dataStreamer.writeString("Step : ")
    dataStreamer.writeNumber(list[day])
    dataStreamer.writeLine()
    dataStreamer.writeString("Cal :")
    dataStreamer.writeNumber(list[day] * 3)
    dataStreamer.writeLine()
    sum += list[day] * 3
    day += 1
    basic.showNumber(day + 1)
    step = 0
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    music.playMelody("C5 B A G F E D C ", 2000)
    step += 1
    basic.showNumber(step)
    list[day] = step
    basic.clearScreen()
})
let sum = 0
let day = 0
let step = 0
let list: number[] = []
list = []
step = 0
day = 0
sum = 0
