const INITIAL_STATE = {
    popularMovies : [],
    upcomingMovies : [],
    searchSuggestions : [],
    movieDetail: null
}

export const SAVE_UPCOMING_MOVIES = "SAVE_UPCOMING_MOVIES"
export const GET_UPCOMING_MOVIES = "GET_UPCOMING_MOVIES"
export const GET_POPULAR_MOVIES = "GET_POPULAR_MOVIES"
export const SAVE_POPULAR_MOVIES = "SAVE_POPULAR_MOVIES"
export const APPEND_MOVIES = "APPEND_MOVIES"
export const GET_MOVIE_DETAILS = "GET_MOVIE_DETAILS"
export const GET_SEARCH_SUGGESTIONS = "GET_SEARCH_SUGGESTIONS"
export const ADD_SEARCH_SUGGESTIONS = "ADD_SEARCH_SUGGESTIONS"
export const CLEAR_SEARCH = "CLEAR_SEARCH"
export const SEARCH_MOVIE = "SEARCH_MOVIE"
export const SAVE_MOVIE_DETAILS = "SAVE_MOVIE_DETAILS"

export const searchSuggestions = (payload) => ({ type: SEARCH_MOVIE, payload: payload })
export const addUpcomingMovies = (payload) => ({ type: SAVE_UPCOMING_MOVIES, payload: payload })
export const addPopularMovies = (payload) => ({ type: SAVE_POPULAR_MOVIES, payload: payload})
export const addMovieDetails = (payload) => ({ type: SAVE_MOVIE_DETAILS, payload: payload})

export const moviesReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case SAVE_UPCOMING_MOVIES: {
            action.payload.results.sort((d1, d2) => new Date(d2.release_date).getTime() - new Date(d1.release_date).getTime());
            return {...state, upcomingMovies: [...state.upcomingMovies, ...action.payload.results]}
        }
        case SAVE_POPULAR_MOVIES: {
            action.payload.results.sort((d1, d2) => new Date(d2.release_date).getTime() - new Date(d1.release_date).getTime());
            return {...state, popularMovies: [...state.popularMovies, ...action.payload.results]}
        }
        case SAVE_MOVIE_DETAILS : {
            return {...state, movieDetail: action.payload.data}
        }
        case SEARCH_MOVIE: {
            return {...state, searchSuggestions: action.payload.results }
        }
        case CLEAR_SEARCH: {
            return {...state, searchSuggestions: []}
        }
        default: 
            return state

    }
}