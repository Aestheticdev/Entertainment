import React from 'react'
import { createTheme, ThemeProvider, } from '@mui/material/styles'
import TextField from '@mui/material/TextField';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Button from '@mui/material/Button'
import "./Search.css";
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from "react";
import axios from "axios";
import SingleContent from '../SingleContent';
import CustomPagination from '../CustomPagination';




function Search() {
  const [type, setType] = useState(0);
  const [searchText, setSearchText] = useState("");
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState();

  const darkTheme = createTheme({
    palette: {
      type: "dark",
      primary: {
        main: "#fff",
      },
    },
  });

  const fetchSearch = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=${
          process.env.REACT_APP_API_KEY
        }&language=en-US&query=${searchText}&page=${page}&include_adult=false`
      );
      setContent(data.results);
      setNumOfPages(data.total_pages);
      // console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchSearch();
    // eslint-disable-next-line
  }, [type, page]);
  return (
    <div>
    <ThemeProvider theme={darkTheme}>
      <div className="search">
        <TextField 
        
        InputLabelProps={{
          style: { color: 'red', 
          textColor:'primary'}
        }}
        inputProps={{style: { color: 'red',borderColor:'red'}
      }}
        
          style={{ flex: 1 
                           
          }}
          label="Search"
          variant="filled"
          onChange={(e) => setSearchText(e.target.value)}
        />
        <Button
          onClick={fetchSearch}
          variant="contained"
          style={{ marginLeft: 10 }}
        >
          <SearchIcon fontSize="large"
          color='red' />
        </Button>
      </div>
      <Tabs
        value={type}
        indicatorColor="primary"
        textColor="red"
        onChange={(event, newValue) => {
          setType(newValue);
          setPage(1);
        }}
        style={{ paddingBottom: 5 }}
        aria-label="disabled tabs example"
      >
        <Tab  style={{ width:"50%" }} label="Search Movies" />
        <Tab  style={{ width:"50%"}} label="Search tvseries" />
      </Tabs>
    </ThemeProvider>
    <div className="trending">
      {content &&
        content.map((c) => (
          <SingleContent
            key={c.id}
            id={c.id}
            poster={c.poster_path}
            title={c.title || c.name}
            date={c.first_air_date || c.release_date}
            media_type={type ? "tv" : "movie"}
            vote_average={c.vote_average}
          />
        ))}
      {searchText &&
        !content &&
        (type ? <h2>No Series Found</h2> : <h2>No Movies Found</h2>)}
    </div>
    {numOfPages > 1 && (
      <CustomPagination setPage={setPage} numOfPages={numOfPages} />
    )}
  </div>
);
};

  


export default Search