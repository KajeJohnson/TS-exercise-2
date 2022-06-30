import { Racer } from "./racer";

export function findRacersWithEmptyFuel(racers: Racer[]) {
  return racers.filter((racer) => racer.isFuelEmpty() === true);
}

export function findAverageSpeed(racers: Racer[]) {
  let avgSpeed = 0;
  if (racers.length === 0) {
    return 0;
  }
  racers.forEach((racer: Racer) => (avgSpeed += racer.speed));
  return avgSpeed / racers.length;
}

// Parameters:
// racerA (a Racer)
// racerB (a Racer)
// Returns: a Racer or null
export function getFasterRacer(racerA: Racer, racerB: Racer) {
  if (racerA.speed > racerB.speed) {
    return racerA;
  }
  if (racerB.speed > racerA.speed) {
    return racerB;
  }
  return null;
}
