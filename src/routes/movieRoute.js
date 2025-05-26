import express from "express";
import { createMovie, getMovies, getMovieById, updateMovie } from "../controllers/movieController.js";
import { deleteSpecificMovie } from "../controllers/movieController.js";


const movieRouter = express.Router();

movieRouter.get('/', getMovies); //List of the Movies

movieRouter.get('/:id', getMovieById); //Get Specific Movie by Id

movieRouter.post('/', createMovie); //CREATE New Movies

movieRouter.put('/:id', updateMovie);

movieRouter.delete('/:id', deleteSpecificMovie);

export default movieRouter;