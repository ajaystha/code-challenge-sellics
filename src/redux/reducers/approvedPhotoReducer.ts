import { Photo } from 'types/photo';
import {
  APPROVED_PHOTO_SAVE_SUCCESS,
  APPROVED_PHOTO_SAVE_FAILED,
} from '../constants/photoConstants';
import { PhotoDispatchTypes } from '@redux/actions/photoActionTypes';

const STORAGE_KEY_APPROVED = 'IAA_PHOTOS_APPROVED';

export interface ApprovedPhotoStateType {
  photos: Photo[];
}

const approvedPhotoJson = localStorage.getItem(STORAGE_KEY_APPROVED);
const approvedPhotos = approvedPhotoJson ? JSON.parse(approvedPhotoJson) : [];

const defaultState: ApprovedPhotoStateType = {
  photos: approvedPhotos,
};

export const approvedPhotoReducer = (
  state: ApprovedPhotoStateType = defaultState,
  action: PhotoDispatchTypes
): ApprovedPhotoStateType => {
  switch (action.type) {
    case APPROVED_PHOTO_SAVE_SUCCESS:
      return {
        photos: action.payload,
      };

    case APPROVED_PHOTO_SAVE_FAILED:
      return state;

    default:
      return state;
  }
};
