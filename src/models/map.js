const mapData = [
  {
    id: '1',
    name: '基础',
    children: [
      {
        id: '1-1',
        name: 'JavaScript',
        children: [],
      },
      {
        id: '1-2',
        name: '探索',
        children: [],
      },
    ],
  },
  {
    id: '2',
    name: '状态',
    children: [],
  },
  {
    id: '3',
    name: '路由',
    children: [],
  },
  {
    id: '4',
    name: 'HTML',
    children: [],
  },
  {
    id: '5',
    name: 'CSS',
    children: []
  },
];

export default {

  namespace: 'map',

  state: {
    mapData,
    currentNode: ['1-2'],
  },

  reducers: {
    updateCurrentNode(state, { payload: currentNode }) {
      return {
        ...state,
        currentNode
      };
    },
  },

  effects: {},

};
