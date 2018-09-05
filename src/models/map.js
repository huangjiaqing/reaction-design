import findId from 'utils/findTreeNodeById';

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
    currentKey: [],
    currentNode: null
  },

  reducers: {
    updateCurrentKey(state, { payload: currentKey }) {

      let res = findId(currentKey[0], state.mapData);

      return {
        ...state,
        currentKey,
        currentNode: res.pop()
      };
    },
  },

  effects: {},

};
