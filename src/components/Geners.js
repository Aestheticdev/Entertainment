import React from 'react'
import axios from 'axios';
import Chip from '@mui/material/Chip';
import{useEffect} from 'react';




function Geners({
  genres,
  setgenres,
  selectedGenres,
  setselectedGenres,
  type,
  setpage
}) {
  

    


    const handleAdd = (genre) => {
        setselectedGenres([...selectedGenres, genre]);
        setgenres(genres.filter((g) => g.id !== genre.id));
    
      };
    
      const handleRemove = (genre) => {
        setselectedGenres(
          selectedGenres.filter((selected) => selected.id !== genre.id)
        );
        setgenres([...genres, genre]);
    
      };
    
      const fetchGenres = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);
        
       setgenres(data.genres);
      };
      //console.log(genres);
    
      useEffect(() => {
        fetchGenres();
        // eslint-disable-next-line
      }, []);
    
      return (
        <div style={{ padding: "6px 0" }}>
          {selectedGenres
          &&selectedGenres.map((genre) => (
            <Chip
              style={{ margin: 2 }}
              label={genre.name}
              key={genre.id}
              color="warning"
              clickable
              size="small"
              onDelete={() => handleRemove(genre)}
            />
          ))}
          {genres && genres.map((genre) => (
            <Chip
              style={{ margin: 2 }}
              label={genre.name}
              key={genre.id}
              clickable
              size="small"
              onClick={() => handleAdd(genre)}
            />
          ))}
    
        </div>
      );
    };



  

export default Geners