import { combineReducers } from 'redux';

import { randomPhotoReducer } from './randomPhotoReducer';
import { approvedPhotoReducer } from './approvedPhotoReducer';
import { rejectedPhotoReducer } from './rejectedPhotoReducer';

const rootReducer = combineReducers({
  randomPhoto: randomPhotoReducer,
  approvedPhotos: approvedPhotoReducer,
  rejectedPhotos: rejectedPhotoReducer,
});

export type AppStateType = ReturnType<typeof rootReducer>;

export default rootReducer;
