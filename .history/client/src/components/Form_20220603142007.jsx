import React, {useState}from 'react'
import DrugAPI from '../api/DrugAPI'

const Form = props => {

    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [vpin, setVpin] = useState('');
    const [vbday, setVbday] = useState('');
    const [anmerkungen, setAnmerkungen] = useState('');
  
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(props.cartitems)
        console.log(e)
        const fetchData = async () =>{
            try {
            const result = await DrugAPI.post("/", props.cartitems)
            console.log("this is the ting")
            console.log(result)    
            } catch (error) {
                
            }
    } 

    fetchData();
}


  return (
    <div>
        <form>
            <label for="fname">Vorname</label><br/>
            <input type="text" value={fname} id="fname" name="fname" onChange={(e)=> setFname(e.target.value)}required/><br/>
            <label for="lname">Nachname</label><br />
            <input type="text" id="lname" value={lname} onChange={(e) => setLname(e.target.value)}name="lname" required />
            <label for="pin">Versicherungsnummer</label>
            <input type="text" id="pin" value={vpin} onChange={(e) => setVpin(e.target.value)} name="pin" size="4" minLength="4"maxLength="4" required/>
            <input type="text" id="bday" value={vbday} onChange={(e) => setVbday(e.target.value)} name="bday" size="6" minLength={6} maxLength={6} required/>
            <textarea value={anmerkungen} onChange={(e) => setAnmerkungen(e.target.value)} name="message" rows="10" cols="30">
            </textarea>
            <input type="submit" value="Submit" onClick={(e) => handleSubmit(e)}></input><br />
        </form>
    </div>

  )
}

export default Form