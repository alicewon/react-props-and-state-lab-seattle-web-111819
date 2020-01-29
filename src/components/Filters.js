import React from 'react'

class Filters extends React.Component {


  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type"
          onChange={this.props.onChangeType} >
{/* refers to onChangeType function in App.js */}

            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
          
        </div>

        <div className="field">
          <button 
          onClick={this.props.onFindPetsClick}
          // refers to onFindPetsClick function in App.js
          
          className="ui secondary button">Find pets</button>
        </div>
      </div>
    )
  }
}

export default Filters
