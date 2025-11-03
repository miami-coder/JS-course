function Car(mode, producer, year, maxSpeed, engineVolume) {
    this.mode = mode
    this.producer = producer
    this.year = year
    this.maxSpeed = maxSpeed
    this.engineVolume = engineVolume
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }
    this.info = function () {
        for (const key in this) {
            console.log(key, this[key]);
        }
    }
    this.increaseMaxSpeed = function (newSpeed) {
        if (newSpeed > 0) this.maxSpeed = this.maxSpeed + newSpeed;
    }
    this.changeYear = function (newYear) {
        if (newYear > 1815) this.year = newYear;
    }
    this.addDriver = function (driverObject) {
        if (driverObject) this.driver = driverObject;
    }
}