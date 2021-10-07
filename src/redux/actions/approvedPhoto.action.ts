import { Dispatch } from 'redux';
import toast from 'react-hot-toast';

import { STORAGE_KEY_APPROVED } from '@redux/constants/photoConstants';
import { Photo } from 'types/photo';
import {
  APPROVED_PHOTO_SAVE_SUCCESS,
  APPROVED_PHOTO_SAVE_FAILED,
} from '../constants/photoConstants';
import { PhotoDispatchTypes } from './photoActionTypes';
import { AppStateType } from '@redux/reducers/rootReducer';

import { getRandomPhoto } from './randomPhotoAction';

export const approvePhoto = (newApprovedPhoto: Photo) => {
  return function (
    dispatch: Dispatch<PhotoDispatchTypes>,
    getState: () => AppStateType
  ) {
    try {
      const { approvedPhotos } = getState();

      const updatedApprovedPhotos: Photo[] = [
        ...approvedPhotos.photos,
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
    } catch (err: any) {
      const errMessage =
        err?.response?.data?.errors[0] || 'Approving photo failed';

      toast.error(errMessage);
      dispatch({ type: APPROVED_PHOTO_SAVE_FAILED });
    }
  };
};
