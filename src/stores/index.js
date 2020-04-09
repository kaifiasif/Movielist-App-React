import { combineReducers, createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas'
// import logger from 'redux-logger'
import { moviesReducer } from './moviesReducer'
import { loadState, saveState } from '../utils/localStorage'

const persistedState = loadState();

const rootReducer = combineReducers({
    moviesReducer
})

const sagaMiddleware = createSagaMiddleware()
// const store = createStore(rootReducer,persistedState, applyMiddleware(logger, sagaMiddleware))
const store = createStore(rootReducer, persistedState, applyMiddleware( sagaMiddleware))

sagaMiddleware.run(rootSaga)

store.subscribe(() => {
    saveState({
      moviesReducer: store.getState().moviesReducer
    });
  });

export default store
