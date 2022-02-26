turtle.setPosition(3, 2)
turtle.turnRight()
basic.forever(function () {
    for (let Turtleeeee = 0; Turtleeeee <= 3; Turtleeeee++) {
        turtle.forward(1 - 5)
        turtle.turnRight()
    }
    for (let Turtleeeee = 0; Turtleeeee <= 3; Turtleeeee++) {
        turtle.back(0 - 4)
        turtle.turnLeft()
    }
})
