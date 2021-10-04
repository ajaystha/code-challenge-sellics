import { Photo } from 'types/photo';

export const checkRejectedPhotos = (
  currentPhoto: Photo,
  rejectedPhotos: string[]
) => {
  return rejectedPhotos.includes(currentPhoto.id);
};
