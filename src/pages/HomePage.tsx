import React, { useEffect, useState } from 'react';
import { CategoryButton } from '../components/CategoryButton';
import { MovieCard } from '../components/MovieCard';
import popcornImg from '../assets/images/popcorn.jpg';
import seatsImg from '../assets/images/cinema.jpg';
// import { TextField } from '../components/TextField';

const API_KEY = '032fbeca0b3ecfed391e6a7c5896b0c1';

export type Category = {
  id: number;
  label: string;
  url: string;
  image: string;
};

const CATEGORY_LIST = [
  { id: 0, label: '인기있는영화', url: '/popular', image: popcornImg },
  { id: 1, label: '현재 상영작', url: '/now_playing', image: seatsImg },
];

export type Movie = {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  vote_averate: number;
};

export const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [categoryIndex, setCategoryIndex] = useState(0);

  const setCategory = (index: number) => {
    setCategoryIndex(index);
  };

  const getData = async (categoryIndex: number) => {
    const url = `https://api.themoviedb.org/3/movie${CATEGORY_LIST[categoryIndex].url}?api_key=${API_KEY}&language=ko-KR&page=1`;
    const response = await fetch(url);
    if (response.status === 200) {
      const data = await response.json();
      setMovies(data.results);
    } else {
      throw new Error('데이터를 받아오지 못했습니다.');
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getData(categoryIndex);
  }, [categoryIndex]);

  return (
    <div className="m-4 space-y-10">
      <div className="space-y-4">
        <div className="text-2xl font-fold">New</div>
        <img
          src="https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d2luZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
          alt=""
          className="w-full h-72 object-cover rounded-2xl"
        />
      </div>

      <div className="space-y-4">
        <div className="text-2xl font-bold">Category</div>
        <div className="flex space-x-6">
          {CATEGORY_LIST.map((data) => (
            <CategoryButton
              key={data.id}
              category={data}
              onClick={setCategory}
              isSelected={data.id === categoryIndex}
            />
          ))}
        </div>
      </div>

      {/* <div>
        <div className="text-2xl font-bold mb-4">List</div>

        <div className="border p-4 rounded-md">
          <div>
            <img
              src="https://source.unsplash.com/random"
              alt=""
              className="w-full h-60 object-cover rounded-2xl"
            />
            <div className="mt-4">
              <div className="text-lg font-semibold">Card title</div>
              <div className="text-gray-500">
                Send vel turpis adipiscing penatibus orci neque.
              </div>
              <div className="mt-4 flex justify-end space-x-3">
                <div className="bg-gray-800 rounded-md text-white text-center px-4 py-2.5">
                  Button
                </div>
                <div className="bg-gray-800 rounded-md text-white text-center px-4 py-2.5">
                  Button
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="space-y-5">
        <div className="text-2xl font-bold">Today's Special</div>
        {!isLoading &&
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}

        <div className="bg-gray-100 h-0.5"></div>

        <div className="space-y-4">
          <img
            src="https://source.unsplash.com/random"
            alt=""
            className="w-full h-60 rounded-2xl object-cover"
          />
          <div>
            <div className="text-xl font-bold mb-2">이화여대 아맛나 식당</div>
            <div className="text-gray-700">
              <div>서울특별시 서대문구 대현동 11-1</div>
              <div>02-1234-5678</div>
              <div>MON-SUN 12:00 PM - 9:00 PM</div>
            </div>
          </div>
          <div className="w-full py-4 rounded-full bg-gray-800 text-center text-white">
            네이버 지도로 길찾기
          </div>
        </div>
      </div>
    </div>
  );
};
