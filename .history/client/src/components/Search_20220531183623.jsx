import React, {useState, useEffect} from 'react'
import DrugAPI from '../api/DrugAPI';
import Cart from './Cart';
import './Search.css'


const Search = () => {
  const [searchinput, setSearchinput] = useState("Metformin");
  const [drugs, setDrugs] = useState([]);
  const [cartitems, setCartitems] = useState([]);

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
  
  const handleDrugClick = () => {
    console.log("click")
  }

  return (
    <>
        <h1>Medikamentenbestellung</h1>
        <div className='order-box'>
<div className='search-box'>
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
                <tr key={x.id} className="drug-row" onClick={() => {handleDrugClick()}}>
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
        <Cart></Cart>

        </div>
    </>
    )
}

export default Search