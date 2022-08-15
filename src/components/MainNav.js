import * as React from 'react';
import './MainNav.css';
import {useHistory} from "react-router-dom";
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieIcon from '@mui/icons-material/Movie';
import TvIcon from '@mui/icons-material/Tv';
import SearchIcon from '@mui/icons-material/Search';
import {useEffect} from 'react';





export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState('recents');
  
  const history = useHistory();
  useEffect(() => {
  if(value ===0)history.push('./')
  else if(value ===1)history.push('./Movies')
  else if(value ===2)history.push('./Series')
  else if(value ===3)history.push('./Search')

  
  }, [value,history]);
  

  
  

  return (
    <BottomNavigation  className="Styles "
    showLabels
    value={value}
    style={
      { backgroundColor:"rgb(20,20,20)"
       
  }
  
}
    onChange={(event,newValue) =>
        setValue(newValue)
    }


    >
      <BottomNavigationAction
        style={{ color:"rgb(229,9,20)"}}
        className='Iconslabel'
        label="Trending"
        icon={<WhatshotIcon />}
      />
      <BottomNavigationAction
      style={{ color:"rgb(229,9,20)"}}
      className='Iconslabel'
        label="Movies"
        icon={<MovieIcon  />}
      />
      <BottomNavigationAction
      style={{ color:"rgb(229,9,20)"}}
      className='Iconslabel'
        label="Tv Series"
        icon={<TvIcon  />}
      />
      <BottomNavigationAction
      style={{ color:"rgb(229,9,20)"}}
      className='Iconslabel'
       label="Search"
        icon={<SearchIcon />} />
    </BottomNavigation>
  )};

