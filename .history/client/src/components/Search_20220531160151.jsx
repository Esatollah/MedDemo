import React, {useState, useEffect} from 'react'
import DrugAPI from '../api/DrugAPI';
import './Search.css'
const Search = () => {
  const [searchinput, setSearchinput] = useState("Metformin");
  const [drugs, setDrugs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await DrugAPI.get(`/?drugsearch=${searchinput}`)
        setDrugs(result.data.meds)
      } catch (err) {
        console.error(err);
      }
    }
  
    fetchData();

  }, [searchinput])
  
  return (
    <>
        <h1>SearchBar</h1>
        <input type="search" name="" id="okhre" value={searchinput} onChange={e => setSearchinput(e.target.value)}/>
        <div className='table-box'>
        <table>
          <thead>
            <tr>
              <th scope='col'>
                name
              </th>
            </tr>
          </thead>
          <tbody>
            {drugs && drugs.map((x) => {
              return (
                <tr key={x.id}>
                <td>{x.name}</td>
                </tr>
              )
            })}
          </tbody>

        </table>
        </div>
    </>
    )
}

export default Search