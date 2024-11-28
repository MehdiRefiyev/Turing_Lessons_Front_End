import { configureStore } from '@reduxjs/toolkit';
import musicReducer from './slices/musicSlice';

const store = configureStore({
    reducer: {
        music: musicReducer,
    },
});

export default store;
