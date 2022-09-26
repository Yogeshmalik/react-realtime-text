/*
 * Remember to use the concept of controlled forms
 * https://reactjs.org/docs/forms.html
 * 
 * All information should be populating the text below the form in real-time
 * as you're filling it out
 * 
 * This exercise is adapted from the V School curriculum on vanilla JS forms:
 * https://coursework.vschool.io/travel-form/
 * 
 * All of our challenges and learning resources are open for the public
 * to play around with and learn from at https://coursework.vschool.io
 */

import React from 'react'
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      firstName: '',
      lastName: '',
      age: '',
      gender: '',
      destination: '',
      isVeg: false,
      isNonVeg: false,
      isVegan: false
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target
    type === 'checkbox' ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
  }

  render() {
    return (
      <main>
        <form className="info_out">
          <h1 className='title'>Populating the text below the form in real-time
  as you're filling it out</h1>
          <h2 className='info_out hero'>Enter Information:</h2>
          <br />
          <input name='firstName' value={this.state.firstName} onChange={this.handleChange} placeholder="First Name" /><br />
          <input name='lastName' value={this.state.lastName} onChange={this.handleChange} placeholder="Last Name" /><br />
          <input type="number" name='age' value={this.state.age} onChange={this.handleChange} placeholder="Age" min="0"
            max="150"/><br />
          <div className='radio'>
            <label>
              <input name='gender' type='radio' value='Male' checked={this.state.gender === 'Male'} onChange={this.handleChange} /> Male
            </label>
            <label>
              <input name='gender' type='radio' value='Female' checked={this.state.gender === 'Female'} onChange={this.handleChange} /> Female
            </label>
          </div>
          <br />
          <div className='info_out select radio'>Destination
            {/* select box for location here */}
            <select name='destination' onChange={this.handleChange} value={this.state.destination}>
              <option value="">Please Select</option>
              <option>J & K</option>
              <option>Himachal</option>
              <option>Haryana</option>
              <option>Delhi</option>
              <option>Pune</option>
            </select>
          </div>
          <br />
          <div className='diet'>
            <label>
              <input name='isVeg' checked={this.state.isVeg} type='checkbox' value='Veg' onChange={this.handleChange} /> Veg
            </label>
            <label>
              <input name='isNonVeg' checked={this.state.isNonVeg} type='checkbox' value='NonVeg' onChange={this.handleChange} /> NonVeg
            </label>
            <label>
              <input name='isVegan' checked={this.state.isVegan} type='checkbox' value='NonVeg' onChange={this.handleChange} /> Vegan
            </label>
            {/* check boxes for dietary restrictions here */}
          </div>
          <br />

          {/*<button>Submit</button>*/}
        </form>
        <hr />
        <form className='article'>
          <h2 className='info_out hero'>Entered Information:</h2>
          <p>Your name: {this.state.firstName} {this.state.lastName}{/* First and last name here */}</p>
          <p>Your age: {this.state.age} {this.state.age <= 0 ? null : "Years"}</p>
          <p>Your gender: {this.state.gender}</p>
          <p>Your destination: {this.state.destination} {/* Destination here */}</p>
          <p>
            Your dietary restrictions:
            <p>--Veg: {this.state.isVeg ? "Yes" : "No"}</p>
            <p>--Non-Veg: {this.state.isNonVeg ? "Yes" : "No"}</p>
            <p>--Vegan: {this.state.isVegan ? "Yes" : "No"}</p>
            {/* Dietary restrictions here, comma separated */}
          </p>
        </form>
      </main>
    );
  }

}

export default App;
