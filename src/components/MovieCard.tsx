import React from 'react';
import { Movie } from '../pages/HomePage';

const IMAGE_URL = 'https://image.tmdb.org/t/p/w200';

type MovieCardProps = {
  movie: Movie;
};

export const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <div className="flex space-x-4">
      <img
        src={`${IMAGE_URL}${movie.poster_path}`}
        alt=""
        className="w-25 h-32 rounded-xl object-cover"
      />
      <div>
        <div className="text-xl font-bold mb-2">{movie.title}</div>
        <div className="text-gray-700 truncate-2-lines">{movie.overview}</div>
        <div className="text-gray-500">{`평점 : ${movie.vote_averate}`}</div>
      </div>
    </div>
  );
};
