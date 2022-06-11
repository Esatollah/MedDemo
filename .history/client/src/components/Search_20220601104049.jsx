import React, {useState, useEffect} from 'react'
import DrugAPI from '../api/DrugAPI';
// import Cart from './Cart';
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
  
  const handleDrugClick = (e, x) => {
    console.log(x);
    setCartitems([...cartitems, x]);
  }

  const handleDelete = (e, x) => {
    let temp = [...cartitems]
    console.log(x.id)
    let index = temp.findIndex(y => y.id === x.id)
    console.log(index)
    if (index>1) {
      temp.splice(index, 1);
    }

    setCartitems(temp);
  }

  return (
    <>
        <h1>Medikamentenbestellung</h1>
        <div className='order-box'>
<div className='search-box'>
        <input type="search" placeholder="Suche" id="okhre" value={searchinput} onChange={e => setSearchinput(e.target.value)}/>
        <div className='table-box'>
        <table>
          <thead>
            <tr>
              <th scope='col'>
                Name
              </th>
              <th scope='col'>Menge</th>
              <th scope='col'>Einheit</th>
              <th scope='col'></th>
            </tr>
          </thead>
          <tbody>
            {drugs && drugs.map((x) => {
              return (
                <tr key={x.id} className="drug-row" >
                <td className={x.name}>{x.name}</td>
                <td>{x.menge}</td>
                <td>{x.mengenart}</td>
                <td><button onClick={(e) => {handleDrugClick(e, x)}}>+</ button></td>
                </tr>
              )
            })}
          </tbody>

        </table>
</div>
        </div>

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
            {cartitems.map((x) => {
              return (
                <tr key={x.id} className="drug-row" >
                <td>{x.name}</td>
                <td>{x.menge}</td>
                <td>{x.mengenart}</td>
                <td><button onClick={(e) => handleDelete(e,x)}>-</button></td>
                </tr>
              )
            })}
          </tbody>
        </ table>
        </div>
    </>
    )
}

export default Search