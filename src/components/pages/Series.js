import axios from 'axios'
import React from 'react'
import {useState,useEffect} from 'react';
import CustomPagination from '../CustomPagination';
import Geners from '../Geners';
import SingleContent from '../SingleContent';
import './series.css'
import useGenre from '../hooks/useGenre';


function Series() {
const [content, setcontent] = useState([])
const [Page, setPage] = useState(1);
const [numofPages, setnumofPages] = useState();
const [genres ,setgenres] = useState([]);
const [selectedGenres, setselectedGenres] = useState([]);
const genreforURL = useGenre(selectedGenres);

  const fetchseries=async ()=>{
    const {data}=await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${Page}&with_genres=${genreforURL}`);
    setcontent(data.results);
    setnumofPages(data.total_Pages);
  }

useEffect(() => {
  fetchseries();
  // eslint-disable-next-line
}, [Page,genreforURL])


  return (
    <div>
    <span className="pagetitle">Tv Series</span>
    <Geners
    type="tv"
    genres={genres}
    setgenres={setgenres}
    selectedGenres={selectedGenres}
    setselectedGenres={setselectedGenres}
    setpage={setPage}
    />
    <div className="tvseries">
     
    {
         content &&  content.map((c)=> (
          <SingleContent
          key={c.id}
          id={c.id}
          poster={c.poster_path}
          title={c.title||c.name}
          date={c.first_air_date || c.release_date}
          media_Type="tv"
          vote_average={c.vote_average}

          />
         ))
      
         }
    </div>
    <div>
      <CustomPagination setPage={setPage} numofPages={numofPages} />
    </div>
    </div>
  )
}

export default Series