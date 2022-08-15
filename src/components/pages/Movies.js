import axios from 'axios'
import React from 'react'
import './Movies.css'
import {useEffect,useState} from 'react';
import SingleContent from '../SingleContent';
import CustomPagination from '../CustomPagination';
import Geners from '../Geners';
import useGenre from '../hooks/useGenre';




function Movies() {
  const [Page,setPage] = useState(1);
  const [Content,setContent] = useState([]);
  const [numofPages, setnumofPages] = useState();
  const [genres ,setgenres] = useState([]);
  const [selectedGenres, setselectedGenres] = useState([]);
  const genreforURL = useGenre(selectedGenres);
  
  

  
  
  const fetchMovies = async()=>{
    const {data} =await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${Page}&with_geners=${genreforURL}`);
  
  setContent(data.results);
  setnumofPages(data.total_pages);


  };

 useEffect(() => {
   fetchMovies();
   // eslint-disable-next-line
 }, [Page,genreforURL]);
 

  return (
    <div>
    <span className="pagetitle" >Movies</span>
    <Geners
    genres={genres}
    setgenres={setgenres}
    selectedGenres={selectedGenres}
    setselectedGenres={setselectedGenres}
    type="movie"
    setpage={setPage}

    />
    <div className="trending">
      {
         Content &&  Content.map((c)=> (
          <SingleContent 
          key={c.id}
          id={c.id}
          poster={c.poster_path}
          title={c.title||c.name}
          date={c.first_air_date || c.release_date}
          media_Type="movie"
          vote_average={c.vote_average}

          />
         ))
      
         }
    </div>
      {numofPages>1&&(
      
      <CustomPagination setPage={setPage} numofPages={numofPages}/>
      
      )}


    </div>

  )
}

export default Movies