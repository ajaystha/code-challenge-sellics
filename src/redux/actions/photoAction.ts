import { Dispatch } from 'redux';
import { AxiosResponse } from 'axios';

import { http } from '@api/http';
import { Photo } from 'types/photo';
import {
  RANDOM_PHOTO_LOADING,
  RANDOM_PHOTO_SUCCESS,
  RANDOM_PHOTO_FAILED,
  APPROVED_PHOTO_SAVE_SUCCESS,
  APPROVED_PHOTO_SAVE_FAILED,
  REJECTED_PHOTO_SAVE_SUCCESS,
  REJECTED_PHOTO_SAVE_FAILED,
} from '../constants/photoConstants';
import { PhotoDispatchTypes } from './photoActionTypes';
import { DefaultStateType } from '../reducers/photoReducer';

const STORAGE_KEY_APPROVED = 'IAA_PHOTOS_APPROVED';
const STORAGE_KEY_REJECTED = 'IAA_PHOTOS_REJECTED';

export const getRandomPhoto = () => {
  return async function (
    dispatch: Dispatch<PhotoDispatchTypes>,
    getState: () => DefaultStateType
  ) {
    const { rejectedPhotos } = getState();

    dispatch({ type: RANDOM_PHOTO_LOADING });

    try {
      const res: AxiosResponse = await http.get('/random');
      // const res: AxiosResponse = await http.get('/photos/random');

      dispatch({ type: RANDOM_PHOTO_SUCCESS, payload: res.data });
    } catch (error) {
      dispatch({ type: RANDOM_PHOTO_FAILED });
    }
  };
};

export const approvePhoto = (selectedPhotos: Photo[]) => {
  return function (dispatch: Dispatch<PhotoDispatchTypes>) {
    try {
      localStorage.setItem(
        STORAGE_KEY_APPROVED,
        JSON.stringify(selectedPhotos)
      );

      dispatch({ type: APPROVED_PHOTO_SAVE_SUCCESS, payload: selectedPhotos });
    } catch (error) {
      dispatch({ type: APPROVED_PHOTO_SAVE_FAILED });
    }
  };
};

export const rejectPhoto = (rejectedPhotos: string[]) => {
  return function (dispatch: Dispatch<PhotoDispatchTypes>) {
    try {
      localStorage.setItem(
        STORAGE_KEY_REJECTED,
        JSON.stringify(rejectedPhotos)
      );

      dispatch({ type: REJECTED_PHOTO_SAVE_SUCCESS, payload: rejectedPhotos });
    } catch (error) {
      dispatch({ type: REJECTED_PHOTO_SAVE_FAILED });
    }
  };
};
