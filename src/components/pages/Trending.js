import React from 'react'
import axios from 'axios';
import { useEffect,useState } from 'react';
import SingleContent from '../SingleContent';
import './Trending.css';
import CustomPagination from '../CustomPagination';


function Trending() {
 const [Page, setPage] = useState(1);
 const[ Content, setContent] = useState([]);

const fetchtrending = async () =>{
  const { data } = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${Page}`);
   //console.log(data.results);
  setContent(data.results);

}
useEffect(() => {
  fetchtrending();
   // eslint-disable-next-line
}, [Page]);



  return (
    <div >
    <span className="pagetitle" >Trending</span>
    <div className="trending">
      {
         Content &&  Content.map((c)=> 
          <SingleContent 
          key={c.id}
          id={c.id}
          poster={c.poster_path}
          title={c.title||c.name}
          date={c.first_air_date || c.release_date}
          media_Type={c.media_type}
          vote_average={c.vote_average}

          />
         )
      
         }
    </div>
    <div>
      <CustomPagination setPage={setPage} />
    </div>
    </div>

   
  

  );
};

export default Trending