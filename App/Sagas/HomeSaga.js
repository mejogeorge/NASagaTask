import { put } from 'redux-saga/effects'
// import { path } from 'ramda'
import HomeActions from '../Redux/HomeRedux'
const initialURL = 'https://swapi.co/api/people/?page=1'
const searchURL = 'https://swapi.co/api/people/?search='
export function * getPeopleResults (action) {
  // make the call to the api
  console.tron.log('action.url', action)
  const result = yield fetch(action.url || initialURL)
    .then(response => response.json())
    .catch(error => ({
      error
    }))
  console.tron.log('DATA-:', result)
  if (result.error) {
    return yield put(HomeActions.fetchResultsFailure())
  } else {
    yield put(HomeActions.fetchResultsSuccess(result))
  }
}

export function * getSearcheResults (action) {
  // make the call to the api
  const result = yield fetch(action.url || searchURL)
    .then(response => response.json())
    .catch(error => ({
      error
    }))
  console.tron.log('DATA-ani:', result)
  if (result.error) {
    return yield put(HomeActions.fetchResultsFailure())
  } else {
    yield put(HomeActions.fetchResultsSuccess(result.results))
  }
}
