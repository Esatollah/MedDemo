import React, {useState, useEffect} from 'react'
import DrugAPI from '../api/DrugAPI';
import Form from '../components/Form';
// import Cart from './Cart';
import './Search.css'


const Search = () => {

  const [searchinput, setSearchinput] = useState("Metformin");
  const [drugs, setDrugs] = useState([]);
  const [cartitems, setCartitems] = useState([]);

  // add loading screen, maybe with loading while drugs empty
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
    const is_in_cart = cartitems.some(y => {
      if(y.id === x.id)
      {
        return true;
      }

      return false;
    })

    if(is_in_cart) {
      return
    }
    let temp = {...x, anzahl:"1"}
    setCartitems([...cartitems, temp]);
  }

  const handleDelete = (e, x, index) => {
    let temp = [...cartitems]

    temp.splice(index, 1);

    setCartitems(temp);
  }

  const handleCountchange = (e, x, index) => {
    let temps = [...cartitems]
    let temp = {
      ...temps[index],
      anzahl:e.target.value
    }
    temps[index] = temp
    setCartitems(temps);
    
  }

  
  return (
    <>
        <h1>Medikamentenbestellung (Dauermedikation)<button href="/bestellungen"> Back</button></h1>
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
              <th scope='col'></th>
              <th scope='col'>Anzahl</th>
            </tr>
          </thead>
          <tbody>
            {cartitems && cartitems.map((x, index) => {
              if(x.abgabezahl){
              return (
                <tr key={index} className="drug-row" >
                <td>{x.name}</td>
                <td>{x.menge}</td>
                <td>{x.mengenart}</td>
                <td><button onClick={(e) => handleDelete(e,x,index)}>-</button></td>
                <td><select onChange={(e)=>{handleCountchange(e,x,index)}}><option value="1">1</option><option value="2">2</option></select></td>
                </tr>
              )
              }
              return (
                <tr key={index} className="drug-row" >
                <td>{x.name}</td>
                <td>{x.menge}</td>
                <td>{x.mengenart}</td>
                <td><button onClick={(e) => handleDelete(e,x,index)}>-</button></td>
                <td>1</td>
                </tr>
              )
            })}
          </tbody>
        </ table>
        </div>

        <Form cartitems={cartitems} setCartitems={setCartitems}/>
    </>
    )
}

export default Search