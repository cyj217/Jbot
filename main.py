def 右转():
    motorbit.motor_run(motorbit.Motors.M1, 150)
    motorbit.motor_run(motorbit.Motors.M2, 150)
    motorbit.motor_run(motorbit.Motors.M3, 150)
    motorbit.motor_run(motorbit.Motors.M4, 150)
def 左转():
    motorbit.motor_run(motorbit.Motors.M1, -150)
    motorbit.motor_run(motorbit.Motors.M2, -150)
    motorbit.motor_run(motorbit.Motors.M3, -150)
    motorbit.motor_run(motorbit.Motors.M4, -150)
def 左移():
    motorbit.motor_run(motorbit.Motors.M1, -150)
    motorbit.motor_run(motorbit.Motors.M2, 150)
    motorbit.motor_run(motorbit.Motors.M3, -150)
    motorbit.motor_run(motorbit.Motors.M4, 150)
def 后退():
    motorbit.motor_run(motorbit.Motors.M1, -150)
    motorbit.motor_run(motorbit.Motors.M2, -150)
    motorbit.motor_run(motorbit.Motors.M3, 150)
    motorbit.motor_run(motorbit.Motors.M4, 150)
def RGB灯():
    motorbit.Setting_the_on_board_lights(Offset.ONE, RgbColors.BLUE)
    motorbit.Setting_the_on_board_lights(Offset.ONE, RgbColors.BLUE)
    motorbit.Setting_the_on_board_lights(Offset.ONE, RgbColors.BLUE)
    motorbit.Setting_the_on_board_lights(Offset.ONE, RgbColors.BLUE)
    basic.pause(100)
def 前进():
    motorbit.motor_run(motorbit.Motors.M1, 150)
    motorbit.motor_run(motorbit.Motors.M2, 150)
    motorbit.motor_run(motorbit.Motors.M3, -150)
    motorbit.motor_run(motorbit.Motors.M4, -150)

def on_press_event(message):
    global angle1, angle2, angle3, angle4
    if message == 12:
        motorbit.servo(motorbit.Servos.S1, angle1)
        angle1 = angle1 + 5
    elif message == 24:
        motorbit.servo(motorbit.Servos.S1, angle1)
        angle1 = angle1 - 5
    elif message == 94:
        motorbit.servo(motorbit.Servos.S3, angle2)
        angle2 = angle2 + 5
    elif message == 8:
        motorbit.servo(motorbit.Servos.S3, angle2)
        angle2 = angle2 - 5
    elif message == 28:
        motorbit.servo(motorbit.Servos.S5, angle3)
        angle3 = angle3 + 5
    elif message == 90:
        motorbit.servo(motorbit.Servos.S5, angle3)
        angle3 = angle3 - 5
    elif message == 66:
        motorbit.servo(motorbit.Servos.S5, angle4)
        angle4 = angle4 + 5
    elif message == 82:
        motorbit.servo(motorbit.Servos.S5, angle4)
        angle4 = angle4 - 5
    elif message == 64:
        if motorbit.Ultrasonic_reading_distance() < 25:
            motorbit.motor_stop_all()
            motorbit.motorbit_rus04(RgbUltrasonics.ALL, RgbColors.RED, ColorEffect.NONE)
        else:
            前进()
            motorbit.motorbit_rus04(RgbUltrasonics.ALL, RgbColors.GREEN, ColorEffect.NONE)
    elif message == 25:
        后退()
    elif message == 7:
        左转()
    elif message == 9:
        右转()
    elif message == 13:
        左移()
    elif message == 67:
        右移()
    else:
        motorbit.motor_stop_all()
EM_IR.on_press_event(on_press_event)

def 右移():
    motorbit.motor_run(motorbit.Motors.M1, 150)
    motorbit.motor_run(motorbit.Motors.M2, -150)
    motorbit.motor_run(motorbit.Motors.M3, 150)
    motorbit.motor_run(motorbit.Motors.M4, -150)
angle4 = 0
angle3 = 0
angle2 = 0
angle1 = 0
message2 = 0
EM_IR.IrRemote_init(IrPins.P5)
motorbit.servo(motorbit.Servos.S1, 0)
motorbit.servo(motorbit.Servos.S3, 100)
motorbit.servo(motorbit.Servos.S5, 60)
motorbit.servo(motorbit.Servos.S7, 60)

def on_forever():
    pass
basic.forever(on_forever)
