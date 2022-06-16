import React,{useState,useEffect, Fragment} from 'react'
import Axios from 'axios'
import TableMinor from '../DataMinor/TableMinor';
import './ViewMinor.css'

function FetchandSearch() {
  const [query,setQuery] = useState();
  const [minors, setMinors] = useState([]);
  
  const keys = ["Minor", "Project_Category","Project_Supervisior","Branch","Batch","Project_Year"];

  const SearchMajor = (data) => {
    if(!query){
      return data;
    }
    else{ 
      return data.filter((item) =>
      keys.some((key) => item[key].toString().includes(query)))
  }}


  const getMinor = () => {
    Axios.get("/api/minor/projects").then((response) => {
      //console.log(response);

      const myMinor = response.data;
  
     
        setMinors(myMinor);
     
    })
  };


  useEffect(() => getMinor(), []);

  console.log(minors);

  return (
    <div >
      <div className='search'>
        <label className='search-label'>Search</label>
      <input
      className="searchMinor"
      placeholder='Search by Title , Project Supervisior, Project Category, Project Year etc'  onChange={(e)=> setQuery(e.target.value)}/>
      </div>
      
      
        <Fragment>
          <TableMinor minors={SearchMajor(minors)}/>
        </Fragment>
    </div>
  )
}

export default FetchandSearch;