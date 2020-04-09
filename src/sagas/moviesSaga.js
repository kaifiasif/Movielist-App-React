
import { put, call } from 'redux-saga/effects'

import { getUpcoming, getPopular, getMovieDetails, searchMovie } from "../services/api"
import { SEARCH_MOVIE,  addMovieDetails, addUpcomingMovies, addPopularMovies } from "../stores/moviesReducer"

export  function* getUpcomingMoviesSaga(action){
    const results = yield call(getUpcoming, action.pageIndex)
    if(results) {
        yield put(addUpcomingMovies(results))
    }
}

export  function* getPopularMoviesSaga(action){
    const results = yield call(getPopular, action.payload)
    if(results) {
        yield put(addPopularMovies(results))
    }
}
export function* movieDetailsSaga(action){
    const results = yield call(getMovieDetails, action.payload)
    if(results) {
        yield put(addMovieDetails(results))
    }
}

export function* searchMovieSaga(action){
    const results = yield call(searchMovie, action.payload)
    if(results) {
        yield put({ type:SEARCH_MOVIE, payload: results })
    }
}