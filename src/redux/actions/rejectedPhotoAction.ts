import { Dispatch } from 'redux';
import toast from 'react-hot-toast';

import { STORAGE_KEY_REJECTED } from '@redux/constants/photoConstants';
import {
  REJECTED_PHOTO_SAVE_SUCCESS,
  REJECTED_PHOTO_SAVE_FAILED,
} from '../constants/photoConstants';
import { PhotoDispatchTypes } from './photoActionTypes';
import { AppStateType } from '@redux/reducers/rootReducer';

import { getRandomPhoto } from './randomPhotoAction';

export const rejectPhoto = (newRejectedPhoto: string) => {
  return function (
    dispatch: Dispatch<PhotoDispatchTypes>,
    getState: () => AppStateType
  ) {
    try {
      const { rejectedPhotos } = getState();

      const updatedRejectedPhotos: string[] = [
        ...rejectedPhotos.photos,
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
    } catch (err: any) {
      const errMessage =
        err?.response?.data?.errors[0] || 'Rejecting photo failed';

      toast.error(errMessage);
      dispatch({ type: REJECTED_PHOTO_SAVE_FAILED });
    }
  };
};
