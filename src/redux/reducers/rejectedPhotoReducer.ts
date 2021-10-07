import {
  REJECTED_PHOTO_SAVE_SUCCESS,
  REJECTED_PHOTO_SAVE_FAILED,
} from '../constants/photoConstants';
import { PhotoDispatchTypes } from '@redux/actions/photoActionTypes';

const STORAGE_KEY_REJECTED = 'IAA_PHOTOS_REJECTED';

export interface RejectedPhotoStateType {
  photos: string[];
}

const rejectedPhotoJson = localStorage.getItem(STORAGE_KEY_REJECTED);
const rejectedPhotos = rejectedPhotoJson ? JSON.parse(rejectedPhotoJson) : [];

const defaultState: RejectedPhotoStateType = {
  photos: rejectedPhotos,
};

export const rejectedPhotoReducer = (
  state: RejectedPhotoStateType = defaultState,
  action: PhotoDispatchTypes
): RejectedPhotoStateType => {
  switch (action.type) {
    case REJECTED_PHOTO_SAVE_SUCCESS:
      return {
        photos: action.payload,
      };

    case REJECTED_PHOTO_SAVE_FAILED:
      return state;

    default:
      return state;
  }
};
