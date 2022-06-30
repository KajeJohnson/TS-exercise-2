export interface Racer {
  team: string;
  speed: number;
  accelerate: () => void;
  isFuelEmpty: () => boolean;
}

// export function findRacersWithEmptyFuel(racers: Racer[]) {
//   return racers.filter((racer) => racer.isFuelEmpty() === true);
// }

// export function findAverageSpeed
