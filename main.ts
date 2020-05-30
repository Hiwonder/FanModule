/*
 fan package
*/
//% weight=10 icon="\uf140" color=#2896ff
namespace fan {
    /**
    * Set the fan speed
    */
    //% weight=98 blockId=fanSpeed block="Set the fan pin1|%pin1|and pin2|%pin2| speed %speed"
    //% speed.min=-100 speed.max=100
    export function fanSpeed(pin1: AnalogPin,pin2: AnalogPin,speed: number) {
        if (speed > 100 || speed < -100) {
            return;
        }
        if (speed < 0) {
            pins.analogWritePin(pin2, 0);
            pins.analogWritePin(pin1, pins.map(-speed, 0, 100, 0, 1023));
        }
        else if (speed > 0) {
            pins.analogWritePin(pin1, 0);
            pins.analogWritePin(pin2, pins.map(speed, 0, 100, 0, 1023));
        }
        else {
            pins.analogWritePin(pin2, 0);
            pins.analogWritePin(pin1, 0);
        }
    }
}
