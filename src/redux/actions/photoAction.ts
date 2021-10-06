import { Dispatch } from 'redux';
import { AxiosResponse } from 'axios';

import { http } from '@api/http';
import { checkRejectedPhotos } from '@shared/helper';
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
    dispatch({ type: RANDOM_PHOTO_LOADING });

    try {
      // const res: AxiosResponse = await http.get('/random');
      const res: AxiosResponse = await http.get('/photos/random');

      const { data }: { data: Photo } = res;
      const { rejectedPhotos } = getState();

      const isAlreadyRejected = checkRejectedPhotos(data, rejectedPhotos);

      if (isAlreadyRejected) {
        dispatch(getRandomPhoto());
        return;
      }

      dispatch({ type: RANDOM_PHOTO_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: RANDOM_PHOTO_FAILED });
    }
  };
};

export const approvePhoto = (newApprovedPhoto: Photo) => {
  return function (
    dispatch: Dispatch<PhotoDispatchTypes>,
    getState: () => DefaultStateType
  ) {
    try {
      const { approvedPhotos } = getState();

      const updatedApprovedPhotos: Photo[] = [
        ...approvedPhotos,
        newApprovedPhoto,
      ];

      localStorage.setItem(
        STORAGE_KEY_APPROVED,
        JSON.stringify(updatedApprovedPhotos)
      );

      dispatch({
        type: APPROVED_PHOTO_SAVE_SUCCESS,
        payload: updatedApprovedPhotos,
      });

      dispatch(getRandomPhoto());
    } catch (error) {
      dispatch({ type: APPROVED_PHOTO_SAVE_FAILED });
    }
  };
};

export const rejectPhoto = (newRejectedPhoto: string) => {
  return function (
    dispatch: Dispatch<PhotoDispatchTypes>,
    getState: () => DefaultStateType
  ) {
    try {
      const { rejectedPhotos } = getState();

      const updatedRejectedPhotos: string[] = [
        ...rejectedPhotos,
        newRejectedPhoto,
      ];

      localStorage.setItem(
        STORAGE_KEY_REJECTED,
        JSON.stringify(updatedRejectedPhotos)
      );

      dispatch({
        type: REJECTED_PHOTO_SAVE_SUCCESS,
        payload: updatedRejectedPhotos,
      });

      dispatch(getRandomPhoto());

      return;
    } catch (error) {
      dispatch({ type: REJECTED_PHOTO_SAVE_FAILED });
    }
  };
};
