import { all, call, fork, takeLatest } from 'redux-saga/effects'
import {
    getUpcomingMoviesSaga, 
    getPopularMoviesSaga,
    movieDetailsSaga,
    searchMovieSaga
} from './moviesSaga';
import { GET_POPULAR_MOVIES, GET_SEARCH_SUGGESTIONS, GET_MOVIE_DETAILS} from '../stores/moviesReducer';


function* startup() {
  // Get filters, events, news
  yield call(getUpcomingMoviesSaga, 1)
  yield call(getPopularMoviesSaga, {})
 
}



export default function* rootSaga() {
  yield all([
    fork(startup),
    takeLatest(GET_SEARCH_SUGGESTIONS, searchMovieSaga),
    takeLatest(GET_MOVIE_DETAILS, movieDetailsSaga),
    takeLatest(GET_POPULAR_MOVIES, getPopularMoviesSaga)
  ])
}
