import { PATH } from '../../common/constant.js';
import stations from '../../common/data.js';
import getShortestPath from './Path.js';

function getWeight(departure, arrival) {
  let [distance, time] = [0, 0];

  stations.forEach((station) => {
    if (
      (station.departure === departure && station.arrival === arrival) ||
      (station.arrival === departure && station.departure === arrival)
    ) {
      distance = station.distance;
      time = station.time;
    }
  });

  return [distance, time];
}

export function calculateResultWeight(departure, arrival) {
  const path = getShortestPath(departure, arrival);
  let distance = 0;
  let time = 0;

  for (let i = 0; i < path.length - 1; i += 1) {
    const weight = getWeight(path[i], path[i + 1]);
    distance += weight[0];
    time += weight[1];
  }

  return [distance, time];
}

export function getResultPath(departure, arrival) {
  const path = getShortestPath(departure, arrival);
  const resultPath = [];
  path.forEach((station) => {
    resultPath.push(station, PATH);
  });
  resultPath.pop();

  return resultPath.join('');
}
