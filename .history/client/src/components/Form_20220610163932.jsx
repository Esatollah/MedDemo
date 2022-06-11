import React, {useState}from 'react'
import DrugAPI from '../api/DrugAPI'
import { FormWrap } from '../Styles/FormStyles';
const Form = props => {

    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [vpin, setVpin] = useState('');
    const [vbday, setVbday] = useState('');
    const [anmerkungen, setAnmerkungen] = useState('');
  
    const handleSubmit = (e) => {

        e.preventDefault();
        const formdata = {
            fname,
            lname,
            vpin,
            vbday,
            anmerkungen
        }

        const fetchData = async () =>{
            try {
            await DrugAPI.post("/", {drugs:{...props.cartitems}, ...formdata})
            } catch (error) {
                console.error(error);
            }
    } 

    fetchData();

    setFname('');setLname('');setVpin('');setVbday('');setAnmerkungen('');
    props.setCartitems([]);

}


  return (
    <FormWrap>
        <form onSubmit={(e) =>handleSubmit(e)}>
            <label htmlFor="fname">Vorname</label><br />
            <input className="Names"type="text" value={fname} id="fname" name="fname" onChange={(e)=> setFname(e.target.value)}required/><br/>
            <label htmlFor="lname">Nachname</label><br />
            <input className="Names"type="text" id="lname" value={lname} onChange={(e) => setLname(e.target.value)}name="lname" required /><br/>
            <label htmlFor="pin">Versicherungsnummer  </label> <br/>
            <input className="insurance" type="text" id="pin" value={vpin} 
            onChange={(e) => setVpin(e.target.value)} name="pin" size="4" minLength="4"maxLength="4" required/>
            <input className="insurance" type="text" id="bday" value={vbday} 
            onChange={(e) => setVbday(e.target.value)} name="bday" size="6" minLength={6} maxLength={6} 
            pattern="[0-9]+" required/> <br/>
            <label htmlFor="anmerkungen">Anmerkungen (Nummer, Anzahl etc.)  </label> <br/>
            <textarea id="anmerkungen"value={anmerkungen} onChange={(e) => setAnmerkungen(e.target.value)} name="message" rows="10" cols="30" className='textarea'>
            </textarea> <br/>
            <input type="submit" value="Senden" ></input><br />
        </form>
    </FormWrap>

  )
}

export default Form