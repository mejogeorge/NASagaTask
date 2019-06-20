import { put } from 'redux-saga/effects'
// import { path } from 'ramda'
import HomeActions from '../Redux/HomeRedux'
let initialURL = 'https://swapi.co/api/people/?page=1'
let searchURL = 'https://swapi.co/api/people/?search='
let searchNextUrl = null

export function * getPeopleResults (action) {
  // make the call to the api
  const result = yield fetch(initialURL)
    .then(response => response.json())
    .catch(error => ({
      error
    }))
  if (result.error) {
    return yield put(HomeActions.fetchResultsFailure())
  } else {
    initialURL = result.next
    yield put(HomeActions.fetchResultsSuccess(result.results))
  }
}

export function * getSearcheResults (action) {
  let url = searchURL + action.text
  console.tron.log('serach url', url)
  const result = yield fetch(searchNextUrl || url)
    .then(response => response.json())
    .catch(error => ({
      error
    }))
  console.tron.log('DATA-sechar:', result)
  if (result.error) {
    return yield put(HomeActions.fetchSearchFailure())
  } else {
    searchNextUrl = result.next
    yield put(HomeActions.fetchSearchSuccess(result.results))
  }
}
