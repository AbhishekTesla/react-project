import './App.css';
import Row from './Row';
import Banner from './Banner';
import Navbar from './Navbar';
import requests from './request';
import './Nav.css'



function App() {
  return (
    <div className="App">
   <Navbar />
    <Banner />
    <Row title="Netflix Originals" fetchUrl = {requests.fetchNetflixOriginals} isLargeRow />
    <Row title="Netflix Trendings" fetchUrl = {requests.fetchTrending} />
    <Row title="Netflix Top Rated" fetchUrl = {requests.fetchTopRated} />
    <Row title="Netflix Action Movies" fetchUrl = {requests.fetchActionMovies} />
    <Row title="Netflix Comedy Movies" fetchUrl = {requests.fetchComedyMovies} />
    <Row title="Netflix Horror Movies" fetchUrl = {requests.fetchHorrorMovies} />
  
   
    </div>
  );
}

export default App;
