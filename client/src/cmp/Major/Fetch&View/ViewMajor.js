import React,{useState,useEffect, Fragment} from 'react'
import Axios from 'axios'
import TableMajor from '../DataMajor/TableMajor'
import './ViewMajor.css';

function FetchandSearch() {
  const [query,setQuery] = useState();
  const [majors, setMajors] = useState([]);
  
  const keys = ["Major", "Project_Category","Project_Supervisior","Branch","Batch","Project_Year"];

  const SearchMajor = (data) => {
    if(!query){
      return data;
    }
    else{ 
      return data.filter((item) =>
      keys.some((key) => item[key].toString().includes(query)))
  }}


  const getMajor = () => {
    Axios.get("/api/major/projects").then((response) => {
      //console.log(response);
       const myMajor = response.data;
         setMajors(myMajor);
     
    })
  };


  useEffect(() => getMajor(), []);

  console.log(majors);

  return (
    <div>
      <div className='search'>
        <label className='search-label'>Search</label>
      <input
      className="searchMinor"
      placeholder='Search by Title , Project Supervisior, Project Category, Project Year etc'  onChange={(e)=> setQuery(e.target.value)}/>
      </div>
      
        <Fragment>
          <TableMajor majors={SearchMajor(majors)}/>
        </Fragment>
    </div>
  )
}

export default FetchandSearch;