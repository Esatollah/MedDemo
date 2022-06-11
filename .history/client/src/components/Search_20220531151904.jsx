import React, {useState, useEffect} from 'react'
import DrugAPI from '../api/DrugAPI';

const Search = () => {
  const [searchinput, setSearchinput] = useState("metf");
  const [drugs, setDrugs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await DrugAPI.get(`/?drugsearch=${searchinput}`)
        setDrugs(result.meds)
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
                <tr key={x.name}>
                <td>{x.name}</td>
                </tr>
              )
            })}
          </tbody>

        </table>
    </>
    )
}

export default Search