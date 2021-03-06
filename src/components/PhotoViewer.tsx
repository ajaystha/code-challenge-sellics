import { ReactElement, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeContext } from 'styled-components';

import { RandomPhotoStateType } from '@redux/reducers/randomPhotoReducer';
import { AppStateType } from '@redux/reducers/rootReducer';
import { getRandomPhoto } from '@redux/actions/randomPhotoAction';

import PhotoWrapper from './styled/PhotoWrapper.styled';
import Image from './styled/Image.styled';
import PhotoButtons from './PhotoButtons';
import Button from './styled/Button.styled';
import PlusIcon from '@components/icons/Plus';
import Spinner from './styled/Spinner.styled';

export default function PhotoViewer(): ReactElement {
  const dispatch = useDispatch();
  const themeContext = useContext(ThemeContext);

  const { loading, photo }: RandomPhotoStateType = useSelector(
    (state: AppStateType) => state.randomPhoto
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
            <PlusIcon
              fill={themeContext.colors.lightGray}
              width="150"
              height="150"
            />
          </Button>
        )}
      </PhotoWrapper>

      <PhotoButtons photoToShow={photo} />
    </>
  );
}
