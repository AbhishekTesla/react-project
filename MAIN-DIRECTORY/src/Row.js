import React,{useState,useEffect} from 'react'
import axios from './axios';
import './Row.css';
const baseurl ="https://image.tmdb.org/t/p/original/"

function Row({title,fetchUrl,isLargeRow}) {
  const [movies, setMovies] = useState([]);

  useEffect(()=>{
    async function fetchData (){
      const request = await axios.get(fetchUrl);  // This line means it get URL from fetchUrl and add into last  https://api.themoviedb.org/3/fetchUrl
      setMovies(request.data.results);
      console.log(request);
      return request;
    }

    fetchData();

  },[fetchUrl]);

  return (
    <div className="row">
    <h1>{title}</h1>
    <div className="row_posters">
      {
        movies.map((movie)=>{
          const {name,poster_path,id,original_title,release_date,overview,popularity,backdrop_path} = movie;
          return(
            <div className="container"   >
              
            
            <img className={`row_poster ${isLargeRow && "row_Larger_poster"}`} key={id} src={`${baseurl}${isLargeRow ? poster_path : backdrop_path}`} alt="" />
            <p>{popularity}</p>
           
          
          </div>
          )
          
        })

      }
    </div>
    </div>
  )
}

export default Row