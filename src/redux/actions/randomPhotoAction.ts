import { Dispatch } from 'redux';
import { AxiosResponse } from 'axios';
import toast from 'react-hot-toast';

import { http } from '@api/http';
import { checkRejectedPhotos } from '@shared/helper';
import { Photo } from 'types/photo';
import {
  RANDOM_PHOTO_LOADING,
  RANDOM_PHOTO_SUCCESS,
  RANDOM_PHOTO_FAILED,
} from '../constants/photoConstants';
import { PhotoDispatchTypes } from './photoActionTypes';
import { AppStateType } from '@redux/reducers/rootReducer';

export const getRandomPhoto = () => {
  return async function (
    dispatch: Dispatch<PhotoDispatchTypes>,
    getState: () => AppStateType
  ) {
    dispatch({ type: RANDOM_PHOTO_LOADING });

    try {
      const res: AxiosResponse = await http.get('/photos/random');

      const { data }: { data: Photo } = res;
      const { rejectedPhotos } = getState();

      const isAlreadyRejected = checkRejectedPhotos(
        data,
        rejectedPhotos.photos
      );

      if (isAlreadyRejected) {
        dispatch(getRandomPhoto());
        return;
      }

      dispatch({ type: RANDOM_PHOTO_SUCCESS, payload: data });
    } catch (err: any) {
      const errMessage =
        err?.response?.data?.errors[0] || 'Fetching random photo failed';

      toast.error(errMessage);
      dispatch({ type: RANDOM_PHOTO_FAILED });
    }
  };
};
