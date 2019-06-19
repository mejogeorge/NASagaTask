import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  fetchResultsRequest: ['url'],
  fetchResultsSuccess: ['data'],
  fetchResultsFailure: ['error'],
  fetchSerachRequest: ['url'],
  fetchSerachSuccess: ['data'],
  fetchSerachFailure: ['error']
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
  nextUrl: '',
  isSearchRequest: false
})

/* ------------- Reducers ------------- */
export const request = (state) => {
  return state.merge({ isLoading: true })
}

export const success = (state, { data }) => {
  const {results: dataSource, next: nextUrl} = data
  return state.merge({ isLoading: false, dataSource: [...state.dataSource, ...dataSource], nextUrl })
}

export const failed = state => {
  return state.merge({ isLoading: false })
}

export const serachRequest = state => state.merge({isLoading: true})

export const SerachSuccess = (state, {data}) => {
  return state.merge({isLoading: false, dataSource: data})
}

export const serachFailure = state => state.merge({isLoading: false})

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.FETCH_RESULTS_REQUEST]: request,
  [Types.FETCH_RESULTS_SUCCESS]: success,
  [Types.FETCH_RESULTS_FAILURE]: failed
  // [Types.FETCH_SEARCH_REQUEST]: serachRequest,
  // [Types.FETCH_SEARCH_SUCCESS]: SerachSuccess,
  // [Types.FETCH_SEARCH_FAILURE]: serachFailure
})
