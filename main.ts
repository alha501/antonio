input.onButtonPressed(Button.A, function () {
    if (coin_1 == "Heads" && coin_2 == "Heads" || coin_1 == "Heads" && coin_2 == "Heads") {
        player_1 += 1
        basic.showNumber(player_1)
        basic.showIcon(IconNames.Happy)
        basic.showString("PLY 1")
    } else {
        player_2 += 1
        basic.showNumber(player_2)
        basic.showIcon(IconNames.Heart)
        basic.showString("PLY 2")
    }
})
let player_2 = 0
let player_1 = 0
let coin_2 = ""
let coin_1 = ""
coin_1 = "tails"
coin_2 = "Heads"
player_1 = 0
player_2 = 0
basic.forever(function () {
	
})
