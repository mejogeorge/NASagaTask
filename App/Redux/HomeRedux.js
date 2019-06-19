import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  fetchResultsRequest: ['url'],
  fetchResultsSuccess: ['data'],
  fetchResultsFailure: ['error'],

  updateResults: ['initialURL'],
  requestFailed: null
})

export const HomeTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  pageNumber: 0,
  isoading: true,
  isOnNextCall: false,
  refreshingIndicator: false,
  dataSource: [],
  nextUrl: '',
  isSearchRequest: false
})

// export const INITIAL_STATE = Immutable({
//   searchTerm: '',
//   searching: false
// })

/* ------------- Reducers ------------- */
export const request = (state) => state.merge({ isLoading: true })

export const success = (state, {data}) => {
  return state.merge({ isLoading: false, dataSource: data })
}

export const failed = state => {
  return state.merge({ isLoading: false })
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.FETCH_RESULTS_REQUEST]: request,
  [Types.FETCH_RESULTS_SUCCESS]: success,
  [Types.FETCH_RESULTS_FAILURE]: failed
})
