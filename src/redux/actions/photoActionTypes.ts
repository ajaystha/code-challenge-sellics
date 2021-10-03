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

export interface RandomPhotoLoading {
  type: typeof RANDOM_PHOTO_LOADING;
}
export interface RandomPhotoSuccess {
  type: typeof RANDOM_PHOTO_SUCCESS;
  payload: Photo;
}
export interface RandomPhotoFailed {
  type: typeof RANDOM_PHOTO_FAILED;
}

export interface ApprovedPhotoSaveSuccess {
  type: typeof APPROVED_PHOTO_SAVE_SUCCESS;
  payload: Photo[];
}
export interface ApprovedPhotoSaveFailed {
  type: typeof APPROVED_PHOTO_SAVE_FAILED;
}

export interface RejectedPhotoSaveSuccess {
  type: typeof REJECTED_PHOTO_SAVE_SUCCESS;
  payload: string[];
}
export interface RejectedPhotoSaveFailed {
  type: typeof REJECTED_PHOTO_SAVE_FAILED;
}

export type PhotoDispatchTypes =
  | RandomPhotoLoading
  | RandomPhotoSuccess
  | RandomPhotoFailed
  | ApprovedPhotoSaveSuccess
  | ApprovedPhotoSaveFailed
  | RejectedPhotoSaveSuccess
  | RejectedPhotoSaveFailed;
