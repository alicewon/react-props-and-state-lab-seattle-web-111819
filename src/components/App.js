import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
        pets: [],
        filters: {
        type: 'all'
      }
    }
  }


  fetchPets = () => {
    let endpoint = '/api/pets'

    //if selection is anything other than "all", then find the type that was selected by adding it to the end of the endpoint call
    if (this.state.filters.type !== 'all') {
      endpoint += `?type=${this.state.filters.type}`
    }

    fetch(endpoint)
    .then(res => res.json())
    .then(pets => this.setState({ pets: pets }))
  }

  //selects type that was selected to show on change
  onChangeType = ({ target: {value} }) => {
    this.setState({filters: {...this.state.filters, type: value}})
  }

  onAdoptPet = petId => {
    const pets = this.state.pets.map(p => {
      return p.id === petId ? {...p, isAdopted: true} : p;
    })
    this.setState({ pets: pets })
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters 
                onChangeType={this.onChangeType}
                onFindPetsClick={this.fetchPets}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser 
              pets={this.state.pets}
              onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
