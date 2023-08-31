// app.ts
import { Vehicle, ElectricVehicle, FlyingElectricVehicle } from "./Vehicle";

const vehicle = new Vehicle(0, 0);
vehicle.move(10, 20);

const electricVehicle = new ElectricVehicle(0, 0, 50);
electricVehicle.move(30, 40);
electricVehicle.chargeBattery();

const flyingElectricVehicle = new FlyingElectricVehicle(0, 0, 80, 0);
flyingElectricVehicle.move(50, 60);
flyingElectricVehicle.chargeBattery();
flyingElectricVehicle.takeOff();
flyingElectricVehicle.land();
