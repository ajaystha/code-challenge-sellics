import { ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  DefaultStateType,
  RandomPhotoStateType,
} from '@redux/reducers/photoReducer';
import { getRandomPhoto } from '@redux/actions/photoAction';

import PhotoWrapper from './styled/PhotoWrapper.styled';
import Image from './styled/Image.styled';
import PhotoButtons from './PhotoButtons';
import Button from './styled/Button.styled';
import PlusIcon from '@components/icons/Plus';
import Spinner from './styled/Spinner.styled';

export default function PhotoViewer(): ReactElement {
  const dispatch = useDispatch();

  const { loading, photo }: RandomPhotoStateType = useSelector(
    (state: DefaultStateType) => state.randomPhoto
  );

  let imageUrl: string = '';
  if (photo) {
    imageUrl = photo.urls.regular;
  }

  return (
    <>
      <PhotoWrapper>
        {loading ? (
          <Spinner />
        ) : imageUrl ? (
          <Image image={imageUrl} />
        ) : (
          <Button onClick={() => dispatch(getRandomPhoto())}>
            <PlusIcon fill="#e3e8f0" width="150" height="150" />
          </Button>
        )}
      </PhotoWrapper>

      <PhotoButtons photoToShow={photo} />
    </>
  );
}
