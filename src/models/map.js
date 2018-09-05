import findId from 'utils/findTreeNodeById';
import produce from 'immer';

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
    currentNode: {}
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
    saveMapData(state, { payload: mapData }) {
      return {
        ...state,
        mapData
      };
    }
  },

  effects: {
    *updateChunkName({ payload: { id, chunkName } }, { select, put }) {
      const mapData = yield select(state => state.map.mapData);

      yield put({
        type: 'saveMapData',
        payload: produce(mapData, (mapData) => {
          let idxs = id.split('-');
          let evalString = '';

          idxs.forEach((idx, i) => {
            if (i === 0) {
              evalString += `mapData[${idx-1}]`;
              return;
            }

            evalString += `.children[${idx-1}]`;
          })

          evalString += `.name = chunkName`;

          eval(evalString);
        })
      });
    }
  },

};
