let Count = 0
loops.everyInterval(500, function () {
    Count += 2
    basic.showNumber(Count)
})
