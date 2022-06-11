import React, {useState, useEffect} from 'react'
import DrugAPI from '../api/DrugAPI';

const Search = () => {
  const [searchinput, setSearchinput] = useState("");
  const [drugs, setDrugs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await DrugAPI.get(`/?drugsearch=${searchinput}`)
        setDrugs(result.data)
      } catch (err) {
        console.error(err);
      }
    }
  
    fetchData();

  }, [searchinput])
  
  return (
    <>
        <h1>SearchBar</h1>
        <input type="search" name="" id="" value={searchinput} onChange={e => setSearchinput(e.target.value)}/>
        <table>
          <tr>
            
          </tr>
        </table>
    </>
    )
}

export default Search