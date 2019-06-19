import { takeLatest, all } from 'redux-saga/effects'
// import API from '../Services/Api'
import FixtureAPI from '../Services/FixtureApi'
import DebugConfig from '../Config/DebugConfig'
import { API } from '../Services/Api'

/* ------------- Types ------------- */

import { StartupTypes } from '../Redux/StartupRedux'
import { GithubTypes } from '../Redux/GithubRedux'
import { HomeTypes } from '../Redux/HomeRedux'

/* ------------- Sagas ------------- */

import { startup } from './StartupSagas'
import { getUserAvatar } from './GithubSagas'
import { getPeopleResults, getSearcheResults } from './HomeSaga'

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield all([
    // some sagas only receive an action
    takeLatest(StartupTypes.STARTUP, startup),
    takeLatest(HomeTypes.FETCH_RESULTS_REQUEST, getPeopleResults)
    // takeLatest(HomeTypes.FETCH_SEARCH_REQUEST, getSearcheResults)
  ])
}
