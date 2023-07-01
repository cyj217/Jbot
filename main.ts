function 右转 () {
    motorbit.MotorRun(motorbit.Motors.M1, -75)
    motorbit.MotorRun(motorbit.Motors.M2, -75)
    motorbit.MotorRun(motorbit.Motors.M3, -75)
    motorbit.MotorRun(motorbit.Motors.M4, -75)
}
function 左转 () {
    motorbit.MotorRun(motorbit.Motors.M1, 75)
    motorbit.MotorRun(motorbit.Motors.M2, 75)
    motorbit.MotorRun(motorbit.Motors.M3, 75)
    motorbit.MotorRun(motorbit.Motors.M4, 75)
}
function 左后移 () {
    motorbit.MotorRun(motorbit.Motors.M1, 75)
    motorbit.MotorRun(motorbit.Motors.M2, 0)
    motorbit.MotorRun(motorbit.Motors.M3, 0)
    motorbit.MotorRun(motorbit.Motors.M4, -75)
}
function 后退 () {
    motorbit.MotorRun(motorbit.Motors.M1, 75)
    motorbit.MotorRun(motorbit.Motors.M2, 75)
    motorbit.MotorRun(motorbit.Motors.M3, -75)
    motorbit.MotorRun(motorbit.Motors.M4, -75)
}
function 右后移 () {
    motorbit.MotorRun(motorbit.Motors.M1, 0)
    motorbit.MotorRun(motorbit.Motors.M2, 75)
    motorbit.MotorRun(motorbit.Motors.M3, -75)
    motorbit.MotorRun(motorbit.Motors.M4, 0)
}
function 右平移 () {
    motorbit.MotorRun(motorbit.Motors.M1, -75)
    motorbit.MotorRun(motorbit.Motors.M2, 75)
    motorbit.MotorRun(motorbit.Motors.M3, -75)
    motorbit.MotorRun(motorbit.Motors.M4, 75)
}
function RGB灯 () {
    motorbit.Setting_the_on_board_lights(Offset.ONE, RgbColors.Blue)
    motorbit.Setting_the_on_board_lights(Offset.TWO, RgbColors.Blue)
    motorbit.Setting_the_on_board_lights(Offset.THREE, RgbColors.Blue)
    motorbit.Setting_the_on_board_lights(Offset.FOUR, RgbColors.Blue)
}
function 前进 () {
    motorbit.MotorRun(motorbit.Motors.M1, -75)
    motorbit.MotorRun(motorbit.Motors.M2, -75)
    motorbit.MotorRun(motorbit.Motors.M3, 75)
    motorbit.MotorRun(motorbit.Motors.M4, 75)
}
EM_IR.OnPressEvent(function (message) {
    if (message == 64) {
        if (motorbit.Ultrasonic_reading_distance() < 20) {
            motorbit.MotorStopAll()
            motorbit.motorbit_rus04(RgbUltrasonics.All, RgbColors.Red, ColorEffect.None)
        } else {
            motorbit.motorbit_rus04(RgbUltrasonics.All, RgbColors.Green, ColorEffect.None)
            前进()
            basic.pause(100)
            motorbit.MotorStopAll()
        }
    } else if (message == 25) {
        后退()
        basic.pause(100)
        motorbit.MotorStopAll()
    } else if (message == 7) {
        左转()
        basic.pause(100)
        motorbit.MotorStopAll()
    } else if (message == 9) {
        右转()
        basic.pause(100)
        motorbit.MotorStopAll()
    } else if (message == 69) {
        左平移()
        basic.pause(100)
        motorbit.MotorStopAll()
    } else if (message == 71) {
        右平移()
        basic.pause(100)
        motorbit.MotorStopAll()
    } else if (message == 68) {
        左前移()
        basic.pause(100)
        motorbit.MotorStopAll()
    } else if (message == 67) {
        右前移()
        basic.pause(100)
        motorbit.MotorStopAll()
    } else if (message == 22) {
        左后移()
        basic.pause(100)
        motorbit.MotorStopAll()
    } else if (message == 13) {
        右后移()
        basic.pause(100)
        motorbit.MotorStopAll()
    } else if (message == 12) {
        motorbit.Servo(motorbit.Servos.S1, angle1)
        angle1 = angle1 + 4
    } else if (message == 24) {
        motorbit.Servo(motorbit.Servos.S1, angle1)
        angle1 = angle1 - 4
    } else {
        motorbit.MotorStopAll()
    }
})
function 左前移 () {
    motorbit.MotorRun(motorbit.Motors.M1, 0)
    motorbit.MotorRun(motorbit.Motors.M2, -75)
    motorbit.MotorRun(motorbit.Motors.M3, 75)
    motorbit.MotorRun(motorbit.Motors.M4, 0)
}
function 右前移 () {
    motorbit.MotorRun(motorbit.Motors.M1, -75)
    motorbit.MotorRun(motorbit.Motors.M2, 0)
    motorbit.MotorRun(motorbit.Motors.M3, 0)
    motorbit.MotorRun(motorbit.Motors.M4, 75)
}
function 左平移 () {
    motorbit.MotorRun(motorbit.Motors.M1, 75)
    motorbit.MotorRun(motorbit.Motors.M2, -75)
    motorbit.MotorRun(motorbit.Motors.M3, 75)
    motorbit.MotorRun(motorbit.Motors.M4, -75)
}
let angle1 = 0
EM_IR.IrRemote_init(IrPins.P0)
RGB灯()
motorbit.Servo(motorbit.Servos.S1, 60)
