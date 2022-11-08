import axios from '../api/axios';
import React, {useEffect, useState} from 'react';
import requests from "../api/requests";
import "./Banner.css"
import styled from 'styled-components';
import MovieModal from './MovieModal';

export default function Banner() {
    const [movie, setMovie] = useState([]);
    const [clicked, setClicked] = useState(false);
    useEffect(() => {
      
        fetchData();
    
      return () => {}
    }, []);
    const fetchData = async ()=> {
        
        const request = await axios.get(requests.fetchNowPlaying)
        
        const movieId = request.data.results[
            Math.floor(Math.random()*request.data.results.length)
        ].id;

        const {data:movieDetail} = await axios.get(`movie/${movieId}`,{
            params:{append_to_response:"videos"},
            
        });
        setMovie(movieDetail);
    

    }

    const truncate = (str,n)=>{
        return str?.length > n ?str.substr(0, n - 1) +"...":str;


    }
    console.log('movie',movie)

    


    if(!clicked) {
        return (
            <header className='banner'
            style={{
                backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
                backgroundPosition:"top center",
                backgroundSize:"cover",
        }} 
            >
            <div className='movie_contents'>
                <h1 className='banner_title'>{movie.title||movie.name||movie.original_name}</h1>
                <div className='banner_buttons'>
                    <button className='banner_button play'onClick={()=>setClicked(true)}>play <i className='icon xi-play'></i></button>
                    <button className='banner_button info'onClick={()=>MovieModal}>More Info<i className=' icon xi-plus'></i></button>
                </div>
                <h1 className='banner_description'>{truncate(movie.overview,100)}</h1>
                
            </div>
            <div className='banner_fadeBottom' />
        
            </header>
        
          );

    }else{
        return(
            <Container>
                <Nav><Button onClick={()=>setClicked(false)}><i className='xi-close'></i></Button></Nav>
                <HomeContainer>
                    <Iframe 
                    src={`https://www.youtube.com/embed/${movie.videos.results[0]?.key}
                    ?controls=0&autoplay=1&loop=1&playlist=${movie.videos.results[0]?.key}`} 
                    title="YouTube video player"
                    width="640"
                    height="360"
                    frameborder="0"
                    allow="autoplay; fullscreen"
                    
                    ></Iframe>
                </HomeContainer>
                
                </Container>


        )
        
    }

  

}

const Container = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    width:100%;
    height:100vh;
    
`

const HomeContainer = styled.div`
width:100%;
height:100%;
z-index:2;
`

const Iframe = styled.iframe`
width:100%;
height: 100%;
z-index:-1;
border:none;

&::after{
    content:'';
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
}

`
const Nav = styled.div`
position: relative;
width:100%;
height:60px;
top:0;
font-size: 20px;
font-weight: 700;
color:#fff;
background-color: #000;
z-index:3;
`

const Button = styled.i`
position: absolute;
top: 15px;
right:  40px;
font-size: 20px;
font-weight: 700;
color:#fff;
z-index:3;

&:hover {
    cursor: pointer;

}
`