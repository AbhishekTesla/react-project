import React,{useState,useEffect} from 'react';
import axios from './axios';
import requests from './request';
import './Banner.css';

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(()=>{

        async function fetchData(){
            const request = await axios.get(requests.fetchActionMovies);

            setMovie(request.data.results[Math.floor(Math.random() *request.data.results.length )]);
      

            return request;
        }

        fetchData();

    },[]);
          console.log(movie)



  return(
  <header className="banner"
  style={{
    backgroundSize: "cover",
    backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
    backgroundPosition:"center center",
  }}
  >
    <div className="banner_contents">
        <h1 className="banner_title">{movie?.title || movie?.name || movie?.original_name}</h1>
        <div className="banner_btns">
            <button className="banner_btn"  >Play</button>
            <button className="banner_btn" >My List </button> 
        </div>
       <p className="description">
        {movie?.overview}
        <h4>{movie?.release_date}</h4>
       </p>
    </div>
  </header>
  ) ;
}

export default Banner