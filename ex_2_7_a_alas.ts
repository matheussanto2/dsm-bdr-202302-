// Vehicle.ts

class Vehicle {
    private longitude: number;
    private latitude: number;

    constructor(initialLongitude: number, initialLatitude: number) {
        this.longitude = initialLongitude;
        this.latitude = initialLatitude;
    }

    move(newLongitude: number, newLatitude: number) {
        this.longitude = newLongitude;
        this.latitude = newLatitude;
        console.log(`Vehicle moved to (${this.longitude}, ${this.latitude})`);
    }
}

class ElectricVehicle extends Vehicle {
    private batteryLevel: number;

    constructor(initialLongitude: number, initialLatitude: number, initialBatteryLevel: number) {
        super(initialLongitude, initialLatitude);
        this.batteryLevel = initialBatteryLevel;
    }

    chargeBattery() {
        console.log("Charging the battery...");
        this.batteryLevel = 100;
    }
}

class FlyingElectricVehicle extends ElectricVehicle {
    private altitude: number;

    constructor(initialLongitude: number, initialLatitude: number, initialBatteryLevel: number, initialAltitude: number) {
        super(initialLongitude, initialLatitude, initialBatteryLevel);
        this.altitude = initialAltitude;
    }

    takeOff() {
        console.log("Taking off...");
        this.altitude = 100;
    }

    land() {
        console.log("Landing...");
        this.altitude = 0;
    }
}

export { Vehicle, ElectricVehicle, FlyingElectricVehicle };
