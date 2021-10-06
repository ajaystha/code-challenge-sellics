import { ReactElement, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { ThemeContext } from 'styled-components';

import { Photo } from 'types/photo';
import { approvePhoto, rejectPhoto } from '@redux/actions/photoAction';

import Info from './styled/Message';
import PhotoButtonWrapper from './styled/PhotoButtonWrapper';
import Button from './styled/Button.styled';
import Divider from './styled/Divider.styled';
import CheckIcon from '@components/icons/Check';
import CloseIcon from '@components/icons/Close';

interface PhotoButtonsProps {
  photoToShow: Photo | null;
}

export default function PhotoButtons(props: PhotoButtonsProps): ReactElement {
  const { photoToShow } = props;

  const dispatch = useDispatch();
  const themeContext = useContext(ThemeContext);

  const handleApprovePhoto = () => {
    const photoToApprove: Photo = photoToShow as Photo;
    dispatch(approvePhoto(photoToApprove));
  };
  const handleRejectPhoto = () => {
    const photoToRejectId: string = photoToShow?.id as string;
    dispatch(rejectPhoto(photoToRejectId));
  };

  return (
    <>
      {photoToShow ? (
        <PhotoButtonWrapper>
          <Button
            backgroundColor={themeContext.colors.darkGray}
            onClick={handleRejectPhoto}
          >
            <CloseIcon fill="#fff" width="24" height="24" />
          </Button>

          <Button
            backgroundColor={themeContext.colors.blue}
            onClick={handleApprovePhoto}
          >
            <CheckIcon fill="#fff" width="24" height="24" />
          </Button>
        </PhotoButtonWrapper>
      ) : (
        <>
          <Divider />

          <Info>Click on the + in order to get image recommendations</Info>
        </>
      )}
    </>
  );
}
