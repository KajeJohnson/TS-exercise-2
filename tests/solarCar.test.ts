import { SolarCar } from "../src/solarCar";

describe("SolorCar", () => {
  test("The team property is set from the constructor parameter", () => {
    const team = "Solar Car";

    const solarCar = new SolarCar(team);

    expect(solarCar.team).toBe(team);
  });

  test("The speed property starts at 0", () => {
    const solarCar = new SolarCar("Team name");

    expect(solarCar.speed).toBe(0);
  });

  test("Calling accelerate once brings speed to 1", () => {
    const solarCar = new SolarCar("Team name");

    solarCar.accelerate();

    expect(solarCar.speed).toBe(1);
  });

  test("Calling accelerate twice brings speed to 2", () => {
    const solarCar = new SolarCar("Team name");

    solarCar.accelerate();
    solarCar.accelerate();

    expect(solarCar.speed).toBe(2);
  });

  test("isFuelEmpty returns false", () => {
    const solarCar = new SolarCar("Team name");

    const isFuelEmpty = solarCar.isFuelEmpty();

    expect(isFuelEmpty).toBe(false);
  });
});
