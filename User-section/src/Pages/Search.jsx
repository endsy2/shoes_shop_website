import axios from 'axios';
import React from 'react'
import { useLocation } from 'react-router-dom'

const Search = () => {
    const location = useLocation();
    const queryParam = new URLSearchParams(location.search);
    const searchData = queryParam.get('search');
    const handleSearch=async()=>{
        const data=await axios.get("")
    }
    return (
        <div>
            
        </div>
    )
}

export default Search
