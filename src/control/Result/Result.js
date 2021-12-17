import { PATH } from '../../common/constant.js';
import getShortestPath from './Path.js';

export default function getResultPath(departure, arrival) {
  const path = getShortestPath(departure, arrival);
  const resultPath = [];
  path.forEach((station) => {
    resultPath.push(station, PATH);
  });
  resultPath.pop();

  return resultPath.join('');
}
