
export default {

  namespace: 'base',

  state: {
    isOpenGlobalChunkMap: false,
  },

  reducers: {
    saveOpenGlobalChunkMap(state, action) {
      return {
        ...state,
        isOpenGlobalChunkMap: !state.isOpenGlobalChunkMap
      };
    }
  },

  effects: {
    
  },
};