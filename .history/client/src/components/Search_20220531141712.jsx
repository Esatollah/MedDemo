import React, {useState} from 'react'

const Search = () => {
  const [searchinput, setSearchinput] = useState("");


  return (
    <>
        SearchBar
        <input type="search" name="" id="" value={searchinput} onChange={e => setSearchinput(e.target.value)}}/>
        <table>
          <tr>
            
          </tr>
        </table>
    </>
    )
}

export default Search