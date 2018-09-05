// '1-2-3' => [{ id: '1' ...}, { id: '1-2' ...}, { id: '1-2-3' ...}]
function findTreeNodeById(id, treeData) {
  if (typeof id !== 'string') {
    throw new TypeError('id 的类型应该为 string');
  }

  if (!Array.isArray(treeData)) {
    throw new TypeError('treeData 的类型应该为 Array ');
  }

  // '1-2-3' => ['1', '2', '3'] => ['1', '1-2', '1-2-3']
  let currentKey = '';
  let keys = id.split('-').map(
    (node, idx) => {
      if (idx === 0) {
        currentKey = node;
        return currentKey;
      }

      currentKey = currentKey + '-' + node;

      return currentKey;
    }
  );

  let currentKeyIndex = 0;
  let result = [];

  // ['1', '1-2', '1-2-3'] => [{ id: '1' ...}, { id: '1-2' ...}, { id: '1-2-3' ...}]
  function getNodes(nodes) {
    if (!Array.isArray(nodes)) {
      return
    }

    const filterKey = keys[currentKeyIndex];

    for (let node of nodes) {
      if (node.id === filterKey) {
        result.push(node);
        if (Array.isArray(node.children)) {
          currentKeyIndex ++;
          getNodes(node.children);
        }
      }
    }
  }

  getNodes(treeData);

  return result;
}

export default findTreeNodeById;
