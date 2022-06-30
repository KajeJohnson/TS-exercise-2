import { GasCar } from "../src/gas-car";
import { Racer } from "../src/racer";
import { SolarCar } from "../src/solarCar";
import {
  findAverageSpeed,
  findRacersWithEmptyFuel,
  getFasterRacer,
} from "../src/racerFunctions";

describe("findAverageSpeed", () => {
  test("array of Solar and GasCar with different speeds", () => {
    const car1 = new GasCar("team name", 5);
    const car2 = new GasCar("empty team", 0);
    car1.accelerate();
    car1.accelerate();
    car1.accelerate();

    car2.accelerate();

    const speedArray = [car1, car2];

    expect(findAverageSpeed(speedArray)).toBe(4);
  });

  test("array of GasCar with different speeds", () => {
    const car1 = new SolarCar("team name");
    const car2 = new GasCar("empty team", 0);
    car1.accelerate();
    car1.accelerate();
    car1.accelerate();

    car2.accelerate();
    car2.accelerate();
    car2.accelerate();

    const speedArray = [car1, car2];

    expect(findAverageSpeed(speedArray)).toBe(4.5);
  });

  test("0 speed", () => {
    const car1 = new SolarCar("team name");
    const car2 = new GasCar("empty team", 0);

    const speedArray = [car1, car2];

    expect(findAverageSpeed(speedArray)).toBe(0);
  });

  test("empty array", () => {
    const car1 = new SolarCar("team name");
    const car2 = new GasCar("empty team", 0);

    const speedArray: any = [];

    expect(findAverageSpeed(speedArray)).toBe(0);
  });
});

describe("faster car", () => {
  test("racer a is faster", () => {
    const racerA = new GasCar("team name", 5);
    const racerB = new GasCar("empty team", 0);

    racerA.speed = 6;
    racerB.speed = 2;

    expect(getFasterRacer(racerA, racerB)).toBe(racerA);
  });

  test("racer b is faster", () => {
    const racerA = new GasCar("team name", 5);
    const racerB = new GasCar("empty team", 0);

    racerA.speed = 6;
    racerB.speed = 12;

    expect(getFasterRacer(racerA, racerB)).toBe(racerB);
  });

  test("racer b = racer a", () => {
    const racerA = new GasCar("team name", 5);
    const racerB = new GasCar("empty team", 0);

    racerA.speed = 12;
    racerB.speed = 12;

    expect(getFasterRacer(racerA, racerB)).toBe(null);
  });

  test("gas car and solar car", () => {
    const racerA = new GasCar("team name", 5);
    const racerB = new SolarCar("empty team");

    racerA.speed = 12;
    racerB.speed = 12;

    expect(getFasterRacer(racerA, racerB)).toBe(null);
  });
});
