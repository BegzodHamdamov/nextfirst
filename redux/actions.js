import { getPhotos, getTodos, getAlbums, getPosts } from "../api";
import {
  SET_PHOTOS,
  SET_TODOS,
  SET_ALBUMS,
  SET_POSTS,
  TOGGLE_MENU,
} from "./types";

export const setTodos = async (dispatch) => {
  const data = await getTodos();

  console.log(data);

  dispatch({ type: SET_TODOS, payload: data });
};

export const toggleMenu = (dispatch) => {
  dispatch({ type: TOGGLE_MENU });
};

export const setPhotos = async (dispatch) => {
  const data = await getPhotos();

  console.log(22222);

  dispatch({ type: SET_PHOTOS, payload: data });
};

export const setAlbums = async (dispatch) => {
  const data = await getAlbums();

  console.log(111111);

  dispatch({ type: SET_ALBUMS, payload: data });
};

export const setPosts = async (dispatch) => {
  const data = await getPosts();

  console.log(22222);

  dispatch({ type: SET_POSTS, payload: data });
};
