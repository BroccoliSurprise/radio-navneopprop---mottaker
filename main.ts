input.onButtonPressed(Button.A, function () {
    settID(IDnummer + 1)
})
radio.onReceivedString(function (receivedString) {
    if (receivedString.includes("ping")) {
        // klipper vekk "ping"-delen av teksten så kun det unike ID-tallet står igjen. ("ping0" blir "0", "ping1" blir "1" osv)
        if (receivedString.substr(4, 2) == unikIDstring) {
            basic.pause(1000)
            radio.sendString("pong" + unikIDstring)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    settID(IDnummer + -1)
})
function settID (num: number) {
    IDnummer = num
    basic.showNumber(num)
    unikIDstring = convertToText(num)
}
let unikIDstring = ""
let IDnummer = 0
radio.setGroup(1)
settID(0)
