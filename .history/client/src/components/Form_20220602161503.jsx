import React from 'react'

const Form = props => {
  return (
    <div>
        <form>
            <label for="fname">First name:</label><br/>
            <input type="text" id="fname" name="fname" /><br/>
            <label for="lname">Last name:</label><br />
            <input type="text" id="lname" name="lname" />
            <input type="submit" value="Submit"></input>
            <label for="quantity">Quantity (between 1 and 5):</label>
            <input type="number" id="quantity" name="quantity" min="4" max="4"></input>
        </form>
    </div>

  )
}

export default Form