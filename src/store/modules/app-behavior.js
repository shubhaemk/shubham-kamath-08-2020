const INITIAL_SCROLL_POSITION = 0;
const INITIAL_SCROLL_DIRECTION = "UP";
const INITIAL_SCREEN_NAME = "HOME";

const Types = {
  UPDATE_SCROLL_DIRECTION: "UPDATE_SCROLL_DIRECTION",
  UPDATE_SCROLL_POSITION: "UPDATE_SCROLL_POSITION",
  UPDATE_SCREEN_NAME: "UPDATE_SCREEN_NAME",
};

const state = () => ({
  SCROLL_POSITION: INITIAL_SCROLL_POSITION,
  SCROLL_DIRECTION: INITIAL_SCROLL_DIRECTION,
  SCREEN_NAME: INITIAL_SCREEN_NAME,
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
  setScreenName({ commit }, screenName) {
    commit(Types.UPDATE_SCREEN_NAME, { screenName });
  },
};

const mutations = {
  [Types.UPDATE_SCROLL_DIRECTION]: function(state, { direction }) {
    state.SCROLL_DIRECTION = direction;
  },
  [Types.UPDATE_SCROLL_POSITION]: function(state, { position }) {
    state.SCROLL_POSITION = position;
  },
  [Types.UPDATE_SCREEN_NAME]: function(state, { screenName }) {
    state.SCREEN_NAME = screenName;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
