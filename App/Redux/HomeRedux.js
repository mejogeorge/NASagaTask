import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  fetchResultsRequest: ['url', 'clear'],
  fetchResultsSuccess: ['data'],
  fetchResultsFailure: ['error'],
  fetchSearchRequest: ['text'],
  fetchSearchSuccess: ['data'],
  fetchSearchFailure: ['error'],
  storePeopleId: ['id']
})

export const HomeTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  pageNumber: 0,
  isLoading: true,
  isOnNextCall: false,
  refreshingIndicator: false,
  dataSource: [],
  searchDataSource: [],
  nextUrl: '',
  isSearchRequest: false,
  peopleId: null
})

/* ------------- Reducers ------------- */
// export const request = (state, { clear }) => {
//   if (clear) {
//     return state.merge({ isLoading: true, dataSource: [], nextUrl: '' })
//   }
//   return state.merge({ isLoading: true })
// }

export const request = state => {
  return state.merge({ isLoading: true, isSearchRequest: false })
}

export const success = (state, { data }) => {
  return state.merge({
    isLoading: false,
    dataSource: state.dataSource.concat(data)
  })
}

export const failed = state => {
  return state.merge({ isLoading: false, isSearchRequest: true })
}

export const searchRequest = state =>
  state.merge({ isLoading: true, isSearchRequest: true })

export const searchSuccess = (state, { data }) => {
  return state.merge({
    isLoading: false,
    searchDataSource: state.searchDataSource.concat(data)
  })
}

export const searchFailure = state => state.merge({ isLoading: false })

export const storePeopleId = (state, id) => state.merge({ peopleId: id })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.FETCH_RESULTS_REQUEST]: request,
  [Types.FETCH_RESULTS_SUCCESS]: success,
  [Types.FETCH_RESULTS_FAILURE]: failed,
  [Types.FETCH_SEARCH_REQUEST]: searchRequest,
  [Types.FETCH_SEARCH_SUCCESS]: searchSuccess,
  [Types.FETCH_SEARCH_FAILURE]: searchFailure,
  [Types.STORE_PEOPLE_ID]: storePeopleId
})
