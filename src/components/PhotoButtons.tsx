import { ReactElement } from 'react';
import { useDispatch } from 'react-redux';

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
          <Button backgroundColor="#454545" onClick={handleRejectPhoto}>
            <CloseIcon fill="#fff" width="24" height="24" />
          </Button>

          <Button backgroundColor="#3b55e6" onClick={handleApprovePhoto}>
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
