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
import { PhotoDispatchTypes } from '@redux/actions/photoActionTypes';

const STORAGE_KEY_APPROVED = 'IAA_PHOTOS_APPROVED';
const STORAGE_KEY_REJECTED = 'IAA_PHOTOS_REJECTED';

export interface RandomPhotoStateType {
  loading: boolean;
  photo: Photo | null;
}
export interface DefaultStateType {
  randomPhoto: RandomPhotoStateType;
  approvedPhotos: Photo[];
  rejectedPhotos: string[];
}

const approvedPhotoJson = localStorage.getItem(STORAGE_KEY_APPROVED);
const approvedPhotos = approvedPhotoJson ? JSON.parse(approvedPhotoJson) : [];

const rejectedPhotoJson = localStorage.getItem(STORAGE_KEY_REJECTED);
const rejectedPhotos = rejectedPhotoJson ? JSON.parse(rejectedPhotoJson) : [];

const defaultState: DefaultStateType = {
  randomPhoto: {
    loading: false,
    photo: null,
  },
  approvedPhotos,
  rejectedPhotos,
};

export const PhotoReducer = (
  state: DefaultStateType = defaultState,
  action: PhotoDispatchTypes
): DefaultStateType => {
  switch (action.type) {
    // RANDOM PHOTO
    case RANDOM_PHOTO_LOADING:
      return {
        ...state,
        randomPhoto: {
          loading: true,
          photo: null,
        },
      };
    case RANDOM_PHOTO_SUCCESS:
      return {
        ...state,
        randomPhoto: {
          loading: false,
          photo: action.payload,
        },
      };
    case RANDOM_PHOTO_FAILED:
      return {
        ...state,
        randomPhoto: {
          ...state.randomPhoto,
          loading: false,
        },
      };

    // APPROVED PHOTO
    case APPROVED_PHOTO_SAVE_SUCCESS:
      return {
        ...state,
        approvedPhotos: action.payload,
      };
    case APPROVED_PHOTO_SAVE_FAILED:
      return state;

    // REJECTED PHOTO
    case REJECTED_PHOTO_SAVE_SUCCESS:
      return {
        ...state,
        rejectedPhotos: action.payload,
      };
    case REJECTED_PHOTO_SAVE_FAILED:
      return state;

    default:
      return state;
  }
};
