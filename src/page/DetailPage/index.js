import axios from '../../api/axios';
import React, {useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'

export default function DetailPage() {
  const {movieId} =useParams();
  const [movie, setMovie] = useState({});
  useEffect(() => {
   async function fetchData(){
      const request = await axios.get(
        `/movie/${movieId}`
      )
      setMovie(request.data)
    }
    fetchData();
  
  }, [movieId])

  if(!movie) return <div>로딩중..💫</div>;
  

  return <section className='modal_poster_img'>
    <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={`${movieId}`} />
  </section>

}
