import React, {useEffect, useState} from 'react'
import { useLocation, useNavigate } from 'react-router'
import axios from '../../api/axios';
import { useDebounce } from '../../hooks/useDebounce';
import './SearchPage.css'

export default function SearchPage() {
  const navigate = useNavigate();
  const [searchResults, setSearchResult] = useState([]);
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  }

  let query = useQuery();
  const searchTerm = query.get("q");
  const debounceSearchTerm = useDebounce(searchTerm, 300);
  console.log(searchTerm)

  useEffect(() => {
    if(debounceSearchTerm) {
      fetchSearchMovie(debounceSearchTerm)
    }
  }, [debounceSearchTerm]);
    const fetchSearchMovie = async (debounceSearchTerm) => {
      try {

        const request = await axios.get(
          `/search/multi?inclide_adult=false&query=${debounceSearchTerm}`
        )

        console.log(request);
        setSearchResult(request.data.results);
        
      } catch (error) {

        alert('오류!')
        console.log("error",error)
      }
    }

    const renderSearchresult = () => {
      return searchResults.length > 0 ? (
        <section className='search-container'>
          {searchResults.map((movie)=> {
            if(movie.backdrop_path !== null && movie.media_type !== 'person') {

              const movieImageUrl = 
              "https://image.tmdb.org/t/p/w500" + movie.backdrop_path
              return(
                <div className='movie' key={movie.id}>
                  <div onClick={()=>navigate(`/${movie.id}`)} className='movie-cloumn-poster'>
                    <img src= {movieImageUrl} alt={movie.name} className="movie-poster"/>


                  </div>
                </div>
              )

            }
          })}

        </section>
      ):(
        <section className='no-result'>
          <div className='no-result-text'>
            <p>
              찾고자하는 "{searchTerm}"에 맞는 영화가 없습니다
            </p>
          </div>

        </section>
      )

        }
  return renderSearchresult();
  
}
