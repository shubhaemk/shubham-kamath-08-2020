const Types = {
  UPDATE_SCROLL_DIRECTION: "UPDATE_SCROLL_DIRECTION",
  UPDATE_SCROLL_POSITION: "UPDATE_SCROLL_POSITION",
};

const state = () => ({
  SCROLL_POSITION: 0,
  SCROLL_DIRECTION: "UP",
});

const getters = {
  //get calculated property, can access rootstate
  /* getScrollPosition: (state, getters, rootState) => {
    return state.SCROLL_DIRECTION;
  }, */
};

//this may contain async operations
const actions = {
  setScrollDirection({ commit }, direction) {
    commit(Types.UPDATE_SCROLL_DIRECTION, { direction });
  },
  setScrollPosition({ commit }, position) {
    commit(Types.UPDATE_SCROLL_POSITION, { position });
  },
};

const mutations = {
  [Types.UPDATE_SCROLL_DIRECTION]: function(state, { direction }) {
    state.SCROLL_DIRECTION = direction;
  },
  [Types.UPDATE_SCROLL_POSITION]: function(state, { position }) {
    state.SCROLL_POSITION = position;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
