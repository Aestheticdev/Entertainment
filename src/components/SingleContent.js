import React from 'react'
import Badge from '@mui/material/Badge';
import { img_300,unavailable } from '../config/config'
import './SingleContent.css'
function SingleContent({
    id,
    poster,
    title,
    date,
    media_Type,
    vote_average

}) {
  return (
    <div className='media '>
      <Badge badgeContent={vote_average} color={vote_average>6?'primary':'secondary'} />
        <img className='poster' src ={poster? `${img_300}/${poster}` : unavailable }alt={title}/>
        <b className='title'>{title}</b>
        <span className='subtitle'>{media_Type==="tv" ? "Tv Series" :"Movies"}
         <span className='subtitle'>{date}</span>
         </span>
        </div>
  )
}

export default SingleContent