import { ReactElement, useContext } from 'react';
import { useSelector } from 'react-redux';
import { ThemeContext } from 'styled-components';
import Carousel from 'react-elastic-carousel';

import { Photo } from 'types/photo';
import { DefaultStateType } from '@redux/reducers/photoReducer';

import PhotoWrapper from './styled/PhotoWrapper.styled';
import Image from './styled/Image.styled';
import StyledApprovedImageViewer from './styled/ApprovedPhotoViewer.styled';
import PlusIcon from '@components/icons/Plus';

export default function ApprovedImageViewer(): ReactElement {
  const themeContext = useContext(ThemeContext);

  const photos: Photo[] = useSelector(
    (state: DefaultStateType) => state.approvedPhotos
  );

  return (
    <StyledApprovedImageViewer>
      {photos.length < 1 ? (
        <PhotoWrapper height="75px" width="150px">
          <PlusIcon
            fill={themeContext.colors.lightGray}
            width="32"
            height="32"
          />
        </PhotoWrapper>
      ) : (
        <Carousel
          itemsToShow={3}
          pagination={false}
          isRTL={false}
          itemPadding={[0, 8, 0, 0]}
        >
          {photos.map((photo) => (
            <PhotoWrapper key={photo.id} height="75px" width="150px">
              <Image image={photo.urls.small} />
            </PhotoWrapper>
          ))}
        </Carousel>
      )}
    </StyledApprovedImageViewer>
  );
}
