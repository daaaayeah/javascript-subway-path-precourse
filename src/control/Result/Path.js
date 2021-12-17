import { DISTANCE } from '../../common/constant.js';
import { getStandard } from '../../common/element.js';
import Dijkstra from '../../utils/Dijkstra.js';

const dijkstra = new Dijkstra();

function createDistanceData() {
  // 2호선
  dijkstra.addEdge('교대', '강남', 2);
  dijkstra.addEdge('강남', '역삼', 2);

  // 3호선
  dijkstra.addEdge('교대', '남부터미널', 3);
  dijkstra.addEdge('남부터미널', '양재', 6);
  dijkstra.addEdge('양재', '매봉', 1);

  // 신분당선
  dijkstra.addEdge('강남', '양재', 2);
  dijkstra.addEdge('양재', '양재시민의숲', 10);
}

function createTimeData() {
  // 2호선
  dijkstra.addEdge('교대', '강남', 3);
  dijkstra.addEdge('강남', '역삼', 3);

  // 3호선
  dijkstra.addEdge('교대', '남부터미널', 2);
  dijkstra.addEdge('남부터미널', '양재', 5);
  dijkstra.addEdge('양재', '매봉', 1);

  // 신분당선
  dijkstra.addEdge('강남', '양재', 8);
  dijkstra.addEdge('양재', '양재시민의숲', 3);
}

function createData() {
  const standard = getStandard();

  if (standard === DISTANCE.MIN) {
    createDistanceData();
  } else {
    createTimeData();
  }
}

export default function getShortestPath(departure, arrival) {
  createData();

  return dijkstra.findShortestPath(departure, arrival);
}
