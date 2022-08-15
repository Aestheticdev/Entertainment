import React from 'react'
import Pagination from '@mui/material/Pagination';

function CustomPagination({setPage,numofPages =10}) {
  const handleChange =(page)=>{
    setPage(page);
    window.scroll(0,0);

  };



  return (
    <div
    style={{
        display:'flex',
        justifyContent:'center',
        width:'100%',
        marginTop:10,
    }}
    
    
    >
        <Pagination count={numofPages} onChange ={(e)=>handleChange(e.target.textContent)}/>
    </div>
  )
}

export default CustomPagination