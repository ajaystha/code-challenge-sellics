import { ReactElement, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Photo } from 'types/photo';
import {
  getRandomPhoto,
  // approvePhoto,
  // rejectPhoto
} from '@redux/actions/photoAction';
import { DefaultStateType } from '@redux/reducers/photoReducer';

interface AppProps {}

function App({}: AppProps): ReactElement {
  const dispatch = useDispatch();

  const randomPhoto = useSelector(
    (state: DefaultStateType) => state.randomPhoto
  );
  const approvedPhotos = useSelector(
    (state: DefaultStateType) => state.approvedPhotos
  );
  const rejectedPhotos = useSelector(
    (state: DefaultStateType) => state.rejectedPhotos
  );

  const [photoToShow, setPhotoToShow] = useState<Photo | null>(null);

  useEffect(() => {
    console.log(approvedPhotos);
  }, [approvedPhotos]);

  useEffect(() => {
    if (!randomPhoto) return;

    const randomPhotoId: string = randomPhoto.photo?.id as string;
    if (rejectedPhotos.includes(randomPhotoId)) {
      dispatch(getRandomPhoto());
      return;
    }

    setPhotoToShow(randomPhoto.photo);
  }, [randomPhoto]);

  const onClickHandler = () => {
    dispatch(getRandomPhoto());
  };

  return (
    <div className="App">
      <h1>App page</h1>

      <button onClick={onClickHandler}>Get random photo</button>

      {photoToShow ? (
        <img
          src={randomPhoto.photo?.urls.regular}
          alt={randomPhoto.photo?.description}
        />
      ) : (
        <div>click +</div>
      )}
    </div>
  );
}

export default App;
