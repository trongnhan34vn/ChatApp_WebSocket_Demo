import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import userSlice from './reducers/userSlice';
import { rootSaga } from '../saga';
import { applyMiddleware } from '@reduxjs/toolkit';


const sagaMiddleware = createSagaMiddleware();

const store = configureStore(
    {
        reducer: {
            user: userSlice
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            serializableCheck: false,
            thunk: false
        }).concat(sagaMiddleware),
        devTools: process.env.NODE_ENV !== 'production'
    }
)

sagaMiddleware.run(rootSaga);

export default store;