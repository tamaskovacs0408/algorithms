let graph;
const nodes = 5;
let visited = new Array(nodes);

const createGraph = (nodes) => {
  graph = new Array(nodes);
  for (let i = 0; i < graph.length; i++) {
    graph[i] = new Array(nodes);
  }
  
  for (let i = 0; i < graph.length; i++) {
    for (let j = 0; j < graph[i]; j++) {
      graph[i][j] = 0;
    }
  }
}