import { createAction } from '@reduxjs/toolkit';


export const getFilmsByGenre = createAction<{ genre: string }>('films/getFilmsByGenre');
