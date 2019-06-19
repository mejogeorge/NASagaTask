import { call, put } from 'redux-saga/effects'
import { path } from 'ramda'
import HomeActions from '../Redux/HomeRedux'
const initialURL = 'https://swapi.co/api/people/?page=1'
// const searchURL = 'https://swapi.co/api/people/?search='
export function * getPeopleResults (action) {
  // make the call to the api
  const result = yield fetch(initialURL)
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

  // happy flow

  //   if (response.ok) {
  //     // const firstUser = path(['data', 'items'], response)[0]
  //     // const avatar = firstUser.avatar_url
  //     // do data conversion here if needed
  //     console.log('response', response.results)
  //     yield put(HomeActions.updateResults(response.results))
  //   } else {
  //     yield put(HomeActions.requestFailed())
  //   }
}
