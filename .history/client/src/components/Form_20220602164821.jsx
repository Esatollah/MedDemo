import React from 'react'

const Form = props => {
  return (
    <div>
        <form>
            <label for="fname">First name:</label><br/>
            <input type="text" id="fname" name="fname" required/><br/>
            <label for="lname">Last name:</label><br />
            <input type="text" id="lname" name="lname" required />
            <input type="submit" value="Submit"></input><br />
            <label for="quantity">Quantity (between 1 and 5):</label>
            <input type="text" id="pin" name="pin" size="4" maxLength="4" required/>
            <input type="text" id="pin" name="pin" size="6" maxLength={6} required/>
            <textarea name="message" rows="10" cols="30">
            </textarea>
        </form>
    </div>

  )
}

export default Form