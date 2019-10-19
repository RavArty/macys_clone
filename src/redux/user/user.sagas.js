import {takeLatest, put, all, call} from 'redux-saga/effects'
import UserActionTypes from './user.types';

import {
  auth,
  googleProvider,
  createUserProfileDocument,
//  getCurrentUser
} from '../../firebase/firebase.utils';
//import userReducer from './user.reducer';
import {
  signInSuccess,
  signInFailure,
  emailSignInStart
} from './user.actions';

export function* getSnapshotFromUserAuth(userAuth, additionalData) {
  try {
    const userRef = yield call(
      createUserProfileDocument,
      userAuth,
      additionalData
    );
    const userSnapshot = yield userRef.get();
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* signInWithGoogle(){
  try{
    const {user} = yield auth.signInWithPopup(googleProvider)
    yield getSnapshotFromUserAuth(user);
 //   console.log('userReff: ', userRef)
  }catch(error){
    yield put(signInFailure(error))
  }

}

export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* onEmailSignInStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart)])
}