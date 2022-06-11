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
        <h1>Medikamentenbestellung</h1>
        <div className='order-box'>

        <input type="search" name="" id="okhre" value={searchinput} onChange={e => setSearchinput(e.target.value)}/>
        <div className='table-box'>
        <table>
          <thead>
            <tr>
              <th scope='col'>
                Name
              </th>
              <th scope='col'>Menge</th>
              <th scope='col'>Einheit</th>
            </tr>
          </thead>
          <tbody>
            {drugs && drugs.map((x) => {
              return (
                <tr key={x.id}>
                <td>{x.name}</td>
                <td>{x.menge}</td>
                <td>{x.mengenart}</td>
                
                </tr>
              )
            })}
          </tbody>

        </table>
        </div>

        </div>
    </>
    )
}

export default Search