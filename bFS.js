class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChild(value) {
    this.children.push(new Node(value));
    return this;
  }
}

function breadthFirstSearch(root) {
  const result = [];
  const queue = [root];
  while (queue.length > 0) {
    const current = queue.shift();
    if (current === null) continue;
    result.push(current.value);

    for (let child of current.children) {
      queue.push(child);
    }
  }
  return result;
}