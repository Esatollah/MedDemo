import React from 'react'
import DrugAPI from '../api/DrugAPI'

const Form = props => {
  
    const handleSubmit = () => {
        console.log(Date())
    }


  return (
    <div>
        <form>
            <label for="fname">Vorname</label><br/>
            <input type="text" id="fname" name="fname" required/><br/>
            <label for="lname">Nachname</label><br />
            <input type="text" id="lname" name="lname" required />
            <label for="pin">Versicherungsnummer</label>
            <input type="text" id="pin" name="pin" size="4" minLength="4"maxLength="4" required/>
            <input type="text" id="bday" name="bday" size="6" minLength={6} maxLength={6} required/>
            <textarea name="message" rows="10" cols="30">
            </textarea>
            <input type="submit" value="Submit" onClick={handleSubmit}></input><br />
        </form>
    </div>

  )
}

export default Form