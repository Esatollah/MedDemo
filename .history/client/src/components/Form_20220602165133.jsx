import React from 'react'

const Form = props => {
  return (
    <div>
        <form>
            <label for="fname">Vorname</label><br/>
            <input type="text" id="fname" name="fname" required/><br/>
            <label for="lname">Nachname</label><br />
            <input type="text" id="lname" name="lname" required />
            <label for="quantity">Quantity (between 1 and 5):</label><br></br>
            <label for="pin">Versicherungsnummer</label>
            <input type="text" id="pin" name="pin" size="4" maxLength="4" required/>
            <input type="text" id="bday" name="bday" size="6" maxLength={6} required/>
            <textarea name="message" rows="10" cols="30">
            </textarea>
            <input type="submit" value="Submit"></input><br />
        </form>
    </div>

  )
}

export default Form