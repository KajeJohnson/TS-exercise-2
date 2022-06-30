import { GasCar } from "../src/gas-car";
import { Racer } from "../src/racer";
import { SolarCar } from "../src/solarCar";
import { findRacersWithEmptyFuel } from "../src/racerFunctions";

describe("some  with no fuel", () => {
  test("", () => {
    const newCar = new GasCar("team name", 5);
    const emptyCar = new GasCar("empty team", 0);

    const gasArray = [newCar, emptyCar];

    expect(findRacersWithEmptyFuel(gasArray)).toContain(emptyCar);
  });

  test("all with no fuel", () => {
    const newCar = new GasCar("team name", 0);
    const emptyCar = new GasCar("empty team", 0);

    const gasArray = [newCar, emptyCar];

    expect(findRacersWithEmptyFuel(gasArray)).toContain(emptyCar);
  });

  test("all with all having fuel", () => {
    const newCar = new GasCar("team name", 5);
    const emptyCar = new GasCar("empty team", 6);

    const gasArray = [newCar, emptyCar];

    expect(findRacersWithEmptyFuel(gasArray)).toStrictEqual([]);
  });

  test("testing with solarcar", () => {
    const newCar = new SolarCar("team name");
    const emptyCar = new SolarCar("empty team");

    const solarArray = [newCar, emptyCar];

    expect(findRacersWithEmptyFuel(solarArray)).toStrictEqual([]);
  });

  test("testing with solarcar and gas", () => {
    const newCar = new GasCar("team name", 5);
    const emptyCar = new SolarCar("empty team");
    const gasArray: any = [];

    expect(findRacersWithEmptyFuel(gasArray)).toStrictEqual([]);
  });
});
