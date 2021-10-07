import { Photo } from 'types/photo';
import {
  RANDOM_PHOTO_LOADING,
  RANDOM_PHOTO_SUCCESS,
  RANDOM_PHOTO_FAILED,
} from '../constants/photoConstants';
import { PhotoDispatchTypes } from '@redux/actions/photoActionTypes';

export interface RandomPhotoStateType {
  loading: boolean;
  photo: Photo | null;
}

const defaultState: RandomPhotoStateType = {
  loading: false,
  photo: null,
};

export const randomPhotoReducer = (
  state: RandomPhotoStateType = defaultState,
  action: PhotoDispatchTypes
): RandomPhotoStateType => {
  switch (action.type) {
    case RANDOM_PHOTO_LOADING:
      return {
        loading: true,
        photo: null,
      };

    case RANDOM_PHOTO_SUCCESS:
      return {
        loading: false,
        photo: action.payload,
      };

    case RANDOM_PHOTO_FAILED:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};
