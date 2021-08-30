import initialState from "./initialState";
import {
  SET_PHOTOS,
  SET_TODOS,
  SET_POSTS,
  SET_ALBUMS,
  TOGGLE_MENU,
} from "./types";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TODOS:
      return { ...state, todos: action.payload };

    case SET_PHOTOS:
      return { ...state, photos: action.payload };

    case SET_POSTS:
      return { ...state, posts: action.payload };

    case SET_ALBUMS:
      return { ...state, albums: action.payload };

    case TOGGLE_MENU:
      return { ...state, isSidebarShow: !state.isSidebarShow };

    default:
      return state;
  }
};

export default reducer;