import { Loader } from 'components/Loader/Loader';
import {lazy,Suspense} from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
const HomePage = lazy(() => import ("../../pages/HomePage/HomePage"));
const MoviePage = lazy(() => import ("../../pages/MoviePage/MoviePage"));
const MovieDetails = lazy(() => import  ("pages/MovieDetails/MovieDetails"));
const MovieDetailsCast = lazy(() => import  ("pages/MovieDetailsCast/MovieDetailsCast"));
const MovieDetailsReviews = lazy(() => import  ("pages/MovieDetailsReviews/MovieDetailsReviews"));

const UserRoutes = () => {
  
  return (
    <Suspense fallback={<Loader/>}>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/movies" element={<MoviePage />} />
      <Route path="/movies/:movieId" element={<MovieDetails />}>
        <Route path="cast" element={<MovieDetailsCast />} />
        <Route path="reviews" element={<MovieDetailsReviews />} />
      </Route>

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
    </Suspense>
    
  );
};

export default UserRoutes;
